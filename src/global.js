import React from 'react';
import './global.css';

function Header() {

    function toggle() {
        var mainNav = document.getElementById('js-menu');
        mainNav.classList.toggle('active');
    }

    return (
        <div>
            <nav className="navbar">
                <span className="navbar-toggle" onClick={toggle} id="js-navbar-toggle">
                    <img src='./static/menu-icon.png' className='menu-bars'></img>
                </span>
                <a href="#" className="logo"><b>Varun Unnithan</b></a>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <a href="#" className="nav-links">Home</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Education</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Skills</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Experience</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Projects</a>
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
                    <img src='./static/github.png' className='linkIcon' alt='Github'></img>
                </a>
                <a href='https://www.linkedin.com/in/varun-unnithan'>
                    <img src='./static/linkedin.png' className='linkIcon' alt='Linked'></img>
                </a>
                <a href='https://devpost.com/varun-unnithan33'>
                    <img src='./static/devpost.png' className='linkIcon' alt='Devpost'></img>
                </a>
            </div>
            <p className='footerMessage'>Created by Varun Unnithan 2021 | varun.unnithan33@gmail.com</p>
        </div>
    )
}

export { Header, Footer };
