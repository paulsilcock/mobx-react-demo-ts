import * as React from 'react';
import { MenuItem, ListItemIcon, ListItemText, Collapse, List, ButtonBase } from '@material-ui/core';
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
        const padding = 12;

        return (
            <React.Fragment>
                <ButtonBase onClick={this.onClick} style={{ justifyContent: "flex-start" }}>
                    <MenuItem>
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
                <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
                    <List disablePadding={true} style={{ paddingLeft: padding }}>
                        {this.props.children}
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }
}

export default CollapsibleMenuItem;
