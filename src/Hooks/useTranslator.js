import { useState, useEffect } from 'react';
import axios from 'axios';

const useTranslator = (textToTranslate) => {
    // state variables
    const [arrGorbyoyo, setArrGorbyoyo] = useState([]);
    const [textToVerify, setTextToVerify] = useState('');
    const [isValidated, setIsValidated] = useState(false);
    const baseUrl = 'https://72exx40653.execute-api.us-east-1.amazonaws.com/prod';

    // auxiliary functions
    const dorbWordParser = (gorbWord) => {
        const integers = gorbWord.split(/[a-z]/gi); // extract integers
        const alpha = gorbWord.match(/[a-z]/gi)[0]; // extract alpha character

        return alpha +"yo".concat(parseInt(integers[0], 10) + parseInt(integers[1], 10));
    }

    const dorbToGorb = (strDorb) => {
        let strGorb = '';

        // build Gorbyoyo string translation via auxiliary function dorbWordParser
        for(let word of strDorb) {
            strGorb += dorbWordParser(word);
        }

        return strGorb;
    }

    // translate English input to Dorbdorb
    useEffect(() => {
        axios.post(`${baseUrl}/translateEnglishToAlien`, { textToTranslate })
        .then(res => setArrGorbyoyo(res.data))
        .catch(err => console.log(err));
    }, [textToTranslate]);

    // translate Dorbdorb to Gorbyoyo, validate result
    useEffect(() => {
        setTextToVerify(dorbToGorb(arrGorbyoyo));
    
        axios.post(`${baseUrl}/confirmtranslation`, { textToVerify })
        .then(res => setIsValidated(res.data === "Success"))
        .catch(err => console.log(err));
    }, [arrGorbyoyo, textToVerify]);

    // return translation and validation status
    return [textToVerify, isValidated];
}

export default useTranslator;