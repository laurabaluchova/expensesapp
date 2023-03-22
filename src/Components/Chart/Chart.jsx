import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalSum = dataPointValues.reduce((acc, currentValue) => acc + currentValue);
    console.log(dataPointValues, totalSum)

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalSum} label={dataPoint.label} />))}
        </div>
    );
};

export default Chart;