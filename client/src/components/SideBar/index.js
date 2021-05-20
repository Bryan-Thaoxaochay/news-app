import React, { useContext } from 'react';
import CategoryContext from "../../utils/CategoryContext";

function SideBar() {
    const { setCategory } = useContext(CategoryContext);

    return (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "width": '280px' }}>
                <ul>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={e => setCategory(e.target.value)}
                        >
                            Tech
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="business"
                            onClick={e => setCategory(e.target.value)}
                        >
                            Business
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="general"
                            onClick={e => setCategory(e.target.value)}
                        >
                            General
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="health"
                            onClick={e => setCategory(e.target.value)}
                        >
                            Health
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="science"
                            onClick={e => setCategory(e.target.value)}
                        >
                            Science
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="entertainment"
                            onClick={e => setCategory(e.target.value)}
                        >
                            Entertainment
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="sports"
                            onClick={e => setCategory(e.target.value)}
                        >
                            Sports
                        </button>
                    </li>
                </ul>
            </div>
    )
};

export default SideBar;