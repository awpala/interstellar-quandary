import React from 'react';

const Display = ({ validationFlag, gorbyoyo }) => {
    // introduction strings (conditionally rendered)

    // "suspicious visitor says" -- displays this string initially
    const strSuspicious = 'wyo234yyo238wyo234tyo228myo214gyo202myo214syo226yyo238wyo234ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234';

    // "peaceful visitor says" -- displays this string once validated via query "i am not selling knives"
    const strPeaceful = 'tyo228iyo206eyo198gyo202iyo206jyo208yyo238pyo220ayo240myo214wyo234myo214xyo236syo226vyo232wyo234eyo198dyo246wyo234'; 

    return (
        <div className="display">
            <h1 className="gorbyoyo-validated">{validationFlag ? strPeaceful : strSuspicious}</h1>
            <p className="gorbyoyo-text">{gorbyoyo}</p>
        </div>
    );
}

export default Display;