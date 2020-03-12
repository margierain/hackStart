import * as React from 'react';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme';
import { ScrollReset, CookiesNotification } from './components';
import './mixins/moment';
import './mixins/validate';
import './mixins/chartjs';
import './mixins/prismjs';
import './assets/scss/main.scss';

const App = ({ children }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ScrollReset />
        {/* <CookiesNotification /> */}
        {children}
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
