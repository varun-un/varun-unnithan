// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"skills.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _pageTitle = _interopRequireDefault(require("./pageTitle.js"));

var _pageSection = _interopRequireDefault(require("./pageSection.js"));

var _sectionBody = _interopRequireDefault(require("./sectionBody.js"));

var _global = require("./global.js");

require("./pages.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function skills() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pageAbs"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/_react.default.createElement(_pageTitle.default, {
    title: "Skills",
    sections: ['Coding', '3D & CAD', 'Engineering', 'Soft Skills'],
    links: ['#coding', '#3d&cad', '#engineering', '#softSkills'],
    starOffset: ""
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "coding"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "Coding"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Java", /*#__PURE__*/_react.default.createElement("img", {
    src: "./java.png",
    className: "toolImg",
    title: "Java"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Great"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "Java is an object-oriented programming language, used often to create applications or build back-end modules for the internet. I have known Java for nearly two years now, starting with the AP Computer Science A class I took in my high school. In this class I excelled, scoring a perfect 5 on the AP Computer Science A test, and since then I have self-taught myself much more about the language, in order to improve my ability to utilize Java and its features. ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Beyond just a functional knowledge of Java and its syntax, I am also familiar with the Java Swing library, which is a library built into Java for the purpose of creating component-based GUIs.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Javascript", /*#__PURE__*/_react.default.createElement("img", {
    src: "./javascript.png",
    className: "toolImg",
    title: "Javascript"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Great"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "Javascript is a a scripting programming language used largely for creating interactive webpages, though it is also used for building applications outside of websites. I currently have a good mastery and handle on much of Javascript and its syntax, and I am able to use the language to create webpages, algorithms and even game-like programs.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Outside of vanilla Javascript, I also have experience with the ", /*#__PURE__*/_react.default.createElement("a", {
    href: "#babylon"
  }, "Babylon.js"), "\xA0library for creating 3D objects with Javascript, as well as with the ", /*#__PURE__*/_react.default.createElement("a", {
    href: "#react"
  }, "React"), "\xA0library. I also have limited experience with the GSAP library, which is used to create animations in Javascript for HTML elements.")), /*#__PURE__*/_react.default.createElement("div", {
    id: "react"
  }), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "React", /*#__PURE__*/_react.default.createElement("img", {
    src: "./react.png",
    className: "toolImg",
    title: "ReactJS"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Learning"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "ReactJS, or React, is a Javascript library for creating component-based UIs as well as single-page applications. I have learned the basics of React and JSX, the syntax used to embed HTML into Javascript, and have a good understanding of how React works with the HTML DOM. Though this may be a relatively new library to me, I believe I have a good understanding of it and can quickly learn how to utilize React to its full potential.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "HTML and CSS", /*#__PURE__*/_react.default.createElement("img", {
    src: "./html.png",
    className: "toolImg",
    title: "HTML5"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./css.png",
    className: "toolImg",
    title: "CSS3"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Learning"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "HTML and CSS are the languages used to build and design webpages as well as define their structure. Between hackathons and personal projects, I have come to learn much of the syntax concerning these languages, as well as how to use them to create a good-looking website. I know how to build a website using HTML tags, as well as how to use CSS classes and media queries to make a site responsive and aesthetically pleasing."))), /*#__PURE__*/_react.default.createElement("div", {
    id: "3d&cad"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "3D & CAD"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "SolidWorks", /*#__PURE__*/_react.default.createElement("img", {
    src: "./solidworks.png",
    className: "toolImg",
    title: "SolidWorks"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Great"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "SolidWorks is a computer-aided modeling and drafting program that can be used to create and test 3D prototypes. I have a very good grasp of SolidWorks and its feature-based modeling system, having used it for over two years now in the two CAD classes I have taken in school. I know how to read engineering drawings, and have used SolidWorks to both replicate these drawings, as well as create my own from 3D models I have designed.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Blender", /*#__PURE__*/_react.default.createElement("img", {
    src: "./blender.png",
    className: "toolImg",
    title: "Blender"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Good"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "Blender is a computer graphics program used for modeling 3D objects as well as creating visual effects and 3D animations. Within Blender, I know how to model and create meshes, as well as use UV mapping and procedural texturing to create scenes. I am also experienced with keyframe animation within Blender to create animated scenes. I also use Blender to create 3D models as part of my workflow for coding 3D based programs, such as those with Babylon.js.")), /*#__PURE__*/_react.default.createElement("div", {
    id: "babylon"
  }), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Babylon.js", /*#__PURE__*/_react.default.createElement("img", {
    src: "./babylon.png",
    className: "toolImg",
    title: "Babylon.js"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Learning"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "Babylon.js is a real time 3D engine and library based in Javascript to create and interact with 3D graphics within a web browser. Babylon.js is built on top of WebGL, and allows for 3D models to be integrated into webpages, such as the ones on this website. In Babylon.js I know how to create and import 3D models, as well as interact with them through user input. I currently have a good foundational understanding of the engine, and I look to continue to expand my expertise in it."))), /*#__PURE__*/_react.default.createElement("div", {
    id: "engineering"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "Engineering"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Mathematics"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Advanced"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "In the field of math, I am very proficient, as I have a good grasp of many mathematical techniques and processes. I have mastered up to Single Variable Calculus (Calculus 2), and am currently enrolled in an AP Calculus BC class. This also means that I have a very good grasp of algebra and differential equations, which are important in engineering. Most importantly, however, I have good mathematical reasoning, meaning I can solve many math-based problems effectively.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Physics"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Good"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "I have a good understanding of basic physics principles, having taken an AP Physics 1 class and gotten a perfect score of 5 in the AP Physics 1 test. I understand kinematics and am able to use physics to model the motion and energy of objects and their systems well. I also have a good understanding of electricity and electronic components, having also taken a course on electrical components. ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "I also have a working knowledge of cosmology and astrophysics, as I understand some aspects of the universe such as planetary motion, the geometry of the universe, and techniques used to measure these things."))), /*#__PURE__*/_react.default.createElement("div", {
    id: "softSkills"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "Soft Skills"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Problem Solving"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Advanced"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "I am a very good problem solver, and am able to use my knowledge of different subjects and my experience to find clever solutions to problems. Using my problem solving skills, I can find solutions to problems plaguing a product or design, and do so in an effective manner, a skill that makes me a useful asset to any team.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Teamwork and Communication"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Great"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "Teamwork and communication are two of my strong points, as I am able to work cohesively with others to accomplish whatever goals are necessary in a timely manner. I have experience working with others, whether it be for projects I have done, or for club boards I have been in, with strong communication skills being at the forefront of the factors for my success in these group situations.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Adaptability"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, "Skill Level: Great"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "My adaptability is another skill I pride myself on, as in an ever-changing world, being able to adapt and thrive in new situations is crucial. I am adaptable not only to new situations, but also to new topics and skills, as I am able to pick up and and learn new skills and tools quickly, should the need arise.")))), /*#__PURE__*/_react.default.createElement(_global.Footer, {
    top: "none"
  }));
}

var _default = skills;
exports.default = _default;
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","./pageTitle.js":"pageTitle.js","./pageSection.js":"pageSection.js","./sectionBody.js":"sectionBody.js","./global.js":"global.js","./pages.css":"pages.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49823" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/skills.6f4879f4.js.map