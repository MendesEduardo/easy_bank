import React from 'react';
import styles from './NavBar.module.scss';

function NavBar() {
    return (
        <nav className={styles.navbar}>
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
    );
};

export default NavBar;