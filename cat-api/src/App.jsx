import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const data = await response.json();
      setFact(data.data[0]);
    } catch (error) {
      console.error("Грешка при зареждане на факт:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    const loadInitialFact = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://meowfacts.herokuapp.com/");
        const data = await response.json();
        setFact(data.data[0]);
      } catch (error) {
        console.error("Грешка при зареждане на факт:", error);
      }
      setLoading(false);
    };

    loadInitialFact();
  }, []);

  return (
    <div className="app-container">
      <div className="fact-card">
        <h1 className="title">🐱 Random Cat Fact</h1>

        <div className="fact-content">
          {loading ? (
            <p className="loading">⏳ Fetching new fact...</p>
          ) : (
            <p className="fact-text">{fact}</p>
          )}
        </div>

        <button onClick={fetchFact} disabled={loading} className="fetch-button">
          {loading ? "Fetching..." : "Нов факт"}
        </button>

        <p className="powered-by">Powered by MeowFacts API 🐈</p>
      </div>
    </div>
  );
};

export default App;