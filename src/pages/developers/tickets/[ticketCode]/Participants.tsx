import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  colors,
} from '@material-ui/core';

import getInitials from 'template/utils/getInitials';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    marginTop: theme.spacing(5),
  },
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
  actions: {
    backgroundColor: colors.grey[50],
  },
}));

type Props = {
  participants: any[];
};

const Participants: React.FC<Props> = (props: Props) => {
  const { participants } = props;
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <CardHeader
        className={classes.header}
        title="Reviewers & Other Developers"
        titleTypographyProps={{
          variant: 'overline',
        }}
      />
      <CardContent className={classes.content}>
        <List>
          {participants.map((participant, ind) => (
            <ListItem disableGutters key={ind}>
              <ListItemAvatar>
                <Avatar alt="Author">
                  {getInitials(participant!.firstName)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${participant!.firstName} ${participant!.lastName}`}
                primaryTypographyProps={{ variant: 'h6' }}
                secondary={participant!.participantType}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions className={classes.actions}>
        {/* <Button className={classes.manageButton}>See all developers</Button> */}
      </CardActions>
    </Card>
  );
};

export default Participants;
