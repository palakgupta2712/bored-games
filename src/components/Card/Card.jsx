import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ title }) {
  return (
    <div>
      <div className={styles.card}></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.action}>
        <button className={`${styles.play} ${styles.button}`}>
          <Link
            to={`/${title.toLowerCase().split(" ").join("-")}`}
            className={styles.link}
          >
            Play
          </Link>
        </button>
        <button className={`${styles.info} ${styles.button}`}>Read More</button>
      </div>
    </div>
  );
}

export default Card;
