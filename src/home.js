import React from 'react';
import Name3d from "./name3d.js";
import AboutPage from './about.js';
import './home.css';

function home() {
    return (
        <div className="homePage">
            <Name3d />
            <p className="slogan">a high school student looking to the future</p>
            <a className="scroll-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
            <AboutPage className='about-page'/>
        </div>
    )
}

export default home;
