import React from 'react'; 
import './Header.css'; 

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword); 
    }
    return(
        
        <nav className="container">
            <form className="row " onSubmit={handleSubmit}>
              <input id="searchbox"  className="col form-control-lg"
                type="text" 
                value={props.keyword} 
                onChange={(e) => {props.setKeyword(e.target.value) } } 
              />
              <button className="btn btn-outline-secondary" type="search">Find Book</button>
           </form>
        </nav>
       
    ); 
}

export default Search;