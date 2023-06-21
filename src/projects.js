import React from 'react';
import { Link, withRouter } from "react-router-dom";
import PageTitle from './pageTitle.js';
import PageSection from './pageSection.js';
import SectionBody from './sectionBody.js';
import { Footer } from './global.js';

function projects() {
    return (
        <div className='pageAbs'>
            <div className='projects'>
                <PageTitle title='Projects' sections={['Major Projects', 'Side Projects']} links={['#major', '#side']} starOffset='2' />
                <div id='major'></div>
                <PageSection section='Major Projects'>
                <SectionBody>
                        <h3 className='subsectionTitle'>
                            High-Powered Rocketry
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>September 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            High-powered rocketry is the term for model rocketry with motors that exceed the 160 Newton-second impulse 
                            level, which is at the H motor class. I have gained experience in high-powered rocketry through my work with
                            my own personal rockets, as well as through the <a href='/experience#terprockets'>Terrapin Rocket Team</a> at UMD. 
                            <br /><br />
                            My personal experience with high-powered rocketry began with my first L1 certification rocket, which was a 3" diameter
                            LOC Iris rocket which I built, simulated, and flew on an H125 motor in February 2023 to around 2200 feet, 
                            receiving my L1 high-powered rocketry certification from the Tripoli Rocketry Association. Since then, I have designed and 
                            built my own 3" diameter dual-deploy rocket, which will use internal electronics, through an EasyMini altimeter, to fire 
                            charges for a drogue parachute at apogee, and a main parachute at 750 feet. I look to launch this rocket, and continue to
                            gain experience in high-powered rocketry, as I look to gain my L2 certification and learn more about the subject.
                            <br /><br />
                            I also have high-powered rocketry experience through the Terrapin Rocket Team, as the main competition rocket which we 
                            design and construct is essentially a large-scale L3 rocket. I specifically have gained a lot of experience with the 
                            rocket's internal electronics through my experience as the Avionics Subteam Lead, however, by working with other team
                            leads and club members, I have also gained experience with the rocket's airframe, propulsion, and airbrake systems.
                            Through this, I have been able to gain a strong fundamental understanding of how these rocket systems work and how they 
                            are designed.
                            <br /><br />
                            <a href={require('../static/tripoli_card.pdf')}
                            target='_blank'>Membership Card</a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Aether Connect
                            <img src={require('../static/html.png')} className='toolImg' title="HTML5"></img>
                            <img src={require('../static/css.png')} className='toolImg' title="CSS3"></img>
                            <img src={require('../static/javascript.png')} className='toolImg' title="Javascript"></img>
                            <img src={require('../static/babylon.png')} className='toolImg' title="Babylon.js"></img>
                            <img src={require('../static/react.png')} className='toolImg' title="ReactJS"></img>
                            <img src={require('../static/gsap.png')} className='toolImg' title="GSAP"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>March 2021 - June 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            Aether Connect is a personal project which I have started in order to help teach more advanced topics to 
                            students using engaging, 3D-based simulations. In my own experiences, I have found that while there are a 
                            variety of 2D simulations to teach more simple concepts to younger kids, there seemed to be a relative lack
                            of such simulations for more advanced topics, especially those in 3D, which is a medium that I think is
                            extremely effective at helping students understand certain topics better. Aether Connect serves as a solution
                            that not only addresses these points, but also intends to teach advanced, college-level topics in a way 
                            understandable to even younger audiences. <br /><br />
                            Since a goal of Aether Connect is accessibility, this project plans to deploy as a website, which will serve as
                            the platform on which the simulations will lie. In order to do this, Aether Connect is largely built with 
                            Javascript, with HTML and CSS being used to create the website itself. The Javascript-based Babylon.js 
                            rendering engine is used to create the interactive 3D simulations. GSAP and Preact (a lightweight version of
                            React) are used for site components and element animations.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/AetherConnect' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                            <a href='https://aetherconnect.netlify.app/' target='_blank'>
                                <img src={require('../static/web.png')} className='projectLink' title="Website"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <div id='fblaquiz'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            FBLA Quiz
                            <img src={require('../static/java.png')} className='toolImg' title="Java"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>December 2020 - June 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            The FBLA Quiz program is a project I have created for the 2021 FBLA Coding and Programming Competitive Event. 
                            This program reads random questions and answers from a database, then uses that data to administer a quiz to 
                            the user, while also including features for tracking users' scores and progress, as well as administering 
                            different types of questions. FBLA Quiz is built with Java, and uses the Java Swing library to generate the 
                            GUI. In addition to using vanilla Java, this program also uses the JSON Simple library, to allow for database 
                            connectivity with JSON files, and the Apache PDFBox library, to allow the program to create and write PDF files.
                            <br /><br />
                            In March 2021, this program was submitted to the state level of the FBLA Coding and Programming Event, where it 
                            placed 2nd in the state of New Jersey. 
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/FBLAQuiz' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                        </p>  
                    </SectionBody>
                </PageSection>
                <div id='side'></div>
                <PageSection section='Side Projects'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Raymarcher
                            <img src={require('../static/java.png')} className='toolImg' title="Java"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>June 2021 - July 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            Raymarcher is a real-time 3D rendering engine which I have made, based in Java. I have always been interested
                            in how computers create 3D scenes, whether they be in games I have played or in animation and modelling 
                            softwares, such as in Blender or Solidworks, and so this project was a learning experience for me. I decided
                            to try and build everything from scratch for this rendering engine, not using external libraries to abstract
                            away certain aspects of the process, so that I could gain a better understanding of how these programs worked.
                            Raymarcher specifically uses the raymarching technique and can render 3D scenes with meshes and geometry 
                            which the user may define. Beyond just the computer programming side of it, this project also taught me a lot
                            about the mathematics behind these 3D engines, and helped me gain a better understanding of linear algebra.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/Raymarcher' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Raymarcher
                            <img src={require('../static/java.png')} className='toolImg' title="Java"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>June 2021 - July 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            Raymarcher is a real-time 3D rendering engine which I have made, based in Java. I have always been interested
                            in how computers create 3D scenes, whether they be in games I have played or in animation and modelling 
                            softwares, such as in Blender or Solidworks, and so this project was a learning experience for me. I decided
                            to try and build everything from scratch for this rendering engine, not using external libraries to abstract
                            away certain aspects of the process, so that I could gain a better understanding of how these programs worked.
                            Raymarcher specifically uses the raymarching technique and can render 3D scenes with meshes and geometry 
                            which the user may define. Beyond just the computer programming side of it, this project also taught me a lot
                            about the mathematics behind these 3D engines, and helped me gain a better understanding of linear algebra.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/Raymarcher' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            varununnithan.me
                            <img src={require('../static/html.png')} className='toolImg' title="HTML5"></img>
                            <img src={require('../static/css.png')} className='toolImg' title="CSS3"></img>
                            <img src={require('../static/javascript.png')} className='toolImg' title="Javascript"></img>
                            <img src={require('../static/react.png')} className='toolImg' title="ReactJS"></img>
                            <img src={require('../static/blender.png')} className='toolImg' title="Blender"></img>
                            <img src={require('../static/babylon.png')} className='toolImg' title="Babylon.js"></img>
                            <img src={require('../static/gsap.png')} className='toolImg' title="GSAP"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>April 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            The making of this site itself is technically another project I've done. The goal of this site is to provide 
                            a better background on who I am as a person and my skills, as well as shed light on the different activities 
                            I have partaken in. In order to build this site, I used a bunch of different tools and languages, some of
                            which were new to me, making this project a great learning experience for me. This site was built using 
                            React, and so it is largely based in Javascript, however it also incorporates HTML, through JSX, and CSS
                            as well. In order to create the 3D models used in the webpage, Blender was first used to model and sculpt the
                            meshes, with these models then being embedded into the website using Babylon.js. Finally, the GreenSock 
                            Animation Platform (GSAP) and ScrollTrigger libraries were used to create some of the site's animations within
                            Javascript. <br /><br />
                            Though this project's goal is to release a site pertaining to myself, which can be considered accomplished, this
                            website will never truly be 'completed' in the sense that it will constantly be updated and changed to reflect
                            new changes in myself and my experiences.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/varun-unnithan' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                            <a href='https://www.varununnithan.me/' target='_blank'>
                                <img src={require('../static/web.png')} className='projectLink' title="Website"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            nutritioUS
                            <img src={require('../static/html.png')} className='toolImg' title="HTML5"></img>
                            <img src={require('../static/css.png')} className='toolImg' title="CSS3"></img>
                            <img src={require('../static/javascript.png')} className='toolImg' title="Javascript"></img>
                            <img src={require('../static/php.png')} className='toolImg' title="PHP"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>April 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            Created during the 2021 HackKU hackathon, nutritioUS is a website with the goal of promoting healthy eating and
                            drinking in a fun way for users. Using the website, users can track their daily calories, water, and other 
                            nutrition facts, data which is then used to create a daily health score for users, with this score also being
                            used for friends to compete against one another on the site. Working with a team of 3 others, this program was
                            built with HTML, CSS, and Javascript for the frontend and website design, and PHP to communicate with the server 
                            in the backend.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/nutritioUS' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                            <a href='https://devpost.com/software/nutritious-ewvb14' target='_blank'>
                                <img src={require('../static/devpost.png')} className='projectLink' title="Devpost"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Student Connect
                            <img src={require('../static/html.png')} className='toolImg' title="HTML5"></img>
                            <img src={require('../static/css.png')} className='toolImg' title="CSS3"></img>
                            <img src={require('../static/javascript.png')} className='toolImg' title="Javascript"></img>
                            <img src={require('../static/java.png')} className='toolImg' title="Java"></img>
                            <img src={require('../static/jsp.png')} className='toolImg' title="JSP"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>March 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            This project was created during the 2021 PackHacks hackathon, where it placed second in the high school track. 
                            Student Connect is a program that allows students to connect with other students and professionals, in a 
                            simple manner, making networking more accessible and easy-to-use. It matches students with other users based 
                            off of shared interests, with the user then being able to choose who to connect to from a curated list of 
                            other students. This program was made with a team of 2 others, and used HTML, CSS, and Javascript for the 
                            frontend, alongside Java and JSP for database connectivity and the backend. 
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/anish-kristipati/PackHacks' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                            <a href='https://devpost.com/software/student-connect-bgh6ie' target='_blank'>
                                <img src={require('../static/devpost.png')} className='projectLink' title="Devpost"></img>
                            </a>
                        </p>  
                    </SectionBody>
                </PageSection>
            </div>
            <Footer top='none' />
        </div>
    )
}

export default projects
