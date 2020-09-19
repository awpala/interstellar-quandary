import React from 'react';

const Translation = ({ strInput, setStrInput, strEnglish, onTranslate, isValidated }) => { 
    return (
        <div className="translation">
            <input
                type={"text"}
                placeholder={"Enter English to translate"}
                value={strInput}
                onChange={e => setStrInput(e.target.value)}
            />
            <button onClick={() => onTranslate()}>Translate to Gorbyoyo</button>
            <h2 className="english-text">{isValidated ? "Translation Validated" : null}</h2>
            <h2>English Query: {strEnglish}</h2>
        </div>
    )
}

export default Translation;