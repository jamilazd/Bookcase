import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Header = () => {

  return (
    
    <header>
      <ul class="nav nav-tabs nav justify-content-end navbar navbar-expand-lg navbar-light bg-light">
        <nav class="nav-item">
          <Link class="nav-link Home" to="/">Home</Link>
        </nav>
        <nav class="nav-item">
          <Link class="nav-link" to="/bookcase">Bookcase</Link>
        </nav>
        <nav class="nav-item">
          <Link class="nav-link About" to="/About">About</Link>
        </nav>
      </ul>
   </header>   
  ); 
}



export default Header; 

