import React from 'react';

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.label}</td><td>{props.tyyppi}</td>
        </tr>
    );
};

export default Statistic;