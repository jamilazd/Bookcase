import React, { useState } from 'react';

const Search = (props) => {
    const [ keyword, setKeyword ] = useState('');
    return(
        <form>
            <h1>{keyword && 'Searching for keyword: ' + keyword}</h1>
            <input 
              type="text" 
              value={keyword} 
              onChange={(e) => {setKeyword(e.target.value) } } 
            />
            <button>Find Book</button>
        </form>
    ); 
}

export default Search;