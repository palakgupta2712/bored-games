import React from "react";
import styles from "./Content.module.css";

function Content() {
  return (
    <React.Fragment>
      {/* <h1>Tic-Tac-Toe</h1>
      <h1>Rock Paper Scissors</h1>
      <h1>Card Matching</h1>
      <h1>Trivia Quiz</h1>
      <h1>Maths Quiz</h1>
      <h1>Hangman</h1> */}
      <div className={styles.container}>
        <div>
          <div className={styles.card}></div>
          <div className={styles.title}>Tic Tac Toe</div>
          <div className={styles.action}>
            <button className={styles.play}>Play</button>
            <button className={styles.info}>Read More</button>
          </div>
        </div>
        <div>
          <div className={styles.card}></div>
          <div className={styles.title}>Card Matching</div>
          <div className={styles.action}>
            <button className={styles.play}>Play</button>
            <button className={styles.info}>Read More</button>
          </div>
        </div>
        <div>
          <div className={styles.card}></div>
          <div className={styles.title}>Rock Paper Scissors</div>
          <div className={styles.action}>
            <button className={styles.play}>Play</button>
            <button className={styles.info}>Read More</button>
          </div>
        </div>
        <div>
          <div className={styles.card}></div>
          <div className={styles.title}>Hangman</div>
          <div className={styles.action}>
            <button className={styles.play}>Play</button>
            <button className={styles.info}>Read More</button>
          </div>
        </div>
        <div>
          <div className={styles.card}></div>
          <div className={styles.title}>Trivia Quiz</div>
          <div className={styles.action}>
            <button className={styles.play}>Play</button>
            <button className={styles.info}>Read More</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
