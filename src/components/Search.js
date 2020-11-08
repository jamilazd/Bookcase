import React from 'react'; 
import './Header.css'; 

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword); 
    }
    return(
        
        <nav id="navBackground" className="container">
            <form className="row " onSubmit={handleSubmit}>
              <input id="searchbox"  className="col form-control-lg"
                type="text" 
                value={props.keyword} 
                onChange={(e) => {props.setKeyword(e.target.value) } } 
              />
              <button className="btn btn-outline-secondary" type="search">Find Book</button>
           </form>
           <p id="searchInfo">Search for books by book title, using the search function above</p>
        </nav>
       
    ); 
}

export default Search;