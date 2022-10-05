import React from 'react';
import '../../../src/styles/Navbar.css';
import SearchBar from '../Common/SearchBar';
function TopNav(){
    return(
        <div className="topnav">
            <div className="search-component">
              <SearchBar/>
            </div>
        </div>
    )
}

export default TopNav;