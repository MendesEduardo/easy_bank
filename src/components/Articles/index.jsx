import React from 'react'
import CardArticles from './CardArticles';
import ArticlesInfos from "./ArticlesInfos.json";
import styles from './Articles.module.scss';

function Articles() {
  return (
    <>
      <div className={styles.ArticlesTitle}>
        <h2>Latest Articles</h2>
      </div>
      <div className={styles.Articles}>
        {ArticlesInfos.map(card => <CardArticles
          key={card.id}
          info={card.info}
          titulo={card.titulo}
          imagem={card.imagem}
          by={card.by}
        />)}
      </div>
    </>
  )
}

export default Articles;