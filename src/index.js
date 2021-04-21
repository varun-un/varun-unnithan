import React from "react";
import ReactDOM from "react-dom";
import Home from "./home.js";
import { Header } from './global.js';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Home />
    </React.StrictMode>
, document.getElementById("root"));