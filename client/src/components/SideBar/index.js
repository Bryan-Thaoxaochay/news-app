import React from 'react';

function SideBar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{"width": '280px'}}>
            <ul>
                <li className="nav-item">
                    <a href="#" className="nav-link active">
                        Tech
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active">
                        Business
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active">
                        Hobby
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active">
                        Sports
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default SideBar;