import React from 'react';
import Statistic from './Statistic';

const Statistics = (props) => {
    return (
        <table>
            <tbody>
                <Statistic label={'hyvä'} tyyppi={props.tila.hyva} />
                <Statistic label={'neutraali'} tyyppi={props.tila.neutraali} />
                <Statistic label={'huono'} tyyppi={props.tila.huono} />
                <Statistic label={'keskiarvo'} tyyppi={props.keskiarvo} />
                <Statistic label={'positiivisia'} tyyppi={props.positiivisia} />
            </tbody>
        </table>
    );
};

export default Statistics;