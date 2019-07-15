import React from 'react';
import PropType from 'prop-types';
import './App.css';
import ScatterPlot from './ScatterPlot';
import utils from './utils';
import data from './data';

class App extends React.Component {

  state = {
    data: null
  }

  static getDerivedStateFromProps(props, state) {
    let countObject = utils.processString(data);
    let convertedData = utils.convertIntoPlotData(countObject);

    return {
      data: convertedData
    }
  }

  render() {

    const { data } =  this.state;

    return (
      <div className="App">
        <div className="card">
          <h3>Zipf's Law Visualization</h3>
          <ScatterPlot data={data} />
        </div>
      </div>
    )
  }

}

App.propTypes = {
  data: PropType.array || null,
}

export default App;
