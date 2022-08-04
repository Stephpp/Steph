import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div id="about">
            <h1 className="a-section-title">About</h1>
            <div className="about-wrapper">
            <div className="a-left">
                <div className="a-left-wrapper">
                    <h2>User Interfaces are what captured me the most when I started learning about Web and App development. End-users' first impressions are built around a product's appereance and feel.<br/>Even though i have no work experience yet, I've participated in projects with some wonderful people where I contributed as a Front-End App Developer, aswell as a Graphic Designer.<br/>Constantly willing to learn, new ideas emerge as my skillset grows.</h2>
                </div>
            </div>
            <div className="a-right">
                <div className="a-right-wrapper">
                    <h2>Skills</h2>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;