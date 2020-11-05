import React from 'react'; 
import './Header.css'; 

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword); 
    }
    return(
        
        <nav class="container">
            <form class="row " onSubmit={handleSubmit}>
              <input  class="col form-control-lg"
                type="text" 
                value={props.keyword} 
                onChange={(e) => {props.setKeyword(e.target.value) } } 
              />
              <button class="btn btn-outline-secondary" type="search">Find Book</button>
           </form>
        </nav>
       
    ); 
}

export default Search;