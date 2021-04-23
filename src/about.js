import React, {useRef, useEffect} from 'react';
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                scrub:.5,
            },
            x: () => (window.innerWidth),
            ease: Power0.easeNone
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine2, {
            scrollTrigger: {
                trigger: bgLine2,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth)/-1,
            ease: Power0.easeNone
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine3, {
            scrollTrigger: {
                trigger: bgLine3,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth),
            ease: Power0.easeNone
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine4, {
            scrollTrigger: {
                trigger: bgLine4,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth)/-1,
            ease: Power0.easeNone
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine5, {
            scrollTrigger: {
                trigger: bgLine5,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth),
            ease: Power0.easeNone
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine6, {
            scrollTrigger: {
                trigger: bgLine6,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth) * -1,
            ease: Power0.easeNone
        })
    }, []);
    useEffect(() => {
        gsap.to(bgLine7, {
            scrollTrigger: {
                trigger: bgLine7,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth),
            ease: Power0.easeNone
        })
    }, []);
    useEffect(() => {
        gsap.to('.rectangle', {
            scrollTrigger: {
                trigger: '.rectangle',
                start: 'bottom bottom',
                end: '+=50%',
                scrub:.5,
            },
            width: () => .47 * (window.innerWidth),
            ease: Power0.easeNone
        })
    }, []);

    return (
        <div className='about-page'>
            <div className='bgPhrases'>
                <h1 ref={el => {bgLine1 = el}} className='leftDesc'>Astrophysics&emsp;Coding&emsp;Problem Solving&emsp;Space</h1>
                <h1 ref={el => {bgLine2 = el}} className='rightDesc'>Computers&emsp;Engineering&emsp;Aerospace&emsp;Programming</h1>
                <h1 ref={el => {bgLine3 = el}} className='leftDesc'>Web Development&emsp;Science&emsp;AI&emsp;Communication</h1>
                <h1 ref={el => {bgLine4 = el}} className='rightDesc'>3D Modelling&emsp;Mathematics&emsp;Physics&emsp;Algorithms</h1>
                <h1 ref={el => {bgLine5 = el}} className='leftDesc'>Creativity&emsp;Technology&emsp;Cosmology&emsp;Innovation</h1>
                <h1 ref={el => {bgLine6 = el}} className='rightDesc'>Creativity&emsp;Quantum Computing&emsp;Energy&emsp;Networks</h1>
                <h1 ref={el => {bgLine7 = el}} className='leftDesc'>Future&emsp;Machine Learning&emsp;Electronics&emsp;CAD</h1>
            </div>
            <div className='aboutContent'>
                <div className='intro'>
                    <div ref={el => {rectElem = el}} className='rectangle'></div>
                    <div className='hiDiv'>
                        <h2 className='hi'>Hi, my name is Varun Unnithan.</h2>
                    </div>
                </div>
                <div className='description flex-direction'>
                    <img src='./ameba.gif' className='picOrbit' alt='A headshot of Varun Unnithan' />
                    <p className='aboutDesc'>
                        I'm currently an 11th grader from New Jersey, where I attend <i>The Academy for Mathematics,
                        Science, and Engineering</i> in Rockaway. However, regardless of this, I tend to think of myself not
                        as a student, but as a developer, innovator, and most of all, a thinker. I enjoy learning about all 
                        kinds of topics, ranging genetics to quantum mechanics, however, the subjects which fascinate me the most 
                        aerospace and computer science. I've created projects and learned regarding these topics, as it's
                        something I enjoy doing in my free time. In the future, whether it be for college, or for a job, I hope 
                        to pursue these fields, as well as do my best to innovate and develop new products that can push 
                        the envelope of human capability and understanding. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about;
