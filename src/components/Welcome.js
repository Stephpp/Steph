import React from 'react';
import '../App.css';

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className="w-left">
                <div className="w-left-wrapper">
                    <h2 className='w-hello'>Hey, I'm</h2>
                    <h1 className='w-name'>Steph</h1>
                    <div className="w-roles">
                        <div className="w-roles-wrapper">
                            <div className="w-roles-item1">Front-End Developer</div>
                            <div className="w-roles-item2">Graphic Designer</div>
                            <div className="w-roles-item3">Web Designer</div>
                            <div className="w-roles-item4">Photographer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-right">
                <div className="w-right-wrapper">
                    <h2>Fascinated by the internet, I began an adventure so that I can make some beautiful user experiences myself.</h2>
                </div>
            </div>
        </div>

    )
}

export default Welcome;