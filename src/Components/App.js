import React, { useState } from 'react';
import useTranslator from '../Hooks/useTranslator';

const App = () => {
  const [strGorbyoyo, setStrGorbyoyo] = useState('');

  const [strDisplay, isValidated] = useTranslator(strGorbyoyo);

  const strSuspicious = 'wyo234yyo238wyo234tyo228myo214gyo202myo214syo226yyo238wyo234ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234'; // "suspicious visitor says"

  const strPeaceful = 'tyo228iyo206eyo198gyo202iyo206jyo208yyo238pyo220ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234'; // "peaceful visitor says"

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
        value={strGorbyoyo}
        onChange={e => setStrGorbyoyo(e.target.value)}
      />
      <button>Translate to Gorbyoyo</button>
      <h2> {isValidated ? "Translation Validated" : null}
      </h2>
    </div>
  );
}

export default App;
