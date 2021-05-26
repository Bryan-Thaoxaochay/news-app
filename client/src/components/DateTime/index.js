import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import "./style.css";


export default class MyComponent extends React.Component {
    
    today = Date();

    render() {
        return (
            <Moment interval={1000} class="moment" format='LLL'>
                {this.today}
            </Moment>
        );
    }
}