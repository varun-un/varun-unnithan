import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './global.css';

function Header(props) {

    function toggle() {
        var mainNav = document.getElementById('js-menu');
        mainNav.classList.toggle('active');
    }

    return (
        <div>
            <nav className="navbar">
                <span className="navbar-toggle" onClick={toggle} id="js-navbar-toggle">
                    <img src='./menu-icon.png' className='menu-bars'></img>
                </span>
                <Link to="/" className="logo"><b>Varun Unnithan</b></Link>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <Link to="/" className={`nav-links  ${props.location.pathname === "/" ? "current" : ""}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/education" className={`nav-links  ${props.location.pathname === "/education" ? "current" : ""}`}>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills" className={`nav-links  ${props.location.pathname === "/skills" ? "current" : ""}`}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" className={`nav-links  ${props.location.pathname === "/experience" ? "current" : ""}`}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={`nav-links  ${props.location.pathname === "/projects" ? "current" : ""}`}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

function Footer(props) {
    return (
        <div style={{top: props.top + '%'}} className='footer'>
            <div className='imgContainer'>
                <a href='https://github.com/varun-un'>
                    <img src='./github.png' className='linkIcon' alt='Github'></img>
                </a>
                <a href='https://www.linkedin.com/in/varun-unnithan'>
                    <img src='./linkedin.png' className='linkIcon' alt='Linked'></img>
                </a>
                <a href='https://devpost.com/varun-unnithan33'>
                    <img src='./devpost.png' className='linkIcon' alt='Devpost'></img>
                </a>
            </div>
            <p className='footerMessage'>Created by Varun Unnithan 2021 | varun.unnithan33@gmail.com</p>
        </div>
    )
}

export default withRouter(Header);
export {Footer};
