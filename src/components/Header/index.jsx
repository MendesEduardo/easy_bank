import React from 'react';
import NavBar from './Navbar';
import logo from './logo.svg';
import styles from './Header.module.scss';
import Buttons from 'components/Buttons';

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