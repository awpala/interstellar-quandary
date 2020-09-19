import React from 'react';

const Display = ({ intro, gorbyoyo }) => {
    return (
        <div className="display">
            <h1>{intro}</h1>
            <h2>{gorbyoyo}</h2>
        </div>
    );
}

export default Display;