import React from 'react';
import { Link } from "react-router-dom";
import PageTitle from './pageTitle.js';
import PageSection from './pageSection.js';
import SectionBody from './sectionBody.js';
import { Footer } from './global.js';
import './pages.css';

function skills() {
    return (
        <div className='pageAbs'>
            <div className='skills'>
                <PageTitle title='Skills' sections={['Coding', '3D & CAD', 'Engineering', 'Soft Skills']} 
                links={['#coding', '#3d&cad', '#engineering', '#softSkills']} starOffset='' />
                <div id='coding'></div>
                <PageSection section='Coding'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Java
                            <img src='./java.png' className='toolImg' title="Java"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Java is an object-oriented programming language, used often to create applications or build back-end
                            modules for the internet. I have known Java for nearly two years now, starting with the AP Computer Science A
                            class I took in my high school. In this class I excelled, scoring a perfect 5 on the AP Computer Science A test,
                            and since then I have self-taught myself much more about the language, in order to improve my ability to utilize
                            Java and its features. <br /><br />
                            Beyond just a functional knowledge of Java and its syntax, I am also familiar with the Java Swing library, which
                            is a library built into Java for the purpose of creating component-based GUIs. A project in which I used this 
                            can be found <Link to="/projects#fblaquiz">here</Link>.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Javascript
                            <img src='./javascript.png' className='toolImg' title="Javascript"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Javascript is a a scripting programming language used largely for creating interactive webpages, as well as 
                            having applications outside of websites. I currently have a good mastery and handle on much of Javascript and 
                            its syntax, and I am able to use the language to create webpages, algorithms and even game-like programs.
                            <br /><br />
                            Outside of vanilla Javascript, I also have experience with the <a href="#babylon">Babylon.js</a>
                            &nbsp;library for creating 3D objects with Javascript, as well as with the <a href="#react">React</a>
                            &nbsp;library. I also have limited experience with the GSAP library, which is used to create animations in 
                            Javascript for HTML elements.
                        </p> 
                    </SectionBody>
                    <div id='react'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            React
                            <img src='./react.png' className='toolImg' title="ReactJS"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            ReactJS, or React, is a Javascript library for creating component-based UIs as well as single-page applications.
                            I have learned the basics of React and JSX, the syntax used to embed HTML into Javascript, and have a good 
                            understanding of how React works with the HTML DOM. Though this may be a relatively new library to me, I believe 
                            I have a good understanding of it and can quickly learn how to utilize React to its full potential.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            HTML and CSS
                            <img src='./html.png' className='toolImg' title="HTML5"></img>
                            <img src='./css.png' className='toolImg' title="CSS3"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            HTML and CSS are the languages used to build and design webpages as well as define their structure. Between 
                            hackathons and personal projects, I have come to learn much of the syntax concerning these languages, as well as
                            how to use them to create a good-looking website. I know how to build a website using HTML tags, as well as how
                            to use CSS classes and media queries to make a site responsive and aesthetically pleasing. 
                        </p> 
                    </SectionBody>
                </PageSection>
                <div id='3d&cad'></div>
                <PageSection section='3D & CAD'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            SolidWorks
                            <img src='./solidworks.png' className='toolImg' title="SolidWorks"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            SolidWorks is a computer-aided modeling and drafting program that can be used to create and test 3D prototypes. 
                            I have a very good grasp of SolidWorks and its feature-based modeling system, having used it for over two years 
                            now in the two CAD classes I have taken in school. I know how to read engineering drawings, and have used 
                            SolidWorks to both replicate these drawings, as well as create my own from 3D models I have designed. 
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Blender
                            <img src='./blender.png' className='toolImg' title="Blender"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            Blender is a computer graphics program used for modeling 3D objects as well as creating visual effects and 3D 
                            animations. Within Blender, I know how to model and create meshes, as well as use UV mapping and procedural
                            texturing to create scenes. I am also experienced with keyframe animation within Blender to create animated 
                            scenes. I also use Blender to create 3D models as part of my workflow coding 3D based programs, such as those
                            with Babylon.js. 
                        </p> 
                    </SectionBody>
                    <div id='babylon'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Babylon.js
                            <img src='./babylon.png' className='toolImg' title="Babylon.js"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            Babylon.js is a real time 3D engine and library based in Javascript to create and interact with 3D graphics 
                            within a web browser. Babylon.js is built on top of WebGL, and allows for 3D models to be integrated into 
                            webpages, such as the ones on this website. In Babylon.js I know how to create and import 3D models, as well
                            as interact with them through user input. I currently have a good foundational understanding of the engine, and
                            I look to continue to expand my expertise in it.
                        </p> 
                    </SectionBody>
                </PageSection>
                <div id='engineering'></div>
                <PageSection section='Engineering'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Mathematics</h3><br />
                        <p className='sectionDuration'>Skill Level: Advanced</p><br />
                        <p className='sectionBody'>
                            In the field of math, I am very proficient, as I have a good grasp of many mathematical techniques and processes.
                            I have mastered up to Single Variable Calculus (Calculus 2), and am currently enrolled in an AP Calculus BC class.
                            This also means that I have a very good grasp of algebra and differential equations, which are important in 
                            engineering. Most importantly, however, I have good mathematical reasoning, meaning I can solve many math-based 
                            problems effectively.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Physics</h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            I have a good understanding of basic physics principles, having taken an AP Physics 1 class and gotten a perfect
                            score of 5 in the AP Physics 1 test. I understand kinematics and am able to use physics to model the motion and 
                            energy of objects and their systems well. I also have a good understanding of electricity and electronic 
                            components, having also taken a course on electrical components. <br /><br />
                            I also have a working knowledge of cosmology and astrophysics, as I understand some aspects of the universe 
                            such as planetary motion, the geometry of the universe, and techniques used to measure these things. 
                        </p> 
                    </SectionBody>
                </PageSection>
                <div id='softSkills'></div>
                <PageSection section='Soft Skills'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Problem Solving</h3><br />
                        <p className='sectionDuration'>Skill Level: Advanced</p><br />
                        <p className='sectionBody'>
                            I am a very good problem solver, and am able to use my knowledge of different subjects and my experience to 
                            find clever solutions to problems. Using my problem solving skills, I can find solutions to problems plaguing
                            a product or design, and do so in an effective manner, a skill that makes me a useful asset to any team.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Teamwork</h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Teamwork and communication are two of my strong points, as I am able to work cohesively with others to accomplish
                            whatever goals are necessary in a timely manner. I have experience working with others, whether it be for 
                            projects I have done, or for club boards I have been in, with strong communication skills being at the forefront
                            of the factors for my success in these group situations. 
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Adaptability</h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            My adaptability is another skill I pride myself on, as in an ever-changing world, being able to adapt and 
                            thrive in new situations is crucial. I am adaptable not only to new situations, but also to new topics and 
                            skills, as I am able to pick up and and learn new skills and tools quickly, should the need arise.
                        </p> 
                    </SectionBody>
                </PageSection>
            </div>
            <Footer top='none' />
        </div>
    )
}

export default skills
