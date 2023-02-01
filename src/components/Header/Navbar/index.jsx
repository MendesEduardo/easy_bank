import React from 'react';
import './NavBar.scss';

function NavBar() {
    const handleClick = () => {
        const navbar = document.getElementById("navbar")

        navbar.classList.toggle("open")
    }

    return (
        <>
            <nav id="navbar">
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                    <li>
                        <a href='/'>Blog</a>
                    </li>
                    <li>
                        <a href='/'>Careers</a>
                    </li>
                </ul>
            </nav>
            <div className="menu">
                <div id="menu" onClick={ handleClick }>&#9776;</div>
            </div> 
        </>
    );
};

export default NavBar;