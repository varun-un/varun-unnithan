import React, {useRef, useEffect} from 'react';
import { gsap, TweenMax, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Face3d from "./face3d.js";
import AboutPage from './about.js';
import Explore from './explore.js'
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function home() {
    var titleElem = useRef(null);

    useEffect(() => {
        TweenMax.to(titleElem, 3, {opacity:1, y:-30, ease:Power2.easeOut})
    }, []);

    return (
        <div className="homePage">
            <div className='circleBG'></div>
            <Face3d />
            <p ref={el => {titleElem = el}} className='titleName'>Varun <br></br>&nbsp;&nbsp;Unnithan</p>
            <div className='scrollArrowDiv'>
                <a className="scroll-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
            </div>
            <AboutPage />
            <Explore />
        </div>
    )
}

export default home;
