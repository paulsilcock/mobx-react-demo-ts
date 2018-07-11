import * as React from 'react';
import { MenuItem, ListItemIcon, ListItemText, Collapse, List, ButtonBase } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


interface State {
    open: boolean;
}

interface Props {
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
        const padding = 16;
        const childDepth = 1 + (this.props.depth || 0);
        return (
            <React.Fragment>
                <ButtonBase onClick={this.onClick} style={{ width: "100%" }} >
                    <MenuItem style={{ paddingLeft: childDepth * padding, width: "100%" }}>
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
                                        depth: childDepth,                                        
                                        key: child.key,
                                        style: {
                                            paddingLeft: padding * (1 + childDepth)
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

export default CollapsibleMenuItem;
