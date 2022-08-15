import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');

  function search(event) {
    /* event.prevenDefault(); */
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  
  return (
    <div className='Dictionary'>
      <form onSubmit={search}>
        <input type='search' onChange={handleKeywordChange}>
        </input>
      </form>
    </div>
  ); 
}