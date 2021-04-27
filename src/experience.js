import React from 'react';
import { Link, withRouter } from "react-router-dom";
import PageTitle from './pageTitle.js';
import PageSection from './pageSection.js';
import SectionBody from './sectionBody.js';
import { Footer } from './global.js';

function experience() {
    return (
        <div className='pageAbs'>
            <div className='experience'>
                <PageTitle title='Experience' sections={['Tutoring', 'Volunteering']} links={['#tutoring', '#volunteering']} starOffset='2' />
                <div id='tutoring'></div>
                <PageSection section='Tutoring'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>A Grade Ahead</h3><br />
                        <p className='sectionDuration'><i>July 2019 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            A Grade Ahead is a company that provides tutoring for children, primarily in grades 1-8, in Math and English.
                            I have been a volunteer extra help tutor at A Grade Ahead, where I help to teach students topics which may 
                            be new or unfamiliar to them. As a tutor, I help to identify areas which students may struggle in, and then 
                            provide them with the necessary instruction in that area. I also supervise students and help to regulate the 
                            classroom atmosphere. Through this tutoring, I have learned how to effectively communicate topics and ideas to
                            students, while also reinforcing the foundations of these topics in my own mind as well.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Youth Promise</h3><br />
                        <p className='sectionDuration'><i>September 2020 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Youth Promise is a student-run volunteer tutoring organization with the goal of providing kids, especially those
                            in underserved communities, with free 1 on 1 tutoring. As a volunteer with Youth Promise, I have tutored 
                            primarily middle school students in math and science, creating lesson plans, teaching lessons, and assessing 
                            students' abilities. I also serve as part of the Youth Promise interview team, where I help to conduct interviews
                            to gauge incoming tutors and their teaching abilities.  
                        </p>  
                    </SectionBody>
                </PageSection>
                <div id='volunteering'></div>
                <PageSection section='Volunteering'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>HSUS Phone Banking</h3><br />
                        <p className='sectionDuration'><i>September 2020 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I serve as a volunteer phone banker for the Humane Society of the United States (HSUS), where I contact people
                            to urge them to support humane and animal rights legislation. In this position, I talk with the citizens of the
                            areas whose local governments are considering such ordinances, and I inform them of the importance of voting for 
                            and encouraging these laws. In doing so, I help encourage the protection of animals nationwide, while also
                            improving my own communication skills as well.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Youth Basketball Coach</h3><br />
                        <p className='sectionDuration'><i>December 2019 - March 2020</i></p>
                        <br />
                        <p className='sectionBody'>
                            During the winter season at the start of 2020, I volunteered as a coach for a youth team in my town's
                            PAL intramural basketball league. As a coach, I communicated with the players' parents and organized practices 
                            for the team. I led these practices, and created drills and training plans to nurture each player's skills and 
                            improve the team's chemistry. I also created and implemented game plans to utilize each player's talents to 
                            their fullest, in order to maximize the team's success in games. My experience coaching has helped me further 
                            my leadership and communication abilities.
                        </p>  
                    </SectionBody>
                </PageSection>
            </div>
            <Footer top='none' />
        </div>
    )
}

export default experience
