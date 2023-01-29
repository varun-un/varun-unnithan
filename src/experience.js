import React from 'react';
import { Link, withRouter } from "react-router-dom";
import PageTitle from './pageTitle.js';
import PageSection from './pageSection.js';
import SectionBody from './sectionBody.js';
import { Footer } from './global.js';
import { RequestFileError } from 'babylonjs';

function experience() {
    return (
        <div className='pageAbs'>
            <div className='experience'>
                <PageTitle title='Experience' sections={['Internships', 'Clubs', 'Research']} links={['#internships', '#clubs', '#research']} starOffset='2' />
                <div id='internships'></div>
                <PageSection section='Internships'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Software Engineer
                            <img src={require('../static/javascript.png')} className='toolImg' title="Javascript"></img>
                            <img src={require('../static/react.png')} className='toolImg' title="React Native"></img>
                            <img src={require('../static/nodejs.png')} className='toolImg' title="Node.JS"></img>
                            <img src={require('../static/sql.png')} className='toolImg' title="SQL"></img>
                            <img src={require('../static/aws.png')} className='toolImg' title="AWS"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>Resilience Inc.</i></p>
                        <p className='sectionDuration'><i>August 2021 - April 2022</i></p>
                        <br />
                        <p className='sectionBody'>
                            I worked as software engineering intern at Resilience Inc., where I was a part of the AIMEE
                            app development team. There, I helped develop the AIMEE mobile app, which allows users
                            to engage in social emotional learning through audio exercises and emotion 
                            identification/tracking. Though I did work a little with front-end development and writing code in
                            React Native, I primarily was in charge of the app's back-end development. In my time as an intern, 
                            engineered much of the back-end systems for the app, writing code for the server to implement features
                            including, but not limited to, user account logins, JSON Web Token (JWT) authentication, and user data
                            processing. I also worked to connect the backend to the database systems, and wrote code for the two to 
                            communicate in SQL, as well as helping get the entire back-end set up on Amazon Web Services (AWS).
                            <br />
                            Throughout this internship, I learned a lot about the workflow involved when it comes 
                            to developing and releasing projects for production. I also communicated with both upper 
                            levels of management and fellow team members the work I was doing and what needed to be 
                            done, which I was able to do due to my skills in communication. I took the lead for 
                            many parts of the project, such as the implementation of a login system in the app, or 
                            the setting up of the AWS server, which required me to work as a leader to distribute 
                            and manage tasks.
                        </p>  
                    </SectionBody>
                </PageSection>
                <div id='clubs'></div>
                <PageSection section='Clubs'>
                    <div id='terprockets'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Terrapin Rocket Club
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                        </h3><br />
                        <h3><p className='red'>Avionics Team Lead</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            The Terrapin Rocket Club is a club within the <i>University of Maryland</i>&nbsp; that works on developing a student-created
                            solid engine rocket capable of flight heights of 10,000 ft in order to compete at the Spaceport America Cup. In the club
                            I am the team lead for the avionics sub team, whose goal is to develop, from scratch, a flight computer for
                            this rocket that is capable of controlling the rocket's stages and firing, as well as data logging and telemetry. Towards this 
                            goal, I've written code in C++ that takes in and works with sensor data, as well as record it, within the 
                            Teensy 4.1 microcontroller. I've also needed to do some work involving circuit design and work with the PCBs (printed circuit 
                            boards) for the computer.
                            <br /><br />
                            As a subteam lead, I also need to manage the work and tasks that the team members work on. This must be coordinated, as well as 
                            synchronized with the needs of the other teams and subprojects that go into the rocket, so that all parts of the project fit in 
                            together.
                        </p>  
                    </SectionBody>
                    <div id='seds'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Students for the Exploration and Development of Space (SEDS)
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                        </h3><br />
                        <h3><p className='red'>SATFAB: Thermals and Structures Team Lead</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Students for the Exploration and Development of Space (SEDS) is an international student organization whose 
                            purpose is to promote space exploration and development. I am a member of the UMD chapter, where I am also
                            a member of the Satellite Fabrication (SATFAB) team. As a member of the SATFAB team, I am part of the efforts
                            to create a 1U (10cm x 10cm x 10cm) cube satellite that is able to carry a payload of a radio antennae and 
                            processor into orbit to perform tests with radio communications and OpenLST, a radio design paradigm. This 
                            satellite would would launch with the United States Naval Academy (USNA) and their 3U bus to take it into orbit,
                            where it would stay for 1-2 years. There, the satellite would perform research with OpenLST, as well as contribute
                            to a project with <i>Engineers without Borders</i> to help provide radio communications to a village in Uganda.
                            <br /><br />
                            Within the SATFAB team, I am the Thermals and Structures sub team lead, where I help direct work involving the 
                            thermals of the satellite. I've worked to research thermal control systems (TCS) for satellites, as well as methods
                            for both active and passive thermal control. In this team, my job is to help direct the design and development of the TCS
                            for cube satellites, with the current type we are looking to design being based off of phase-change materials (PCM). I 
                            also help to manage team members and delineate tasks and deadlines for our projects.
                        </p>  
                    </SectionBody>
                    <div id='quantumclub'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            UMD Undergraduate Quantum Association
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                            <img src={require('../static/qiskit.png')} className='toolImg' title="QISKit"></img>
                        </h3><br />
                        <h3><p className='red'>Member</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            The UMD Undergraduate Quantum Association is a club which aims to teach undergraduates the basics of quantum
                            mechanics and quantum computing, so as to prepare them to develop quantum algorithms that can process data
                            exponentially faster than its classical counterparts. In this club, I've attended workshops and seminars which
                            have taught me the basics of quantum mechanics and working with qubits, as well as how to leverage IBM's quantum
                            computing systems through QISKit, a language rooted in Python used to write quantum computing programs.
                        </p>  
                    </SectionBody>
                    <div id='bigthinkai'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            BigTh!nk AI
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                        </h3><br />
                        <h3><p className='red'>Pyoneers Member</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            BigTh!nk AI is a club at the <i>University of Maryland</i>&nbsp; that focuses on teaching students the basics of Python
                            and Machine Learning, so as to enable them to gain mastery of such. The Pyoneers program is one within this club 
                            that focuses on teaching these skills to club members with the goal of producing a machine learning project at the
                            end. In my time in this club, I've learned the basics of writing code in Python, as well as the fundamentals of how
                            machine learning algorithms work, as well as how to code them.
                        </p>  
                    </SectionBody>
                </PageSection>
                <div id='research'></div>
                <PageSection section='Research'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Whisker-Inspired Flow Sensing
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="Matlab"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>January 2023 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Some marine animals, such as seals, have whiskers that are able to sense the flow of water around them.
                            These whiskers detect the flow of the vortices shed by nearby objects by analyzing how they are deformed when
                            in contact with the fluid flow. This research project, led by Dr. Cecilia Huertas Cerdeira, within the 
                            <i>University of Maryland</i>'s Mechanical Engineering department, attempts to create a soft body that can
                            replicate this behavior, for use in applications such as robotics. This research focuses on choosing an 
                            appropriate material for the soft body, as well as designing the geometry of the body to minimize the 
                            viscoelasticity and avoid large deformations, while still being flexible enough to deflect and detect the 
                            flow. These varying whisker profiles and materials will then be subjected to a fluid flow, with the resulting
                            data being produced and analyzed with code in Matlab. Once a suitable design is found, the next step would be 
                            to insert a fiber optic into the whisker to detect deformations and develop code to analyze such to produce 
                            meaningful conclusions about surrounding objects.
                            <br /><br />
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Buckling Initiators on 3D-Printed Honeycomb Cell Structures for Out-of-Plane Energy Absorption
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>September 2022 - December 2022</i></p>
                        <br />
                        <p className='sectionBody'>
                            Additive manufacturing (3D printing) offers structural designers increasing freedom to tailor parts to very 
                            specific mechanical properties, and new filament materials offer the possibility to expand these properties 
                            even further. This research project, completed by a group of students of which I am a part of, under the 
                            guidance of Dr. Young Tai Choi, a professor within the <i>University of Maryland</i>'s Aerospace Engineering
                            department, works to study the stresses and strains undergone by honeycomb structures when out-of-plane forces are
                            applied to them, and research the effects of buckling initiators on this. Through this project, I've
                            learned more about how certain structures are able to withstand large forces while minimizing material weight 
                            and crush acceleration, as well as the calculations involved with stresses and strains on an object. 
                            <br /><br />
                            <a href={require('../static/Additive Manufacturing of Cellular Materials for Out-of-Plane Energy Absorption Poster.pdf')}
                            target='_blank'>Poster</a>
                        </p>  
                    </SectionBody>
                </PageSection>
            </div>
            <Footer top='none' />
        </div>
    )
}

export default experience
