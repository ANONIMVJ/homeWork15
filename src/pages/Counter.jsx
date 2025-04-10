import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); 

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); 
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-teal-600">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Counter</h1>

      <div className="flex items-center justify-center gap-6 mb-6">
        <button
          onClick={decrement}
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 ease-in-out"
        >
          -
        </button>

        <span className="text-6xl font-semibold">{count}</span>

        <button
          onClick={increment}
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 ease-in-out"
        >
          +
        </button>
      </div>

      <button
        onClick={reset}
        className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
