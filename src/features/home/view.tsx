import { createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import { observer } from 'mobx-react';
import * as React from 'react';
import StackGrid from '../../components/stackgrid';
import HomePageState from './state';


const styling = (theme: Theme) => createStyles({
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: "1em"
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
        const { state, classes } = this.props;
        return (
            <main className={classes.content}>
                <Typography variant={"display1"}>{state.title}</Typography>
                <StackGrid />
            </main>
        );
    }
}

export default withStyles(styling)<IHomeProps>(HomePage);