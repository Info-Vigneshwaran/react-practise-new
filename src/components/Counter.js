import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Counter {counter}</p>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        INC
      </button>

      <button
        onClick={(e) => {
          setCounter(counter - 1);
        }}
      >
        DEC
      </button>
    </>
  );
}
