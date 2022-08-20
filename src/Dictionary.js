import React, { useState } from 'react';
import Results from './Results';
import Photos from './Photos';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey = '563492ad6f917000010000013edb84ce47734e31bebf3a56683ac819';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    ); 
  } else {
    load();
    return 'Loading';
  }
}