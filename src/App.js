import React, { useState } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import { quiz } from "./utils.js";

import Landing from "./components/Landing";
import Music from "./components/Music";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import Animals from "./components/Animals";
import Header from "./components/Header";

import "./App.scss";

const App = () => {
    const [questions, setQuestions] = useState(quiz);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/music">
                    <Music quiz={questions.find((q) => q.category === "Music")} />
                </Route>
                <Route path="/movies">
                    <Movies quiz={questions.find((q) => q.category === "Movies")} />
                </Route>
                <Route path="/sports">
                    <Sports quiz={questions.find((q) => q.category === "Sports")} />
                </Route>
                <Route path="/animals">
                    <Animals quiz={questions.find((q) => q.category === "Animals")} />
                </Route>
                <Route path="/" exact={true}>
                    <Landing quiz={questions} />
                </Route>
            </Switch>
        </div>
    );
};

export default withRouter(App);
