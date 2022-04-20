import React, { useState, useEffect } from 'react';
export default function Posts() {
  const [type, setType] = useState('posts');
  const [api_data, setApiData] = useState([]);
  const api_url = `https://jsonplaceholder.typicode.com/`;
  useEffect(() => {
    let new_api_url = `${api_url}${type}`;
    fetch(new_api_url).then(async (response) => {
      let result = await response.json();
      setApiData(result);
    });
  }, [type]);
  const handleBtnClick = (newType) => {
    setType(newType);
  };
  return (
    <>
      <p>Type {type}</p>
      <button onClick={(e) => handleBtnClick('posts')}>Posts</button>
      <button onClick={(e) => handleBtnClick('comments')}>Comments</button>
      <button onClick={(e) => handleBtnClick('users')}>Users</button>
      <p>{JSON.stringify(api_data)}</p>
    </>
  );
}
