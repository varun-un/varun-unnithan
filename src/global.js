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
                    <img src={require('../static/menu-icon.png')} className='menu-bars'></img>
                </span>
                <Link to="/" className="logo"><b>Varun Unnithan</b></Link>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <Link to="/" className={`nav-links  ${props.location.pathname === "/" ? "current" : ""}`} onClick={toggle}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/education" className={`nav-links  ${props.location.pathname === "/education" ? "current" : ""}`} onClick={toggle}>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills" className={`nav-links  ${props.location.pathname === "/skills" ? "current" : ""}`} onClick={toggle}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" className={`nav-links  ${props.location.pathname === "/experience" ? "current" : ""}`} onClick={toggle}>
                            Experience
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/activities" className={`nav-links  ${props.location.pathname === "/activities" ? "current" : ""}`} onClick={toggle}>
                            Activities
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/projects" className={`nav-links  ${props.location.pathname === "/projects" ? "current" : ""}`} onClick={toggle}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


function Footer(props) {

    const footerContent = () => (
        <div>
            <div className='imgContainer'>
                <a href='https://github.com/varun-un' target='_blank'>
                    <img src={require('../static/github.png')} className='linkIcon' alt='Github: varun-un'></img>
                </a>
                <a href='https://www.linkedin.com/in/varun-unnithan' target='_blank'>
                    <img src={require('../static/linkedin.png')} className='linkIcon' alt='LinkedIn: varun-unnithan'></img>
                </a>
            </div>
            <p className='footerMessage'>Created by Varun Unnithan 2024 | varun.unnithan33@gmail.com</p>
        </div>
    )

    //for pages w/ relative positioning
    if (props.top == 'none'){
        return (
            <div className='footer r'>
                {footerContent()}
            </div>
        )
    }
    //if positioning is absolute
    else {
        return (
            <div style={{top: props.top}} className='footer'>
                {footerContent()}
            </div>
        )
    }
}

export default withRouter(Header);
export {Footer};
