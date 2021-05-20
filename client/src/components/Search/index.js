import React, { useState } from "react";
// import SearchResult from "../../utils/SearchResult";
import API from "../../utils/API";

function Search() {

    const [search, setSearch] = useState();

    const handleInputChange = event => {

        const { value } = event.target;
        setSearch(value);
    }

    const handleOnClick = event => {
        event.preventDefault();
        //Call API here with value from search
        API.getSearch(search)
            .then(res => {
                console.log(res.data)
            });
        console.log(search)
    };



    return (
        <form className="d-flex">
            <input
                className="form-control me-2"
                value={search}
                onChange={handleInputChange}
                placeholder="Search"
            />
            <button
                className="btn btn-success"
                type="submit"
                onClick={handleOnClick}
            >
                Search
        </button>
        </form>
    )
}

export default Search;