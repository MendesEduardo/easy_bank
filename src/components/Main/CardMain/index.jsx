import React from "react";
import styles from "./CardMain.module.scss";
import mainInfos from "./MainInfos.json";

function CardMain() {
  return (
    <ul className={styles.cardMain}>
      {mainInfos.map((mainInfo) => {
        return (
          <li key={mainInfo.id}>
            <img src={mainInfo.imagem} alt={mainInfo.titulo}/>
            <h4 className={styles.cardMain__title}>{mainInfo.titulo}</h4>
            <p className={styles.cardMain__paragraph}>
              {mainInfo.info}
            </p>
          </li>
        )
      })}
    </ul>
  );
};

export default CardMain;