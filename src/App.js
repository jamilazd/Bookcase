import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from './components/Header'; 
import Search from './components/Search'; 
import BookList from './components/BookList';
import About from './pages/About'; 
import data from './models/books.json';
import './App.css';


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
    <BrowserRouter>
      <Route path="/" render={() => (
      <> 
        <Header />
        <Search />
        <BookList books={books} addBook={addBook} />
      </>
      )} />
      <Route path="/bookcase" render={() => (
        <>
          <Header />
          <BookList books={books} addBook={addBook} />
        </>
      )} />
      <Route path="/about" render={() => (
        <>
          <Header />
          <About />
        </>
      )} />
    </BrowserRouter>
  ); 
}


export default App;

