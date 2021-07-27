import React from "react";
import "./styles/tailwind.css";

export default function App() {
  return (
    <div className="app min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-400 to-purple-400 leading-6 px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-200 py-8 px-4 rounded sm:rounded-lg shadow-2xl">
          <h2 className="text-6xl text-indigo-900 mb-5 font-mono">
            Pomo Focus
          </h2>

          <div className="timer text-7xl text-indigo-700 mb-3 font-mono">
            <span>00</span>
            <span>:</span>
            <span>00</span>
          </div>

          <span className="buttons relative z-0 inline-flex shadow-sm rounded-md mt-3 font-mono ">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-purple-50 text-sm font-medium text-indigo-700 hover:bg-purple-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Start
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-purple-50 text-sm font-medium text-indigo-700 hover:bg-purple-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Stop
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-purple-50 text-sm font-medium text-indigo-700 hover:bg-purple-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Reset
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
