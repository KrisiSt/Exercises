import React from 'react';

function InputComponent({
  firstNumber,
  secondNumber,
  operation,
  onFirstNumberChange,
  onSecondNumberChange,
  onOperationChange,
  onCalculate,
}) {
  return (
    <div className="input-component">
      <div className="input-group">
        <label htmlFor="first-number">Първо число:</label>
        <input
          id="first-number"
          type="number"
          value={firstNumber}
          onChange={(e) => onFirstNumberChange(e.target.value)}
          placeholder="Въведете първо число"
        />
      </div>

      <div className="input-group">
        <label htmlFor="operation">Операция:</label>
        <select
          id="operation"
          value={operation}
          onChange={(e) => onOperationChange(e.target.value)}
        >
          <option value="+">+ (Събиране)</option>
          <option value="-">- (Изваждане)</option>
          <option value="*">* (Умножение)</option>
          <option value="/">/ (Деление)</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="second-number">Второ число:</label>
        <input
          id="second-number"
          type="number"
          value={secondNumber}
          onChange={(e) => onSecondNumberChange(e.target.value)}
          placeholder="Въведете второ число"
        />
      </div>

      <button onClick={onCalculate} className="calculate-btn">
        Изчисли
      </button>
    </div>
  );
}

export default InputComponent;