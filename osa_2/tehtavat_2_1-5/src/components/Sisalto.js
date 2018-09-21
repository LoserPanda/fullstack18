import React from 'react';
import Osa from './Osa';

const Sisalto = ({ osat }) => {
    return (
        <div>
            <ul>
                {osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)}
            </ul>
        </div>
    );
};

export default Sisalto;