import React from 'react';
import './App.css';
import ScatterPlot from './ScatterPlot';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="card">
          <h3>Zipf's Law Visualization</h3>
          <ScatterPlot />
        </div>
      </div>
    )
  }

}

export default App;
