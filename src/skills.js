import React from 'react';
import { Link } from "react-router-dom";
import PageTitle from './pageTitle.js';
import PageSection from './pageSection.js';
import SectionBody from './sectionBody.js';
import { Footer } from './global.js';
import './pages.css';

function skills() {
    return (
        <div className='pageAbs'>
            <div className='skills'>
                <PageTitle title='Skills' sections={['Coding', '3D & CAD', 'Engineering', 'Soft Skills']} 
                links={['#coding', '#3d&cad', '#engineering', '#softSkills']} starOffset='' />
                <div id='coding'></div>
                <PageSection section='Coding'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            C / C++
                            <img src={require('../static/cpp.png')} className='toolImg' title="C++"></img>
                            <img src={require('../static/c.png')} className='toolImg' title="C"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            C is a structural programming language that is used for system applications and low-level programming applications,
                            with C++ being an object-oriented programming language that is built on top of C. Between taking courses covering C 
                            and low-level programming, as well as my over one year of experience with C++, a superset of C, I have a good understanding of the
                            language and its syntax. In both C and C++, I am able to create programs that utilize pointers, structs, classes,
                            memory allocation, and other features of the languages. I am able to use C-based programs to create low-level applications 
                            that interact directly with the OS and hardware, as well as use C++ to create higher-level applications. I've also used C++ in 
                            projects that involve microcontrollers and embedded systems, enabling me to create systems that interact with hardware and 
                            perform specialized tasks.
                        </p> 
                    </SectionBody>
                    <div id='python'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Python
                            <img src={require('../static/python.png')} className='toolImg' title="Python"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Python is a general-purpose language popularly used for functions within data science and machine learning. I have a good
                            understanding of Python and its syntax, having used it in academic courses and other projects. I am able to use Python to create
                            programs that utilize object-oriented programming, as well as create programs that interact with files and databases. I've used 
                            Python and libraries within it for graph-based data processing and analysis within my <a href='/experience#risc'>RISC Internship</a>,
                            through which I've learned how to use Python to manage repositories of data and information. <br /><br />

                            I am also learning how to use Python for machine learning and data science, having taken courses on the subject and began working 
                            with developing statistical and machine learning models. I have experience with libraries such as NumPy, Pandas, and Matplotlib to
                            handle data.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Java
                            <img src={require('../static/java.png')} className='toolImg' title="Java"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Java is an object-oriented programming language, used often to create applications or build back-end
                            modules for the internet. Beginning with the AP Computer Science classes I took in high school, to my
                            experience with object-oriented programming courses at college, I have a good understanding of Java and 
                            its core concepts. With this comes my understanding of object-oriented programming, and how to use Java
                            to leverage polymorphism, inheritance, and other object-oriented concepts. <br /><br />
                            Beyond just a functional knowledge of Java and its syntax, I am also familiar with the Java Swing library, which
                            is a library built into Java for the purpose of creating component-based GUIs. I have a strong experience
                            with using Java in projects as well, having used it in hackathons and personal projects to create applications
                            such as a custom <a href='/projects#raymarcher'>3D game engine</a> in vanilla Java.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Javascript
                            <img src={require('../static/javascript.png')} className='toolImg' title="Javascript"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Javascript is a a scripting programming language used largely for creating interactive webpages, though it is 
                            also used for building applications outside of websites. I currently have a good mastery and handle on much of 
                            Javascript and its syntax, and I am able to use the language to create webpages, algorithms and even game-like 
                            programs.
                            <br /><br />
                            Outside of vanilla Javascript, I also have experience with the <a href="#babylon">Babylon.js</a>
                            &nbsp;library for creating 3D objects with Javascript, as well as with the <a href="#react">React</a>
                            &nbsp;library. I have worked with React Native to develop mobile applications, as well as used 
                            <a href="#nodejs"> Node.js</a>&nbsp;to utilize Javascript for backend applications. I also have 
                            limited experience with the GSAP library, which is used to create animations in Javascript for HTML elements.
                        </p> 
                    </SectionBody>
                    <div id='nodejs'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Node.js
                            <img src={require('../static/nodejs.png')} className='toolImg' title="Node.js"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            Node.js is a Javascript-based runtime environment that allows Javascript code to be executed outside
                            of the browser, and is often used to create the back-end for many web applications. I have experience
                            writing backend systems using Node.js, specifically with the Express.js framework, from my software
                            engineering internship at Resilience. I know how to create web applications and API routes with 
                            Node.js, as well as understand the ideas behind how Node.js functions to create back-end systems.
                            I am able to use Node.js with middleware and hashing libraries to establish secure connections to
                            a server, as well as how to connect to relational databases via SQL through it. With my understanding
                            of Node.js comes my understanding of how HTTP requests work, and how to write REST APIs.
                        </p> 
                    </SectionBody>
                    <div id='react'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            React & React Native
                            <img src={require('../static/react.png')} className='toolImg' title="ReactJS"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            ReactJS, or React, is a Javascript library for creating component-based UIs as well as single-page applications.
                            I know  React and JSX, the syntax used to embed HTML into Javascript, and have a good 
                            understanding of how React and its hooks work. I also have experience with React Native to create mobile
                            applications for both IOS and Android via React, and used such during my software engineering internship at
                            Resilience.
                        </p> 
                    </SectionBody>
                    <div id='sql'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            SQL & MySQL
                            <img src={require('../static/sql.png')} className='toolImg' title="SQL"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            SQL is the language through which relational databases can be interacted with. I have experience, both in the conceptual
                            and the practical application of this, with an understanding of how to perform basic create, read, update, and delete (CRUD) 
                            operations in SQL to work with relational databases. I also have experience working with MySQL, as well as Amazon Web Services
                            (AWS) and their Relational Database Service (RDS), to store and manage such databases.
                        </p> 
                    </SectionBody>
                    {/* <div id='qiskit'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            QISKit
                            <img src={require('../static/qiskit.png')} className='toolImg' title="Qiskit"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            QISKit, short for Quantum Information Software Kit, is a software development kit (SDK) for interfacing with quantum computers
                            and writing quantum algorithms that would run with qubits on a quantum machine. Quantum algorithms and programs have the potential
                            to be incredibly powerful in terms of processing power and may become the future of data processing and computing. I have a basic 
                            understanding of these concepts, and am working to learn more about the specifics of how qubits and quantum computers work, from 
                            learning more about quantum gates to better understanding quantum entanglement. <br /><br />
                            QISKit is a a way to write code for these quantum machines on a classical computer, and it uses a syntax based off of Python
                            in an environment similar to that of Jupyter Notebook in order to create these programs for the machines of the future.
                        </p> 
                    </SectionBody> */}
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            HTML and CSS
                            <img src={require('../static/html.png')} className='toolImg' title="HTML5"></img>
                            <img src={require('../static/css.png')} className='toolImg' title="CSS3"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            HTML and CSS are the languages used to build and design webpages as well as define their structure. Between 
                            hackathons and personal projects, I have come to learn much of the syntax concerning these languages, as well as
                            how to use them to create a good-looking website. I know how to build a website using HTML tags, as well as how
                            to use CSS classes and media queries to make a site responsive and aesthetically pleasing. 
                        </p> 
                    </SectionBody>
                </PageSection>
                <div id='3d&cad'></div>
                <PageSection section='3D & CAD'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            SolidWorks
                            <img src={require('../static/solidworks.png')} className='toolImg' title="SolidWorks"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            SolidWorks is a computer-aided modeling and drafting program that can be used to create and test 3D prototypes. 
                            I have a very good grasp of SolidWorks and its feature-based modeling system, having used it for over 2-3 years 
                            and taken courses in school for it. I know how to read engineering drawings, and have used 
                            SolidWorks to both replicate these drawings, as well as create my own from 3D models I have designed. 
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            PCB Design & KiCad
                            <img src={require('../static/pcb.png')} className='toolImg' title="PCB"></img>
                            <img src={require('../static/kicad.png')} className='toolImg' title="KiCad"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            PCB, or printed circuit board, design is the process of designing a circuit board for a given purpose, integrating microcontrollers,
                            sensors, and other components into a single board. I have experience with this process, from designing the schematic and working with 
                            microcontroller inputs and outputs, to actually designing the board and routing the traces. Throughout this process, I am capable of 
                            using electrical engineering principles to design a board that will function as intended, with minimal noise and interference and can 
                            use communication protocols such as I2C and SPI. <br /><br />
                            I have experience with this process from my work with the <a href='/experience#seds'>Terrapin Rocket Team</a>, where I have designed 
                            and created PCBs for our custom flight computer. I have experience using both KiCad and Autodesk Fusion 360 for this process, and have
                            experience with reading datasheets and understanding the electrical components that go into these boards, alongside skills for soldering
                            and PCB assembly. I've used a variety of components in these boards, from microcontrollers such as the Teensy 4.1 and STM32, to SMD sensors
                            such as the BMP390 and the MAX-M10S GPS module.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Blender
                            <img src={require('../static/blender.png')} className='toolImg' title="Blender"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            Blender is a computer graphics program used for modeling 3D objects as well as creating visual effects and 3D 
                            animations. Within Blender, I know how to model and create meshes, as well as use UV mapping and procedural
                            texturing to create scenes. I also am able to use rigging and keyframe animation within Blender to create animated 
                            scenes. I also use Blender to create 3D models as part of my workflow for coding 3D based programs, such as those
                            with Babylon.js. 
                        </p> 
                    </SectionBody>
                    <div id='babylon'></div>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Babylon.js
                            <img src={require('../static/babylon.png')} className='toolImg' title="Babylon.js"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            Babylon.js is a real time 3D engine and library based in Javascript to create and interact with 3D graphics 
                            within a web browser. Babylon.js is built on top of WebGL, and allows for 3D models to be integrated into 
                            webpages, such as the ones on this website. In Babylon.js I know how to create and import 3D models, as well
                            as interact with them through user inputs. I currently have a good foundational understanding of the engine, and
                            I look to continue to expand my expertise in it.
                        </p> 
                    </SectionBody>
                </PageSection>
                <div id='engineering'></div>
                <PageSection section='Engineering'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Mathematics</h3><br />
                        <p className='sectionDuration'>Skill Level: Advanced</p><br />
                        <p className='sectionBody'>
                            In the field of math, I am very proficient, as I have a good grasp of many mathematical techniques and processes,
                            having mastered and taken classes up to Calculus 3 and Differential Equations.
                            This also means that I have a very good grasp of algebra and mathematical concepts, which are important in 
                            engineering. Most importantly, however, I have good mathematical reasoning, meaning I can solve many math-based 
                            problems effectively.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Thermal Desktop
                            <img src={require('../static/td.png')} className='toolImg' title="Thermal Desktop"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Learning</p><br />
                        <p className='sectionBody'>
                            Thermal Desktop is a software application developed by C&R Technologies that is used for the thermal analysis
                            and simulation of heat transfer systems, predominantly in the aerospace industry. With the underlying SINDA/FLUINT
                            application being what many NASA missions use for thermohydraulic analysis, Thermal Desktop is a powerful tool. I 
                            have experience with this software, having used it within <a href='/experience#seds'>SEDS</a> to model and simulate
                            our cube satellite for both high altitude balloon launches and low earth orbits. I have a good understanding of the
                            basic principles of the software, as well as for the underlying properties of heat transfer that drive it, and I look
                            to continue to expand my knowledge and experience with it.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>
                            Physics
                            <img src={require('../static/physics.png')} className='toolImg' title="Physics"></img>
                        </h3><br />
                        <p className='sectionDuration'>Skill Level: Good</p><br />
                        <p className='sectionBody'>
                            I have a good understanding of basic physics principles, having taken courses such as AP Physics C and AP Physics 
                            1. I have an understanding of mechanical properties, including kinematics, energy, an rotational motion. I also 
                            have a good understanding of electrostatics and magnetism, which aids in my understanding of electronic components, 
                            having also taken a course on electrical components. <br /><br />
                            Through coursework and experiences, I have a good understanding of the physics behind spaceflight and orbital mechanics, 
                            and I am able to use this knowledge to design and create systems that can be used in space. I also have a working 
                            knowledge of cosmology and astrodynamics, as I understand aspects of the universe such as planetary motion, the geometry 
                            of the universe, and techniques used to measure these things. 
                        </p> 
                    </SectionBody>
                </PageSection>
                <div id='softSkills'></div>
                <PageSection section='Soft Skills'>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Problem Solving</h3><br />
                        <p className='sectionDuration'>Skill Level: Advanced</p><br />
                        <p className='sectionBody'>
                            I am a very good problem solver, and am able to use my knowledge of different subjects and my experience to 
                            find clever solutions to problems. Using my problem solving skills, I can find solutions to problems plaguing
                            a product or design, and do so in an effective manner, a skill that makes me a useful asset to any team.
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Teamwork and Communication</h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            Teamwork and communication are two of my strong points, as I am able to work cohesively with others to accomplish
                            whatever goals are necessary in a timely manner. I am able to confidently lead a team to accomplish a task, as well as 
                            work cohesively within one. I have experience working with others, whether it be for 
                            projects I have done, work experiences I have, or for club boards I have been in, with strong communication skills 
                            being at the forefront of the factors for my success in these group situations. 
                        </p> 
                    </SectionBody>
                    <SectionBody>
                        <h3 className='subsectionTitle'>Adaptability</h3><br />
                        <p className='sectionDuration'>Skill Level: Great</p><br />
                        <p className='sectionBody'>
                            My adaptability is another skill I pride myself on, as in an ever-changing world, being able to adapt and 
                            thrive in new situations is crucial. I am adaptable not only to new situations, but also to new topics and 
                            skills, as I am able to pick up and and learn new skills and tools quickly, should the need arise.
                        </p> 
                    </SectionBody>
                </PageSection>
            </div>
            <Footer top='none' />
        </div>
    )
}

export default skills
