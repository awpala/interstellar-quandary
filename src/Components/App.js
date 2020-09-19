import React, { useState, useEffect } from 'react';
import useTranslator from '../Hooks/useTranslator';
import axios from 'axios';

const App = () => {
  // component state variables
  const [strEnglish, setStrEnglish] = useState('');
  const [strDisplay, isValidated] = useTranslator(strEnglish);

  // introduction strings
  const strSuspicious = 'wyo234yyo238wyo234tyo228myo214gyo202myo214syo226yyo238wyo234ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234'; // "suspicious visitor says"
  const strPeaceful = 'tyo228iyo206eyo198gyo202iyo206jyo208yyo238pyo220ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234'; // "peaceful visitor says" -- displays this string once validated

  // initial mount (populates last query if page refreshed)
  useEffect(() => {
    axios.get('/api/word')
      .then(res => setStrEnglish(res.data[0].word_text))
      .catch(err => console.log(err));
  }, [])

  // handler - PUT to database on button click
  const onTranslate = () => {
    axios.put('/api/word', { word_text: strEnglish })
    .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <header>
        {isValidated ? strPeaceful : strSuspicious}
      </header>
      <h1>
        {strDisplay}
      </h1>
      <input
        type={"text"}
        placeholder={"Enter English to translate"}
        value={strEnglish}
        onChange={e => setStrEnglish(e.target.value)}
      />
      <button onClick={() => onTranslate()}>Translate to Gorbyoyo</button>
      <h2 className="english-text"> {isValidated ? "Translation Validated" : null}</h2>
    </div>
  );
}

export default App;
