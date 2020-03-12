import React from 'react';
import RouterLink from 'template/utils/link';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Avatar,
} from '@material-ui/core';
import Label from 'template/components/Label';

const useStyles = makeStyles(theme => ({
  root: {},
  media: {
    height: 125,
  },
  content: {
    paddingTop: 0,
  },
  avatarContainer: {
    marginTop: -32,
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    height: 64,
    width: 64,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: theme.palette.common.white,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function SubscriberCard({ subscriber, className = undefined, ...rest }) {
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardMedia className={classes.media} image={subscriber.cover} />
      <CardContent className={classes.content}>
        <div className={classes.avatarContainer}>
          <Avatar
            alt="Subscriber"
            className={classes.avatar}
            component={RouterLink}
            src={subscriber.avatar}
            href="/profile/1/timeline"
          />
        </div>
        <Typography
          align="center"
          component={RouterLink}
          display="block"
          href="/profile/1/timeline"
          variant="h6"
        >
          {subscriber.name}
        </Typography>
        <Typography align="center" variant="body2">
          {subscriber.common_connections} connections in common
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={1}>
          {subscriber.labels.map(label => (
            <Grid item key={label}>
              <Label variant="outlined">{label}</Label>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

SubscriberCard.propTypes = {
  className: PropTypes.string,
  subscriber: PropTypes.object.isRequired,
};

export default SubscriberCard;
