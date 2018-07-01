
import { scaleLinear } from 'd3-scale';
import * as React from 'react';
import { observer } from 'mobx-react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';


const style = (theme: Theme) => createStyles({
    bar: {
        fill: theme.palette.text.secondary
    }
});

interface IBarProps extends WithStyles<typeof style> {
    x: number,
    y: number,
    key: number,
    width: number,
    height: number
}

const BarBase = withStyles(style)((props: IBarProps) => {
    return (
        <rect {...props} className={props.classes.bar} />
    );
});

const Bar = observer(BarBase);

interface IProps {
    data: number[];
    width: number;
    height: number;
}

const BarChart = ({ width, height, data }: IProps)  => {
    const yScale = scaleLinear()
        .domain([0, Math.max(...data)])
        .rangeRound([height, 0]);
    const barWidth = Math.floor(width / data.length);

    return (
        <svg width={width} height={height} style={{ display: "block", margin: "auto" }}>
            {data.map((d, i) =>
                <Bar
                    key={i}
                    x={i * barWidth}
                    y={yScale(d)}
                    width={barWidth - 1}
                    height={height - yScale(d)}
                />,
            )}
        </svg>
    );
};

export default observer(BarChart);

