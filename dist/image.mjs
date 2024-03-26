(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function M(E, a = null, r = {}) {
  const c = document.createElement(E);
  Array.isArray(a) ? c.classList.add(...a) : a && c.classList.add(a);
  for (const i in r)
    c[i] = r[i];
  return c;
}
class j {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: a, config: r, onSelectFile: c, readOnly: i }) {
    this.api = a, this.config = r, this.onSelectFile = c, this.readOnly = i, this.nodes = {
      wrapper: M("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: M("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: M("div", this.CSS.imagePreloader),
      caption: M("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(a) {
    return !a.file || Object.keys(a.file).length === 0 ? this.toggleStatus(j.status.EMPTY) : this.toggleStatus(j.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const a = M("div", [this.CSS.button]);
    return a.innerHTML = this.config.buttonContent || `${L} ${this.api.i18n.t("Select an Image")}`, a.addEventListener("click", () => {
      this.onSelectFile();
    }), a;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(a) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${a})`, this.toggleStatus(j.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(j.status.EMPTY);
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(a) {
    const r = /\.mp4$/.test(a) ? "VIDEO" : "IMG", c = {
      src: a
    };
    let i = "load";
    r === "VIDEO" && (c.autoplay = !0, c.loop = !0, c.muted = !0, c.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = M(r, this.CSS.imageEl, c), this.nodes.imageEl.addEventListener(i, () => {
      this.toggleStatus(j.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(a) {
    this.nodes.caption && (this.nodes.caption.innerHTML = a);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(a) {
    for (const r in j.status)
      Object.prototype.hasOwnProperty.call(j.status, r) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${j.status[r]}`, a === j.status[r]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(a, r) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, r);
  }
}
function x(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var I = { exports: {} };
(function(E, a) {
  (function(r, c) {
    E.exports = c();
  })(window, function() {
    return function(r) {
      var c = {};
      function i(n) {
        if (c[n])
          return c[n].exports;
        var o = c[n] = { i: n, l: !1, exports: {} };
        return r[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
      }
      return i.m = r, i.c = c, i.d = function(n, o, d) {
        i.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: d });
      }, i.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, i.t = function(n, o) {
        if (1 & o && (n = i(n)), 8 & o || 4 & o && typeof n == "object" && n && n.__esModule)
          return n;
        var d = /* @__PURE__ */ Object.create(null);
        if (i.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: n }), 2 & o && typeof n != "string")
          for (var v in n)
            i.d(d, v, (function(u) {
              return n[u];
            }).bind(null, v));
        return d;
      }, i.n = function(n) {
        var o = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return i.d(o, "a", o), o;
      }, i.o = function(n, o) {
        return Object.prototype.hasOwnProperty.call(n, o);
      }, i.p = "", i(i.s = 3);
    }([function(r, c) {
      var i;
      i = function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      r.exports = i;
    }, function(r, c, i) {
      (function(n) {
        var o = i(2), d = setTimeout;
        function v() {
        }
        function u(e) {
          if (!(this instanceof u))
            throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, l) {
          for (; e._state === 3; )
            e = e._value;
          e._state !== 0 ? (e._handled = !0, u._immediateFn(function() {
            var s = e._state === 1 ? l.onFulfilled : l.onRejected;
            if (s !== null) {
              var g;
              try {
                g = s(e._value);
              } catch (m) {
                return void y(l.promise, m);
              }
              p(l.promise, g);
            } else
              (e._state === 1 ? p : y)(l.promise, e._value);
          })) : e._deferreds.push(l);
        }
        function p(e, l) {
          try {
            if (l === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (l && (typeof l == "object" || typeof l == "function")) {
              var s = l.then;
              if (l instanceof u)
                return e._state = 3, e._value = l, void w(e);
              if (typeof s == "function")
                return void t((g = s, m = l, function() {
                  g.apply(m, arguments);
                }), e);
            }
            e._state = 1, e._value = l, w(e);
          } catch (h) {
            y(e, h);
          }
          var g, m;
        }
        function y(e, l) {
          e._state = 2, e._value = l, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && u._immediateFn(function() {
            e._handled || u._unhandledRejectionFn(e._value);
          });
          for (var l = 0, s = e._deferreds.length; l < s; l++)
            f(e, e._deferreds[l]);
          e._deferreds = null;
        }
        function b(e, l, s) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof l == "function" ? l : null, this.promise = s;
        }
        function t(e, l) {
          var s = !1;
          try {
            e(function(g) {
              s || (s = !0, p(l, g));
            }, function(g) {
              s || (s = !0, y(l, g));
            });
          } catch (g) {
            if (s)
              return;
            s = !0, y(l, g);
          }
        }
        u.prototype.catch = function(e) {
          return this.then(null, e);
        }, u.prototype.then = function(e, l) {
          var s = new this.constructor(v);
          return f(this, new b(e, l, s)), s;
        }, u.prototype.finally = o.a, u.all = function(e) {
          return new u(function(l, s) {
            if (!e || e.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0)
              return l([]);
            var m = g.length;
            function h(T, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var S = C.then;
                  if (typeof S == "function")
                    return void S.call(C, function(O) {
                      h(T, O);
                    }, s);
                }
                g[T] = C, --m == 0 && l(g);
              } catch (O) {
                s(O);
              }
            }
            for (var k = 0; k < g.length; k++)
              h(k, g[k]);
          });
        }, u.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === u ? e : new u(function(l) {
            l(e);
          });
        }, u.reject = function(e) {
          return new u(function(l, s) {
            s(e);
          });
        }, u.race = function(e) {
          return new u(function(l, s) {
            for (var g = 0, m = e.length; g < m; g++)
              e[g].then(l, s);
          });
        }, u._immediateFn = typeof n == "function" && function(e) {
          n(e);
        } || function(e) {
          d(e, 0);
        }, u._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, c.a = u;
      }).call(this, i(5).setImmediate);
    }, function(r, c, i) {
      c.a = function(n) {
        var o = this.constructor;
        return this.then(function(d) {
          return o.resolve(n()).then(function() {
            return d;
          });
        }, function(d) {
          return o.resolve(n()).then(function() {
            return o.reject(d);
          });
        });
      };
    }, function(r, c, i) {
      function n(t) {
        return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      i(4);
      var o, d, v, u, f, p, y, w = i(8), b = (d = function(t) {
        return new Promise(function(e, l) {
          t = u(t), (t = f(t)).beforeSend && t.beforeSend();
          var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var h = t.headers[m];
            s.setRequestHeader(m, h);
          });
          var g = t.ratio;
          s.upload.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
            t.progress(Math.min(k, 100));
          }, !1), s.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, !1), s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var m = s.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var h = w.parseHeaders(s.getAllResponseHeaders()), k = { body: m, code: s.status, headers: h };
              y(s.status) ? e(k) : l(k);
            }
          }, s.send(t.data);
        });
      }, v = function(t) {
        return t.method = "POST", d(t);
      }, u = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && n(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var e = p(t.data, o.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var l = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (l = o.FORM), t.data = p(t.data, l), l !== b.contentType.FORM && (t.headers["content-type"] = l);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case o.URLENCODED:
            return w.urlEncode(t);
          case o.JSON:
            return w.jsonEncode(t);
          case o.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: o = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: v, transport: function(t) {
        return t = u(t), w.selectFiles(t).then(function(e) {
          for (var l = new FormData(), s = 0; s < e.length; s++)
            l.append(t.fieldName, e[s], e[s].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var h = t.data[m];
            l.append(m, h);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = l, v(t);
        });
      }, selectFiles: function(t) {
        return delete (t = u(t)).beforeSend, w.selectFiles(t);
      } });
      r.exports = b;
    }, function(r, c, i) {
      i.r(c);
      var n = i(1);
      window.Promise = window.Promise || n.a;
    }, function(r, c, i) {
      (function(n) {
        var o = n !== void 0 && n || typeof self < "u" && self || window, d = Function.prototype.apply;
        function v(u, f) {
          this._id = u, this._clearFn = f;
        }
        c.setTimeout = function() {
          return new v(d.call(setTimeout, o, arguments), clearTimeout);
        }, c.setInterval = function() {
          return new v(d.call(setInterval, o, arguments), clearInterval);
        }, c.clearTimeout = c.clearInterval = function(u) {
          u && u.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(o, this._id);
        }, c.enroll = function(u, f) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = f;
        }, c.unenroll = function(u) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = -1;
        }, c._unrefActive = c.active = function(u) {
          clearTimeout(u._idleTimeoutId);
          var f = u._idleTimeout;
          f >= 0 && (u._idleTimeoutId = setTimeout(function() {
            u._onTimeout && u._onTimeout();
          }, f));
        }, i(6), c.setImmediate = typeof self < "u" && self.setImmediate || n !== void 0 && n.setImmediate || this && this.setImmediate, c.clearImmediate = typeof self < "u" && self.clearImmediate || n !== void 0 && n.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(r, c, i) {
      (function(n, o) {
        (function(d, v) {
          if (!d.setImmediate) {
            var u, f, p, y, w, b = 1, t = {}, e = !1, l = d.document, s = Object.getPrototypeOf && Object.getPrototypeOf(d);
            s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? u = function(h) {
              o.nextTick(function() {
                m(h);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var h = !0, k = d.onmessage;
                return d.onmessage = function() {
                  h = !1;
                }, d.postMessage("", "*"), d.onmessage = k, h;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
              h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), u = function(h) {
              d.postMessage(y + h, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
              m(h.data);
            }, u = function(h) {
              p.port2.postMessage(h);
            }) : l && "onreadystatechange" in l.createElement("script") ? (f = l.documentElement, u = function(h) {
              var k = l.createElement("script");
              k.onreadystatechange = function() {
                m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
              }, f.appendChild(k);
            }) : u = function(h) {
              setTimeout(m, 0, h);
            }, s.setImmediate = function(h) {
              typeof h != "function" && (h = new Function("" + h));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++)
                k[T] = arguments[T + 1];
              var C = { callback: h, args: k };
              return t[b] = C, u(b), b++;
            }, s.clearImmediate = g;
          }
          function g(h) {
            delete t[h];
          }
          function m(h) {
            if (e)
              setTimeout(m, 0, h);
            else {
              var k = t[h];
              if (k) {
                e = !0;
                try {
                  (function(T) {
                    var C = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(S[0]);
                        break;
                      case 2:
                        C(S[0], S[1]);
                        break;
                      case 3:
                        C(S[0], S[1], S[2]);
                        break;
                      default:
                        C.apply(v, S);
                    }
                  })(k);
                } finally {
                  g(h), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, i(0), i(7));
    }, function(r, c) {
      var i, n, o = r.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(s) {
        if (i === setTimeout)
          return setTimeout(s, 0);
        if ((i === d || !i) && setTimeout)
          return i = setTimeout, setTimeout(s, 0);
        try {
          return i(s, 0);
        } catch {
          try {
            return i.call(null, s, 0);
          } catch {
            return i.call(this, s, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          i = d;
        }
        try {
          n = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          n = v;
        }
      })();
      var f, p = [], y = !1, w = -1;
      function b() {
        y && f && (y = !1, f.length ? p = f.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var s = u(b);
          y = !0;
          for (var g = p.length; g; ) {
            for (f = p, p = []; ++w < g; )
              f && f[w].run();
            w = -1, g = p.length;
          }
          f = null, y = !1, function(m) {
            if (n === clearTimeout)
              return clearTimeout(m);
            if ((n === v || !n) && clearTimeout)
              return n = clearTimeout, clearTimeout(m);
            try {
              n(m);
            } catch {
              try {
                return n.call(null, m);
              } catch {
                return n.call(this, m);
              }
            }
          }(s);
        }
      }
      function e(s, g) {
        this.fun = s, this.array = g;
      }
      function l() {
      }
      o.nextTick = function(s) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        p.push(new e(s, g)), p.length !== 1 || y || u(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = l, o.addListener = l, o.once = l, o.off = l, o.removeListener = l, o.removeAllListeners = l, o.emit = l, o.prependListener = l, o.prependOnceListener = l, o.listeners = function(s) {
        return [];
      }, o.binding = function(s) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function() {
        return "/";
      }, o.chdir = function(s) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function() {
        return 0;
      };
    }, function(r, c, i) {
      function n(d, v) {
        for (var u = 0; u < v.length; u++) {
          var f = v[u];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var o = i(9);
      r.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var v, u, f;
        return v = d, f = [{ key: "urlEncode", value: function(p) {
          return o(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p))
            return p;
          if (this.isFormElement(p))
            return new FormData(p);
          if (this.isObject(p)) {
            var y = new FormData();
            return Object.keys(p).forEach(function(w) {
              var b = p[w];
              y.append(w, b);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var b = document.createElement("INPUT");
            b.type = "file", p.multiple && b.setAttribute("multiple", "multiple"), p.accept && b.setAttribute("accept", p.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(b);
            }, !1), b.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var y = p.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(b) {
            var t = b.split(": "), e = t.shift(), l = t.join(": ");
            e && (w[e] = l);
          }), w;
        } }], (u = null) && n(v.prototype, u), f && n(v, f), d;
      }();
    }, function(r, c) {
      var i = function(o) {
        return encodeURIComponent(o).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, n = function(o, d, v, u) {
        return d = d || null, v = v || "&", u = u || null, o ? function(f) {
          for (var p = new Array(), y = 0; y < f.length; y++)
            f[y] && p.push(f[y]);
          return p;
        }(Object.keys(o).map(function(f) {
          var p, y, w = f;
          if (u && (w = u + "[" + w + "]"), typeof o[f] == "object" && o[f] !== null)
            p = n(o[f], null, v, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var b = o[f];
            b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", p = i(w) + "=" + i(b);
          }
          return p;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      r.exports = n;
    }]);
  });
})(I);
var U = I.exports;
const F = /* @__PURE__ */ x(U);
function P(E) {
  return E && typeof E.then == "function";
}
class B {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: a, onUpload: r, onError: c }) {
    this.config = a, this.onUpload = r, this.onError = c;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: a }) {
    const r = function(i) {
      return new Promise((n, o) => {
        const d = new FileReader();
        d.readAsDataURL(i), d.onload = (v) => {
          console.log(1), a(v.target.result), n();
        }, d.onerror = o;
      });
    };
    let c;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? c = F.selectFiles({ accept: this.config.types }).then((i) => r(i[0]).then(() => {
      const n = this.config.uploader.uploadByFile(i[0]);
      return P(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
    })) : c = F.selectFiles({ accept: this.config.types }).then((i) => r(i[0]).then(() => F.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: () => {
      },
      fieldName: this.config.field
    }).then((n) => n.body))), c.then((i) => {
      console.log(2), this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(a) {
    let r;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (r = this.config.uploader.uploadByUrl(a), P(r) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : r = F.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: a
      }, this.config.additionalRequestData),
      type: F.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((c) => c.body), r.then((c) => {
      this.onUpload(c);
    }).catch((c) => {
      this.onError(c);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(a, { onPreview: r }) {
    const c = new FileReader();
    c.readAsDataURL(a), c.onload = (n) => {
      r(n.target.result);
    };
    let i;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      i = this.config.uploader.uploadByFile(a), P(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const n = new FormData();
      n.append(this.config.field, a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o, d]) => {
        n.append(o, d);
      }), i = F.post({
        url: this.config.endpoints.byFile,
        data: n,
        type: F.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((o) => o.body);
    }
    i.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
    });
  }
}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class _ {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Image"
    };
  }
  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: H,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: D,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: R,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: a, config: r, api: c, readOnly: i, block: n }) {
    this.api = c, this.readOnly = i, this.block = n, this.config = {
      endpoints: r.endpoints || "",
      additionalRequestData: r.additionalRequestData || {},
      additionalRequestHeaders: r.additionalRequestHeaders || {},
      field: r.field || "image",
      types: r.types || "image/*",
      captionPlaceholder: this.api.i18n.t(r.captionPlaceholder || "Caption"),
      buttonContent: r.buttonContent || "",
      uploader: r.uploader || void 0,
      actions: r.actions || []
    }, this.uploader = new B({
      config: this.config,
      onUpload: (o) => this.onUpload(o),
      onError: (o) => this.uploadingFailed(o)
    }), this.ui = new j({
      api: c,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (o) => {
            this.ui.showPreloader(o);
          }
        });
      },
      readOnly: i
    }), this._data = {}, this.data = a;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(a) {
    return a.file && a.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const a = this.ui.nodes.caption;
    return this._data.caption = a.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return _.tunes.concat(this.config.actions).map((r) => ({
      icon: r.icon,
      label: this.api.i18n.t(r.title),
      name: r.name,
      toggle: r.toggle,
      isActive: this.data[r.name],
      onActivate: () => {
        if (typeof r.action == "function") {
          r.action(r.name);
          return;
        }
        this.tuneToggled(r.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(a) {
    switch (a.type) {
      case "tag": {
        const r = a.detail.data;
        if (/^blob:/.test(r.src)) {
          const i = await (await fetch(r.src)).blob();
          this.uploadFile(i);
          break;
        }
        this.uploadUrl(r.src);
        break;
      }
      case "pattern": {
        const r = a.detail.data;
        this.uploadUrl(r);
        break;
      }
      case "file": {
        const r = a.detail.file;
        this.uploadFile(r);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(a) {
    this.image = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), _.tunes.forEach(({ name: r }) => {
      const c = typeof a[r] < "u" ? a[r] === !0 || a[r] === "true" : !1;
      this.setTune(r, c);
    });
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(a) {
    this._data.file = a || {}, a && a.url && this.ui.fillImage(a.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(a) {
    a.success && a.file ? this.image = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(a) {
    console.log("Image Tool: uploading failed because of", a), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(a) {
    this.setTune(a, !this._data[a]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(a, r) {
    this._data[a] = r, this.ui.applyTune(a, r), a === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = r;
    }).catch((c) => {
      console.error(c);
    });
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(a) {
    this.uploader.uploadByFile(a, {
      onPreview: (r) => {
        this.ui.showPreloader(r);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(a) {
    this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
  }
}
export {
  _ as default
};
