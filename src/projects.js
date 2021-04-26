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
                            Aether Connect
                            <img src='./html.png' className='toolImg' title="HTML5"></img>
                            <img src='./css.png' className='toolImg' title="CSS3"></img>
                            <img src='./javascript.png' className='toolImg' title="Javascript"></img>
                            <img src='./babylon.png' className='toolImg' title="Babylon.js"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>March 2021 - Present</i></p>
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
                            rendering engine is used to create the interactive 3D simulations. Aether Connect is currently a work in
                            progress, however, I look to publish its first deployment by the summer of 2021.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/AetherConnect' target='_blank'>
                                <img src='./github.png' className='projectLink' title="Github"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            FBLA Quiz
                            <img src='./java.png' className='toolImg' title="Java"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>December 2020 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            The FBLA Quiz program is a project I have created for the 2021 FBLA Coding and Programming Competitive Event. 
                            This program reads random questions and answers from a database, then uses that data to administer a quiz to 
                            the user, while also including features for tracking users scores and progress, as well as administering 
                            different types of questions. FBLA Quiz is built with Java, and uses the Java Swing library to generate the 
                            GUI. In addition to using vanilla Java, this program also uses the JSON Simple library, to allow for database 
                            connectivity with JSON files, and the Apache PDFBox library, to allow the program to create and write PDF files.
                            <br /><br />
                            This first version of this project was completed in March 2021, where it was then submitted to the state level of
                            the FBLA Coding and Programming Event, where it placed 2nd in the state of New Jersey. However, this project is
                            still ongoing, as it is continuing to be developed and improved.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/FBLAQuiz' target='_blank'>
                                <img src='./github.png' className='projectLink' title="Github"></img>
                            </a>
                        </p>  
                    </SectionBody>
                </PageSection>
                <div id='side'></div>
                <PageSection section='Side Projects'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            varununnithan.me
                            <img src='./html.png' className='toolImg' title="HTML5"></img>
                            <img src='./css.png' className='toolImg' title="CSS3"></img>
                            <img src='./javascript.png' className='toolImg' title="Javascript"></img>
                            <img src='./react.png' className='toolImg' title="ReactJS"></img>
                            <img src='./blender.png' className='toolImg' title="Blender"></img>
                            <img src='./babylon.png' className='toolImg' title="Babylon.js"></img>
                            <img src='./gsap.png' className='toolImg' title="GSAP"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>April 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            The making of this site itself was another project I have undertaken. The goal of this site is to provide 
                            a better background on who I am as a person and my skills, as well as shed light on the different activities 
                            I have partaken in. In order to build this site, I used a myriad of different tools and languages, some of
                            which were new to me, making this project a learning experience as well. This site was built using 
                            React, and so it is largely built with Javascript, however it also incorporates HTML (through JSX) and CSS
                            as well. In order to create the 3D models used in the webpage, Blender was first used to model and sculpt the
                            objects, with these models then being embedded into the website using Babylon.js. Finally, the GreenSock 
                            Animation Platform (GSAP) and ScrollTrigger libraries were used to create some of the site's animations within
                            Javascript. <br /><br />
                            Though this project's goal is to release a site pertaining to myself, which can be considered accomplished, this
                            website will never truly be 'completed' in the sense that it will constantly be updated and changed to reflect
                            new changes in myself and my experiences.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/varun-unnithan' target='_blank'>
                                <img src='./github.png' className='projectLink' title="Github"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            nutritioUS
                            <img src='./html.png' className='toolImg' title="HTML5"></img>
                            <img src='./css.png' className='toolImg' title="CSS3"></img>
                            <img src='./javascript.png' className='toolImg' title="Javascript"></img>
                            <img src='./php.png' className='toolImg' title="PHP"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>April 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            Created during the 2021 HackKU hackathon, nutritioUS is a website with the goal of promoting healthy eating and
                            drinking in a fun way for users. Using the website, users can track their daily calories, water, and other 
                            nutrition facts, data which is then used to create a daily health score for users, with this score also being
                            used for friends to compete against one another on the site. Working with a team of 3 others, this program was
                            with HTML, CSS, and Javascript for the frontend and website design, and PHP to communicate with the server in 
                            the backend.
                            <br /><br />
                            Visit: 
                            <a href='https://github.com/varun-un/nutritioUS' target='_blank'>
                                <img src='./github.png' className='projectLink' title="Github"></img>
                            </a>
                            <a href='https://devpost.com/software/nutritious-ewvb14' target='_blank'>
                                <img src='./devpost.png' className='projectLink' title="Devpost"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Student Connect
                            <img src='./html.png' className='toolImg' title="HTML5"></img>
                            <img src='./css.png' className='toolImg' title="CSS3"></img>
                            <img src='./javascript.png' className='toolImg' title="Javascript"></img>
                            <img src='./java.png' className='toolImg' title="Java"></img>
                            <img src='./jsp.png' className='toolImg' title="JSP"></img>
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
                                <img src='./github.png' className='projectLink' title="Github"></img>
                            </a>
                            <a href='https://devpost.com/software/student-connect-bgh6ie' target='_blank'>
                                <img src='./devpost.png' className='projectLink' title="Devpost"></img>
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
