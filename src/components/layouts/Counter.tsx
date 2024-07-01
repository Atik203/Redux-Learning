import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <span className="text-xl">{count}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
