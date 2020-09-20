import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useTranslator from '../Hooks/useTranslator';
import Display from './Display';
import Translation from './Translation';

const App = () => {
  // UI state variables
  const [strInput, setStrInput] = useState('');
  const [strEnglish, setStrEnglish] = useState('');
  const [strDisplay, setStrDisplay] = useState('');
  const [validationFlag, setValidationFlag] = useState(false);

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
    setValidationFlag(isValidated);

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
        validationFlag={validationFlag || strEnglish === 'i am not selling knives'}
        gorbyoyo={strDisplay}
      />
      <Translation
        strInput={strInput}
        setStrInput={setStrInput}
        strEnglish={strEnglish}
        setStrEnglish={setStrEnglish}
        onTranslate={onTranslate}
        validationFlag={validationFlag || strEnglish === 'i am not selling knives'}
      />
    </div>
  );
}

export default App;
