import { useState } from 'react';
import InputComponent from './components/InputComponent';
import ResultComponent from './components/ResultComponent';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateResult = () => {
    // Проверка за валидни числа
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setError('Моля, въведете валидни числа!');
      setResult(null);
      return;
    }

    // Проверка за деление на 0
    if (operation === '/' && num2 === 0) {
      setError('Грешка: деление на 0 е невъзможно!');
      setResult(null);
      return;
    }

    // Изчисляване на резултата
    let calculatedResult;
    switch (operation) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult);
    setError('');
  };

  return (
    <div className="app">
      <h1>Калкулатор</h1>
      <InputComponent
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        operation={operation}
        onFirstNumberChange={setFirstNumber}
        onSecondNumberChange={setSecondNumber}
        onOperationChange={setOperation}
        onCalculate={calculateResult}
      />
      <ResultComponent result={result} error={error} />
    </div>
  );
}

export default App;