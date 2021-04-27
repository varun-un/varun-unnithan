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
                <PageTitle title='Education' sections={['School', 'Activities']} links={['#school', '#activities']} starOffset='2' />
                <div id='school'></div>
                <PageSection section='School'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>The Academy for Mathematics, Science, and Engineering</h3><br />
                        <p className='sectionDuration'><i>July 2018 - Present<br/>Expected Graduation: July 2022</i></p>
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
                            three years, I have maintained a weighted GPA of<b> 103.26</b>, on a 100-point scale, which translates to a 
                            <b> 4.0 GPA</b> on a 4-point scale. My time in the program has taught me skills like problem solving and teamwork, 
                            while also preparing me with the necessary skills and knowledge to become a successful member in the field of 
                            STEM.
                        </p> <br /><br />
                        <p className='sectionBody'>
                            <b className='underline'>My Courses:</b> <br /><br />
                        </p> 
                        <ul className='sectionBody'>
                            <li>Ap Physics 1</li>
                            <li>AP Computer Science Principles</li>
                            <li>Ap Computer Science A</li>
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
                            Last year, 2020, I competed in Introduction to Financial Math competitive event, where I placed 1st in the 
                            local district and 5th in the state of New Jersey. This year, 2021, I participated in the Coding and Programming 
                            competitive event, where I had to code and present a program for a provided theme, which 
                            can be seen <Link to="/projects#fblaquiz">here</Link>. In this event, I placed 2nd in the state of New Jersey.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Key Club</h3><br />
                        <p className='sectionDuration'><i>2019 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I hold an officer position for the Morris Hills Key Club, which is the Morris Hills High School Chapter
                            of Key Club. Key Club is an international, student-led organization for community service and volunteering. I 
                            currently hold the position of club secretary for the Morris Hills chapter, with this being my second year of
                            doing so. <br /><br />
                            As club secretary, my job is to keep track of club data and member information, as well as serve as the 
                            intermediary for communication between the Morris Hills Key Club chapter and the larger Key Club district. I 
                            also work with the other chapter officers to set up and hold events for community service and fundraising to
                            benefit the community. I have helped hold and participate in events such as our virtual food drives, through 
                            which we collected over $2,000 for the Community FoodBank of New Jersey, and fun performances for younger kids. 
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Junior State of America</h3><br />
                        <p className='sectionDuration'><i>2018 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I am a member of the Morris Hills High School Junior State of America (JSA) chapter. JSA is a national
                            organization with high-school chapters nationwide, whose goal is to engage students in debates and discussions 
                            regarding important issues involving politics, the government, and their community. As a member of JSA, I have 
                            improved my oratory and presentation skills, as well as learned much about the issues currently plaguing the 
                            nation.
                        </p>  
                    </SectionBody>
                </PageSection>
            </div>
            <Footer top='none' />
        </div>
    )
}

export default withRouter(education);
