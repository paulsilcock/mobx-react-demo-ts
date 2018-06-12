import * as React from 'react';

import { List, ListItemIcon, ListItemText, MenuItem, withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { ColorLens, Home } from '@material-ui/icons';


const styling = (theme: Theme) => createStyles({
    drawerPaper: {
        position: 'relative',
        width: 240
    },
    icon: {
        color: theme.palette.secondary.dark
    }
});


interface ISideBarProps extends WithStyles<typeof styling> {
    onThemeChange: () => void
}

const SideBar = withStyles(styling)(({ onThemeChange, classes }: ISideBarProps) => {
    return (
        <Drawer variant={"permanent"} classes={{ paper: classes.drawerPaper }}>
            <List>
                <MenuItem button={true}>
                    <ListItemIcon>
                        <Home className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        Home
                    </ListItemText>
                </MenuItem>
                <MenuItem button={true} onClick={onThemeChange}>
                    <ListItemIcon>
                        <ColorLens className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        Toggle theme
                    </ListItemText>
                </MenuItem>
            </List>
        </Drawer>
    );
});


export default SideBar;