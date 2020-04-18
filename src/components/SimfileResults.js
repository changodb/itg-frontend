import React from 'react';

export default ({ simfileResults }) => {
    const results = simfileResults.map(
        (simfile, index) => (
            <li key={index.toString()}>
                {JSON.stringify(simfile)}
            </li>)
    );

    return (
        <ul>
            {results}
        </ul>)
}