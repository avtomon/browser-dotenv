!function (n) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).dotenv = n()
    }
}(function () {
    return function () {
        return function n(r, e, t) {
            function i(u, c) {
                if (!e[u]) {
                    if (!r[u]) {
                        var f = "function" == typeof require && require;
                        if (!c && f) return f(u, !0);
                        if (o) return o(u, !0);
                        var s = new Error("Cannot find module '" + u + "'");
                        throw s.code = "MODULE_NOT_FOUND", s
                    }
                    var l = e[u] = {
                        exports: {}
                    };
                    r[u][0].call(l.exports, function (n) {
                        return i(r[u][1][n] || n)
                    }, l, l.exports, n, r, e, t)
                }
                return e[u].exports
            }

            for (var o = "function" == typeof require && require, u = 0; u < t.length; u++) i(t[u]);
            return i
        }
    }()({
        1: [function (n, r, e) {
        }, {}],
        2: [function (n, r, e) {
            (function (n) {
                function r(n, r) {
                    for (var e = 0, t = n.length - 1; t >= 0; t--) {
                        var i = n[t];
                        "." === i ? n.splice(t, 1) : ".." === i ? (n.splice(t, 1), e++) : e && (n.splice(t, 1), e--)
                    }
                    if (r)
                        for (; e--; e) n.unshift("..");
                    return n
                }

                function t(n, r) {
                    if (n.filter) return n.filter(r);
                    for (var e = [], t = 0; t < n.length; t++) r(n[t], t, n) && e.push(n[t]);
                    return e
                }

                e.resolve = function () {
                    for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                        var u = o >= 0 ? arguments[o] : n.cwd();
                        if ("string" != typeof u) throw new TypeError("Arguments to path.resolve must be strings");
                        u && (e = u + "/" + e, i = "/" === u.charAt(0))
                    }
                    return (i ? "/" : "") + (e = r(t(e.split("/"), function (n) {
                        return !!n
                    }), !i).join("/")) || "."
                }, e.normalize = function (n) {
                    var o = e.isAbsolute(n),
                        u = "/" === i(n, -1);
                    return (n = r(t(n.split("/"), function (n) {
                        return !!n
                    }), !o).join("/")) || o || (n = "."), n && u && (n += "/"), (o ? "/" : "") + n
                }, e.isAbsolute = function (n) {
                    return "/" === n.charAt(0)
                }, e.join = function () {
                    var n = Array.prototype.slice.call(arguments, 0);
                    return e.normalize(t(n, function (n, r) {
                        if ("string" != typeof n) throw new TypeError("Arguments to path.join must be strings");
                        return n
                    }).join("/"))
                }, e.relative = function (n, r) {
                    function t(n) {
                        for (var r = 0; r < n.length && "" === n[r]; r++) ;
                        for (var e = n.length - 1; e >= 0 && "" === n[e]; e--) ;
                        return r > e ? [] : n.slice(r, e - r + 1)
                    }

                    n = e.resolve(n).substr(1), r = e.resolve(r).substr(1);
                    for (var i = t(n.split("/")), o = t(r.split("/")), u = Math.min(i.length, o.length), c = u, f = 0; f < u; f++)
                        if (i[f] !== o[f]) {
                            c = f;
                            break
                        }
                    var s = [];
                    for (f = c; f < i.length; f++) s.push("..");
                    return (s = s.concat(o.slice(c))).join("/")
                }, e.sep = "/", e.delimiter = ":", e.dirname = function (n) {
                    if ("string" != typeof n && (n += ""), 0 === n.length) return ".";
                    for (var r = n.charCodeAt(0), e = 47 === r, t = -1, i = !0, o = n.length - 1; o >= 1; --o)
                        if (47 === (r = n.charCodeAt(o))) {
                            if (!i) {
                                t = o;
                                break
                            }
                        } else i = !1;
                    return -1 === t ? e ? "/" : "." : e && 1 === t ? "/" : n.slice(0, t)
                }, e.basename = function (n, r) {
                    var e = function (n) {
                        "string" != typeof n && (n += "");
                        var r, e = 0,
                            t = -1,
                            i = !0;
                        for (r = n.length - 1; r >= 0; --r)
                            if (47 === n.charCodeAt(r)) {
                                if (!i) {
                                    e = r + 1;
                                    break
                                }
                            } else -1 === t && (i = !1, t = r + 1);
                        return -1 === t ? "" : n.slice(e, t)
                    }(n);
                    return r && e.substr(-1 * r.length) === r && (e = e.substr(0, e.length - r.length)), e
                }, e.extname = function (n) {
                    "string" != typeof n && (n += "");
                    for (var r = -1, e = 0, t = -1, i = !0, o = 0, u = n.length - 1; u >= 0; --u) {
                        var c = n.charCodeAt(u);
                        if (47 !== c) -1 === t && (i = !1, t = u + 1), 46 === c ? -1 === r ? r = u : 1 !== o && (o = 1) : -1 !== r && (o = -1);
                        else if (!i) {
                            e = u + 1;
                            break
                        }
                    }
                    return -1 === r || -1 === t || 0 === o || 1 === o && r === t - 1 && r === e + 1 ? "" : n.slice(r, t)
                };
                var i = "b" === "ab".substr(-1) ? function (n, r, e) {
                    return n.substr(r, e)
                } : function (n, r, e) {
                    return r < 0 && (r = n.length + r), n.substr(r, e)
                }
            }).call(this, n("_process"))
        }, {
            _process: 3
        }],
        3: [function (n, r, e) {
            var t, i, o = r.exports = {};

            function u() {
                throw new Error("setTimeout has not been defined")
            }

            function c() {
                throw new Error("clearTimeout has not been defined")
            }

            function f(n) {
                if (t === setTimeout) return setTimeout(n, 0);
                if ((t === u || !t) && setTimeout) return t = setTimeout, setTimeout(n, 0);
                try {
                    return t(n, 0)
                } catch (r) {
                    try {
                        return t.call(null, n, 0)
                    } catch (r) {
                        return t.call(this, n, 0)
                    }
                }
            }

            !function () {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : u
                } catch (n) {
                    t = u
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : c
                } catch (n) {
                    i = c
                }
            }();
            var s, l = [],
                h = !1,
                p = -1;

            function a() {
                h && s && (h = !1, s.length ? l = s.concat(l) : p = -1, l.length && g())
            }

            function g() {
                if (!h) {
                    var n = f(a);
                    h = !0;
                    for (var r = l.length; r;) {
                        for (s = l, l = []; ++p < r;) s && s[p].run();
                        p = -1, r = l.length
                    }
                    s = null, h = !1,
                        function (n) {
                            if (i === clearTimeout) return clearTimeout(n);
                            if ((i === c || !i) && clearTimeout) return i = clearTimeout, clearTimeout(n);
                            try {
                                i(n)
                            } catch (r) {
                                try {
                                    return i.call(null, n)
                                } catch (r) {
                                    return i.call(this, n)
                                }
                            }
                        }(n)
                }
            }

            function m(n, r) {
                this.fun = n, this.array = r
            }

            function d() {
            }

            o.nextTick = function (n) {
                var r = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
                l.push(new m(n, r)), 1 !== l.length || h || f(g)
            }, m.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function (n) {
                return []
            }, o.binding = function (n) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function () {
                return "/"
            }, o.chdir = function (n) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function () {
                return 0
            }
        }, {}],
        4: [function (n, r, e) {
            (function (e) {
                const t = n("fs"),
                    i = n("path");

                function o(n) {
                    console.log(`[dotenv][DEBUG] ${n}`)
                }

                const u = "\n",
                    c = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
                    f = /\\n/g;

                function s(n, r) {
                    const e = Boolean(r && r.debug),
                        t = {};
                    return n.toString().split(u).forEach(function (n, r) {
                        const i = n.match(c);
                        if (null != i) {
                            const n = i[1];
                            let r = i[2] || "";
                            const e = r.length - 1,
                                o = '"' === r[0] && '"' === r[e];
                            "'" === r[0] && "'" === r[e] || o ? (r = r.substring(1, e), o && (r = r.replace(f, u))) : r = r.trim(), t[n] = r
                        } else e && o(`did not match key and value when parsing line ${r + 1}: ${n}`)
                    }), t
                }

                r.exports.config = function (n) {
                    let r = i.resolve(e.cwd(), ".env"),
                        u = "utf8",
                        c = !1;
                    n && (null != n.path && (r = n.path), null != n.encoding && (u = n.encoding), null != n.debug && (c = !0));
                    try {
                        const n = s(t.readFileSync(r, {
                            encoding: u
                        }), {
                            debug: c
                        });
                        return Object.keys(n).forEach(function (r) {
                            e.env.hasOwnProperty(r) ? c && o(`"${r}" is already defined in \`process.env\` and will not be overwritten`) : e.env[r] = n[r]
                        }), {
                            parsed: n
                        }
                    } catch (n) {
                        return {
                            error: n
                        }
                    }
                }, r.exports.parse = s
            }).call(this, n("_process"))
        }, {
            _process: 3,
            fs: 1,
            path: 2
        }]
    }, {}, [4])(4)
});