import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');

  function handleResponse(response) {debugger
    console.log(response);
  }

  function search() {
    //e.prevenDefault();
    alert(`Searching for ${keyword} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  
  return (
    <div className='Dictionary'>
      <form onSubmit={search}>
        <input type='search' onChange={handleKeywordChange} />
        <button type='submit'>submit</button>
      </form>
    </div>
  ); 
}