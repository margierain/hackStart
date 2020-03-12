import React from 'react';
import { Theme } from 'template/theme';
import { makeStyles } from '@material-ui/styles';
import { ModalProps } from './types';
import ResolveBlockerForm from 'components/forms/resolveBlockerForm';
import { fetchClientBlockers_client_blockers as ClientBlocker } from 'lib/graphql/roles/client/generated/fetchClientBlockers';
import { useMutation } from 'lib/client/utils';
import { useAuth } from 'components/auth';
import { UNBLOCK_CLIENT_BLOCKER } from 'lib/graphql/roles/client/mutations';
import {
  unblockClientBlockersVariables,
  unblockClientBlockers,
} from 'lib/graphql/roles/client/generated/unblockClientBlockers';
import Error500 from 'template/views/Error500';
import Modal from './Modal';

const useStyles = makeStyles<Theme>(theme => ({
  header: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1.5),
  },
}));

type ResolveBlockerModalProps = ModalProps & {
  blocker: ClientBlocker | null;
  onClose: (ev: any, reason?: any) => void;
};

export function ResolveBlockerModal({
  open,
  onClose,
  blocker,
  className = undefined,
  ...rest
}: ResolveBlockerModalProps) {
  const classes = useStyles();

  const ctx = useAuth('client', true);

  const { issueMutation, error, loading } = useMutation<
    unblockClientBlockers,
    unblockClientBlockersVariables
  >({
    ctx,
    role: 'client',
    mutation: UNBLOCK_CLIENT_BLOCKER,
    setData: data => onClose(data, 'close'),
  });

  const executeMutation = (id: number, unblockDetails: string): void => {
    issueMutation({
      id,
      unblockDetails,
    });
  };

  const handleClose = (ev: any, reason: any) => {
    onClose(ev, reason);
  };

  return (
    <Modal
      onClose={handleClose}
      open={open}
      maxWidth="sm"
      heading="Resolve Blocker"
    >
      {error && <Error500 error={error} />}
      <div {...rest}>
        <div className={classes.header}></div>

        <ResolveBlockerForm
          blocker={blocker}
          executeMutation={executeMutation}
          loading={loading}
        />
      </div>
    </Modal>
  );
}
