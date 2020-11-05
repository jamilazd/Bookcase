import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {

  return (
    
    <header>
      <div class="card">
        <div class="card-body">Welcome to Page Turners, a world of books await!</div>
      </div>
      <ul class="nav nav-tabs nav justify-content-start navbar navbar-expand-lg navbar-light bg-light">
        <nav class="nav-item">
          <Link class="nav-link Home" to="/">Home</Link>
        </nav>
        <nav class="nav-item">
          <Link class="nav-link" to="/bookcase">Bookcase</Link>
        </nav>
        <nav class="nav-item">
          <Link class="nav-link About" to="/About">About</Link>
        </nav>
        <nav>
          <div id="brand" class="navbar-brand">Page Turners</div>
        </nav>
      </ul>
   </header>   
  ); 
}

export default Header; 