import React, {useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
import { gsap, TweenMax, Power3, Power1 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function explore() {

    //all refs for elements
    var circle = useRef(null);
    var circleGold = useRef(null);
    var circlePurple = useRef(null);
    // var circleGreen = useRef(null)
    var circleBlue = useRef(null);

    var eduImg = useRef(null);
    var eduText = useRef(null);
    var skillsImg = useRef(null);
    var skillsText = useRef(null);
    var expImg = useRef(null);
    var expText = useRef(null);
    // var actImg = useRef(null);
    // var actText = useRef(null);
    var projImg = useRef(null);
    var projText = useRef(null);

    var bg3DText = useRef(null);

    //fade in at load or scroll
    useEffect(() => {
        gsap.from(circle, {
            scrollTrigger: {
                trigger: circle,
            },
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            duration: 1, 
            delay:.4
        })
        gsap.from(circleGold, {
            scrollTrigger: {
                trigger: circle,
            },
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            duration: 1,
            delay: .8
        })
        gsap.from(circlePurple, {
            scrollTrigger: {
                trigger: circle,
            },
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            duration: 1,
            delay: 1.2
        })
        // gsap.from(circleGreen, {
        //     scrollTrigger: {
        //         trigger: circle,
        //     },
        //     opacity: 0,
        //     x: 40,
        //     ease: Power3.easeOut,
        //     duration: 1,
        //     delay: 1.6
        // })
        gsap.from(circleBlue, {
            scrollTrigger: {
                trigger: circle,
            },
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            duration: 1,
            delay: 1.6
        })
    }, [])

    const circleExpand = function(targetCircle, targetImg, targetText) {
        TweenMax.to(targetImg, .6, {width:200, height: 200, ease: Power3.easeOut});
        TweenMax.to(targetText, .6, {scale:1, y: () => 100 - .02 * window.innerWidth, x: () => -.125 * window.innerWidth, ease: Power3.easeOut});
        TweenMax.to(targetCircle, .6, {width:200, height: 200, ease: Power3.easeOut});
    }

    const circleShrink = function(targetCircle, targetImg, targetText) {
        TweenMax.to(targetImg, .6, {width:75, height: 75, ease: Power3.easeOut});
        TweenMax.to(targetText, .6, {scale:0, y: 0, x:0, ease: Power3.easeOut});
        TweenMax.to(targetCircle, .6, {width:75, height: 75, ease: Power3.easeOut});
    }

    // var i = 0;
    // const changeState = (newState) => {
    //     i++;
    //     if (i >= 1){
    //         setState(newState);
    //         i = 0;
    //     }
    // }

    //'drop shadow' of text comes out
    useEffect(() => {
        gsap.to(bg3DText, {
            scrollTrigger: {
                trigger: '.exploreText',
                start: 'top center',
                end: 'top top',
                scrub: 1,
            },
            ease: Power1.easeOut,
            x: () => (-0.00163398693 * window.innerWidth - .5),
            y: () => (0.00163398693 * window.innerWidth + .5)
        })
    }, []);


    return (
        <div className='explore'>
            <div className='exploreTextDiv'>
                <p className='exploreText'>
                    Learn more about me and check out what I do by clicking the buttons below
                </p>
                <p ref={el => {bg3DText = el}} className='bgExploreText'>
                    Learn more about me and check out what I do by clicking the buttons below
                </p>
            </div>
            <div className='circle-container'>
                <div ref={el => {circle = el}} onMouseEnter={() => circleExpand(circle, eduImg, eduText)} 
                onMouseLeave={() => circleShrink(circle, eduImg, eduText)} className='circle'>
                    <Link to="/education">
                        <img ref={el => {eduImg = el}} className='circleImg' src={require('../static/school-icon.png')}/>
                    </Link>
                    <p ref={el => {eduText = el}} className='circleText'>Education</p>
                </div>
                <div ref={el => {circleGold = el}} onMouseEnter={() => circleExpand(circleGold, skillsImg, skillsText)} 
                onMouseLeave={() => circleShrink(circleGold, skillsImg, skillsText)} className='circle gold'>
                    <Link to="/skills">
                        <img ref={el => {skillsImg = el}} className='circleImg' src={require('../static/skills-icon.png')}/>
                    </Link>
                    <p ref={el => {skillsText = el}} className='circleText'>Skills</p>
                </div>
                <div ref={el => {circlePurple = el}} onMouseEnter={() => circleExpand(circlePurple, expImg, expText)} 
                onMouseLeave={() => circleShrink(circlePurple, expImg, expText)} className='circle purple'>
                    <Link to="/experience">
                        <img ref={el => {expImg = el}} className='circleImg' src={require('../static/experience-icon.png')}/>
                        </Link>
                    <p ref={el => {expText = el}} className='circleText'>Experience</p>
                </div>

                {/* <div ref={el => {circleGreen = el}} onMouseEnter={() => circleExpand(circleGreen, actImg, actText)} 
                onMouseLeave={() => circleShrink(circleGreen, actImg, actText)} className='circle green'>
                    <Link to="/skills">
                        <img ref={el => {actImg = el}} className='circleImg' src={require('../static/activities-icon.png')}/>
                    </Link>
                    <p ref={el => {actText = el}} className='circleText'>Activities</p>
                </div> */}

                <div ref={el => {circleBlue = el}} onMouseEnter={() => circleExpand(circleBlue, projImg, projText)} 
                onMouseLeave={() => circleShrink(circleBlue, projImg, projText)} className='circle blue'>
                    <Link to="/projects">
                        <img ref={el => {projImg = el}} className='circleImg' src={require('../static/project-icon.png')}/>
                    </Link>
                    <p ref={el => {projText = el}} className='circleText'>Projects</p>
                </div>
            </div>
        </div>
    )
}

export default explore
