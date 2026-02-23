import React from 'react';

function ResultComponent({ result, error }) {
  return (
    <div className="result-component">
      <h2>Резултат:</h2>
      {error ? (
        <div className="error">{error}</div>
      ) : result !== null ? (
        <div className="result">{result}</div>
      ) : (
        <div className="placeholder">Въведете числа и изберете операция</div>
      )}
    </div>
  );
}

export default ResultComponent;