import React from 'react';
import NavBar from './Navbar';
import Buttons from '../Buttons';
import logo from './logo.svg';
import styles from './Header.module.scss';


function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.header__imagem} src={logo} alt='Easybank' />
            <NavBar />
            <Buttons />
        </header>
    )
};

export default Header;