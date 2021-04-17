import React, {useRef, useEffect} from 'react';
import { gsap, TweenMax, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Face3d from "./face3d.js";
import AboutPage from './about.js';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function home() {

    return (
        <div className="homePage">
            <div className='circleBG'></div>
            <Face3d />
            <p className='titleFirstName'>Varun<br></br>&nbsp;&nbsp;Unnithan</p>
            <div className='scrollArrowDiv'>
                <a className="scroll-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
            </div>
            <AboutPage />
        </div>
    )
}

export default home;
