import React from 'react'; 
import './BookcaseStyle.css'
import Book from '../components/Book'; 



const Bookcase = (props) => {
    return (
        <div className="container">
            <div className="row">
               <h3 className="col"> My Bookcase</h3>
               <h4 id="bookcaseinfo">
                   This is your bookcase. Here you can save a list of books you would like to read. 
                   Search for new books to add to your bookcase, using the Search page. 
               </h4>
            </div>
            {props.books.map(book => <Book key={book.id} book={book} removeBook={props.removeBook}/>) }
        </div>
        
    ); 
}

export default Bookcase;



