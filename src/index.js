import React from "react";
import ReactDOM from "react-dom";
import Home from "./home.js";
import { Header, Footer } from './global.js';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Home />
        <Footer top='600' />
    </React.StrictMode>
, document.getElementById("root"));