import React, { ErrorInfo, ReactNode } from 'react';
import App from 'next/app';
import Head from 'next/head';
import TemplateApp from 'template/App';
import { AuthProvider } from 'components/auth';
import { RedirectCallbackParam } from 'lib/types';
import getConfig from 'next/config';
import Url from 'url';
const { publicRuntimeConfig } = getConfig();

import { init, captureException } from 'lib/sentry';

const { Sentry } = init(process.env.SENTRY_RELEASE || '1');

// A function that routes the user to the right place
// after login

const onRedirectCallback = (appState: RedirectCallbackParam) => {
  console.log('handling redirect callback at root: ', appState);
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

class MainApp extends App<{
  pageUrl?: string | null;
  pageProps: Object;
  Component: ReactNode;
}> {
  state = {
    hasError: false,
    errorEventId: undefined,
  };

  static getInitialProps: typeof App.getInitialProps = async ({
    Component,
    ctx,
  }) => {
    let pageProps = {};
    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps, pageUrl: ctx.req ? ctx.req.url : null };
    } catch (error) {
      // Capture errors that happen during a page's getInitialProps.
      // This will work on both client and server sides.
      const errorEventId = captureException(error, ctx);
      return {
        hasError: true,
        pageProps,
        errorEventId,
      };
    }
  };

  static getDerivedStateFromProps(
    props: { hasError: any; errorEventId: any },
    state: { hasError: any; errorEventId: any }
  ) {
    // If there was an error generated within getInitialProps, and we haven't
    // yet seen an error, we add it to this.state here
    return {
      hasError: props.hasError || state.hasError || false,
      errorEventId: props.errorEventId || state.errorEventId || undefined,
    };
  }

  static getDerivedStateFromError() {
    // React Error Boundary here allows us to set state flagging the error (and
    // later render a fallback UI).
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorEventId = captureException(error, { errorInfo });

    // Store the event id at this point as we don't have access to it within
    // `getDerivedStateFromError`.
    this.setState({ errorEventId });
  }

  render() {
    const { Component, pageProps, pageUrl } = this.props;
    let parsedUrl = pageUrl ? Url.parse(pageUrl) : null;
    if (typeof window !== 'undefined') {
      parsedUrl = Url.parse(window.location.href);
    }
    const URL = 'https://app.gitstart.com/';

    return (
      <div>
        <Head>
          <meta
            property="og:title"
            content="accelerating engineering teams remotely"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Gitstart is a resourcing and training platform for remote developers that helps engineering teams accelerate their velocity"
          />
          <meta property="og:url" content={URL} />
          <meta property="og:image" content={`${URL}static/favicon.ico`} />
        </Head>
        <AuthProvider
          domain={publicRuntimeConfig.AUTH0_DOMAIN || ''}
          client_id={publicRuntimeConfig.AUTH0_CLIENTID || ''}
          redirect_uri={
            parsedUrl
              ? `${parsedUrl.protocol}//${parsedUrl.host}`
              : publicRuntimeConfig.AUTH0_REDIRECT
          }
          initialState={{}}
          onRedirectCallback={onRedirectCallback}
        >
          <TemplateApp>
            {this.state.hasError ? (
              <section>
                <h1>There was an error!</h1>
                <p>
                  <a
                    href="#"
                    onClick={() =>
                      (Sentry as any).showReportDialog({
                        eventId: this.state.errorEventId,
                      })
                    }
                  >
                    📣 Report this error
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    onClick={() => {
                      window.location.reload(true);
                    }}
                  >
                    Or, try reloading the page
                  </a>
                </p>
              </section>
            ) : (
              <Component {...pageProps} />
            )}
          </TemplateApp>
        </AuthProvider>
      </div>
    );
  }
}

export default MainApp;
