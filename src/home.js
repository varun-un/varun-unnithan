import React, {useRef, useEffect} from 'react';
import { gsap, TweenMax, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Face3d from "./face3d.js";
import AboutPage from './about.js';
import Explore from './explore.js';
import Contact from './contact.js';
import { Footer } from './global.js';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function home() {
    var titleElem = useRef(null);
    var titleElem2 = useRef(null);

    //title fade in on load
    useEffect(() => {
        TweenMax.to(titleElem, 1, {opacity:1, y:-20, ease:Power2.easeOut})
        TweenMax.to(titleElem2, 1, {opacity:1, y:-20, ease:Power2.easeOut})
    }, []);

    //title parallax motion
    document.addEventListener('mousemove', parallax);
    document.addEventListener('mousedown', parallax);
    function parallax(e){
        this.querySelectorAll('.titleName').forEach(element => {
            let x = (window.innerWidth - e.pageX * 10) / 160;
            let y = (window.innerHeight - e.pageY * 12) / 140;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    return (
        <div>
            <div className="homePage">
                <Face3d />
                <section>
                    <h2 ref={el => {titleElem2 = el}} className='titleName'>Varun <br></br>&nbsp;&nbsp;Unnithan</h2>
                    <div className='titleTextBox'>
                        <h2 ref={el => {titleElem = el}} className='titleName'>Varun <br></br>&nbsp;&nbsp;Unnithan</h2>
                    </div>
                </section>
                <AboutPage />
                <Explore />
                <Contact />
            </div>
            <Footer top='600' />
        </div>
    )
}

export default home;
