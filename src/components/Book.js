import React from 'react'; 
import PropTypes from 'prop-types'; 
import './Book.css'

const Book = (props) => {
  
  const { id, volumeInfo: { title, authors, description, imageLinks: { thumbnail } } } = props.book; 

  const renderAmount = () => {
    if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice) {
      const { saleInfo: { listPrice: { amount } } } = props.book;
      return '£' + amount; 
    }
    return 'No price available'; 
  }
  

  return (
    <div class="container">
      <img class="row" src={thumbnail} alt="book cover"/>
      <h3 class="row" id="bookTitle">{title}</h3>
      <h4 class="row">{renderAmount()}</h4>
      <h4 class="row">{authors.length === 1 ? authors[0] : authors.join(', ') }</h4>
      <p class="row">{description}</p>
      <button class="row" class="btn btn-secondary" onClick={() => props.addBook(title)}>Add Book</button>
      {/* <button onClick={() => props.removeBook(id)}>Remove Book</button> */}
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