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
                    <img src={require('../static/collage.png')} className='picOrbit' alt='Pictures of Varun Unnithan' />
                    <p className='aboutDesc'>
                        I'm a junior at the <i>University of Maryland</i> in College Park, where I am a double major in Aerospace Engineering and
                        Computer Science, while expecting to graduate in May 2026. One common theme throughout my life is that I love to learn 
                        new things and expanding my knowledge. Whether it be learning the latest news about business and the corporate world, or just watching
                        YouTube videos about ancient civilizations, I've had a curiosity that has yet to be quenched. 
                        <br /><br />
                        From the beginning however, two topics have always stood out to me: <b className='red'>space</b> and <b className='red'>technology</b>.
                        To 7-year-old me, the idea of the cosmos and outer space was as intriguing as any fantasy story, and I would spend hours reading books 
                        and watching documentaries about the universe. As I grew up, I learned more about new technologies and the softwares that drive our world,
                        and its accessibility drew me to start coding and creating my own projects, quickly falling in love with the process and the potential they 
                        held.
                        <br /><br />
                        Since then, I've had one main goal in mind: to further the human understanding and capabilities in both of these fields. It's driven me to
                        take part in projects and work that interests me in the fields of computer science and aerospace engineering. I've experienced so many new 
                        cultures, technologies, and ideas, and I've loved every second of it. I truly believe in the saying that if you love what you do, you'll never
                        work a day in your life — so by pursuing my passions in my career, I hope to experience that.
                        <br /><br />
                        I've done a lot, but in my eyes I'm just getting started. I hope you'll join me on this journey to create something amazing.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about;
