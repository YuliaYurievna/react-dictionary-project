import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className='Dictionary'>
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do you want to look up?</label>
            <input type='search' placeholder='Search for a word' className='form-contol search-input' onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
          </form>
          <small className='hint'>i.e. paris, wine, yoga, coding</small>
        </section>
        
        <Results results={results} />
      </div>
    ); 
  } else {
    load();
    return 'Loading';
  }
}