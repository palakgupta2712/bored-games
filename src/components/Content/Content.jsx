import React from "react";
import styles from "./Content.module.css";
import Card from "../Card/Card";

function Content() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Card title="Tic Tac Toe" />
        <Card title="Rock Paper Scissors" />
        <Card title="Trivia Quiz" />
        <Card title="Matching Cards" />
        <Card title="Hangman" />
      </div>
    </React.Fragment>
  );
}

export default Content;
