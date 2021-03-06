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
                            class I took in my high school. In this class I excelled, scoring a 5 on the AP Computer Science A test,
                            and since then I have self-taught myself much more about the language, in order to improve my ability to utilize
                            Java and its features. <br /><br />
                            Beyond just a functional knowledge of Java and its syntax, I am also familiar with the Java Swing library, which
                            is a library built into Java for the purpose of creating component-based GUIs.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Javascript
                            <img src='./javascript.png' className='toolImg' title="Javascript"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Javascript is a a scripting programming language used largely for creating interactive webpages, though it is 
                            also used for building applications outside of websites. I currently have a good mastery and handle on much of 
                            Javascript and its syntax, and I am able to use the language to create webpages, algorithms and even game-like 
                            programs.
                            <br /><br />
                            Outside of vanilla Javascript, I also have experience with the <a href="#babylon">Babylon.js</a>
                            &nbsp;library for creating 3D objects with Javascript, as well as with the <a href="#react">React</a>
                            &nbsp;library. I have worked with React Native to develop mobile applications, as well as used 
                            <a href="#nodejs">Node.js</a>&nbsp;to utilize Javascript for backend applications. I also have 
                            limited experience with the GSAP library, which is used to create animations in Javascript for HTML elements.
                        </p> 
                    </SectionBody>
                    <div id='nodejs'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Node.js
                            <img src='./nodejs.png' className='toolImg' title="Node.js"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            Node.js is a Javascript-based runtime environment that allows Javascript code to be executed outside
                            of the browser, and is often used to create the back-end for many web applications. I have experience
                            writing backend systems using Node.js, specifically with the Express.js framework, from my software
                            engineering internship at Resilience. I know how to create web applications and API routes with 
                            Node.js, as well as understand the ideas behind how Node.js functions to create back-end systems.
                            I am able to use Node.js with middleware and hashing libraries to establish secure connections to
                            a server, as well as how to connect to relational databases via SQL through it. With my understanding
                            of Node.js comes my understanding of how HTTP requests work, and how to write REST APIs.
                        </p> 
                    </SectionBody>
                    <div id='react'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            React & React Native
                            <img src='./react.png' className='toolImg' title="ReactJS"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            ReactJS, or React, is a Javascript library for creating component-based UIs as well as single-page applications.
                            I know  React and JSX, the syntax used to embed HTML into Javascript, and have a good 
                            understanding of how React and its hooks work. I also have experience with React Native to create mobile
                            applications for both IOS and Android via React, and used such during my software engineering internship at
                            Resilience.
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
                            texturing to create scenes. I also am able to use rigging and keyframe animation within Blender to create animated 
                            scenes. I also use Blender to create 3D models as part of my workflow for coding 3D based programs, such as those
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
                            as interact with them through user inputs. I currently have a good foundational understanding of the engine, and
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
                            In the field of math, I am very proficient, as I have a good grasp of many mathematical techniques and processes,
                            having mastered and taken classes up to Calculus 3.
                            This also means that I have a very good grasp of algebra and differential equations, which are important in 
                            engineering. Most importantly, however, I have good mathematical reasoning, meaning I can solve many math-based 
                            problems effectively.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Physics</h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            I have a good understanding of basic physics principles, having taken courses such as AP Physics C and AP Physics 
                            1. I have an understanding of mechanical properties, including kinematics, energy, an rotational motion. I also 
                            have a good understanding of electrostatics and magnetism, which aids in my understanding of electronic components, 
                            having also taken a course on electrical components. <br /><br />
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
                        <h3 className='subsectionTitle'>Teamwork and Communication</h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Teamwork and communication are two of my strong points, as I am able to work cohesively with others to accomplish
                            whatever goals are necessary in a timely manner. I am able to confidently lead a team to accomplish a task, as well as 
                            work cohesively within one. I have experience working with others, whether it be for 
                            projects I have done, work experiences I have, or for club boards I have been in, with strong communication skills 
                            being at the forefront of the factors for my success in these group situations. 
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
