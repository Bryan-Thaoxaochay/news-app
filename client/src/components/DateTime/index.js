import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import "./style.css";


function DateTime() {

    const dateToFormat = new Date();
    return (
        <Moment className= "moment"interval={60000} format='LLLL'>{dateToFormat}</Moment>
    );
}


export default DateTime;