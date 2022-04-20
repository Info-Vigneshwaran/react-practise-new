import React, { useState, useMemo, useEffect } from 'react';

export default function SlowFunction() {
  const [count, setCount] = useState(0);
  const [txt_value, setTxtValue] = useState('');
  return (
    <>
      <p> Text Value {txt_value}</p>
    </>
  );
}
