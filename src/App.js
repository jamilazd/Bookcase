import React, { useState } from 'react';
import BookList from './components/BookList';
import data from './models/books.json';


const App = (props) => {

  const [books] = useState(data);

  return (
    <div>
      <BookList books={books}/>
   </div>
  );
}


export default App;
