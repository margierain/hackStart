import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Typography,
  colors,
  Theme,
  Grid,
  Tabs,
  Tab,
  Divider,
  Box,
} from '@material-ui/core';
import { useMutation } from 'lib/client/utils';
import { INSERT_NEW_CLIENT_TRANSACTION } from 'lib/graphql/roles/client/mutations';
import {
  insertNewClientTransaction,
  insertNewClientTransactionVariables,
} from 'lib/graphql/roles/client/generated/insertNewClientTransaction';
import { useAuth } from 'components/auth';
import {
  client_transaction_status_enum,
  client_transactions_insert_input,
  client_transaction_types_enum,
} from 'lib/graphql/roles/client/generated/globalTypes';
import uuid from 'uuid/v4';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    padding: theme.spacing(1),
    maxWidth: 700,
    margin: '0 auto',
  },
  actions: {
    padding: theme.spacing(2),
    maxWidth: 700,
    margin: '0 auto',
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  bankTransferButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

type Props = {
  clientId: string;
  costInUSD: number;
  costInCredits: number;
  onSuccessful: () => void;
  setError: (error: Error | null) => void;
  setLoading: (loading: boolean) => void;
};

type BankProperties = {
  payeeName: string;
  reference: string;
  rate: number;
  bankName: string;
  accountNumber: string;
  swiftCode: string;
  bankAddress: string;
};

type BankDetails = {
  countryNickName: 'USA' | 'HONG KONG' | 'EU' | 'UK';
  currencyCode: '$' | '€' | '‎£';
  currencyCodeDesc: 'USD' | 'HKD' | 'EU' | 'GBP';
  transactionType: client_transaction_types_enum;
  bankProperties: BankProperties;
};

const bankDetails: BankDetails[] = [
  {
    countryNickName: 'USA',
    currencyCode: '$',
    currencyCodeDesc: 'USD',
    transactionType: client_transaction_types_enum.us_bank,
    bankProperties: {
      payeeName: 'MURCUL LIMITED',
      reference: 'Coherent',
      rate: 1,
      bankName: 'USA BANK',
      accountNumber: '023-595747-838',
      swiftCode: 'Swift code',
      bankAddress: 'Address',
    },
  },
  {
    countryNickName: 'HONG KONG',
    currencyCode: '$',
    currencyCodeDesc: 'HKD',
    transactionType: client_transaction_types_enum.hk_bank,
    bankProperties: {
      payeeName: 'MURCUL LIMITED',
      reference: 'Coherent',
      rate: 7.78,
      bankName: 'HK BANK',
      accountNumber: '023-595747-838',
      swiftCode: 'Swift code',
      bankAddress: 'Address',
    },
  },
  {
    countryNickName: 'EU',
    currencyCode: '€',
    currencyCodeDesc: 'EU',
    transactionType: client_transaction_types_enum.eu_bank,
    bankProperties: {
      payeeName: 'MURCUL LIMITED',
      reference: 'Coherent',
      rate: 0.88,
      bankName: 'EU BANK',
      accountNumber: '023-595747-838',
      swiftCode: 'Swift code',
      bankAddress: 'Address',
    },
  },
  {
    countryNickName: 'UK',
    currencyCode: '‎£',
    currencyCodeDesc: 'GBP',
    transactionType: client_transaction_types_enum.gb_bank,
    bankProperties: {
      payeeName: 'MURCUL LIMITED',
      reference: 'Coherent',
      rate: 0.75,
      bankName: 'UK BANK',
      accountNumber: '023-595747-838',
      swiftCode: 'Swift code',
      bankAddress: 'Address',
    },
  },
];

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const BankTransfer: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [tab, switchTab] = useState(client_transaction_types_enum.hk_bank);
  const [disableBtn, setDisableBtn] = useState(false);

  const {
    costInUSD,
    costInCredits,
    setError,
    setLoading,
    onSuccessful,
    clientId,
  } = props;

  const getTransactionVariables = (
    status: client_transaction_status_enum
  ): client_transactions_insert_input => {
    return {
      costInUSD,
      costInCredits,
      clientId,
      status,
      channelType: tab,
      transactedAt: new Date().toJSON(),
      invoiceCode: `INV-${uuid()}`,
    };
  };

  const ctx = useAuth('client', false);

  const { issueMutation } = useMutation<
    insertNewClientTransaction,
    insertNewClientTransactionVariables
  >({
    ctx,
    role: 'client',
    mutation: INSERT_NEW_CLIENT_TRANSACTION,
    defaultVariables: {
      transactions: [],
    },
    setError: error => {
      setDisableBtn(false);
      setError(error);
    },
    setLoading,
    setData: () => {
      setDisableBtn(false);
      onSuccessful();
    },
  });

  const insertTransaction = (transaction: client_transactions_insert_input) => {
    setDisableBtn(true);

    issueMutation({
      transactions: [transaction],
    });
  };

  const initiateTransfer = () => {
    insertTransaction(
      getTransactionVariables(client_transaction_status_enum.in_progress)
    );
  };
  const transferLater = () => {
    insertTransaction(
      getTransactionVariables(client_transaction_status_enum.pending)
    );
  };

  const handleChange = (_e: any, value: any) => switchTab(value);
  return (
    <>
      <div className={classes.content}>
        <Tabs value={tab} onChange={handleChange} aria-label="Ticket">
          {bankDetails.map(bank => (
            <Tab
              key={bank.transactionType}
              label={bank.countryNickName}
              value={bank.transactionType}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        {bankDetails.map(
          ({
            bankProperties,
            transactionType,
            currencyCode,
            currencyCodeDesc,
          }) => (
            <TabPanel value={tab} index={transactionType} key={transactionType}>
              <Grid
                className={classes.marginTop}
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                      PAYEE NAME
                    </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                      {bankProperties.payeeName}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                      USE THIS REFERENCE
                    </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                      {bankProperties.reference}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                className={classes.marginTop}
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                      AMOUNT TO SEND
                    </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                      {`${currencyCode}${costInUSD *
                        bankProperties.rate} ${currencyCodeDesc}`}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                      BANK NAME
                    </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                      {bankProperties.bankName}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                className={classes.marginTop}
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                      ACCOUNT NUMBER
                    </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                      {bankProperties.accountNumber}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                      SWIFT CODE
                    </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                      {bankProperties.swiftCode}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                className={classes.marginTop}
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                      BANK ADDRESS
                    </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                      {bankProperties.bankAddress}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
          )
        )}
      </div>
      <div className={classes.actions}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Button
              onClick={transferLater}
              variant="contained"
              disabled={disableBtn}
            >
              I WILL TRANSFER LATER
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={disableBtn}
              className={classes.bankTransferButton}
              onClick={initiateTransfer}
              variant="contained"
            >
              I HAVE INITIATED TRANSFER
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BankTransfer;
