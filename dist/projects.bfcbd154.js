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
})({"projects.js":[function(require,module,exports) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function projects() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pageAbs"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "projects"
  }, /*#__PURE__*/_react.default.createElement(_pageTitle.default, {
    title: "Projects",
    sections: ['Major Projects', 'Side Projects'],
    links: ['#major', '#side'],
    starOffset: "2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "major"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "Major Projects"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Aether Connect", /*#__PURE__*/_react.default.createElement("img", {
    src: "./html.png",
    className: "toolImg",
    title: "HTML5"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./css.png",
    className: "toolImg",
    title: "CSS3"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./javascript.png",
    className: "toolImg",
    title: "Javascript"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./babylon.png",
    className: "toolImg",
    title: "Babylon.js"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "March 2021 - Present")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "Aether Connect is a personal project which I have started in order to help teach more advanced topics to students using engaging, 3D-based simulations. In my own experiences, I have found that while there are a variety of 2D simulations to teach more simple concepts to younger kids, there seemed to be a relative lack of such simulations for more advanced topics, especially those in 3D, which is a medium that I think is extremely effective at helping students understand certain topics better. Aether Connect serves as a solution that not only addresses these points, but also intends to teach advanced, college-level topics in a way understandable to even younger audiences. ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Since a goal of Aether Connect is accessibility, this project plans to deploy as a website, which will serve as the platform on which the simulations will lie. In order to do this, Aether Connect is largely built with Javascript, with HTML and CSS being used to create the website itself. The Javascript-based Babylon.js rendering engine is used to create the interactive 3D simulations. Aether Connect is currently a work in progress, however, I look to publish its first deployment by the summer of 2021.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Visit:", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/varun-un/AetherConnect",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "./github.png",
    className: "projectLink",
    title: "Github"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    id: "fblaquiz"
  }), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "FBLA Quiz", /*#__PURE__*/_react.default.createElement("img", {
    src: "./java.png",
    className: "toolImg",
    title: "Java"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "December 2020 - Present")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "The FBLA Quiz program is a project I have created for the 2021 FBLA Coding and Programming Competitive Event. This program reads random questions and answers from a database, then uses that data to administer a quiz to the user, while also including features for tracking users' scores and progress, as well as administering different types of questions. FBLA Quiz is built with Java, and uses the Java Swing library to generate the GUI. In addition to using vanilla Java, this program also uses the JSON Simple library, to allow for database connectivity with JSON files, and the Apache PDFBox library, to allow the program to create and write PDF files.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "This first version of this project was completed in March 2021, where it was then submitted to the state level of the FBLA Coding and Programming Event, where it placed 2nd in the state of New Jersey. However, this project is still ongoing, as it is continuing to be developed and improved.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Visit:", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/varun-un/FBLAQuiz",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "./github.png",
    className: "projectLink",
    title: "Github"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    id: "side"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "Side Projects"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "varununnithan.me", /*#__PURE__*/_react.default.createElement("img", {
    src: "./html.png",
    className: "toolImg",
    title: "HTML5"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./css.png",
    className: "toolImg",
    title: "CSS3"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./javascript.png",
    className: "toolImg",
    title: "Javascript"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./react.png",
    className: "toolImg",
    title: "ReactJS"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./blender.png",
    className: "toolImg",
    title: "Blender"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./babylon.png",
    className: "toolImg",
    title: "Babylon.js"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./gsap.png",
    className: "toolImg",
    title: "GSAP"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "April 2021")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "The making of this site itself was another project I have undertaken. The goal of this site is to provide a better background on who I am as a person and my skills, as well as shed light on the different activities I have partaken in. In order to build this site, I used a myriad of different tools and languages, some of which were new to me, making this project a learning experience as well. This site was built using React, and so it is largely based in Javascript, however it also incorporates HTML, through JSX, and CSS as well. In order to create the 3D models used in the webpage, Blender was first used to model and sculpt the objects, with these models then being embedded into the website using Babylon.js. Finally, the GreenSock Animation Platform (GSAP) and ScrollTrigger libraries were used to create some of the site's animations within Javascript. ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Though this project's goal is to release a site pertaining to myself, which can be considered accomplished, this website will never truly be 'completed' in the sense that it will constantly be updated and changed to reflect new changes in myself and my experiences.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Visit:", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/varun-un/varun-unnithan",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "./github.png",
    className: "projectLink",
    title: "Github"
  })))), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "nutritioUS", /*#__PURE__*/_react.default.createElement("img", {
    src: "./html.png",
    className: "toolImg",
    title: "HTML5"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./css.png",
    className: "toolImg",
    title: "CSS3"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./javascript.png",
    className: "toolImg",
    title: "Javascript"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./php.png",
    className: "toolImg",
    title: "PHP"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "April 2021")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "Created during the 2021 HackKU hackathon, nutritioUS is a website with the goal of promoting healthy eating and drinking in a fun way for users. Using the website, users can track their daily calories, water, and other nutrition facts, data which is then used to create a daily health score for users, with this score also being used for friends to compete against one another on the site. Working with a team of 3 others, this program was built with HTML, CSS, and Javascript for the frontend and website design, and PHP to communicate with the server in the backend.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Visit:", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/varun-un/nutritioUS",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "./github.png",
    className: "projectLink",
    title: "Github"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://devpost.com/software/nutritious-ewvb14",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "./devpost.png",
    className: "projectLink",
    title: "Devpost"
  })))), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Student Connect", /*#__PURE__*/_react.default.createElement("img", {
    src: "./html.png",
    className: "toolImg",
    title: "HTML5"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./css.png",
    className: "toolImg",
    title: "CSS3"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./javascript.png",
    className: "toolImg",
    title: "Javascript"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./java.png",
    className: "toolImg",
    title: "Java"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "./jsp.png",
    className: "toolImg",
    title: "JSP"
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "March 2021")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "This project was created during the 2021 PackHacks hackathon, where it placed second in the high school track. Student Connect is a program that allows students to connect with other students and professionals, in a simple manner, making networking more accessible and easy-to-use. It matches students with other users based off of shared interests, with the user then being able to choose who to connect to from a curated list of other students. This program was made with a team of 2 others, and used HTML, CSS, and Javascript for the frontend, alongside Java and JSP for database connectivity and the backend.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Visit:", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/anish-kristipati/PackHacks",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "./github.png",
    className: "projectLink",
    title: "Github"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://devpost.com/software/student-connect-bgh6ie",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "./devpost.png",
    className: "projectLink",
    title: "Devpost"
  })))))), /*#__PURE__*/_react.default.createElement(_global.Footer, {
    top: "none"
  }));
}

var _default = projects;
exports.default = _default;
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","./pageTitle.js":"pageTitle.js","./pageSection.js":"pageSection.js","./sectionBody.js":"sectionBody.js","./global.js":"global.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/projects.bfcbd154.js.map