import React from 'react';
import '../App.css';

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="p-section-title">Projects</h1>
            <div className="project-wrapper">
                <div className="project-item">
                    <h1 className="p-title">This website</h1>
                    <h3 className='p-text'>Responsive Website built using React, Webpack and Babel. It could also be built with pure HTML and CSS but I choose React in order to get familliar with some tools and workflows.</h3>
                </div>
                <div className="project-item">
                    <h1 className="p-title">Check My Steam</h1>
                    <h3 className='p-text'>A Greek STEAM toy evaluation App, that helps educators and parents with choosing the right products for their children. My responsibilities in this project consisted of Full-Stack App Development using Flutter and Back4App, Graphic Design and scientific research.</h3>
                </div>
                <div className="project-item">
                    <h1 className="p-title">LinkTree Clone</h1>
                    <h3 className='p-text'>Simple link redirection website using HTML, CSS and JavaScript, following LinkTree's logic of design and functionality.</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects;