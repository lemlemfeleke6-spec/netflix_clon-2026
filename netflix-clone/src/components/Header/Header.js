import React from 'react';
import "./header.css";
import Netflix_favicon from"../../assets/images/netflix_favicon.ico";

const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li><img src={Netflix_favicon} alt="Netflix logo" width="100"/></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
