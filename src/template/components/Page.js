/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import useRouter from 'template/utils/useRouter';
import PropTypes from 'prop-types';
function Page({ title, children, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    /*
    const {
      NODE_ENV,
      REACT_APP_GA_MEASUREMENT_ID: GA_MEASUREMENT_ID,
    } = process.env;

    if (NODE_ENV !== 'production') {
      return;
    }

    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: router.pathname,
        page_name: title,
      });
    }
    */
    // eslint-disable-next-line
  }, []);

  return <div {...rest}>{children}</div>;
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
