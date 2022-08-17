import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState({});

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.stopPropagation();

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
      <Results results={results} />
    </div>
  ); 
}