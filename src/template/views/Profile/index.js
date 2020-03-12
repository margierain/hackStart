import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Container, Tabs, Tab, Divider, colors } from '@material-ui/core';
import Page from 'template/components/Page';
import useRouter from 'template/utils/useRouter';
import Header from './Header';
import Timeline from './Timeline';
import Connections from './Connections';
import Projects from './Projects';
import Reviews from './Reviews';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

function Profile({ params }) {
  const classes = useStyles();
  let { id, tab: currentTab } = params;
  const router = useRouter();
  const tabs = [
    { value: 'timeline', label: 'Timeline' },
    { value: 'connections', label: 'Connections' },
    { value: 'projects', label: 'Projects' },
    { value: 'reviews', label: 'Reviews' },
  ];

  const handleTabsChange = (event, value) => {
    router.push(value);
  };

  if (!currentTab || !tabs.find(tab => tab.value === currentTab)) {
    currentTab = tabs[0].value;
  }

  return (
    <Page className={classes.root} title="Profile">
      <Header />
      <Container maxWidth="lg">
        <Tabs
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
          {currentTab === 'timeline' && <Timeline />}
          {currentTab === 'connections' && <Connections />}
          {currentTab === 'projects' && <Projects />}
          {currentTab === 'reviews' && <Reviews />}
        </div>
      </Container>
    </Page>
  );
}

Profile.propTypes = {};

export default Profile;
