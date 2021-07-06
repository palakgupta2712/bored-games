import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TicTacToe from "../pages/TicTacToe";
import CardMatching from "../pages/CardMatching";
import RockPaperScissors from "../pages/RockPaperScissors";
import Hangman from "../pages/Hangman";
import TriviaQuiz from "../pages/TriviaQuiz";

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tic-tac-toe" exact component={TicTacToe} />
          <Route path="/card-matching" exact component={CardMatching} />
          <Route
            path="/rock-paper-scissors"
            exact
            component={RockPaperScissors}
          />
          <Route path="/hangman" exact component={Hangman} />
          <Route path="/trivia-quiz" exact component={TriviaQuiz} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Routes;
