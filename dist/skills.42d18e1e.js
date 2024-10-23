// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l9z8P":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "310fbce742d18e1e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"kQSBf":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d1a4 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d1a4.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _pageTitleJs = require("./pageTitle.js");
var _pageTitleJsDefault = parcelHelpers.interopDefault(_pageTitleJs);
var _pageSectionJs = require("./pageSection.js");
var _pageSectionJsDefault = parcelHelpers.interopDefault(_pageSectionJs);
var _sectionBodyJs = require("./sectionBody.js");
var _sectionBodyJsDefault = parcelHelpers.interopDefault(_sectionBodyJs);
var _globalJs = require("./global.js");
var _pagesCss = require("./pages.css");
function skills() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "pageAbs",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "skills",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageTitleJsDefault.default), {
                        title: "Skills",
                        sections: [
                            "Coding",
                            "3D & CAD",
                            "Engineering",
                            "Soft Skills"
                        ],
                        links: [
                            "#coding",
                            "#3d&cad",
                            "#engineering",
                            "#softSkills"
                        ],
                        starOffset: ""
                    }, void 0, false, {
                        fileName: "src/skills.js",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "coding"
                    }, void 0, false, {
                        fileName: "src/skills.js",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "Coding",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "C / C++",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("ec497d1feadaf3b0"),
                                                className: "toolImg",
                                                title: "C++"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 20,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("6ccec995ebce11ba"),
                                                className: "toolImg",
                                                title: "C"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 21,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 18,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 22,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 23,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "C is a structural programming language that is used for system applications and low-level programming applications, with C++ being an object-oriented programming language that is built on top of C. Between taking courses covering C and low-level programming, as well as my over one year of experience with C++, a superset of C, I have a good understanding of the language and its syntax. In both C and C++, I am able to create programs that utilize pointers, structs, classes, memory allocation, and other features of the languages. I am able to use C-based programs to create low-level applications that interact directly with the OS and hardware, as well as use C++ to create higher-level applications. I've also used C++ in projects that involve microcontrollers and embedded systems, enabling me to create systems that interact with hardware and perform specialized tasks."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                id: "python"
                            }, void 0, false, {
                                fileName: "src/skills.js",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Python",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("d53c06bde3800010"),
                                                className: "toolImg",
                                                title: "Python"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 39,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("52edbdbb7e94a0f2"),
                                                className: "toolImg",
                                                title: "PyTorch"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 40,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 41,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 42,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "Python is a general-purpose language popularly used for functions within data science and machine learning. I have a good understanding of Python and its syntax, having used it in academic courses and other projects. I am able to use Python to create programs that utilize object-oriented programming, as well as create programs that interact with files and databases. I've used Python and libraries within it to do astrodynamics simulations and data analysis for my work with ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/experience#amazon-kuiper",
                                                children: "Amazon's Project Kuiper"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 47,
                                                columnNumber: 127
                                            }, this),
                                            ", and for graph-based data processing and analysis within my ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/experience#risc",
                                                children: "RISC Internship"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 48,
                                                columnNumber: 117
                                            }, this),
                                            ".",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 49,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 49,
                                                columnNumber: 35
                                            }, this),
                                            "I also have experience using Python libraries such as NumPy, SciPy, and PyTorch for data analysis and machine learning, for which I have both taken courses for and used in projects. I understand the math concepts behind many of these frameworks, from Bayesian statistics to neural networks, and am able to use them to create models and analyze data."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Matlab",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("8b1eabb0f05524e5"),
                                                className: "toolImg",
                                                title: "MATLAB"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 59,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 60,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "MATLAB is a high-level programming language used for numerical computing and data analysis. I have a good understanding of MATLAB and its syntax, having used it in academic courses and projects. I am able to use MATLAB to create scripts to numerically solve problems such as differential equations, as well as analyze and visualize data. I have used MATLAB in my previous internship at ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/experience#mitll",
                                                children: "MIT Lincoln lab"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 65,
                                                columnNumber: 32
                                            }, this),
                                            " to create and optimize post-processing image algorithms, and thus can use MATLAB for image processing as well as for parallel computing and within an object-oriented framework. I've also used MATLAB for developing mathematically parameterized models for toroidal propeller geometries for my ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/experience#torus",
                                                children: "Gemstone research"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 67,
                                                columnNumber: 117
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Java",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("61fed42e42621499"),
                                                className: "toolImg",
                                                title: "Java"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 74,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 75,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 76,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "Java is an object-oriented programming language, used often to create applications or build back-end modules for the internet. Beginning with the AP Computer Science classes I took in high school, to my experience with object-oriented programming courses at college, I have a good understanding of Java and its core concepts. With this comes my understanding of object-oriented programming, and how to use Java to leverage polymorphism, inheritance, and other object-oriented concepts. ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 82,
                                                columnNumber: 104
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 82,
                                                columnNumber: 110
                                            }, this),
                                            "Beyond just a functional knowledge of Java and its syntax, I am also familiar with the Java Swing library, which is a library built into Java for the purpose of creating component-based GUIs. I have a strong experience with using Java in projects as well, having used it in hackathons and personal projects to create applications such as a custom ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/projects#raymarcher",
                                                children: "3D game engine"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 86,
                                                columnNumber: 46
                                            }, this),
                                            " in vanilla Java."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Javascript",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("e3a3bce4a897bb33"),
                                                className: "toolImg",
                                                title: "Javascript"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 92,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 93,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Good"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 94,
                                        columnNumber: 77
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "Javascript is a a scripting programming language used largely for creating interactive webpages, though it is also used for building applications outside of websites. I currently have a good mastery and handle on much of Javascript and its syntax, and I am able to use the language to create webpages, algorithms and even game-like programs.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 100,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 100,
                                                columnNumber: 35
                                            }, this),
                                            "Outside of vanilla Javascript, I also have experience with the ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "#babylon",
                                                children: "Babylon.js"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 101,
                                                columnNumber: 92
                                            }, this),
                                            "\xa0library for creating 3D objects with Javascript, as well as with the ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "#react",
                                                children: "React"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 102,
                                                columnNumber: 104
                                            }, this),
                                            "\xa0library. I have worked with React Native to develop mobile applications, as well as used",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "#nodejs",
                                                children: " Node.js"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 104,
                                                columnNumber: 29
                                            }, this),
                                            "\xa0to utilize Javascript for backend applications. I also have limited experience with the GSAP library, which is used to create animations in Javascript for HTML elements."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 95,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                id: "nodejs"
                            }, void 0, false, {
                                fileName: "src/skills.js",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Node.js",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("b87ef77d8c1b0147"),
                                                className: "toolImg",
                                                title: "Node.js"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 112,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 113,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Good"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 114,
                                        columnNumber: 77
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "Node.js is a Javascript-based runtime environment that allows Javascript code to be executed outside of the browser, and is often used to create the back-end for many web applications. I have experience writing backend systems using Node.js, specifically with the Express.js framework, from my software engineering internship at Resilience. I know how to create web applications and API routes with Node.js, as well as understand the ideas behind how Node.js functions to create back-end systems. I am able to use Node.js with middleware and hashing libraries to establish secure connections to a server, as well as how to connect to relational databases via SQL through it. With my understanding of Node.js comes my understanding of how HTTP requests work, and how to write REST APIs."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                id: "react"
                            }, void 0, false, {
                                fileName: "src/skills.js",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "React & React Native",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("d676f26ad6ab7f16"),
                                                className: "toolImg",
                                                title: "ReactJS"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 130,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 131,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Good"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 132,
                                        columnNumber: 77
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "ReactJS, or React, is a Javascript library for creating component-based UIs as well as single-page applications. I know  React and JSX, the syntax used to embed HTML into Javascript, and have a good understanding of how React and its hooks work. I also have experience with React Native to create mobile applications for both IOS and Android via React, and used such during my software engineering internship at Resilience."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                id: "sql"
                            }, void 0, false, {
                                fileName: "src/skills.js",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "SQL & MySQL",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("bfe92575faf37f06"),
                                                className: "toolImg",
                                                title: "SQL"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 146,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Learning"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 147,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "SQL is the language through which relational databases can be interacted with. I have experience, both in the conceptual and the practical application of this, with an understanding of how to perform basic create, read, update, and delete (CRUD) operations in SQL to work with relational databases. I also have experience working with MySQL, as well as Amazon Web Services (AWS) and their Relational Database Service (RDS), to store and manage such databases."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "HTML and CSS",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("7c9d2311702831f6"),
                                                className: "toolImg",
                                                title: "HTML5"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 175,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("d052de8b78999e02"),
                                                className: "toolImg",
                                                title: "CSS3"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 177,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Learning"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 178,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "HTML and CSS are the languages used to build and design webpages as well as define their structure. Between hackathons and personal projects, I have come to learn much of the syntax concerning these languages, as well as how to use them to create a good-looking website. I know how to build a website using HTML tags, as well as how to use CSS classes and media queries to make a site responsive and aesthetically pleasing."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 179,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/skills.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "3d&cad"
                    }, void 0, false, {
                        fileName: "src/skills.js",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "3D & CAD",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "SolidWorks",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("fa72894548b000f1"),
                                                className: "toolImg",
                                                title: "SolidWorks"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 192,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 193,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 194,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "SolidWorks is a computer-aided modeling and drafting program that can be used to create and test 3D prototypes. I have a very good grasp of SolidWorks and its feature-based modeling system, having used it for over 2-3 years and taken courses in school for it. I know how to read engineering drawings, and have used SolidWorks to both replicate these drawings, as well as create my own from 3D models I have designed."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 189,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "PCB Design & KiCad",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("e5b477ed498e8fbd"),
                                                className: "toolImg",
                                                title: "PCB"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 205,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("729869c3bb04c410"),
                                                className: "toolImg",
                                                title: "KiCad"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 206,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 203,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 207,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 208,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 208,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "PCB, or printed circuit board, design is the process of designing a circuit board for a given purpose, integrating microcontrollers, sensors, and other components into a single board. I have experience with this process, from designing the schematic and working with microcontroller inputs and outputs, to actually designing the board and routing the traces. Throughout this process, I am capable of using electrical engineering principles to design a board that will function as intended, with minimal noise and interference and can use communication protocols such as I2C and SPI. ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 214,
                                                columnNumber: 78
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 214,
                                                columnNumber: 84
                                            }, this),
                                            "I have experience with this process from my work with the ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/experience#seds",
                                                children: "Terrapin Rocket Team"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 215,
                                                columnNumber: 87
                                            }, this),
                                            ", where I have designed and created PCBs for our custom flight computer. I have experience using both KiCad and Autodesk Fusion 360 for this process, and have experience with reading datasheets and understanding the electrical components that go into these boards, alongside skills for soldering and PCB assembly. I've used a variety of components in these boards, from microcontrollers such as the Teensy 4.1 and STM32, to SMD sensors such as the BMP390 and the MAX-M10S GPS module."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 209,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Blender",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("b82317d17ffb9f93"),
                                                className: "toolImg",
                                                title: "Blender"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 225,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 226,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Good"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 227,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 227,
                                        columnNumber: 77
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "Blender is a computer graphics program used for modeling 3D objects as well as creating visual effects and 3D animations. Within Blender, I know how to model and create meshes, as well as use UV mapping and procedural texturing to create scenes. I also am able to use rigging and keyframe animation within Blender to create animated scenes. I also use Blender to create 3D models as part of my workflow for coding 3D based programs, such as those with Babylon.js."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 228,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                id: "babylon"
                            }, void 0, false, {
                                fileName: "src/skills.js",
                                lineNumber: 236,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Babylon.js",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("923260e3a80e81ec"),
                                                className: "toolImg",
                                                title: "Babylon.js"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 240,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 238,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 241,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Learning"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 242,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "Babylon.js is a real time 3D engine and library based in Javascript to create and interact with 3D graphics within a web browser. Babylon.js is built on top of WebGL, and allows for 3D models to be integrated into webpages, such as the ones on this website. In Babylon.js I know how to create and import 3D models, as well as interact with them through user inputs. I currently have a good foundational understanding of the engine, and I look to continue to expand my expertise in it."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 243,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 237,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/skills.js",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "engineering"
                    }, void 0, false, {
                        fileName: "src/skills.js",
                        lineNumber: 252,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "Engineering",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "Mathematics"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 255,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 255,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Advanced"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 256,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "In the field of math, I am very proficient, as I have a good grasp of many mathematical techniques and processes, having mastered and taken classes up to Calculus 3 and Differential Equations. This also means that I have a very good grasp of algebra and mathematical concepts, which are important in engineering. Most importantly, however, I have good mathematical reasoning, meaning I can solve many math-based problems effectively."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 257,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Thermal Desktop",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("bb285a03fc72d3a5"),
                                                className: "toolImg",
                                                title: "Thermal Desktop"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 268,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 266,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 269,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Learning"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 270,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 270,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "Thermal Desktop is a software application developed by C&R Technologies that is used for the thermal analysis and simulation of heat transfer systems, predominantly in the aerospace industry. With the underlying SINDA/FLUINT application being what many NASA missions use for thermohydraulic analysis, Thermal Desktop is a powerful tool. I have experience with this software, having used it within ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/experience#seds",
                                                children: "SEDS"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 275,
                                                columnNumber: 87
                                            }, this),
                                            " to model and simulate our cube satellite for both high altitude balloon launches and low earth orbits. I have a good understanding of the basic principles of the software, as well as for the underlying properties of heat transfer that drive it, and I look to continue to expand my knowledge and experience with it."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 265,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Physics",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("212c88162a4b2e64"),
                                                className: "toolImg",
                                                title: "Physics"
                                            }, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 284,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 282,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 285,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Good"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 286,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 286,
                                        columnNumber: 77
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "I have a good understanding of basic physics principles, having taken courses such as AP Physics C and AP Physics 1. I have an understanding of mechanical properties, including kinematics, energy, an rotational motion. I also have a good understanding of electrostatics and magnetism, which aids in my understanding of electronic components, having also taken a course on electrical components. ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 291,
                                                columnNumber: 82
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/skills.js",
                                                lineNumber: 291,
                                                columnNumber: 88
                                            }, this),
                                            "Through coursework and experiences, I have a good understanding of the physics behind spaceflight and orbital mechanics, and I am able to use this knowledge to design and create systems that can be used in space. I also have a working knowledge of cosmology and astrodynamics, as I understand aspects of the universe such as planetary motion, the geometry of the universe, and techniques used to measure these things."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/skills.js",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 281,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/skills.js",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "softSkills"
                    }, void 0, false, {
                        fileName: "src/skills.js",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "Soft Skills",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "Problem Solving"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 302,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 302,
                                        columnNumber: 77
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Advanced"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 303,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "I am a very good problem solver, and am able to use my knowledge of different subjects and my experience to find clever solutions to problems. Using my problem solving skills, I can find solutions to problems plaguing a product or design, and do so in an effective manner, a skill that makes me a useful asset to any team."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 304,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "Teamwork and Communication"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 311,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 311,
                                        columnNumber: 88
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 312,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 312,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "Teamwork and communication are two of my strong points, as I am able to work cohesively with others to accomplish whatever goals are necessary in a timely manner. I am able to confidently lead a team to accomplish a task, as well as work cohesively within one. I have experience working with others, whether it be for projects I have done, work experiences I have, or for club boards I have been in, with strong communication skills being at the forefront of the factors for my success in these group situations."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 313,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 310,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "Adaptability"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 322,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 322,
                                        columnNumber: 74
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: "Skill Level: Great"
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 323,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 323,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: "My adaptability is another skill I pride myself on, as in an ever-changing world, being able to adapt and thrive in new situations is crucial. I am adaptable not only to new situations, but also to new topics and skills, as I am able to pick up and and learn new skills and tools quickly, should the need arise."
                                    }, void 0, false, {
                                        fileName: "src/skills.js",
                                        lineNumber: 324,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/skills.js",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/skills.js",
                        lineNumber: 300,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/skills.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _globalJs.Footer), {
                top: "none"
            }, void 0, false, {
                fileName: "src/skills.js",
                lineNumber: 332,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/skills.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
exports.default = skills;

  $parcel$ReactRefreshHelpers$d1a4.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"cHIiW","./pageTitle.js":"z1Xvw","./pageSection.js":"cwDaN","./sectionBody.js":"6WvSZ","./global.js":"aQKW9","./pages.css":"jBPJV","ec497d1feadaf3b0":"ccH06","6ccec995ebce11ba":"atpUv","d53c06bde3800010":"eH7s0","52edbdbb7e94a0f2":"i5ft1","8b1eabb0f05524e5":"8gX3V","61fed42e42621499":"htWTG","e3a3bce4a897bb33":"k3Xhz","b87ef77d8c1b0147":"e6KvJ","d676f26ad6ab7f16":"gqtdv","bfe92575faf37f06":"i8m89","7c9d2311702831f6":"a82m9","d052de8b78999e02":"i2XY4","fa72894548b000f1":"TQRRf","e5b477ed498e8fbd":"8vUkP","729869c3bb04c410":"lkSJI","b82317d17ffb9f93":"hciqm","923260e3a80e81ec":"hqLxR","bb285a03fc72d3a5":"jZvMM","212c88162a4b2e64":"kFloL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"z1Xvw":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5c89 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5c89.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _pagesCss = require("./pages.css");
function pageTitle(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "stars"
            }, void 0, false, {
                fileName: "src/pageTitle.js",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "stars2"
            }, void 0, false, {
                fileName: "src/pageTitle.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "stars starOffset" + props.starOffset
            }, void 0, false, {
                fileName: "src/pageTitle.js",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "pageTitleDiv flex-direction",
                id: "e",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "titleFlexL",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "bgCircle"
                            }, void 0, false, {
                                fileName: "src/pageTitle.js",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                className: "title",
                                children: props.title
                            }, void 0, false, {
                                fileName: "src/pageTitle.js",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pageTitle.js",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "titleFlexR",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "jumpBox",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "jumpTitle",
                                    children: "Jump To:"
                                }, void 0, false, {
                                    fileName: "src/pageTitle.js",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, this),
                                props.sections.map((section, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "jumpItem",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "jumpCircle"
                                            }, "y" + index, false, {
                                                fileName: "src/pageTitle.js",
                                                lineNumber: 21,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "jumpText",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                    href: props.links[index],
                                                    className: "jumpLink",
                                                    children: section
                                                }, void 0, false, {
                                                    fileName: "src/pageTitle.js",
                                                    lineNumber: 22,
                                                    columnNumber: 73
                                                }, this)
                                            }, "z" + index, false, {
                                                fileName: "src/pageTitle.js",
                                                lineNumber: 22,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, "x" + index, true, {
                                        fileName: "src/pageTitle.js",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "src/pageTitle.js",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pageTitle.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pageTitle.js",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pageTitle.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
exports.default = pageTitle;

  $parcel$ReactRefreshHelpers$5c89.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./pages.css":"jBPJV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jBPJV":[function() {},{}],"cwDaN":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$31d7 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$31d7.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function pageSection(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "pageSection",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "sectionTitle",
                children: props.section
            }, void 0, false, {
                fileName: "src/pageSection.js",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            props.children
        ]
    }, void 0, true, {
        fileName: "src/pageSection.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
exports.default = pageSection;

  $parcel$ReactRefreshHelpers$31d7.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"6WvSZ":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$9d8a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9d8a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _s = $RefreshSig$();
function SectionBody(props) {
    _s();
    const [isExpanded, setIsExpanded] = (0, _react.useState)(false);
    const toggleExpand = ()=>{
        setIsExpanded((prevState)=>!prevState);
    };
    const { additionalImages } = props; // Expecting an array of image filenames
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "cardContainer",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "card",
            children: [
                props.children,
                additionalImages && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "toggleContainer",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        src: require("31a9dcc77caabd52"),
                        className: "toggleIcon",
                        title: isExpanded ? "Collapse Images" : "Expand Images",
                        onClick: toggleExpand,
                        alt: isExpanded ? "Collapse" : "Expand",
                        tabIndex: "0"
                    }, void 0, false, {
                        fileName: "src/sectionBody.js",
                        lineNumber: 20,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "src/sectionBody.js",
                    lineNumber: 19,
                    columnNumber: 21
                }, this),
                isExpanded && additionalImages && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "additionalImages",
                    children: additionalImages.map((img, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: img,
                            className: "additionalImage",
                            alt: `Additional ${index + 1}`
                        }, index, false, {
                            fileName: "src/sectionBody.js",
                            lineNumber: 35,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "src/sectionBody.js",
                    lineNumber: 33,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/sectionBody.js",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/sectionBody.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_s(SectionBody, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = SectionBody;
exports.default = SectionBody;
var _c;
$RefreshReg$(_c, "SectionBody");

  $parcel$ReactRefreshHelpers$9d8a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","31a9dcc77caabd52":"8AAbb"}],"8AAbb":[function(require,module,exports) {
module.exports = require("4539b0a98c151509").getBundleURL("4d9us") + "image.121fc210.png" + "?" + Date.now();

},{"4539b0a98c151509":"lgJ39"}],"jBPJV":[function() {},{}],"ccH06":[function(require,module,exports) {
module.exports = require("5a22406c89f996c5").getBundleURL("4d9us") + "cpp.460648cb.png" + "?" + Date.now();

},{"5a22406c89f996c5":"lgJ39"}],"atpUv":[function(require,module,exports) {
module.exports = require("abbc799dd5aea61a").getBundleURL("4d9us") + "c.921f0c3c.png" + "?" + Date.now();

},{"abbc799dd5aea61a":"lgJ39"}],"eH7s0":[function(require,module,exports) {
module.exports = require("4781368aed52b773").getBundleURL("4d9us") + "python.f83c61b6.png" + "?" + Date.now();

},{"4781368aed52b773":"lgJ39"}],"i5ft1":[function(require,module,exports) {
module.exports = require("982730fc410c5558").getBundleURL("4d9us") + "pytorch.82dd6cdb.png" + "?" + Date.now();

},{"982730fc410c5558":"lgJ39"}],"8gX3V":[function(require,module,exports) {
module.exports = require("87324451b88f041b").getBundleURL("4d9us") + "matlab.4a23b7c9.png" + "?" + Date.now();

},{"87324451b88f041b":"lgJ39"}],"htWTG":[function(require,module,exports) {
module.exports = require("576c3aedf8fafc32").getBundleURL("4d9us") + "java.1af10328.png" + "?" + Date.now();

},{"576c3aedf8fafc32":"lgJ39"}],"k3Xhz":[function(require,module,exports) {
module.exports = require("43a3bbbbc45db7b2").getBundleURL("4d9us") + "javascript.6d41bbe5.png" + "?" + Date.now();

},{"43a3bbbbc45db7b2":"lgJ39"}],"e6KvJ":[function(require,module,exports) {
module.exports = require("2cacd2a2f50e0ac1").getBundleURL("4d9us") + "nodejs.a2985343.png" + "?" + Date.now();

},{"2cacd2a2f50e0ac1":"lgJ39"}],"gqtdv":[function(require,module,exports) {
module.exports = require("39fe18d9ecd901a1").getBundleURL("4d9us") + "react.7019e4ee.png" + "?" + Date.now();

},{"39fe18d9ecd901a1":"lgJ39"}],"i8m89":[function(require,module,exports) {
module.exports = require("905efc3da4b48a31").getBundleURL("4d9us") + "sql.1558ddaf.png" + "?" + Date.now();

},{"905efc3da4b48a31":"lgJ39"}],"a82m9":[function(require,module,exports) {
module.exports = require("ae1f6027ccfcbc02").getBundleURL("4d9us") + "html.3999480f.png" + "?" + Date.now();

},{"ae1f6027ccfcbc02":"lgJ39"}],"i2XY4":[function(require,module,exports) {
module.exports = require("ebc92c28ae8797b5").getBundleURL("4d9us") + "css.73e0f3a8.png" + "?" + Date.now();

},{"ebc92c28ae8797b5":"lgJ39"}],"TQRRf":[function(require,module,exports) {
module.exports = require("10dc5ac700ca4dbf").getBundleURL("4d9us") + "solidworks.27a03cec.png" + "?" + Date.now();

},{"10dc5ac700ca4dbf":"lgJ39"}],"8vUkP":[function(require,module,exports) {
module.exports = require("1f86fc7c7a02f6d1").getBundleURL("4d9us") + "pcb.4e69d02b.png" + "?" + Date.now();

},{"1f86fc7c7a02f6d1":"lgJ39"}],"lkSJI":[function(require,module,exports) {
module.exports = require("826ac6962f093453").getBundleURL("4d9us") + "kicad.1da43987.png" + "?" + Date.now();

},{"826ac6962f093453":"lgJ39"}],"hciqm":[function(require,module,exports) {
module.exports = require("57be0a5e54b1d105").getBundleURL("4d9us") + "blender.673d5889.png" + "?" + Date.now();

},{"57be0a5e54b1d105":"lgJ39"}],"hqLxR":[function(require,module,exports) {
module.exports = require("35e22aef8d8439b7").getBundleURL("4d9us") + "babylon.90cc8c04.png" + "?" + Date.now();

},{"35e22aef8d8439b7":"lgJ39"}],"jZvMM":[function(require,module,exports) {
module.exports = require("3d3ab1b87bacd0df").getBundleURL("4d9us") + "td.e623fe7b.png" + "?" + Date.now();

},{"3d3ab1b87bacd0df":"lgJ39"}],"kFloL":[function(require,module,exports) {
module.exports = require("19c6c4cec3a582c2").getBundleURL("4d9us") + "physics.90e94d78.png" + "?" + Date.now();

},{"19c6c4cec3a582c2":"lgJ39"}]},["l9z8P","1xC6H"], null, "parcelRequire7c49")

//# sourceMappingURL=skills.42d18e1e.js.map
