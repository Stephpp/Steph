import React from 'react';
import './App.css'
import Welcome from './components/Welcome';
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <div id="app">
            {/* <NavBar/> */}
            <Welcome/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;