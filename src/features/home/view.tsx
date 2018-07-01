import { createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import { observer } from 'mobx-react';
import * as React from 'react';
import HomePageState from './state';
import ItemsGrid from './components/grid';


const styling = (theme: Theme) => createStyles({
    content: {
        height: "100%",
        width: "100%"
    },
    title: {
        paddingBottom: theme.spacing.unit * 3
    }
});


interface IHomeProps extends WithStyles<typeof styling> {
    state: HomePageState
}

@observer
class HomePage extends React.Component<IHomeProps> {
    constructor(props: IHomeProps) {
        super(props);
    }

    public render() {
        const { classes, state } = this.props;
        return (
            <div className={classes.content} >
                <Typography variant={"display1"} className={classes.title}>Items page</Typography>
                <ItemsGrid items={state.items} />
            </div>
        );
    }
}

export default withStyles(styling)(HomePage);