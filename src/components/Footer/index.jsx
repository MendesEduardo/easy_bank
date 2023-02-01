import Buttons from 'components/Buttons';
import React from 'react';
import styles from './Footer.module.scss';
import FooterCenter from './FooterCenter';
import FooterStart from './FooterStart';

function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterStart />
            <FooterCenter />
            <div className={styles.footer__end}>
                <Buttons />
                <p>
                    © Easybank. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;