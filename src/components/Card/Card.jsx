import React from "react";
import styles from "./Card.module.css";

function Card({ title }) {
  return (
    <div>
      <div className={styles.card}></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.action}>
        <button className={styles.play}>Play</button>
        <button className={styles.info}>Read More</button>
      </div>
    </div>
  );
}

export default Card;
