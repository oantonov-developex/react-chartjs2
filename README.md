# react-chartjsm
> React component for Chart.js

### Installation
`npm install react-chartjsm --save`
### Example Usage
```JavaScript
// using ES6
import {Bar} from 'react-chartjsm';
class Main extends Component {
  render() {
    return <Bar data={chartData} options={chartOptions} />;
  }
};
// not using ES6
var Bar = require('react-chartjsm').Bar;
var Main = React.createClass({
  render: function() {
    return <Bar data={chartData} options={chartOptions} />;
  }
});
```

Get your Chart instance, like
```JavaScript
class Main extends Component {
  componentDidMount() {
    this.myChart = this.refs['canvas'].getChart();
    this.myChart.datasets[0].points[2].value = 50;
    this.myChart.update();
  }
  render() {
    return <Bar ref='canvas' data={chartData} options={chartOptions} />;
  }
};
```
### Chart type
- `Bar`
- `Doughnut`
- `Line`
- `Pie`
- `PolarArea`
- `Radar`
