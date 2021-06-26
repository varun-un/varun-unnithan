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
                    <img src='./headshot.png' className='picOrbit' alt='Headshot of Varun Unnithan' />
                    <p className='aboutDesc'>
                        I'm a rising senior in high school from New Jersey, where I attend <i>The Academy for Mathematics,
                        Science, and Engineering</i>. Beyond just being a student however, I look to expand my breadth of knowledge, as in 
                        my eyes, that is something not only incredibly rewarding in and of itself, but also extremely powerful. And so, all 
                        throughout my life, I have always tried to learn of new topics and ideas which fascinate me, ranging from quantum 
                        mechanics to psychology, all with the goal of furthering my own knowledge and abilities. However, throughout my 
                        experiences, the concepts of <b className='red'>space</b> and <b className='red'>computer science</b> are ones which 
                        have especially intrigued me. Learning the secrets of our fascinating universe, along with being able to create 
                        amazing computer programs to do things that were previously unheard of, are ambitions which drive me forward. However, 
                        despite the two being different fields, I have the same goal for both: to further the human understanding and 
                        capabilities. 
                        <br /><br />
                        Applying the knowledge I have gained is what I see as the first step to reaching my end goal. And so, I have 
                        started to utilize my abilities to create projects which both improve my own understanding, but also lead to the
                        creation of products which I believe can have a positive impact. I am currently looking for an internship in 
                        a STEM-related field, as I believe that my abilities and knowledge can help any team succeed and create amazing
                        products like these.
                        <br /><br />
                        I hope you'll join me on this journey to create something truly amazing.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about;
