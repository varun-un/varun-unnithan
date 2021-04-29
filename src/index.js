import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './home.js';
import Header from './global.js';
import ScrollUp from './scrollUp.js';
import './stars.css';
import './global.css';

//import page components
const Education = lazy(() => import("./education.js"));
const Skills = lazy(() => import("./skills.js"));
const Experience = lazy(() => import("./experience.js"));
const Projects = lazy(() => import("./projects.js"));

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <ScrollUp />
        <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={300} classNames="fade">
                    <Suspense fallback={<div></div>}>
                        <Switch location={location}>
                            <Route path='/' exact component={() => <Home />} />
                            <Route path='/education' exact component={() => <Education />} />
                            <Route path='/skills' exact component={() => <Skills />} />
                            <Route path='/experience' exact component={() => <Experience />} />
                            <Route path='/projects' exact component={() => <Projects />} />
                        </Switch>
                    </Suspense>
                </CSSTransition>
            </TransitionGroup>
        )} />
    </BrowserRouter>
, document.getElementById("root"));