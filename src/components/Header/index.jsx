import React from 'react';
import NavBar from './Navbar';
import logo from './logo.svg';
import styles from './Header.module.scss';

function Header() {
 
    return (
        <header className={styles.header}>
            <img className={styles.header__imagem} src={logo} alt='Easybank' />
            <NavBar />
        </header>
    )
};

export default Header;