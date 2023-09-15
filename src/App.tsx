import React, { useState } from "react";
import EmailForm from "../src/components/EmailForm";
import Wheel from "../src/components/Wheel";
import Result from "../src/components/Result";
import "./App.css";

function App() {
  const [result, setResult] = useState<string | null>(null);
  const [emailEntered, setEmailEntered] = useState<boolean>(false);
  const [spinning, setSpinning] = useState<boolean>(false);

  const handleEmailSubmit = (enteredEmail: string) => {
    setResult(null);
    setEmailEntered(true);
  };

  const handleSpinClick = () => {
    setSpinning(true);
    setResult(null);
  };

  const handleSpinComplete = (spinResult: string) => {
    setSpinning(false);
    setResult(spinResult);
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="center-container">
          {emailEntered ? (
            <div className="wheel-result-container">
              <Wheel onSpinComplete={handleSpinComplete} spinning={spinning} />
              {result !== null && <Result result={result} />}
              {!spinning && result === null && (
                <button className="spin-button" onClick={handleSpinClick}>
                  Spin
                </button>
              )}
            </div>
          ) : (
            <EmailForm onSubmit={handleEmailSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
