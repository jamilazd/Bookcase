import React, { useState } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header'; 
import Search from './components/Search'; 
import SearchList from './components/SearchList';
import About from './pages/About'; 
import data from './models/books.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

  const [searchBooks, setSearchBooks] = useState(data);
  const [ keyword, setKeyword ] = useState('');
  
  async function findBooks(value) {
    const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`).then
    (res => res.json()); 
    if(!results.error) {
      setSearchBooks(results.items); 
    } 
  }

  function addBook(title) {
    console.log(`The Book ${title} was clicked`); 
    const newBooks = searchBooks.filter(book => {
      if (title === book.volumeInfo.title) {
        return false; 
      }
      return true; 
    });
    setSearchBooks(newBooks)
  }

  //function removeBook

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => (
      <> 
        <Header />
        <SearchList books={searchBooks} addBook={addBook} />
      </>
      )} />
      <Route exact path="/bookcase" render={() => (
        <>
          <Header />
          <bookCase/>
        </>
      )} />
      <Route exact path="/search" render={() => (
        <>
          <Header />
          <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
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

