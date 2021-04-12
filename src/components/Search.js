import React from 'react'; 
import './Search.css'; 

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword); 
    }
    return(
        
        <div id="searchDiv" className="container">
            <form id="form" className="row" onSubmit={handleSubmit}>
              <input id="searchbox"  className="col form-control-lg"
                type="text" 
                value={props.keyword} 
                onChange={(e) => {props.setKeyword(e.target.value) } } 
              />
              <button id="searchButton" className="btn btn-outline-secondary" type="search">Find Book</button>
           </form>
        </div>
       
    ); 
}

export default Search;