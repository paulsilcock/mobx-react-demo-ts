import { MuiThemeProvider } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import * as React from 'react';
import SideBar from './components/sidebar';
import Homepage from './pages/home';
import HomeStore from './store/home';
import ThemeSwitcher from './theme/manager';


const themeSwitcher = new ThemeSwitcher("light");
const AppSideBar = observer(SideBar);
const homeStore = new HomeStore("Hello!");

@observer
class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={themeSwitcher.theme}>
        <AppSideBar onThemeChange={themeSwitcher.toggleTheme} />
        <Homepage vm={homeStore}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
