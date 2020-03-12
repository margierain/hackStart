/* eslint-disable react/no-multi-comp */
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Typography,
} from '@material-ui/core';
import { Theme } from 'template/theme';
import { fetchClientBlockers_client_blockers as ClientBlocker } from 'lib/graphql/roles/client/generated/fetchClientBlockers';
import { ResolveBlockerModal } from 'components/modals/ResolveBlocker';
import Error500 from 'template/views/Error500';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  content: {
    padding: 0,
    paddingBottom: '0 !important',
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
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
  clientId: string;
  blockers?: ClientBlocker[];
  fetchQuery?: () => void;
  error?: Error | null;
};

const isInReview = (status: string): boolean => status === 'review';

const BlockersCard = (props: Props) => {
  const {
    clientId,
    headerText,
    className = undefined,
    blockers,
    fetchQuery,
    error,
    ...rest
  } = props;

  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [resolveblocker, setResolveBlocker] = useState<ClientBlocker | null>(
    null
  );

  const openModal = (blocker: ClientBlocker): void => {
    setResolveBlocker(blocker);
    setOpen(true);
  };

  const onModalClose = (): void => {
    setOpen(false);
    if (fetchQuery) fetchQuery();
  };

  if (!blockers || blockers.length === 0) {
    return <div></div>;
  }

  if (error) {
    return (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent className={classes.content}>
          <Error500 error={error} />
        </CardContent>
      </Card>
    );
  }

  const orderedBlockers = blockers.sort((a, b) => {
    return a.status > b.status ? 1 : a.status < b.status ? -1 : 0;
  });

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title={headerText} />
      <Divider />
      <CardContent className={classes.content}>
        <List className={classes.list}>
          {orderedBlockers.map((blocker, i) => (
            <ListItem divider={i < orderedBlockers.length - 1} key={i}>
              <ListItemIcon>
                <Radio
                  checked={isInReview(blocker.status)}
                  onChange={() => openModal(blocker)}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  className={clsx({
                    [classes.done]: isInReview(blocker.status),
                  })}
                  variant="body1"
                >
                  <InputLabel
                    className={clsx({
                      [classes.done]: isInReview(blocker.status),
                      [classes.displayInline]: true,
                    })}
                  >
                    {blocker.summary}
                  </InputLabel>
                </Typography>
              </ListItemText>
              {!isInReview(blocker.status) && (
                <Button
                  color="primary"
                  onClick={() => openModal(blocker)}
                  variant="outlined"
                >
                  Resolve
                </Button>
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>
      <ResolveBlockerModal
        onClose={onModalClose}
        open={open}
        blocker={resolveblocker}
      />
    </Card>
  );
};

export default BlockersCard;
