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
})({"eyNRy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8b981e88c76009ab";
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

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"hYP7J":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4878 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4878.prelude(module);

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
function education() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "pageAbs",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "education",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageTitleJsDefault.default), {
                        title: "Education",
                        sections: [
                            "School",
                            "Courses"
                        ],
                        links: [
                            "#school",
                            "#courses"
                        ],
                        starOffset: "2"
                    }, void 0, false, {
                        fileName: "src/education.js",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "school"
                    }, void 0, false, {
                        fileName: "src/education.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "School",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "University of Maryland, College Park"
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 19,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 19,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                            className: "red",
                                            children: "Bachelor of Science in Aerospace Engineering and Computer Science"
                                        }, void 0, false, {
                                            fileName: "src/education.js",
                                            lineNumber: 20,
                                            columnNumber: 52
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 20,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 20,
                                        columnNumber: 144
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: [
                                                "August 2022 - Present",
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/education.js",
                                                    lineNumber: 21,
                                                    columnNumber: 80
                                                }, this),
                                                "Expected Graduation: May 2026",
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/education.js",
                                                    lineNumber: 21,
                                                    columnNumber: 114
                                                }, this),
                                                "GPA: 3.97"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/education.js",
                                            lineNumber: 21,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "The University of Maryland (UMD) at College Park is the primary institution of higher education in the public University System of Maryland. At UMD, I am a junior and part of the Honors College, within which I am a member of the Gemstone Program \u2014  a multidisciplinary four-year research program for undergraduates in the Honors College.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 28,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 28,
                                                columnNumber: 35
                                            }, this),
                                            "At UMD, I am a part of or have received the following:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 29,
                                                columnNumber: 83
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Vice President of Sigma Gamma Tau"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 30,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "President's Scholarship Recipient for all four years"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 31,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "National Merit Scholarship Finalist Scholarship"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 32,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Dean's List for all semesters"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 33,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 34,
                                                columnNumber: 29
                                            }, this),
                                            "At UMD I plan to pursue a B.S. in Aerospace Engineering within UMD's A. James Clark School of Engineering's ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                target: "_blank",
                                                href: "https://aero.umd.edu/news/story/maryland-engineering-ranked-12-public-undergraduate-program-in-the-country",
                                                children: "top 12 ranked"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 36,
                                                columnNumber: 81
                                            }, this),
                                            " Aerospace Engineering program. I also plan to double major in Computer Science in UMD's ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                target: "_blank",
                                                href: "https://www.cs.umd.edu/article/2022/09/umd%E2%80%99s-computer-science-undergraduate-program-climbs-two-spots-no-16-us-news-rankings",
                                                children: "top 16 ranked"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 38,
                                                columnNumber: 135
                                            }, this),
                                            " Computer Science program as well, and to graduate with a dual-degree for both of these concentrations."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 42,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                                className: "underline",
                                                children: "Courses:"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 44,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 44,
                                                columnNumber: 67
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 44,
                                                columnNumber: 73
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "CMSC 472: Intro to Deep Learning"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 47,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "CMSC 421: Intro to Artificial Intelligence"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 48,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "ENAE 301: Aerospace Dynamics"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 49,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "ENAE 311H: Honors Aerodynamics"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 50,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "MATH 246H: Differential Equations"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 51,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "ENAE 283: Introduction to Aerospace Systems"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 52,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "CMSC 351: Algorithms"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "CMSC 330: Organization of Programming Languages"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 54,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "CMSC 250: Discrete Structures"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 55,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "ENES 220: Mechanics II"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/education.js",
                                lineNumber: 18,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "The Academy for Mathematics, Science, and Engineering"
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 60,
                                        columnNumber: 115
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: [
                                                "July 2018 - June 2022",
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/education.js",
                                                    lineNumber: 61,
                                                    columnNumber: 80
                                                }, this),
                                                "GPA: 103.2"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/education.js",
                                            lineNumber: 61,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "The Academy for Mathematics, Science, and Engineering, located at Morris Hills High School and part of the Morris County Vocational School District, is a rigorous, highly focused four year program for Morris County students with career interests in mathematics, science, or engineering. The program focuses on challenging students and preparing them to succeed in the field of STEM both in college and in their careers. In 2016, the Academy was ranked by ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                children: "Newsweek"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 68,
                                                columnNumber: 55
                                            }, this),
                                            " as the\xa0",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://www.newsweek.com/high-schools/americas-top-high-schools-2016",
                                                target: "_blank",
                                                children: "second-best high school in America."
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 69,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 70,
                                                columnNumber: 56
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 70,
                                                columnNumber: 62
                                            }, this),
                                            "I was accepted into the Academy for Mathematics, Science, and Engineering after scoring highly on the entrance exam and interview, and have completed four years in the program. During these four years, I have maintained a weighted GPA of",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                                children: " 103.2"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 73,
                                                columnNumber: 64
                                            }, this),
                                            ", on a 100-point scale, which translates to roughly a",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                                children: " 4.0 GPA"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 74,
                                                columnNumber: 29
                                            }, this),
                                            " on a 4-point scale. My time in the program has taught me skills like problem solving and teamwork, while also preparing me with the necessary skills and knowledge to become a successful member in the field of STEM."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 78,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                                className: "underline",
                                                children: "Honor Societies:"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 80,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 80,
                                                columnNumber: 75
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 80,
                                                columnNumber: 81
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "National Honor Society"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 83,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Science National Honors Society"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 84,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Math Honor Society"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Technology Education Honor Society"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Rho Kappa National Social Studies Honor Society"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 87,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Spanish Honor Society"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 88,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 90,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                                className: "underline",
                                                children: "School Courses:"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 92,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 92,
                                                columnNumber: 74
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 92,
                                                columnNumber: 80
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "Calculus 3"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 95,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Physics C"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 96,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Physics 1"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 97,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Computer Science Principles"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 98,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Computer Science A"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 99,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Chemistry"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 100,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Biology"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 101,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Statistics"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 102,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: "AP Calculus BC"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 103,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 105,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                                className: "underline",
                                                children: "Clubs:"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 107,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 107,
                                                columnNumber: 65
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 107,
                                                columnNumber: 71
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                        className: "sectionBody",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: [
                                                    "Future Business Leaders of America",
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                                        className: "sectionBody tab",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                    children: "2019 - 2022"
                                                                }, void 0, false, {
                                                                    fileName: "src/education.js",
                                                                    lineNumber: 112,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 112,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: "2nd in New Jersey for Coding & Programming in 2021"
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 113,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: "5th in New Jersey for Introduction to Financial Math in 2020"
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 114,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/education.js",
                                                        lineNumber: 111,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/education.js",
                                                lineNumber: 110,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 116,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: [
                                                    "Junior State of America",
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                                        className: "sectionBody tab",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                    children: "2018 - 2022"
                                                                }, void 0, false, {
                                                                    fileName: "src/education.js",
                                                                    lineNumber: 119,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 119,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: "Vice President"
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 120,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: "Organized debates, events, communicated with upper management"
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 121,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/education.js",
                                                        lineNumber: 118,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/education.js",
                                                lineNumber: 117,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 123,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: [
                                                    "Key Club",
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                                        className: "sectionBody tab",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                    children: "2019 - 2022"
                                                                }, void 0, false, {
                                                                    fileName: "src/education.js",
                                                                    lineNumber: 126,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 126,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: "Secretary"
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 127,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                                children: "Held fundraisers, kept track of club data, communicated with club members"
                                                            }, void 0, false, {
                                                                fileName: "src/education.js",
                                                                lineNumber: 128,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/education.js",
                                                        lineNumber: 125,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/education.js",
                                                lineNumber: 124,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/education.js",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/education.js",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "courses"
                    }, void 0, false, {
                        fileName: "src/education.js",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "Courses",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "Astrophysics: Cosmology"
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 137,
                                        columnNumber: 85
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "January 2021 - May 2021"
                                        }, void 0, false, {
                                            fileName: "src/education.js",
                                            lineNumber: 138,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "I have taken and completed the ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                children: "ANU-ASTRO4x: Astrophysics: Cosmology"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 141,
                                                columnNumber: 60
                                            }, this),
                                            " course on edX taught by Paul Francis and Brian Schmidt of the Australian National University. Through this course I gained a better understanding of Einsteinian physics and its applications on planetary and galactic motions. I also learned about other aspects of astrophysics and cosmology, such as Hubble's Law, spacetime metrics, Friedmann equations, inflation theory, dark energy and the cosmic microwave background. Finally, I learned more about the technical skills used in cosmology, such as the tools and techniques used to measure distances and other values. This course not only furthered my knowledge about space and astrophysics, but has also made me even more excited to continue learning about the subject.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 149,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://courses.edx.org/certificates/ed784bac8f4a4c1385cf6a7d4aca45a4",
                                                target: "_blank",
                                                children: "View Certificate"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/education.js",
                                lineNumber: 136,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: "Paradox and Infinity"
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 156,
                                        columnNumber: 82
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "June 2021 - September 2021"
                                        }, void 0, false, {
                                            fileName: "src/education.js",
                                            lineNumber: 157,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/education.js",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "I have taken and completed the ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                children: "Paradox and Infinity"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 160,
                                                columnNumber: 60
                                            }, this),
                                            " course on edX taught by Agust\xedn Rayo from MIT. This course modeled one typically offered to MIT students, and dives deeper into the theoretical aspects of mathematics, as well as its intersection with philosophy. Throughout the course, I gained a better understanding of mathematical concepts such as higher infinities, cardinalities, probability, and the Banach-Tarski Paradox, while also getting to explore the limits of mathematics, which brought into question philosophical ideas such as free will and the prisoner's dilemma. I also learned more about set theory, Godel's Theorem, and computability. Through this course I gained a better understanding of the extents to which mathematical concepts can be applied and further fueled my interest in mathematics.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 168,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 168,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://courses.edx.org/certificates/1ecb56b0cf56401aa8d8ab039ca57544",
                                                target: "_blank",
                                                children: "View Certificate"
                                            }, void 0, false, {
                                                fileName: "src/education.js",
                                                lineNumber: 169,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/education.js",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/education.js",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/education.js",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/education.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _globalJs.Footer), {
                top: "none"
            }, void 0, false, {
                fileName: "src/education.js",
                lineNumber: 176,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/education.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
exports.default = (0, _reactRouterDom.withRouter)(education);

  $parcel$ReactRefreshHelpers$4878.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"cHIiW","./pageTitle.js":"z1Xvw","./pageSection.js":"cwDaN","./sectionBody.js":"6WvSZ","./global.js":"aQKW9","./pages.css":"jBPJV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"z1Xvw":[function(require,module,exports) {
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
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","31a9dcc77caabd52":"2ez1j"}],"2ez1j":[function(require,module,exports) {
module.exports = require("97dc8cb52aef8340").getBundleURL("bZ3w5") + "image.121fc210.png" + "?" + Date.now();

},{"97dc8cb52aef8340":"lgJ39"}],"jBPJV":[function() {},{}]},["eyNRy","1xC6H"], null, "parcelRequire7c49")

//# sourceMappingURL=education.c76009ab.js.map
