import React from 'react'; 
import PropTypes from 'prop-types'; 
import './Book.css'

const Book = (props) => {
  
  const { volumeInfo: { title, authors, description, imageLinks: { thumbnail } } } = props.book; 

  const renderAmount = () => {
    if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice) {
      const { saleInfo: { listPrice: { amount } } } = props.book;
      return '£' + amount; 
    }
    return 'No price available'; 
  }
  

  return (
    <div className="container">
      <img className="row" src={thumbnail} alt="book cover"/>
      <h3 className="row" id="bookTitle">{title} - {authors.length === 1 ? authors[0] : authors.join(', ') }</h3>
      <h4 className="row">{renderAmount()}</h4>
      <p className="row">{description}</p>
      {props.addBook && (
        <button className="row" className="btn btn-secondary" onClick={() => props.addBook(title)}>Add Book</button>
      )}
      {props.removeBook && (
        <button className="row" className="btn btn-secondary" onClick={() => props.removeBook(title)}>Remove Book</button>
      )}
    </div>
    
  );    
}

Book.propTypes = {
  title: PropTypes.string
}; 

Book.defaultProps = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      })
    }),
    saleInfo: PropTypes.shape({
      listPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired
      })
    })
  })
}; 

export default Book;