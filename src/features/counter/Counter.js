import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount, incrementAsync } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span className=" text-white bg-blue-950 px-5 mx-5">{count}</span>
        <button
          className=" text-3xl font-bold underline  text-gray-900 bg-blue"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
