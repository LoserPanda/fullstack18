import React from 'react';

const Person = ({name}) => {
    return (
        <div>
            <li>
                {name}
            </li>
        </div>
    );
};

export default Person;