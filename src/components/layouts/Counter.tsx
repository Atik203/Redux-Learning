import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../../redux/features/counter/counterSlice";
import { RootState } from "../../redux/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();

  return (
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
    </div>
  );
};

export default Counter;
