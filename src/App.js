import React from "react";
import "./styles/tailwind.css";

export default function App() {
  return (
    <div className="app h-screen flex-none flex-col items-center justify-center bg-green-500">
      <h2 className="text-4xl text-center mb-3">Pomodoro!</h2>

      <div className="timer">
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
