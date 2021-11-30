import React from "react";
import styles from "./Content.module.css";
import Card from "../Card/Card";

function Content() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Card title="Rock Paper Scissors" image="./img/pic1.png" />
        <Card title="Tic Tac Toe" image="./img/pic2.png" />
        <Card title="Trivia Quiz" image="./img/pic3.png" />
        <Card title="Maths Wizard" image="./img/pic4.png" />
        {/* <Card title="Matching Cards" /> */}
        {/* <Card title="Hangman" /> */}
      </div>
    </React.Fragment>
  );
}

export default Content;
