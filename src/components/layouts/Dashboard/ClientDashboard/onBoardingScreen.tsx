import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, DialogContent } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Theme } from 'template/theme';
import { OnBoardingScreenProps } from './types';
import getConfig from 'next/config';
import { useAuth } from 'components/auth';
import { useQuery } from 'lib/client/utils';
import { FETCH_USER_PROFILE as query } from 'lib/graphql/roles/client/queries';
import {
  fetchUserProfile as QueryType,
  fetchUserProfileVariables as QueryVariables,
} from 'lib/graphql/roles/user/generated/fetchUserProfile';
import Modal from 'components/modals/Modal';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
  content: {
    paddingBottom: theme.spacing(2),
  },
  dialogContent: {
    height: 600,
    overflow: 'hidden',
    padding: 0,
  },
}));

const { publicRuntimeConfig } = getConfig();

const OnBoardingScreen = (props: OnBoardingScreenProps) => {
  const {
    displayButton,
    displayMessage,
    className = '',
    userData = {},
    clientId = '',
    ...rest
  } = props;
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const classes = useStyles();
  const [name, setName] = useState<string | null | undefined>('');

  const ctx = useAuth('client', true);

  useQuery<QueryType, QueryVariables>({
    ctx,
    query,
    role: 'client',
    variables: {
      userId: ctx.user?.id || 0,
    },
    setData: data => setName(data?.users[0].firstName),
  });

  const handleClick = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const url = publicRuntimeConfig.CALENDLY_ONBOARDING_LINK;

  const handleEntered = () => {
    let prefill = userData || {};
    //@ts-ignore
    window.Calendly.initInlineWidget({
      url,
      prefill,
      parentElement: document.getElementById('calendly-embed'),
      utm: {
        utmSource: clientId || '',
      },
    });
  };

  return (
    <div {...rest} className={clsx(classes[className])}>
      <div className={classes.title}>
        <Typography variant="h3">Welcome to GitStart! {name}</Typography>
      </div>
      {displayMessage && (
        <div className={classes.content}>{props.children}</div>
      )}
      {displayButton && (
        <Button
          color="default"
          variant="contained"
          startIcon={<AccessTimeIcon />}
          onClick={handleClick}
        >
          SCHEDULE ON-BOARDING
        </Button>
      )}
      <Modal
        onClose={handleClose}
        aria-labelledby="calendly-modal"
        open={dialogOpen}
        onEntered={handleEntered}
        maxWidth="sm"
      >
        <DialogContent
          id="calendly-embed"
          className={classes.dialogContent}
        ></DialogContent>
      </Modal>
    </div>
  );
};

export default OnBoardingScreen;
