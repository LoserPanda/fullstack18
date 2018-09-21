import React from 'react';

const Osa = ({nimi, tehtavia}) => {
    return (
        <div>
            <li>
                {nimi} {tehtavia}
            </li>
        </div>
    );
};

export default Osa;