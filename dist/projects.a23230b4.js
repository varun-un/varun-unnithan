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
})({"2MeKw":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fd57deafa23230b4";
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

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"klhV6":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ea39 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ea39.prelude(module);

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
function projects() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "pageAbs",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "projects",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageTitleJsDefault.default), {
                        title: "Projects",
                        sections: [
                            "Major Projects",
                            "Side Projects"
                        ],
                        links: [
                            "#major",
                            "#side"
                        ],
                        starOffset: "2"
                    }, void 0, false, {
                        fileName: "src/projects.js",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "major"
                    }, void 0, false, {
                        fileName: "src/projects.js",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "Major Projects",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "High-Powered Rocketry",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("20a9fa534a7582b6"),
                                                className: "toolImg",
                                                title: "Physics"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 18,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("2cc7da76db4a780c"),
                                                className: "toolImg",
                                                title: "Solidworks"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 19,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 16,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 20,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "September 2022 - Present"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 21,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "High-powered rocketry is the term for model rocketry with motors that exceed the 160 Newton-second impulse level, which is at the H motor class. I have gained experience in high-powered rocketry through my work with my own personal rockets, as well as through the ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "/experience#terprockets",
                                                children: "Terrapin Rocket Team"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 26,
                                                columnNumber: 77
                                            }, this),
                                            " at UMD.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 27,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 27,
                                                columnNumber: 35
                                            }, this),
                                            'My personal experience with high-powered rocketry began with my first L1 certification rocket, which was a 3" diameter LOC Iris rocket which I built, simulated, and flew on an H125 motor in February 2023 to around 2200 feet, receiving my L1 high-powered rocketry certification from the Tripoli Rocketry Association. Since then, I have designed and built my own 3" diameter dual-deploy rocket, which will use internal electronics, through an EasyMini altimeter, to fire charges for a drogue parachute at apogee, and a main parachute at 750 feet. I look to launch this rocket, and continue to gain experience in high-powered rocketry, as I look to gain my L2 certification and learn more about the subject.',
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 34,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 34,
                                                columnNumber: 35
                                            }, this),
                                            "I also have high-powered rocketry experience through the Terrapin Rocket Team, as the main competition rocket which we design and construct is essentially a large-scale L3 rocket. I specifically have gained a lot of experience with the rocket's internal electronics through my experience as the Avionics Subteam Lead, however, by working with other team leads and club members, I have also gained experience with the rocket's airframe, propulsion, and airbrake systems. Through this, I have been able to gain a strong fundamental understanding of how these rocket systems work and how they are designed.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 41,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 41,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: require("ee7e4911ff6681b1"),
                                                target: "_blank",
                                                children: "Membership Card"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 42,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 15,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Aether Connect",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("56947dfc5a41a786"),
                                                className: "toolImg",
                                                title: "HTML5"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 49,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("daca8b8e9e0bf68"),
                                                className: "toolImg",
                                                title: "CSS3"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 50,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("365c66d3322444e4"),
                                                className: "toolImg",
                                                title: "Javascript"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 51,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("e63ed171571c85c6"),
                                                className: "toolImg",
                                                title: "Babylon.js"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 52,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("57237a35b51bcc87"),
                                                className: "toolImg",
                                                title: "ReactJS"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("e532cbed9e9e398f"),
                                                className: "toolImg",
                                                title: "GSAP"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 54,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 55,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "March 2021 - June 2021"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 56,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "Aether Connect is a personal project which I have started in order to help teach more advanced topics to students using engaging, 3D-based simulations. In my own experiences, I have found that while there are a variety of 2D simulations to teach more simple concepts to younger kids, there seemed to be a relative lack of such simulations for more advanced topics, especially those in 3D, which is a medium that I think is extremely effective at helping students understand certain topics better. Aether Connect serves as a solution that not only addresses these points, but also intends to teach advanced, college-level topics in a way understandable to even younger audiences. ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 65,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 65,
                                                columnNumber: 77
                                            }, this),
                                            "Since a goal of Aether Connect is accessibility, this project plans to deploy as a website, which will serve as the platform on which the simulations will lie. In order to do this, Aether Connect is largely built with Javascript, with HTML and CSS being used to create the website itself. The Javascript-based Babylon.js rendering engine is used to create the interactive 3D simulations. GSAP and Preact (a lightweight version of React) are used for site components and element animations.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 71,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 71,
                                                columnNumber: 35
                                            }, this),
                                            "Visit:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://github.com/varun-un/AetherConnect",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("dc97af36d6ae84e4"),
                                                    className: "projectLink",
                                                    title: "Github"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 74,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 73,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://aetherconnect.netlify.app/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("501392bea4285dc9"),
                                                    className: "projectLink",
                                                    title: "Website"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 77,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 76,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                id: "fblaquiz"
                            }, void 0, false, {
                                fileName: "src/projects.js",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "FBLA Quiz",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("3750ba66f4b9fcb0"),
                                                className: "toolImg",
                                                title: "Java"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 86,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "December 2020 - June 2021"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 87,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "The FBLA Quiz program is a project I have created for the 2021 FBLA Coding and Programming Competitive Event. This program reads random questions and answers from a database, then uses that data to administer a quiz to the user, while also including features for tracking users' scores and progress, as well as administering different types of questions. FBLA Quiz is built with Java, and uses the Java Swing library to generate the GUI. In addition to using vanilla Java, this program also uses the JSON Simple library, to allow for database connectivity with JSON files, and the Apache PDFBox library, to allow the program to create and write PDF files.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 96,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 96,
                                                columnNumber: 35
                                            }, this),
                                            "In March 2021, this program was submitted to the state level of the FBLA Coding and Programming Event, where it placed 2nd in the state of New Jersey.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 99,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 99,
                                                columnNumber: 35
                                            }, this),
                                            "Visit:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://github.com/varun-un/FBLAQuiz",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("dc97af36d6ae84e4"),
                                                    className: "projectLink",
                                                    title: "Github"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 102,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 101,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 89,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/projects.js",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "side"
                    }, void 0, false, {
                        fileName: "src/projects.js",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pageSectionJsDefault.default), {
                        section: "Side Projects",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                id: "raymarcher"
                            }, void 0, false, {
                                fileName: "src/projects.js",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Raymarcher",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("3750ba66f4b9fcb0"),
                                                className: "toolImg",
                                                title: "Java"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 113,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 114,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "June 2021 - July 2021"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 115,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "Raymarcher is a real-time 3D rendering engine which I have made, based in Java. I have always been interested in how computers create 3D scenes, whether they be in games I have played or in animation and modelling softwares, such as in Blender or Solidworks, and so this project was a learning experience for me. I decided to try and build everything from scratch for this rendering engine, not using external libraries to abstract away certain aspects of the process, so that I could gain a better understanding of how these programs worked. Raymarcher specifically uses the raymarching technique and can render 3D scenes with meshes and geometry which the user may define. Beyond just the computer programming side of it, this project also taught me a lot about the mathematics behind these 3D engines, and helped me gain a better understanding of linear algebra.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 126,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 126,
                                                columnNumber: 35
                                            }, this),
                                            "Visit:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://github.com/varun-un/Raymarcher",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("dc97af36d6ae84e4"),
                                                    className: "projectLink",
                                                    title: "Github"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 129,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Monitor Backlight",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("7300e6fa15e0f67f"),
                                                className: "toolImg",
                                                title: "C++"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 136,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 137,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "May 2023"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 138,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            'This was a simple project I created that blended together Arduino and Windows C++ programming. The goal of this project was to create a program that would "extend" the display of a monitor by using an Arduino to control an LED array that would be placed behind the monitor. The program works to efficiently scrape screen data to individually address each LED in the array, creating a backlight effect that would change based on the colors of the screen.',
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 145,
                                                columnNumber: 35
                                            }, this),
                                            "Visit:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://github.com/varun-un/Monitor-Backlight",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("dc97af36d6ae84e4"),
                                                    className: "projectLink",
                                                    title: "Github"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 147,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "varununnithan.com",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("56947dfc5a41a786"),
                                                className: "toolImg",
                                                title: "HTML5"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 155,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("daca8b8e9e0bf68"),
                                                className: "toolImg",
                                                title: "CSS3"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 156,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("365c66d3322444e4"),
                                                className: "toolImg",
                                                title: "Javascript"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("57237a35b51bcc87"),
                                                className: "toolImg",
                                                title: "ReactJS"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("e4e50892371072af"),
                                                className: "toolImg",
                                                title: "Blender"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("e63ed171571c85c6"),
                                                className: "toolImg",
                                                title: "Babylon.js"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 160,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("e532cbed9e9e398f"),
                                                className: "toolImg",
                                                title: "GSAP"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 162,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "April 2021"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 163,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 163,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 164,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "The making of this site itself is technically another project I've done. The goal of this site is to provide a better background on who I am as a person and my skills, as well as shed light on the different activities I have partaken in. In order to build this site, I used a bunch of different tools and languages, some of which were new to me, making this project a great learning experience for me. This site was built using React, and so it is largely based in Javascript, however it also incorporates HTML, through JSX, and CSS as well. In order to create the 3D models used in the webpage, Blender was first used to model and sculpt the meshes, with these models then being embedded into the website using Babylon.js. Finally, the GreenSock Animation Platform (GSAP) and ScrollTrigger libraries were used to create some of the site's animations within Javascript. ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 174,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 174,
                                                columnNumber: 47
                                            }, this),
                                            "Though this project's goal is to release a site pertaining to myself, which can be considered accomplished, this website will never truly be 'completed' in the sense that it will constantly be updated and changed to reflect new changes in myself and my experiences.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 178,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 178,
                                                columnNumber: 35
                                            }, this),
                                            "Visit:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://github.com/varun-un/varun-unnithan",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("dc97af36d6ae84e4"),
                                                    className: "projectLink",
                                                    title: "Github"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 181,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 180,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://www.varununnithan.me/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("501392bea4285dc9"),
                                                    className: "projectLink",
                                                    title: "Website"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 184,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 183,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "nutritioUS",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("56947dfc5a41a786"),
                                                className: "toolImg",
                                                title: "HTML5"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 191,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("daca8b8e9e0bf68"),
                                                className: "toolImg",
                                                title: "CSS3"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 192,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("365c66d3322444e4"),
                                                className: "toolImg",
                                                title: "Javascript"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 193,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("f2ab4a9847c63183"),
                                                className: "toolImg",
                                                title: "PHP"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 194,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 195,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "April 2021"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 196,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 196,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 197,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "Created during the 2021 HackKU hackathon, nutritioUS is a website with the goal of promoting healthy eating and drinking in a fun way for users. Using the website, users can track their daily calories, water, and other nutrition facts, data which is then used to create a daily health score for users, with this score also being used for friends to compete against one another on the site. Working with a team of 3 others, this program was built with HTML, CSS, and Javascript for the frontend and website design, and PHP to communicate with the server in the backend.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 205,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 205,
                                                columnNumber: 35
                                            }, this),
                                            "Visit:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://github.com/varun-un/nutritioUS",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("dc97af36d6ae84e4"),
                                                    className: "projectLink",
                                                    title: "Github"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 208,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 207,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://devpost.com/software/nutritious-ewvb14",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("14bbbf2c66658564"),
                                                    className: "projectLink",
                                                    title: "Devpost"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 211,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 210,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 198,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sectionBodyJsDefault.default), {
                                additionalImages: [
                                    require("56947dfc5a41a786"),
                                    require("56947dfc5a41a786")
                                ],
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "subsectionTitle",
                                        children: [
                                            "Student Connect",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("56947dfc5a41a786"),
                                                className: "toolImg",
                                                title: "HTML5"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 218,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("daca8b8e9e0bf68"),
                                                className: "toolImg",
                                                title: "CSS3"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 219,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("365c66d3322444e4"),
                                                className: "toolImg",
                                                title: "Javascript"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 220,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("3750ba66f4b9fcb0"),
                                                className: "toolImg",
                                                title: "Java"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 221,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: require("da3954e97611e486"),
                                                className: "toolImg",
                                                title: "JSP"
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 222,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 216,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 223,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionDuration",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            children: "March 2021"
                                        }, void 0, false, {
                                            fileName: "src/projects.js",
                                            lineNumber: 224,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 224,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/projects.js",
                                        lineNumber: 225,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "sectionBody",
                                        children: [
                                            "This project was created during the 2021 PackHacks hackathon, where it placed second in the high school track. Student Connect is a program that allows students to connect with other students and professionals, in a simple manner, making networking more accessible and easy-to-use. It matches students with other users based off of shared interests, with the user then being able to choose who to connect to from a curated list of other students. This program was made with a team of 2 others, and used HTML, CSS, and Javascript for the frontend, alongside Java and JSP for database connectivity and the backend.",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 233,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 233,
                                                columnNumber: 35
                                            }, this),
                                            "Visit:",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://github.com/anish-kristipati/PackHacks",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("dc97af36d6ae84e4"),
                                                    className: "projectLink",
                                                    title: "Github"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 236,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 235,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "https://devpost.com/software/student-connect-bgh6ie",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                    src: require("14bbbf2c66658564"),
                                                    className: "projectLink",
                                                    title: "Devpost"
                                                }, void 0, false, {
                                                    fileName: "src/projects.js",
                                                    lineNumber: 239,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/projects.js",
                                                lineNumber: 238,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/projects.js",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/projects.js",
                                lineNumber: 215,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/projects.js",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/projects.js",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _globalJs.Footer), {
                top: "none"
            }, void 0, false, {
                fileName: "src/projects.js",
                lineNumber: 245,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/projects.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
exports.default = projects;

  $parcel$ReactRefreshHelpers$ea39.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"cHIiW","./pageTitle.js":"z1Xvw","./pageSection.js":"cwDaN","./sectionBody.js":"6WvSZ","./global.js":"aQKW9","20a9fa534a7582b6":"6Wp4r","2cc7da76db4a780c":"eoIiC","ee7e4911ff6681b1":"1uesj","56947dfc5a41a786":"6kDU6","daca8b8e9e0bf68":"cVdS9","365c66d3322444e4":"6zDge","e63ed171571c85c6":"l0o7q","57237a35b51bcc87":"k3G78","e532cbed9e9e398f":"a9jdc","dc97af36d6ae84e4":"hl8gG","501392bea4285dc9":"86Ebz","3750ba66f4b9fcb0":"gtGyE","7300e6fa15e0f67f":"cnuSP","e4e50892371072af":"9EuMm","f2ab4a9847c63183":"4u7Gq","14bbbf2c66658564":"TEpTg","da3954e97611e486":"aHUmf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"z1Xvw":[function(require,module,exports) {
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
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","31a9dcc77caabd52":"h6Fjn"}],"h6Fjn":[function(require,module,exports) {
module.exports = require("f9d9fe0b9587cce8").getBundleURL("lKxug") + "image.121fc210.png" + "?" + Date.now();

},{"f9d9fe0b9587cce8":"lgJ39"}],"6Wp4r":[function(require,module,exports) {
module.exports = require("3b2d9666005b8470").getBundleURL("lKxug") + "physics.90e94d78.png" + "?" + Date.now();

},{"3b2d9666005b8470":"lgJ39"}],"eoIiC":[function(require,module,exports) {
module.exports = require("4072fddd420758cf").getBundleURL("lKxug") + "solidworks.27a03cec.png" + "?" + Date.now();

},{"4072fddd420758cf":"lgJ39"}],"1uesj":[function(require,module,exports) {
module.exports = require("bd5fa43f95d95978").getBundleURL("lKxug") + "tripoli_card.85621858.pdf" + "?" + Date.now();

},{"bd5fa43f95d95978":"lgJ39"}],"6kDU6":[function(require,module,exports) {
module.exports = require("cb10b5ff661d5b5f").getBundleURL("lKxug") + "html.3999480f.png" + "?" + Date.now();

},{"cb10b5ff661d5b5f":"lgJ39"}],"cVdS9":[function(require,module,exports) {
module.exports = require("63824654757be42b").getBundleURL("lKxug") + "css.73e0f3a8.png" + "?" + Date.now();

},{"63824654757be42b":"lgJ39"}],"6zDge":[function(require,module,exports) {
module.exports = require("bcf1573875a1e34f").getBundleURL("lKxug") + "javascript.6d41bbe5.png" + "?" + Date.now();

},{"bcf1573875a1e34f":"lgJ39"}],"l0o7q":[function(require,module,exports) {
module.exports = require("f249ce9f431eab45").getBundleURL("lKxug") + "babylon.90cc8c04.png" + "?" + Date.now();

},{"f249ce9f431eab45":"lgJ39"}],"k3G78":[function(require,module,exports) {
module.exports = require("660f3e386433d56c").getBundleURL("lKxug") + "react.7019e4ee.png" + "?" + Date.now();

},{"660f3e386433d56c":"lgJ39"}],"a9jdc":[function(require,module,exports) {
module.exports = require("3bb4998f7eb4bb4e").getBundleURL("lKxug") + "gsap.5a6db1a9.png" + "?" + Date.now();

},{"3bb4998f7eb4bb4e":"lgJ39"}],"hl8gG":[function(require,module,exports) {
module.exports = require("ca5f6a1f517ceb30").getBundleURL("lKxug") + "github.7903bac5.png" + "?" + Date.now();

},{"ca5f6a1f517ceb30":"lgJ39"}],"86Ebz":[function(require,module,exports) {
module.exports = require("e02eb43c6ed793f2").getBundleURL("lKxug") + "web.7e06a335.png" + "?" + Date.now();

},{"e02eb43c6ed793f2":"lgJ39"}],"gtGyE":[function(require,module,exports) {
module.exports = require("7101142fc7b3c49d").getBundleURL("lKxug") + "java.1af10328.png" + "?" + Date.now();

},{"7101142fc7b3c49d":"lgJ39"}],"cnuSP":[function(require,module,exports) {
module.exports = require("b8b8cf9ddb8f14ba").getBundleURL("lKxug") + "cpp.460648cb.png" + "?" + Date.now();

},{"b8b8cf9ddb8f14ba":"lgJ39"}],"9EuMm":[function(require,module,exports) {
module.exports = require("e34f00f4f24263b7").getBundleURL("lKxug") + "blender.673d5889.png" + "?" + Date.now();

},{"e34f00f4f24263b7":"lgJ39"}],"4u7Gq":[function(require,module,exports) {
module.exports = require("e4fe0c91548215ba").getBundleURL("lKxug") + "php.cea8bdff.png" + "?" + Date.now();

},{"e4fe0c91548215ba":"lgJ39"}],"TEpTg":[function(require,module,exports) {
module.exports = require("6b9aba9a2f862583").getBundleURL("lKxug") + "devpost.e03bf48a.png" + "?" + Date.now();

},{"6b9aba9a2f862583":"lgJ39"}],"aHUmf":[function(require,module,exports) {
module.exports = require("9b4c2d299a2af0b7").getBundleURL("lKxug") + "jsp.44bd99fa.png" + "?" + Date.now();

},{"9b4c2d299a2af0b7":"lgJ39"}]},["2MeKw","1xC6H"], null, "parcelRequire7c49")

//# sourceMappingURL=projects.a23230b4.js.map
