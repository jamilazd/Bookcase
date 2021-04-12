import React from 'react'; 
import './BookcaseStyle.css'
import Book from '../components/Book'; 
import bookpic from './bookpic.jpeg'; 


const Bookcase = (props) => {
    return (
        <div className="container">
            <div className="row">
               <div className="col">
                  <h3 id="homeHeading"> My Bookcase</h3>
                   <p id="bookcaseinfo">
                     Find new books to add to your Bookcase, on the Search page. 
                  </p>
                  <img id="bookpic" src={bookpic} alt="books photo" />
               </div>
               
            </div>
            {props.books.map(book => <Book key={book.id} book={book} removeBook={props.removeBook}/>) }
        </div>
        
    ); 
}

export default Bookcase;



