import React from 'react';
import styles from './Footer.module.scss';
import FooterStart from './FooterStart';

function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterStart />
        </footer>
    );
};

export default Footer;