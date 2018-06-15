import { createStyles, MuiThemeProvider, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import * as React from 'react';
import 'typeface-roboto-condensed';
import 'typeface-roboto-slab';
import SideBar from './components/sidebar';
import HomePageState from './features/home/state';
import HomePage from './features/home/view';
import ThemeSwitcher from './theme/manager';


const themeSwitcher = new ThemeSwitcher("light");
const AppSideBar = observer(SideBar);
const homePageState = new HomePageState("Hello!");

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
            <div style={{width: "240px"}} />
            <HomePage state={homePageState} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styling)<any>(App);
