import React, { useState, useRef } from "react";
import "./styles/tailwind.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  function startTimer() {
    if (intervalRef.current != null) return;
    setTitle("Let's go!!! 🚀");
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        //reset timer
        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep going strong!!! 💪🏽");
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Ready for another round? 🤔");
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  return (
    <div className="app min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-400 to-purple-400 leading-6 px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-200 py-8 px-4 rounded sm:rounded-lg shadow-2xl">
          <h1 className="text-7xl text-indigo-100 mb-5 font-thin">
            Pomodoro Focus
          </h1>
          <h2 className="text-2xl text-indigo-100 mb-5 font-medium">{title}</h2>

          <div className="timer text-7xl text-indigo-100 mb-3 font-mono">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>

          <span className="buttons relative z-0 inline-flex shadow-sm rounded-md mt-3 font-mono ">
            {!isRunning && (
              <button
                onClick={startTimer}
                type="button"
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-indigo-700 text-sm font-medium text-indigo-100 hover:bg-purple-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                Start
              </button>
            )}
            {isRunning && (
              <button
                onClick={stopTimer}
                type="button"
                className="-ml-px relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-indigo-700 text-sm font-medium text-indigo-100 hover:bg-purple-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                Stop
              </button>
            )}
            <button
              onClick={resetTimer}
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-indigo-700 text-sm font-medium text-indigo-100 hover:bg-purple-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Reset
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
