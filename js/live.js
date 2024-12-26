/*
 @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
'use strict';
(function() {
    var LIB_VERSION = 138;
    window.Transifex = window.Transifex || {};
    window.Transifex.live = window.Transifex.live || {};
    window.Transifex.live._ = window.Transifex.live._ || {};
    window.Transifex.live.sidebar = window.Transifex.live.sidebar || {};
    window.liveSettings = window.liveSettings || {};
    var TXLIVE = window.Transifex.live;
    var TXLIVE_PRIVATE = window.Transifex.live._;
    var TXLIVE_SIDEBAR = window.Transifex.live.sidebar;
    TXLIVE_PRIVATE.isNotTextualRegex = /^(&nbsp;|\s|\d|[-\/:-?~@#!"^_`\.,\[\]])*$/;
    TXLIVE_PRIVATE.removeCommentsRegex =
        /\x3c!--([\s\S]*?)--\x3e/g;
    TXLIVE_PRIVATE.manifest_ready = false;
    TXLIVE_PRIVATE.language_views_tracked_onload = false;
    if (TXLIVE.loaded && TXLIVE.lib_version && TXLIVE.lib_version >= LIB_VERSION) return;
    TXLIVE.loaded = true;
    TXLIVE.ready = false;
    TXLIVE.autocollect_ready = false;
    TXLIVE.load_msec = 0;
    TXLIVE.group = "";
    var benchmark = 0;
    var SIDEBAR_URL_TRIGGER = "transifex";
    var console = window.console;
    TXLIVE.lib_version = LIB_VERSION;
    TXLIVE.settings = {
        autocollected: false,
        has_storage: false,
        has_session: false,
        dynamic: true
    };

    function setSettings(options,
        override) {
        if (!options) return;
        var k, i;
        if (override)
            for (k in options) TXLIVE.settings[k] = options[k];
        else
            for (k in options)
                if (window.liveSettings[k] === undefined) TXLIVE.settings[k] = options[k];
        TXLIVE.settings.autocollect = Boolean(TXLIVE.settings.autocollect | 0);
        TXLIVE.settings.prerender = Boolean(TXLIVE.settings.prerender | 0);
        TXLIVE.settings.dynamic = Boolean(TXLIVE.settings.dynamic | 0);
        TXLIVE.settings.rtl_layout = Boolean(TXLIVE.settings.rtl_layout | 0);
        TXLIVE.settings.xss_protect = Boolean(TXLIVE.settings.xss_protect |
            0);
        TXLIVE.settings.manual_init = Boolean(TXLIVE.settings.manual_init | 0);
        TXLIVE.settings.reload_on_language_picker = Boolean(TXLIVE.settings.reload_on_language_picker | 0);
        TXLIVE.settings.translate_urls = Boolean(TXLIVE.settings.translate_urls | 0);
        TXLIVE.settings.ignore_databind = Boolean(TXLIVE.settings.ignore_databind | 0);
        TXLIVE.settings.staging = Boolean(TXLIVE.settings.staging | 0);
        TXLIVE.settings.cdn = TXLIVE.settings.cdn || "//cdn.transifex.com/";
        TXLIVE.settings.autocollect_url = TXLIVE.settings.autocollect_url ||
            "//live-detector.svc.transifex.net";
        TXLIVE.settings.sidebar_base_url = TXLIVE.settings.sidebar_base_url || "https://app.transifex.com";
        TXLIVE.settings.assets_base_url = TXLIVE.settings.assets_base_url || TXLIVE.settings.sidebar_base_url;
        TXLIVE.settings.sidebar_lang = TXLIVE.settings.sidebar_lang || "en";
        TXLIVE.settings.telemetry_url = TXLIVE.settings.telemetry_url || "https://telemetry.svc.transifex.net/live/integration";
        if ("ping_telemetry" in TXLIVE.settings) TXLIVE.settings.ping_telemetry = !!TXLIVE.settings.ping_telemetry;
        else TXLIVE.settings.ping_telemetry = true;
        if (TXLIVE.settings.detectlang && typeof TXLIVE.settings.detectlang === "string") TXLIVE.settings.detectlang = Boolean(TXLIVE.settings.detectlang | 0);
        if (TXLIVE.settings.parse_attr && TXLIVE.settings.parse_attr.length)
            for (i = 0; i < TXLIVE.settings.parse_attr.length; ++i) TXLIVE.settings.parse_attr[i] = TXLIVE.settings.parse_attr[i].toLowerCase();
        if (TXLIVE.settings.enable_tags && TXLIVE.settings.enable_tags.length)
            for (i = 0; i < TXLIVE.settings.enable_tags.length; ++i) TXLIVE.settings.enable_tags[i] =
                (TXLIVE.settings.enable_tags[i] || "").toUpperCase();
        if (TXLIVE.settings.ignore_tags && TXLIVE.settings.ignore_tags.length)
            for (i = 0; i < TXLIVE.settings.ignore_tags.length; ++i) TXLIVE.settings.ignore_tags[i] = (TXLIVE.settings.ignore_tags[i] || "").toUpperCase();
        if (TXLIVE.settings.ignore_class && TXLIVE.settings.ignore_class.length)
            for (i = 0; i < TXLIVE.settings.ignore_class.length; ++i) TXLIVE.settings.ignore_class[i] = (TXLIVE.settings.ignore_class[i] || "").toLowerCase();
        if (TXLIVE.settings.tags_as_blocks && TXLIVE.settings.tags_as_blocks.length)
            for (i =
                0; i < TXLIVE.settings.tags_as_blocks.length; ++i) TXLIVE.settings.tags_as_blocks[i] = (TXLIVE.settings.tags_as_blocks[i] || "").toUpperCase()
    }(function() {
        var _prevDOMPurify = window.DOMPurify;
        ! function(e, t) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).DOMPurify = t()
        }(this, function() {
            var e = Object.hasOwnProperty,
                t = Object.setPrototypeOf,
                n = Object.isFrozen,
                r = Object.freeze,
                o = Object.seal,
                i = Object.create,
                a = "undefined" != typeof Reflect &&
                Reflect,
                l = a.apply,
                c = a.construct;
            l || (l = function(e, t, n) {
                return e.apply(t, n)
            }), r || (r = function(e) {
                return e
            }), o || (o = function(e) {
                return e
            }), c || (c = function(e, t) {
                return new(Function.prototype.bind.apply(e, [null].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(t))))
            });
            var s, u = T(Array.prototype.forEach),
                d = T(Array.prototype.pop),
                f = T(Array.prototype.push),
                p = T(String.prototype.toLowerCase),
                m = T(String.prototype.match),
                y = T(String.prototype.replace),
                h = T(String.prototype.indexOf),
                g = T(String.prototype.trim),
                v = T(RegExp.prototype.test),
                b = (s = TypeError, function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c(s, t)
                });

            function T(e) {
                return function(t) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    return l(e, t, r)
                }
            }

            function A(e, r) {
                t && t(e, null);
                for (var o = r.length; o--;) {
                    var i = r[o];
                    if ("string" == typeof i) {
                        var a = p(i);
                        a !== i && (n(r) || (r[o] = a), i = a)
                    }
                    e[i] = !0
                }
                return e
            }

            function x(t) {
                var n = i(null),
                    r = void 0;
                for (r in t) l(e, t, [r]) && (n[r] = t[r]);
                return n
            }
            var S = r(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label",
                    "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"
                ]),
                k = r(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform",
                    "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"
                ]),
                _ = r(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB",
                    "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"
                ]),
                D = r(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                E = r(["#text"]),
                L = r(["accept", "action", "align", "alt", "autocapitalize", "autocomplete",
                    "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop",
                    "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"
                ]),
                w = r(["accent-height",
                    "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family",
                    "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits",
                    "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation",
                    "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector",
                    "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"
                ]),
                M = r(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel",
                    "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"
                ]),
                O = r(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                N = o(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                R = o(/<%[\s\S]*|[\s\S]*%>/gm),
                F = o(/^data-[\-\w.\u00B7-\uFFFF]/),
                C = o(/^aria-[\-\w]+$/),
                H = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                z = o(/^(?:\w+script|data):/i),
                I = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };

            function U(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var P = function() {
                    return "undefined" == typeof window ? null : window
                },
                W = function(e, t) {
                    if ("object" !== (void 0 === e ? "undefined" : j(e)) || "function" != typeof e.createPolicy) return null;
                    var n = null;
                    t.currentScript && t.currentScript.hasAttribute("data-tt-policy-suffix") && (n = t.currentScript.getAttribute("data-tt-policy-suffix"));
                    var r = "dompurify" + (n ? "#" + n : "");
                    try {
                        return e.createPolicy(r, {
                            createHTML: function(e) {
                                return e
                            }
                        })
                    } catch (e) {
                        return console.warn("TrustedTypes policy " + r + " could not be created."), null
                    }
                };
            return function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P(),
                    n = function(t) {
                        return e(t)
                    };
                if (n.version = "2.1.0", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
                var o = t.document,
                    i = t.document,
                    a = t.DocumentFragment,
                    l = t.HTMLTemplateElement,
                    c = t.Node,
                    s = t.NodeFilter,
                    T = t.NamedNodeMap,
                    B = void 0 === T ? t.NamedNodeMap || t.MozNamedAttrMap : T,
                    G = t.Text,
                    q = t.Comment,
                    K = t.DOMParser,
                    V = t.trustedTypes;
                if ("function" == typeof l) {
                    var Y = i.createElement("template");
                    Y.content && Y.content.ownerDocument && (i = Y.content.ownerDocument)
                }
                var X = W(V, o),
                    $ = X && Le ? X.createHTML("") : "",
                    Z = i,
                    J = Z.implementation,
                    Q = Z.createNodeIterator,
                    ee = Z.getElementsByTagName,
                    te = Z.createDocumentFragment,
                    ne = o.importNode,
                    re = {};
                try {
                    re = x(i).documentMode ? i.documentMode : {}
                } catch (e) {}
                var oe = {};
                n.isSupported = J && void 0 !== J.createHTMLDocument && 9 !== re;
                var ie = N,
                    ae = R,
                    le = F,
                    ce = C,
                    se = z,
                    ue = I,
                    de = H,
                    fe = null,
                    pe = A({}, [].concat(U(S), U(k), U(_), U(D), U(E))),
                    me = null,
                    ye = A({}, [].concat(U(L), U(w), U(M), U(O))),
                    he = null,
                    ge = null,
                    ve = !0,
                    be = !0,
                    Te = !1,
                    Ae = !1,
                    xe = !1,
                    Se = !1,
                    ke = !1,
                    _e = !1,
                    De = !1,
                    Ee = !1,
                    Le = !1,
                    we = !0,
                    Me = !0,
                    Oe = !1,
                    Ne = {},
                    Re = A({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes",
                        "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"
                    ]),
                    Fe = null,
                    Ce = A({}, ["audio", "video", "img", "source", "image", "track"]),
                    He = null,
                    ze = A({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                    Ie = null,
                    je = i.createElement("form"),
                    Ue = function(e) {
                        Ie && Ie === e || (e && "object" === (void 0 === e ? "undefined" : j(e)) || (e = {}), e = x(e), fe = "ALLOWED_TAGS" in e ? A({}, e.ALLOWED_TAGS) : pe, me = "ALLOWED_ATTR" in e ? A({}, e.ALLOWED_ATTR) : ye, He = "ADD_URI_SAFE_ATTR" in
                            e ? A(x(ze), e.ADD_URI_SAFE_ATTR) : ze, Fe = "ADD_DATA_URI_TAGS" in e ? A(x(Ce), e.ADD_DATA_URI_TAGS) : Ce, he = "FORBID_TAGS" in e ? A({}, e.FORBID_TAGS) : {}, ge = "FORBID_ATTR" in e ? A({}, e.FORBID_ATTR) : {}, Ne = "USE_PROFILES" in e && e.USE_PROFILES, ve = !1 !== e.ALLOW_ARIA_ATTR, be = !1 !== e.ALLOW_DATA_ATTR, Te = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ae = e.SAFE_FOR_TEMPLATES || !1, xe = e.WHOLE_DOCUMENT || !1, _e = e.RETURN_DOM || !1, De = e.RETURN_DOM_FRAGMENT || !1, Ee = e.RETURN_DOM_IMPORT || !1, Le = e.RETURN_TRUSTED_TYPE || !1, ke = e.FORCE_BODY || !1, we = !1 !== e.SANITIZE_DOM,
                            Me = !1 !== e.KEEP_CONTENT, Oe = e.IN_PLACE || !1, de = e.ALLOWED_URI_REGEXP || de, Ae && (be = !1), De && (_e = !0), Ne && (fe = A({}, [].concat(U(E))), me = [], !0 === Ne.html && (A(fe, S), A(me, L)), !0 === Ne.svg && (A(fe, k), A(me, w), A(me, O)), !0 === Ne.svgFilters && (A(fe, _), A(me, w), A(me, O)), !0 === Ne.mathMl && (A(fe, D), A(me, M), A(me, O))), e.ADD_TAGS && (fe === pe && (fe = x(fe)), A(fe, e.ADD_TAGS)), e.ADD_ATTR && (me === ye && (me = x(me)), A(me, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && A(He, e.ADD_URI_SAFE_ATTR), Me && (fe["#text"] = !0), xe && A(fe, ["html", "head", "body"]), fe.table &&
                            (A(fe, ["tbody"]), delete he.tbody), r && r(e), Ie = e)
                    },
                    Pe = function(e) {
                        f(n.removed, {
                            element: e
                        });
                        try {
                            e.parentNode.removeChild(e)
                        } catch (t) {
                            e.outerHTML = $
                        }
                    },
                    We = function(e, t) {
                        try {
                            f(n.removed, {
                                attribute: t.getAttributeNode(e),
                                from: t
                            })
                        } catch (e) {
                            f(n.removed, {
                                attribute: null,
                                from: t
                            })
                        }
                        t.removeAttribute(e)
                    },
                    Be = function(e) {
                        var t = void 0,
                            n = void 0;
                        if (ke) e = "<remove></remove>" + e;
                        else {
                            var r = m(e, /^[\r\n\t ]+/);
                            n = r && r[0]
                        }
                        var o = X ? X.createHTML(e) : e;
                        try {
                            t = (new K).parseFromString(o, "text/html")
                        } catch (e) {}
                        if (!t || !t.documentElement) {
                            var a =
                                (t = J.createHTMLDocument("")).body;
                            a.parentNode.removeChild(a.parentNode.firstElementChild), a.outerHTML = o
                        }
                        return e && n && t.body.insertBefore(i.createTextNode(n), t.body.childNodes[0] || null), ee.call(t, xe ? "html" : "body")[0]
                    },
                    Ge = function(e) {
                        return Q.call(e.ownerDocument || e, e, s.SHOW_ELEMENT | s.SHOW_COMMENT | s.SHOW_TEXT, function() {
                            return s.FILTER_ACCEPT
                        }, !1)
                    },
                    qe = function(e) {
                        return !(e instanceof G || e instanceof q) && !("string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild &&
                            e.attributes instanceof B && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI)
                    },
                    Ke = function(e) {
                        return "object" === (void 0 === c ? "undefined" : j(c)) ? e instanceof c : e && "object" === (void 0 === e ? "undefined" : j(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                    },
                    Ve = function(e, t, r) {
                        oe[e] && u(oe[e], function(e) {
                            e.call(n, t, r, Ie)
                        })
                    },
                    Ye = function(e) {
                        var t = void 0;
                        if (Ve("beforeSanitizeElements", e, null), qe(e)) return Pe(e), !0;
                        if (m(e.nodeName, /[\u0080-\uFFFF]/)) return Pe(e),
                            !0;
                        var r = p(e.nodeName);
                        if (Ve("uponSanitizeElement", e, {
                                tagName: r,
                                allowedTags: fe
                            }), ("svg" === r || "math" === r) && 0 !== e.querySelectorAll("p, br").length) return Pe(e), !0;
                        if (!Ke(e.firstElementChild) && (!Ke(e.content) || !Ke(e.content.firstElementChild)) && v(/<[!/\w]/g, e.innerHTML) && v(/<[!/\w]/g, e.textContent)) return Pe(e), !0;
                        if (!fe[r] || he[r]) {
                            if (Me && !Re[r] && "function" == typeof e.insertAdjacentHTML) try {
                                var o = e.innerHTML;
                                e.insertAdjacentHTML("AfterEnd", X ? X.createHTML(o) : o)
                            } catch (e) {}
                            return Pe(e), !0
                        }
                        return "noscript" !==
                            r && "noembed" !== r || !v(/<\/no(script|embed)/i, e.innerHTML) ? (Ae && 3 === e.nodeType && (t = e.textContent, t = y(t, ie, " "), t = y(t, ae, " "), e.textContent !== t && (f(n.removed, {
                                element: e.cloneNode()
                            }), e.textContent = t)), Ve("afterSanitizeElements", e, null), !1) : (Pe(e), !0)
                    },
                    Xe = function(e, t, n) {
                        if (we && ("id" === t || "name" === t) && (n in i || n in je)) return !1;
                        if (be && v(le, t));
                        else if (ve && v(ce, t));
                        else {
                            if (!me[t] || ge[t]) return !1;
                            if (He[t]);
                            else if (v(de, y(n, ue, "")));
                            else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== h(n,
                                    "data:") || !Fe[e])
                                if (Te && !v(se, y(n, ue, "")));
                                else {
                                    if (n) return !1
                                }
                            else;
                        }
                        return !0
                    },
                    $e = function(e) {
                        var t = void 0,
                            r = void 0,
                            o = void 0,
                            i = void 0;
                        Ve("beforeSanitizeAttributes", e, null);
                        var a = e.attributes;
                        if (a) {
                            var l = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: me
                            };
                            for (i = a.length; i--;) {
                                var c = t = a[i],
                                    s = c.name,
                                    u = c.namespaceURI;
                                if (r = g(t.value), o = p(s), l.attrName = o, l.attrValue = r, l.keepAttr = !0, l.forceKeepAttr = void 0, Ve("uponSanitizeAttribute", e, l), r = l.attrValue, !l.forceKeepAttr && (We(s, e), l.keepAttr))
                                    if (v(/\/>/i,
                                            r)) We(s, e);
                                    else {
                                        Ae && (r = y(r, ie, " "), r = y(r, ae, " "));
                                        var f = e.nodeName.toLowerCase();
                                        if (Xe(f, o, r)) try {
                                            u ? e.setAttributeNS(u, s, r) : e.setAttribute(s, r), d(n.removed)
                                        } catch (e) {}
                                    }
                            }
                            Ve("afterSanitizeAttributes", e, null)
                        }
                    },
                    Ze = function e(t) {
                        var n = void 0,
                            r = Ge(t);
                        for (Ve("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) Ve("uponSanitizeShadowNode", n, null), Ye(n) || (n.content instanceof a && e(n.content), $e(n));
                        Ve("afterSanitizeShadowDOM", t, null)
                    };
                return n.sanitize = function(e, r) {
                    var i = void 0,
                        l = void 0,
                        s = void 0,
                        u = void 0,
                        d =
                        void 0;
                    if (e || (e = "\x3c!--\x3e"), "string" != typeof e && !Ke(e)) {
                        if ("function" != typeof e.toString) throw b("toString is not a function");
                        if ("string" != typeof(e = e.toString())) throw b("dirty is not a string, aborting");
                    }
                    if (!n.isSupported) {
                        if ("object" === j(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                            if ("string" == typeof e) return t.toStaticHTML(e);
                            if (Ke(e)) return t.toStaticHTML(e.outerHTML)
                        }
                        return e
                    }
                    if (Se || Ue(r), n.removed = [], "string" == typeof e && (Oe = !1), Oe);
                    else if (e instanceof c) 1 === (l = (i = Be("\x3c!----\x3e")).ownerDocument.importNode(e,
                        !0)).nodeType && "BODY" === l.nodeName || "HTML" === l.nodeName ? i = l : i.appendChild(l);
                    else {
                        if (!_e && !Ae && !xe && -1 === e.indexOf("<")) return X && Le ? X.createHTML(e) : e;
                        if (!(i = Be(e))) return _e ? null : $
                    }
                    i && ke && Pe(i.firstChild);
                    for (var f = Ge(Oe ? e : i); s = f.nextNode();) 3 === s.nodeType && s === u || Ye(s) || (s.content instanceof a && Ze(s.content), $e(s), u = s);
                    if (u = null, Oe) return e;
                    if (_e) {
                        if (De)
                            for (d = te.call(i.ownerDocument); i.firstChild;) d.appendChild(i.firstChild);
                        else d = i;
                        return Ee && (d = ne.call(o, d, !0)), d
                    }
                    var p = xe ? i.outerHTML : i.innerHTML;
                    return Ae && (p = y(p, ie, " "), p = y(p, ae, " ")), X && Le ? X.createHTML(p) : p
                }, n.setConfig = function(e) {
                    Ue(e), Se = !0
                }, n.clearConfig = function() {
                    Ie = null, Se = !1
                }, n.isValidAttribute = function(e, t, n) {
                    Ie || Ue({});
                    var r = p(e),
                        o = p(t);
                    return Xe(r, o, n)
                }, n.addHook = function(e, t) {
                    "function" == typeof t && (oe[e] = oe[e] || [], f(oe[e], t))
                }, n.removeHook = function(e) {
                    oe[e] && d(oe[e])
                }, n.removeHooks = function(e) {
                    oe[e] && (oe[e] = [])
                }, n.removeAllHooks = function() {
                    oe = {}
                }, n
            }()
        });
        TXLIVE_PRIVATE.DOMPurify = window.DOMPurify;
        window.DOMPurify = _prevDOMPurify
    })();
    TXLIVE.logger = {
        serialize: function(obj) {
            if (typeof obj !== "string")
                if (obj.message) obj = obj.message;
                else try {
                    obj = JSON.stringify(obj)
                } catch (err) {
                    obj = ""
                }
            return obj
        },
        info: function(message) {
            var output = "[TXLIVE][INFO] " + TXLIVE.logger.serialize(message);
            if (window.liveSettings.debug && console && console.log) console.log(output);
            return output
        },
        debug: function(message) {
            var output = "[TXLIVE][DEBUG] " + TXLIVE.logger.serialize(message);
            if (window.liveSettings.debug && console && console.log) console.log(output);
            return output
        },
        error: function(err) {
            var output = "[TXLIVE][ERROR] " + TXLIVE.logger.serialize(err);
            if (window.liveSettings.debug && console && console.log) console.log(output);
            return output
        }
    };
    (function() {
        try {
            var css = ".txlive {display: none;}\n";
            var head = document.head || document.getElementsByTagName("head")[0];
            var style = document.createElement("style");
            style.type = "text/css";
            if (style.styleSheet) style.styleSheet.cssText = css;
            else style.appendChild(document.createTextNode(css));
            head.appendChild(style)
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    })();

    function showDom() {
        try {
            var el = null;
            if (document.getElementsByClassName) el = document.getElementsByClassName("txlive");
            else el = document.getElementsByTagName("*");
            if (el && el.length) {
                var i = el.length;
                while (i--) el[i].className = (el[i].className || "").replace(/(?:^|\s)txlive(?!\S)/g, "")
            }
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }

    function bindReady(handler) {
        var called = false;

        function ready() {
            if (called) return;
            called = true;
            handler()
        }
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", ready, false);
        else if (document.attachEvent) {
            try {
                var isFrame = window.frameElement != null
            } catch (e) {}
            if (document.documentElement.doScroll && !isFrame) {
                function tryScroll() {
                    if (called) return;
                    try {
                        document.documentElement.doScroll("left");
                        ready()
                    } catch (e) {
                        setTimeout(tryScroll, 10)
                    }
                }
                tryScroll()
            }
            document.attachEvent("onreadystatechange", function() {
                if (document.readyState === "complete") ready()
            })
        }
        if (window.addEventListener) window.addEventListener("load", ready, false);
        else if (window.attachEvent) window.attachEvent("onload", ready);
        else {
            var fn = window.onload;
            window.onload = function() {
                if (fn) fn();
                ready()
            }
        }
    }

    function bindLoad(handler) {
        if (window.addEventListener) window.addEventListener("load", handler, false);
        else if (window.attachEvent) window.attachEvent("onload", handler)
    }

    function bindNavigate(handler) {
        try {
            (function(history) {
                var pushState = history.pushState;
                history.pushState = function(state) {
                    if (typeof history.onpushstate == "function") history.onpushstate({
                        state: state
                    });
                    var path = arguments && arguments.length > 2 ? arguments[2] : null;
                    if (path) handler(path);
                    return pushState.apply(history, arguments)
                }
            })(window.history);
            window.addEventListener("popstate", function(e) {
                var url = new URL(document.location);
                if (url && url.pathname) handler(url.pathname)
            })
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }

    function callFunctionArray(fcallarray, param) {
        if (!fcallarray) return;
        var is_dynamic_on = TXLIVE.isDynamicPageOn();
        TXLIVE.dynamicPageOff();
        for (var i = 0; i < fcallarray.length; ++i) try {
            fcallarray[i](param)
        } catch (err) {
            TXLIVE.logger.error(err)
        }
        if (is_dynamic_on) TXLIVE.dynamicPageOn()
    }

    function removeFromFunctionArray(fcallarray,
        fcall) {
        if (!fcallarray) return;
        try {
            var index = fcallarray.indexOf(fcall);
            if (index >= 0) fcallarray.splice(index, 1)
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }

    function isFunction(obj) {
        return typeof obj === "function"
    }

    function isString(obj) {
        return typeof obj === "string"
    }
    TXLIVE_PRIVATE.trim = function(string) {
        return string.replace(/^\s+|\s+$/g, "")
    };
    if (!String.prototype.trim) String.prototype.trim = function() {
        return TXLIVE_PRIVATE.trim(this)
    };
    TXLIVE.assetUrl = function(url, default_host) {
        if (!url || !default_host) return url;
        var locase_url =
            url.toLowerCase().trim();
        if (locase_url.indexOf("http://") === 0 || locase_url.indexOf("https://") === 0 || locase_url.indexOf("//") === 0) return url;
        return default_host + (default_host.slice(-1) == "/" ? "" : "/") + (url.indexOf("/") === 0 ? url.slice(1) : url)
    };
    TXLIVE.loadScript = function(url, callback, text, attributes) {
        if (url && url.indexOf("//") === 0)
            if (/PhantomJS/.test(navigator.userAgent)) url = "http:" + url;
            else if (TXLIVE_PRIVATE.getWindowLocation().protocol) url = TXLIVE_PRIVATE.getWindowLocation().protocol + url;
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) script.onreadystatechange = function() {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                if (callback) callback()
            }
        };
        else {
            script.onload = function() {
                if (callback) callback()
            };
            script.onerror = function() {
                if (callback) callback();
                callFunctionArray(TXLIVE.__onerror, "[ERR1] Cannot load remote url: " + url)
            }
        }
        attributes = attributes || [];
        for (var i = attributes.length; i--;) script[attributes[i].name] = attributes[i].value;
        if (text) script.text =
            text;
        if (url) script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script)
    };
    TXLIVE_PRIVATE.getBrowserLocale = function() {
        var i, code;
        if (navigator.languages && navigator.languages.length)
            for (i = 0; i < navigator.languages.length; ++i) {
                code = TXLIVE.normalizeLangCode(navigator.languages[i]);
                if (TXLIVE.hasLanguageCode(code)) return code;
                code = TXLIVE.matchLanguageCode(navigator.languages[i]);
                if (code) return code
            }
        if (navigator.userLanguage) {
            code = TXLIVE.normalizeLangCode(navigator.userLanguage);
            if (TXLIVE.hasLanguageCode(code)) return code;
            code = TXLIVE.matchLanguageCode(navigator.userLanguage);
            if (code) return code
        }
        if (navigator.language) {
            code = TXLIVE.normalizeLangCode(navigator.language);
            if (TXLIVE.hasLanguageCode(code)) return code;
            code = TXLIVE.matchLanguageCode(navigator.language);
            if (code) return code
        }
        return null
    };

    function mergeArrays(array1, array2) {
        var i = array2.length,
            a;
        while (i--) {
            a = array2[i];
            if (array1.indexOf(a) < 0) array1.push(a)
        }
    }

    function removeFromArray(list, value) {
        var index = list.indexOf(value);
        if (index != -1) {
            list.splice(index, 1);
            return true
        }
        return false
    }

    function encodeString(str) {
        return str.replace(/\u00a0/g, "&nbsp;")
    }

    function decodeString(str) {
        return str.replace(/&nbsp;/g, "\u00a0")
    }
    TXLIVE_PRIVATE.stripWhitespace = function(str) {
        if (!str || !str.trim().length) return null;
        return encodeString(str).replace(/\s+/g, " ").trim()
    };
    TXLIVE_PRIVATE.removeComments = function(str) {
        return (str || "").replace(TXLIVE_PRIVATE.removeCommentsRegex, "")
    };
    TXLIVE_PRIVATE.getElementsByClassName = function(node, classname) {
        if (!node) return [];
        var a = [];
        var re = new RegExp("(^| )" + classname +
            "( |$)");
        var els = node.getElementsByTagName("*");
        for (var i = 0, j = els.length; i < j; i++)
            if (re.test(els[i].className)) a.push(els[i]);
        return a
    };
    TXLIVE_PRIVATE.bindClick = function(node, fn) {
        if (node.addEventListener) node.addEventListener("click", function() {
            if (fn) fn(node)
        });
        else node.attachEvent("onclick", function() {
            if (fn) fn(node)
        })
    };
    TXLIVE_PRIVATE.hasClass = function(node, cls) {
        return (" " + node.className + " ").indexOf(" " + cls + " ") >= 0
    };
    TXLIVE_PRIVATE.removeClass = function(node, cls) {
        if (TXLIVE_PRIVATE.hasClass(node, cls)) {
            var reg =
                new RegExp("(\\s|^)" + cls + "(\\s|$)");
            node.className = node.className.replace(reg, " ")
        }
    };
    TXLIVE_PRIVATE.addClass = function(node, cls) {
        if (!TXLIVE_PRIVATE.hasClass(node, cls) && node.className !== undefined && node.className.baseVal === undefined) node.className = (node.className || "") + " " + cls
    };
    TXLIVE_PRIVATE.removeNodeByID = function(id) {
        var element = document.getElementById(id);
        if (element && element.parentNode) element.parentNode.removeChild(element)
    };
    TXLIVE_PRIVATE.getClosestByTag = function(el, tag) {
        tag = tag.toUpperCase();
        do
            if (el.nodeName ===
                tag) return el; while (el = el.parentNode);
        return null
    };
    TXLIVE_PRIVATE.escapeLanguageCode = function(code) {
        return code.replace(/-/g, "_").replace(/[.@]/g, "__")
    };
    TXLIVE_PRIVATE.constructPath = function(pathname, search) {
        search = search || "";
        pathname = pathname || "";
        if (search && search[0] === "?") {
            search = search.substr(1);
            var search_params = search.split("&");
            var index = search_params.indexOf(SIDEBAR_URL_TRIGGER);
            if (index != -1) search_params.splice(index, 1);
            search = search_params.join("&");
            if (search) search = "?" + search
        }
        return pathname +
            search
    };
    TXLIVE_PRIVATE.getWindowLocation = function() {
        return window.location
    };
    TXLIVE_PRIVATE.getWindowPath = function() {
        return TXLIVE_PRIVATE.constructPath(window.location.pathname, window.location.search)
    };
    TXLIVE_PRIVATE.getWindowHost = function() {
        return document.location.host
    };
    TXLIVE_PRIVATE.isGoogleTranslated = function() {
        return document.documentElement && document.documentElement.className && document.documentElement.className.match("translated-")
    };
    TXLIVE_PRIVATE.xssProtect = function(html) {
        if (TXLIVE.settings.xss_protect) return TXLIVE_PRIVATE.DOMPurify.sanitize(html);
        else return html
    };
    TXLIVE.doCORSRequest = function(url, method, data, callback, errback) {
        var req, invoke_cb = true;
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest;
            if ("withCredentials" in req) {
                req.open(method, url, true);
                if (errback) req.onerror = function(err) {
                    if (invoke_cb && errback) errback(err);
                    invoke_cb = false
                };
                req.onreadystatechange = function() {
                    if (req.readyState === 4 && invoke_cb) {
                        if (req.status >= 200 && req.status < 400) {
                            if (callback) callback(req.responseText)
                        } else if (errback) errback(new Error("doCORSRequest failed with status " +
                            req.status + " for: " + TXLIVE_PRIVATE.getWindowLocation().href), req.status);
                        invoke_cb = false
                    }
                };
                req.send(data)
            }
        } else if (window.XDomainRequest) {
            req = new XDomainRequest;
            req.open(method, url);
            if (errback) req.onerror = function(err) {
                if (invoke_cb && errback) errback(err);
                invoke_cb = false
            };
            req.onload = function() {
                if (invoke_cb && callback) callback(req.responseText);
                invoke_cb = false
            };
            req.send(data)
        } else if (errback) errback(new Error("doCORSRequest: CORS not supported by browser"))
    };
    TXLIVE_PRIVATE.md5 = function() {
        var rotateLeft =
            function(lValue, iShiftBits) {
                return lValue << iShiftBits | lValue >>> 32 - iShiftBits
            };
        var addUnsigned = function(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = lX & 2147483648;
            lY8 = lY & 2147483648;
            lX4 = lX & 1073741824;
            lY4 = lY & 1073741824;
            lResult = (lX & 1073741823) + (lY & 1073741823);
            if (lX4 & lY4) return lResult ^ 2147483648 ^ lX8 ^ lY8;
            if (lX4 | lY4)
                if (lResult & 1073741824) return lResult ^ 3221225472 ^ lX8 ^ lY8;
                else return lResult ^ 1073741824 ^ lX8 ^ lY8;
            else return lResult ^ lX8 ^ lY8
        };
        var F = function(x, y, z) {
            return x & y | ~x & z
        };
        var G = function(x, y, z) {
            return x & z |
                y & ~z
        };
        var H = function(x, y, z) {
            return x ^ y ^ z
        };
        var I = function(x, y, z) {
            return y ^ (x | ~z)
        };
        var FF = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var GG = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var HH = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var II = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a,
                addUnsigned(addUnsigned(I(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var convertToWordArray = function(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWordsTempOne = lMessageLength + 8;
            var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - lNumberOfWordsTempOne % 64) / 64;
            var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - lByteCount % 4) / 4;
                lBytePosition = lByteCount %
                    4 * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
                lByteCount++
            }
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray
        };
        var wordToHex = function(lValue) {
            var WordToHexValue = "",
                WordToHexValueTemp = "",
                lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = lValue >>> lCount * 8 &
                    255;
                WordToHexValueTemp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2)
            }
            return WordToHexValue
        };
        var uTF8Encode = function(string) {
            string = string.replace(/\x0d\x0a/g, "\n");
            var output = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) output += String.fromCharCode(c);
                else if (c > 127 && c < 2048) {
                    output += String.fromCharCode(c >> 6 | 192);
                    output += String.fromCharCode(c & 63 | 128)
                } else {
                    output += String.fromCharCode(c >> 12 | 224);
                    output += String.fromCharCode(c >>
                        6 & 63 | 128);
                    output += String.fromCharCode(c & 63 | 128)
                }
            }
            return output
        };
        return function(string) {
            var x = Array();
            var k, AA, BB, CC, DD, a, b, c, d;
            var S11 = 7,
                S12 = 12,
                S13 = 17,
                S14 = 22;
            var S21 = 5,
                S22 = 9,
                S23 = 14,
                S24 = 20;
            var S31 = 4,
                S32 = 11,
                S33 = 16,
                S34 = 23;
            var S41 = 6,
                S42 = 10,
                S43 = 15,
                S44 = 21;
            string = uTF8Encode(string);
            x = convertToWordArray(string);
            a = 1732584193;
            b = 4023233417;
            c = 2562383102;
            d = 271733878;
            for (k = 0; k < x.length; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
                d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
                c = FF(c, d, a, b, x[k + 2], S13, 606105819);
                b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
                a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
                d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
                c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
                b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
                a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
                d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
                c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
                b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
                a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
                d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
                c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
                b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
                a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
                d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
                c = GG(c, d, a, b, x[k + 11], S23, 643717713);
                b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
                a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
                d = GG(d, a, b, c, x[k + 10], S22, 38016083);
                c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
                b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
                a = GG(a, b, c, d, x[k + 9], S21, 568446438);
                d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
                c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
                b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
                a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
                d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
                c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
                b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
                a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
                d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
                c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
                b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
                a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
                d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
                c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
                b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
                a = HH(a, b, c, d, x[k + 13], S31, 681279174);
                d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
                c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
                b = HH(b, c, d, a, x[k + 6], S34, 76029189);
                a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
                d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
                c = HH(c, d, a, b, x[k + 15], S33, 530742520);
                b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
                a = II(a, b, c, d, x[k + 0], S41, 4096336452);
                d = II(d, a, b, c, x[k + 7], S42, 1126891415);
                c = II(c, d, a, b, x[k + 14], S43, 2878612391);
                b = II(b, c, d, a, x[k + 5], S44, 4237533241);
                a = II(a, b, c, d, x[k + 12], S41, 1700485571);
                d = II(d, a, b, c, x[k + 3], S42, 2399980690);
                c = II(c, d, a, b, x[k + 10], S43, 4293915773);
                b = II(b, c, d, a, x[k + 1], S44, 2240044497);
                a = II(a, b, c, d, x[k + 8], S41, 1873313359);
                d = II(d, a, b, c, x[k + 15], S42, 4264355552);
                c = II(c, d, a, b, x[k + 6], S43, 2734768916);
                b = II(b, c, d, a, x[k + 13], S44, 1309151649);
                a = II(a, b, c, d, x[k + 4], S41, 4149444226);
                d = II(d, a, b, c, x[k + 11], S42, 3174756917);
                c = II(c, d, a, b, x[k + 2], S43, 718787259);
                b = II(b, c, d, a, x[k + 9], S44, 3951481745);
                a = addUnsigned(a, AA);
                b = addUnsigned(b, BB);
                c = addUnsigned(c, CC);
                d = addUnsigned(d, DD)
            }
            var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
            return tempValue.toLowerCase()
        }
    }();
    var tx_local_storage = {};

    function _storage_set_emu(key, value) {
        tx_local_storage[key] = value
    }

    function _storage_get_emu(key) {
        return tx_local_storage[key]
    }

    function _session_set_emu(key, value) {}

    function _session_get_emu(key) {}

    function _storage_set_localStorage(key, value) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            TXLIVE.logger.error(err);
            _storage_set_emu(key, value)
        }
    }

    function _storage_get_localStorage(key) {
        try {
            var value = window.localStorage.getItem(key);
            if (value) return JSON.parse(value);
            return null
        } catch (err) {
            TXLIVE.logger.error(err);
            return _storage_get_emu(key)
        }
    }

    function _storage_set_sessionStorage(key, value) {
        try {
            window.sessionStorage.setItem(key,
                JSON.stringify(value))
        } catch (err) {
            TXLIVE.logger.error(err);
            _storage_set_emu(key, value)
        }
    }

    function _storage_get_sessionStorage(key) {
        try {
            var value = window.sessionStorage.getItem(key);
            if (value) return JSON.parse(value);
            return null
        } catch (err) {
            TXLIVE.logger.error(err);
            return _storage_get_emu(key)
        }
    }
    TXLIVE_PRIVATE.storage_set = _storage_set_emu;
    TXLIVE_PRIVATE.storage_get = _storage_get_emu;
    TXLIVE_PRIVATE.session_set = _session_set_emu;
    TXLIVE_PRIVATE.session_get = _session_get_emu;
    try {
        if (window.localStorage && window.localStorage.setItem) {
            window.localStorage.setItem("txlive",
                "1");
            TXLIVE_PRIVATE.storage_set = _storage_set_localStorage;
            TXLIVE_PRIVATE.storage_get = _storage_get_localStorage;
            TXLIVE.settings.has_storage = true
        }
    } catch (err) {
        try {
            if (window.sessionStorage && window.sessionStorage.setItem) {
                window.sessionStorage.setItem("txlive", "1");
                TXLIVE_PRIVATE.storage_set = _storage_set_sessionStorage;
                TXLIVE_PRIVATE.storage_get = _storage_get_sessionStorage;
                TXLIVE.settings.has_storage = true
            }
        } catch (err) {}
    }
    try {
        if (window.sessionStorage && window.sessionStorage.setItem) {
            window.sessionStorage.setItem("txlive",
                "1");
            TXLIVE_PRIVATE.session_set = _storage_set_sessionStorage;
            TXLIVE_PRIVATE.session_get = _storage_get_sessionStorage;
            TXLIVE.settings.has_session = true
        }
    } catch (err) {}
    TXLIVE_PRIVATE.apiScopedKey = function(key) {
        return TXLIVE.settings.api_key + "@" + key
    };
    var last_picker_setup = null;

    function setupPicker() {
        if (last_picker_setup === TXLIVE.settings.picker) return;
        if (!TXLIVE.settings.picker) return;
        if (TXLIVE.isPageFiltered()) return;
        var picker = TXLIVE.settings.picker.trim();
        if (!picker.length) return;
        last_picker_setup = picker;
        TXLIVE.dynamicPageOff();
        TXLIVE_PRIVATE.addPicker(picker);
        TXLIVE.dynamicPageOn()
    }
    var added_picker_css = false;
    TXLIVE_PRIVATE.addPicker = function(picker) {
        if (!added_picker_css) {
            added_picker_css = true;
            try {
                var css = ".txlive-langselector { position:fixed;z-index:999999;min-width: 120px;line-height:32px;background-color:#075985;box-shadow: 0 0 0px rgba( 0,0,0,0.3 );font-size: 14px;font-family: inherit; }";
                css += ".txlive-langselector * { margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;border-radius: 0;-moz-border-radius:0;-webkit-border-radius:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-border-radius:0;opacity:1; }";
                css += ".txlive-langselector.txlive-langselector-topleft { top:0;left:0;right:auto;bottom:auto;border-radius: 0 0 2px 0;-moz-border-radius: 0 0 2px 0;-webkit-border-radius: 0 0 2px 0; }";
                css += ".txlive-langselector.txlive-langselector-topright { top:0;left:auto;right:0;bottom:auto;border-radius: 0 2px 0 0;-moz-border-radius: 0 2px 0 0;-webkit-border-radius: 0 2px 0 0; }";
                css += ".txlive-langselector.txlive-langselector-bottomleft { top:auto;left:0;right:auto;bottom:0;border-radius: 0 2px 0 0;-moz-border-radius: 0 2px 0 0;-webkit-border-radius: 0 2px 0 0; }";
                css += ".txlive-langselector.txlive-langselector-bottomright { top:auto;left:auto;right:0;bottom:0;border-radius: 2px 0 0 0;-moz-border-radius: 2px 0 0 0;-webkit-border-radius: 2px 0 0 0; }";
                css += ".txlive-langselector .txlive-langselector-toggle { overflow: hidden;display: block;padding:2px 16px;width: 100%;height:36px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-topleft .txlive-langselector-toggle { overflow: hidden;display: block;border-top:2px solid #006f9f;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-topright .txlive-langselector-toggle { overflow: hidden;display: block;border-top:2px solid #006f9f;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-bottomleft .txlive-langselector-toggle { overflow: hidden;display: block;border-bottom:2px solid #006f9f;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-bottomright .txlive-langselector-toggle { overflow: hidden;display: block;border-bottom:0px solid #006f9f;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector .txlive-langselector-current { float: left;padding: 0;max-width: 200px;overflow:hidden;white-space: nowrap;text-overflow:ellipsis; }";
                css += ".txlive-langselector .txlive-langselector-marker { float: right;display: block;position:relative;width:0;height:0;margin-left:8px;margin-top: 13px;border-right:4px dashed transparent;border-left:4px dashed transparent;}";
                css += ".txlive-langselector-topright .txlive-langselector-marker,";
                css += ".txlive-langselector-topleft .txlive-langselector-marker {border-top:4px solid #fff;}";
                css += ".txlive-langselector-bottomright .txlive-langselector-marker,";
                css += ".txlive-langselector-bottomleft .txlive-langselector-marker {border-bottom:4px solid #fff;}";
                css += ".txlive-langselector-list { position:absolute;width: 100%;margin:0;padding:10px 0;display:none;background-color:#E2E8F0;box-shadow: 0 0 4px rgba( 0,0,0,0.3 );color:#1e293b;list-style-type:none; }";
                css += ".txlive-langselector-list.txlive-langselector-list-opened { display:block;max-height:500px;overflow:auto; }";
                css += ".txlive-langselector-list > li button {padding:0 16px;width:100%;overflow:hidden;white-space: nowrap;text-overflow:ellipsis; text-align: left;}";
                css += ".txlive-langselector-list > li button:hover {background-color:#0ea5e9;color:#fff;cursor:pointer;cursor:hand;}";
                css += ".txlive-langselector-topright > .txlive-langselector-list {top:40px;left:auto;right:0;bottom:auto;border-bottom: 1px solid #f4f7f9;}";
                css += ".txlive-langselector-topleft > .txlive-langselector-list {top:40px;left:0;right:auto;bottom:auto;border-bottom: 1px solid #f4f7f9;}";
                css += ".txlive-langselector-bottomright > .txlive-langselector-list {top:auto;left:auto;right:0;bottom:40px;border-top: 1px solid #E2E8F0;}";
                css += ".txlive-langselector-bottomleft > .txlive-langselector-list {top:auto;left:0;right:auto;bottom:40px;border-top: 1px solid #f4f7f9;}";
                css += ".txlive-langselector-topright > .txlive-langselector-list,";
                css += ".txlive-langselector-bottomright > .txlive-langselector-list {border-radius: 2px 0 0 2px;-moz-border-radius: 2px 0 0 2px;-webkit-border-radius: 2px 0 0 2px;}";
                css += ".txlive-langselector-topleft > .txlive-langselector-list,";
                css += ".txlive-langselector-bottomleft > .txlive-langselector-list {border-radius: 0 2px 2px 0;-moz-border-radius: 0 2px 2px 0;-webkit-border-radius: 0 2px 2px 0;}";
                var head = document.head || document.getElementsByTagName("head")[0];
                var style = document.createElement("style");
                style.type = "text/css";
                if (style.styleSheet) style.styleSheet.cssText = css;
                else style.appendChild(document.createTextNode(css));
                head.appendChild(style)
            } catch (err) {
                TXLIVE.logger.error(err)
            }
        }
        try {
            var html = '<button data-navigation-toggle aria-expanded="false" style="background: transparent;letter-spacing: normal;color: #fff;text-transform: none;" class="txlive-langselector-toggle notranslate" id="tx-live-lang-toggle"><span class="txlive-langselector-current" id="tx-live-lang-current">' +
                TXLIVE.languages.source.name + "</span>";
            html += '<span class="txlive-langselector-marker"></span></button>';
            html += '<ul data-navigation-list id="tx-live-lang-picker" class="txlive-langselector-list notranslate">';
            for (var i = 0; i < TXLIVE.denormalized_languages.length; ++i) {
                var l = TXLIVE.denormalized_languages[i];
                html += "<li>" + '<button data-navigation-list-item data-value="' + l.code + '" aria-label="Toggle language to ' + l.name + '">' + l.name + "</button>" + "</li>"
            }
            html += "</ul>";
            if (picker[0] === "#") {
                var elem = document.getElementById(picker.substr(1));
                if (!elem) return;
                elem.innerHTML = TXLIVE_PRIVATE.xssProtect(html)
            } else {
                var div = document.getElementById("tx-live-lang-container");
                if (!div) {
                    div = document.createElement("div");
                    div.id = "tx-live-lang-container"
                }
                var csstext = "txlive-langselector";
                switch (picker.toLowerCase()) {
                    case "top-left":
                        csstext += " txlive-langselector-topleft";
                        break;
                    case "top-right":
                        csstext += " txlive-langselector-topright";
                        break;
                    case "bottom-left":
                        csstext += " txlive-langselector-bottomleft";
                        break;
                    case "bottom-right":
                        csstext += " txlive-langselector-bottomright";
                        break;
                    default:
                        return
                }
                div.className = csstext;
                div.innerHTML = TXLIVE_PRIVATE.xssProtect(html);
                div.setAttribute("data-navigation", "");
                document.body.appendChild(div)
            }
            if (TXLIVE.getSelectedLanguageCode()) {
                var langname = TXLIVE.getLanguageName(TXLIVE.getSelectedLanguageCode());
                var nameelem = document.getElementById("tx-live-lang-current");
                if (langname && nameelem) nameelem.innerHTML = TXLIVE_PRIVATE.xssProtect(langname)
            }
            var el = document.getElementById("tx-live-lang-toggle");
            var open_class = "txlive-langselector-list-opened";

            function is_picker_open() {
                var toggler = document.getElementById("tx-live-lang-picker");
                return toggler && toggler.className.indexOf(open_class) >= 0
            }

            function handleKeydown(e) {
                var nav = document.querySelector("[data-navigation]");
                var focusableElements = nav.querySelectorAll("button");
                var focusedElement = document.activeElement;
                var focusedIndex = Array.from(focusableElements).findIndex(function(item) {
                    return item === focusedElement
                });
                if (e.key === "Tab" && !e.shiftKey) {
                    e.preventDefault();
                    var nextIndex = (focusedIndex + 1) % focusableElements.length;
                    focusableElements[nextIndex].focus()
                }
                if (e.key === "Tab" && e.shiftKey) {
                    e.preventDefault();
                    var prevIndex = (focusedIndex - 1) % focusableElements.length;
                    if (prevIndex === -1) focusableElements[focusableElements.length - 1].focus();
                    else focusableElements[prevIndex].focus()
                }
                if (e.key === "Enter") pick_lang(focusedElement)
            }

            function navigationFocus() {
                var nav = document.querySelector("[data-navigation]");
                if (nav) nav.addEventListener("keydown", handleKeydown)
            }

            function handleEscape() {
                document.addEventListener("keyup", function(e) {
                    var escape =
                        e.key;
                    var navList = document.querySelector("[data-navigation-list]");
                    var nav = document.querySelector("[data-navigation]");
                    if (escape === "Escape" && navList && navList.classList.contains("txlive-langselector-list-opened")) {
                        nav.focus();
                        nav.removeEventListener("keydown", handleKeydown);
                        close_picker()
                    }
                })
            }

            function open_picker() {
                var toggler = document.getElementById("tx-live-lang-picker");
                var button = document.getElementById("tx-live-lang-toggle");
                button.setAttribute("aria-expanded", "true");
                if (toggler) toggler.className +=
                    " " + open_class;
                try {
                    navigationFocus();
                    handleEscape()
                } catch (e) {}
            }

            function close_picker() {
                var toggler = document.getElementById("tx-live-lang-picker");
                var button = document.getElementById("tx-live-lang-toggle");
                button.setAttribute("aria-expanded", "false");
                if (toggler) toggler.className = toggler.className.replace(open_class, "")
            }

            function pick_lang(element) {
                close_picker();
                if (element && element.getAttribute) {
                    var lang = element.getAttribute("data-value");
                    if (lang)
                        if (TXLIVE.settings.reload_on_language_picker) {
                            TXLIVE_PRIVATE.storage_set("txlive:selectedlang",
                                lang);
                            window.location.reload()
                        } else TXLIVE.translateTo(lang)
                }
            }
            if (el) TXLIVE_PRIVATE.bindClick(el, function() {
                if (is_picker_open()) close_picker();
                else open_picker()
            });
            var navList = document.querySelector("[data-navigation-list]");
            if (navList) {
                navList = navList.querySelectorAll("[data-navigation-list-item]") || [];
                for (var j = 0; j < navList.length; ++j) TXLIVE_PRIVATE.bindClick(navList[j], pick_lang)
            }
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    };
    var LOCQUANT_TYPES = ["currency", "number", "date"];
    TXLIVE_PRIVATE.parse_locquant_string =
        function(lstring) {
            var ret = {};
            var re = /#([\s\S])#*0([\s\S])0/;
            var markers = re.exec(lstring);
            ret.group = markers[1];
            ret.decimal = markers[2];
            ret.currency_on_the_left = lstring.indexOf("\u00a4") === 0;
            if (ret.currency_on_the_left) ret.cspace = /\u00a4(\s*)#/.exec(lstring)[1];
            else ret.cspace = /0(\s*)\u00a4/.exec(lstring)[1];
            return ret
        };
    TXLIVE_PRIVATE.LOCQUANT_LOCALE = {
        ja: "\u00a4#,##0.00",
        zh: "\u00a4 #,##0.00",
        ko: "\u00a4#,##0.00",
        de: "#.##0,00 \u00a4",
        fr: "# ##0,00 \u00a4",
        en: "\u00a4#,##0.00",
        ar: "#,##0.00 \u00a4",
        hi: "\u00a4#,##0.00",
        es: "#.##0,00 \u00a4",
        es_mx: "\u00a4#,##0.00",
        pt: "\u00a4#.##0,00",
        sv: "# ##0,00 \u00a4",
        fi: "# ##0,00 \u00a4",
        it: "#.##0,00 \u00a4",
        nl: "\u00a4 #.##0,00",
        da: "#.##0,00 \u00a4",
        el: "#.##0,00 \u00a4",
        zu: "\u00a4#,##0.00",
        af: "\u00a4# ##0,00",
        ru: "# ##0,00 \u00a4",
        bn: "#,##0.00\u00a4",
        pa: "\u00a4 #,##0.00",
        te: "\u00a4#,##0.00",
        vi: "#.##0,00 \u00a4",
        mr: "\u00a4#,##0.00",
        ta: "\u00a4 #,##0.00",
        th: "\u00a4#,##0.00",
        tr: "#.##0,00 \u00a4"
    };
    for (var i in TXLIVE_PRIVATE.LOCQUANT_LOCALE) TXLIVE_PRIVATE.LOCQUANT_LOCALE[i] = TXLIVE_PRIVATE.parse_locquant_string(TXLIVE_PRIVATE.LOCQUANT_LOCALE[i]);
    TXLIVE_PRIVATE.get_locale_spec = function(langcode) {
        langcode = langcode.toLowerCase().replace("-", "_");
        return TXLIVE_PRIVATE.LOCQUANT_LOCALE[langcode] || TXLIVE_PRIVATE.LOCQUANT_LOCALE[langcode.substr(0, 2)]
    };
    var _parseDecimal = function(value, format) {
        var decimal, fractionPart, integerPart, number, pattern, result, thousands;
        thousands = format[0];
        decimal = format[1];
        if (thousands == " ") {
            thousands = "";
            value = value.replace(/\s/g, "").replace(decimal, ".");
            return parseFloat(value)
        }
        pattern = new RegExp("^\\s*((?:\\d{1,3}(?:\\" +
            thousands + "\\d{3})+)|\\d*)(?:\\" + decimal + "(\\d*))?\\s*$");
        result = value.match(pattern);
        if (!result || result.length !== 3) return NaN;
        integerPart = result[1].replace(new RegExp("\\" + thousands, "g"), "");
        fractionPart = result[2];
        number = parseFloat("" + integerPart + "." + fractionPart);
        return number
    };
    var _formatNumber = function(number, delimiter, decimalDelimiter) {
        var numberString = number.toString(),
            splitNumber = numberString.split("."),
            splitFloats = "";
        if (splitNumber[1]) splitFloats = decimalDelimiter + splitNumber[1];
        return splitNumber[0].split(/(?=(?:\d{3})+$)/g).join(delimiter) +
            splitFloats
    };
    TXLIVE_PRIVATE.parseDecimal = function(value, format) {
        if (format) return _parseDecimal(value, format);
        var sourcelang_code = TXLIVE.getSourceLanguageCode() || "en";
        var spec = TXLIVE_PRIVATE.get_locale_spec(sourcelang_code);
        if (!spec) {
            var ret = _parseDecimal(value, ".,");
            return !isNaN(ret) ? ret : _parseDecimal(value, ",.")
        }
        return _parseDecimal(value, spec.group + spec.decimal)
    };
    TXLIVE_PRIVATE.is_locquant = function(node) {
        var type = node.getAttribute("tx-content");
        if (!type || !node.innerHTML) return false;
        type = type.trim().toLowerCase();
        if (LOCQUANT_TYPES.indexOf(type) < 0) return false;
        return type
    };
    TXLIVE_PRIVATE.process_locquant = function(node) {
        var type = TXLIVE_PRIVATE.is_locquant(node);
        if (!type) return;
        TXLIVE.locquant_segment_list.push({
            node: node,
            type: type,
            format: node.getAttribute("tx-format"),
            source_string: node.innerHTML
        });
        return true
    };
    TXLIVE_PRIVATE.localize_locquant = function(type, text, format) {
        if (TXLIVE.getSelectedLanguageCode() == TXLIVE.getSourceLanguageCode()) return text;
        return TXLIVE_PRIVATE["localize_locquant_" + type](TXLIVE.getSelectedLanguageCode(),
            text, format)
    };
    TXLIVE_PRIVATE.localize_locquant_number = function(langcode, text, format) {
        var spec = TXLIVE_PRIVATE.get_locale_spec(langcode);
        var cnumber = text.replace(/[A-Za-z]/g, "");
        var csymbol = text.replace(cnumber, "").replace(" ", "");
        cnumber = TXLIVE_PRIVATE.parseDecimal(cnumber, format);
        if (!spec || isNaN(cnumber)) return text;
        cnumber = _formatNumber(cnumber, spec.group, spec.decimal);
        return spec.unit_on_the_left ? csymbol + cnumber : cnumber + csymbol
    };
    TXLIVE_PRIVATE.localize_locquant_currency = function(langcode, text, format) {
        var spec =
            TXLIVE_PRIVATE.get_locale_spec(langcode);
        var csymbol = text.replace(/[\d\s]/g, "").replace(",", "").replace(".", "");
        var cnumber = text.replace(csymbol, "").trim();
        cnumber = TXLIVE_PRIVATE.parseDecimal(cnumber, format);
        if (!spec || isNaN(cnumber)) return text;
        cnumber = _formatNumber(cnumber, spec.group, spec.decimal);
        return spec.currency_on_the_left ? csymbol + spec.cspace + cnumber : cnumber + spec.cspace + csymbol
    };
    TXLIVE_PRIVATE.localize_locquant_date = function(langcode, text) {
        return text
    };
    TXLIVE_PRIVATE.escape_regex = function(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,
            "\\$1")
    };
    TXLIVE_PRIVATE.ignorePath = function(filters, path) {
        if (!filters || !path) return false;
        var i = filters.length;
        while (i--)
            if (filters[i].action == "ignore") {
                var filter = TXLIVE_PRIVATE._filterToRegexp(filters[i]);
                var check = filter.neg ? !filter.re.test(path) : filter.re.test(path);
                if (check) return true
            } return false
    };
    TXLIVE_PRIVATE._filterToRegexp = function(filter) {
        var re = /^not_/;
        var neg = re.test(filter.match);
        var action = filter.match.replace("not_", "").replace("with", "").trim();
        var path = TXLIVE_PRIVATE.escape_regex(filter.path);
        switch (action) {
            case "starts":
                re = "^" + path;
                break;
            case "ends":
                re = path + "$";
                break;
            case "contains":
                re = path;
                break;
            case "equals":
                re = "^" + path + "$";
                break
        }
        return {
            re: new RegExp(re),
            neg: neg
        }
    };
    var PARSER_OPTIONS = {
        DEFAULT: 1 << 2,
        DO_NOT_COLLECT: 1 << 1,
        URLS_AS_VARS: 1 << 2,
        set: function(value, option) {
            return value | option
        },
        unset: function(value, option) {
            return value & ~option
        },
        isset: function(value, option) {
            return value & option
        },
        isunset: function(value, option) {
            return !(value & option)
        }
    };
    var SKIP_TAGS = {
        SCRIPT: true,
        STYLE: true,
        LINK: true,
        IFRAME: true,
        NOSCRIPT: true,
        CANVAS: true,
        AUDIO: true,
        VIDEO: true,
        CODE: true,
        TIME: true,
        VAR: true,
        KBD: true
    };
    var SKIP_CLASS = {
        "notranslate": true,
        "txlive-meta": true,
        "facebook_container": true
    };
    var SKIP_TAGS_CONTENT = {
        TEXTAREA: true
    };
    var SKIP_TAGS_USER = {},
        SKIP_CLASS_USER = {};
    var BLOCK_NODES = {
        ADDRESS: true,
        FIGCAPTION: true,
        OL: true,
        ARTICLE: true,
        FIGURE: true,
        OUTPUT: true,
        ASIDE: true,
        FOOTER: true,
        P: true,
        FORM: true,
        PRE: true,
        BLOCKQUOTE: true,
        H1: true,
        H2: true,
        H3: true,
        H4: true,
        H5: true,
        H6: true,
        AUDIO: true,
        CANVAS: true,
        SECTION: true,
        HEADER: true,
        TABLE: true,
        DD: true,
        HGROUP: true,
        TFOOT: true,
        DIV: true,
        HR: true,
        UL: true,
        DL: true,
        VIDEO: true,
        FIELDSET: true,
        NOSCRIPT: true,
        SCRIPT: true,
        IFRAME: true,
        TEXTAREA: true,
        PICTURE: true
    };
    var NEW_SEGMENTS_DICT = null;

    function isBlockElement(node) {
        return node.nodeType === 1 && BLOCK_NODES[node.tagName] === true
    }

    function isInlineElement(node) {
        return node.nodeType === 1 && BLOCK_NODES[node.tagName] !== true
    }

    function isTextElement(node) {
        return node.nodeType === 3
    }

    function isCommentElement(node) {
        return node.nodeType === 8
    }

    function hasDataBinding(node) {
        return node.nodeType ===
            1 && node.className && (" " + node.className).indexOf(" ng-") != -1 || node.nodeType === 8 && node.nodeValue && node.nodeValue.indexOf("react-") != -1
    }

    function isSkipTag(tagName) {
        return tagName && (SKIP_TAGS[tagName.toUpperCase()] || SKIP_TAGS_USER[tagName.toUpperCase()])
    }

    function isSkipTagContent(tagName) {
        return tagName && SKIP_TAGS_CONTENT[tagName.toUpperCase()]
    }

    function isSkipClass(className) {
        if (!className || !isString(className)) return false;
        var cls_array = className.toLowerCase().match(/\S+/g);
        if (!cls_array) return false;
        var i = cls_array.length;
        while (i--)
            if (SKIP_CLASS[cls_array[i]] || SKIP_CLASS_USER[cls_array[i]]) return true;
        return false
    }

    function isSkipAttr(node) {
        if (!node.getAttribute) return false;
        var content_attr = node.getAttribute("tx-content");
        if (content_attr && content_attr.length) {
            content_attr = content_attr.toLowerCase();
            if (/\bexclude\b/.test(content_attr)) return true
        }
        return false
    }

    function isBlockTag(tagName) {
        return (TXLIVE.settings.tags_as_blocks || []).indexOf(tagName) != -1
    }

    function SET_TEXT(item, text) {
        text = decodeString(text);
        item.node.nodeValue = item.head + text + item.tail
    }

    function GET_TEXT(item) {
        return item.node.nodeValue
    }

    function SET_FRAGMENT(item, text) {
        text = decodeString(text);
        for (var i = 0; i < item.block_args.length; ++i) {
            var arg = item.block_args[i];
            if (arg.type === "VAR") text = text.replace("{{" + i + "}}", arg.html);
            else if (arg.type === "LQ") text = text.replace("{{" + i + "}}", TXLIVE_PRIVATE.localize_locquant(arg.ltype, arg.inner, arg.format))
        }
        var node = item.snode_before ? item.snode_before.nextSibling : item.snode_after.parentNode.firstChild;
        while (node &&
            node != item.snode_after) {
            var to_delete = node;
            node = node.nextSibling;
            to_delete.parentNode.removeChild(to_delete)
        }
        var tmp = document.createElement("div");
        tmp.innerHTML = TXLIVE_PRIVATE.xssProtect(item.head + text + item.tail);
        var frag = document.createDocumentFragment();
        var child;
        while (child = tmp.firstChild) frag.appendChild(child);
        (item.snode_before || item.snode_after).parentNode.insertBefore(frag, item.snode_after)
    }

    function GET_FRAGMENT(item) {
        var node = item.snode_before ? item.snode_before.nextSibling : item.snode_after.parentNode.firstChild;
        var tmp = document.createElement("div");
        while (node && node != item.snode_after) {
            tmp.appendChild(node.cloneNode(true));
            node = node.nextSibling
        }
        return tmp.innerHTML
    }

    function SET_BLOCK(item, text) {
        text = decodeString(text);
        for (var i = 0; i < item.block_args.length; ++i) {
            var arg = item.block_args[i];
            if (arg.type === "VAR") text = text.replace("{{" + i + "}}", arg.html);
            else if (arg.type === "LQ") text = text.replace("{{" + i + "}}", TXLIVE_PRIVATE.localize_locquant(arg.ltype, arg.inner, arg.format))
        }
        item.node.innerHTML = TXLIVE_PRIVATE.xssProtect(item.head +
            text + item.tail)
    }

    function GET_BLOCK(item, text) {
        return item.node.innerHTML
    }

    function SET_ATTR(item, text) {
        text = decodeString(text);
        item.node.setAttribute(item.attribute, item.head + text + item.tail)
    }

    function GET_ATTR(item) {
        return item.node.getAttribute(item.attribute)
    }

    function PARSE_ARGS(node, args) {
        if (node) {
            do
                if (node.nodeType === 1) {
                    var ltype = TXLIVE_PRIVATE.is_locquant(node);
                    if (ltype || isSkipTag(node.tagName) || isSkipClass(node.className) || isSkipAttr(node)) {
                        var outerhtml = node.outerHTML;
                        if (outerhtml)
                            if (ltype) args.push({
                                type: "LQ",
                                html: outerhtml,
                                inner: node.innerHTML,
                                ltype: ltype,
                                format: node.getAttribute("tx-format")
                            });
                            else args.push({
                                type: "VAR",
                                html: outerhtml
                            })
                    } else PARSE_ARGS(node.firstChild, args)
                } while (node = node.nextSibling)
        }
    }

    function PARSE_VARIABLES(text, args, options) {
        if (TXLIVE.settings.variables_parser) text = TXLIVE.settings.variables_parser(text, function(match) {
            args.push({
                type: "VAR",
                html: match
            });
            return "{{" + (args.length - 1) + "}}"
        });
        if (/<[a-z][\s\S]*>/i.test(text)) {
            var node = document.createElement("div");
            node.innerHTML = text;
            PARSE_ARGS(node.firstChild,
                args);
            for (var i = 0; i < args.length; ++i)
                if (args[i].type === "VAR" || args[i].type === "LQ") text = text.replace(args[i].html, "{{" + i + "}}")
        }
        if (PARSER_OPTIONS.isset(options, PARSER_OPTIONS.URLS_AS_VARS) && /\s(src|href)/i.test(text)) {
            var match, regex = /(<a[^>]*href\s*=\s*)("[^"]*"|'[^']*')|(<img[^>]*src\s*=\s*)("[^"]*"|'[^']*')/ig;
            var result = "",
                lastIndex = 0;
            while (match = regex.exec(text)) {
                result += text.substring(lastIndex, match.index);
                if (match[2]) {
                    result += match[1] + match[2][0] + "{{" + args.length + "}}" + match[2][0];
                    args.push({
                        type: "VAR",
                        html: match[2].substring(1, match[2].length - 1)
                    })
                } else {
                    result += match[3] + match[4][0] + "{{" + args.length + "}}" + match[4][0];
                    args.push({
                        type: "VAR",
                        html: match[4].substring(1, match[4].length - 1)
                    })
                }
                lastIndex = regex.lastIndex
            }
            result += text.substring(lastIndex, text.length);
            text = result
        }
        return text
    }

    function CRAWL_FRAGMENT(snode_before, snode_after, tags, options, string_group, skip_trim_whitespaces) {
        if ((!snode_before || snode_before && snode_before.txbefore_detected === true) && (!snode_after || snode_after && snode_after.txafter_detected ===
                true)) return;
        try {
            if (snode_before) snode_before.txbefore_detected = true;
            if (snode_after) snode_after.txafter_detected = true
        } catch (err) {}
        var node = document.createElement("div");
        var next = snode_before ? snode_before.nextSibling : snode_after.parentNode.firstChild;
        while (next && next != snode_after) {
            node.appendChild(next.cloneNode(true));
            next = next.nextSibling
        }
        var raw_text = node.innerHTML;
        var text = TXLIVE_PRIVATE.removeComments(raw_text);
        if (!skip_trim_whitespaces) text = TXLIVE_PRIVATE.stripWhitespace(text);
        if (!text) return;
        var args = [];
        text = PARSE_VARIABLES(text, args, options);
        var key = TXLIVE_PRIVATE.md5(text + string_group);
        var segments = TXLIVE.segments;
        var segment = segments[key];
        if (!segment) {
            segment = {
                key: key,
                source_string: text,
                tags: [],
                elements: []
            };
            segments[key] = segment
        }
        if (tags.length) mergeArrays(segment.tags, tags);
        segment.elements.push({
            segment: segment,
            pnode: (snode_before || snode_after).parentNode,
            snode_before: snode_before,
            snode_after: snode_after,
            set: SET_FRAGMENT,
            get: GET_FRAGMENT,
            block_args: args,
            head: raw_text.indexOf(" ") ===
                0 ? " " : "",
            tail: raw_text.indexOf(" ", raw_text.length - 1) >= 0 ? " " : ""
        });
        if (NEW_SEGMENTS_DICT) NEW_SEGMENTS_DICT[key] = segment
    }

    function CRAWL_BLOCK(node, tags, options, string_group, skip_trim_whitespces) {
        if (node.txblock_detected === true) return;
        try {
            node.txblock_detected = true
        } catch (err) {}
        if (TXLIVE_PRIVATE.process_locquant(node)) return;
        if (isSkipTagContent(node.tagName)) return;
        var raw_text = node.innerHTML;
        var text = TXLIVE_PRIVATE.removeComments(raw_text);
        if (!skip_trim_whitespces) text = TXLIVE_PRIVATE.stripWhitespace(text);
        if (!text || TXLIVE_PRIVATE.isNotTextualRegex.test(text)) return;
        var args = [];
        text = PARSE_VARIABLES(text, args, options);
        var key = TXLIVE_PRIVATE.md5(text + string_group);
        var segments = TXLIVE.segments;
        var segment = segments[key];
        if (!segment) {
            segment = {
                key: key,
                source_string: text,
                tags: [],
                elements: []
            };
            segments[key] = segment
        }
        if (tags.length) mergeArrays(segment.tags, tags);
        segment.elements.push({
            segment: segment,
            node: node,
            pnode: node,
            set: SET_BLOCK,
            get: GET_BLOCK,
            block_args: args,
            head: raw_text.indexOf(" ") === 0 ? " " : "",
            tail: raw_text.indexOf(" ",
                raw_text.length - 1) >= 0 ? " " : ""
        });
        try {
            node.txsegment = segment
        } catch (err) {}
        if (NEW_SEGMENTS_DICT) NEW_SEGMENTS_DICT[key] = segment
    }

    function CRAWL_TEXT(node, tags, options, string_group) {
        if (node.txtext_detected === true) return;
        try {
            node.txtext_detected = true
        } catch (err) {}
        var raw_text = node.nodeValue;
        var text = TXLIVE_PRIVATE.stripWhitespace(raw_text);
        if (text && text.length && !TXLIVE_PRIVATE.isNotTextualRegex.test(text)) {
            var key = TXLIVE_PRIVATE.md5(text + string_group);
            var segments = TXLIVE.segments;
            var segment = segments[key];
            if (!segment) {
                segment = {
                    key: key,
                    source_string: text,
                    tags: [],
                    elements: []
                };
                segments[key] = segment
            }
            if (tags.length) mergeArrays(segment.tags, tags);
            segment.elements.push({
                segment: segment,
                node: node,
                pnode: node.parentNode,
                set: SET_TEXT,
                get: GET_TEXT,
                head: raw_text.indexOf(" ") === 0 ? " " : "",
                tail: raw_text.indexOf(" ", raw_text.length - 1) >= 0 ? " " : ""
            });
            try {
                node.txsegment = segment
            } catch (err) {}
            if (NEW_SEGMENTS_DICT) NEW_SEGMENTS_DICT[key] = segment
        }
    }

    function CRAWL_ATTR(node, attr, tags, options, string_group) {
        var raw_text = node.getAttribute(attr) ||
            "";
        var text = TXLIVE_PRIVATE.stripWhitespace(raw_text);
        if (text && text.length && !TXLIVE_PRIVATE.isNotTextualRegex.test(text)) {
            var key = TXLIVE_PRIVATE.md5(text + string_group);
            var segments = TXLIVE.segments;
            var segment = segments[key];
            if (!segment) {
                segment = {
                    key: key,
                    source_string: text,
                    tags: [],
                    elements: []
                };
                segments[key] = segment
            }
            if (tags.length) mergeArrays(segment.tags, tags);
            segment.elements.push({
                segment: segment,
                node: node,
                pnode: node.parentNode,
                set: SET_ATTR,
                get: GET_ATTR,
                attribute: attr,
                head: raw_text.indexOf(" ") ===
                    0 ? " " : "",
                tail: raw_text.indexOf(" ", raw_text.length - 1) >= 0 ? " " : ""
            });
            try {
                node.txsegment = segment
            } catch (err) {}
            if (NEW_SEGMENTS_DICT) NEW_SEGMENTS_DICT[key] = segment
        }
    }

    function DETECT_i18n_ATTR(node, options) {
        var list = [],
            i, a;
        switch (node.tagName) {
            case "A":
                list.push("title");
                if (PARSER_OPTIONS.isunset(options, PARSER_OPTIONS.URLS_AS_VARS)) list.push("href");
                break;
            case "IMG":
                list.push("title");
                list.push("alt");
                if (PARSER_OPTIONS.isunset(options, PARSER_OPTIONS.URLS_AS_VARS)) {
                    list.push("src");
                    list.push("srcset")
                }
                break;
            case "AREA":
                list.push("title");
                list.push("alt");
                list.push("href");
                break;
            case "META": {
                var name = node.getAttribute("name");
                if (name) {
                    name = name.toLowerCase();
                    if (name === "keywords" || name === "description" || name === "title" || name === "twitter:title" || name === "twitter:description") list.push("content")
                }
                var social_tags = node.getAttribute("property");
                if (social_tags) {
                    social_tags = social_tags.toLowerCase();
                    if (social_tags === "og:title" || social_tags === "og:description") list.push("content")
                }
                var googleplus_tags = node.getAttribute("itemprop");
                if (googleplus_tags) {
                    googleplus_tags = googleplus_tags.toLowerCase();
                    if (googleplus_tags === "name" || googleplus_tags === "description") list.push("content")
                }
                break
            }
            case "INPUT": {
                list.push("placeholder");
                var inputtype = node.getAttribute("type");
                if (inputtype) {
                    inputtype = inputtype.toLowerCase();
                    if (inputtype === "button" || inputtype === "reset" || inputtype === "submit") list.push("value");
                    else if (inputtype === "image") {
                        list.push("alt");
                        if (PARSER_OPTIONS.isunset(options, PARSER_OPTIONS.URLS_AS_VARS)) list.push("src")
                    }
                }
                break
            }
            case "TEXTAREA":
                list.push("placeholder");
                break
        }
        var custom_attr = node.getAttribute("tx-attrs");
        if (custom_attr && custom_attr.length) {
            custom_attr = custom_attr.split(",");
            i = custom_attr.length;
            while (i--) {
                a = custom_attr[i].trim().toLowerCase();
                if (a && list.indexOf(a) < 0) list.push(a)
            }
        }
        if (TXLIVE.settings.parse_attr) {
            var parse_attr = TXLIVE.settings.parse_attr;
            for (i = 0; i < parse_attr.length; ++i) {
                a = parse_attr[i];
                if (list.indexOf(a) < 0) list.push(a)
            }
        }
        return list
    }

    function PARSE_ATTR(node, tags, options, string_group) {
        if (node.txattr_detected === true) return;
        try {
            node.txattr_detected =
                true
        } catch (err) {}
        var attrs = DETECT_i18n_ATTR(node, options);
        for (var i = 0; i < attrs.length; ++i) CRAWL_ATTR(node, attrs[i], tags, options, string_group)
    }

    function IS_IN_DOCUMENT(node) {
        while (node = node.parentNode)
            if (node === document) return true;
        return false
    }

    function IS_SKIP_PARENT(node) {
        while (node) {
            if (node.nodeType === 1)
                if (isSkipTag(node.tagName) || isSkipClass(node.className) || isSkipAttr(node)) return true;
            node = node.parentNode
        }
        return false
    }

    function NODE_HOSTS_SHADOW_DOM(node) {
        return node.shadowRoot
    }

    function PARSE_DOM(node,
        parent_tags, options, parent_string_group, skip_trim_whitespaces) {
        if (node)
            if (!isSkipTag(node.tagName))
                if (node.nodeType === 3) {
                    if (PARSER_OPTIONS.isunset(options, PARSER_OPTIONS.DO_NOT_COLLECT)) CRAWL_TEXT(node, parent_tags, options, parent_string_group)
                } else if (node.nodeType === 1 && !isSkipClass(node.className)) {
            var tags = parent_tags;
            var tag_attr = node.getAttribute("tx-tags");
            if (tag_attr && tag_attr.length) {
                tags = parent_tags.slice(0);
                tag_attr = tag_attr.split(",");
                var i = tag_attr.length;
                while (i--) {
                    var a = tag_attr[i].trim().toLowerCase();
                    if (a && a.length && tags.indexOf(a) < 0) tags.push(a)
                }
            }
            var content_attr = node.getAttribute("tx-content"),
                is_block = false,
                _options = options;
            if (isBlockTag(node.tagName)) {
                _options = PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
                is_block = true
            }
            if (content_attr && content_attr.length) {
                content_attr = content_attr.toLowerCase();
                if (/\bexclude\b/.test(content_attr)) {
                    _options = PARSER_OPTIONS.set(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
                    is_block = false
                } else if (/\binclude\b/.test(content_attr)) _options = PARSER_OPTIONS.unset(_options,
                    PARSER_OPTIONS.DO_NOT_COLLECT);
                else if (/\bblock\b/.test(content_attr)) {
                    _options = PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
                    is_block = true
                }
                if (/\bnotranslate_urls\b/.test(content_attr)) {
                    _options = PARSER_OPTIONS.set(_options, PARSER_OPTIONS.URLS_AS_VARS);
                    is_block = false
                } else if (/\btranslate_urls\b/.test(content_attr)) {
                    _options = PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.URLS_AS_VARS);
                    is_block = false
                }
            }
            var string_group = node.getAttribute("tx-string-group");
            if (!string_group || !string_group.length)
                if (parent_string_group &&
                    parent_string_group.length) string_group = parent_string_group;
                else string_group = "";
            if (TXLIVE.settings.translate_urls)
                if (content_attr && content_attr.length) {
                    if (!/\bnotranslate_urls\b/.test(content_attr)) _options = PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.URLS_AS_VARS)
                } else _options = PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.URLS_AS_VARS);
            var _collect = PARSER_OPTIONS.isunset(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
            if (_collect) PARSE_ATTR(node, tags, _options, string_group);
            if (!is_block && node.childNodes.length) {
                var all_text_nodes =
                    true;
                for (var j = node.childNodes.length - 1; j >= 0; --j)
                    if (node.childNodes[j].nodeType !== 3) {
                        all_text_nodes = false;
                        break
                    } if (all_text_nodes) is_block = true
            }
            if (is_block) {
                if (_collect) CRAWL_BLOCK(node, tags, _options, string_group);
                if (NODE_HOSTS_SHADOW_DOM(node)) {
                    var shadowchildnode = node.shadowRoot.firstChild;
                    while (shadowchildnode) {
                        PARSE_DOM(shadowchildnode, tags, _options, string_group);
                        shadowchildnode = shadowchildnode.nextSibling
                    }
                }
            } else {
                var childnode = NODE_HOSTS_SHADOW_DOM(node) ? node.shadowRoot.firstChild : node.firstChild;
                if (node.tagName.toLowerCase() == "pre") skip_trim_whitespaces = true;
                while (childnode)
                    if (isBlockElement(childnode)) {
                        PARSE_DOM(childnode, tags, _options, string_group, skip_trim_whitespaces);
                        childnode = childnode.nextSibling
                    } else {
                        var nextnode = childnode.nextSibling;
                        if (!nextnode || nextnode && isBlockElement(nextnode)) {
                            PARSE_DOM(childnode, tags, _options, string_group, skip_trim_whitespaces);
                            childnode = childnode.nextSibling
                        } else {
                            var snode_before = childnode.previousSibling;
                            var snode_after = null;
                            var snode = childnode;
                            var has_text =
                                false,
                                has_databinding = false;
                            while (snode) {
                                if (isTextElement(snode) && snode.nodeValue && snode.nodeValue.trim().length) has_text = true;
                                else if (!TXLIVE.settings.ignore_databind && hasDataBinding(snode)) {
                                    has_databinding = true;
                                    break
                                } else if (isBlockElement(snode)) {
                                    snode_after = snode;
                                    break
                                }
                                snode = snode.nextSibling
                            }
                            if (!has_text || has_databinding)
                                while (childnode && childnode != snode_after) {
                                    PARSE_DOM(childnode, tags, _options, string_group, skip_trim_whitespaces);
                                    childnode = childnode.nextSibling
                                } else if (snode_before || snode_after) {
                                    if (_collect) CRAWL_FRAGMENT(snode_before,
                                        snode_after, tags, _options, string_group, skip_trim_whitespaces);
                                    childnode = snode_after
                                } else {
                                    if (_collect) CRAWL_BLOCK(node, tags, _options, string_group, skip_trim_whitespaces);
                                    childnode = null
                                }
                        }
                    }
            }
        }
    }

    function REMOVE_NODE(node, children) {
        if (!node) return;
        if (node.txsegment) {
            var elements = node.txsegment.elements;
            var j = elements.length;
            while (j--) {
                var item = elements[j];
                if (item.node == node) removeFromArray(elements, item)
            }
        }
        CLEAR_FLAGS_DOM(node, children)
    }

    function CLEAR_FLAGS_DOM(node, children) {
        if (!node) return;
        try {
            if (node.txbefore_detected) delete node.txbefore_detected;
            if (node.txafter_detected) delete node.txafter_detected;
            if (node.txblock_detected) delete node.txblock_detected;
            if (node.txtext_detected) delete node.txtext_detected;
            if (node.txattr_detected) delete node.txattr_detected;
            if (node.txsegment) delete node.txsegment
        } catch (err) {}
        if (children) {
            node = node.firstChild;
            while (node) {
                CLEAR_FLAGS_DOM(node, children);
                node = node.nextSibling
            }
        }
    }
    var LOCAL_TRANSLATION_STORAGE = {};
    var LAST_TRANSLATION_JSON = null;
    var LAST_TRANSLATION_LANG = null;
    TXLIVE.setLocale = function(langcode) {
        if (!langcode) return;
        try {
            document.getElementsByTagName("html")[0].setAttribute("lang", langcode.toLowerCase().replace("_", "-"));
            if (TXLIVE.settings.rtl_layout) {
                var dir = TXLIVE.getLanguageDirection(langcode);
                if (dir == "rtl" || dir == "ltr" && document.dir == "rtl") document.dir = dir
            }
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    };

    function resetSegments(langcode) {
        TXLIVE.setSelectedLanguageCode(langcode);
        TXLIVE.dynamicPageOff();
        callFunctionArray(TXLIVE.__onbeforetranslate);

        function revert(segments) {
            for (var key in segments) {
                var s = segments[key];
                var j = s.elements.length;
                while (j--) {
                    var item = s.elements[j];
                    try {
                        if (item.modified) {
                            item.set(item, s.source_string);
                            item.modified = false
                        }
                    } catch (err) {}
                }
                delete s.translation_string
            }
        }
        revert(TXLIVE.segments);
        var locquant_segment_list = TXLIVE.locquant_segment_list,
            index = locquant_segment_list.length;
        while (index--) {
            var s = locquant_segment_list[index];
            s.node.innerHTML = s.source_string
        }
        TXLIVE.setLocale(langcode);
        LAST_TRANSLATION_JSON = null;
        LAST_TRANSLATION_LANG = null;
        callFunctionArray(TXLIVE.__onaftertranslate);
        callFunctionArray(TXLIVE.__ontranslatepage,
            langcode);
        TXLIVE.dynamicPageOn()
    }

    function translateSegments(langcode, json) {
        TXLIVE.setSelectedLanguageCode(langcode);
        TXLIVE.dynamicPageOff();
        callFunctionArray(TXLIVE.__onbeforetranslate);
        var s, string, j, key, item;
        var segments = TXLIVE.segments;
        for (key in segments) {
            s = segments[key];
            string = json[key];
            j = s.elements.length;
            while (j--) {
                item = s.elements[j];
                try {
                    if (string) {
                        item.set(item, string);
                        item.modified = true
                    } else if (item.modified) {
                        item.set(item, s.source_string);
                        item.modified = false
                    }
                } catch (err) {
                    s.elements.splice(j,
                        1)
                }
            }
            s.translation_string = string || s.source_string
        }
        var locquant_segment_list = TXLIVE.locquant_segment_list,
            index = locquant_segment_list.length;
        while (index--) {
            s = locquant_segment_list[index];
            s.node.innerHTML = TXLIVE_PRIVATE.xssProtect(TXLIVE_PRIVATE.localize_locquant(s.type, s.source_string, s.format))
        }
        TXLIVE.setLocale(langcode);
        LAST_TRANSLATION_JSON = json;
        LAST_TRANSLATION_LANG = langcode;
        callFunctionArray(TXLIVE.__onaftertranslate);
        callFunctionArray(TXLIVE.__ontranslatepage, langcode);
        TXLIVE.dynamicPageOn()
    }
    var autocollect_queue = [],
        autocollect_processing = false;

    function autocollectConsume() {
        if (!TXLIVE.autocollect_ready || !autocollect_queue.length || autocollect_processing) return;
        var source_lang = TXLIVE.getSourceLanguageCode() || "";
        var target_lang = TXLIVE.getSelectedLanguageCode() || "";
        if (!TXLIVE_PRIVATE.manifest_ready) {
            setTimeout(autocollectConsume, 2E3);
            return
        }
        if (source_lang !== target_lang) {
            autocollect_queue.length = 0;
            return
        }
        var json = autocollect_queue.shift();
        autocollect_processing = true;
        TXLIVE.doCORSRequest(TXLIVE.settings.autocollect_url,
            "POST", JSON.stringify(json),
            function() {
                autocollect_processing = false;
                autocollectConsume()
            },
            function(err, status_code) {
                autocollect_processing = false;
                if (status_code !== 0 && status_code !== 404) TXLIVE.logger.error(err);
                autocollectConsume()
            })
    }

    function autoCollect(custom_segments) {
        if (TXLIVE_PRIVATE.extractDomain(TXLIVE.settings.domain) !== TXLIVE_PRIVATE.extractDomain(TXLIVE_PRIVATE.getWindowLocation().href) || TXLIVE_SIDEBAR.loaded || !TXLIVE.settings.has_session || !TXLIVE.settings.autocollect || TXLIVE.settings.autocollected &&
            !custom_segments) return;
        TXLIVE.settings.autocollected = !custom_segments;
        try {
            var segments = custom_segments || TXLIVE.segments,
                new_entities = {},
                refresh_ts = [],
                found = false,
                published_keys = LAST_TRANSLATION_JSON || {};
            for (var key in segments) {
                var s = segments[key];
                if (!s.source_string) continue;
                var collected = key in published_keys;
                if (collected) refresh_ts.push(key);
                else new_entities[key] = {
                    string: s.source_string,
                    tags: s.tags
                };
                found = true
            }
            if (!found) return;
            var json = {
                apikey: TXLIVE.settings.api_key,
                host: TXLIVE_PRIVATE.getWindowHost(),
                path: TXLIVE_PRIVATE.getWindowPath(),
                group: TXLIVE.group,
                staging: TXLIVE.settings.staging,
                lib_version: TXLIVE.lib_version,
                newstrings: new_entities,
                refresh_ts: refresh_ts
            };
            autocollect_queue.push(json);
            autocollectConsume()
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }
    var mutation_nodes = [],
        observer = null,
        mutators_initialized = false,
        mutators_on = false;

    function __proc_mutations__() {
        if (TXLIVE_PRIVATE.isGoogleTranslated()) {
            mutation_nodes = [];
            return
        }
        var node_list = [];
        for (var i = 0; i < mutation_nodes.length; ++i)
            if (IS_IN_DOCUMENT(mutation_nodes[i]))
                if (node_list.indexOf(mutation_nodes[i]) ==
                    -1) node_list.push(mutation_nodes[i]);
        mutation_nodes = [];
        if (node_list.length) TXLIVE.translateNodes(node_list)
    }

    function __dom_inserted_cb(e) {
        mutation_nodes.push(e.target);
        __proc_mutations__()
    }

    function __dom_removed_cb(e) {
        REMOVE_NODE(e.target)
    }

    function __observer_inserted_cb(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target) {
                if (mutation.removedNodes.length)
                    for (var i = 0; i < mutation.removedNodes.length; ++i) REMOVE_NODE(mutation.removedNodes[i], true);
                REMOVE_NODE(mutation.target);
                if (mutation.target.childNodes.length ||
                    mutation.type == "attributes") mutation_nodes.push(mutation.target);
                else if (isTextElement(mutation.target) && mutation.target.parentNode) {
                    REMOVE_NODE(mutation.target.parentNode);
                    mutation_nodes.push(mutation.target.parentNode)
                }
            }
        });
        if (mutation_nodes.length) __proc_mutations__()
    }
    TXLIVE.isDynamicPageOn = function() {
        return mutators_on
    };
    TXLIVE.dynamicPageOn = function() {
        if (!mutators_initialized || mutators_on) return;
        mutators_on = true;
        if (observer) {
            var attributeFilter = ["value", "placeholder", "title"];
            if (TXLIVE.settings.translate_urls) attributeFilter.push("href",
                "src", "srcset");
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true,
                attributeFilter: attributeFilter
            })
        } else {
            document.addEventListener("DOMNodeInserted", __dom_inserted_cb, false);
            document.addEventListener("DOMNodeRemoved", __dom_removed_cb, false)
        }
    };
    TXLIVE.dynamicPageOff = function() {
        if (!mutators_initialized || !mutators_on) return;
        mutators_on = false;
        if (observer) observer.disconnect();
        else {
            document.removeEventListener("DOMNodeInserted", __dom_inserted_cb);
            document.removeEventListener("DOMNodeRemoved",
                __dom_removed_cb)
        }
    };

    function __init_mutators__() {
        if (!TXLIVE.settings.dynamic) return;
        if (window.MutationObserver) observer = new MutationObserver(__observer_inserted_cb);
        mutators_initialized = true;
        TXLIVE.dynamicPageOn()
    }

    function __destroy_mutators__() {
        TXLIVE.dynamicPageOff();
        mutators_initialized = false;
        observer = null
    }
    TXLIVE.normalizeLangCode = function(langcode) {
        if (!langcode) return langcode;
        if (langcode === "zh-Hans" || langcode === "zh-Hant") return langcode;
        langcode = langcode.replace("-", "_");
        var extra = null,
            tokens,
            lang, country;
        if (langcode.indexOf("@") >= 0) {
            tokens = langcode.split("@");
            langcode = tokens[0];
            extra = tokens[1]
        }
        if (langcode.indexOf("_") >= 0) {
            tokens = langcode.split("_");
            lang = tokens[0].toLowerCase();
            country = tokens[1].toUpperCase();
            langcode = lang + "_" + country
        } else langcode = langcode.toLowerCase();
        if (extra) langcode += "@" + extra;
        return langcode
    };
    TXLIVE.hasTargetLanguage = function(langcode) {
        if (!TXLIVE.languages) return false;
        var languages = TXLIVE.languages;
        for (var i = 0; i < languages.translation.length; ++i)
            if (languages.translation[i].code ===
                langcode) return true;
        return false
    };
    TXLIVE.translateTo = function(langcode) {
        var bft_params = {
            lang_code: langcode,
            noop: false
        };
        callFunctionArray(TXLIVE.__onbeforetranslatepage, bft_params);
        if (bft_params.noop) return;
        try {
            if (!TXLIVE.languages) return;
            if (!langcode) {
                __ready__();
                return
            }
            var languages = TXLIVE.languages;
            if (TXLIVE.getSelectedLanguageCode() === langcode)
                if (languages.source.code === langcode && !LAST_TRANSLATION_LANG || LAST_TRANSLATION_LANG && LAST_TRANSLATION_JSON && LAST_TRANSLATION_LANG === langcode) {
                    TXLIVE_PRIVATE.language_views_tracked_onload =
                        true;
                    TXLIVE.trackLanguageView();
                    __ready__();
                    return
                } if (languages.source.code === langcode) {
                if (LAST_TRANSLATION_LANG) resetSegments(langcode);
                __ready__()
            } else {
                if (TXLIVE.isPageFiltered()) return __ready__();
                var lang_url = null;
                for (var i = 0; i < languages.translation.length; ++i)
                    if (languages.translation[i].code === langcode) {
                        lang_url = languages.translation[i].url;
                        break
                    } if (!lang_url && !LOCAL_TRANSLATION_STORAGE[langcode]) {
                    __ready__();
                    return
                }
                var json = LOCAL_TRANSLATION_STORAGE[langcode];
                if (json) {
                    translateSegments(langcode,
                        json);
                    __ready__()
                } else __loadlanguage__(langcode, lang_url, function(data) {
                    if (data) {
                        if (langcode === TXLIVE.getSelectedLanguageCode()) {
                            translateSegments(langcode, data);
                            __ready__()
                        }
                    } else __ready__()
                })
            }
            TXLIVE.setSelectedLanguageCode(langcode);
            TXLIVE_PRIVATE.storage_set("txlive:selectedlang", langcode);
            TXLIVE.trackLanguageView()
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    };
    TXLIVE.trackLanguageView = function(path) {
        if (TXLIVE.ready || TXLIVE_PRIVATE.manifest_ready) TXLIVE.callTelemetry(true, path)
    };
    TXLIVE.callTelemetry =
        function(shouldTrackLanguageView, path) {
            if (typeof shouldTrackLanguageView === "undefined") shouldTrackLanguageView = false;
            var data = {
                api_key: TXLIVE.settings.api_key,
                integration: TXLIVE.settings.integration || "live"
            };
            if (shouldTrackLanguageView) {
                data.lang_code = TXLIVE.getSelectedLanguageCode();
                data.path = path || window.location.pathname
            }
            TXLIVE.doCORSRequest(TXLIVE.settings.telemetry_url, "post", JSON.stringify({
                data: data
            }))
        };

    function setLanguages(languages) {
        try {
            if (!languages || !languages.timestamp || !languages.translation ||
                !languages.source) return;
            if (TXLIVE.languages && TXLIVE.languages.timestamp === languages.timestamp) {
                setupPicker();
                return
            }
            if (isString(languages.translation)) try {
                languages.translation = JSON.parse(languages.translation) || []
            } catch (err) {
                TXLIVE.logger.error(err);
                languages.translation = []
            }
            TXLIVE.denormalized_languages = [{
                name: languages.source.name,
                code: languages.source.code,
                source: true
            }];
            for (var i = 0; i < languages.translation.length; ++i) TXLIVE.denormalized_languages.push({
                name: languages.translation[i].name,
                code: languages.translation[i].code
            });
            TXLIVE.languages = languages;
            var selected_lang = TXLIVE.getSelectedLanguageCode();
            if (selected_lang && languages.source.code !== selected_lang && !TXLIVE.hasTargetLanguage(selected_lang)) resetSegments(languages.source.code);
            TXLIVE.setSelectedLanguageCode(languages.source.code);
            callFunctionArray(TXLIVE.__onfetchlanguages, TXLIVE.denormalized_languages);
            setupPicker()
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }
    TXLIVE.isPageFiltered = function() {
        return TXLIVE.settings && TXLIVE.settings.filters && TXLIVE_PRIVATE.ignorePath(TXLIVE.settings.filters,
            window.location.pathname)
    };
    TXLIVE.detectLanguage = function() {
        try {
            var detect_lang = TXLIVE.settings.detectlang,
                code;
            if (detect_lang && isFunction(detect_lang)) {
                detect_lang = detect_lang();
                if (detect_lang !== true && detect_lang !== false) return detect_lang
            }
            if (!detect_lang) return TXLIVE_PRIVATE.storage_get("txlive:selectedlang");
            var url = TXLIVE_PRIVATE.getWindowLocation().href.split("?");
            if (url.length == 2) {
                var params = url[1].split("&");
                for (var i = 0; i < params.length; ++i) {
                    var keyvalue = params[i].split("=");
                    if (keyvalue.length ==
                        2 && keyvalue[0].toLowerCase() == "lang") {
                        code = TXLIVE.normalizeLangCode(keyvalue[1]);
                        if (TXLIVE.hasLanguageCode(code)) return code;
                        break
                    }
                }
            }
            url = TXLIVE_PRIVATE.getWindowLocation().host.split(".");
            if (url.length > 0) {
                code = TXLIVE.normalizeLangCode(url[0]);
                if (TXLIVE.hasLanguageCode(code)) return code
            }
            url = TXLIVE_PRIVATE.getWindowLocation().pathname.split("/");
            if (url.length > 1) {
                code = TXLIVE.normalizeLangCode(url[1]);
                if (TXLIVE.hasLanguageCode(code)) return code
            }
            return TXLIVE_PRIVATE.storage_get("txlive:selectedlang") ||
                TXLIVE_PRIVATE.getBrowserLocale()
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    };
    TXLIVE.getLanguageName = function(langcode) {
        try {
            if (!TXLIVE.denormalized_languages) return;
            var d = TXLIVE.denormalized_languages;
            for (var i = 0; i < d.length; ++i)
                if (d[i].code === langcode) return d[i].name
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    };
    TXLIVE.hasLanguageCode = function(langcode) {
        try {
            var i;
            if (!TXLIVE.denormalized_languages) {
                if (TXLIVE_PRIVATE.manifest && TXLIVE_PRIVATE.manifest.languages && TXLIVE_PRIVATE.manifest.languages.translation) {
                    var languages =
                        TXLIVE_PRIVATE.manifest.languages.translation;
                    for (i = 0; i < languages.length; ++i)
                        if (languages[i].code === langcode) return true
                }
                return false
            }
            var d = TXLIVE.denormalized_languages;
            for (i = 0; i < d.length; ++i)
                if (d[i].code === langcode) return true;
            return false
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    };
    TXLIVE.getLanguageDirection = function(langcode) {
        if (!TXLIVE.languages) return;
        if (TXLIVE.languages.source.code == langcode) return TXLIVE.languages.source.rtl ? "rtl" : "ltr";
        for (var i = 0; i < TXLIVE.languages.translation.length; ++i) {
            var lang =
                TXLIVE.languages.translation[i];
            if (lang.code == langcode) return lang.rtl ? "rtl" : "ltr"
        }
    };
    TXLIVE.matchLanguageCode = function(fuzzy_langcode) {
        try {
            if (!TXLIVE.denormalized_languages) return;

            function stripCode(code) {
                code = code || "";
                if (code.indexOf("-") >= 0) code = code.split("-")[0];
                else if (code.indexOf("_") >= 0) code = code.split("_")[0];
                return code.toLowerCase()
            }
            fuzzy_langcode = stripCode(fuzzy_langcode);
            var d = TXLIVE.denormalized_languages;
            for (var i = 0; i < d.length; ++i)
                if (stripCode(d[i].code) === fuzzy_langcode) return d[i].code
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    };
    TXLIVE.getAllLanguages = function() {
        return TXLIVE.denormalized_languages
    };
    TXLIVE.getSourceLanguage = function() {
        if (TXLIVE.languages) return TXLIVE.languages.source
    };
    TXLIVE.getSourceLanguageCode = function() {
        if (TXLIVE.languages && TXLIVE.languages.source) return TXLIVE.languages.source.code;
        return TXLIVE.__source_language_code
    };
    TXLIVE.getSelectedLanguageCode = function() {
        return TXLIVE.selected_lang
    };
    TXLIVE.setSelectedLanguageCode = function(lang_code) {
        if (TXLIVE.selected_lang === lang_code) return;
        TXLIVE.selected_lang =
            lang_code || "";
        var elem = document.getElementById("tx-live-lang-current");
        if (elem) elem.innerHTML = TXLIVE_PRIVATE.xssProtect(TXLIVE.getLanguageName(lang_code))
    };
    TXLIVE.onBeforeTranslatePage = function(fcall) {
        TXLIVE.__onbeforetranslatepage = TXLIVE.__onbeforetranslatepage || [];
        TXLIVE.__onbeforetranslatepage.push(fcall)
    };
    TXLIVE.onTranslatePage = function(fcall) {
        TXLIVE.__ontranslatepage = TXLIVE.__ontranslatepage || [];
        TXLIVE.__ontranslatepage.push(fcall);
        if (LAST_TRANSLATION_LANG && fcall) callFunctionArray([fcall], LAST_TRANSLATION_LANG)
    };
    TXLIVE.onFetchLanguages = function(fcall) {
        TXLIVE.__onfetchlanguages = TXLIVE.__onfetchlanguages || [];
        TXLIVE.__onfetchlanguages.push(fcall);
        if (TXLIVE.languages && fcall) callFunctionArray([fcall], TXLIVE.denormalized_languages)
    };
    TXLIVE.onDynamicContent = function(fcall) {
        TXLIVE.__ondynamiccontent = TXLIVE.__ondynamiccontent || [];
        TXLIVE.__ondynamiccontent.push(fcall)
    };
    TXLIVE.onError = function(fcall) {
        TXLIVE.__onerror = TXLIVE.__onerror || [];
        TXLIVE.__onerror.push(fcall)
    };
    TXLIVE.onReady = function(fcall) {
        if (TXLIVE.ready &&
            fcall) callFunctionArray([fcall], TXLIVE.load_msec);
        else {
            TXLIVE.__onready = TXLIVE.__onready || [];
            TXLIVE.__onready.push(fcall)
        }
    };
    TXLIVE.onBeforeTranslate = function(fcall) {
        TXLIVE.__onbeforetranslate = TXLIVE.__onbeforetranslate || [];
        TXLIVE.__onbeforetranslate.push(fcall)
    };
    TXLIVE.onAfterTranslate = function(fcall) {
        TXLIVE.__onaftertranslate = TXLIVE.__onaftertranslate || [];
        TXLIVE.__onaftertranslate.push(fcall)
    };
    TXLIVE.unBind = function(fcall) {
        removeFromFunctionArray(TXLIVE.__onready, fcall);
        removeFromFunctionArray(TXLIVE.__onerror,
            fcall);
        removeFromFunctionArray(TXLIVE.__ondynamiccontent, fcall);
        removeFromFunctionArray(TXLIVE.__onfetchlanguages, fcall);
        removeFromFunctionArray(TXLIVE.__onbeforetranslatepage, fcall);
        removeFromFunctionArray(TXLIVE.__ontranslatepage, fcall);
        removeFromFunctionArray(TXLIVE.__onbeforetranslate, fcall);
        removeFromFunctionArray(TXLIVE.__onaftertranslate, fcall)
    };
    TXLIVE.translateNodes = function(node_array) {
        TXLIVE.dynamicPageOff();
        callFunctionArray(TXLIVE.__onbeforetranslate);
        NEW_SEGMENTS_DICT = {};
        var i, j, key,
            s, string, item;
        for (i = 0; i < node_array.length; ++i) {
            var node = node_array[i];
            try {
                if (!IS_SKIP_PARENT(node)) PARSE_DOM(node, [], PARSER_OPTIONS.DEFAULT, "")
            } catch (err) {
                TXLIVE.logger.error(err)
            }
        }
        var new_segments = [];
        for (key in NEW_SEGMENTS_DICT) new_segments.push(NEW_SEGMENTS_DICT[key]);
        if (new_segments.length) {
            if (LAST_TRANSLATION_JSON) {
                var json = LAST_TRANSLATION_JSON;
                i = new_segments.length;
                while (i--) {
                    s = new_segments[i];
                    string = json[s.key];
                    j = s.elements.length;
                    while (j--) {
                        item = s.elements[j];
                        try {
                            if (string) {
                                item.set(item,
                                    string);
                                item.modified = true
                            } else if (item.modified) {
                                item.set(item, s.source_string);
                                item.modified = false
                            }
                        } catch (err) {
                            s.elements.splice(j, 1)
                        }
                    }
                    s.translation_string = string || s.source_string
                }
            }
            callFunctionArray(TXLIVE.__ondynamiccontent, new_segments);
            autoCollect(NEW_SEGMENTS_DICT)
        }
        NEW_SEGMENTS_DICT = null;
        callFunctionArray(TXLIVE.__onaftertranslate);
        TXLIVE.dynamicPageOn()
    };
    TXLIVE.translateNode = function(node) {
        TXLIVE.translateNodes([node])
    };
    var timer_translate_text = null;
    var autocollect_translate_text = {};

    function autocollect_translate_text_cb() {
        timer_translate_text =
            null;
        autoCollect(autocollect_translate_text);
        autocollect_translate_text = {}
    }

    function translate_text_params(text, params) {
        if (params)
            for (var key in params) text = text.replace(new RegExp("\\{" + key + "\\}", "g"), params[key]);
        return text
    }
    TXLIVE.translateText = function(text, params) {
        if (!text || !text.length) return text;
        var key = TXLIVE_PRIVATE.md5(text);
        if (LAST_TRANSLATION_JSON && LAST_TRANSLATION_JSON[key]) return translate_text_params(LAST_TRANSLATION_JSON[key], params);
        var segments = TXLIVE.segments;
        var segment = segments[key];
        if (!segment) {
            segment = {
                key: key,
                source_string: text,
                tags: ["api"],
                elements: []
            };
            segments[key] = segment;
            callFunctionArray(TXLIVE.__ondynamiccontent, [segment]);
            autocollect_translate_text[key] = segment;
            if (timer_translate_text) clearTimeout(timer_translate_text);
            timer_translate_text = setTimeout(autocollect_translate_text_cb, 1E3)
        }
        return translate_text_params(text, params)
    };
    TXLIVE.setTranslations = function(json) {
        if (!json || !json.source || !json.translation) return;
        json.timestamp = Date.now();
        for (var i = 0; i < json.translation.length; ++i) {
            var translation =
                json.translation[i];
            if (translation.code && translation.translations) LOCAL_TRANSLATION_STORAGE[translation.code] = translation.translations
        }
        setLanguages(json);
        if (TXLIVE.traverse_ready) TXLIVE.translateTo(TXLIVE.normalizeLangCode(TXLIVE.detectLanguage()))
    };
    TXLIVE_PRIVATE.translateFromJSON = function(lang_code, translations, merge) {
        if (!lang_code) return;
        translations = translations || {};
        if (merge && LOCAL_TRANSLATION_STORAGE[lang_code]) {
            var existing = LOCAL_TRANSLATION_STORAGE[lang_code];
            for (var key in translations) existing[key] =
                translations[key]
        } else LOCAL_TRANSLATION_STORAGE[lang_code] = translations;
        translateSegments(lang_code, LOCAL_TRANSLATION_STORAGE[lang_code])
    };
    TXLIVE_PRIVATE.revertToSource = function(lang_code) {
        resetSegments(lang_code)
    };
    TXLIVE_PRIVATE.useSourceLanguageCode = function(lang_code) {
        TXLIVE.__source_language_code = lang_code
    };
    TXLIVE_PRIVATE.parseHTMLBlock = function(html) {
        var root = document.createElement("div");
        root.innerHTML = html;
        NEW_SEGMENTS_DICT = {};
        try {
            PARSE_DOM(root, [], PARSER_OPTIONS.DEFAULT, "")
        } catch (err) {
            TXLIVE.logger.error(err)
        }
        var segments =
            NEW_SEGMENTS_DICT;
        NEW_SEGMENTS_DICT = null;
        return {
            root: root,
            segments: segments
        }
    };
    TXLIVE.segmentHTML = function(html, as_key_value_json) {
        var segments = TXLIVE_PRIVATE.parseHTMLBlock(html).segments;
        var json = {},
            key;
        if (as_key_value_json)
            for (key in segments) json[key] = segments[key].source_string;
        else
            for (key in segments) {
                var segment = segments[key];
                json[key] = {
                    source_string: segment.source_string,
                    tags: segment.tags
                }
            }
        return json
    };
    TXLIVE.translateHTML = function(html, translations) {
        var parsed_content = TXLIVE_PRIVATE.parseHTMLBlock(html);
        var segments = parsed_content.segments;
        translations = translations || LAST_TRANSLATION_JSON;
        if (translations)
            for (var key in segments) {
                var s = segments[key];
                var string = translations[s.key];
                if (!string) continue;
                var j = s.elements.length;
                while (j--) {
                    var item = s.elements[j];
                    try {
                        item.set(item, string)
                    } catch (err) {}
                }
            }
        return parsed_content.root.innerHTML
    };
    TXLIVE_PRIVATE.extractDomain = function(url) {
        if (!url) return "";
        var domain;
        if (url.indexOf("://") > -1) domain = url.split("/")[2];
        else domain = url.split("/")[0];
        return domain
    };
    TXLIVE.group =
        TXLIVE_PRIVATE.md5(document.title || "default");
    try {
        var metas = document.getElementsByTagName("meta");
        for (i = 0; i < metas.length; ++i) {
            var group = metas[i].getAttribute("txlive-group");
            if (group && group.length) {
                TXLIVE.group = TXLIVE_PRIVATE.md5(group);
                break
            }
        }
    } catch (err) {
        TXLIVE.logger.error(err)
    }
    TXLIVE.version = "latest";
    TXLIVE.selected_lang = "";
    TXLIVE.segments = {};
    TXLIVE.locquant_segment_list = [];

    function __ready__() {
        if (TXLIVE.ready) return;
        TXLIVE.ready = true;
        showDom();
        autoCollect();
        try {
            TXLIVE.load_msec = (new Date).getTime() -
                benchmark
        } catch (err) {}
        callFunctionArray(TXLIVE.__onready, TXLIVE.load_msec);
        TXLIVE.__onready = null;
        if (TXLIVE.settings.prerender) window.prerenderReady = true;
        if (TXLIVE_SIDEBAR.shouldOpen()) {
            TXLIVE_SIDEBAR.patchJSON();
            TXLIVE_SIDEBAR.load();
            TXLIVE_SIDEBAR.setCookie(TXLIVE_SIDEBAR.__cookie.key, TXLIVE_SIDEBAR.__cookie.value, TXLIVE_SIDEBAR.__cookie.timeout)
        }
    }
    TXLIVE_SIDEBAR.__cookie = {
        key: "transifex_sidebar",
        value: "true",
        timeout: 8
    };
    TXLIVE_SIDEBAR.setCookie = function(name, value, hours) {
        var expires = "",
            sameSite = "";
        if (hours) {
            var date = new Date;
            date.setTime(date.getTime() + hours * 60 * 60 * 1E3);
            expires = "; expires=" + date.toGMTString()
        }
        if (window.location.href.indexOf("https://") === 0) sameSite = " SameSite=None; Secure;";
        document.cookie = name + "=" + value + expires + "; path=/;" + sameSite
    };
    TXLIVE_SIDEBAR.getCookie = function(name) {
        var nameEQ = name + "=";
        var cookie_values = document.cookie.split(";");
        for (var i = 0; i < cookie_values.length; i++) {
            var value = cookie_values[i].trim();
            if (value.indexOf(nameEQ) == 0) return value.substring(nameEQ.length,
                value.length)
        }
    };
    TXLIVE_SIDEBAR.delCookie = function(name) {
        TXLIVE_SIDEBAR.setCookie(name, "", -1)
    };
    TXLIVE_SIDEBAR.shouldOpen = function() {
        if (!TXLIVE.settings.api_key && !TXLIVE.settings.mode) return false;
        var cookie_dict = TXLIVE_SIDEBAR.__cookie;
        if (TXLIVE.settings.sidebar || TXLIVE_SIDEBAR.getCookie(cookie_dict.key) === cookie_dict.value) return true;
        var params = TXLIVE_SIDEBAR.getLocationParams();
        for (var key in params)
            if (key.toLowerCase() === SIDEBAR_URL_TRIGGER) return true;
        return false
    };
    TXLIVE_SIDEBAR.getLocationParams =
        function() {
            var search_string = TXLIVE_PRIVATE.getWindowLocation().search.substr(1);
            var params_array = search_string.split("&");
            var return_value = {};
            for (var i = 0; i < params_array.length; i++) {
                var param_string = params_array[i];
                if (param_string.indexOf("=") != -1) {
                    var param_string_split = param_string.split("=");
                    var key = param_string_split[0],
                        value = param_string_split[1];
                    return_value[key] = value
                } else return_value[param_string] = null
            }
            return return_value
        };
    TXLIVE_SIDEBAR.load = function(callback) {
        if (TXLIVE_SIDEBAR.loaded) return;
        TXLIVE_SIDEBAR.loaded = true;
        var sidebar_url = TXLIVE.settings.sidebar_base_url + "/_/live/sidebar/?lang=" + TXLIVE.settings.sidebar_lang + "&apikey=" + TXLIVE.settings.api_key;
        if (TXLIVE.settings.mode) sidebar_url += "&mode=" + TXLIVE.settings.mode;
        TXLIVE.doCORSRequest(sidebar_url, "GET", "", function(html) {
            var div = document.createElement("div");
            div.innerHTML = html;
            var scripts = [].slice.call(div.getElementsByTagName("script"));
            var i;
            for (i = scripts.length; i--;)
                if (scripts[i].getAttribute("type") === "text/javascript" || scripts[i].getAttribute("type") ===
                    null) scripts[i].parentNode.removeChild(scripts[i]);
                else scripts.splice(i, 1);
            var links = [].slice.call(div.getElementsByTagName("link")),
                head = document.head || document.getElementsByTagName("head")[0];
            for (i = links.length; i--;) {
                var rel = links[i].getAttribute("rel"),
                    href = links[i].getAttribute("href");
                if (href && rel && rel.indexOf("stylesheet") >= 0) links[i].setAttribute("href", TXLIVE.assetUrl(href, TXLIVE.settings.assets_base_url));
                head.appendChild(links[i].parentNode.removeChild(links[i]))
            }
            while (div.firstChild) {
                var child =
                    div.firstChild;
                div.removeChild(child);
                document.body.appendChild(child)
            }

            function consume_scripts() {
                var script = scripts.shift();
                if (!script) {
                    if (callback) callback();
                    return
                }
                var url = script.getAttribute("src");
                if (url) TXLIVE.loadScript(TXLIVE.assetUrl(url, TXLIVE.settings.assets_base_url), consume_scripts, script.innerHTML, script.attributes);
                else {
                    TXLIVE.loadScript(null, null, script.innerHTML, script.attributes);
                    consume_scripts()
                }
            }
            consume_scripts()
        })
    };
    TXLIVE_SIDEBAR.patchJSON = function() {
        TXLIVE_PRIVATE._json_stringify =
            JSON.stringify;
        JSON.stringify = function(value, replacer, spacer) {
            if (Array.prototype.toJSON !== undefined) {
                var _array_tojson = Array.prototype.toJSON;
                delete Array.prototype.toJSON;
                var r = TXLIVE_PRIVATE._json_stringify(value, replacer, spacer);
                Array.prototype.toJSON = _array_tojson;
                return r
            } else return TXLIVE_PRIVATE._json_stringify(value, replacer, spacer)
        }
    };
    TXLIVE_PRIVATE.getXPath = function(element) {
        var paths = [];
        for (; element && (element.nodeType == 1 || element.nodeType == 3); element = element.parentNode) {
            var index = 0;
            for (var sibling =
                    element.previousSibling; sibling; sibling = sibling.previousSibling) {
                if (sibling.nodeType == 10) continue;
                if (sibling.nodeName == element.nodeName) ++index
            }
            var tagName = element.nodeName.toLowerCase();
            var pathIndex = "[" + (index + 1) + "]";
            paths.unshift(tagName + pathIndex)
        }
        return paths.length ? "/" + paths.join("/") : null
    };
    TXLIVE_PRIVATE.getSegmentsXPaths = function() {
        var xpaths = {};
        for (var key in TXLIVE.segments) {
            var segment = TXLIVE.segments[key];
            for (var j = 0; j < segment.elements.length; ++j) {
                var xpath = TXLIVE_PRIVATE.getXPath(segment.elements[j].node);
                if (xpath) xpaths[xpath] = segment.key
            }
        }
        return xpaths
    };

    function __traverseready__() {
        if (TXLIVE.traverse_ready) return;
        TXLIVE.traverse_ready = true;
        var i, key, tag;
        try {
            SKIP_TAGS_USER = {};
            if (TXLIVE.settings.ignore_tags && TXLIVE.settings.ignore_tags.length)
                for (i = 0; i < TXLIVE.settings.ignore_tags.length; ++i) {
                    tag = TXLIVE.settings.ignore_tags[i];
                    if (tag.length) SKIP_TAGS_USER[tag] = true
                }
        } catch (err) {
            TXLIVE.logger.error(err)
        }
        try {
            if (TXLIVE.settings.enable_tags && TXLIVE.settings.enable_tags.length)
                for (i = 0; i < TXLIVE.settings.enable_tags.length; ++i) {
                    tag =
                        TXLIVE.settings.enable_tags[i];
                    if (tag.length) {
                        delete SKIP_TAGS[tag];
                        delete SKIP_TAGS_USER[tag]
                    }
                }
        } catch (err) {
            TXLIVE.logger.error(err)
        }
        try {
            SKIP_CLASS_USER = {};
            if (TXLIVE.settings.ignore_class && TXLIVE.settings.ignore_class.length)
                for (i = 0; i < TXLIVE.settings.ignore_class.length; ++i) {
                    var cls = TXLIVE.settings.ignore_class[i];
                    if (cls.length) SKIP_CLASS_USER[cls] = true
                }
        } catch (err) {
            TXLIVE.logger.error(err)
        }
        try {
            for (key in TXLIVE.segments) delete TXLIVE.segments[key];
            TXLIVE.locquant_segment_list.splice(0, TXLIVE.locquant_segment_list.length);
            PARSE_DOM(document.head || document.getElementsByTagName("head")[0], [], PARSER_OPTIONS.DEFAULT, "");
            PARSE_DOM(document.body || document.getElementsByTagName("body")[0], [], PARSER_OPTIONS.DEFAULT, "")
        } catch (err) {
            TXLIVE.logger.error(err)
        }
        try {
            __init_mutators__()
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }

    function __reload__() {
        var previous_lang = null;
        if (LAST_TRANSLATION_JSON) {
            previous_lang = LAST_TRANSLATION_LANG;
            var source_lang = TXLIVE.getSourceLanguage();
            if (source_lang && source_lang.code) TXLIVE.translateTo(source_lang.code)
        }
        __destroy_mutators__();
        TXLIVE.traverse_ready = false;
        CLEAR_FLAGS_DOM(document.head || document.getElementsByTagName("head")[0], true);
        CLEAR_FLAGS_DOM(document.body || document.getElementsByTagName("body")[0], true);
        __traverseready__();
        if (previous_lang) TXLIVE.translateTo(previous_lang)
    }

    function __loadManifest__() {
        if (TXLIVE_PRIVATE._load_manifest) return;
        setSettings(window.liveSettings, true);
        setSettings(window.proxyLiveSettings, true);
        if (!TXLIVE.settings.api_key || TXLIVE.live_noop) return;
        TXLIVE_PRIVATE._load_manifest = true;
        if (TXLIVE.settings.version) TXLIVE.version =
            TXLIVE.settings.version;
        var base_url = (TXLIVE.settings.cdn || "//cdn.transifex.com/") + TXLIVE.settings.api_key + "/" + TXLIVE.version;
        window.transifex_manifest = function(manifest) {
            if (!manifest) {
                TXLIVE.logger.error("Empty manifest");
                TXLIVE_PRIVATE.manifest = {};
                __init__();
                return
            }
            var settings = manifest.settings,
                languages = manifest.languages;
            if (settings) {
                if (window.liveSettings.staging === undefined) TXLIVE.settings.staging = (settings.staging.domain || "").toLowerCase() === TXLIVE_PRIVATE.getWindowHost().toLowerCase();
                var _filters =
                    settings.filters;
                settings = TXLIVE.settings.staging ? settings.staging : settings.production;
                settings.filters = _filters
            } else TXLIVE.logger.error("Empty manifest.settings");
            if (languages) languages = TXLIVE.settings.staging ? languages.staging : languages.production;
            else TXLIVE.logger.error("Empty manifest.languages");
            TXLIVE_PRIVATE.manifest = {
                settings: settings,
                languages: languages
            };
            if (!TXLIVE_PRIVATE._domready && languages && languages.translation) {
                var detected_langcode = TXLIVE.normalizeLangCode(TXLIVE.detectLanguage());
                if (detected_langcode)
                    for (var i = 0; i < languages.translation.length; ++i)
                        if (languages.translation[i].code === detected_langcode) {
                            __loadlanguage__(detected_langcode, languages.translation[i].url, function(data) {
                                __init__()
                            });
                            return
                        }
            }
            TXLIVE_PRIVATE.manifest_ready = true;
            __init__()
        };
        TXLIVE.loadScript(base_url + "/manifest.jsonp", function() {
            if (!TXLIVE_PRIVATE.manifest) {
                TXLIVE_PRIVATE.manifest = {};
                __init__()
            }
        })
    }

    function __loadlanguage__(langcode, url, callback) {
        var lang_loaded = false;
        window["transifex_lang_" + TXLIVE_PRIVATE.escapeLanguageCode(langcode)] =
            function(data) {
                lang_loaded = true;
                callback(data)
            };
        TXLIVE.loadScript(url, function() {
            if (!lang_loaded && TXLIVE.__onerror) callFunctionArray(TXLIVE.__onerror, "[ERR2] Cannot load translation url: " + url);
            if (!lang_loaded && callback) callback()
        })
    }

    function __ping_telemetry__() {
        if (TXLIVE.settings.wp) TXLIVE.settings.integration = "wordpress";
        var shouldPing = false;
        if (TXLIVE.settings.ping_telemetry && TXLIVE.settings.api_key && TXLIVE.settings.has_storage) {
            var lastPing = TXLIVE_PRIVATE.storage_get("telemetry_ping");
            if (lastPing) {
                lastPing =
                    parseInt(lastPing, 10);
                if (!Number.isNaN(lastPing)) {
                    var now = (new Date).getTime();
                    shouldPing = now - lastPing > 3 * 60 * 60 * 1E3
                } else shouldPing = true
            } else shouldPing = true
        }
        if (shouldPing) {
            TXLIVE.callTelemetry();
            TXLIVE_PRIVATE.storage_set("telemetry_ping", "" + now)
        }
    }

    function __init__() {
        if (!TXLIVE_PRIVATE._domready) return;
        try {
            benchmark = (new Date).getTime()
        } catch (err) {}
        if (TXLIVE.settings.prerender && !TXLIVE.ready) window.prerenderReady = false;
        if (!TXLIVE.settings.api_key || TXLIVE.live_noop) {
            __traverseready__();
            __ready__();
            return
        }
        var settings = TXLIVE_PRIVATE.storage_get(TXLIVE_PRIVATE.apiScopedKey("txlive:settings")),
            languages = TXLIVE_PRIVATE.storage_get(TXLIVE_PRIVATE.apiScopedKey("txlive:languages")),
            manifest = TXLIVE_PRIVATE.manifest,
            reload = false,
            has_previous = settings && languages,
            has_sidebar = TXLIVE_SIDEBAR.shouldOpen();
        if (!has_previous && !manifest) return;
        if (manifest) {
            if (manifest.settings) {
                TXLIVE_PRIVATE.storage_set(TXLIVE_PRIVATE.apiScopedKey("txlive:settings"), manifest.settings);
                if (settings) try {
                    if (JSON.stringify(settings) !==
                        JSON.stringify(manifest.settings)) reload = true
                } catch (err) {
                    TXLIVE.logger.error(err)
                }
            }
            if (manifest.languages) TXLIVE_PRIVATE.storage_set(TXLIVE_PRIVATE.apiScopedKey("txlive:languages"), manifest.languages);
            settings = manifest.settings || settings;
            languages = manifest.languages || languages
        }
        if (settings && languages) {
            setSettings(settings);
            if (reload) __reload__();
            else __traverseready__();
            if (!has_sidebar) {
                setLanguages(languages);
                if (TXLIVE.languages) TXLIVE.translateTo(TXLIVE.normalizeLangCode(TXLIVE.detectLanguage()));
                else __ready__()
            } else __ready__()
        } else if (manifest) {
            __traverseready__();
            __ready__()
        }
        __ping_telemetry__()
    }
    TXLIVE.init = function() {
        TXLIVE_PRIVATE._domready = true;
        __loadManifest__();
        __init__()
    };
    bindReady(function() {
        if (!TXLIVE.settings.manual_init) TXLIVE.init()
    });
    bindLoad(function() {
        TXLIVE.autocollect_ready = true;
        autocollectConsume()
    });
    bindNavigate(function(url) {
        if (!TXLIVE_PRIVATE.language_views_tracked_onload && url) TXLIVE.trackLanguageView(url);
        TXLIVE_PRIVATE.language_views_tracked_onload = false
    });
    setTimeout(__loadManifest__,
        0)
})();
