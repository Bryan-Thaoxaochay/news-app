import React, { useState, useContext } from 'react';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import SearchContext from "../../utils/SearchContext";
import ArticleContext from "../../utils/ArticleContext";
import moment from 'moment';
import "./style.css"
function TimeToggler() {
    let timeFrames = [{
        timeFrame: "Today",
        active: true,
    }, {
        timeFrame: "Week",
        active: false,
    }, {
        timeFrame: "Month",
        active: false,
    }]
    let [whatTime, setWhatTime] = useState(timeFrames);
    let [currentDate, setDate] = useState();
    const { articles, setArticles } = useContext(ArticleContext)
    const { search, setSearch } = useContext(SearchContext);
    console.log(search)
    console.log(articles)
    //figuring out what time was selected and getting current date before api call
    function dateTracker(selectedTime) {
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        setDate(date);
        console.log(currentDate);
        switch (selectedTime) {
            case "Today":
                articleSearchToday();
                break;
            case "Week":
                articleSearchWeek();
                break;
            case "Month":
                articleSearchMonth();
                break;
            case "Year":
                break;
            default:
        }
    }
    //setting up to/from for specified time perameter
    function articleSearchToday() {
        if (typeof search === undefined)
        {
        fetch('/api/articles/search/' + search + "&from=" + currentDate + "&to=" + currentDate)
            .then(res => res.json())
            .then(result => setArticles(result))
            .catch(err => console.log(err));
        }
    }
    function articleSearchWeek() {
        let fromDate = moment().subtract(1, 'weeks').format("YYYY-MM-DD");
        console.log(currentDate);
        console.log(fromDate);
        fetch('/api/articles/search/' + search + "&from=" + fromDate + "&to=" + currentDate)
            .then(res => res.json())
            .then(result =>setArticles(result))
            .catch(err => console.log(err));
    };
    function articleSearchMonth() {
        let fromDate = moment().subtract(1, 'months').format("YYYY-MM-DD");
        console.log(fromDate);
        fetch('/api/articles/search/' + search + "&from=" + fromDate + "&to=" + currentDate)
            .then(res => res.json())
            .then(result => setArticles(result))
            .catch(err => console.log(err));
    }
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
        dateTracker(selectedTime);
        setWhatTime(newTimeArray)
    };
    //left arrow click function for going left on toggle slider
    function handleLeftArrowClick() {
        let countForActiveTime = 0;
        let activeFound;
        let selectedTime;
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
                selectedTime = time.timeFrame;
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
        setWhatTime(newTimeArray);
        dateTracker(selectedTime);
    };
    //right arrow click function for going right on toggle slider
    function handleRightArrowClick() {
        let countForActiveTime = 0;
        let activeFound = false;
        let selectedTime;
        let newTimeArray = whatTime.map((time) => {
            if (time.active === true) {
                if (countForActiveTime === 2) {
                    const updatedObject = {
                        ...time,
                        active: true
                    };
                    selectedTime = time.timeFrame;
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
                selectedTime = time.timeFrame;
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
        dateTracker(selectedTime);
        setWhatTime(newTimeArray)
    };
    return (
        < div className="timeTogglerComponent">
            <div className="togglerSizer">
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
            </div>
        </div >
    )
};
export { TimeToggler };