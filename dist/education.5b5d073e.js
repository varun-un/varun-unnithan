parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"i6oH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),t=require("react-router-dom"),a=i(require("./pageTitle.js")),l=i(require("./pageSection.js")),n=i(require("./sectionBody.js")),r=require("./global.js");function i(e){return e&&e.__esModule?e:{default:e}}function o(){return e.default.createElement("div",{className:"pageAbs"},e.default.createElement("div",{className:"education"},e.default.createElement(a.default,{title:"Education",sections:["School","Activities","Courses"],links:["#school","#activities","#courses"],starOffset:"2"}),e.default.createElement("div",{id:"school"}),e.default.createElement(l.default,{section:"School"},e.default.createElement(n.default,null,e.default.createElement("h3",{className:"subsectionTitle"},"The Academy for Mathematics, Science, and Engineering"),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionDuration"},e.default.createElement("i",null,"July 2018 - Present",e.default.createElement("br",null),"Expected Graduation: July 2022")),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionBody"},"The Academy for Mathematics, Science, and Engineering, located at Morris Hills High School and part of the Morris County Vocational School District, is a rigorous, highly focused four year program for Morris County students with career interests in mathematics, science, or engineering. The program focuses on challenging students and preparing them to succeed in the field of STEM both in college and in their careers. In 2016, the Academy was ranked by ",e.default.createElement("i",null,"Newsweek")," as the ",e.default.createElement("a",{href:"https://www.newsweek.com/high-schools/americas-top-high-schools-2016",target:"_blank"},"second-best high school in America."),e.default.createElement("br",null),e.default.createElement("br",null),"I was accepted into the Academy for Mathematics, Science, and Engineering after scoring highly on the entrance exam and interview, and since then I have completed nearly three years in the program. Throughout the past three years, I have maintained a weighted GPA of",e.default.createElement("b",null," 103.19"),", on a 100-point scale, which translates to a",e.default.createElement("b",null," 4.0 GPA")," on a 4-point scale. My time in the program has taught me skills like problem solving and teamwork, while also preparing me with the necessary skills and knowledge to become a successful member in the field of STEM."),e.default.createElement("br",null),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionBody"},e.default.createElement("b",{className:"underline"},"Honor Societies:")," ",e.default.createElement("br",null),e.default.createElement("br",null)),e.default.createElement("ul",{className:"sectionBody"},e.default.createElement("li",null,"National Honor Society"),e.default.createElement("li",null,"Science National Honors Society"),e.default.createElement("li",null,"Math Honor Society"),e.default.createElement("li",null,"Technology Education Honor Society"),e.default.createElement("li",null,"Rho Kappa National Social Studies Honor Society"),e.default.createElement("li",null,"Spanish Honor Society")),e.default.createElement("br",null),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionBody"},e.default.createElement("b",{className:"underline"},"School Courses:")," ",e.default.createElement("br",null),e.default.createElement("br",null)),e.default.createElement("ul",{className:"sectionBody"},e.default.createElement("li",null,"AP Physics 1"),e.default.createElement("li",null,"AP Computer Science Principles"),e.default.createElement("li",null,"AP Computer Science A"),e.default.createElement("li",null,"AP Chemistry"),e.default.createElement("li",null,"AP Biology"),e.default.createElement("li",null,"AP Statistics"),e.default.createElement("li",null,"AP Calculus BC")))),e.default.createElement("div",{id:"activities"}),e.default.createElement(l.default,{section:"Activities"},e.default.createElement(n.default,null,e.default.createElement("h3",{className:"subsectionTitle"},"Future Business Leaders of America"),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionDuration"},e.default.createElement("i",null,"2019 - Present")),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionBody"},"I am a member of the Morris Hills High School Future Business Leaders of America (FBLA) chapter. FBLA is a national organization for high schoolers to prepare students for careers in business, and is also the largest business student organization in the world. As a member of FBLA, I have learned many things about business and finance, as well as competed in many of the competitive events the club has to offer. ",e.default.createElement("br",null),e.default.createElement("br",null),"In 2020, I competed in Introduction to Financial Math competitive event, where I placed 1st in the local district and 5th in the state of New Jersey. In 2021, I participated in the Coding and Programming competitive event, where I had to code and present a program for a provided theme, which can be seen ",e.default.createElement(t.Link,{to:"/projects#fblaquiz"},"here"),". In this event, I placed 2nd in the state of New Jersey.")),e.default.createElement(n.default,null,e.default.createElement("h3",{className:"subsectionTitle"},"Junior State of America"),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionDuration"},e.default.createElement("i",null,"2018 - Present")),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionBody"},"I currently am the vice president of the Morris Hills High School Junior State of America (JSA) chapter. JSA is a national organization with high-school chapters nationwide, whose goal is to engage students in debates and discussions regarding important issues involving politics, the government, and their community. As vice president, my job is to help plan and run all club meetings, working closely with both the other officers and with the club body, while also maintaining the club's social media presence. In addition, as a member of JSA, I have improved my oratory and presentation skills, as well as having learned a lot about the issues currently plaguing the nation.")),e.default.createElement(n.default,null,e.default.createElement("h3",{className:"subsectionTitle"},"Key Club"),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionDuration"},e.default.createElement("i",null,"2019 - Present")),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionBody"},"I hold an officer position for the Morris Hills Key Club, with Key Club being an international, student-led organization for community service and volunteering. I currently hold the position of club secretary for the Morris Hills chapter, with this being my second year of doing so. ",e.default.createElement("br",null),e.default.createElement("br",null),"As club secretary, my job is to keep track of club data and member information, as well as serve as the intermediary for communication between the Morris Hills Key Club chapter and the larger Key Club district. I also work with the other chapter officers to set up and hold events for community service and fundraising to benefit the community. I have helped hold and participate in events such as our virtual food drives, through which we collected over $2,000 for the Community FoodBank of New Jersey, and fun performances for younger kids."))),e.default.createElement("div",{id:"courses"}),e.default.createElement(l.default,{section:"Courses"},e.default.createElement(n.default,null,e.default.createElement("h3",{className:"subsectionTitle"},"Astrophysics: Cosmology"),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionDuration"},e.default.createElement("i",null,"January 2021 - May 2021")),e.default.createElement("br",null),e.default.createElement("p",{className:"sectionBody"},"I have taken and completed the ",e.default.createElement("i",null,"ANU-ASTRO4x: Astrophysics: Cosmology")," course on edX taught by Paul Francis and Brian Schmidt of the Australian National University. Through this course I gained a better understanding of Einsteinian physics and its applications on planetary and galactic motions. I also learned about other aspects of astrophysics and cosmology, such as Hubble's Law, spacetime metrics, Friedmann equations, inflation theory, dark energy and the cosmic microwave background. Finally, I learned more about the technical skills used in cosmology, such as the tools and techniques used to measure distances and other values. This course not only furthered my knowledge about space and astrophysics, but has also made me even more excited to continue learning about the subject.",e.default.createElement("br",null),e.default.createElement("br",null),e.default.createElement("a",{href:"https://courses.edx.org/certificates/ed784bac8f4a4c1385cf6a7d4aca45a4",target:"_blank"},"View Certificate"))))),e.default.createElement(r.Footer,{top:"none"}))}require("./pages.css");var s=(0,t.withRouter)(o);exports.default=s;
},{"react":"n8MK","react-router-dom":"uc19","./pageTitle.js":"ttX8","./pageSection.js":"YbAB","./sectionBody.js":"cY1H","./global.js":"xFa0","./pages.css":"YQXk"}]},{},[], null)
//# sourceMappingURL=/education.5b5d073e.js.map