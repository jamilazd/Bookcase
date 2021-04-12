import React from 'react'; 
import './About.css'; 
import booklady from './booklady.jpeg'; 
 

const About = () => {
    return (
        <div className="container">
            <h1 id="aboutHead">Page Turners</h1>
            <hr/>
            <p id="about">
              Adding books to your Page Turners bookcase is a handy way of remembering which books you have to read. 
              This app includes an initial list of selected books on the Search page 
              that you can add to your Bookcase. You can also search for your own books 
              and add these too, using the <b>'Add Book'</b> button. 
            </p>
            <img id="booklady" src={booklady}  alt="lady in room of books"/>
        </div>
    ); 
}

export default About; 