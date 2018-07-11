import * as React from 'react';
import { MenuItem, ListItemIcon, ListItemText, Collapse, List } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


interface State {
    open: boolean;
}

interface Props {
    parentDepth?: number;
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

        return (
            <React.Fragment>
                <MenuItem button={true} onClick={this.onClick} style={{ paddingLeft: padding * (this.props.parentDepth || 1) }}>
                    {
                        this.props.menuIcon &&
                        <ListItemIcon>
                            {this.props.menuIcon}
                        </ListItemIcon>
                    }
                    <ListItemText primary={this.props.text} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
                    <List disablePadding={true} >
                        {
                            React.Children.map(this.props.children, child => {
                                if (React.isValidElement(child)) {
                                    return React.cloneElement(child as React.ReactElement<any>, {
                                        style: {
                                            paddingLeft: padding * (1 + (this.props.parentDepth || 1))
                                        }
                                    });
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
