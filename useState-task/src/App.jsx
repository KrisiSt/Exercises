import { useState } from "react";
import "./App.css";

const questions = [
  {
    text: "Кое число е следващо в редицата: 2, 4, 8, 16, ?",
    answers: ["18", "24", "32"],
  },
  {
    text: "Всички котки са животни. Всички животни дишат. Следователно котките…",
    answers: ["не дишат", "дишат", "са растения"],
  },
  {
    text: "Кое е различното?",
    answers: ["Ябълка", "Банан", "Морков"],
  },
];

function LogicTest({ onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div>
      <h3>
        Въпрос {currentQuestion + 1} от {questions.length}
      </h3>
      <p>{questions[currentQuestion].text}</p>

      {questions[currentQuestion].answers.map((answer, index) => (
        <button
          key={index}
          onClick={handleAnswer}
          style={{ display: "block", margin: "8px 0" }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [showTest, setShowTest] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const startTest = () => {
    setShowTest(true);
    setIsFinished(false);
  };

  const finishTest = () => {
    setShowTest(false);
    setIsFinished(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Добре дошли в теста</h1>
      </header>

      {!showTest && !isFinished && (
        <button onClick={startTest}>Започни теста</button>
      )}

      {showTest && <LogicTest onFinish={finishTest} />}

      {isFinished && (
        <div>
          <h2>Тестът е завършен!</h2>
          <button onClick={startTest}>Започни отначало</button>
        </div>
      )}
    </div>
  );
}
