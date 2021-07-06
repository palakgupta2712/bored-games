import React from "react";
import styles from "./Content.module.css";
import Card from "../Card/Card";

function Content() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Card title="Tic Tac Toe" />
        <Card title="Card Matching" />
        <Card title="Rock Paper Scissors" />
        <Card title="Hangman" />
        <Card title="Trivia Quiz" />
      </div>
    </React.Fragment>
  );
}

export default Content;
