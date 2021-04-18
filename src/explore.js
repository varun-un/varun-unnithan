import React, {useRef, useEffect, useState} from 'react';
import { TweenMax, Power3 } from 'gsap';

function explore() {

    var circle = useRef(null);
    var circleRed = useRef(null);
    var circleBlue = useRef(null);

    const[state, setState] = useState(false);

    const circleExpand = function() {
        TweenMax.to(circleRed, .8, {width:200, height: 200, ease: Power3.easeOut});
        setState(true);
    }

    const circleShrink = function() {
        TweenMax.to(circleRed, .8, {width:75, height: 75, ease: Power3.easeOut});
        setState(false);
    }

    useEffect(() => {                       //change to be on scroll, not on page load
        TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, {
            opacity: 0,
            x: 40,
            ease: Power3.easeOut
        }, .2)
    }, []);

    return (
        <div className='explore'>
            <div className='circle-container'>
                <div ref={el => {circle = el}} className='circle'></div>
                <div ref={el => {circleRed = el}} onClick={state !== true ? circleExpand : circleShrink} className='circle red'></div>
                <div ref={el => {circleBlue = el}} className='circle blue'></div>
            </div>
        </div>
    )
}

export default explore
