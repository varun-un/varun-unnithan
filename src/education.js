import React from 'react';
import PageTitle from './pageTitle.js';
import PageSection from './pageSection.js';
import SectionBody from './sectionBody.js';
import { Footer } from './global.js';
import './pages.css';

function education() {
    return (
        <div>
            <div className='education'>
                <PageTitle title='Education' sections={['School', 'Activities']} links={['#school', '#activities']}/>
                <PageSection section='School'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>The Academy for Mathematics, Science, and Engineering</h3><br />
                        <p className='sectionDuration'><i>July 2018 - June 2022</i></p>
                        <br />
                        <p className='sectionBody'>
                            The Academy for Mathematics, Science, and Engineering, located at Morris Hills High School and part of the 
                            Morris County Vocational School District, is a rigorous, highly focused four year program for Morris County 
                            Students with career interests in mathematics, science, or engineering. The program focuses on challenging 
                            students and preparing them to succeed in the field of STEM both in college and in their careers. In 2016, 
                            the Academy was ranked by <i>Newsweek</i> as the&nbsp;
                            <a href='https://www.newsweek.com/high-schools/americas-top-high-schools-2016'>second-best high school in 
                            America.</a><br /><br />
                            I was accepted into the Academy for Mathematics, Science, and Engineering after scoring highly on the entrance 
                            exam and interview, and since then I have completed nearly three years in the program. Throughout the past
                            three years, I have maintained a weighted GPA of 103.26, on a 100-point scale, which translates to a 4.0 GPA 
                            on a 4-point scale. My time in the program has taught me skills like problem solving and teamwork, while also
                            preparing me with the necessary skills and knowledge to become a successful member in the field of STEM.
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
                    <SectionBody />
                </PageSection>
                <PageSection section='Activities' />
            </div>
            <Footer top='450%' />
        </div>
    )
}

export default education
