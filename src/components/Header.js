import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
      <header className="header">
          <h1 id="mainH1">My Page Turners</h1>
          <nav>
          <Link to="/">Home&nbsp;</Link>
          <Link to="/bookcase" className="bookLink">&nbsp;Bookcase</Link>
          <Link to="/About">&nbsp; About</Link>
          </nav>
      </header>
    ); 
}


export default Header; 