import React, {useRef, useEffect} from 'react';
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Picorbit from './picOrbit.js';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function about() {
    var hiElem = useRef(null);
    var introElem = useRef(null);

    useEffect(() => {
        gsap.to(hiElem, {
            scrollTrigger: {
                trigger: hiElem,
                start: 'top bottom',
                end: 'top top',
                scrub:1,
            },
            x: (window.innerWidth)/2,
        })
    }, []);
    useEffect(() => {
        gsap.to(introElem, {
            scrollTrigger: {
                trigger: introElem,
                start: 'top bottom',
                end: 'top top',
                scrub:1,
            },
            x: (window.innerWidth)/-2,
        })
    }, []);

    return (
        <div className='about-page'>
            <h1 ref={el => {hiElem = el}} className='hi'>Hi,</h1><br></br>
            <h1 ref={el => {introElem = el}} className='imVarun'>I'm Varun Unnithan.</h1>
            <Picorbit />
        </div>
    )
}

export default about;
