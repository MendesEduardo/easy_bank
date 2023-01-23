import React from 'react';
import styles from './Presentation.module.scss';
import bgIntro from './bg-intro-desktop.svg';
import mockups from './image-mockups.png';
import Buttons from '../Buttons';

function Presentation() {
    return (
        <section className={styles.section}>
            <div className={styles.section__presentation}>
                <h1 className={styles.section__title}>Next generation digital banking</h1>
                <p className={styles.section__paragraph}>
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <Buttons />
            </div>
            <div className={styles.section__bgImagens}>
                <img className={styles.section__intro} src={bgIntro} alt='Intro' />
                <img className={styles.section__mockups} src={mockups} alt='Mockups' />
            </div>
        </section>
    );
};

export default Presentation;