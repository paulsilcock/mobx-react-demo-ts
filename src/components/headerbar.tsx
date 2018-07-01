import * as React from 'react';
import { createStyles, Theme, WithStyles, AppBar, Toolbar, Typography, withStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const style = (theme: Theme) => createStyles({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
        zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
        marginLeft: -20,
        marginRight: 20
    }
});

const HeaderBar = ({ classes }: WithStyles<typeof style>) => {
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                    Blah
              </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(style)(HeaderBar);


