import React from 'react'; 
import './About.css'; 
 

const About = () => {
    return (
        <header className="container">
            <h3>About Page Turners</h3>
            <hr/>
            <p className="about">
            This app can be used to add books to your very own Bookcase. Adding books to your 
            bookcase is a handy way of remembering which books you have to read. 
            This app includes an initial list of selected books, on the Search page that you can 
            add to your Bookcase. You can also search for your own books and add these too! 
            </p>
        </header>
    ); 
}

export default About; 