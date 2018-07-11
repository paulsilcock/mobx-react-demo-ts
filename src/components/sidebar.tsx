import * as React from 'react';

import { List, ListItemIcon, MenuItem, withStyles, ListItemText, Divider } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { ColorLens, Home } from '@material-ui/icons';
import CollapsibleMenuItem from './CollapsibleMenuItem';


const styling = (theme: Theme) => createStyles({
    drawerPaper: {
        backgroundColor: theme.palette.primary.light,
        borderRight: 'none',
        height: "100%",
        position: 'fixed',
        top: theme.mixins.toolbar.minHeight,
        width: theme.spacing.unit * 27
    },
    icon: {
        color: theme.palette.secondary.light
    },
    wrapper: {
        flex: '1 0 auto',
        height: '100%',
        position: 'relative',
        width: theme.spacing.unit * 27
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
                    <CollapsibleMenuItem
                        text="Items"
                        menuIcon={
                            <Home className={classes.icon} />
                        }>
                        {
                            [0, 1, 2, 3].map((i) => {
                                if (i === 2) {
                                    return (
                                        <CollapsibleMenuItem text={`Item: ${i}`} parentDepth={1}>
                                            {
                                                [0, 1, 2].map((j) =>
                                                    <MenuItem key={`${i}-${j}`}>
                                                        <ListItemText primary={`Sub-item: ${j}`} />
                                                    </MenuItem>
                                                )
                                            }
                                        </CollapsibleMenuItem>
                                    );
                                }
                                return (
                                    <MenuItem key={i}>
                                        <ListItemText primary={`Item: ${i}`} />
                                    </MenuItem>
                                );
                            })
                        }
                    </CollapsibleMenuItem>
                    <Divider />
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