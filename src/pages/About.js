import React from 'react'; 
import './About.css'; 
import booklady from './booklady.jpeg'; 
 

const About = () => {
    return (
        <div className="container">
            <h1 id="aboutHead">Page Turners</h1>
            <hr/>
            <p id="about">
              Adding books to your <b>Page Turners</b> bookcase is a handy way of remembering which books you want to read. 
              The <b>Search page</b> lists some initial books to get you started. You can also search for your own books and add these too.
            </p>
            <img id="booklady" src={booklady}  alt="lady in room of books"/>
        </div>
    ); 
}

export default About; 