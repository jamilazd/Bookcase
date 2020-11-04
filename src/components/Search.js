import React from 'react';

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword); 
    }
    return(
        <nav class="nav justify-content-end">
            <form class="form-inline"  onSubmit={handleSubmit}>
              <h1>{props.keyword && 'Searching for keyword: ' + props.keyword}</h1>
              <input class="form-control mr-sm-2 "
                type="text" 
                value={props.keyword} 
                onChange={(e) => {props.setKeyword(e.target.value) } } 
              />
            <input class="form-control form-control-sm" type="submit"/>
           </form>
        </nav>
       
    ); 
}

export default Search;