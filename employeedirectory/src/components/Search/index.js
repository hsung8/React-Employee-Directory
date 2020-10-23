import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="textCenter">
            <form>
                <input 
                type="text" 
                name="search"
                className="searchForm"
                value={props.search} 
                onChange={props.handleChange}
                placeholder = "Type keyword to search"
                />
            </form>
        </div>
    )
}

export default Search