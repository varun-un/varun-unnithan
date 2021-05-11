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
})({"education.js":[function(require,module,exports) {
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

function education() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pageAbs"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "education"
  }, /*#__PURE__*/_react.default.createElement(_pageTitle.default, {
    title: "Education",
    sections: ['School', 'Activities', 'Courses'],
    links: ['#school', '#activities', '#courses'],
    starOffset: "2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "school"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "School"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "The Academy for Mathematics, Science, and Engineering"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "July 2018 - Present", /*#__PURE__*/_react.default.createElement("br", null), "Expected Graduation: July 2022")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "The Academy for Mathematics, Science, and Engineering, located at Morris Hills High School and part of the Morris County Vocational School District, is a rigorous, highly focused four year program for Morris County students with career interests in mathematics, science, or engineering. The program focuses on challenging students and preparing them to succeed in the field of STEM both in college and in their careers. In 2016, the Academy was ranked by ", /*#__PURE__*/_react.default.createElement("i", null, "Newsweek"), " as the\xA0", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.newsweek.com/high-schools/americas-top-high-schools-2016",
    target: "_blank"
  }, "second-best high school in America."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "I was accepted into the Academy for Mathematics, Science, and Engineering after scoring highly on the entrance exam and interview, and since then I have completed nearly three years in the program. Throughout the past three years, I have maintained a weighted GPA of", /*#__PURE__*/_react.default.createElement("b", null, " 103.26"), ", on a 100-point scale, which translates to a", /*#__PURE__*/_react.default.createElement("b", null, " 4.0 GPA"), " on a 4-point scale. My time in the program has taught me skills like problem solving and teamwork, while also preparing me with the necessary skills and knowledge to become a successful member in the field of STEM."), " ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "underline"
  }, "School Courses:"), " ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "sectionBody"
  }, /*#__PURE__*/_react.default.createElement("li", null, "AP Physics 1"), /*#__PURE__*/_react.default.createElement("li", null, "AP Computer Science Principles"), /*#__PURE__*/_react.default.createElement("li", null, "AP Computer Science A"), /*#__PURE__*/_react.default.createElement("li", null, "AP Chemistry"), /*#__PURE__*/_react.default.createElement("li", null, "AP Biology"), /*#__PURE__*/_react.default.createElement("li", null, "AP Statistics"), /*#__PURE__*/_react.default.createElement("li", null, "AP Calculus BC")))), /*#__PURE__*/_react.default.createElement("div", {
    id: "activities"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "Activities"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Future Business Leaders of America"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "2019 - Present")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "I am a member of the Morris Hills High School Future Business Leaders of America (FBLA) chapter. FBLA is a national organization for high schoolers to prepare students for careers in business, and is also the largest business student organization in the world. As a member of FBLA, I have learned many things about business and finance, as well as competed in many of the competitive events the club has to offer. ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Last year, 2020, I competed in Introduction to Financial Math competitive event, where I placed 1st in the local district and 5th in the state of New Jersey. In 2021, I participated in the Coding and Programming competitive event, where I had to code and present a program for a provided theme, which can be seen ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/projects#fblaquiz"
  }, "here"), ". In this event, I placed 2nd in the state of New Jersey.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Key Club"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "2019 - Present")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "I hold an officer position for the Morris Hills Key Club, with Key Club being an international, student-led organization for community service and volunteering. I currently hold the position of club secretary for the Morris Hills chapter, with this being my second year of doing so. ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "As club secretary, my job is to keep track of club data and member information, as well as serve as the intermediary for communication between the Morris Hills Key Club chapter and the larger Key Club district. I also work with the other chapter officers to set up and hold events for community service and fundraising to benefit the community. I have helped hold and participate in events such as our virtual food drives, through which we collected over $2,000 for the Community FoodBank of New Jersey, and fun performances for younger kids.")), /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Junior State of America"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "2018 - Present")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "I am a member of the Morris Hills High School Junior State of America (JSA) chapter. JSA is a national organization with high-school chapters nationwide, whose goal is to engage students in debates and discussions regarding important issues involving politics, the government, and their community. As a member of JSA, I have improved my oratory and presentation skills, as well as learned much about the issues currently plaguing the nation."))), /*#__PURE__*/_react.default.createElement("div", {
    id: "courses"
  }), /*#__PURE__*/_react.default.createElement(_pageSection.default, {
    section: "Courses"
  }, /*#__PURE__*/_react.default.createElement(_sectionBody.default, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "subsectionTitle"
  }, "Astrophysics: Cosmology"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionDuration"
  }, /*#__PURE__*/_react.default.createElement("i", null, "January 2021 - May 2021")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "sectionBody"
  }, "I have taken and completed the ", /*#__PURE__*/_react.default.createElement("i", null, "ANU-ASTRO4x: Astrophysics: Cosmology"), " course on edX taught by Paul Francis and Brian Schmidt of the Australian National University. Through this course I gained a better understanding of Einsteinian physics and its applications on planetary and galactic motions. I also learned about other aspects of astrophysics and cosmology, such as Hubble's Law, spacetime metrics, Friedmann equations, inflation theory, dark energy and the cosmic microwave background. Finally, I learned more about the technical skills used in cosmology, such as the tools and techniques used to measure distances and other values. This course not only furthered my knowledge about space and astrophysics, but has also made me even more excited to continue learning about the subject.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://courses.edx.org/certificates/ed784bac8f4a4c1385cf6a7d4aca45a4",
    target: "_blank"
  }, "View Certificate"))))), /*#__PURE__*/_react.default.createElement(_global.Footer, {
    top: "none"
  }));
}

var _default = (0, _reactRouterDom.withRouter)(education);

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
//# sourceMappingURL=/education.10e8cd95.js.map