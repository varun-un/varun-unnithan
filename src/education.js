import React from 'react';
import { Link, withRouter } from "react-router-dom";
import PageTitle from './pageTitle.js';
import PageSection from './pageSection.js';
import SectionBody from './sectionBody.js';
import { Footer } from './global.js';
import './pages.css';

function education() {

    return (
        <div className='pageAbs'>
            <div className='education'>
                <PageTitle title='Education' sections={['School', 'Activities', 'Courses']} 
                links={['#school', '#activities', '#courses']} starOffset='2' />
                <div id='school'></div>
                <PageSection section='School'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>The Academy for Mathematics, Science, and Engineering</h3><br />
                        <p className='sectionDuration'><i>July 2018 - Present<br/>Expected Graduation: June 2022</i></p>
                        <br />
                        <p className='sectionBody'>
                            The Academy for Mathematics, Science, and Engineering, located at Morris Hills High School and part of the 
                            Morris County Vocational School District, is a rigorous, highly focused four year program for Morris County 
                            students with career interests in mathematics, science, or engineering. The program focuses on challenging 
                            students and preparing them to succeed in the field of STEM both in college and in their careers. In 2016, 
                            the Academy was ranked by <i>Newsweek</i> as the&nbsp;
                            <a href='https://www.newsweek.com/high-schools/americas-top-high-schools-2016' target="_blank">second-best 
                            high school in America.</a><br /><br />
                            I was accepted into the Academy for Mathematics, Science, and Engineering after scoring highly on the entrance 
                            exam and interview, and since then I have completed nearly three years in the program. Throughout the past
                            three years, I have maintained a weighted GPA of<b> 103.2</b>, on a 100-point scale, which translates to roughly a 
                            <b> 4.0 GPA</b> on a 4-point scale. My time in the program has taught me skills like problem solving and teamwork, 
                            while also preparing me with the necessary skills and knowledge to become a successful member in the field of 
                            STEM.
                        </p> 
                        <br /><br />
                        <p className='sectionBody'>
                            <b className='underline'>Honor Societies:</b> <br /><br />
                        </p> 
                        <ul className='sectionBody'>
                            <li>National Honor Society</li> 
                            <li>Science National Honors Society</li>
                            <li>Math Honor Society</li>
                            <li>Technology Education Honor Society</li>
                            <li>Rho Kappa National Social Studies Honor Society</li>
                            <li>Spanish Honor Society</li>
                        </ul> 
                        <br /><br />
                        <p className='sectionBody'>
                            <b className='underline'>School Courses:</b> <br /><br />
                        </p> 
                        <ul className='sectionBody'>
                            <li>Calculus 3</li>
                            <li>AP Physics C</li>
                            <li>AP Physics 1</li>
                            <li>AP Computer Science Principles</li>
                            <li>AP Computer Science A</li>
                            <li>AP Chemistry</li>
                            <li>AP Biology</li>
                            <li>AP Statistics</li>
                            <li>AP Calculus BC</li>
                        </ul>  
                    </SectionBody>
                </PageSection>
                <div id='activities'></div>
                <PageSection section='Activities'>
                <SectionBody>
                        <h3 className='subsectionTitle'>Future Business Leaders of America</h3><br />
                        <p className='sectionDuration'><i>2019 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I am a member of the Morris Hills High School Future Business Leaders of America (FBLA) chapter. FBLA is a 
                            national organization for high schoolers to prepare students for careers in business, and is also the largest
                            business student organization in the world. As a member of FBLA, I have learned many things about business and
                            finance, as well as competed in many of the competitive events the club has to offer. <br /><br />
                            In 2020, I competed in Introduction to Financial Math competitive event, where I placed 1st in the 
                            local district and 5th in the state of New Jersey. In 2021, I participated in the Coding and Programming 
                            competitive event, where I had to code and present a program for a provided theme, which 
                            can be seen <Link to="/projects#fblaquiz">here</Link>. In this event, I placed 2nd in the state of New Jersey.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Junior State of America</h3><br />
                        <p className='sectionDuration'><i>2018 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I currently am the vice president of the Morris Hills High School Junior State of America (JSA) chapter. 
                            JSA is a national organization with high-school chapters nationwide, whose goal is to engage students in debates 
                            and discussions 
                            regarding important issues involving politics, the government, and their community. As vice president, my job 
                            is to help plan and run all club meetings, working closely with both the other officers and with the club body, 
                            while also maintaining the club's social media presence. In addition, as a member of JSA, I have 
                            improved my oratory and presentation skills, as well as having learned a lot about the issues currently plaguing 
                            the nation.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Key Club</h3><br />
                        <p className='sectionDuration'><i>2019 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I hold an officer position for the Morris Hills Key Club, with Key Club being an international, student-led 
                            organization for community service and volunteering. I currently hold the position of club secretary for the 
                            Morris Hills chapter, with this being my second year of doing so. <br /><br />
                            As club secretary, my job is to keep track of club data and member information, as well as serve as the 
                            intermediary for communication between the Morris Hills Key Club chapter and the larger Key Club district. I 
                            also work with the other chapter officers to set up and hold events for community service and fundraising to
                            benefit the community. I have helped hold and participate in events such as our virtual food drives, through 
                            which we collected over $2,000 for the Community FoodBank of New Jersey, and fun performances for younger kids. 
                        </p>  
                    </SectionBody>
                </PageSection>
                <div id='courses'></div>
                <PageSection section='Courses'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Astrophysics: Cosmology</h3><br />
                        <p className='sectionDuration'><i>January 2021 - May 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            I have taken and completed the <i>ANU-ASTRO4x: Astrophysics: Cosmology</i> course on edX taught by Paul Francis 
                            and Brian Schmidt of the Australian National University. Through this course I gained a better understanding of 
                            Einsteinian physics and its applications on planetary and galactic motions. I also learned about other aspects
                            of astrophysics and cosmology, such as Hubble's Law, spacetime metrics, Friedmann equations, inflation theory, 
                            dark energy and the cosmic microwave background. Finally, I learned more about the technical skills used in 
                            cosmology, such as the tools and techniques used to measure distances and other values. This course not only 
                            furthered my knowledge about space and astrophysics, but has also made me even more excited to continue learning 
                            about the subject.
                            <br /><br ></br>
                            <a href='https://courses.edx.org/certificates/ed784bac8f4a4c1385cf6a7d4aca45a4' target='_blank'>
                                View Certificate
                            </a>
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Paradox and Infinity</h3><br />
                        <p className='sectionDuration'><i>June 2021 - September 2021</i></p>
                        <br />
                        <p className='sectionBody'>
                            I have taken and completed the <i>Paradox and Infinity</i> course on edX taught by Agust??n Rayo from MIT. 
                            This course modeled one typically offered to MIT students, and dives deeper into the theoretical aspects of 
                            mathematics, as well as its intersection with philosophy. Throughout the course, I gained a better understanding
                            of mathematical concepts such as higher infinities, cardinalities, probability, and the Banach-Tarski Paradox, 
                            while also getting to explore the limits of mathematics, which brought into question philosophical ideas
                            such as free will and the prisoner's dilemma. I also learned more about set theory, Godel's Theorem, and 
                            computability. Through this course I gained a better understanding of the extents to which mathematical 
                            concepts can be applied and further fueled my interest in mathematics.
                            <br /><br ></br>
                            <a href='https://courses.edx.org/certificates/1ecb56b0cf56401aa8d8ab039ca57544' target='_blank'>
                                View Certificate
                            </a>
                        </p> 
                    </SectionBody>
                </PageSection>
            </div>
            <Footer top='none' />
        </div>
    )
}

export default withRouter(education);
