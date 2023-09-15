import React, { useState, useEffect } from "react";
import png from "../assets/wheel.png";
import "./Wheel.css";

interface WheelProps {
  onSpinComplete: (spinResult: string) => void;
  spinning: boolean;
}

const Wheel: React.FC<WheelProps> = ({ onSpinComplete, spinning }) => {
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (spinning) {
      const delay = 3000;
      const randomResult = "You won 100000!";

      setTimeout(() => {
        setResult(randomResult);
        onSpinComplete(randomResult);
      }, delay);
    }
  }, [spinning, onSpinComplete]);

  return (
    <div className="wheel-container">
      <div className={`wheel ${spinning ? "spinning" : ""}`}>
        <img src={png} alt="Spin Wheel" />
      </div>
      {spinning ? (
        <p className="spin">Spinning...</p>
      ) : (
        result && <p className="spin">{result}</p>
      )}
    </div>
  );
};

export default Wheel;
