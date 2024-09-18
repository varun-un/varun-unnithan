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
                    <div id='mitll'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Space Systems Analysis & Test Intern
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="MATLAB"></img>
                        </h3><br />
                        <h3 className='red'>MIT Lincoln Lab</h3><br />
                        <p className='sectionDuration'><i>May 2024 - August 2024</i></p>
                        <br />
                        <p className='sectionBody'>

                            MIT Lincoln Laboratory is a premier research and development center that provides advanced technology to meet critical national security needs.
                            For the summer of 2024, I worked in Boston as a Space Systems Analysis & Test Intern with Group 95, where I worked to design and optimize 
                            image processing algorithms. Working on a DAF Red Team project, I worked with novel hardware for optical systems in both the visual and 
                            long wave infrared (LWIR) spectrums, trying to use image processing techniques to extract signals and targets for satellites. I took existing 
                            post-processing software in MATLAB and reworked it, enabling the processing of LWIR images and customizing algorithms and statistical analyses 
                            to identify satellites in these images with up to 90% confidence. I created a robust object-oriented infrastructure to help improve the software's
                            extensibility and maintainability, while also integrating parallel processing to speed up the software's runtime.
                            <br /><br />
                            I also contributed to the software used in the optical systems' operations, as I improved existing star matching algorithms to increase runtime by 
                            up to 95%, helping to allow these systems to run in real-time. The outputs of these systems were configured to enable error identification and bias 
                            correction for the tracking features of these systems. By integrating star matching algorithms from published research and rewriting their database 
                            systems to use more efficient and deeper star catalogs to cross-reference, I was able to improve the search depth for stars the software could match 
                            by up to 70 times.
                            <br /><br />
                            Working within the system analysis team, I grew a lot in my system analysis and engineering skills, giving biweekly briefs to the team, group supervisors,
                            and sponsors on my progress as well as the implications of the development being done.
                        </p>  
                    </SectionBody>
                    <div id='risc'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Research for Intelligence & Security Challenges (RISC)
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                        </h3><br />
                        <h3 className='red'>UMD ARLIS</h3><br />
                        <p className='sectionDuration'><i>May 2023 - January 2024</i></p>
                        <br />
                        <p className='sectionBody'>

                            With the University of Maryland's Applied Laboratory for Intelligence and Security (ARLIS), originally as an intern 
                            in the Research for Intelligence & Security Challenges (RISC) program, and then as a part-time flex researcher, 
                            I worked on a project to develop a tool to assess and formally verify changes in operational workflows. Contracted 
                            by government sponsors, I worked with a team to develop software, parsers, and generators to analyze and simulate
                            different workflows and processes within a graph-based framework. To do so, I've written code in Python to automate 
                            and parse graphs, and then used first-order logic libraries and rules to simulate the effects of changes in these
                            graphs. The developed software was able to analyze processes for changes due to automation and AI, and found the
                            influences of these systems on upwards of 50% of the workflows. The automation tools I spearheaded and implemented 
                            saves approximately one week's worth of work that was previously needed to implement new models and workflows. <br /><br />

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
                        <h3 className='red'>Resilience Inc</h3><br />
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
                            Terrapin Rocket Team
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="MATLAB"></img>
                            <img src={require('../static/pcb.png')} className='toolImg' title="PCB"></img>
                            <img src={require('../static/kicad.png')} className='toolImg' title="KiCad"></img>
                            <img src={require('../static/cpp.png')} className='toolImg' title="C++"></img>
                        </h3><br />
                        <h3><p className='red'>Avionics Team Lead</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            The Terrapin Rocket Club is a club within the <i>University of Maryland</i>&nbsp; that works on developing a student researched and developed (SRAD)
                            solid-fuel rocket capable of flights to 30,000 ft in order to compete at the Spaceport America Cup. The Spaceport America Cup is the world's 
                            largest intercollegiate rocket engineering competition, where teams from around the world compete to see who can build and launch the best
                            rocket, judged for their design, technical report, and flight performance, among other categories. In June 2024, the &nbsp;
                            <a href='https://www.space.com/spaceport-america-rocketry-collegiate-competition-2024'>Terrapin Rocket Team placed first at Spaceport</a>, 
                            beating out 120+ other teams from around the world while competing in the 10k ft SRAD category.
                            
                            <br /><br />
                            I am the team lead for the avionics subteam, who is responsible for the custom development of a flight computer for
                            model rockets that is capable of accurate data acquisition to perform data logging and telemetry. The subteam owns the entire embedded systems 
                            development lifecycle, from designing the PCBs and electrical circuitry to writing the code that runs on the flight computer. The systems we 
                            develop are used by many parts of the rocket, from the airbrake active control system to the scientific payload we deploy, and works to provide 
                            accurate sensor and state data to all of these systems.
                            <br /><br />
                            I am responsible for many of the technical aspects of the subteam's efforts, from using circuit analysis and PCB design tools like 
                            KiCad, to writing modular and robust code in C++ to run the flight computer and process sensor data. I've also worked to develop data fusion
                            algorithms and Kalman Filters (KFs) to combine data from multiple sensors, such as an accelerometer, gyroscope, and GPS to produce more accurate state
                            estimation, and am currently working to help research and develop non-linear KFs and Adaptive Learning KFs for improved state estimation. We also perform 
                            live telemetry of both sensor data and video from the rocket, which requires the development of long-range high bandwidth systems. I help lead the subteam's 
                            efforts to pioneer the development of these systems, as this has rarely been done before on amateur bands at the scale we are working at. To receive, 
                            process, and visualize this data, I've helped develop a modular ground station application.
                            
                            <br /><br />
                            As a subteam lead, I manage the work and tasks that the team members work on, which is coordinated with the needs of the other teams 
                            and projects that go into the rocket and rely on our systems. I've also made efforts to help lead the learning efforts of the team, 
                            teaching new members about the tools and skills needed to work on the project, getting them onboarded quickly. The icons below show our last year 
                            technical report, as well as some of the code bases which I manage. <br /><br />
                            <a href='https://drive.google.com/file/d/1F8N_BerN4R7mYLDTSdzqzHZwQahWmuae/view?usp=drive_link' target='_blank'>
                                <img src={require('../static/paper.png')} className='projectLink' title="Technical Report"></img>
                            </a> 
                            <a href='https://github.com/Terrapin-Rocket-Team' target='_blank'>
                                <img src={require('../static/github.png')} className='projectLink' title="Github"></img>
                            </a>
                        </p>  
                    </SectionBody>
                    <div id='amazon-kuiper'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Amazon Project Kuiper
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                            <img src={require('../static/javascript.png')} className='toolImg' title="Javascript"></img>
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                        </h3><br />
                        <h3><p className='red'>Student Software Engineer</p></h3> <br />
                        <p className='sectionDuration'><i>January 2024 - June 2024</i></p>
                        <br />
                        <p className='sectionBody'>
                            UMD's App Development Club is an organization that works as a student contracting group, supporting projects from a variety 
                            of Fortune 500 companies. I was a part of the Spring 2024 cohort, where over 600 applications were received, and was selected as 
                            one of 12 students to work on a project with Amazon's Project Kuiper. Project Kuiper is a satellite internet constellation project 
                            that aims to provide high-speed internet around the world.
                            <br /><br />
                            I worked as a student software engineer on the project, where I helped develop the tech stack for an application that allowed 
                            different spacecraft and constellation operators to automatically upload conjunction data messages (CDMs) and coordinate 
                            maneuvers with other operators. The application operated on a Hyperledger Fabric blockchain to keep CDMs secure and immutable,
                            as well as decentralize the system to incentivize cooperation between foreign operators. I wrote much of the backend code to 
                            handle transactions and CDM data processing, as well as internal simulation tools to model orbital maneuvers and operator 
                            choices. I also spearheaded the development of novel economic analysis on operator choices, using game theory to model the 
                            decisions involving information sharing and orbital simulations to calculate the economic impact of these decisions. As one of 
                            the main developers on this project, I also worked to interface with and brief Amazon engineers of our results. 
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
                        <h3><p className='red'>SATFAB: Thermals Team Lead & Power Team Member</p></h3> <br />
                        <p className='sectionDuration'><i>August 2022 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Students for the Exploration and Development of Space (SEDS) is an international student organization whose 
                            purpose is to promote space exploration and development. I am a member of the UMD chapter, where I am also
                            a member of the Satellite Fabrication (SATFAB) team. The SATFAB team worked
                            to create a cube satellite payload that is to be launched to space to test communications. The team also works 
                            to design and prototype a cube satellite system for NASA's CubeSat Launch Initiative (CSLI) program.
                            <br /><br />
                            Within the SATFAB team, I was the Thermals subteam lead, where I helped direct work involving the 
                            thermals of the satellite, and am now a member of the Power subteam. One of the team's predominant jobs is to perform 
                            thermal analysis on the cubesats which we prototype. For this analysis, we use Thermal Desktop, a software that
                            models heat flow within systems. I am also one of the main researchers for our project with thermal control systems (TCS), 
                            where we are testing a phase-change material system for cubesats, as well as trying to simulate this with CFD software.
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
                        <p className='sectionDuration'><i>August 2022 - May 2023</i></p>
                        <br />
                        <p className='sectionBody'>
                            The UMD Undergraduate Quantum Association is a club which aims to teach undergraduates the basics of quantum
                            mechanics and quantum computing, so as to prepare them to develop quantum algorithms that can process data
                            exponentially faster than its classical counterparts. In this club, I attended workshops and seminars which
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
                    <div id='mlds'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Satellite Fault Detection using Deep Learning
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>August 2024 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            As a part of the Aerospace Engineering Honors track at UMD, I am a part of a research project with the 
                            <a href='https://martinastro.github.io/' target='_blank'> Machine Learning for Dynamical Systems</a> (MLDS) 
                            Lab to automate the fault detection process for satellites using deep learning. I'm currently working to research
                            data manipulation tools and anomaly detection algorithms for satellite fault detection through their telemetry data. 
                            To do this, I'm also developing tools to simulate these telemetry streams using the Basilisk spaceflight simulation 
                            software suite.
                        </p>  
                    </SectionBody>
                    <div id='torus'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Optimizing Toroidal Propellers for Maritime Applications
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="Matlab"></img>
                            <img src={require('../static/cpp.png')} className='toolImg' title="C++"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>August 2023 - Present</i></p>
                        <br />
                        <p className='sectionBody'>
                            Maritime shipping is a major driver of the global economy, yet it also contributes to a significant amount of
                            pollution. This research project, associated with the Gemstone Honors College, looks at performing shape optimization 
                            on a toroidal propeller, and assess its applicability to maritime shipping. As a part of 
                            this research, I've worked to develop and implement genetic algorithms and automated pipelines for computational
                            fluid dynamics (CFD) simulations to optimize the design of an airfoil and in the future, a toroidal propeller. I've 
                            also constructed a mathematical model of a toroidal propeller, and performed analyses on it to model the potential 
                            search and solution space of the problem.
                        </p>  
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Whisker-Inspired Flow Sensing
                            <img src={require('../static/solidworks.png')} className='toolImg' title="Solidworks"></img>
                            <img src={require('../static/matlab.png')} className='toolImg' title="Matlab"></img>
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                        </h3><br />
                        <p className='sectionDuration'><i>January 2023 - May 2023</i></p>
                        <br />
                        <p className='sectionBody'>
                            Some marine animals, such as seals, have whiskers that are able to sense the flow of water around them.
                            These whiskers detect the flow of the vortices shed by nearby objects by analyzing how they are deformed when
                            in contact with the fluid flow. This research project, led by Dr. Cecilia Huertas Cerdeira, within the 
                            <i> University of Maryland</i>'s Mechanical Engineering department, attempts to create a soft body that can
                            replicate this behavior, for use in applications such as robotics. This research focused on choosing an 
                            appropriate material for the soft body, as well as designing the geometry of the body to minimize the 
                            viscoelasticity and avoid large deformations, while still being flexible enough to deflect and detect the 
                            flow. I also worked with physical testing apparatuses by conducting experiments in a water tunnel under 
                            varying flow conditions to characterize the whisker's performance, and then analyzed the data and imagery 
                            in MATLAB.
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
