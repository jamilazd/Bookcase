import React from 'react'; 
import './About.css'; 

const About = () => {
    return (
        <header class="container">
            <h3>About Page Turners</h3>
            <hr/>
            <img src="./background" alt="" />
            <p class="about">
            The following application was created by Jamila Davis.
            This bookcase app displays a list of books that a user can save to a local bookcase
            Click on the "Add Book " button to add a book to your bookcase. Use the search bar to find new books! 
            </p>
        </header>
    ); 
}

export default About; 