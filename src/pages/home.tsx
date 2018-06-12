import { createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import { observer } from 'mobx-react';
import * as React from 'react';
import HomeStore from '../store/home';


const styling = (theme: Theme) => createStyles({
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: "1em"
    }
});


interface IHomeProps extends WithStyles<typeof styling> {
    vm: HomeStore
}

@observer
class Homepage extends React.Component<IHomeProps> {
    constructor(props: IHomeProps) {
        super(props);
    }

    public render() {
        const { vm, classes } = this.props;
        return (
            <main className={classes.content}>
                <Typography variant={"display1"}>{vm.title}</Typography>
            </main>
        );
    }
}

export default withStyles(styling)<IHomeProps>(Homepage);