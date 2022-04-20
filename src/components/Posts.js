import React, { useState, useEffect } from 'react';
export default function Posts() {
  const [type, setType] = useState('');
  return (
    <>
      <button>Posts</button>
      <button>Comments</button>
      <button>Users</button>
    </>
  );
}
