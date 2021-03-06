import React, { useState, useMemo, useEffect } from 'react';

export default function UseMemofn() {
  const [count, setCount] = useState(0);
  const [txt_value, setTxtValue] = useState(false);

  const slow_fn = (cn_number) => {
    console.log('Sdf');
    for (let i = 0; i <= 99999999; i++) {
      return cn_number * 2;
    }
  };
  useMemo(() => {
    slow_fn(5);
  }, []);
  useEffect(() => {
    console.log('reder');
  }, [txt_value, count]);
  const handleChange = (e) => {
    console.log(e.target.value);
    setCount(e.target.value == '' ? parseInt(0) : parseInt(e.target.value));
  };
  const handleClick = (e) => {
    setTxtValue((prev_txt) => !prev_txt);
  };
  return (
    <>
      <br />
      <p> Count Value {count}</p>
      <input type="text" onChange={handleChange} value={count} />
      <p> Text Value {txt_value ? 'trest' : 'sdfhkj'}</p>
      <button onClick={handleClick}>Change</button>
    </>
  );
}
