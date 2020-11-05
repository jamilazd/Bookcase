import React from 'react'; 
import './BookStyle.css'; 
import Book from '../components/Book'; 



const Bookcase = (props) => {
    return (
        <div>
            {props.bookcase.map(book => <Book key={book.id} book={book} addBook={props.addBook} 
      removeBook={props.removeBook}/>) }
        </div>
        
    ); 
}

export default Bookcase;