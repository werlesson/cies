!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.i = function(e) {
      return e;
    }),
    (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "/"),
    t((t.s = 91));
})({
  0: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var i = n(29);
    Object.defineProperty(t, "buildTEMessage", {
      enumerable: !0,
      get: function() {
        return r(i).default;
      }
    });
    var o = n(30);
    Object.defineProperty(t, "isTEEvent", {
      enumerable: !0,
      get: function() {
        return r(o).default;
      }
    });
    var s = n(31);
    Object.defineProperty(t, "isTwitchOrigin", {
      enumerable: !0,
      get: function() {
        return r(s).default;
      }
    });
    var a = n(32);
    Object.defineProperty(t, "notifyAnyHost", {
      enumerable: !0,
      get: function() {
        return r(a).default;
      }
    });
    var u = n(33);
    Object.defineProperty(t, "subscribeToTwitchMessage", {
      enumerable: !0,
      get: function() {
        return r(u).default;
      }
    });
    t.TE_MESSAGE_NAMESPACE = "twitch-everywhere";
  },
  25: function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    t.PLAYER_API = Object.freeze({
      PAUSE: "pause",
      PLAY: "play",
      SEEK: "seek",
      SET_CHANNEL: "setChannel",
      SET_CHANNEL_ID: "setChannelId",
      SET_COLLECTION: "setCollection",
      SET_QUALITY: "setQuality",
      SET_VIDEO: "setVideo",
      SET_MUTED: "setMuted",
      SET_VOLUME: "setVolume",
      GET_MUTED: "getMuted",
      GET_VOLUME: "getVolume",
      GET_CHANNEL: "getChannel",
      GET_CHANNEL_ID: "getChannelId",
      GET_CURRENT_TIME: "getCurrentTime",
      GET_DURATION: "getDuration",
      GET_ENDED: "getEnded",
      GET_PLAYBACK_STATS: "getPlaybackStats",
      GET_QUALITIES: "getQualities",
      GET_QUALITY: "getQuality",
      GET_VIDEO: "getVideo",
      IS_PAUSED: "isPaused"
    });
  },
  26: function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    (t.PLAYER_BRIDGE_API = Object.freeze({ UPDATE_STATE: "updateState" })),
      (t.PLAYER_BRIDGE_MESSAGE_NAMESPACE = "twitch-everywhere-player-bridge");
  },
  29: function(e, t, n) {
    "use strict";
    function r(e, t) {
      return { eventName: e, params: t, namespace: i.TE_MESSAGE_NAMESPACE };
    }
    (t.__esModule = !0), (t.default = r);
    var i = n(0);
  },
  30: function(e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        "object" === i(e.data) &&
        e.data.namespace === o.TE_MESSAGE_NAMESPACE &&
        e.data.eventName === t
      );
    }
    t.__esModule = !0;
    var i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    t.default = r;
    var o = n(0);
  },
  31: function(e, t, n) {
    "use strict";
    function r(e) {
      return i.test(e);
    }
    (t.__esModule = !0), (t.default = r);
    var i = /^https?:\/\/([\w\d]+\.)*twitch\.tv(:\d+)?$/;
  },
  32: function(e, t, n) {
    "use strict";
    function r(e) {
      window.parent.postMessage(e, "*");
    }
    (t.__esModule = !0), (t.default = r);
  },
  33: function(e, t, n) {
    "use strict";
    function r(e, t) {
      var n = i(t);
      return (
        e.addEventListener("message", n),
        function() {
          return e.removeEventListener("message", n);
        }
      );
    }
    function i(e) {
      return function(t) {
        if ((0, o.isTwitchOrigin)(t.origin)) return e(t);
      };
    }
    (t.__esModule = !0), (t.default = r);
    var o = n(0);
  },
  75: function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = {};
    (r.IFRAME_INDEX = "https://embed.twitch.tv"), (t.default = r);
  },
  76: function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    t.EMBED_EVENTS = Object.freeze({
      AUTHENTICATE: "authenticate",
      VIDEO_READY: "video.ready",
      VIDEO_PLAY: "video.play",
      VIDEO_PAUSE: "video.pause"
    });
  },
  77: function(e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function o(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    (t.MissingParameterError = (function(e) {
      function t() {
        return r(this, t), i(this, e.apply(this, arguments));
      }
      return o(t, e), t;
    })(Error)),
      (t.MissingElementError = (function(e) {
        function t(n) {
          return (
            r(this, t),
            i(this, e.call(this, "Could not find an element with id: " + n))
          );
        }
        return o(t, e), t;
      })(Error));
  },
  78: function(e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    t.__esModule = !0;
    var i = n(25),
      o = n(26),
      s = {
        channelName: "",
        channelId: "",
        currentTime: 0,
        duration: 0,
        muted: !1,
        playback: "",
        quality: "",
        qualitiesAvailable: [],
        stats: {},
        videoID: "",
        viewers: 0,
        volume: 0
      },
      a = (function() {
        function e(t) {
          r(this, e),
            (this._everywhereWindow = t),
            (this._playerState = s),
            window.addEventListener(
              "message",
              this._handleResponses.bind(this)
            );
        }
        return (
          (e.prototype.pause = function() {
            this._sendCommand(i.PLAYER_API.PAUSE);
          }),
          (e.prototype.play = function() {
            this._sendCommand(i.PLAYER_API.PLAY);
          }),
          (e.prototype.seek = function(e) {
            this._sendCommand(i.PLAYER_API.SEEK, [e]);
          }),
          (e.prototype.setChannel = function(e) {
            this._sendCommand(i.PLAYER_API.SET_CHANNEL, [e]);
          }),
          (e.prototype.setChannelId = function(e) {
            this._sendCommand(i.PLAYER_API.SET_CHANNEL_ID, [e]);
          }),
          (e.prototype.setCollection = function(e, t) {
            this._sendCommand(i.PLAYER_API.SET_COLLECTION, [e, t]);
          }),
          (e.prototype.setQuality = function(e) {
            this._sendCommand(i.PLAYER_API.SET_QUALITY, [e]);
          }),
          (e.prototype.setVideo = function(e) {
            this._sendCommand(i.PLAYER_API.SET_VIDEO, [e]);
          }),
          (e.prototype.setMuted = function() {
            this._sendCommand(i.PLAYER_API.SET_MUTED);
          }),
          (e.prototype.setVolume = function(e) {
            this._sendCommand(i.PLAYER_API.SET_VOLUME, [e]);
          }),
          (e.prototype.getMuted = function() {
            return this._playerState.muted;
          }),
          (e.prototype.getVolume = function() {
            return this._playerState.volume;
          }),
          (e.prototype.getChannel = function() {
            return this._playerState.channelName;
          }),
          (e.prototype.getChannelId = function() {
            return this._playerState.channelId;
          }),
          (e.prototype.getCurrentTime = function() {
            return this._playerState.currentTime;
          }),
          (e.prototype.getDuration = function() {
            return this._playerState.duration;
          }),
          (e.prototype.getEnded = function() {
            return this._playerState.ended;
          }),
          (e.prototype.getPlaybackStats = function() {
            return this._playerState.stats.videoStats;
          }),
          (e.prototype.getQualities = function() {
            return this._playerState.qualitiesAvailable;
          }),
          (e.prototype.getQuality = function() {
            return this._playerState.quality;
          }),
          (e.prototype.getVideo = function() {
            return this._playerState.videoId;
          }),
          (e.prototype.isPaused = function() {
            return "paused" === this._playerState.playback;
          }),
          (e.prototype._sendCommand = function(e, t) {
            var n = {
              eventName: e,
              params: t,
              namespace: o.PLAYER_BRIDGE_MESSAGE_NAMESPACE
            };
            this._everywhereWindow.postMessage(n, "*");
          }),
          (e.prototype._handleResponses = function(e) {
            var t = e.data,
              n = e.source,
              r = n === this._everywhereWindow,
              i = t.namespace === o.PLAYER_BRIDGE_MESSAGE_NAMESPACE,
              s = t.eventName === o.PLAYER_BRIDGE_API.UPDATE_STATE;
            r &&
              i &&
              s &&
              (this._playerState = Object.assign(
                {},
                this._playerState,
                t.params
              ));
          }),
          e
        );
      })();
    t.default = a;
  },
  82: function(e, t) {
    function n() {
      (this._events = this._events || {}),
        (this._maxListeners = this._maxListeners || void 0);
    }
    function r(e) {
      return "function" == typeof e;
    }
    function i(e) {
      return "number" == typeof e;
    }
    function o(e) {
      return "object" == typeof e && null !== e;
    }
    function s(e) {
      return void 0 === e;
    }
    (e.exports = n),
      (n.EventEmitter = n),
      (n.prototype._events = void 0),
      (n.prototype._maxListeners = void 0),
      (n.defaultMaxListeners = 10),
      (n.prototype.setMaxListeners = function(e) {
        if (!i(e) || e < 0 || isNaN(e))
          throw TypeError("n must be a positive number");
        return (this._maxListeners = e), this;
      }),
      (n.prototype.emit = function(e) {
        var t, n, i, a, u, l;
        if (
          (this._events || (this._events = {}),
          "error" === e &&
            (!this._events.error ||
              (o(this._events.error) && !this._events.error.length)))
        ) {
          if ((t = arguments[1]) instanceof Error) throw t;
          var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((c.context = t), c);
        }
        if (((n = this._events[e]), s(n))) return !1;
        if (r(n))
          switch (arguments.length) {
            case 1:
              n.call(this);
              break;
            case 2:
              n.call(this, arguments[1]);
              break;
            case 3:
              n.call(this, arguments[1], arguments[2]);
              break;
            default:
              (a = Array.prototype.slice.call(arguments, 1)), n.apply(this, a);
          }
        else if (o(n))
          for (
            a = Array.prototype.slice.call(arguments, 1),
              l = n.slice(),
              i = l.length,
              u = 0;
            u < i;
            u++
          )
            l[u].apply(this, a);
        return !0;
      }),
      (n.prototype.addListener = function(e, t) {
        var i;
        if (!r(t)) throw TypeError("listener must be a function");
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit("newListener", e, r(t.listener) ? t.listener : t),
          this._events[e]
            ? o(this._events[e])
              ? this._events[e].push(t)
              : (this._events[e] = [this._events[e], t])
            : (this._events[e] = t),
          o(this._events[e]) &&
            !this._events[e].warned &&
            (i = s(this._maxListeners)
              ? n.defaultMaxListeners
              : this._maxListeners) &&
            i > 0 &&
            this._events[e].length > i &&
            ((this._events[e].warned = !0),
            console.error(
              "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
              this._events[e].length
            ),
            "function" == typeof console.trace && console.trace()),
          this
        );
      }),
      (n.prototype.on = n.prototype.addListener),
      (n.prototype.once = function(e, t) {
        function n() {
          this.removeListener(e, n), i || ((i = !0), t.apply(this, arguments));
        }
        if (!r(t)) throw TypeError("listener must be a function");
        var i = !1;
        return (n.listener = t), this.on(e, n), this;
      }),
      (n.prototype.removeListener = function(e, t) {
        var n, i, s, a;
        if (!r(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (
          ((n = this._events[e]),
          (s = n.length),
          (i = -1),
          n === t || (r(n.listener) && n.listener === t))
        )
          delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(n)) {
          for (a = s; a-- > 0; )
            if (n[a] === t || (n[a].listener && n[a].listener === t)) {
              i = a;
              break;
            }
          if (i < 0) return this;
          1 === n.length
            ? ((n.length = 0), delete this._events[e])
            : n.splice(i, 1),
            this._events.removeListener && this.emit("removeListener", e, t);
        }
        return this;
      }),
      (n.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return (
            0 === arguments.length
              ? (this._events = {})
              : this._events[e] && delete this._events[e],
            this
          );
        if (0 === arguments.length) {
          for (t in this._events)
            "removeListener" !== t && this.removeAllListeners(t);
          return (
            this.removeAllListeners("removeListener"), (this._events = {}), this
          );
        }
        if (((n = this._events[e]), r(n))) this.removeListener(e, n);
        else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this;
      }),
      (n.prototype.listeners = function(e) {
        return this._events && this._events[e]
          ? r(this._events[e])
            ? [this._events[e]]
            : this._events[e].slice()
          : [];
      }),
      (n.prototype.listenerCount = function(e) {
        if (this._events) {
          var t = this._events[e];
          if (r(t)) return 1;
          if (t) return t.length;
        }
        return 0;
      }),
      (n.listenerCount = function(e, t) {
        return e.listenerCount(t);
      });
  },
  9: function(e, t, n) {
    "use strict";
    function r(e) {
      var t = {};
      return (
        e
          .substring(1)
          .toLowerCase()
          .split("&")
          .forEach(function(e) {
            if (e.length) {
              var n = e.split("="),
                r = n[0],
                i = n[1];
              try {
                t[r] = decodeURIComponent(i);
              } catch (e) {
                t[r] = i;
              }
            }
          }),
        t
      );
    }
    function i(e) {
      var t = [];
      return (
        Object.keys(e).forEach(function(n) {
          var r = e[n];
          if (r) {
            var i = encodeURIComponent(r);
            t.push(n + "=" + i);
          }
        }),
        t.length ? "?" + t.join("&") : ""
      );
    }
    (t.__esModule = !0), (t.parseQueryParams = r), (t.buildQueryParams = i);
  },
  91: function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e) {
      var t = (0, c.buildQueryParams)({
          "font-size": e.fontSize,
          allowfullscreen: e.allowfullscreen,
          autoplay: e.autoplay,
          channel: e.channel,
          chat: e.chat,
          collection: e.collection,
          layout: e.layout,
          muted: e.muted,
          playsinline: e.playsinline,
          theme: e.theme,
          time: e.time,
          video: e.video,
          referrer: document.location.href
        }),
        n = "" + p.default.IFRAME_INDEX + t,
        r = document.createElement("iframe");
      return (
        r.setAttribute("src", n),
        r.setAttribute("allowfullscreen", ""),
        r.setAttribute("scrolling", "no"),
        r.setAttribute("frameborder", "0"),
        r.setAttribute("allow", "autoplay; fullscreen"),
        e.width && r.setAttribute("width", e.width),
        e.height && r.setAttribute("height", e.height),
        r
      );
    }
    function s(e, t) {
      if (!e)
        throw new f.MissingParameterError("An element argument is required");
      if (!u(e) && !a(e))
        throw new f.MissingParameterError(
          "An element of type String or Element is required"
        );
      if (!t || (!t.channel && !t.video && !t.collection))
        throw new f.MissingParameterError(
          "A channel, video, or collection id must be provided in options"
        );
    }
    function a(e) {
      return "string" == typeof e;
    }
    function u(e) {
      return 1 === e.nodeType;
    }
    var l = n(0),
      c = n(9),
      f = n(77),
      h = n(75),
      p = r(h),
      _ = n(78),
      d = r(_),
      E = n(76),
      m = n(82),
      y = r(m);
    (window.Twitch = window.Twitch || {}),
      (window.Twitch.Embed = (function() {
        function e(t, n) {
          i(this, e),
            s(t, n),
            (this.target = t),
            (this.options = n),
            this.render(),
            (this._eventEmitter = new y.default()),
            (this.player = null);
        }
        return (
          (e.prototype.addEventListener = function(e, t) {
            this._eventEmitter.on(e, t);
          }),
          (e.prototype.removeEventListener = function(e, t) {
            this._eventEmitter.removeListener(e, t);
          }),
          (e.prototype.getPlayer = function() {
            return this.player;
          }),
          (e.prototype.render = function() {
            var e = this,
              t = a(this.target)
                ? document.getElementById(this.target)
                : this.target;
            if (!t) throw new f.MissingElementError(this.target);
            var n = o(this.options);
            t.appendChild(n),
              window.addEventListener("message", function(t) {
                var r = t.data,
                  i = t.source,
                  o = i === n.contentWindow,
                  s = r.namespace === l.TE_MESSAGE_NAMESPACE;
                o &&
                  s &&
                  (r.eventName === E.EMBED_EVENTS.VIDEO_READY &&
                    (e.player = new d.default(n.contentWindow)),
                  e._eventEmitter.emit(r.eventName, r.params));
              });
          }),
          (e.prototype.destroy = function() {
            this._eventEmitter.removeAllListeners(),
              (this._eventEmitter = null),
              (this.player = null),
              (this.target = null);
          }),
          e
        );
      })()),
      (function(e) {
        Object.keys(E.EMBED_EVENTS).forEach(function(t) {
          e[t] = E.EMBED_EVENTS[t];
        });
      })(window.Twitch.Embed);
  }
});
