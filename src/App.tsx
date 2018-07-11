import { createStyles, MuiThemeProvider, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import * as React from 'react';
import 'typeface-roboto-condensed';
import 'typeface-roboto-slab';
import SideBar from './components/sidebar';
import HomePageState from './features/home/state';
import HomePage from './features/home/view';
import ThemeSwitcher from './theme/manager';
import { CssBaseline } from '@material-ui/core';
import HeaderBar from './components/headerbar';
import { BrowserRouter, Route } from 'react-router-dom';


const themeSwitcher = new ThemeSwitcher("dark");
const AppSideBar = observer(SideBar);
const homePageState = new HomePageState();

const styling = (theme: Theme) => createStyles({
  appArea: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  feature: {
    flex: 1,
    marginTop: theme.mixins.toolbar.minHeight,
    overflow: 'auto',
    padding: theme.spacing.unit * 3
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: "100%"
  }
});

@observer
class App extends React.Component<WithStyles<typeof styling>> {
  public render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={themeSwitcher.theme}>
        <CssBaseline />
        <div className={classes.root}>
          <HeaderBar />
          <div className={classes.appArea}>
            <AppSideBar onThemeChange={themeSwitcher.toggleTheme} />
            <BrowserRouter>
              <div className={classes.feature}>
                <Route path="/">
                  <HomePage state={homePageState} />
                </Route>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styling)(App);
