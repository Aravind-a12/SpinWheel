import React, { useState } from "react";
import "./result.css";

interface ResultProps {
  result: string;
}

function Result({ result }: ResultProps) {
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  const handleCopyButtonClick = () => {
    setCopyMessageVisible(true);
    setTimeout(() => {
      setCopyMessageVisible(false);
    }, 3000);
  };

  return (
    <div className="result-container">
      <h2 className="result-header">Result</h2>
      <p className="res">{result}</p>
      <button className="copy-button" onClick={handleCopyButtonClick}>
        Copy Code
      </button>
      {copyMessageVisible && <p className="copy-message">Code copied!</p>}
    </div>
  );
}

export default Result;
