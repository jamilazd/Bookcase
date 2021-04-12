import React from 'react'; 
import './BookcaseStyle.css'
import Book from '../components/Book'; 
import bookpic from './bookpic.jpeg'; 


const Bookcase = (props) => {
    return (
        <div className="container">
            <div className="row">
               <div className="col">
                  <h1 id="homeH1">Page Turners</h1>
                  <h2 id="homeH2"> Bookcase</h2>
                   <p id="bookcaseinfo">
                     Find new books to add to your <b>Bookcase</b>, using the <b>Search</b> page. 
                  </p>
                  <img id="bookpic" src={bookpic} alt="books photo" />
               </div>
               
            </div>
            {props.books.map(book => <Book key={book.id} book={book} removeBook={props.removeBook}/>) }
        </div>
        
    ); 
}

export default Bookcase;



