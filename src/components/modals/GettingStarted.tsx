import React, { useState } from 'react';
import clsx from 'clsx';
import { Theme } from 'template/theme';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, colors, Radio } from '@material-ui/core';
import { ModalProps } from './types';
import Modal from './Modal';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: 'auto',
    height: '100%',
  },
  content: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    maxWidth: 720,
    margin: '0 auto',
  },
  product: {
    overflow: 'visible',
    position: 'relative',
    padding: theme.spacing(5, 3),
    cursor: 'pointer',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: -24,
    left: theme.spacing(3),
    height: 48,
    width: 48,
    fontSize: 24,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  options: {
    lineHeight: '26px',
  },
  recommended: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: `${theme.palette.common.white} !important`,
    },
  },
  contact: {
    margin: theme.spacing(3, 0),
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    zIndex: 100,
    position: 'sticky',
    bottom: 0,
  },
  startButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

const userProfileOptions = [
  {
    value: 'developer',
    title: "I'm a developer",
    description: 'I want to join GitStart Developer Network.',
  },
  {
    value: 'client',
    title: 'I’m a customer.',
    description: "I'm looking to accelerate software development on my project",
  },
  {
    value: 'agency',
    title: 'I’m an agency.',
    description:
      'I want to partner with GitStart to supply developers and accelerate my existing customers',
  },
];

export function GettingStartedModal({
  open,
  onClose,
  className = undefined,
  ...rest
}: ModalProps) {
  const classes = useStyles();
  const [selected, setSelected] = useState(userProfileOptions[1].value);

  const handleChange = (
    _: any,
    option: { value: any; title?: string; description?: string }
  ) => {
    setSelected(option.value);
  };

  return (
    <Modal
      maxWidth="lg"
      onClose={onClose}
      open={open}
      heading=" Welcome to GitStart! Select a profile below to setup your account"
      subHeading="GitStart enables tech teams to accelerate software development and
    work with the best talent pool across the globe. Select weather you
    want to use GitStart as a company, developer or a partner agency"
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <div className={classes.content}>
          {userProfileOptions.map(option => (
            <div
              className={clsx(classes.option, {
                [classes.selectedOption]: selected === option.value,
              })}
              key={option.value}
            >
              <Radio
                checked={selected === option.value}
                className={classes.optionRadio}
                color="primary"
                onClick={(event: any) => handleChange(event, option)}
              />
              <div className={classes.optionDetails}>
                <Typography gutterBottom variant="h5">
                  {option.title}
                </Typography>
                <Typography variant="body1">{option.description}</Typography>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.startButton}
            onClick={onClose}
            variant="contained"
          >
            Create Account
          </Button>
        </div>
      </div>
    </Modal>
  );
}
