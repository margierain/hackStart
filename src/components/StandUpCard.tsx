/* eslint-disable react/no-multi-comp */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  InputLabel,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardOutlined';
import Label from 'template/components/Label';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  addIcon: {
    marginRight: theme.spacing(1),
  },
  done: {
    textDecoration: 'line-through',
    color: theme.palette.text.secondary,
  },
  bold: {
    fontWeight: 'bold',
  },
  displayInline: {
    display: 'inline-block',
  },
  labelSpacing: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  className?: string;
  headerText: string;
  openAllLinkText?: string;
  updates: {
    eta: string;
    resourceLink: string | null;
    updateText: string;
    resourceCode: string;
    done: boolean;
  }[];
};

const renderOpenAll = (openAllLinkText: null | string) => {
  return openAllLinkText === null ? (
    ''
  ) : (
    <Button color="primary" size="small">
      {openAllLinkText}
      <IconButton edge="end" size="small" color="primary">
        <ArrowForwardIcon />
      </IconButton>
    </Button>
  );
};

const StandUpCard: React.FC<Props> = props => {
  const {
    updates,
    headerText,
    openAllLinkText = null,
    className = undefined,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader action={renderOpenAll(openAllLinkText)} title={headerText} />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {updates &&
            updates.map((update, i) => (
              <ListItem divider={i < updates.length - 1} key={i}>
                <ListItemIcon>
                  <Radio checked={update.done} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    className={clsx({
                      [classes.done]: update.done,
                    })}
                    variant="body1"
                  >
                    <InputLabel
                      className={clsx({
                        [classes.done]: update.done,
                        [classes.bold]: true,
                        [classes.displayInline]: true,
                      })}
                    >
                      {update.resourceCode}
                    </InputLabel>{' '}
                    {update.updateText}
                  </Typography>
                </ListItemText>
                {update.done ? (
                  ''
                ) : (
                  <Label color="#757575" className={classes.labelSpacing}>
                    {update.eta}
                  </Label>
                )}

                <Tooltip title="View">
                  <IconButton
                    edge="end"
                    size="small"
                    href={update.resourceLink as string}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default StandUpCard;
