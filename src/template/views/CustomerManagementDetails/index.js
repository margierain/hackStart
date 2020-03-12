import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Container, Tabs, Tab, Divider, colors } from '@material-ui/core';
import useRouter from 'template/utils/useRouter';
import Page from 'template/components/Page';
import Header from './Header';
import Summary from './Summary';
import Invoices from './Invoices';
import Logs from './Logs';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

function CustomerManagementDetails({ params }) {
  const classes = useStyles();
  let { id, tab: currentTab } = params;
  const router = useRouter();
  const tabs = [
    { value: 'summary', label: 'Summary' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'logs', label: 'Logs' },
  ];

  const handleTabsChange = (event, value) => {
    router.push(value);
  };

  if (!currentTab || !tabs.find(tab => tab.value === currentTab)) {
    currentTab = tabs[0].value;
  }

  return (
    <Page className={classes.root} title="Customer Management Details">
      <Container maxWidth={false}>
        <Header />
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={currentTab}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {currentTab === 'summary' && <Summary />}
          {currentTab === 'invoices' && <Invoices />}
          {currentTab === 'logs' && <Logs />}
        </div>
      </Container>
    </Page>
  );
}

CustomerManagementDetails.propTypes = {};

export default CustomerManagementDetails;
