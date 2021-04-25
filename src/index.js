import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "./home.js";
import Header from './global.js';
import Education from './education.js';
import './stars.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={() => <Home />} />
                <Route path='/education' exact component={() => <Education />} />
                <Route path='/skills' exact component={() => <Home />} />
                <Route path='/experience' exact component={() => <Home />} />
                <Route path='/projects' exact component={() => <Home />} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
, document.getElementById("root"));