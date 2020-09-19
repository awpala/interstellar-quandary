import React, { useState, useEffect } from 'react';
import useTranslator from '../Hooks/useTranslator';
import axios from 'axios';

import Display from './Display';
import Translation from './Translation';

const App = () => {
  // UI state variables
  const [strInput, setStrInput] = useState('');
  const [strEnglish, setStrEnglish] = useState('');
  const [strDisplay, setStrDisplay] = useState('');

  // translation logic via custom hook useTranslator
  const [strGorbyoyo, isValidated] = useTranslator(strInput);

  // initial mount (populates last query if page refreshed via GET to database)
  useEffect(() => {
    axios.get('/api/phrase')
      .then(res => {
        setStrEnglish(res.data[0].english);
        setStrDisplay(res.data[0].gorbyoyo);
      })
      .catch(err => console.log(err));
  }, [])

  // handler - PUT to database on button click
  const onTranslate = () => {
    setStrEnglish(strInput);
    setStrDisplay(strGorbyoyo);

    axios.put('/api/phrase', { 
      english: strInput,
      gorbyoyo: strGorbyoyo
    })
    .catch(err => console.log(err));

    setStrInput('');
  }

  return (
    <div className="App">
      <Display
        isValidated={isValidated}
        gorbyoyo={strDisplay}
      />
      <Translation
        strInput={strInput}
        setStrInput={setStrInput}
        strEnglish={strEnglish}
        setStrEnglish={setStrEnglish}
        onTranslate={onTranslate}
        isValidated={isValidated}
      />
    </div>
  );
}

export default App;
