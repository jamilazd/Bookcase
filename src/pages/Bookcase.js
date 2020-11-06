import React from 'react'; 
import './BookcaseStyle.css'
import Book from '../components/Book'; 



const Bookcase = (props) => {
    return (
        <div className="container">
            <div className="row">
               <h3 className="col"> Welcome to your bookcase! Here you can save a list of books you would like to read.
                   Search for new books to add to your bookcase, using the Search page. 
               </h3>
            </div>
            {props.bookcase.map(book => <Book key={book.id} book={book} />) }
        </div>
        
    ); 
}

export default Bookcase;