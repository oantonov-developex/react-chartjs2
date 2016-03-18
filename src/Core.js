import React, {
  Component
} from 'react';
import Chart from 'chart.js';

class Core extends Component {
  constructor(props) {
    super(props);
  }

  blacklist(obj, filters) {
    let results = {};
    for (let key in obj) {
      if (filters[key]) continue;
      results[key] = obj[key];
    }
    return results;
  }

  componentDidMount() {
    this.initializeChart(this.props);
  }

  componentWillUnmount() {
    this.destoryChart();
  }

  componentWillReceiveProps(nextProps) {
    this.destroyChart();
    this.initializeChart(nextProps);
  }

  destroyChart() {
    this.chart && this.chart.destroy();
  }

  initializeChart(props) {
    const {data, options} = props;
    const ctx = this.refs['canvas'].getContext('2d');
    this.chart = new Chart(ctx)[this.getChartType()](data, options || {});
  }

  getChart() {
    return this.chart;
  }

  getChartType() {
    return '';
  }

  render() {
    const _props = this.blacklist(this.props, {
      data: true,
      options: true,
      ref: true
    });
    return <canvas ref='canvas' {..._props} />
  }
};

export default Core;
