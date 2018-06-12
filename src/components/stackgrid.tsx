import { Card, createStyles, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import * as React from 'react';


const styling = (theme: Theme) => createStyles({
    container: {
        alignContent: "flex-start",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: "calc(100vh - 72px)",
        justifyContent: "flex-start"
    },
    item: {
        alignSelf: "flex-start",
        flex: 1,
        height: "150px",
        padding: "0.5em",
        [theme.breakpoints.down('md')]: {
            width: theme.spacing.unit * 24,
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing.unit * 36,
        }
    }
});

const gridItemStyle = {
    height: "100%",
    padding: "0.2em"
};

const GridItem = (props: { text: string, title: string }) => (
    <Card style={gridItemStyle}>
        <Typography variant="headline">{props.title}</Typography>
        <Typography >{props.text}</Typography>
    </Card>
);

const StackGrid = withStyles(styling)(({ classes }: WithStyles<typeof styling>) => {
    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <GridItem title={"First item"} text={"blah blah"} />
            </div>
            <div className={classes.item} style={{ height: "350px" }}>
                <GridItem title={"Second item"} text={"hello"} />
            </div>
            <div className={classes.item}>
                <GridItem title={"No. 3"} text={"This is the description"} />
            </div>
            <div className={classes.item}>
                <GridItem title={"Item 4"} text={"blah blah blah"} />
            </div>
            <div className={classes.item} style={{ height: "250px" }}>
                <GridItem title={"(5)"} text={"meh"} />
            </div>
            <div className={classes.item}>
                <GridItem title={"The sixth item"} text={"Woop"} />
            </div>
            <div className={classes.item}>
                <GridItem title={"Item 7"} text={"blah blah"} />
            </div>
            <div className={classes.item} style={{ height: "350px" }}>
                <GridItem title={"[8]"} text={"hellooooo"} />
            </div>
            <div className={classes.item}>
                <GridItem title={"9th item"} text={"eh"} />
            </div>
        </div>
    );
});

export default StackGrid;