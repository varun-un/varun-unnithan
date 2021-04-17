import React, {useRef, useEffect} from 'react';
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Picorbit from './picOrbit.js';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function about() {
    var bgLine1 = useRef(null);
    var bgLine2 = useRef(null);
    var bgLine3 = useRef(null);
    var bgLine4 = useRef(null);
    var bgLine5 = useRef(null);

    useEffect(() => {
        gsap.to(bgLine1, {
            scrollTrigger: {
                trigger: bgLine1,
                start: 'top bottom',
                end: '+=100%',
                scrub: 1,
            },
            x: (window.innerWidth),
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine2, {
            scrollTrigger: {
                trigger: bgLine2,
                start: 'top bottom',
                end: '+=100%',
                scrub:1,
            },
            x: (window.innerWidth)/-1,
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine3, {
            scrollTrigger: {
                trigger: bgLine3,
                start: 'top bottom',
                end: '+=100%',
                scrub:1,
            },
            x: (window.innerWidth),
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine4, {
            scrollTrigger: {
                trigger: bgLine4,
                start: 'top bottom',
                end: '+=100%',
                scrub:1,
            },
            x: (window.innerWidth)/-1,
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine5, {
            scrollTrigger: {
                trigger: bgLine5,
                start: 'top bottom',
                end: '+=100%',
                scrub:1,
            },
            x: (window.innerWidth),
        })
    }, []);

    return (
        <div className='about-page'>
            <h1 ref={el => {bgLine1 = el}} className='leftDesc'>Aerospace&emsp;Coding&emsp;Problem Solving&emsp;3D Modelling</h1>
            <h1 ref={el => {bgLine2 = el}} className='rightDesc'>Computers&emsp;Engineering&emsp;Science&emsp;Quantum Computing</h1>
            <h1 ref={el => {bgLine3 = el}} className='leftDesc'>Web Development&emsp;Space&emsp;AI&emsp;Programming</h1>
            <h1 ref={el => {bgLine4 = el}} className='rightDesc'>Astrophysics&emsp;Mathematics&emsp;Physics&emsp;Algorithms</h1>
            <h1 ref={el => {bgLine5 = el}} className='leftDesc'>Creativity&emsp;Electronics&emsp;Cosmology&emsp;Innovation</h1>
            <Picorbit />
        </div>
    )
}

export default about;
