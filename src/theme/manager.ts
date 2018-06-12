import { createMuiTheme, PaletteType, Theme } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { action, computed, observable } from 'mobx';


const basePalette: PaletteOptions = {
    primary: {
        dark: "#101419",
        light: "#263238",
        main: "#1b2228"
    },
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
        const theme = createMuiTheme({
            palette: {...basePalette, type: this.themeType},
            typography: {
                display1: {
                    fontFamily: "Roboto Slab"
                },
                fontFamily: "Roboto Condensed"
            }
        });
        
        if (this.themeType === "dark") {
            theme.palette.background.default = theme.palette.primary.main;
            theme.palette.background.paper = theme.palette.primary.dark;
        }

        return theme;
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