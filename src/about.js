import React, {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function about() {
    var bgLine1 = useRef(null);
    var bgLine2 = useRef(null);
    var bgLine3 = useRef(null);
    var bgLine4 = useRef(null);
    var bgLine5 = useRef(null);
    var bgLine6 = useRef(null);
    var bgLine7 = useRef(null);
    var rectElem = useRef(null);

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
    useEffect(() => {
        gsap.to(bgLine6, {
            scrollTrigger: {
                trigger: bgLine6,
                start: 'top bottom',
                end: '+=100%',
                scrub:1,
            },
            x: (window.innerWidth) * -1,
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine7, {
            scrollTrigger: {
                trigger: bgLine7,
                start: 'top bottom',
                end: '+=100%',
                scrub:1,
            },
            x: (window.innerWidth),
        })
    }, []);
    useEffect(() => {
        gsap.to('.rectangle', {
            scrollTrigger: {
                trigger: '.rectangle',
                start: 'bottom bottom',
                end: '+=50%',
                scrub:1,
            },
            width: .47 * (window.innerWidth)
        })
    }, []);

    return (
        <div className='about-page'>
            <div className='bgPhrases'>
                <h1 ref={el => {bgLine1 = el}} className='leftDesc'>Astrophysics&emsp;Coding&emsp;Problem Solving&emsp;3D Modelling</h1>
                <h1 ref={el => {bgLine2 = el}} className='rightDesc'>Computers&emsp;Engineering&emsp;Aerospace&emsp;Communication</h1>
                <h1 ref={el => {bgLine3 = el}} className='leftDesc'>Web Development&emsp;Science&emsp;AI&emsp;Programming</h1>
                <h1 ref={el => {bgLine4 = el}} className='rightDesc'>Space&emsp;Mathematics&emsp;Physics&emsp;Algorithms</h1>
                <h1 ref={el => {bgLine5 = el}} className='leftDesc'>Creativity&emsp;Technology&emsp;Cosmology&emsp;Innovation</h1>
                <h1 ref={el => {bgLine6 = el}} className='rightDesc'>Creativity&emsp;Electronics&emsp;Energy&emsp;Networks</h1>
                <h1 ref={el => {bgLine7 = el}} className='leftDesc'>Future&emsp;Machine Learning&emsp;Quantum Computing&emsp;CAD</h1>
            </div>
            <div className='aboutContent'>
                <div className='intro'>
                    <div ref={el => {rectElem = el}} className='rectangle'></div>
                    <div className='hiDiv'>
                        <h2 className='hi'>Hi, my name is Varun Unnithan.</h2>
                    </div>
                </div>
                <div className='description flex-direction'>
                    <img src='./static/ameba.gif' className='picOrbit'/>
                    <p className='aboutDesc'>BlahBlahBlahBlahBlahBlahBlahBlahBlahB lahBlahBlahBlahBlahBlahBlah</p>
                </div>
            </div>
        </div>
    )
}

export default about;
