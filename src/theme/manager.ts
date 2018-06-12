import { createMuiTheme, PaletteType, Theme } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { action, computed, observable } from 'mobx';


const basePalette: PaletteOptions = {
    primary: blueGrey,
    secondary: {
        dark: "#c94f7c",
        light: "#ffb2dd",
        main: "#ff80ab"
    },
};

class ThemeSwitcher {
    @observable
    public themeType: PaletteType = "light";

    @computed
    public get theme(): Theme {
        return createMuiTheme({
            palette: {...basePalette, type: this.themeType},
            typography: {
                display1: {
                    fontFamily: "Roboto Condensed"
                },
                fontFamily: "Roboto"
            }
        });
    };

    constructor(type: PaletteType) {
        this.themeType = type;
    }   

    @action
    public toggleTheme = (): void => {
        this.themeType = this.themeType === "light" ? "dark" : "light";
    }    
}

export default ThemeSwitcher;