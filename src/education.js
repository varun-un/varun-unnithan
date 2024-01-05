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
                <PageTitle title='Education' sections={['School', 'Courses']} 
                links={['#school', '#courses']} starOffset='2' />
                <div id='school'></div>
                <PageSection section='School'>
                <SectionBody>
                        <h3 className='subsectionTitle'>University of Maryland, College Park</h3><br />
                        <p className='sectionBody'><b className='red'>Bachelor of Science in Aerospace Engineering and Computer Science</b></p><br />
                        <p className='sectionDuration'><i>August 2022 - Present<br/>Expected Graduation: May 2026<br/>GPA: 3.96</i></p>
                        <br />
                        <p className='sectionBody'>
                            The University of Maryland (UMD) at College Park is the primary institution of higher education in the public 
                            University System of Maryland. At UMD, I am a sophomore and part of the Honors College, within which I am a member of the 
                            Gemstone Program —  a multidisciplinary four-year research program for undergraduates in the Honors
                            College. At UMD, I am also a a President's Scholarship Recipient for all four years, as well as a recipient of
                            the National Merit Scholarship Finalist Scholarship. At UMD I plan to pursue a B.S. in Aerospace Engineering
                            within UMD's A. James Clark School of Engineering's <a target="_blank" 
                            href='https://aero.umd.edu/news/story/maryland-engineering-ranked-12-public-undergraduate-program-in-the-country'>
                            top 12 ranked</a> Aerospace Engineering program. I also plan to double major in Computer Science in UMD's <a target='_blank' 
                            href='https://www.cs.umd.edu/article/2022/09/umd%E2%80%99s-computer-science-undergraduate-program-climbs-two-spots-no-16-us-news-rankings'>
                            top 16 ranked</a> Computer Science program as well, and to graduate with a dual-degree for both of these concentrations.
                        </p> 
                        <br /><br />
                        <p className='sectionBody'>
                            <b className='underline'>Courses:</b> <br /><br />
                        </p> 
                        <ul className='sectionBody'>
                            <li>MATH 246H: Differential Equations</li>
                            <li>ENAE 283: Introduction to Aerospace Systems</li>
                            <li>CMSC 351: Algorithms</li>
                            <li>CMSC 330: Organization of Programming Languages</li>
                            <li>CMSC 250: Discrete Structures</li>
                            <li>ENES 220: Mechanics II</li>
                        </ul>
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>The Academy for Mathematics, Science, and Engineering</h3><br />
                        <p className='sectionDuration'><i>July 2018 - June 2022<br/>GPA: 103.2</i></p>
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
                            exam and interview, and have completed four years in the program. During these four years, 
                            I have maintained a weighted GPA of<b> 103.2</b>, on a 100-point scale, which translates to roughly a 
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
                        <br /><br />
                        <p className='sectionBody'>
                            <b className='underline'>Clubs:</b> <br /><br />
                        </p> 
                        <ul className='sectionBody'>
                            <li>Future Business Leaders of America
                                <ul className='sectionBody tab'>
                                    <li><i>2019 - 2022</i></li>
                                    <li>2nd in New Jersey for Coding & Programming in 2021</li>
                                    <li>5th in New Jersey for Introduction to Financial Math in 2020</li>
                                </ul>
                            </li> <br></br>
                            <li>Junior State of America
                                <ul className='sectionBody tab'>
                                    <li><i>2018 - 2022</i></li>
                                    <li>Vice President</li>
                                    <li>Organized debates, events, communicated with upper management</li>
                                </ul>
                            </li> <br></br>
                            <li>Key Club
                                <ul className='sectionBody tab'>
                                    <li><i>2019 - 2022</i></li>
                                    <li>Secretary</li>
                                    <li>Held fundraisers, kept track of club data, communicated with club members</li>
                                </ul>
                            </li> 
                        </ul> 
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
                            I have taken and completed the <i>Paradox and Infinity</i> course on edX taught by Agustín Rayo from MIT. 
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
