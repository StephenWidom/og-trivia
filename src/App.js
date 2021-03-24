import React, { useState } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import kebabCase from "lodash/kebabCase";
import { quiz } from "./quiz.js";

import Landing from "./components/Landing";
import Header from "./components/Header";

import "./App.scss";

const App = () => {
  const [questions, setQuestions] = useState(quiz);

  return (
    <div className="App">
      <Header />
      <Switch>
        {quiz.map((round) => {
          const QuizTemplate = round.template;
          return (
            <Route key={round.category} path={`/${kebabCase(round.category)}`}>
              <QuizTemplate
                quiz={questions.filter((r) => r.category === round.category)[0]}
              />
            </Route>
          );
        })}
        <Route path="/" exact={true}>
          <Landing quiz={questions} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
