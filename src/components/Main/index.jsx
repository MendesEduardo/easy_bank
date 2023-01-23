import React from 'react';
import CardMain from './CardMain';
import styles from "./Main.module.scss";

function Main() {
    return (
        <main className={styles.main}>
            <h2 className={styles.main__title}>Why choose Easybank?</h2>
            <p className={styles.main__paragraph}>
                We leverage Open Banking to turn your bank account into your financial hub.<br/>
                Control your finances like never before.
            </p>
            <CardMain />
        </main>
    )
};

export default Main;