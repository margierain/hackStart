import React from 'react';
import { Theme } from 'template/theme';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Grid, colors } from '@material-ui/core';

import Label from 'template/components/Label';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  overline: {
    marginTop: theme.spacing(1),
  },
}));

type Statistic = {
  title: string;
  value: string;
  label?: string;
};

type Props = {
  className?: string;
  statistics: [Statistic, Statistic, Statistic, Statistic];
};

const Info: React.FC<{ statistic: Statistic }> = ({ statistic }) => {
  const classes = useStyles();
  if (statistic.label) {
    return (
      <Grid className={classes.item} item md={3} sm={6} xs={12}>
        <div className={classes.titleWrapper}>
          <Typography component="span" variant="h2">
            {statistic.value}
          </Typography>
          <Label className={classes.label} color={colors.green[600]}>
            {statistic.label}
          </Label>
        </div>
        <Typography className={classes.overline} variant="overline">
          {statistic.title}
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid className={classes.item} item md={3} sm={6} xs={12}>
      <Typography variant="h2">{statistic.value}</Typography>
      <Typography className={classes.overline} variant="overline">
        {statistic.title}
      </Typography>
    </Grid>
  );
};

const InfoBar: React.FC<Props> = props => {
  const { className = undefined, statistics, ...rest } = props;

  const classes = useStyles();

  if (!statistics) {
    return null;
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="center" container justify="space-between">
        {statistics.map(stat => (
          <Info key={stat.title} statistic={stat} />
        ))}
      </Grid>
    </Card>
  );
};

export default InfoBar;
