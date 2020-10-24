import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="textCenter">
            <input
                type="text"
                name="search"
                className="searchForm"
                value={props.search}
                onChange={props.handleInputChange}
                placeholder="Type keyword to search"
            />
        </div>
    )
}

export default Search