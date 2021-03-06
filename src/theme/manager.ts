import { createMuiTheme, PaletteType, Theme } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { action, computed, observable } from 'mobx';


const basePalette: PaletteOptions = {
    primary: {
        dark: "#1f2528",
        light: "#333539",
        main: "#2a2b2f"
    },
    secondary: {
        dark: "#c94f7c",
        light: "#ffb2dd",
        main: "#ff80ab"
    },
};

class ThemeSwitcher {
    @observable
    public themeType: PaletteType = "dark";

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
            theme.palette.background.paper = theme.palette.primary.light;
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