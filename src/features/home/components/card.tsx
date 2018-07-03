import * as React from 'react';
import { createStyles, Theme, WithStyles, Typography, Card, CardContent, CardActions, Button, withStyles, CardHeader, Avatar, IconButton } from '@material-ui/core';
import Item from '../../../model/item';
import { observer } from 'mobx-react';
import { CheckCircle, Warning, MoreVert, StarBorder, Star } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import BarChart from '../../../components/chart';


const style = (theme: Theme) => createStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 320
    },
    errorIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.background.default
    },
    footer: {
        display: 'flex',
        paddingBottom: theme.spacing.unit * 2
    },
    icon: {
        backgroundColor: green.A200,
        color: theme.palette.background.default
    }
});

interface ItemCardProps extends WithStyles<typeof style> {
    item: Item
};

const ItemCard = observer((props: ItemCardProps) => {
    const { classes, item } = props;
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar className={item.statusOk ? classes.icon : classes.errorIcon}>
                        {
                            item.statusOk ? <CheckCircle /> : <Warning />
                        }
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title={item.title}
                subheader={item.description}
            />
            <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Typography variant="caption">
                        Last viewed
                    </Typography>
                    <Typography variant="subheading" color="textSecondary">
                        {item.lastViewed.toDateString()}
                    </Typography>
                </div>
                <div>
                    <Typography variant="headline">{Math.round(item.things / 100) / 10}k</Typography>
                </div>
            </CardContent>
            <CardContent style={{ flexGrow: 1, display: "flex" }} >
                <Button style={{ flex: 1, height: "100%" }}>
                    <BarChart data={item.overview} />
                </Button>
            </CardContent>
            <CardActions className={classes.footer}>
                <IconButton>
                    {item.favourite ? <Star /> : <StarBorder />}
                </IconButton>
                <Button size="small" style={{ marginLeft: 'auto' }}>
                    More
                </Button>
            </CardActions>
        </Card>
    );
});


export default withStyles(style)(ItemCard);