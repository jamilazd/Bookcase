import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {

  return (
    <header>
      <div >
        <ul id="nav" className="nav nav-tabs nav justify-content-end navbar navbar-expand-lg navbar-light"> 
          <nav className="nav-item">
            <Link className="nav-link Home" to="/">Home</Link>
          </nav>
          <nav className="nav-item">
              <Link className="nav-link Search" to="/Search">Search</Link>
          </nav>
          <nav className="nav-item">
            <Link className="nav-link About" to="/About">About</Link>
          </nav>
        </ul>
      </div>  
    </header> 
  ); 
}

export default Header; 

