import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const savedResults = localStorage.getItem("quizResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  const clearResults = () => {
    setResults([]);
    localStorage.removeItem("quizResults");
  };

  return (
  
      <div>
         <Link to={"/"} className="back"><span className="material-symbols-outlined">
arrow_back
</span> Main page</Link>
        <h2>Results</h2>
        {results.length === 0 ? (
          <p>No results available.</p>
        ) : (
          <>
            {results.map((result, index) => (
              <div key={index}>
                <h3>Game {index + 1}</h3>
                <p>Correct Answers: {result}</p>
              </div>
            ))}
            <button onClick={clearResults} className="button">Clear Results</button>
          </>
        )}
      </div>

  );
}

export default Results;