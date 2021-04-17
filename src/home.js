import React, {useRef, useEffect} from 'react';
import { gsap, TweenMax, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Name3d from "./name3d.js";
import AboutPage from './about.js';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function home() {

    return (
        <div className="homePage">
            <Name3d />
            <div className='scrollArrowDiv'>
                <a className="scroll-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
            </div>
            <AboutPage />
        </div>
    )
}

export default home;
