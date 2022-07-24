import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div className='about'>
            <div className="a-left">
                <div className="a-left-wrapper">
                    <h2 className='a-hello'>Hey, I'm</h2>
                    <h1 className='a-name'>Steph</h1>
                    <div className="a-roles">
                        <div className="a-roles-wrapper">
                            <div className="a-roles-item1">Front-End Developer</div>
                            <div className="a-roles-item2">Web Designer</div>
                            <div className="a-roles-item3">Graphic Designer</div>
                            <div className="a-roles-item4">Photographer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="a-right">
                <div className="a-right-wrapper">
                    <h2>Fascinated by the internet, I began an adventure so that I can make some beautiful user experiences myself. Even though i have no work experience yet, I've participated in projects with wonderful people where I contributed by being a Front-End App Developer, aswell as Graphic Designer.</h2>
                </div>
            </div>
        </div>

    )
}

export default About;