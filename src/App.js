import React, { useState } from 'react';
import BookList from './components/BookList';
import data from './models/books.json';
import './App.css';
//import Book from './components/Book';


const App = (props) => {

const [books, setBooks] = useState(data);

  function addBook(title) {
    console.log(`The Book ${title} was clicked`); 
    const newBooks = books.filter(book => {
      if (title === book.volumeInfo.title) {
        return false; 
      }
      return true; 
    });
    setBooks(newBooks)
  }

  if (books.length === 0) {
    return 'No books found';
  }
  return (
    <div>
      <BookList books={books} addBook={addBook} />
   </div>
  );
}


export default App;
