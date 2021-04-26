import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "./home.js";
import Header from './global.js';
import Education from './education.js';
import Skills from './skills.js';
import Experience from './experience.js';
import Projects from './projects.js';
import ScrollUp from './scrollUp.js';
import './stars.css';
import './global.css';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <ScrollUp />
        <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={300} classNames="fade">
                    <Switch location={location}>
                        <Route path='/' exact component={() => <Home />} />
                        <Route path='/education' exact component={() => <Education />} />
                        <Route path='/skills' exact component={() => <Skills />} />
                        <Route path='/experience' exact component={() => <Experience />} />
                        <Route path='/projects' exact component={() => <Projects />} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )} />
    </BrowserRouter>
, document.getElementById("root"));