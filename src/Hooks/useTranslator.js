import { useState, useEffect } from 'react';
import axios from 'axios';

const useTranslator = (textToTranslate) => {
    // state variables
    const [arrDorbdorb, setArrDorbdorb] = useState([]);
    const [textToVerify, setTextToVerify] = useState('');
    const [isValidated, setIsValidated] = useState(false);
    const baseUrl = 'https://72exx40653.execute-api.us-east-1.amazonaws.com/prod';

    // auxiliary functions to translate from Dorbdorb to Gorbyoyo
    const dorbWordParser = (dorbWord) => {
        const integers = dorbWord.split(/[a-z]/gi); // extract integers
        const alpha = dorbWord.match(/[a-z]/gi)[0]; // extract alpha character

        return `${alpha}yo${parseInt(integers[0], 10) + parseInt(integers[1], 10)}`;
    }

    const dorbToGorb = (strDorb) => {
        let strGorb = '';

        // build Gorbyoyo translation string via auxiliary function dorbWordParser
        for(let dorbWord of strDorb) {
            strGorb += dorbWordParser(dorbWord);
        }

        return strGorb;
    }

    // translate English input to Dorbdorb
    useEffect(() => {
        axios.post(`${baseUrl}/translateEnglishToAlien`, { textToTranslate })
            .then(res => setArrDorbdorb(res.data))
            .catch(err => console.log(err));
    }, [textToTranslate]);

    // translate Dorbdorb to Gorbyoyo, validate result
    useEffect(() => {
        setTextToVerify(dorbToGorb(arrDorbdorb));
    
        axios.post(`${baseUrl}/confirmtranslation`, { textToVerify })
            .then(res => setIsValidated(res.data === "Success"))
            .catch(err => console.log(err));
    }, [arrDorbdorb, textToVerify]);

    // return Gorbyoyo translation and validation status
    return [textToVerify, isValidated];
}

export default useTranslator;