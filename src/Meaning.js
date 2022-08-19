import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className='Meaning'>
      <h3>
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition: </strong> {definition.definition}
              <div className='example'><em>{definition.example}</em></div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        )
      })}
    </div>
  ); 
}