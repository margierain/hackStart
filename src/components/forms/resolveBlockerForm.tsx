import React from 'react';
import { useFormik } from 'formik';
import { Theme } from 'template/theme';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, colors, TextField } from '@material-ui/core';

import { fetchClientBlockers_client_blockers as ClientBlocker } from 'lib/graphql/roles/client/generated/fetchClientBlockers';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    padding: theme.spacing(3, 5),
    maxWidth: 720,
    margin: '0 auto',
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  resolveLabel: {
    marginBottom: theme.spacing(1),
  },
  unblockButton: {
    color: theme.palette.common.white,
    width: 150,
    backgroundColor: colors.green[500],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
    '&:disabled': {
      backgroundColor: colors.grey[300],
    },
  },
}));

type ResolveBlockerFormProps = {
  blocker: ClientBlocker | null;
  executeMutation: (id: number, unblockDetails: string) => void;
  loading: boolean;
};

const ResolveBlockerForm = ({
  blocker,
  executeMutation,
  loading,
}: ResolveBlockerFormProps) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      resolveDetail: '',
    },
    onSubmit: values => {
      if (blocker && blocker?.id) {
        executeMutation(blocker.id, values.resolveDetail);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.content}>
        <Typography align="left" variant="subtitle2">
          <strong>Details:</strong> {blocker && blocker.details}
        </Typography>
      </div>
      <div className={classes.content}>
        <Typography
          align="left"
          variant="subtitle2"
          className={classes.resolveLabel}
        >
          Details to resolve the blocker
        </Typography>

        <TextField
          id="outlined-textarea"
          name="resolveDetail"
          multiline
          rows="6"
          placeholder="Please add instructions here to resolve the blocker mentioned above."
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.resolveDetail}
        />
      </div>
      <div className={classes.actions}>
        <Button
          type="submit"
          className={classes.unblockButton}
          disabled={
            (formik.values.resolveDetail ? false : true) ||
            formik.isSubmitting ||
            loading
          }
        >
          UNBLOCK
        </Button>
      </div>
    </form>
  );
};

export default ResolveBlockerForm;
