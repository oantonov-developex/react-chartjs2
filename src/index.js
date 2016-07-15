import React, {Component, PropTypes} from 'react';
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
    this.destroyChart();
  }

  componentWillReceiveProps(nextProps) {
    this.destroyChart();
    this.initializeChart(nextProps);
  }

  destroyChart() {
    this.chart && this.chart.destroy();
  }

  initializeChart(props) {
    const {data, options, type} = props;
    const ctx = this.refs['canvas'].getContext('2d');
    this.chart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    })
  }

  getChart() {
    return this.chart;
  }

  render() {
    const _props = this.blacklist(this.props, {
      data: true,
      options: true,
      ref: true,
      type: true
    });
    return <canvas ref='canvas' {..._props} />
  };
}

Core.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  type: PropTypes.oneOf(['doughnut', 'pie', 'line', 'bar', 'radar', 'polarArea', 'horizontalBar']).isRequired
};

export default Core;
