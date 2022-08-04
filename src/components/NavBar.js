import React from 'react';
import '../App.css';

const NavBar = () => {
    return (
        <nav className='header'>
            <a href="#welcome"><h3>Home</h3></a>
            <a href="#about"><h3>About</h3></a>
            <a href="#projects"><h3>Projects</h3></a>
            <a href="#contact"><h3>Contact</h3></a>
        </nav>

    )
}

export default NavBar;