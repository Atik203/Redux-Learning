import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);

  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span className="text-xl">{count}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          IncrementByAmount 5
        </button>
      </div>

      {count % 5 === 0 && count !== 0 ? (
        <div className="mt-2 h-5 w-10 mx-auto border-red-500 border-4 bg-red-500"></div>
      ) : null}
    </div>
  );
};

export default Counter;
