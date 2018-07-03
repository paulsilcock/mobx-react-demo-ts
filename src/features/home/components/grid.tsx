import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';
import Item from '../../../model/item';
import ItemCard from './card';
import { observer } from 'mobx-react';

const style = (theme: Theme) => createStyles({
});

interface ItemGridProps extends WithStyles<typeof style> {
    items: Item[]
}

const ItemWrapper = observer((props: { key: number, item: Item }) => {
    return (
        <Grid item={true} xs={12} sm={6} md={4} lg={3} xl={2} >
            <ItemCard {...props} />
        </Grid>
    );
});

const ItemGrid = observer((props: ItemGridProps) => {
    const { items } = props;
    return (
        <Grid container={true} spacing={24}>
            {items.map((item, i) => <ItemWrapper key={i} item={item} />)}
        </Grid>
    );
});

export default withStyles(style)(ItemGrid);