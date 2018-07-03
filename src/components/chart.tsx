
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
}

const BarChart = ({ data }: IProps) => {
    const yScale = scaleLinear()
        .domain([0, Math.max(...data)])
        .rangeRound([100, 0]);
    const barWidth = Math.floor(100 / data.length);

    return (

        <svg viewBox={"0 0 100 100"} width={100} height={100} preserveAspectRatio="none" style={{ width: "100%" }}>
            {data.map((d, i) =>
                <Bar
                    key={i}
                    x={i * barWidth}
                    y={yScale(d)}
                    width={barWidth - 1}
                    height={100 - yScale(d)}
                />,
            )}
        </svg>
    );
};

export default observer(BarChart);

