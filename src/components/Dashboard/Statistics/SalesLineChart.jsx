import { Chart } from 'react-google-charts'

/* export const data = [
  ['Day', 'Sales'],
  ['9', 1000],
  ['10', 1170],
  ['11', 660],
  ['12', 1030],
] */


 const options = {
  title: 'Sales Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
const SalesLineChart = ({data}) => {
    // console.log(data);

     let chartData = [['date', 'price']];
     data?.forEach((entry) => {
      const day = new Date(entry.date).getDate().toString(); // Extracting day from the date
      chartData.push([day, entry.price]);
    });
// console.log(chartData);

  return (
    // <>ll</>
    <Chart chartType='LineChart' width='100%' height="400px" data={chartData} options={options} />
  )
}

export default SalesLineChart
