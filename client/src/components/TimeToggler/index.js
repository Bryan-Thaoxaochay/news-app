import React, { useState } from 'react';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import "./style.css"

function TimeToggler() {

    let [position, setPosition] = useState(0);

    const timeArray = ["Today", "Week", "Month", "Year"]

    return (
        < div >
            <CaretLeftFill className="arrow leftArrow" onClick={ () => {
                position === 0 ?
                setPosition(position = 0) : setPosition(position - 1) }}/>

            {timeArray[position]}

            <CaretRightFill className="arrow rightArrow" onClick={() => {
                position === 3 ?
                setPosition(position = 3):  setPosition(position + 1) }}/>
            <ul>
                {timeArray.map(locations => (
                    <li>
                        {locations}
                    </li>
                ))}
            </ul>
        </div >
    )
};

export { TimeToggler };