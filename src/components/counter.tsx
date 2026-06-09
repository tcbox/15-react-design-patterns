import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(1);

  const updateCount = () => setCounter(count + 1);

  return (
    <div className="">
      <div>{count}</div>

      <div onClick={updateCount}>click me </div>
    </div>
  );
}
