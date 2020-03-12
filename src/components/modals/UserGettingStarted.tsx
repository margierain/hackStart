import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import { ModalProps } from './types';
import Modal from './Modal';
import { Grid, Link, Paper, Typography, colors } from '@material-ui/core';
const useStyles = makeStyles<Theme>(theme => ({
  content: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(4),
    maxWidth: '100%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(0),
    },
  },
  product: {
    overflow: 'visible',
    position: 'relative',
    padding: theme.spacing(5, 3),
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
    },
  },
  gridItem: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      maxWidth: '33.333333%',
      flexBasis: '33.333333%',
    },
  },
  gridContainer: {
    width: '100%',
  },
  selectedProduct: {
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
    [theme.breakpoints.down('sm')]: {
      top: 24,
    },
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(1),
      left: theme.spacing(1),
      height: 35,
      width: 35,
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  options: {
    lineHeight: '26px',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '20px',
      marginTop: theme.spacing(1),
      fontSize: 10,
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 55,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 40,
      fontSize: 12,
      fontWeight: 500,
    },
  },
  recommended: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: `${theme.palette.common.white} !important`,
    },
  },
  contact: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2, 0),
      fontSize: 12,
    },
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
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
    value: 'candidate',
    title: 'Developer',
    description:
      'Join GitStart to accelerate your career, work on challenging problems, and find dream opportunities.',
    img: '/template/images/products/product_freelancer.svg',
  },
  {
    value: 'company',
    title: 'Company',
    description:
      'Utilize GitStart to accelerate software development and hire stellar developers!',
    img: '/template/images/products/product_enterprise.svg',
  },
  {
    value: 'agency',
    title: 'Agency',
    description:
      'Partner with GitStart to accelerate existing projects and utilize excess capacity',
    img: '/template/images/products/product_agency--outlined.svg',
  },
];

export function UserGettingStartedModal({
  open,
  onClose,
}: ModalProps & {
  onClose: (ev: any, reason?: any) => void;
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState('');

  const handleChange = (
    _: any,
    option: { value: any; title?: string; description?: string }
  ) => {
    setSelected(option.value);
    setTimeout(() => onClose(option.value), 2000);
  };

  return (
    <Modal
      open={open}
      heading="Welcome To GitStart!"
      subHeading="Select The Profile to create your GitStart account."
    >
      <div className={classes.content}>
        <Grid container spacing={4}>
          {userProfileOptions.map((option, i) => (
            <Grid item className={classes.gridItem} xs={12} key={i}>
              <Paper
                className={clsx(classes.option, {
                  [classes.product]: true,
                  [classes.selectedProduct]: selected === option.value,
                  [classes.recommended]: selected === option.value,
                })}
                key={option.value}
                elevation={1}
                onClick={(event: any) => handleChange(event, option)}
              >
                <img alt="Product" className={classes.image} src={option.img} />
                <Typography
                  gutterBottom
                  variant="overline"
                  className={classes.title}
                >
                  {option.title}
                </Typography>
                <Typography className={classes.options} variant="subtitle2">
                  {option.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography
          align="center"
          className={classes.contact}
          variant="subtitle2"
        >
          Got questions or need to talk first?{' '}
          <Link color="secondary" href="mailto:contact@gitstart.com">
            Chat With us
          </Link>{' '}
          and we will get back right away!
        </Typography>
      </div>
    </Modal>
  );
}
