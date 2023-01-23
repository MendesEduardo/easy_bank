import React from 'react';
import styles from './CardArticles.module.scss';


function CardArticles(props) {
    return (
        <ul className={styles.cardArticles}>
            <li key={props.id}>
                <img className={styles.cardArticles__imagem}
                    src={props.imagem}
                    alt={props.titulo}
                />
                <p className={styles.cardArticles__paragraph1}>
                    {props.by}
                </p>
                <h4 className={styles.cardArticles__title}>
                    {props.titulo}
                </h4>
                <p className={styles.cardArticles__paragraph}>
                    {props.info}
                </p>
            </li>
        </ul>
    );
};

export default CardArticles;