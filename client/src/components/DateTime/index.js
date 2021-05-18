import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

function DateTime() {

    const dateToFormat = new Date();
    return (
        <Moment interval={60000} format='LLLL'>{dateToFormat}</Moment>
    );
}

export default DateTime;