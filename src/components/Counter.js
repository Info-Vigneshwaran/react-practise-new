import React, { useState } from 'react';

const initialCounter = () => {
  return 4;
};
const initialUser = () => {
  return { name: 'rest', age: 10 };
};

export default function Counter() {
  const [counter, setCounter] = useState(() => initialCounter());
  const [user, setUser] = useState(() => initialUser());

  const handleUser = () => {
    setUser((prevUser) => {
      return { ...prevUser, age: counter };
    });
  };
  return (
    <>
      <p>Counter {counter}</p>
      <button
        onClick={(e) => {
          setCounter((counter) => counter + 1);
          // setCounter((counter) => counter + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={(e) => {
          setCounter((counter) => counter - 1);
        }}
      >
        Decrement
      </button>

      <button
        onClick={(e) => {
          setCounter((counter) => counter + 15);
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
      <span>{user.age}</span>

      <button onClick={handleUser}>Update User</button>
    </>
  );
}
