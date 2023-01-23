import React from 'react';
import styles from './FooterStart.module.scss';
import logo from '../icons/logo.svg';
import facebook from '../icons/icon-facebook.svg';
import instagram from '../icons/icon-instagram.svg';
import pinterest from '../icons/icon-pinterest.svg';
import twitter from '../icons/icon-twitter.svg';
import youtube from '../icons/icon-youtube.svg';

function FooterStart() {
    return (
        <>
            <img className={styles.start_image} src={logo} alt='Easybank' />
            <div className={styles.start}>
                <a href='/'>
                    <img src={facebook} alt='Facebbok' />
                </a>
                <a href='/'>
                    <img src={youtube} alt='Youtube' />
                </a>
                <a href='/'>
                    <img src={twitter} alt='Twittwe' />
                </a>
                <a href='/'>
                    <img src={pinterest} alt='Pinterest' />
                </a>
                <a href='/'>
                    <img src={instagram} alt='Instagram' />
                </a>
            </div>
        </>
    );
};

export default FooterStart;