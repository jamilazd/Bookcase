import React from 'react'; 
import './BookcaseStyle.css'
import Book from '../components/Book'; 



const Bookcase = (props) => {
    return (
        <div className="container">
            <div className="row">
               <h3 className="col"> My Bookcase</h3>
               <h4 id="bookcaseinfo">
                   This is your Bookcase. Here you can save a list of books you would like to read. 
                   You can remove books from your Bookcase, using the <b>'Remove Book'</b> button.
                   Search for new books to add to your Bookcase, on the Search page. 
               </h4>
            </div>
            {props.books.map(book => <Book key={book.id} book={book} removeBook={props.removeBook}/>) }
        </div>
        
    ); 
}

export default Bookcase;



