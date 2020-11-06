import React from 'react'; 
import './About.css'; 
 

const About = () => {
    return (
        <header className="container">
            <h3>About Page Turners</h3>
            <hr/>
            <p className="about">
            This app displays a list of books that you can easily add to a bookcase, using the <b>'Add book'</b> button. 
            Adding books to your bookcase is a handy way of remembering which books you have to read!
            Search for more books to add, using the search bar.  
            </p>
        </header>
    ); 
}

export default About; 