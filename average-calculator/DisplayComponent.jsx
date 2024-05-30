import React from 'react';
import './DisplayComponent.css';

const DisplayComponent = ({ data }) => {
  return (
    <div className="result-container">
      <h2>Results</h2>
      <div>
        <strong>Previous State:</strong> {JSON.stringify(data.windowPrevState)}
      </div>
      <div>
        <strong>Current State:</strong> {JSON.stringify(data.windowCurrState)}
      </div>
      <div>
        <strong>Numbers:</strong> {JSON.stringify(data.numbers)}
      </div>
      <div>
        <strong>Average:</strong> {data.avg}
      </div>
    </div>
  );
};

export default DisplayComponent;
