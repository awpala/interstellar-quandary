import React from 'react';

const Translation = ({ strEnglish, setStrEnglish, onTranslate, isValidated }) => { 
    return (
        <div className="translation">
            <input
                type={"text"}
                placeholder={"Enter English to translate"}
                value={strEnglish}
                onChange={e => setStrEnglish(e.target.value)}
            />
            <button onClick={() => onTranslate()}>Translate to Gorbyoyo</button>
            <h2 className="english-text">{isValidated ? "Translation Validated" : null}</h2>
        </div>
    )
}

export default Translation;