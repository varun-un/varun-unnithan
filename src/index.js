import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "./home.js";
import Header from './global.js';
import Education from './education.js';
import './stars.css';
import './global.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={300} classNames="fade">
                        <Switch location={location}>
                            <Route path='/' exact component={() => <Home />} />
                            <Route path='/education' exact component={() => <Education />} />
                            <Route path='/skills' exact component={() => <Home />} />
                            <Route path='/experience' exact component={() => <Home />} />
                            <Route path='/projects' exact component={() => <Home />} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </BrowserRouter>
    </React.StrictMode>
, document.getElementById("root"));