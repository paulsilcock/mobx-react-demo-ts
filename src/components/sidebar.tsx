import * as React from 'react';

import { List, ListItemIcon, MenuItem, withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { ColorLens, Home } from '@material-ui/icons';


const styling = (theme: Theme) => createStyles({
    drawerPaper: {
        backgroundColor: theme.palette.background.paper,
        height: "100%",
        position: 'fixed',
        top: theme.mixins.toolbar.minHeight,
        width: theme.spacing.unit * 7
    },
    icon: {
        color: theme.palette.secondary.light
    },
    wrapper: {
        flex: '1 0 auto',
        height: '100%',
        position: 'relative',
        width: theme.spacing.unit * 7
    }
});


interface ISideBarProps extends WithStyles<typeof styling> {
    onThemeChange: () => void
}

const SideBar = withStyles(styling)(({ onThemeChange, classes }: ISideBarProps) => {
    return (
        <div className={classes.wrapper}>
            <Drawer variant={"permanent"} classes={{ paper: classes.drawerPaper }}>
                <List>
                    <MenuItem button={true}>
                        <ListItemIcon>
                            <Home className={classes.icon} />
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem button={true} onClick={onThemeChange}>
                        <ListItemIcon>
                            <ColorLens className={classes.icon} />
                        </ListItemIcon>
                    </MenuItem>
                </List>
            </Drawer>
        </div>
    );
});


export default SideBar;