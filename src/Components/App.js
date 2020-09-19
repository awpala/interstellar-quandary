import React, { useState, useEffect } from 'react';
import useTranslator from '../Hooks/useTranslator';
import axios from 'axios';

import Display from './Display';
import Translation from './Translation';

const App = () => {
  // component state variables
  const [strEnglish, setStrEnglish] = useState('');
  const [strDisplay, isValidated] = useTranslator(strEnglish);

  // introduction strings
  const strSuspicious = 'wyo234yyo238wyo234tyo228myo214gyo202myo214syo226yyo238wyo234ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234'; // "suspicious visitor says" -- displays this string initially
  const strPeaceful = 'tyo228iyo206eyo198gyo202iyo206jyo208yyo238pyo220ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234'; // "peaceful visitor says" -- displays this string once validated

  // initial mount (populates last query if page refreshed via GET to database)
  useEffect(() => {
    axios.get('/api/phrase')
      .then(res => setStrEnglish(res.data[0].english))
      .catch(err => console.log(err));
  }, [])

  // handler - PUT to database on button click
  const onTranslate = () => {
    axios.put('/api/phrase', { 
      english: strEnglish,
      gorbyoyo: strDisplay
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <Display
        intro={isValidated ? strPeaceful : strSuspicious}
        gorbyoyo={strDisplay}
      />
      <Translation
        strEnglish={strEnglish}
        setStrEnglish={setStrEnglish}
        onTranslate={onTranslate}
        isValidated={isValidated}
      />
    </div>
  );
}

export default App;
