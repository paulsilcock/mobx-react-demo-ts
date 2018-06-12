import { createStyles, MuiThemeProvider, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import * as React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-condensed';
import SideBar from './components/sidebar';
import Homepage from './pages/home';
import HomeStore from './store/home';
import ThemeSwitcher from './theme/manager';


const themeSwitcher = new ThemeSwitcher("dark");
const AppSideBar = observer(SideBar);
const homeStore = new HomeStore("Hello!");

const styling = (theme: Theme) => createStyles({
  appArea: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  root: {
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }
});

@observer
class App extends React.Component<WithStyles<typeof styling>> {
  public render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={themeSwitcher.theme}>
        <div className={classes.root}>
          <div className={classes.appArea}>
            <AppSideBar onThemeChange={themeSwitcher.toggleTheme} />
            <Homepage vm={homeStore} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styling)<any>(App);
