/*!
 * SelectWoo 1.0.6
 * https://github.com/woocommerce/selectWoo
 *
 * Released under the MIT license
 * https://github.com/woocommerce/selectWoo/blob/master/LICENSE.md
 */
!(function(n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : "object" == typeof module && module.exports
    ? (module.exports = function(e, t) {
        return (
          t === undefined &&
            (t =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(e)),
          n(t),
          t
        );
      })
    : n(jQuery);
})(function(i) {
  var e = (function() {
      if (i && i.fn && i.fn.select2 && i.fn.select2.amd)
        var e = i.fn.select2.amd;
      var t, o, c, n;
      return (
        (e && e.requirejs) ||
          (e ? (o = e) : (e = {}),
          (function(h) {
            var s,
              r,
              f,
              g,
              m = {},
              v = {},
              y = {},
              w = {},
              n = Object.prototype.hasOwnProperty,
              i = [].slice,
              _ = /\.js$/;
            function $(e, t) {
              return n.call(e, t);
            }
            function a(e, t) {
              var n,
                i,
                o,
                s,
                r,
                a,
                l,
                c,
                u,
                d,
                p,
                h = t && t.split("/"),
                f = y.map,
                g = (f && f["*"]) || {};
              if (e) {
                for (
                  r = (e = e.split("/")).length - 1,
                    y.nodeIdCompat &&
                      _.test(e[r]) &&
                      (e[r] = e[r].replace(_, "")),
                    "." === e[0].charAt(0) &&
                      h &&
                      (e = h.slice(0, h.length - 1).concat(e)),
                    u = 0;
                  u < e.length;
                  u++
                )
                  if ("." === (p = e[u])) e.splice(u, 1), (u -= 1);
                  else if (".." === p) {
                    if (
                      0 === u ||
                      (1 === u && ".." === e[2]) ||
                      ".." === e[u - 1]
                    )
                      continue;
                    0 < u && (e.splice(u - 1, 2), (u -= 2));
                  }
                e = e.join("/");
              }
              if ((h || g) && f) {
                for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
                  if (((i = n.slice(0, u).join("/")), h))
                    for (d = h.length; 0 < d; d -= 1)
                      if ((o = f[h.slice(0, d).join("/")]) && (o = o[i])) {
                        (s = o), (a = u);
                        break;
                      }
                  if (s) break;
                  !l && g && g[i] && ((l = g[i]), (c = u));
                }
                !s && l && ((s = l), (a = c)),
                  s && (n.splice(0, a, s), (e = n.join("/")));
              }
              return e;
            }
            function b(t, n) {
              return function() {
                var e = i.call(arguments, 0);
                return (
                  "string" != typeof e[0] && 1 === e.length && e.push(null),
                  r.apply(h, e.concat([t, n]))
                );
              };
            }
            function x(t) {
              return function(e) {
                m[t] = e;
              };
            }
            function A(e) {
              if ($(v, e)) {
                var t = v[e];
                delete v[e], (w[e] = !0), s.apply(h, t);
              }
              if (!$(m, e) && !$(w, e)) throw new Error("No " + e);
              return m[e];
            }
            function l(e) {
              var t,
                n = e ? e.indexOf("!") : -1;
              return (
                -1 < n &&
                  ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
                [t, e]
              );
            }
            function C(e) {
              return e ? l(e) : [];
            }
            (f = function(e, t) {
              var n,
                i = l(e),
                o = i[0],
                s = t[1];
              return (
                (e = i[1]),
                o && (n = A((o = a(o, s)))),
                o
                  ? (e =
                      n && n.normalize
                        ? n.normalize(
                            e,
                            (function r(t) {
                              return function(e) {
                                return a(e, t);
                              };
                            })(s)
                          )
                        : a(e, s))
                  : ((o = (i = l((e = a(e, s))))[0]),
                    (e = i[1]),
                    o && (n = A(o))),
                { f: o ? o + "!" + e : e, n: e, pr: o, p: n }
              );
            }),
              (g = {
                require: function(e) {
                  return b(e);
                },
                exports: function(e) {
                  var t = m[e];
                  return void 0 !== t ? t : (m[e] = {});
                },
                module: function(e) {
                  return {
                    id: e,
                    uri: "",
                    exports: m[e],
                    config: (function t(e) {
                      return function() {
                        return (y && y.config && y.config[e]) || {};
                      };
                    })(e)
                  };
                }
              }),
              (s = function(e, t, n, i) {
                var o,
                  s,
                  r,
                  a,
                  l,
                  c,
                  u,
                  d = [],
                  p = typeof n;
                if (
                  ((c = C((i = i || e))), "undefined" == p || "function" == p)
                ) {
                  for (
                    t =
                      !t.length && n.length
                        ? ["require", "exports", "module"]
                        : t,
                      l = 0;
                    l < t.length;
                    l += 1
                  )
                    if ("require" === (s = (a = f(t[l], c)).f))
                      d[l] = g.require(e);
                    else if ("exports" === s) (d[l] = g.exports(e)), (u = !0);
                    else if ("module" === s) o = d[l] = g.module(e);
                    else if ($(m, s) || $(v, s) || $(w, s)) d[l] = A(s);
                    else {
                      if (!a.p) throw new Error(e + " missing " + s);
                      a.p.load(a.n, b(i, !0), x(s), {}), (d[l] = m[s]);
                    }
                  (r = n ? n.apply(m[e], d) : undefined),
                    e &&
                      (o && o.exports !== h && o.exports !== m[e]
                        ? (m[e] = o.exports)
                        : (r === h && u) || (m[e] = r));
                } else e && (m[e] = n);
              }),
              (t = o = r = function(e, t, n, i, o) {
                if ("string" == typeof e)
                  return g[e] ? g[e](t) : A(f(e, C(t)).f);
                if (!e.splice) {
                  if (((y = e).deps && r(y.deps, y.callback), !t)) return;
                  t.splice ? ((e = t), (t = n), (n = null)) : (e = h);
                }
                return (
                  (t = t || function() {}),
                  "function" == typeof n && ((n = i), (i = o)),
                  i
                    ? s(h, e, t, n)
                    : setTimeout(function() {
                        s(h, e, t, n);
                      }, 4),
                  r
                );
              }),
              (r.config = function(e) {
                return r(e);
              }),
              (t._defined = m),
              ((c = function(e, t, n) {
                if ("string" != typeof e)
                  throw new Error(
                    "See almond README: incorrect module build, no module name"
                  );
                t.splice || ((n = t), (t = [])),
                  $(m, e) || $(v, e) || (v[e] = [e, t, n]);
              }).amd = { jQuery: !0 });
          })(),
          (e.requirejs = t),
          (e.require = o),
          (e.define = c)),
        e.define("almond", function() {}),
        e.define("jquery", [], function() {
          var e = i || $;
          return (
            null == e &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            e
          );
        }),
        e.define("select2/utils", ["jquery"], function(s) {
          var e = {};
          function d(e) {
            var t = e.prototype,
              n = [];
            for (var i in t) {
              "function" == typeof t[i] && "constructor" !== i && n.push(i);
            }
            return n;
          }
          (e.Extend = function(e, t) {
            var n = {}.hasOwnProperty;
            function i() {
              this.constructor = e;
            }
            for (var o in t) n.call(t, o) && (e[o] = t[o]);
            return (
              (i.prototype = t.prototype),
              (e.prototype = new i()),
              (e.__super__ = t.prototype),
              e
            );
          }),
            (e.Decorate = function(i, o) {
              var e = d(o),
                t = d(i);
              function s() {
                var e = Array.prototype.unshift,
                  t = o.prototype.constructor.length,
                  n = i.prototype.constructor;
                0 < t &&
                  (e.call(arguments, i.prototype.constructor),
                  (n = o.prototype.constructor)),
                  n.apply(this, arguments);
              }
              (o.displayName = i.displayName),
                (s.prototype = new (function u() {
                  this.constructor = s;
                })());
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                s.prototype[r] = i.prototype[r];
              }
              for (
                var a = function(e) {
                    var t = function() {};
                    (e in s.prototype) && (t = s.prototype[e]);
                    var n = o.prototype[e];
                    return function() {
                      return (
                        Array.prototype.unshift.call(arguments, t),
                        n.apply(this, arguments)
                      );
                    };
                  },
                  l = 0;
                l < e.length;
                l++
              ) {
                var c = e[l];
                s.prototype[c] = a(c);
              }
              return s;
            });
          var t = function() {
            this.listeners = {};
          };
          return (
            (t.prototype.on = function(e, t) {
              (this.listeners = this.listeners || {}),
                e in this.listeners
                  ? this.listeners[e].push(t)
                  : (this.listeners[e] = [t]);
            }),
            (t.prototype.trigger = function(e) {
              var t = Array.prototype.slice,
                n = t.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                null == n && (n = []),
                0 === n.length && n.push({}),
                (n[0]._type = e) in this.listeners &&
                  this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (t.prototype.invoke = function(e, t) {
              for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
            }),
            (e.Observable = t),
            (e.generateChars = function(e) {
              for (var t = "", n = 0; n < e; n++) {
                t += Math.floor(36 * Math.random()).toString(36);
              }
              return t;
            }),
            (e.bind = function(e, t) {
              return function() {
                e.apply(t, arguments);
              };
            }),
            (e._convertData = function(e) {
              for (var t in e) {
                var n = t.split("-"),
                  i = e;
                if (1 !== n.length) {
                  for (var o = 0; o < n.length; o++) {
                    var s = n[o];
                    (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in
                      i || (i[s] = {}),
                      o == n.length - 1 && (i[s] = e[t]),
                      (i = i[s]);
                  }
                  delete e[t];
                }
              }
              return e;
            }),
            (e.hasScroll = function(e, t) {
              var n = s(t),
                i = t.style.overflowX,
                o = t.style.overflowY;
              return (
                (i !== o || ("hidden" !== o && "visible" !== o)) &&
                ("scroll" === i ||
                  "scroll" === o ||
                  n.innerHeight() < t.scrollHeight ||
                  n.innerWidth() < t.scrollWidth)
              );
            }),
            (e.escapeMarkup = function(e) {
              var t = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
              };
              return "string" != typeof e
                ? e
                : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                    return t[e];
                  });
            }),
            (e.appendMany = function(e, t) {
              if ("1.7" === s.fn.jquery.substr(0, 3)) {
                var n = s();
                s.map(t, function(e) {
                  n = n.add(e);
                }),
                  (t = n);
              }
              e.append(t);
            }),
            (e.isTouchscreen = function() {
              return (
                "undefined" == typeof e._isTouchscreenCache &&
                  (e._isTouchscreenCache =
                    "ontouchstart" in document.documentElement),
                e._isTouchscreenCache
              );
            }),
            e
          );
        }),
        e.define("select2/results", ["jquery", "./utils"], function(h, e) {
          function i(e, t, n) {
            (this.$element = e),
              (this.data = n),
              (this.options = t),
              i.__super__.constructor.call(this);
          }
          return (
            e.Extend(i, e.Observable),
            (i.prototype.render = function() {
              var e = h(
                '<ul class="select2-results__options" role="listbox" tabindex="-1"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  e.attr("aria-multiselectable", "true"),
                (this.$results = e)
              );
            }),
            (i.prototype.clear = function() {
              this.$results.empty();
            }),
            (i.prototype.displayMessage = function(e) {
              var t = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var n = h(
                  '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                ),
                i = this.options.get("translations").get(e.message);
              n.append(t(i(e.args))),
                (n[0].className += " select2-results__message"),
                this.$results.append(n);
            }),
            (i.prototype.hideMessages = function() {
              this.$results.find(".select2-results__message").remove();
            }),
            (i.prototype.append = function(e) {
              this.hideLoading();
              var t = [];
              if (null != e.results && 0 !== e.results.length) {
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                  var i = e.results[n],
                    o = this.option(i);
                  t.push(o);
                }
                this.$results.append(t);
              } else
                0 === this.$results.children().length &&
                  this.trigger("results:message", { message: "noResults" });
            }),
            (i.prototype.position = function(e, t) {
              t.find(".select2-results").append(e);
            }),
            (i.prototype.sort = function(e) {
              return this.options.get("sorter")(e);
            }),
            (i.prototype.highlightFirstItem = function() {
              var e = this.$results.find(
                  ".select2-results__option[data-selected]"
                ),
                t = e.filter("[data-selected=true]");
              0 < t.length
                ? t.first().trigger("mouseenter")
                : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (i.prototype.setClasses = function() {
              var t = this;
              this.data.current(function(e) {
                var i = h.map(e, function(e) {
                  return e.id.toString();
                });
                t.$results
                  .find(".select2-results__option[data-selected]")
                  .each(function() {
                    var e = h(this),
                      t = h.data(this, "data"),
                      n = "" + t.id;
                    (null != t.element && t.element.selected) ||
                    (null == t.element && -1 < h.inArray(n, i))
                      ? e.attr("data-selected", "true")
                      : e.attr("data-selected", "false");
                  });
              });
            }),
            (i.prototype.showLoading = function(e) {
              this.hideLoading();
              var t = {
                  disabled: !0,
                  loading: !0,
                  text: this.options.get("translations").get("searching")(e)
                },
                n = this.option(t);
              (n.className += " loading-results"), this.$results.prepend(n);
            }),
            (i.prototype.hideLoading = function() {
              this.$results.find(".loading-results").remove();
            }),
            (i.prototype.option = function(e) {
              var t = document.createElement("li");
              t.className = "select2-results__option";
              var n = {
                role: "option",
                "data-selected": "false",
                tabindex: -1
              };
              for (var i in (e.disabled &&
                (delete n["data-selected"], (n["aria-disabled"] = "true")),
              null == e.id && delete n["data-selected"],
              null != e._resultId && (t.id = e._resultId),
              e.title && (t.title = e.title),
              e.children &&
                ((n["aria-label"] = e.text), delete n["data-selected"]),
              n)) {
                var o = n[i];
                t.setAttribute(i, o);
              }
              if (e.children) {
                var s = h(t),
                  r = document.createElement("strong");
                r.className = "select2-results__group";
                var a = h(r);
                this.template(e, r), a.attr("role", "presentation");
                for (var l = [], c = 0; c < e.children.length; c++) {
                  var u = e.children[c],
                    d = this.option(u);
                  l.push(d);
                }
                var p = h("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                  role: "listbox"
                });
                p.append(l), s.attr("role", "list"), s.append(r), s.append(p);
              } else this.template(e, t);
              return h.data(t, "data", e), t;
            }),
            (i.prototype.bind = function(t, e) {
              var l = this,
                n = t.id + "-results";
              this.$results.attr("id", n),
                t.on("results:all", function(e) {
                  l.clear(),
                    l.append(e.data),
                    t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }),
                t.on("results:append", function(e) {
                  l.append(e.data), t.isOpen() && l.setClasses();
                }),
                t.on("query", function(e) {
                  l.hideMessages(), l.showLoading(e);
                }),
                t.on("select", function() {
                  t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }),
                t.on("unselect", function() {
                  t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }),
                t.on("open", function() {
                  l.$results.attr("aria-expanded", "true"),
                    l.$results.attr("aria-hidden", "false"),
                    l.setClasses(),
                    l.ensureHighlightVisible();
                }),
                t.on("close", function() {
                  l.$results.attr("aria-expanded", "false"),
                    l.$results.attr("aria-hidden", "true"),
                    l.$results.removeAttr("aria-activedescendant");
                }),
                t.on("results:toggle", function() {
                  var e = l.getHighlightedResults();
                  0 !== e.length && e.trigger("mouseup");
                }),
                t.on("results:select", function() {
                  var e = l.getHighlightedResults();
                  if (0 !== e.length) {
                    var t = e.data("data");
                    "true" == e.attr("data-selected")
                      ? l.trigger("close", {})
                      : l.trigger("select", { data: t });
                  }
                }),
                t.on("results:previous", function() {
                  var e = l.getHighlightedResults(),
                    t = l.$results.find("[data-selected]"),
                    n = t.index(e);
                  if (0 !== n) {
                    var i = n - 1;
                    0 === e.length && (i = 0);
                    var o = t.eq(i);
                    o.trigger("mouseenter");
                    var s = l.$results.offset().top,
                      r = o.offset().top,
                      a = l.$results.scrollTop() + (r - s);
                    0 === i
                      ? l.$results.scrollTop(0)
                      : r - s < 0 && l.$results.scrollTop(a);
                  }
                }),
                t.on("results:next", function() {
                  var e = l.getHighlightedResults(),
                    t = l.$results.find("[data-selected]"),
                    n = t.index(e) + 1;
                  if (!(n >= t.length)) {
                    var i = t.eq(n);
                    i.trigger("mouseenter");
                    var o =
                        l.$results.offset().top + l.$results.outerHeight(!1),
                      s = i.offset().top + i.outerHeight(!1),
                      r = l.$results.scrollTop() + s - o;
                    0 === n
                      ? l.$results.scrollTop(0)
                      : o < s && l.$results.scrollTop(r);
                  }
                }),
                t.on("results:focus", function(e) {
                  e.element
                    .addClass("select2-results__option--highlighted")
                    .attr("aria-selected", "true"),
                    l.$results.attr(
                      "aria-activedescendant",
                      e.element.attr("id")
                    );
                }),
                t.on("results:message", function(e) {
                  l.displayMessage(e);
                }),
                h.fn.mousewheel &&
                  this.$results.on("mousewheel", function(e) {
                    var t = l.$results.scrollTop(),
                      n = l.$results.get(0).scrollHeight - t + e.deltaY,
                      i = 0 < e.deltaY && t - e.deltaY <= 0,
                      o = e.deltaY < 0 && n <= l.$results.height();
                    i
                      ? (l.$results.scrollTop(0),
                        e.preventDefault(),
                        e.stopPropagation())
                      : o &&
                        (l.$results.scrollTop(
                          l.$results.get(0).scrollHeight - l.$results.height()
                        ),
                        e.preventDefault(),
                        e.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option[data-selected]",
                  function(e) {
                    var t = h(this),
                      n = t.data("data");
                    "true" !== t.attr("data-selected")
                      ? l.trigger("select", { originalEvent: e, data: n })
                      : l.options.get("multiple")
                      ? l.trigger("unselect", { originalEvent: e, data: n })
                      : l.trigger("close", {});
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option[data-selected]",
                  function(e) {
                    var t = h(this).data("data");
                    l
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted")
                      .attr("aria-selected", "false"),
                      l.trigger("results:focus", { data: t, element: h(this) });
                  }
                );
            }),
            (i.prototype.getHighlightedResults = function() {
              return this.$results.find(
                ".select2-results__option--highlighted"
              );
            }),
            (i.prototype.destroy = function() {
              this.$results.remove();
            }),
            (i.prototype.ensureHighlightVisible = function() {
              var e = this.getHighlightedResults();
              if (0 !== e.length) {
                var t = this.$results.find("[data-selected]").index(e),
                  n = this.$results.offset().top,
                  i = e.offset().top,
                  o = this.$results.scrollTop() + (i - n),
                  s = i - n;
                (o -= 2 * e.outerHeight(!1)),
                  t <= 2
                    ? this.$results.scrollTop(0)
                    : (s > this.$results.outerHeight() || s < 0) &&
                      this.$results.scrollTop(o);
              }
            }),
            (i.prototype.template = function(e, t) {
              var n = this.options.get("templateResult"),
                i = this.options.get("escapeMarkup"),
                o = n(e, t);
              null == o
                ? (t.style.display = "none")
                : "string" == typeof o
                ? (t.innerHTML = i(o))
                : h(t).append(o);
            }),
            i
          );
        }),
        e.define("select2/keys", [], function() {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          };
        }),
        e.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function(i, e, o) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              e.Extend(n, e.Observable),
              (n.prototype.render = function() {
                var e = i(
                  '<span class="select2-selection"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != this.$element.data("old-tabindex")
                    ? (this._tabindex = this.$element.data("old-tabindex"))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  e.attr("title", this.$element.attr("title")),
                  e.attr("tabindex", this._tabindex),
                  (this.$selection = e)
                );
              }),
              (n.prototype.bind = function(e, t) {
                var n = this,
                  i = (e.id, e.id + "-results");
                this.options.get("minimumResultsForSearch"), Infinity;
                (this.container = e),
                  this.$selection.on("focus", function(e) {
                    n.trigger("focus", e);
                  }),
                  this.$selection.on("blur", function(e) {
                    n._handleBlur(e);
                  }),
                  this.$selection.on("keydown", function(e) {
                    n.trigger("keypress", e),
                      e.which === o.SPACE && e.preventDefault();
                  }),
                  e.on("results:focus", function(e) {
                    n.$selection.attr(
                      "aria-activedescendant",
                      e.data._resultId
                    );
                  }),
                  e.on("selection:update", function(e) {
                    n.update(e.data);
                  }),
                  e.on("open", function() {
                    n.$selection.attr("aria-expanded", "true"),
                      n.$selection.attr("aria-owns", i),
                      n._attachCloseHandler(e);
                  }),
                  e.on("close", function() {
                    n.$selection.attr("aria-expanded", "false"),
                      n.$selection.removeAttr("aria-activedescendant"),
                      n.$selection.removeAttr("aria-owns"),
                      window.setTimeout(function() {
                        n.$selection.focus();
                      }, 1),
                      n._detachCloseHandler(e);
                  }),
                  e.on("enable", function() {
                    n.$selection.attr("tabindex", n._tabindex);
                  }),
                  e.on("disable", function() {
                    n.$selection.attr("tabindex", "-1");
                  });
              }),
              (n.prototype._handleBlur = function(e) {
                var t = this;
                window.setTimeout(function() {
                  document.activeElement == t.$selection[0] ||
                    i.contains(t.$selection[0], document.activeElement) ||
                    t.trigger("blur", e);
                }, 1);
              }),
              (n.prototype._attachCloseHandler = function(e) {
                i(document.body).on("mousedown.select2." + e.id, function(e) {
                  var t = i(e.target),
                    n = t.closest(".select2");
                  i(".select2.select2-container--open").each(function() {
                    var e = i(this);
                    this != n[0] &&
                      (e.data("element").select2("close"),
                      setTimeout(function() {
                        e.find("*:focus").blur(), t.focus();
                      }, 1));
                  });
                });
              }),
              (n.prototype._detachCloseHandler = function(e) {
                i(document.body).off("mousedown.select2." + e.id);
              }),
              (n.prototype.position = function(e, t) {
                t.find(".selection").append(e);
              }),
              (n.prototype.destroy = function() {
                this._detachCloseHandler(this.container);
              }),
              (n.prototype.update = function(e) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              n
            );
          }
        ),
        e.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function(e, t, n, i) {
            function o() {
              o.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(o, t),
              (o.prototype.render = function() {
                var e = o.__super__.render.call(this);
                return (
                  e.addClass("select2-selection--single"),
                  e.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  e
                );
              }),
              (o.prototype.bind = function(t, e) {
                var n = this;
                o.__super__.bind.apply(this, arguments);
                var i = t.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", i)
                  .attr("role", "textbox")
                  .attr("aria-readonly", "true"),
                  this.$selection.attr("aria-labelledby", i),
                  this.$selection.attr("role", "combobox"),
                  this.$selection.on("mousedown", function(e) {
                    1 === e.which && n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on("focus", function(e) {}),
                  this.$selection.on("keydown", function(e) {
                    !t.isOpen() && 48 <= e.which && e.which <= 90 && t.open();
                  }),
                  this.$selection.on("blur", function(e) {}),
                  t.on("focus", function(e) {
                    t.isOpen() || n.$selection.focus();
                  }),
                  t.on("selection:update", function(e) {
                    n.update(e.data);
                  });
              }),
              (o.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty();
              }),
              (o.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (o.prototype.selectionContainer = function() {
                return e("<span></span>");
              }),
              (o.prototype.update = function(e) {
                if (0 !== e.length) {
                  var t = e[0],
                    n = this.$selection.find(".select2-selection__rendered"),
                    i = this.display(t, n);
                  n.empty().append(i), n.prop("title", t.title || t.text);
                } else this.clear();
              }),
              o
            );
          }
        ),
        e.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function(i, e, a) {
            function o(e, t) {
              o.__super__.constructor.apply(this, arguments);
            }
            return (
              a.Extend(o, e),
              (o.prototype.render = function() {
                var e = o.__super__.render.call(this);
                return (
                  e.addClass("select2-selection--multiple"),
                  e.html(
                    '<ul class="select2-selection__rendered" aria-live="polite" aria-relevant="additions removals" aria-atomic="true"></ul>'
                  ),
                  e
                );
              }),
              (o.prototype.bind = function(t, e) {
                var n = this;
                o.__super__.bind.apply(this, arguments),
                  this.$selection.on("click", function(e) {
                    n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function(e) {
                      if (!n.options.get("disabled")) {
                        var t = i(this)
                          .parent()
                          .data("data");
                        n.trigger("unselect", { originalEvent: e, data: t });
                      }
                    }
                  ),
                  this.$selection.on("keydown", function(e) {
                    !t.isOpen() && 48 <= e.which && e.which <= 90 && t.open();
                  }),
                  t.on("focus", function() {
                    n.focusOnSearch();
                  });
              }),
              (o.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty();
              }),
              (o.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (o.prototype.selectionContainer = function() {
                return i(
                  '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation" aria-hidden="true">&times;</span></li>'
                );
              }),
              (o.prototype.focusOnSearch = function() {
                var e = this;
                "undefined" != typeof e.$search &&
                  setTimeout(function() {
                    (e._keyUpPrevented = !0), e.$search.focus();
                  }, 1);
              }),
              (o.prototype.update = function(e) {
                if ((this.clear(), 0 !== e.length)) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n],
                      o = this.selectionContainer(),
                      s = this.display(i, o);
                    "string" == typeof s && (s = s.trim()),
                      o.append(s),
                      o.prop("title", i.title || i.text),
                      o.data("data", i),
                      t.push(o);
                  }
                  var r = this.$selection.find(".select2-selection__rendered");
                  a.appendMany(r, t);
                }
              }),
              o
            );
          }
        ),
        e.define("select2/selection/placeholder", ["../utils"], function(e) {
          function t(e, t, n) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n);
          }
          return (
            (t.prototype.normalizePlaceholder = function(e, t) {
              return "string" == typeof t && (t = { id: "", text: t }), t;
            }),
            (t.prototype.createPlaceholder = function(e, t) {
              var n = this.selectionContainer();
              return (
                n.html(this.display(t)),
                n
                  .addClass("select2-selection__placeholder")
                  .removeClass("select2-selection__choice"),
                n
              );
            }),
            (t.prototype.update = function(e, t) {
              var n = 1 == t.length && t[0].id != this.placeholder.id;
              if (1 < t.length || n) return e.call(this, t);
              this.clear();
              var i = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(i);
            }),
            t
          );
        }),
        e.define(
          "select2/selection/allowClear",
          ["jquery", "../keys"],
          function(i, o) {
            function e() {}
            return (
              (e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function(e) {
                      i._handleClear(e);
                    }
                  ),
                  t.on("keypress", function(e) {
                    i._handleKeyboardClear(e, t);
                  });
              }),
              (e.prototype._handleClear = function(e, t) {
                if (!this.options.get("disabled")) {
                  var n = this.$selection.find(".select2-selection__clear");
                  if (0 !== n.length) {
                    t.stopPropagation();
                    for (var i = n.data("data"), o = 0; o < i.length; o++) {
                      var s = { data: i[o] };
                      if ((this.trigger("unselect", s), s.prevented)) return;
                    }
                    this.$element.val(this.placeholder.id).trigger("change"),
                      this.trigger("toggle", {});
                  }
                }
              }),
              (e.prototype._handleKeyboardClear = function(e, t, n) {
                n.isOpen() ||
                  (t.which != o.DELETE && t.which != o.BACKSPACE) ||
                  this._handleClear(t);
              }),
              (e.prototype.update = function(e, t) {
                if (
                  (e.call(this, t),
                  !(
                    0 <
                      this.$selection.find(".select2-selection__placeholder")
                        .length || 0 === t.length
                  ))
                ) {
                  var n = i(
                    '<span class="select2-selection__clear">&times;</span>'
                  );
                  n.data("data", t),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .prepend(n);
                }
              }),
              e
            );
          }
        ),
        e.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function(i, e, a) {
            function t(e, t, n) {
              e.call(this, t, n);
            }
            return (
              (t.prototype.render = function(e) {
                var t = i(
                  '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                );
                (this.$searchContainer = t), (this.$search = t.find("input"));
                var n = e.call(this);
                return this._transferTabIndex(), n;
              }),
              (t.prototype.bind = function(e, i, t) {
                var o = this,
                  n = i.id + "-results";
                e.call(this, i, t),
                  i.on("open", function() {
                    o.$search.attr("aria-owns", n), o.$search.trigger("focus");
                  }),
                  i.on("close", function() {
                    o.$search.val(""),
                      o.$search.removeAttr("aria-activedescendant"),
                      o.$search.removeAttr("aria-owns"),
                      o.$search.trigger("focus");
                  }),
                  i.on("enable", function() {
                    o.$search.prop("disabled", !1), o._transferTabIndex();
                  }),
                  i.on("disable", function() {
                    o.$search.prop("disabled", !0);
                  }),
                  i.on("focus", function(e) {
                    o.$search.trigger("focus");
                  }),
                  i.on("results:focus", function(e) {
                    o.$search.attr("aria-activedescendant", e.data._resultId);
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function(e) {
                      o.trigger("focus", e);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function(e) {
                      o._handleBlur(e);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function(e) {
                      if (
                        (e.stopPropagation(),
                        o.trigger("keypress", e),
                        (o._keyUpPrevented = e.isDefaultPrevented()),
                        e.which === a.BACKSPACE && "" === o.$search.val())
                      ) {
                        var t = o.$searchContainer.prev(
                          ".select2-selection__choice"
                        );
                        if (0 < t.length) {
                          var n = t.data("data");
                          o.searchRemoveChoice(n), e.preventDefault();
                        }
                      } else
                        e.which === a.ENTER && (i.open(), e.preventDefault());
                    }
                  );
                var s = document.documentMode,
                  r = s && s <= 11;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function(e) {
                    r
                      ? o.$selection.off("input.search input.searchcheck")
                      : o.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function(e) {
                      if (r && "input" === e.type)
                        o.$selection.off("input.search input.searchcheck");
                      else {
                        var t = e.which;
                        t != a.SHIFT &&
                          t != a.CTRL &&
                          t != a.ALT &&
                          t != a.TAB &&
                          o.handleSearch(e);
                      }
                    }
                  );
              }),
              (t.prototype._transferTabIndex = function(e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (t.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text);
              }),
              (t.prototype.update = function(e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                  e.call(this, t),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .append(this.$searchContainer),
                  this.resizeSearch(),
                  n && this.$search.focus();
              }),
              (t.prototype.handleSearch = function() {
                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                  var e = this.$search.val();
                  this.trigger("query", { term: e });
                }
                this._keyUpPrevented = !1;
              }),
              (t.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", { data: t }),
                  this.$search.val(t.text),
                  this.handleSearch();
              }),
              (t.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "";
                "" !== this.$search.attr("placeholder")
                  ? (e = this.$selection
                      .find(".select2-selection__rendered")
                      .innerWidth())
                  : (e = 0.75 * (this.$search.val().length + 1) + "em");
                this.$search.css("width", e);
              }),
              t
            );
          }
        ),
        e.define("select2/selection/eventRelay", ["jquery"], function(r) {
          function e() {}
          return (
            (e.prototype.bind = function(e, t, n) {
              var i = this,
                o = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting"
                ],
                s = ["opening", "closing", "selecting", "unselecting"];
              e.call(this, t, n),
                t.on("*", function(e, t) {
                  if (-1 !== r.inArray(e, o)) {
                    t = t || {};
                    var n = r.Event("select2:" + e, { params: t });
                    i.$element.trigger(n),
                      -1 !== r.inArray(e, s) &&
                        (t.prevented = n.isDefaultPrevented());
                  }
                });
            }),
            e
          );
        }),
        e.define("select2/translation", ["jquery", "require"], function(t, n) {
          function i(e) {
            this.dict = e || {};
          }
          return (
            (i.prototype.all = function() {
              return this.dict;
            }),
            (i.prototype.get = function(e) {
              return this.dict[e];
            }),
            (i.prototype.extend = function(e) {
              this.dict = t.extend({}, e.all(), this.dict);
            }),
            (i._cache = {}),
            (i.loadPath = function(e) {
              if (!(e in i._cache)) {
                var t = n(e);
                i._cache[e] = t;
              }
              return new i(i._cache[e]);
            }),
            i
          );
        }),
        e.define("select2/diacritics", [], function() {
          return {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ω: "ω",
            ς: "σ"
          };
        }),
        e.define("select2/data/base", ["../utils"], function(i) {
          function n(e, t) {
            n.__super__.constructor.call(this);
          }
          return (
            i.Extend(n, i.Observable),
            (n.prototype.current = function(e) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (n.prototype.query = function(e, t) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (n.prototype.bind = function(e, t) {}),
            (n.prototype.destroy = function() {}),
            (n.prototype.generateResultId = function(e, t) {
              var n = "";
              return (
                (n += null != e ? e.id : i.generateChars(4)),
                (n += "-result-"),
                (n += i.generateChars(4)),
                null != t.id
                  ? (n += "-" + t.id.toString())
                  : (n += "-" + i.generateChars(4)),
                n
              );
            }),
            n
          );
        }),
        e.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function(e, t, a) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              t.Extend(n, e),
              (n.prototype.current = function(e) {
                var n = [],
                  i = this;
                this.$element.find(":selected").each(function() {
                  var e = a(this),
                    t = i.item(e);
                  n.push(t);
                }),
                  e(n);
              }),
              (n.prototype.select = function(o) {
                var s = this;
                if (((o.selected = !0), a(o.element).is("option")))
                  return (
                    (o.element.selected = !0),
                    void this.$element.trigger("change")
                  );
                if (this.$element.prop("multiple"))
                  this.current(function(e) {
                    var t = [];
                    (o = [o]).push.apply(o, e);
                    for (var n = 0; n < o.length; n++) {
                      var i = o[n].id;
                      -1 === a.inArray(i, t) && t.push(i);
                    }
                    s.$element.val(t), s.$element.trigger("change");
                  });
                else {
                  var e = o.id;
                  this.$element.val(e), this.$element.trigger("change");
                }
              }),
              (n.prototype.unselect = function(o) {
                var s = this;
                if (this.$element.prop("multiple")) {
                  if (((o.selected = !1), a(o.element).is("option")))
                    return (
                      (o.element.selected = !1),
                      void this.$element.trigger("change")
                    );
                  this.current(function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                      var i = e[n].id;
                      i !== o.id && -1 === a.inArray(i, t) && t.push(i);
                    }
                    s.$element.val(t), s.$element.trigger("change");
                  });
                }
              }),
              (n.prototype.bind = function(e, t) {
                var n = this;
                (this.container = e).on("select", function(e) {
                  n.select(e.data);
                }),
                  e.on("unselect", function(e) {
                    n.unselect(e.data);
                  });
              }),
              (n.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                  a.removeData(this, "data");
                });
              }),
              (n.prototype.query = function(i, e) {
                var o = [],
                  s = this;
                this.$element.children().each(function() {
                  var e = a(this);
                  if (e.is("option") || e.is("optgroup")) {
                    var t = s.item(e),
                      n = s.matches(i, t);
                    null !== n && o.push(n);
                  }
                }),
                  e({ results: o });
              }),
              (n.prototype.addOptions = function(e) {
                t.appendMany(this.$element, e);
              }),
              (n.prototype.option = function(e) {
                var t;
                e.children
                  ? ((t = document.createElement("optgroup")).label = e.text)
                  : (t = document.createElement("option")).textContent !==
                    undefined
                  ? (t.textContent = e.text)
                  : (t.innerText = e.text),
                  e.id !== undefined && (t.value = e.id),
                  e.disabled && (t.disabled = !0),
                  e.selected && (t.selected = !0),
                  e.title && (t.title = e.title);
                var n = a(t),
                  i = this._normalizeItem(e);
                return (i.element = t), a.data(t, "data", i), n;
              }),
              (n.prototype.item = function(e) {
                var t = {};
                if (null != (t = a.data(e[0], "data"))) return t;
                if (e.is("option"))
                  t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                  };
                else if (e.is("optgroup")) {
                  t = {
                    text: e.prop("label"),
                    children: [],
                    title: e.prop("title")
                  };
                  for (
                    var n = e.children("option"), i = [], o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s = a(n[o]),
                      r = this.item(s);
                    i.push(r);
                  }
                  t.children = i;
                }
                return (
                  ((t = this._normalizeItem(t)).element = e[0]),
                  a.data(e[0], "data", t),
                  t
                );
              }),
              (n.prototype._normalizeItem = function(e) {
                a.isPlainObject(e) || (e = { id: e, text: e });
                return (
                  null != (e = a.extend({}, { text: "" }, e)).id &&
                    (e.id = e.id.toString()),
                  null != e.text && (e.text = e.text.toString()),
                  null == e._resultId &&
                    e.id &&
                    (e._resultId = this.generateResultId(this.container, e)),
                  a.extend({}, { selected: !1, disabled: !1 }, e)
                );
              }),
              (n.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t);
              }),
              n
            );
          }
        ),
        e.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function(e, f, g) {
            function i(e, t) {
              var n = t.get("data") || [];
              i.__super__.constructor.call(this, e, t),
                this.addOptions(this.convertToOptions(n));
            }
            return (
              f.Extend(i, e),
              (i.prototype.select = function(n) {
                var e = this.$element.find("option").filter(function(e, t) {
                  return t.value == n.id.toString();
                });
                0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                  i.__super__.select.call(this, n);
              }),
              (i.prototype.convertToOptions = function(e) {
                var t = this,
                  n = this.$element.find("option"),
                  i = n
                    .map(function() {
                      return t.item(g(this)).id;
                    })
                    .get(),
                  o = [];
                function s(e) {
                  return function() {
                    return g(this).val() == e.id;
                  };
                }
                for (var r = 0; r < e.length; r++) {
                  var a = this._normalizeItem(e[r]);
                  if (0 <= g.inArray(a.id, i)) {
                    var l = n.filter(s(a)),
                      c = this.item(l),
                      u = g.extend(!0, {}, a, c),
                      d = this.option(u);
                    l.replaceWith(d);
                  } else {
                    var p = this.option(a);
                    if (a.children) {
                      var h = this.convertToOptions(a.children);
                      f.appendMany(p, h);
                    }
                    o.push(p);
                  }
                }
                return o;
              }),
              i
            );
          }
        ),
        e.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function(e, t, s) {
            function n(e, t) {
              (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                n.__super__.constructor.call(this, e, t);
            }
            return (
              t.Extend(n, e),
              (n.prototype._applyDefaults = function(e) {
                var t = {
                  data: function(e) {
                    return s.extend({}, e, { q: e.term });
                  },
                  transport: function(e, t, n) {
                    var i = s.ajax(e);
                    return i.then(t), i.fail(n), i;
                  }
                };
                return s.extend({}, t, e, !0);
              }),
              (n.prototype.processResults = function(e) {
                return e;
              }),
              (n.prototype.query = function(n, i) {
                var o = this;
                null != this._request &&
                  (s.isFunction(this._request.abort) && this._request.abort(),
                  (this._request = null));
                var t = s.extend({ type: "GET" }, this.ajaxOptions);
                function e() {
                  var e = t.transport(
                    t,
                    function(e) {
                      var t = o.processResults(e, n);
                      o.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((t && t.results && s.isArray(t.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        i(t),
                        o.container.focusOnActiveElement();
                    },
                    function() {
                      (e.status && "0" === e.status) ||
                        o.trigger("results:message", {
                          message: "errorLoading"
                        });
                    }
                  );
                  o._request = e;
                }
                "function" == typeof t.url &&
                  (t.url = t.url.call(this.$element, n)),
                  "function" == typeof t.data &&
                    (t.data = t.data.call(this.$element, n)),
                  this.ajaxOptions.delay && null != n.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        e,
                        this.ajaxOptions.delay
                      )))
                    : e();
              }),
              n
            );
          }
        ),
        e.define("select2/data/tags", ["jquery"], function(u) {
          function e(e, t, n) {
            var i = n.get("tags"),
              o = n.get("createTag");
            o !== undefined && (this.createTag = o);
            var s = n.get("insertTag");
            if (
              (s !== undefined && (this.insertTag = s),
              e.call(this, t, n),
              u.isArray(i))
            )
              for (var r = 0; r < i.length; r++) {
                var a = i[r],
                  l = this._normalizeItem(a),
                  c = this.option(l);
                this.$element.append(c);
              }
          }
          return (
            (e.prototype.query = function(e, l, c) {
              var u = this;
              this._removeOldTags(),
                null != l.term && null == l.page
                  ? e.call(this, l, function d(e, t) {
                      for (var n = e.results, i = 0; i < n.length; i++) {
                        var o = n[i],
                          s =
                            null != o.children &&
                            !d({ results: o.children }, !0);
                        if (
                          (o.text || "").toUpperCase() ===
                            (l.term || "").toUpperCase() ||
                          s
                        )
                          return !t && ((e.data = n), void c(e));
                      }
                      if (t) return !0;
                      var r = u.createTag(l);
                      if (null != r) {
                        var a = u.option(r);
                        a.attr("data-select2-tag", !0),
                          u.addOptions([a]),
                          u.insertTag(n, r);
                      }
                      (e.results = n), c(e);
                    })
                  : e.call(this, l, c);
            }),
            (e.prototype.createTag = function(e, t) {
              var n = u.trim(t.term);
              return "" === n ? null : { id: n, text: n };
            }),
            (e.prototype.insertTag = function(e, t, n) {
              t.unshift(n);
            }),
            (e.prototype._removeOldTags = function(e) {
              this._lastTag;
              this.$element.find("option[data-select2-tag]").each(function() {
                this.selected || u(this).remove();
              });
            }),
            e
          );
        }),
        e.define("select2/data/tokenizer", ["jquery"], function(d) {
          function e(e, t, n) {
            var i = n.get("tokenizer");
            i !== undefined && (this.tokenizer = i), e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function(e, t, n) {
              e.call(this, t, n),
                (this.$search =
                  t.dropdown.$search ||
                  t.selection.$search ||
                  n.find(".select2-search__field"));
            }),
            (e.prototype.query = function(e, t, n) {
              var o = this;
              t.term = t.term || "";
              var i = this.tokenizer(t, this.options, function s(e) {
                var t = o._normalizeItem(e);
                if (
                  !o.$element.find("option").filter(function() {
                    return d(this).val() === t.id;
                  }).length
                ) {
                  var n = o.option(t);
                  n.attr("data-select2-tag", !0),
                    o._removeOldTags(),
                    o.addOptions([n]);
                }
                !(function i(e) {
                  o.trigger("select", { data: e });
                })(t);
              });
              i.term !== t.term &&
                (this.$search.length &&
                  (this.$search.val(i.term), this.$search.focus()),
                (t.term = i.term)),
                e.call(this, t, n);
            }),
            (e.prototype.tokenizer = function(e, t, n, i) {
              for (
                var o = n.get("tokenSeparators") || [],
                  s = t.term,
                  r = 0,
                  a =
                    this.createTag ||
                    function(e) {
                      return { id: e.term, text: e.term };
                    };
                r < s.length;

              ) {
                var l = s[r];
                if (-1 !== d.inArray(l, o)) {
                  var c = s.substr(0, r),
                    u = a(d.extend({}, t, { term: c }));
                  null != u
                    ? (i(u), (s = s.substr(r + 1) || ""), (r = 0))
                    : r++;
                } else r++;
              }
              return { term: s };
            }),
            e
          );
        }),
        e.define("select2/data/minimumInputLength", [], function() {
          function e(e, t, n) {
            (this.minimumInputLength = n.get("minimumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function(e, t, n) {
              (t.term = t.term || ""),
                t.term.length < this.minimumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooShort",
                      args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                      }
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        e.define("select2/data/maximumInputLength", [], function() {
          function e(e, t, n) {
            (this.maximumInputLength = n.get("maximumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function(e, t, n) {
              (t.term = t.term || ""),
                0 < this.maximumInputLength &&
                t.term.length > this.maximumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooLong",
                      args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                      }
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        e.define("select2/data/maximumSelectionLength", [], function() {
          function e(e, t, n) {
            (this.maximumSelectionLength = n.get("maximumSelectionLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function(n, i, o) {
              var s = this;
              this.current(function(e) {
                var t = null != e ? e.length : 0;
                0 < s.maximumSelectionLength && t >= s.maximumSelectionLength
                  ? s.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: s.maximumSelectionLength }
                    })
                  : n.call(s, i, o);
              });
            }),
            e
          );
        }),
        e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            e.Extend(n, e.Observable),
            (n.prototype.render = function() {
              var e = t(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return (
                e.attr("dir", this.options.get("dir")), (this.$dropdown = e)
              );
            }),
            (n.prototype.bind = function() {}),
            (n.prototype.position = function(e, t) {}),
            (n.prototype.destroy = function() {
              this.$dropdown.remove();
            }),
            n
          );
        }),
        e.define("select2/dropdown/search", ["jquery", "../utils"], function(
          s,
          e
        ) {
          function t() {}
          return (
            (t.prototype.render = function(e) {
              var t = e.call(this),
                n = s(
                  '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="true" /></span>'
                );
              return (
                (this.$searchContainer = n),
                (this.$search = n.find("input")),
                t.prepend(n),
                t
              );
            }),
            (t.prototype.bind = function(e, t, n) {
              var i = this,
                o = t.id + "-results";
              e.call(this, t, n),
                this.$search.on("keydown", function(e) {
                  i.trigger("keypress", e),
                    (i._keyUpPrevented = e.isDefaultPrevented());
                }),
                this.$search.on("input", function(e) {
                  s(this).off("keyup");
                }),
                this.$search.on("keyup input", function(e) {
                  i.handleSearch(e);
                }),
                t.on("open", function() {
                  i.$search.attr("tabindex", 0),
                    i.$search.attr("aria-owns", o),
                    i.$search.focus(),
                    window.setTimeout(function() {
                      i.$search.focus();
                    }, 0);
                }),
                t.on("close", function() {
                  i.$search.attr("tabindex", -1),
                    i.$search.removeAttr("aria-activedescendant"),
                    i.$search.removeAttr("aria-owns"),
                    i.$search.val("");
                }),
                t.on("focus", function() {
                  t.isOpen() || i.$search.focus();
                }),
                t.on("results:all", function(e) {
                  (null != e.query.term && "" !== e.query.term) ||
                    (i.showSearch(e)
                      ? i.$searchContainer.removeClass("select2-search--hide")
                      : i.$searchContainer.addClass("select2-search--hide"));
                }),
                t.on("results:focus", function(e) {
                  i.$search.attr("aria-activedescendant", e.data._resultId);
                });
            }),
            (t.prototype.handleSearch = function(e) {
              if (!this._keyUpPrevented) {
                var t = this.$search.val();
                this.trigger("query", { term: t });
              }
              this._keyUpPrevented = !1;
            }),
            (t.prototype.showSearch = function(e, t) {
              return !0;
            }),
            t
          );
        }),
        e.define("select2/dropdown/hidePlaceholder", [], function() {
          function e(e, t, n, i) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n, i);
          }
          return (
            (e.prototype.append = function(e, t) {
              (t.results = this.removePlaceholder(t.results)), e.call(this, t);
            }),
            (e.prototype.normalizePlaceholder = function(e, t) {
              return "string" == typeof t && (t = { id: "", text: t }), t;
            }),
            (e.prototype.removePlaceholder = function(e, t) {
              for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                var o = t[i];
                this.placeholder.id === o.id && n.splice(i, 1);
              }
              return n;
            }),
            e
          );
        }),
        e.define("select2/dropdown/infiniteScroll", ["jquery"], function(o) {
          function e(e, t, n, i) {
            (this.lastParams = {}),
              e.call(this, t, n, i),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (e.prototype.append = function(e, t) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                e.call(this, t),
                this.showLoadingMore(t) &&
                  this.$results.append(this.$loadingMore);
            }),
            (e.prototype.bind = function(e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("query", function(e) {
                  (i.lastParams = e), (i.loading = !0);
                }),
                t.on("query:append", function(e) {
                  (i.lastParams = e), (i.loading = !0);
                }),
                this.$results.on("scroll", function() {
                  var e = o.contains(
                    document.documentElement,
                    i.$loadingMore[0]
                  );
                  if (!i.loading && e) {
                    var t =
                      i.$results.offset().top + i.$results.outerHeight(!1);
                    i.$loadingMore.offset().top +
                      i.$loadingMore.outerHeight(!1) <=
                      t + 50 && i.loadMore();
                  }
                });
            }),
            (e.prototype.loadMore = function() {
              this.loading = !0;
              var e = o.extend({}, { page: 1 }, this.lastParams);
              e.page++, this.trigger("query:append", e);
            }),
            (e.prototype.showLoadingMore = function(e, t) {
              return t.pagination && t.pagination.more;
            }),
            (e.prototype.createLoadingMore = function() {
              var e = o(
                  '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                ),
                t = this.options.get("translations").get("loadingMore");
              return e.html(t(this.lastParams)), e;
            }),
            e
          );
        }),
        e.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function(f, a) {
            function e(e, t, n) {
              (this.$dropdownParent =
                n.get("dropdownParent") || f(document.body)),
                e.call(this, t, n);
            }
            return (
              (e.prototype.bind = function(e, t, n) {
                var i = this,
                  o = !1;
                e.call(this, t, n),
                  t.on("open", function() {
                    i._showDropdown(),
                      i._attachPositioningHandler(t),
                      o ||
                        ((o = !0),
                        t.on("results:all", function() {
                          i._positionDropdown(), i._resizeDropdown();
                        }),
                        t.on("results:append", function() {
                          i._positionDropdown(), i._resizeDropdown();
                        }));
                  }),
                  t.on("close", function() {
                    i._hideDropdown(), i._detachPositioningHandler(t);
                  }),
                  this.$dropdownContainer.on("mousedown", function(e) {
                    e.stopPropagation();
                  });
              }),
              (e.prototype.destroy = function(e) {
                e.call(this), this.$dropdownContainer.remove();
              }),
              (e.prototype.position = function(e, t, n) {
                t.attr("class", n.attr("class")),
                  t.removeClass("select2"),
                  t.addClass("select2-container--open"),
                  t.css({ position: "absolute", top: -999999 }),
                  (this.$container = n);
              }),
              (e.prototype.render = function(e) {
                var t = f("<span></span>"),
                  n = e.call(this);
                return t.append(n), (this.$dropdownContainer = t);
              }),
              (e.prototype._hideDropdown = function(e) {
                this.$dropdownContainer.detach();
              }),
              (e.prototype._attachPositioningHandler = function(e, t) {
                var n = this,
                  i = "scroll.select2." + t.id,
                  o = "resize.select2." + t.id,
                  s = "orientationchange.select2." + t.id,
                  r = this.$container.parents().filter(a.hasScroll);
                r.each(function() {
                  f(this).data("select2-scroll-position", {
                    x: f(this).scrollLeft(),
                    y: f(this).scrollTop()
                  });
                }),
                  r.on(i, function(e) {
                    var t = f(this).data("select2-scroll-position");
                    f(this).scrollTop(t.y);
                  }),
                  f(window).on(i + " " + o + " " + s, function(e) {
                    n._positionDropdown(), n._resizeDropdown();
                  });
              }),
              (e.prototype._detachPositioningHandler = function(e, t) {
                var n = "scroll.select2." + t.id,
                  i = "resize.select2." + t.id,
                  o = "orientationchange.select2." + t.id;
                this.$container
                  .parents()
                  .filter(a.hasScroll)
                  .off(n),
                  f(window).off(n + " " + i + " " + o);
              }),
              (e.prototype._positionDropdown = function() {
                var e = f(window),
                  t = this.$dropdown.hasClass("select2-dropdown--above"),
                  n = this.$dropdown.hasClass("select2-dropdown--below"),
                  i = null,
                  o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var s = { height: this.$container.outerHeight(!1) };
                (s.top = o.top), (s.bottom = o.top + s.height);
                var r = this.$dropdown.outerHeight(!1),
                  a = e.scrollTop(),
                  l = e.scrollTop() + e.height(),
                  c = a < o.top - r,
                  u = l > o.bottom + r,
                  d = { left: o.left, top: s.bottom },
                  p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var h = p.offset();
                (d.top -= h.top),
                  (d.left -= h.left),
                  t || n || (i = "below"),
                  u || !c || t ? !c && u && t && (i = "below") : (i = "above"),
                  ("above" == i || (t && "below" !== i)) &&
                    (d.top = s.top - h.top - r),
                  null != i &&
                    (this.$dropdown
                      .removeClass(
                        "select2-dropdown--below select2-dropdown--above"
                      )
                      .addClass("select2-dropdown--" + i),
                    this.$container
                      .removeClass(
                        "select2-container--below select2-container--above"
                      )
                      .addClass("select2-container--" + i)),
                  this.$dropdownContainer.css(d);
              }),
              (e.prototype._resizeDropdown = function() {
                var e = { width: this.$container.outerWidth(!1) + "px" };
                this.options.get("dropdownAutoWidth") &&
                  ((e.minWidth = e.width),
                  (e.position = "relative"),
                  (e.width = "auto")),
                  this.$dropdown.css(e);
              }),
              (e.prototype._showDropdown = function(e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              e
            );
          }
        ),
        e.define("select2/dropdown/minimumResultsForSearch", [], function() {
          function e(e, t, n, i) {
            (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = Infinity),
              e.call(this, t, n, i);
          }
          return (
            (e.prototype.showSearch = function(e, t) {
              return (
                !(
                  (function o(e) {
                    for (var t = 0, n = 0; n < e.length; n++) {
                      var i = e[n];
                      i.children ? (t += o(i.children)) : t++;
                    }
                    return t;
                  })(t.data.results) < this.minimumResultsForSearch
                ) && e.call(this, t)
              );
            }),
            e
          );
        }),
        e.define("select2/dropdown/selectOnClose", [], function() {
          function e() {}
          return (
            (e.prototype.bind = function(e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("close", function(e) {
                  i._handleSelectOnClose(e);
                });
            }),
            (e.prototype._handleSelectOnClose = function(e, t) {
              if (t && null != t.originalSelect2Event) {
                var n = t.originalSelect2Event;
                if ("select" === n._type || "unselect" === n._type) return;
              }
              var i = this.getHighlightedResults();
              if (!(i.length < 1)) {
                var o = i.data("data");
                (null != o.element && o.element.selected) ||
                  (null == o.element && o.selected) ||
                  this.trigger("select", { data: o });
              }
            }),
            e
          );
        }),
        e.define("select2/dropdown/closeOnSelect", [], function() {
          function e() {}
          return (
            (e.prototype.bind = function(e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("select", function(e) {
                  i._selectTriggered(e);
                }),
                t.on("unselect", function(e) {
                  i._selectTriggered(e);
                });
            }),
            (e.prototype._selectTriggered = function(e, t) {
              var n = t.originalEvent;
              (n && n.ctrlKey) ||
                this.trigger("close", {
                  originalEvent: n,
                  originalSelect2Event: t
                });
            }),
            e
          );
        }),
        e.define("select2/i18n/en", [], function() {
          return {
            errorLoading: function() {
              return "The results could not be loaded.";
            },
            inputTooLong: function(e) {
              var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
              return 1 != t && (n += "s"), n;
            },
            inputTooShort: function(e) {
              return (
                "Please enter " +
                (e.minimum - e.input.length) +
                " or more characters"
              );
            },
            loadingMore: function() {
              return "Loading more results…";
            },
            maximumSelected: function(e) {
              var t = "You can only select " + e.maximum + " item";
              return 1 != e.maximum && (t += "s"), t;
            },
            noResults: function() {
              return "No results found";
            },
            searching: function() {
              return "Searching…";
            }
          };
        }),
        e.define(
          "select2/defaults",
          [
            "jquery",
            "require",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./i18n/en"
          ],
          function(
            m,
            v,
            y,
            w,
            _,
            $,
            b,
            x,
            A,
            C,
            S,
            n,
            O,
            E,
            D,
            T,
            q,
            j,
            L,
            k,
            P,
            I,
            M,
            R,
            z,
            H,
            U,
            N,
            e
          ) {
            function t() {
              this.reset();
            }
            return (
              (t.prototype.apply = function(e) {
                if (
                  null == (e = m.extend(!0, {}, this.defaults, e)).dataAdapter
                ) {
                  if (
                    (null != e.ajax
                      ? (e.dataAdapter = D)
                      : null != e.data
                      ? (e.dataAdapter = E)
                      : (e.dataAdapter = O),
                    0 < e.minimumInputLength &&
                      (e.dataAdapter = C.Decorate(e.dataAdapter, j)),
                    0 < e.maximumInputLength &&
                      (e.dataAdapter = C.Decorate(e.dataAdapter, L)),
                    0 < e.maximumSelectionLength &&
                      (e.dataAdapter = C.Decorate(e.dataAdapter, k)),
                    e.tags && (e.dataAdapter = C.Decorate(e.dataAdapter, T)),
                    (null == e.tokenSeparators && null == e.tokenizer) ||
                      (e.dataAdapter = C.Decorate(e.dataAdapter, q)),
                    null != e.query)
                  ) {
                    var t = v(e.amdBase + "compat/query");
                    e.dataAdapter = C.Decorate(e.dataAdapter, t);
                  }
                  if (null != e.initSelection) {
                    var n = v(e.amdBase + "compat/initSelection");
                    e.dataAdapter = C.Decorate(e.dataAdapter, n);
                  }
                }
                if (
                  (null == e.resultsAdapter &&
                    ((e.resultsAdapter = y),
                    null != e.ajax &&
                      (e.resultsAdapter = C.Decorate(e.resultsAdapter, R)),
                    null != e.placeholder &&
                      (e.resultsAdapter = C.Decorate(e.resultsAdapter, M)),
                    e.selectOnClose &&
                      (e.resultsAdapter = C.Decorate(e.resultsAdapter, U))),
                  null == e.dropdownAdapter)
                ) {
                  if (e.multiple) e.dropdownAdapter = P;
                  else {
                    var i = C.Decorate(P, I);
                    e.dropdownAdapter = i;
                  }
                  if (
                    (0 !== e.minimumResultsForSearch &&
                      (e.dropdownAdapter = C.Decorate(e.dropdownAdapter, H)),
                    e.closeOnSelect &&
                      (e.dropdownAdapter = C.Decorate(e.dropdownAdapter, N)),
                    null != e.dropdownCssClass ||
                      null != e.dropdownCss ||
                      null != e.adaptDropdownCssClass)
                  ) {
                    var o = v(e.amdBase + "compat/dropdownCss");
                    e.dropdownAdapter = C.Decorate(e.dropdownAdapter, o);
                  }
                  e.dropdownAdapter = C.Decorate(e.dropdownAdapter, z);
                }
                if (null == e.selectionAdapter) {
                  if (
                    (e.multiple
                      ? (e.selectionAdapter = _)
                      : (e.selectionAdapter = w),
                    null != e.placeholder &&
                      (e.selectionAdapter = C.Decorate(e.selectionAdapter, $)),
                    e.allowClear &&
                      (e.selectionAdapter = C.Decorate(e.selectionAdapter, b)),
                    e.multiple &&
                      (e.selectionAdapter = C.Decorate(e.selectionAdapter, x)),
                    null != e.containerCssClass ||
                      null != e.containerCss ||
                      null != e.adaptContainerCssClass)
                  ) {
                    var s = v(e.amdBase + "compat/containerCss");
                    e.selectionAdapter = C.Decorate(e.selectionAdapter, s);
                  }
                  e.selectionAdapter = C.Decorate(e.selectionAdapter, A);
                }
                if ("string" == typeof e.language)
                  if (0 < e.language.indexOf("-")) {
                    var r = e.language.split("-")[0];
                    e.language = [e.language, r];
                  } else e.language = [e.language];
                if (m.isArray(e.language)) {
                  var a = new S();
                  e.language.push("en");
                  for (var l = e.language, c = 0; c < l.length; c++) {
                    var u = l[c],
                      d = {};
                    try {
                      d = S.loadPath(u);
                    } catch (f) {
                      try {
                        (u = this.defaults.amdLanguageBase + u),
                          (d = S.loadPath(u));
                      } catch (g) {
                        e.debug &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The language file for "' +
                              u +
                              '" could not be automatically loaded. A fallback will be used instead.'
                          );
                        continue;
                      }
                    }
                    a.extend(d);
                  }
                  e.translations = a;
                } else {
                  var p = S.loadPath(this.defaults.amdLanguageBase + "en"),
                    h = new S(e.language);
                  h.extend(p), (e.translations = h);
                }
                return e;
              }),
              (t.prototype.reset = function() {
                function r(e) {
                  return e.replace(/[^\u0000-\u007E]/g, function t(e) {
                    return n[e] || e;
                  });
                }
                this.defaults = {
                  amdBase: "./",
                  amdLanguageBase: "./i18n/",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: C.escapeMarkup,
                  language: e,
                  matcher: function a(e, t) {
                    if ("" === m.trim(e.term)) return t;
                    if (t.children && 0 < t.children.length) {
                      for (
                        var n = m.extend(!0, {}, t), i = t.children.length - 1;
                        0 <= i;
                        i--
                      )
                        null == a(e, t.children[i]) && n.children.splice(i, 1);
                      return 0 < n.children.length ? n : a(e, n);
                    }
                    var o = r(t.text).toUpperCase(),
                      s = r(e.term).toUpperCase();
                    return -1 < o.indexOf(s) ? t : null;
                  },
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  sorter: function(e) {
                    return e;
                  },
                  templateResult: function(e) {
                    return e.text;
                  },
                  templateSelection: function(e) {
                    return e.text;
                  },
                  theme: "default",
                  width: "resolve"
                };
              }),
              (t.prototype.set = function(e, t) {
                var n = {};
                n[m.camelCase(e)] = t;
                var i = C._convertData(n);
                m.extend(this.defaults, i);
              }),
              new t()
            );
          }
        ),
        e.define(
          "select2/options",
          ["require", "jquery", "./defaults", "./utils"],
          function(i, s, o, r) {
            function e(e, t) {
              if (
                ((this.options = e),
                null != t && this.fromElement(t),
                (this.options = o.apply(this.options)),
                t && t.is("input"))
              ) {
                var n = i(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = r.Decorate(
                  this.options.dataAdapter,
                  n
                );
              }
            }
            return (
              (e.prototype.fromElement = function(e) {
                var t = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = e.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = e.prop("disabled")),
                  null == this.options.language &&
                    (e.prop("lang")
                      ? (this.options.language = e.prop("lang").toLowerCase())
                      : e.closest("[lang]").prop("lang") &&
                        (this.options.language = e
                          .closest("[lang]")
                          .prop("lang"))),
                  null == this.options.dir &&
                    (e.prop("dir")
                      ? (this.options.dir = e.prop("dir"))
                      : e.closest("[dir]").prop("dir")
                      ? (this.options.dir = e.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  e.prop("disabled", this.options.disabled),
                  e.prop("multiple", this.options.multiple),
                  e.data("select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    e.data("data", e.data("select2Tags")),
                    e.data("tags", !0)),
                  e.data("ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    e.attr("ajax--url", e.data("ajaxUrl")),
                    e.data("ajax--url", e.data("ajaxUrl")));
                var n = {};
                n =
                  s.fn.jquery &&
                  "1." == s.fn.jquery.substr(0, 2) &&
                  e[0].dataset
                    ? s.extend(!0, {}, e[0].dataset, e.data())
                    : e.data();
                var i = s.extend(!0, {}, n);
                for (var o in (i = r._convertData(i)))
                  -1 < s.inArray(o, t) ||
                    (s.isPlainObject(this.options[o])
                      ? s.extend(this.options[o], i[o])
                      : (this.options[o] = i[o]));
                return this;
              }),
              (e.prototype.get = function(e) {
                return this.options[e];
              }),
              (e.prototype.set = function(e, t) {
                this.options[e] = t;
              }),
              e
            );
          }
        ),
        e.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function(o, c, n, s) {
            var u = function(e, t) {
              null != e.data("select2") && e.data("select2").destroy(),
                (this.$element = e),
                (this.id = this._generateId(e)),
                (t = t || {}),
                (this.options = new c(t, e)),
                u.__super__.constructor.call(this);
              var n = e.attr("tabindex") || 0;
              e.data("old-tabindex", n), e.attr("tabindex", "-1");
              var i = this.options.get("dataAdapter");
              this.dataAdapter = new i(e, this.options);
              var o = this.render();
              this._placeContainer(o);
              var s = this.options.get("selectionAdapter");
              (this.selection = new s(e, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, o);
              var r = this.options.get("dropdownAdapter");
              (this.dropdown = new r(e, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, o);
              var a = this.options.get("resultsAdapter");
              (this.results = new a(e, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var l = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function(e) {
                  l.trigger("selection:update", { data: e });
                }),
                e.addClass("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                e.data("select2", this);
            };
            return (
              n.Extend(u, n.Observable),
              (u.prototype._generateId = function(e) {
                return (
                  "select2-" +
                  (null != e.attr("id")
                    ? e.attr("id")
                    : null != e.attr("name")
                    ? e.attr("name") + "-" + n.generateChars(2)
                    : n.generateChars(4)
                  ).replace(/(:|\.|\[|\]|,)/g, "")
                );
              }),
              (u.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != t && e.css("width", t);
              }),
              (u.prototype._resolveWidth = function(e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                  var i = this._resolveWidth(e, "style");
                  return null != i ? i : this._resolveWidth(e, "element");
                }
                if ("element" == t) {
                  var o = e.outerWidth(!1);
                  return o <= 0 ? "auto" : o + "px";
                }
                if ("style" != t) return t;
                var s = e.attr("style");
                if ("string" != typeof s) return null;
                for (var r = s.split(";"), a = 0, l = r.length; a < l; a += 1) {
                  var c = r[a].replace(/\s/g, "").match(n);
                  if (null !== c && 1 <= c.length) return c[1];
                }
                return null;
              }),
              (u.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (u.prototype._registerDomEvents = function() {
                var t = this;
                this.$element.on("change.select2", function() {
                  t.dataAdapter.current(function(e) {
                    t.trigger("selection:update", { data: e });
                  });
                }),
                  this.$element.on("focus.select2", function(e) {
                    t.trigger("focus", e);
                  }),
                  (this._syncA = n.bind(this._syncAttributes, this)),
                  (this._syncS = n.bind(this._syncSubtree, this)),
                  this.$element[0].attachEvent &&
                    this.$element[0].attachEvent(
                      "onpropertychange",
                      this._syncA
                    );
                var e =
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver;
                null != e
                  ? ((this._observer = new e(function(e) {
                      o.each(e, t._syncA), o.each(e, t._syncS);
                    })),
                    this._observer.observe(this.$element[0], {
                      attributes: !0,
                      childList: !0,
                      subtree: !1
                    }))
                  : this.$element[0].addEventListener &&
                    (this.$element[0].addEventListener(
                      "DOMAttrModified",
                      t._syncA,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeInserted",
                      t._syncS,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeRemoved",
                      t._syncS,
                      !1
                    ));
              }),
              (u.prototype._registerDataEvents = function() {
                var n = this;
                this.dataAdapter.on("*", function(e, t) {
                  n.trigger(e, t);
                });
              }),
              (u.prototype._registerSelectionEvents = function() {
                var n = this,
                  i = ["toggle", "focus"];
                this.selection.on("toggle", function() {
                  n.toggleDropdown();
                }),
                  this.selection.on("focus", function(e) {
                    n.focus(e);
                  }),
                  this.selection.on("*", function(e, t) {
                    -1 === o.inArray(e, i) && n.trigger(e, t);
                  });
              }),
              (u.prototype._registerDropdownEvents = function() {
                var n = this;
                this.dropdown.on("*", function(e, t) {
                  n.trigger(e, t);
                });
              }),
              (u.prototype._registerResultsEvents = function() {
                var n = this;
                this.results.on("*", function(e, t) {
                  n.trigger(e, t);
                });
              }),
              (u.prototype._registerEvents = function() {
                var i = this;
                this.on("open", function() {
                  i.$container.addClass("select2-container--open");
                }),
                  this.on("close", function() {
                    i.$container.removeClass("select2-container--open");
                  }),
                  this.on("enable", function() {
                    i.$container.removeClass("select2-container--disabled");
                  }),
                  this.on("disable", function() {
                    i.$container.addClass("select2-container--disabled");
                  }),
                  this.on("blur", function() {
                    i.$container.removeClass("select2-container--focus");
                  }),
                  this.on("query", function(t) {
                    i.isOpen() || i.trigger("open", {}),
                      this.dataAdapter.query(t, function(e) {
                        i.trigger("results:all", { data: e, query: t });
                      });
                  }),
                  this.on("query:append", function(t) {
                    this.dataAdapter.query(t, function(e) {
                      i.trigger("results:append", { data: e, query: t });
                    });
                  }),
                  this.on("open", function() {
                    setTimeout(function() {
                      i.focusOnActiveElement();
                    }, 1);
                  }),
                  o(document).on("keydown", function(e) {
                    var t = e.which;
                    if (i.isOpen()) {
                      t === s.ESC || (t === s.UP && e.altKey)
                        ? (i.close(), e.preventDefault())
                        : t === s.ENTER || t === s.TAB
                        ? (i.trigger("results:select", {}), e.preventDefault())
                        : t === s.SPACE && e.ctrlKey
                        ? (i.trigger("results:toggle", {}), e.preventDefault())
                        : t === s.UP
                        ? (i.trigger("results:previous", {}),
                          e.preventDefault())
                        : t === s.DOWN &&
                          (i.trigger("results:next", {}), e.preventDefault());
                      var n = i.$dropdown.find(".select2-search__field");
                      n.length ||
                        (n = i.$container.find(".select2-search__field")),
                        t === s.DOWN || t === s.UP
                          ? i.focusOnActiveElement()
                          : (n.focus(),
                            setTimeout(function() {
                              i.focusOnActiveElement();
                            }, 1e3));
                    } else
                      i.hasFocus() &&
                        ((t !== s.ENTER && t !== s.SPACE && t !== s.DOWN) ||
                          (i.open(), e.preventDefault()));
                  });
              }),
              (u.prototype.focusOnActiveElement = function() {
                this.isOpen() &&
                  !n.isTouchscreen() &&
                  this.$results
                    .find("li.select2-results__option--highlighted")
                    .focus();
              }),
              (u.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.options.get("disabled")
                    ? (this.isOpen() && this.close(),
                      this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (u.prototype._syncSubtree = function(e, t) {
                var n = !1,
                  i = this;
                if (
                  !e ||
                  !e.target ||
                  "OPTION" === e.target.nodeName ||
                  "OPTGROUP" === e.target.nodeName
                ) {
                  if (t)
                    if (t.addedNodes && 0 < t.addedNodes.length)
                      for (var o = 0; o < t.addedNodes.length; o++) {
                        t.addedNodes[o].selected && (n = !0);
                      }
                    else
                      t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                  else n = !0;
                  n &&
                    this.dataAdapter.current(function(e) {
                      i.trigger("selection:update", { data: e });
                    });
                }
              }),
              (u.prototype.trigger = function(e, t) {
                var n = u.__super__.trigger,
                  i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                  };
                if ((t === undefined && (t = {}), e in i)) {
                  var o = i[e],
                    s = { prevented: !1, name: e, args: t };
                  if ((n.call(this, o, s), s.prevented))
                    return void (t.prevented = !0);
                }
                n.call(this, e, t);
              }),
              (u.prototype.toggleDropdown = function() {
                this.options.get("disabled") ||
                  (this.isOpen() ? this.close() : this.open());
              }),
              (u.prototype.open = function() {
                this.isOpen() || this.trigger("query", {});
              }),
              (u.prototype.close = function() {
                this.isOpen() && this.trigger("close", {});
              }),
              (u.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open");
              }),
              (u.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus");
              }),
              (u.prototype.focus = function(e) {
                this.hasFocus() ||
                  (this.$container.addClass("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (u.prototype.enable = function(e) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  ),
                  (null != e && 0 !== e.length) || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t);
              }),
              (u.prototype.data = function() {
                this.options.get("debug") &&
                  0 < arguments.length &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var t = [];
                return (
                  this.dataAdapter.current(function(e) {
                    t = e;
                  }),
                  t
                );
              }),
              (u.prototype.val = function(e) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == e || 0 === e.length)
                )
                  return this.$element.val();
                var t = e[0];
                o.isArray(t) &&
                  (t = o.map(t, function(e) {
                    return e.toString();
                  })),
                  this.$element.val(t).trigger("change");
              }),
              (u.prototype.destroy = function() {
                this.$container.remove(),
                  this.$element[0].detachEvent &&
                    this.$element[0].detachEvent(
                      "onpropertychange",
                      this._syncA
                    ),
                  null != this._observer
                    ? (this._observer.disconnect(), (this._observer = null))
                    : this.$element[0].removeEventListener &&
                      (this.$element[0].removeEventListener(
                        "DOMAttrModified",
                        this._syncA,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeInserted",
                        this._syncS,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeRemoved",
                        this._syncS,
                        !1
                      )),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    this.$element.data("old-tabindex")
                  ),
                  this.$element.removeClass("select2-hidden-accessible"),
                  this.$element.attr("aria-hidden", "false"),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (u.prototype.render = function() {
                var e = o(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  e.attr("dir", this.options.get("dir")),
                  (this.$container = e),
                  this.$container.addClass(
                    "select2-container--" + this.options.get("theme")
                  ),
                  e.data("element", this.$element),
                  e
                );
              }),
              u
            );
          }
        ),
        e.define("select2/compat/utils", ["jquery"], function(r) {
          return {
            syncCssClasses: function a(e, t, n) {
              var i,
                o,
                s = [];
              (i = r.trim(e.attr("class"))) &&
                r((i = "" + i).split(/\s+/)).each(function() {
                  0 === this.indexOf("select2-") && s.push(this);
                }),
                (i = r.trim(t.attr("class"))) &&
                  r((i = "" + i).split(/\s+/)).each(function() {
                    0 !== this.indexOf("select2-") &&
                      null != (o = n(this)) &&
                      s.push(o);
                  }),
                e.attr("class", s.join(" "));
            }
          };
        }),
        e.define("select2/compat/containerCss", ["jquery", "./utils"], function(
          r,
          a
        ) {
          function l(e) {
            return null;
          }
          function e() {}
          return (
            (e.prototype.render = function(e) {
              var t = e.call(this),
                n = this.options.get("containerCssClass") || "";
              r.isFunction(n) && (n = n(this.$element));
              var i = this.options.get("adaptContainerCssClass");
              if (((i = i || l), -1 !== n.indexOf(":all:"))) {
                n = n.replace(":all:", "");
                var o = i;
                i = function(e) {
                  var t = o(e);
                  return null != t ? t + " " + e : e;
                };
              }
              var s = this.options.get("containerCss") || {};
              return (
                r.isFunction(s) && (s = s(this.$element)),
                a.syncCssClasses(t, this.$element, i),
                t.css(s),
                t.addClass(n),
                t
              );
            }),
            e
          );
        }),
        e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(
          r,
          a
        ) {
          function l(e) {
            return null;
          }
          function e() {}
          return (
            (e.prototype.render = function(e) {
              var t = e.call(this),
                n = this.options.get("dropdownCssClass") || "";
              r.isFunction(n) && (n = n(this.$element));
              var i = this.options.get("adaptDropdownCssClass");
              if (((i = i || l), -1 !== n.indexOf(":all:"))) {
                n = n.replace(":all:", "");
                var o = i;
                i = function(e) {
                  var t = o(e);
                  return null != t ? t + " " + e : e;
                };
              }
              var s = this.options.get("dropdownCss") || {};
              return (
                r.isFunction(s) && (s = s(this.$element)),
                a.syncCssClasses(t, this.$element, i),
                t.css(s),
                t.addClass(n),
                t
              );
            }),
            e
          );
        }),
        e.define("select2/compat/initSelection", ["jquery"], function(i) {
          function e(e, t, n) {
            n.get("debug") &&
              window.console &&
              console.warn &&
              console.warn(
                "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
              ),
              (this.initSelection = n.get("initSelection")),
              (this._isInitialized = !1),
              e.call(this, t, n);
          }
          return (
            (e.prototype.current = function(e, t) {
              var n = this;
              this._isInitialized
                ? e.call(this, t)
                : this.initSelection.call(null, this.$element, function(e) {
                    (n._isInitialized = !0), i.isArray(e) || (e = [e]), t(e);
                  });
            }),
            e
          );
        }),
        e.define("select2/compat/inputData", ["jquery"], function(r) {
          function e(e, t, n) {
            (this._currentData = []),
              (this._valueSeparator = n.get("valueSeparator") || ","),
              "hidden" === t.prop("type") &&
                n.get("debug") &&
                console &&
                console.warn &&
                console.warn(
                  "Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."
                ),
              e.call(this, t, n);
          }
          return (
            (e.prototype.current = function(e, t) {
              function i(e, t) {
                var n = [];
                return (
                  e.selected || -1 !== r.inArray(e.id, t)
                    ? ((e.selected = !0), n.push(e))
                    : (e.selected = !1),
                  e.children && n.push.apply(n, i(e.children, t)),
                  n
                );
              }
              for (var n = [], o = 0; o < this._currentData.length; o++) {
                var s = this._currentData[o];
                n.push.apply(
                  n,
                  i(s, this.$element.val().split(this._valueSeparator))
                );
              }
              t(n);
            }),
            (e.prototype.select = function(e, t) {
              if (this.options.get("multiple")) {
                var n = this.$element.val();
                (n += this._valueSeparator + t.id),
                  this.$element.val(n),
                  this.$element.trigger("change");
              } else
                this.current(function(e) {
                  r.map(e, function(e) {
                    e.selected = !1;
                  });
                }),
                  this.$element.val(t.id),
                  this.$element.trigger("change");
            }),
            (e.prototype.unselect = function(e, o) {
              var s = this;
              (o.selected = !1),
                this.current(function(e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    o.id != i.id && t.push(i.id);
                  }
                  s.$element.val(t.join(s._valueSeparator)),
                    s.$element.trigger("change");
                });
            }),
            (e.prototype.query = function(e, t, n) {
              for (var i = [], o = 0; o < this._currentData.length; o++) {
                var s = this._currentData[o],
                  r = this.matches(t, s);
                null !== r && i.push(r);
              }
              n({ results: i });
            }),
            (e.prototype.addOptions = function(e, t) {
              var n = r.map(t, function(e) {
                return r.data(e[0], "data");
              });
              this._currentData.push.apply(this._currentData, n);
            }),
            e
          );
        }),
        e.define("select2/compat/matcher", ["jquery"], function(a) {
          return function e(s) {
            return function r(e, t) {
              var n = a.extend(!0, {}, t);
              if (null == e.term || "" === a.trim(e.term)) return n;
              if (t.children) {
                for (var i = t.children.length - 1; 0 <= i; i--) {
                  var o = t.children[i];
                  s(e.term, o.text, o) || n.children.splice(i, 1);
                }
                if (0 < n.children.length) return n;
              }
              return s(e.term, t.text, t) ? n : null;
            };
          };
        }),
        e.define("select2/compat/query", [], function() {
          function e(e, t, n) {
            n.get("debug") &&
              window.console &&
              console.warn &&
              console.warn(
                "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."
              ),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function(e, t, n) {
              (t.callback = n), this.options.get("query").call(null, t);
            }),
            e
          );
        }),
        e.define("select2/dropdown/attachContainer", [], function() {
          function e(e, t, n) {
            e.call(this, t, n);
          }
          return (
            (e.prototype.position = function(e, t, n) {
              n.find(".dropdown-wrapper").append(t),
                t.addClass("select2-dropdown--below"),
                n.addClass("select2-container--below");
            }),
            e
          );
        }),
        e.define("select2/dropdown/stopPropagation", [], function() {
          function e() {}
          return (
            (e.prototype.bind = function(e, t, n) {
              e.call(this, t, n);
              this.$dropdown.on(
                [
                  "blur",
                  "change",
                  "click",
                  "dblclick",
                  "focus",
                  "focusin",
                  "focusout",
                  "input",
                  "keydown",
                  "keyup",
                  "keypress",
                  "mousedown",
                  "mouseenter",
                  "mouseleave",
                  "mousemove",
                  "mouseover",
                  "mouseup",
                  "search",
                  "touchend",
                  "touchstart"
                ].join(" "),
                function(e) {
                  e.stopPropagation();
                }
              );
            }),
            e
          );
        }),
        e.define("select2/selection/stopPropagation", [], function() {
          function e() {}
          return (
            (e.prototype.bind = function(e, t, n) {
              e.call(this, t, n);
              this.$selection.on(
                [
                  "blur",
                  "change",
                  "click",
                  "dblclick",
                  "focus",
                  "focusin",
                  "focusout",
                  "input",
                  "keydown",
                  "keyup",
                  "keypress",
                  "mousedown",
                  "mouseenter",
                  "mouseleave",
                  "mousemove",
                  "mouseover",
                  "mouseup",
                  "search",
                  "touchend",
                  "touchstart"
                ].join(" "),
                function(e) {
                  e.stopPropagation();
                }
              );
            }),
            e
          );
        }),
        /*!
         * jQuery Mousewheel 3.1.13
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         */
        (n = function(p) {
          var h,
            f,
            e = [
              "wheel",
              "mousewheel",
              "DOMMouseScroll",
              "MozMousePixelScroll"
            ],
            t =
              "onwheel" in document || 9 <= document.documentMode
                ? ["wheel"]
                : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            g = Array.prototype.slice;
          if (p.event.fixHooks)
            for (var n = e.length; n; )
              p.event.fixHooks[e[--n]] = p.event.mouseHooks;
          var m = (p.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
              if (this.addEventListener)
                for (var e = t.length; e; )
                  this.addEventListener(t[--e], i, !1);
              else this.onmousewheel = i;
              p.data(this, "mousewheel-line-height", m.getLineHeight(this)),
                p.data(this, "mousewheel-page-height", m.getPageHeight(this));
            },
            teardown: function() {
              if (this.removeEventListener)
                for (var e = t.length; e; )
                  this.removeEventListener(t[--e], i, !1);
              else this.onmousewheel = null;
              p.removeData(this, "mousewheel-line-height"),
                p.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function(e) {
              var t = p(e),
                n = t["offsetParent" in p.fn ? "offsetParent" : "parent"]();
              return (
                n.length || (n = p("body")),
                parseInt(n.css("fontSize"), 10) ||
                  parseInt(t.css("fontSize"), 10) ||
                  16
              );
            },
            getPageHeight: function(e) {
              return p(e).height();
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
          });
          function i(e) {
            var t,
              n = e || window.event,
              i = g.call(arguments, 1),
              o = 0,
              s = 0,
              r = 0,
              a = 0,
              l = 0;
            if (
              (((e = p.event.fix(n)).type = "mousewheel"),
              "detail" in n && (r = -1 * n.detail),
              "wheelDelta" in n && (r = n.wheelDelta),
              "wheelDeltaY" in n && (r = n.wheelDeltaY),
              "wheelDeltaX" in n && (s = -1 * n.wheelDeltaX),
              "axis" in n &&
                n.axis === n.HORIZONTAL_AXIS &&
                ((s = -1 * r), (r = 0)),
              (o = 0 === r ? s : r),
              "deltaY" in n && (o = r = -1 * n.deltaY),
              "deltaX" in n && ((s = n.deltaX), 0 === r && (o = -1 * s)),
              0 !== r || 0 !== s)
            ) {
              if (1 === n.deltaMode) {
                var c = p.data(this, "mousewheel-line-height");
                (o *= c), (r *= c), (s *= c);
              } else if (2 === n.deltaMode) {
                var u = p.data(this, "mousewheel-page-height");
                (o *= u), (r *= u), (s *= u);
              }
              if (
                ((t = Math.max(Math.abs(r), Math.abs(s))),
                (!f || t < f) && y(n, (f = t)) && (f /= 40),
                y(n, t) && ((o /= 40), (s /= 40), (r /= 40)),
                (o = Math[1 <= o ? "floor" : "ceil"](o / f)),
                (s = Math[1 <= s ? "floor" : "ceil"](s / f)),
                (r = Math[1 <= r ? "floor" : "ceil"](r / f)),
                m.settings.normalizeOffset && this.getBoundingClientRect)
              ) {
                var d = this.getBoundingClientRect();
                (a = e.clientX - d.left), (l = e.clientY - d.top);
              }
              return (
                (e.deltaX = s),
                (e.deltaY = r),
                (e.deltaFactor = f),
                (e.offsetX = a),
                (e.offsetY = l),
                (e.deltaMode = 0),
                i.unshift(e, o, s, r),
                h && clearTimeout(h),
                (h = setTimeout(v, 200)),
                (p.event.dispatch || p.event.handle).apply(this, i)
              );
            }
          }
          function v() {
            f = null;
          }
          function y(e, t) {
            return (
              m.settings.adjustOldDeltas &&
              "mousewheel" === e.type &&
              t % 120 == 0
            );
          }
          p.fn.extend({
            mousewheel: function(e) {
              return e
                ? this.bind("mousewheel", e)
                : this.trigger("mousewheel");
            },
            unmousewheel: function(e) {
              return this.unbind("mousewheel", e);
            }
          });
        }),
        "function" == typeof e.define && e.define.amd
          ? e.define("jquery-mousewheel", ["jquery"], n)
          : "object" == typeof exports
          ? (module.exports = n)
          : n(i),
        e.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults"
          ],
          function(o, e, s, t) {
            if (null == o.fn.selectWoo) {
              var r = ["open", "close", "destroy"];
              o.fn.selectWoo = function(t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function() {
                      var e = o.extend(!0, {}, t);
                      new s(o(this), e);
                    }),
                    this
                  );
                if ("string" != typeof t)
                  throw new Error("Invalid arguments for Select2: " + t);
                var n,
                  i = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function() {
                    var e = o(this).data("select2");
                    null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2."
                      ),
                      (n = e[t].apply(e, i));
                  }),
                  -1 < o.inArray(t, r) ? this : n
                );
              };
            }
            return (
              null != o.fn.select2 &&
                null != o.fn.select2.defaults &&
                (o.fn.selectWoo.defaults = o.fn.select2.defaults),
              null == o.fn.selectWoo.defaults && (o.fn.selectWoo.defaults = t),
              (o.fn.select2 = o.fn.select2 || o.fn.selectWoo),
              s
            );
          }
        ),
        { define: e.define, require: e.require }
      );
    })(),
    t = e.require("jquery.select2");
  return (i.fn.select2.amd = e), (i.fn.selectWoo.amd = e), t;
});
