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
                    <div id='risc'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Research for Intelligence & Security Challenges (RISC)
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>UMD ARLIS</i></p>
                        <p className='sectionDuration'><i>May 2023 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            I work as a part-time researcher and developer with the University of Maryland's Applied Laboratory for Intelligence 
                            and Security (ARLIS), where I work on a project to develop a tool to assess and formally verify changes in operational
                            workflows. Formerly a part of the Research for Intelligence & Security Challenges (RISC) internship program, I was 
                            brought on as a part-time researcher to continue my work on a similar project to the one I worked on as an intern.
                            Contracted by government sponsors, I work with a team to develop software, parsers, and generators to analyze and
                            simulate different workflows and processes within a graph-based framework. To do so, I've written code in Python to
                            parse and understand graphs, and then used first-order logic libraries and rules to simulate the effects of changes
                            in these graphs. The developed software was able to analyze processes for changes due to automation and AI, and
                            found the influences of these systems on upwards of 50% of the workflows. <br /><br />

                            Through this internship, I've gained experience with communicating with and presenting to a team and clients, as 
                            well as how the development process works in a professional setting.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Software Engineering Intern
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
                            <img src={require('../static/pcb.png')} className='toolImg' title="PCB"></img>
                            <img src={require('../static/kicad.png')} className='toolImg' title="KiCad"></img>
                            <img src={require('../static/cpp.png')} className='toolImg' title="C++"></img>
                        </h3><br />
                        <h3><p className='red'>Avionics Team Lead</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            The Terrapin Rocket Club is a club within the <i>University of Maryland</i>&nbsp; that works on developing a student-created
                            solid engine rocket capable of flight heights of 10,000 ft in order to compete at the Spaceport America Cup. In the club
                            I am the team lead for the avionics subteam, whose goal is to develop, from scratch, a flight computer for
                            this rocket that is capable of controlling the rocket's stages and firing charges, as well as data logging and telemetry. In this role 
                            I've written code in C++ that takes in and processes sensor data, within an embedded systems context. I've also helped lead and develop
                            data fusion algorithms and Kalman Filters to combine data from multiple sensors, such as an accelerometer, gyroscope, and GPS to produce
                            more accurate state estimation. This code was written using low-level C++ code, meant to run on IC chips such as the STM32 and microcontrollers
                            like the Teensy 4.1. This project also involved designing and developing the PCBs (printed circuit boards) for the computer, taking into consideration the electrical
                            engineering aspects of the components and flight computer. I've also helped develop code
                            to store this sensor data in an SD card, as well as code to transmit this data to a ground station via the LoRa radio protocol through 
                            packets. In addition, I've helped design and build the PCBs (printed circuit boards) for the computer, taking into consideration the electrical
                            engineering aspects of the components and flight computer.
                            <br /><br />
                            As a subteam lead, I also need to manage the work and tasks that the team members work on. This must be coordinated, as well as 
                            synchronized with the needs of the other teams and subprojects that go into the rocket, so that all parts of the project fit in 
                            together. I've also made efforts to help lead the learning efforts of the team, helping to teach new members about the tools and
                            skills needed to work on the project, getting them onboarded quickly. I've also helped lead the testing efforts for our avionics,
                            working to test the code and hardware to ensure that it works as intended in a flight environment. 
                        </p>  
                    </SectionBody>
                    <div id='seds'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Students for the Exploration and Development of Space (SEDS)
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/td.png')} className='toolImg' title="Thermal Desktop"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="Matlab"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                        </h3><br />
                        <h3><p className='red'>SATFAB: Thermals Team Lead</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Students for the Exploration and Development of Space (SEDS) is an international student organization whose 
                            purpose is to promote space exploration and development. I am a member of the UMD chapter, where I am also
                            a member of the Satellite Fabrication (SATFAB) team. As a member of the SATFAB team, I am part of the efforts
                            to create a 1U (10cm x 10cm x 10cm) cube satellite that is able to carry a payload of a radio antennae and 
                            processor into orbit to perform tests with radio communications and OpenLST, a radio design paradigm. This 
                            satellite has launched on high-altitude balloon launchs, and would launch with the United States Naval Academy 
                            (USNA) and their 3U bus to take it into orbit, where it would provide radio communications.
                            <br /><br />
                            Within the SATFAB team, I am the Thermals subteam lead, where I help direct work involving the 
                            thermals of the satellite. One of our team's predominant jobs is to perform thermal analysis on the cubesats which we send 
                            up, which we mainly use Thermal Desktop for. Through thermal desktop, and other forms of thermal analysis we've performed, including
                            using Matlab to solve differential systems, I've gained a strong understanding of heat flow within satellite systems. In addition, 
                            I've worked to research thermal control systems (TCS) for satellites, as well as methods
                            for both active and passive thermal control. I help to direct the design and development of TCS
                            for cube satellites, with the current type we are looking to design and research being based off of phase-change materials (PCM). 
                            also help to manage team members and delineate tasks and deadlines for our projects.
                        </p>  
                    </SectionBody>
                    <div id='quantumclub'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            UMD Undergraduate Quantum Association
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                            <img src={require('../static/qiskit.png')} className='toolImg' title="QISKit"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
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
                    {/* <SectionBody>
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
                    </SectionBody> */}
                </PageSection>
                <div id='research'></div>
                <PageSection section='Research'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Optimizing Toroidal Propellers for Maritime Applications
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="Matlab"></img>
                            <img src={require('../static/cpp.png')} className='toolImg' title="C++"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>March 2023 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Maritime shipping is a major driver of the global economy, yet it also contributes to a significant amount of
                            pollution. This research project looks at examining a new type of propeller technology, called a toroidal propeller,
                            and assess its applicability to maritime shipping. This research project is one associated with the Gemstone Honors 
                            College, where I'll work on a team with about a dozen other students to research this topic. Our goal is to develop
                            a toroidal-shaped propeller that is able to be used in maritime shipping, and to assess its viability as a replacement
                            for currently used propellers based on factors such as fuel efficiency, cost, and noise. To do this, we plan to mathematically
                            model a toroidal propeller, and then use computational fluid dynamics (CFD) to simulate its performance in a variety of
                            conditions. We will then vary the parameters of this model, generating various geometries, to see if we can produce a 
                            potentially viable propeller design.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Whisker-Inspired Flow Sensing
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="Matlab"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>January 2023 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Some marine animals, such as seals, have whiskers that are able to sense the flow of water around them.
                            These whiskers detect the flow of the vortices shed by nearby objects by analyzing how they are deformed when
                            in contact with the fluid flow. This research project, led by Dr. Cecilia Huertas Cerdeira, within the 
                            <i> University of Maryland</i>'s Mechanical Engineering department, attempts to create a soft body that can
                            replicate this behavior, for use in applications such as robotics. This research focuses on choosing an 
                            appropriate material for the soft body, as well as designing the geometry of the body to minimize the 
                            viscoelasticity and avoid large deformations, while still being flexible enough to deflect and detect the 
                            flow. These varying whisker profiles and materials will then be subjected to a fluid flow, with the resulting
                            data being produced and analyzed with code in Matlab. Once a suitable design is found, the next step would be 
                            to insert a fiber optic into the whisker to detect deformations and develop code to analyze such to produce 
                            meaningful conclusions about surrounding objects.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Buckling Initiators on Honeycomb Cells for Out-of-Plane Energy Absorption
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
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
