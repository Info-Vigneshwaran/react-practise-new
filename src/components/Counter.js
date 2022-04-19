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
        Increment
      </button>

      <button
        onClick={(e) => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>

      <button
        onClick={(e) => {
          setCounter(counter + 15);
        }}
      >
        Increment(15)
      </button>

      <button
        onClick={(e) => {
          setCounter(0);
        }}
      >
        Reset(0)
      </button>
    </>
  );
}
