import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import D3 from './D3';
import * as d3 from "d3";
import * as c3 from "c3";


const columns = [
  ['Scores Pre-Prep', 200, 300, 100],
  ['Scores After Technical Prep', 350, 400, 350]
];

class Data extends Component {
  constructor() {
    super();
    this.state = {
      chartType: 'bar',
    };
  }

  _setBarChart() {
    this.setState({
      chartType: 'bar' });
  }
  _setLineChart() {
    this.setState({
      chartType: 'line' });
  }

    _setDonutChart() {
    this.setState({
      chartType: 'donut' });
  }

  render() {
    return (
      <React.Fragment>
      <div className="dthree">
      <h1 className="d3sell"> See How Students Scores Improved After Technical Prep: </h1>
       <div className="d3">
        <D3
          columns={columns}
          chartType={this.state.chartType} />
        <p>
          Select Chart Type:
          <button className="d3button" onClick={() => this._setBarChart()}>Bar Mode</button>
          <button className="d3button" onClick={() => this._setLineChart()}>Line Mode</button>
          <button className="d3button" onClick={() => this._setDonutChart()}>Donut Mode (nom)</button>
        </p>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Data;