import React from 'react';

const Translation = ({ strInput, setStrInput, strEnglish, onTranslate, validationFlag }) => { 
    return (
        <div className="translation">
            <input
                type="text"
                placeholder="Enter English to translate"
                value={strInput}
                onChange={e => setStrInput(e.target.value)}
            />
            <button onClick={() => onTranslate()}>Translate to Gorbyoyo</button>
            <p className="validation-status">{validationFlag ? "Translation Validated" : null}</p>
            <h1 className="english-heading">English Query:
                <p className="english-text">{strEnglish}</p>
            </h1>
        </div>
    )
}

export default Translation;