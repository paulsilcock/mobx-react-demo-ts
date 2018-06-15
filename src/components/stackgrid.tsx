import { Button, Card, CardContent, createStyles, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import * as React from 'react';


const styling = (theme: Theme) => createStyles({
    container: {
        alignContent: "flex-start",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: `120vh`,
        justifyContent: "flex-start",
        margin: "1em"
    },
    item: {
        alignSelf: "flex-start",
        order: 1,
        padding: "0.5em",
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing.unit * 14,
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 18,
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing.unit * 28,
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing.unit * 42,
        }
    }
});

const gridItemStyle = createStyles({
    button: {
        display: "block",
        height: "100%",
        padding: "0.2em",
        "text-transform": "none",
        width: "100%"
    },
    buttonLabel: {
        position: "absolute",
        textAlign: "left",
        top: 0
    }
});

interface IGridItemProps {
    priority?: number
    text: string,
    title: string
}

function getOrder(item: number, cols: number): number {
    return item % cols;
}

const GridItem = withStyles(gridItemStyle)((props: IGridItemProps & WithStyles<typeof gridItemStyle>) => {
    const weight = props.priority || 1;
    const height = weight * 200;
    return (
        <Card style={{height: `${height}px`, minHeight: "150px", maxHeight: "300px", borderRadius: "10px"}} >
            <Button classes={{root: props.classes.button, label: props.classes.buttonLabel}}>
                <CardContent>
                    <Typography variant="headline">{props.title}</Typography>
                    <Typography>{props.text}</Typography>
                </CardContent>
            </Button>
        </Card>
    );
});

const StackGrid = withStyles(styling)(({ classes }: WithStyles<typeof styling>) => {
    return (
        <div className={classes.container}>
            <div className={classes.item} style={{ order: getOrder(0, 3) }}>
                <GridItem title={"First item"} text={"blah blah"} priority={1.5} />
            </div>
            <div className={classes.item} style={{ order: getOrder(1, 3) }}>
                <GridItem title={"Second item"} text={"hello"}  />
            </div>
            <div className={classes.item} style={{ order: getOrder(2, 3) }}>
                <GridItem title={"No. 3"} text={"This is the description"} />
            </div>
            <div className={classes.item} style={{ order: getOrder(3, 3) }}>
                <GridItem title={"Item 4"} text={"blah blah blah"} priority={1.1} />
            </div>
            <div className={classes.item} style={{ order: getOrder(4, 3) }}>
                <GridItem title={"(5)"} text={"meh"} priority={1.1} />
            </div>
            <div className={classes.item} style={{ order: getOrder(5, 3) }}>
                <GridItem title={"The sixth item"} text={"Woop"} />
            </div>
            <div className={classes.item} style={{ order: getOrder(6, 3) }}>
                <GridItem title={"Item 7"} text={"blah blah"} priority={0.9} />
            </div>
            <div className={classes.item} style={{ order: getOrder(7, 3) }}>
                <GridItem title={"[8]"} text={"hellooooo"} priority={1.1} />
            </div>
            <div className={classes.item} style={{ order: getOrder(8, 3) }}>
                <GridItem title={"9th item"} text={"eh"} />
            </div>
        </div>
    );
});

export default StackGrid;