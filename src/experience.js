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
                <PageTitle title='Experience' sections={['Internships', 'Tutoring', 'Volunteering']} links={['#internships', '#tutoring', '#volunteering']} starOffset='2' />
                <div id='internships'></div>
                <PageSection section='Internships'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Software Engineer
                            <img src='./javascript.png' className='toolImg' title="Javascript"></img>
                            <img src='./react.png' className='toolImg' title="React Native"></img>
                            <img src='./nodejs.png' className='toolImg' title="Node.JS"></img>
                            <img src='./sql.png' className='toolImg' title="SQL"></img>
                            <img src='./aws.png' className='toolImg' title="AWS"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>Resilience Inc.</i></p>
                        <p className='sectionDuration'><i>August 2021 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I am a software engineering intern at Resilience Inc., where I am part of the AIMEE
                            app development team. There, I help develop the AIMEE mobile app, which allows users
                            to engage in social emotional learning through audio exercises and emotion 
                            identification/tracking. Specifically, I am in charge of the app's back-end 
                            development, and in my time as an intern, have worked to implement user accounts into 
                            the application. I have also worked on security features, such as implementing JSON
                            Web Tokens, as well as creating a database to store user data for the application. 
                            During this internship, I've learned and used Javascript, React Native, Node.js, SQL,
                            and AWS.
                            <br/><br/>
                            Throughout this internship, I've learned a lot about the workflow involved when it comes 
                            to developing and releasing projects for production. I also communicated with both upper 
                            levels of management and fellow team members the work I was doing and what needed to be 
                            done, which I was able to do due to my skills in communication. I also took the lead for 
                            many parts of the project, such as the implementation of a login system in the app, or 
                            the setting up of the AWS server, which required me to work as a leader to distribute 
                            and manage tasks.
                        </p>  
                    </SectionBody>
                </PageSection>
                <div id='tutoring'></div>
                <PageSection section='Tutoring'>
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
                    <SectionBody>
                        <h3 className='subsectionTitle'>A Grade Ahead</h3><br />
                        <p className='sectionDuration'><i>July 2019 - April 2020</i></p>
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
