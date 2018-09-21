import React from 'react';

const Yhteensa = ({osat}) => {
    console.log(osat.tehtavia);

    return (
        <div>
            <p>
                yhteensä {osat.map(osa => osa.tehtavia).reduce((total, num) => total + Number(num))} tehtävää
            </p>
        </div>
    );
};

export default Yhteensa;