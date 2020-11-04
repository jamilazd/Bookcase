import React, { useState } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'; 
import Header from './components/Header'; 
import Search from './components/Search'; 
import BookList from './components/BookList';
import About from './pages/About'; 
import data from './models/books.json';
import './App.css';


const App = (props) => {

  const [books, setBooks] = useState(data);
  const [ keyword, setKeyword ] = useState('');
  
  async function findBooks(value) {
    const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json()); 
    if(!results.error) {
      setBooks(results.items); 
    } 
  }

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

  



  return (
    <BrowserRouter>
      <Route exact path="/" render={() => (
      <> 
        <Header />
        <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
        <BookList books={books} addBook={addBook} />
      </>
      )} />
      <Route exact path="/bookcase" render={() => (
        <>
          <Header />
          <bookCase />
        </>
      )} />
      <Route exact path="/about" render={() => (
        <>
          <Header />
          <About />
        </>
      )} />
    </BrowserRouter>
  ); 
}
export default App;

