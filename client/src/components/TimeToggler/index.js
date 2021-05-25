import React, { useState, useContext } from 'react';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import SearchContext from "../../utils/SearchContext";
import ArticleContext from "../../utils/ArticleContext";
import "./style.css"

function TimeToggler() {
    const {articles, setArticles} = useContext(ArticleContext)
    const {search, setSearch} = useContext(SearchContext);
    console.log(search)
    console.log(articles)

    let timeFrames = [{
        timeFrame: "Today",
        active: true,
    }, {
        timeFrame: "Week",
        active: false,
    }, {
        timeFrame: "Month",
        active: false,
    }, {
        timeFrame: "Year",
        active: false,
    }]

    let [whatTime, setWhatTime] = useState(timeFrames);

    //function for handling click of bottom bar
    function handleTimeToggle(event) {
        let selectedTime = event.target.id;

        let newTimeArray = whatTime.map((time) => {
            if (time.timeFrame === selectedTime) {
                const updatedObject = {
                    ...time,
                    active: true
                };
                return updatedObject;
            } else {
                const updatedObject = {
                    ...time,
                    active: false
                };
                return updatedObject;
            }
        })
        console.log(newTimeArray)
        setWhatTime(newTimeArray)
    };

    //left arrow click function for going left on toggle slider
    function handleLeftArrowClick() {
        let countForActiveTime = 0;
        let activeFound;

        whatTime.map((time) => {
            if (time.active === true) {
                activeFound = countForActiveTime;
            }
            countForActiveTime += 1;
        })

        //shifting position left
        if (activeFound !== 0) {
            activeFound -= 1;
        }
        //reset count for active time for next mapping
        countForActiveTime = 0;

        let newTimeArray = whatTime.map((time) => {
            if (countForActiveTime == activeFound) {
                const updatedObject = {
                    ...time,
                    active: true
                };
                countForActiveTime += 1;
                return updatedObject;
            } else {
                const updatedObject = {
                    ...time,
                    active: false
                };
                countForActiveTime += 1;
                return updatedObject;
            }

        })

        setWhatTime(newTimeArray)
    };


    //right arrow click function for going right on toggle slider
    function handleRightArrowClick() {

        let countForActiveTime = 0;
        let activeFound = false;

        let newTimeArray = whatTime.map((time) => {
            if (time.active === true) {
                if (countForActiveTime === 3) {
                    const updatedObject = {
                        ...time,
                        active: true
                    };
                    return updatedObject;
                } else {
                    const updatedObject = {
                        ...time,
                        active: false
                    };
                    activeFound = true;
                    countForActiveTime += 1;
                    return updatedObject;
                }
            } if (activeFound === true) {
                const updatedObject = {
                    ...time,
                    active: true
                };
                countForActiveTime += 1;
                activeFound = false;
                return updatedObject;
            } else {
                const updatedObject = {
                    ...time,
                    active: false
                };
                countForActiveTime += 1;
                return updatedObject;
            }
        })
        setWhatTime(newTimeArray)
    };


    return (

        < div className="timeTogglerComponent">
            <CaretLeftFill className="arrow leftArrow" onClick={handleLeftArrowClick} />

            {whatTime.map(timeframe => (
                (timeframe.active) ? <div className="active toggledTime" id={timeframe.timeFrame} onClick={handleTimeToggle}>{timeframe.timeFrame}</div> : <li className="toggledTime" style={{ display: "none" }} id={timeframe.timeFrame} onClick={handleTimeToggle}></li>
            ))}

            <CaretRightFill className="arrow rightArrow" onClick={handleRightArrowClick} />

            <ul className="bottomToggler">
                {whatTime.map(timeframe => (
                    (timeframe.active) ? <li className="bottomActive bottomToggleElement" id={timeframe.timeFrame} onClick={handleTimeToggle}>{timeframe.timeFrame}</li> : <li className="bottomToggleElement" id={timeframe.timeFrame} onClick={handleTimeToggle}>{timeframe.timeFrame}</li>
                ))}
            </ul>
        </div >
    )
};

export { TimeToggler };