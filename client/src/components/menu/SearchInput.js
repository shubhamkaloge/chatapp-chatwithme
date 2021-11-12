import React from 'react'
import { SearchOutlined } from "@material-ui/icons"

import "./Searchinput.css"
const SearchInput = ({setSearchText}) => {
    return (
        <>
            <div className="SearchInput__sidebarSearch">
                <div className="SearchInput__sidebarSearchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search your friend" onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                </div>
            </div>
        </>
    )
}

export default SearchInput
