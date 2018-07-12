import * as React from 'react';
import { MenuItem, ListItemIcon, ListItemText, Collapse, List, ButtonBase, withStyles, WithStyles } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


interface State {
    open: boolean;
}

interface Props extends WithStyles<{}> {
    depth?: number;
    text: string;
    menuIcon?: React.ReactElement<any>;
}

class CollapsibleMenuItem extends React.PureComponent<Props, State> {
    public readonly state: State = {
        open: false
    }

    public onClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    public render() {
        const theme = this.props.theme;
        const padding = theme ? theme.spacing.unit * 2 : 16;
        const depth = this.props.depth || 1;
        return (
            <React.Fragment>
                <ButtonBase onClick={this.onClick} style={{ width: "100%" }} >
                    <MenuItem style={{ paddingLeft: depth * padding, width: "100%" }}>
                        {
                            this.props.menuIcon &&
                            <ListItemIcon>
                                {this.props.menuIcon}
                            </ListItemIcon>
                        }
                        <ListItemText primary={this.props.text} />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </MenuItem>
                </ButtonBase>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit={false}>
                    <List disablePadding={true} >
                        {
                            React.Children.map(this.props.children, child => {
                                if (React.isValidElement(child) && child.key) {
                                    const element = React.cloneElement(child as React.ReactElement<any>, {
                                        depth: depth + 1,                                        
                                        key: child.key,
                                        style: {
                                            paddingLeft: padding * (1 + depth)
                                        }
                                    });

                                    return element;
                                }
                                return null;
                            })
                        }
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }
}

export default withStyles({}, {withTheme: true})(CollapsibleMenuItem);
