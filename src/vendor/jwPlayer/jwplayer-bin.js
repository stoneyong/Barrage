(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jwplayer"] = factory();
	else
		root["jwplayer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpjwplayer"];
/******/ 	window["webpackJsonpjwplayer"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({"1":"polyfills.promise","2":"polyfills.base64","3":"vttparser","4":"provider.html5","5":"provider.flash","6":"provider.youtube","7":"polyfills.vttrenderer","8":"polyfills.intersection-observer"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** multi jwplayer ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/js/jwplayer.js */44);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/*!****************************!*\
  !*** ./src/js/jwplayer.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! api/global-api */ 45),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (GlobalApi, utils) {
	    /*global __webpack_public_path__:true*/
	    __webpack_require__.p = utils.loadFrom();
	
	    return GlobalApi.selectPlayer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 45 */
/*!**********************************!*\
  !*** ./src/js/api/global-api.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! api/api */ 46),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! providers/providers */ 95),
	    __webpack_require__(/*! providers/providers-supported */ 98),
	    __webpack_require__(/*! plugins/plugins */ 78)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Api, _, Providers, ProvidersSupported, plugins) {
	
	    var _instances = [],
	        _uniqueIndex = 0;
	
	
	    var selectPlayer = function (query) {
	        var player;
	        var domElement;
	
	        // prioritize getting a player over querying an element
	        if (!query) {
	            player = _instances[0];
	        } else if (typeof query === 'string') {
	            player = _playerById(query);
	            if (!player) {
	                domElement = document.getElementById(query);
	            }
	        } else if (typeof query === 'number') {
	            player = _instances[query];
	        } else if (query.nodeType) {
	            domElement = query;
	            player = _playerById(domElement.id);
	        }
	        // found player
	        if (player) {
	            return player;
	        }
	        // create player
	        if (domElement) {
	            return _addPlayer(new Api(domElement, _removePlayer));
	        }
	        // invalid query
	        return {
	            registerPlugin: plugins.registerPlugin
	        };
	    };
	
	    var _playerById = function (id) {
	        for (var p = 0; p < _instances.length; p++) {
	            if (_instances[p].id === id) {
	                return _instances[p];
	            }
	        }
	
	        return null;
	    };
	
	    var _addPlayer = function (api) {
	        _uniqueIndex++;
	        api.uniqueId = _uniqueIndex;
	        _instances.push(api);
	        return api;
	    };
	
	    var _removePlayer = function (api) {
	        for (var i=_instances.length; i--;) {
	            if (_instances[i].uniqueId === api.uniqueId) {
	                _instances.splice(i, 1);
	                break;
	            }
	        }
	    };
	
	    var api = {
	        selectPlayer : selectPlayer,
	        registerProvider: Providers.registerProvider,
	        availableProviders: ProvidersSupported,
	        registerPlugin : plugins.registerPlugin
	    };
	
	    selectPlayer.api = api;
	
	    return api;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 46 */
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/timer */ 108),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! controller/controller */ 47),
	    __webpack_require__(/*! api/api-actions */ 178),
	    __webpack_require__(/*! api/api-mutators */ 179),
	    __webpack_require__(/*! api/callbacks-deprecate */ 180),
	    __webpack_require__(/*! version */ 66)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(events, states,
	            Events, utils, Timer, _, Controller, actionsInit, mutatorsInit, legacyInit, version) {
	
	    var Api = function (container, globalRemovePlayer) {
	        var _this = this,
	            _controller,
	            _playerReady = false,
	            _itemMeta = {};
	
	        // Set up event handling
	        _.extend(this, Events);
	
	        // Provide module access to plugins from the player instance
	        this.utils = utils;
	        this._ = _;
	        this.Events = Events;
	        this.version = version;
	
	        this.trigger = function(type, args) {
	            if (_.isObject(args)) {
	                args = _.extend({}, args);
	            } else {
	                args = {};
	            }
	            args.type = type;
	            var jwplayer = window.jwplayer;
	            if (jwplayer && jwplayer.debug) {
	                return Events.trigger.call(_this, type, args);
	            }
	            return Events.triggerSafe.call(_this, type, args);
	        };
	
	        // Required by vast
	        // <deprecate>
	        this.dispatchEvent = this.trigger;
	        this.removeEventListener = this.off.bind(this);
	        // </deprecate>
	
	        var _setupController = function() {
	            _controller = new Controller(container);
	
	            // Add a bunch of methods
	            actionsInit(_this, _controller);
	            mutatorsInit(_this, _controller);
	            _controller.on(events.JWPLAYER_PLAYLIST_ITEM, function () {
	                _itemMeta = {};
	            });
	            _controller.on(events.JWPLAYER_MEDIA_META, function (data) {
	                _.extend(_itemMeta, data.metadata);
	            });
	
	            // capture the ready event and add setup time to it
	            _controller.on(events.JWPLAYER_READY, function(event) {
	                _playerReady = true;
	                _qoe.tick('ready');
	                event.setupTime = _qoe.between('setup', 'ready');
	            });
	            _controller.on('all', _this.trigger);
	        };
	        _setupController();
	        legacyInit(this);
	
	        // These should be read-only model properties
	        this.id = container.id;
	
	        // Intialize QOE timer
	        var _qoe = this._qoe = new Timer();
	        _qoe.tick('init');
	
	
	        var _reset = function() {
	            _playerReady = false;
	            _itemMeta = {};
	
	            _this.off();
	
	            if (_controller) {
	                _controller.off();
	            }
	
	            // so players can be removed before loading completes
	            if (_controller && _controller.playerDestroy) {
	                _controller.playerDestroy();
	            }
	        };
	
	        this.getPlugin = function(name) {
	            return _this.plugins && _this.plugins[name];
	        };
	
	        this.addPlugin = function(name, pluginInstance) {
	            this.plugins = this.plugins || {};
	            this.plugins[name] = pluginInstance;
	
	
	            this.onReady(pluginInstance.addToPlayer);
	
	            // A swf plugin may rely on resize events
	            if (pluginInstance.resize) {
	                this.onResize(pluginInstance.resizeHandler);
	            }
	        };
	
	        this.setup = function (options) {
	            _qoe.tick('setup');
	
	            _reset();
	            _setupController();
	
	            // bind event listeners passed in to the config
	            utils.foreach(options.events, function(evt, val) {
	                var fn = _this[evt];
	                if (typeof fn === 'function') {
	                    fn.call(_this, val);
	                }
	            });
	
	            options.id = _this.id;
	            _controller.setup(options, this);
	
	            return _this;
	        };
	
	        this.qoe = function() {
	            var qoeItem = _controller.getItemQoe();
	
	            var setupTime = _qoe.between('setup', 'ready');
	            var firstFrame = qoeItem.getFirstFrame();
	
	            return {
	                setupTime : setupTime,
	                firstFrame : firstFrame,
	                player : _qoe.dump(),
	                item : qoeItem.dump()
	            };
	        };
	
	        // Request this from the view/controller
	        this.getContainer = function () {
	            if(_controller.getContainer) {
	                // If the controller has fully set up...
	                return _controller.getContainer();
	            }
	            // If the controller hasn't set up yet, and we need this (due a setup to error), send the container
	            return container;
	        };
	
	        this.getMeta = this.getItemMeta = function () {
	            return _itemMeta;
	        };
	
	        this.getPlaylistItem = function (index) {
	            if (!utils.exists(index)) {
	                return _controller._model.get('playlistItem');
	            }
	            var playlist = _this.getPlaylist();
	            if (playlist) {
	                return playlist[index];
	            }
	            return null;
	        };
	
	        this.getRenderingMode = function () {
	            return 'html5';
	        };
	
	        this.getMute = function () {
	            return _controller._model.getMute();
	        };
	
	        this.load = function (toLoad) {
	            _controller.load(toLoad);
	            return _this;
	        };
	
	        this.play = function (state, meta) {
	            if (_.isObject(state) && state.reason) {
	                meta = state;
	            }
	            if (!meta) {
	                meta = { reason: 'external' };
	            }
	            if (state === true) {
	                _controller.play(meta);
	                return _this;
	            } else if (state === false) {
	                _controller.pause(meta);
	                return _this;
	            }
	
	            state = _this.getState();
	            switch (state) {
	                case states.PLAYING:
	                case states.BUFFERING:
	                    _controller.pause(meta);
	                    break;
	                default:
	                    _controller.play(meta);
	            }
	
	            return _this;
	        };
	
	        this.pause = function (state, meta) {
	            if (_.isBoolean(state)) {
	                return this.play(!state, meta);
	            }
	
	            return this.play(meta);
	        };
	
	        this.createInstream = function () {
	            return _controller.createInstream();
	        };
	
	        this.castToggle = function() {
	            if (_controller && _controller.castToggle) {
	                _controller.castToggle();
	            }
	        };
	
	        // These may be overridden by ad plugins
	        this.playAd = this.pauseAd = utils.noop;
	
	        this.remove = function () {
	            // Remove from array of players
	            globalRemovePlayer(_this);
	
	            // terminate state
	            _this.trigger('remove');
	
	            // Unbind listeners and destroy controller/model/...
	            _reset();
	
	            return _this;
	        };
	
	        return this;
	    };
	
	    return Api;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 47 */
/*!*****************************************!*\
  !*** ./src/js/controller/controller.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! api/config */ 75),
	    __webpack_require__(/*! controller/instream-adapter */ 112),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! controller/Setup */ 76),
	    __webpack_require__(/*! controller/captions */ 87),
	    __webpack_require__(/*! controller/model */ 94),
	    __webpack_require__(/*! controller/storage */ 110),
	    __webpack_require__(/*! playlist/playlist */ 111),
	    __webpack_require__(/*! playlist/loader */ 48),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! view/view */ 116),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! events/change-state-event */ 114),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! view/error */ 175)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Config, InstreamAdapter, _, Setup, Captions, Model, Storage,
	            Playlist, PlaylistLoader, utils, View, Events, changeStateEvent, states, events, error) {
	
	    function _queueCommand(command) {
	        return function(){
	            var args = Array.prototype.slice.call(arguments, 0);
	
	            if (!this._model.getVideo()) {
	                this.eventsQueue.push([command, args]);
	            } else {
	                this['_'+command].apply(this, args);
	            }
	        };
	    }
	
	    // The model stores a different state than the provider
	    function normalizeState(newstate) {
	        if (newstate === states.LOADING || newstate === states.STALLED) {
	            return states.BUFFERING;
	        }
	        return newstate;
	    }
	
	    var Controller = function(originalContainer) {
	        this.originalContainer = this.currentContainer = originalContainer;
	        this.eventsQueue = [];
	        _.extend(this, Events);
	
	        this._model = new Model();
	    };
	
	    Controller.prototype = {
	        /** Controller API / public methods **/
	        play : _queueCommand('play'),
	        pause : _queueCommand('pause'),
	        seek : _queueCommand('seek'),
	        stop : _queueCommand('stop'),
	        load : _queueCommand('load'),
	        playlistNext : _queueCommand('next'),
	        playlistPrev : _queueCommand('prev'),
	        playlistItem : _queueCommand('item'),
	        setCurrentCaptions : _queueCommand('setCurrentCaptions'),
	        setCurrentQuality : _queueCommand('setCurrentQuality'),
	        setFullscreen : _queueCommand('setFullscreen'),
	
	        setup : function(options, _api) {
	
	            var _model = this._model,
	                _view,
	                _captions,
	                _setup,
	                _preplay = false,
	                _actionOnAttach,
	                _stopPlaylist = false, // onComplete, should we play next item or not?
	                _interruptPlay,
	                _this = this,
	                _xo; // Intersection Observer - used for playing video on mobile when visible
	
	            var _video = function() { return _model.getVideo(); };
	
	            var storage = new Storage();
	            storage.track(_model);
	            var config = new Config(options, storage);
	
	            var _eventQueuedUntilReady = [];
	
	            _model.setup(config, storage);
	            _view  = this._view = new View(_api, _model);
	            _setup = new Setup(_api, _model, _view, _setPlaylist);
	
	            _setup.on(events.JWPLAYER_READY, _playerReady, this);
	            _setup.on(events.JWPLAYER_SETUP_ERROR, this.setupError, this);
	
	            _model.mediaController.on('all', _triggerAfterReady, this);
	            _model.mediaController.on(events.JWPLAYER_MEDIA_COMPLETE, function() {
	                // Insert a small delay here so that other complete handlers can execute
	                _.defer(_completeHandler);
	            });
	            _model.mediaController.on(events.JWPLAYER_MEDIA_ERROR, this.triggerError, this);
	
	            // If we attempt to load flash, assume it is blocked if we don't hear back within a second
	            _model.on('change:flashBlocked', function(model, isBlocked) {
	                if (!isBlocked) {
	                    this._model.set('errorEvent', undefined);
	                    return;
	                }
	                // flashThrottle indicates whether this is a throttled event or plugin blocked event
	                var throttled = !!model.get('flashThrottle');
	                var errorEvent  = {
	                    message: throttled ? 'Click to run Flash' : 'Flash plugin failed to load'
	                };
	                // Only dispatch an error for Flash blocked, not throttled events
	                if (!throttled) {
	                    this.trigger(events.JWPLAYER_ERROR, errorEvent);
	                }
	                this._model.set('errorEvent', errorEvent);
	            }, this);
	
	            _model.on('change:state', changeStateEvent, this);
	
	            _model.on('change:castState', function(model, evt) {
	                _this.trigger(events.JWPLAYER_CAST_SESSION, evt);
	            });
	            _model.on('change:fullscreen', function(model, bool) {
	                _this.trigger(events.JWPLAYER_FULLSCREEN, {
	                    fullscreen: bool
	                });
	               if (bool && _xo) {
	                   // Stop autoplay behavior when the player enters fullscreen
	                   _stopObserving();
	               }
	            });
	            _model.on('itemReady', function() {
	                _this.triggerAfterReady(events.JWPLAYER_PLAYLIST_ITEM, {
	                    index: _model.get('item'),
	                    item: _model.get('playlistItem')
	                });
	            });
	            _model.on('change:playlist', function(model, playlist) {
	                if (playlist.length) {
	                    _this.triggerAfterReady(events.JWPLAYER_PLAYLIST_LOADED, {
	                        playlist: playlist
	                    });
	                }
	            });
	            _model.on('change:volume', function(model, vol) {
	                _this.trigger(events.JWPLAYER_MEDIA_VOLUME, {
	                    volume: vol
	                });
	            });
	            _model.on('change:mute', function(model, mute) {
	                _this.trigger(events.JWPLAYER_MEDIA_MUTE, {
	                    mute: mute
	                });
	            });
	            _model.on('change:controls', function(model, mode) {
	                _this.trigger(events.JWPLAYER_CONTROLS, {
	                    controls: mode
	                });
	            });
	
	            _model.on('change:scrubbing', function(model, state) {
	                if (state) {
	                    _pause();
	                } else {
	                    _play({ reason: 'interaction' });
	                }
	            });
	
	            // For onCaptionsList and onCaptionsChange
	            _model.on('change:captionsList', function(model, captionsList) {
	                try {
	                    _this.triggerAfterReady(events.JWPLAYER_CAPTIONS_LIST, {
	                        tracks: captionsList,
	                        track: _getCurrentCaptions()
	                    });
	                } catch (e) {
	                    utils.log('Error with captionsList event:', e);
	                }
	            });
	
	            _model.on('change:mediaModel', function(model) {
	                model.mediaModel.on('change:state', function(mediaModel, state) {
	                    var modelState = normalizeState(state);
	                    model.set('state', modelState);
	                });
	            });
	
	            // Ensure captionsList event is raised after playlistItem
	            _captions = new Captions(_api, _model);
	
	            function _triggerAfterReady(type, e) {
	                _this.triggerAfterReady(type, e);
	            }
	
	            function _playerReady() {
	                _setup = null;
	
	                _view.on('all', _triggerAfterReady, _this);
	
	                _this.showView(_view.element());
	
	                // Defer triggering of events until they can be registered
	                _.defer(_playerReadyNotify);
	            }
	
	            function _playerReadyNotify() {
	                // Tell the api that we are loaded
	                _this.trigger(events.JWPLAYER_READY, {
	                    // this will be updated by Api
	                    setupTime: 0
	                });
	
	                // Stop queueing certain events
	                _this.triggerAfterReady = _this.trigger;
	
	                // Send queued events
	                for (var i = 0; i < _eventQueuedUntilReady.length; i++) {
	                    var event = _eventQueuedUntilReady[i];
	                    _this.trigger(event.type, event.args);
	                }
	
	                var related = _api.getPlugin('related');
	                if (related) {
	                    related.on('nextUp', _model.setNextUp, _model);
	                }
	                // Start playback on desktop and mobile browsers when allowed
	                if (_canAutoStart()) {
	                    if (utils.isMobile() && _video().video) {
	                        // Only play if the video is in the viewport
	                        _observeVideo(_video().video);
	                    } else {
	                        _autoStart();
	                    }
	                }
	            }
	
	            function _observeVideo(video) {
	                if ('IntersectionObserver' in window &&
	                    'IntersectionObserverEntry' in window &&
	                    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	                    _startObserving(video);
	                } else {
	                    __webpack_require__.e/* nsure */(8/*! polyfills.intersection-observer */, function (require) {
	                        __webpack_require__(/*! polyfills/intersection-observer */ 177);
	                        _startObserving(video);
	                    });
	                }
	            }
	
	            function _startObserving(video) {
	                if (!window.IntersectionObserver) {
	                    return;
	                }
	                _xo = new window.IntersectionObserver(_toggleVideoPlayback, { threshold: 0.5 });
	                _xo.observe(video);
	            }
	
	            function _stopObserving() {
	                _xo.disconnect();
	                _xo = undefined;
	            }
	
	            function _toggleVideoPlayback(entries) {
	                if (entries && entries.length) {
	                    var video = _video().video;
	                    var entry = entries[0];
	                    var meta = { reason: 'autostart' };
	
	                    if (entry.target === video && entry.intersectionRatio >= 0.5) {
	                        _this.play(meta);
	                    } else {
	                        _this.pause(meta);
	                    }
	                }
	            }
	
	            this.triggerAfterReady = function(type, args) {
	                _eventQueuedUntilReady.push({
	                    type: type,
	                    args: args
	                });
	            };
	
	            function _loadProvidersForPlaylist(playlist) {
	                var providersManager = _model.getProviders();
	                var providersNeeded = providersManager.required(playlist, _model.get('primary'));
	                return providersManager.load(providersNeeded)
	                    .then(function() {
	                        if (!_this.getProvider()) {
	                            _model.setProvider(_model.get('playlistItem'));
	
	                            _executeQueuedEvents();
	                        }
	                    });
	            }
	
	            function _executeQueuedEvents() {
	                while (_this.eventsQueue.length > 0) {
	                    var q = _this.eventsQueue.shift();
	                    var method = q[0];
	                    var args = q[1] || [];
	                    _this['_'+method].apply(_this, args);
	                }
	            }
	
	            function _load(item) {
	                if (_model.get('state') === states.ERROR) {
	                    _model.set('state', states.IDLE);
	                }
	                _model.set('preInstreamState', 'instream-idle');
	
	                _stop(true);
	
	                if (_canAutoStart()) {
	                    _model.once('itemReady', _autoStart);
	                }
	                _this.trigger('destroyPlugin', {});
	
	                switch (typeof item) {
	                    case 'string':
	                        _loadPlaylist(item);
	                        break;
	                    case 'object':
	                        var success = _setPlaylist(item);
	                        if (success) {
	                            _setItem(0);
	                        }
	                        break;
	                    case 'number':
	                        _setItem(item);
	                        break;
	                }
	            }
	
	            function _loadPlaylist(toLoad) {
	                var loader = new PlaylistLoader();
	                loader.on(events.JWPLAYER_PLAYLIST_LOADED, function(evt) {
	                    _load(evt.playlist);
	                });
	                loader.on(events.JWPLAYER_ERROR, function(evt) {
	                    evt.message = 'Error loading playlist: ' + evt.message;
	                    this.triggerError(evt);
	                }, this);
	                loader.load(toLoad);
	            }
	
	            function _getAdState() {
	                return _this._instreamAdapter && _this._instreamAdapter.getState();
	            }
	
	            function _getState() {
	                var adState = _getAdState();
	                if (_.isString(adState)) {
	                    return adState;
	                }
	                return _model.get('state');
	            }
	
	            function _play(meta) {
	                var status;
	
	                if (meta) {
	                    _model.set('playReason', meta.reason);
	                }
	
	                if (_model.get('state') === states.ERROR) {
	                    return;
	                }
	
	                var adState = _getAdState();
	                if (_.isString(adState)) {
	                    // this will resume the ad. _api.playAd would load a new ad
	                    return _api.pauseAd(false);
	                }
	
	                if (_model.get('state') === states.COMPLETE) {
	                    _stop(true);
	                    _setItem(0);
	                }
	                if (!_preplay) {
	                    _preplay = true;
	                    _this.trigger(events.JWPLAYER_MEDIA_BEFOREPLAY, {'playReason': _model.get('playReason')});
	                    _preplay = false;
	                    if (_interruptPlay) {
	                        _interruptPlay = false;
	                        _actionOnAttach = null;
	                        return;
	                    }
	                }
	
	                // TODO: The state is idle while providers load
	                if (_isIdle()) {
	                    if (_model.get('playlist').length === 0) {
	                        return false;
	                    }
	
	                    status = utils.tryCatch(function() {
	                        // FIXME: playAttempt is not triggered until this is called. Should be on play()
	                        _model.loadVideo();
	                    });
	                } else if (_model.get('state') === states.PAUSED) {
	                    status = utils.tryCatch(function() {
	                        _model.playVideo();
	                    });
	                }
	
	                if (status instanceof utils.Error) {
	                    _this.triggerError(status);
	                    _actionOnAttach = null;
	                    return false;
	                }
	                return true;
	            }
	
	            function _autoStart() {
	                _play({ reason: 'autostart' });
	            }
	
	            function _stop(internal) {
	                // Reset the autostart play
	                _model.off('itemReady', _autoStart);
	
	                var fromApi = !internal;
	
	                _actionOnAttach = null;
	
	                var status = utils.tryCatch(function() {
	                    _model.stopVideo();
	                }, _this);
	
	                if (status instanceof utils.Error) {
	                    _this.triggerError(status);
	                    return false;
	                }
	
	                if (fromApi) {
	                    _stopPlaylist = true;
	                }
	
	                if (_preplay) {
	                    _interruptPlay = true;
	                }
	
	                return true;
	            }
	
	            function _pause(meta) {
	                _actionOnAttach = null;
	
	                if (meta) {
	                    _model.set('pauseReason', meta.reason);
	                    // Stop autoplay behavior if the video is paused by the user or an api call
	                    if (_xo && (meta.reason === 'interaction' || meta.reason === 'external')) {
	                        _stopObserving();
	                    }
	                }
	
	                var adState = _getAdState();
	                if (_.isString(adState)) {
	                    return _api.pauseAd(true);
	                }
	
	                switch (_model.get('state')) {
	                    case states.ERROR:
	                        return false;
	                    case states.PLAYING:
	                    case states.BUFFERING:
	                        var status = utils.tryCatch(function(){
	                            _video().pause();
	                        }, this);
	
	                        if (status instanceof utils.Error) {
	                            _this.triggerError(status);
	                            return false;
	                        }
	                        break;
	                    default:
	                        if (_preplay) {
	                            _interruptPlay = true;
	                        }
	                }
	                return true;
	            }
	
	            function _isIdle() {
	                var state = _model.get('state');
	                return (state === states.IDLE || state === states.COMPLETE || state === states.ERROR);
	            }
	
	            function _seek(pos, meta) {
	                if (_model.get('state') === states.ERROR) {
	                    return;
	                }
	                if (!_model.get('scrubbing') && _model.get('state') !== states.PLAYING) {
	                    _play(meta);
	                }
	                _video().seek(pos);
	            }
	
	            function _item(index, meta) {
	                _stop(true);
	                if (_model.get('state') === states.ERROR) {
	                    _model.set('state', states.IDLE);
	                }
	                _setItem(index);
	                _play(meta);
	            }
	
	            function _setPlaylist(p) {
	                var playlist = Playlist(p);
	                playlist = Playlist.filterPlaylist(playlist, _model);
	
	                _model.set('playlist', playlist);
	
	                if (!_.isArray(playlist) || playlist.length === 0) {
	                    _this.triggerError({
	                        message: 'Error loading playlist: No playable sources found'
	                    });
	                    return false;
	                }
	
	                _loadProvidersForPlaylist(playlist);
	
	                return true;
	            }
	
	            function _setItem(index) {
	                _model.setItemIndex(index);
	            }
	
	            function _prev(meta) {
	                _item(_model.get('item') - 1, meta || {reason: 'external'});
	            }
	
	            function _next(meta) {
	                _item(_model.get('item') + 1, meta || {reason: 'external'});
	            }
	
	            function _completeHandler() {
	                if (!_isIdle()) {
	                    // Something has made an API call before the complete handler has fired.
	                    return;
	                } else if (_stopPlaylist) {
	                    // Stop called in onComplete event listener
	                    _stopPlaylist = false;
	                    return;
	                }
	
	                _actionOnAttach = _completeHandler;
	
	                var idx = _model.get('item');
	                if (idx === _model.get('playlist').length - 1) {
	                    // If it's the last item in the playlist
	                    if (_model.get('repeat')) {
	                        _next({reason: 'repeat'});
	                    } else {
	                        if (_xo) {
	                            // Autoplay/pause no longer needed since there's no more media to play
	                            // This prevents media from replaying when a completed video scrolls into view
	                            _stopObserving();
	                        }
	                        _model.set('state', states.COMPLETE);
	                        _this.trigger(events.JWPLAYER_PLAYLIST_COMPLETE, {});
	                    }
	                    return;
	                }
	
	                // It wasn't the last item in the playlist,
	                //  so go to the next one
	                _next({reason: 'playlist'});
	            }
	
	            function _setCurrentQuality(index) {
	                if (_video()) {
	                    index = parseInt(index, 10) || 0;
	                    _video().setCurrentQuality(index);
	                }
	            }
	
	            function _getCurrentQuality() {
	                if (_video()) {
	                    return _video().getCurrentQuality();
	                }
	                return -1;
	            }
	
	            function _getConfig() {
	                if (this._model) {
	                    return this._model.getConfiguration();
	                }
	            }
	
	            function _getVisualQuality() {
	                if (this._model.mediaModel) {
	                    return this._model.mediaModel.get('visualQuality');
	                }
	                // if quality is not implemented in the provider,
	                // return quality info based on current level
	                var qualityLevels = _getQualityLevels();
	                if (qualityLevels) {
	                    var levelIndex = _getCurrentQuality();
	                    var level = qualityLevels[levelIndex];
	                    if (level) {
	                        return {
	                            level: _.extend({
	                                index: levelIndex
	                            }, level),
	                            mode: '',
	                            reason: ''
	                        };
	                    }
	                }
	                return null;
	            }
	
	            function _getQualityLevels() {
	                if (_video()) {
	                    return _video().getQualityLevels();
	                }
	                return null;
	            }
	
	            function _setCurrentAudioTrack(index) {
	                if (_video()) {
	                    index = parseInt(index, 10) || 0;
	                    _video().setCurrentAudioTrack(index);
	                }
	            }
	
	            function _getCurrentAudioTrack() {
	                if (_video()) {
	                    return _video().getCurrentAudioTrack();
	                }
	                return -1;
	            }
	
	            function _getAudioTracks() {
	                if (_video()) {
	                    return _video().getAudioTracks();
	                }
	                return null;
	            }
	
	            function _setCurrentCaptions(index) {
	                index = parseInt(index, 10) || 0;
	
	                // update provider subtitle track
	                _model.persistVideoSubtitleTrack(index);
	
	                _this.trigger(events.JWPLAYER_CAPTIONS_CHANGED, {
	                    tracks: _getCaptionsList(),
	                    track: index
	                });
	
	            }
	
	            function _getCurrentCaptions() {
	                return _captions.getCurrentIndex();
	            }
	
	            function _getCaptionsList() {
	                return _captions.getCaptionsList();
	            }
	
	            /** Used for the InStream API **/
	            function _detachMedia() {
	                var provider = _model.getVideo();
	                if (provider) {
	                    var video = provider.detachMedia();
	                    if (video instanceof HTMLVideoElement) {
	                        return video;
	                    }
	                }
	                return null;
	            }
	
	            function _attachMedia() {
	                // Called after instream ends
	                var status = utils.tryCatch(function() {
	                    _model.getVideo().attachMedia();
	                });
	
	                if (status instanceof utils.Error) {
	                    utils.log('Error calling _attachMedia', status);
	                    return;
	                }
	
	                if (typeof _actionOnAttach === 'function') {
	                    _actionOnAttach();
	                }
	            }
	
	            function _setFullscreen(state) {
	                if (!_.isBoolean(state)) {
	                    state = !_model.get('fullscreen');
	                }
	
	                _model.set('fullscreen', state);
	                if (this._instreamAdapter && this._instreamAdapter._adModel) {
	                    this._instreamAdapter._adModel.set('fullscreen', state);
	                }
	            }
	
	            function _nextUp() {
	                var related = _api.getPlugin('related');
	                if (related) {
	                    related.next();
	                }
	            }
	
	            function _canAutoStart() {
	                return (_model.get('autostart') && !utils.isMobile()) || _model.autoStartOnMobile();
	            }
	
	            /** Controller API / public methods **/
	            this._play = _play;
	            this._pause = _pause;
	            this._seek = _seek;
	            this._stop = _stop;
	            this._load = _load;
	            this._next = _next;
	            this._prev = _prev;
	            this._item = _item;
	            this._setCurrentCaptions = _setCurrentCaptions;
	            this._setCurrentQuality = _setCurrentQuality;
	            this._setFullscreen = _setFullscreen;
	
	            this.detachMedia = _detachMedia;
	            this.attachMedia = _attachMedia;
	            this.getCurrentQuality = _getCurrentQuality;
	            this.getQualityLevels = _getQualityLevels;
	            this.setCurrentAudioTrack = _setCurrentAudioTrack;
	            this.getCurrentAudioTrack = _getCurrentAudioTrack;
	            this.getAudioTracks = _getAudioTracks;
	            this.getCurrentCaptions = _getCurrentCaptions;
	            this.getCaptionsList = _getCaptionsList;
	            this.getVisualQuality = _getVisualQuality;
	            this.getConfig = _getConfig;
	            this.getState = _getState;
	
	            // Model passthroughs
	            this.setVolume = _model.setVolume.bind(_model);
	            this.setMute = _model.setMute.bind(_model);
	            this.getProvider = function(){ return _model.get('provider'); };
	            this.getWidth = function() { return _model.get('containerWidth'); };
	            this.getHeight = function() { return _model.get('containerHeight'); };
	
	            // View passthroughs
	            this.getContainer = function(){ return this.currentContainer; };
	            this.resize = _view.resize;
	            this.getSafeRegion = _view.getSafeRegion;
	            //this.forceState = _view.forceState;
	            //this.releaseState = _view.releaseState;
	            this.setCues = _view.addCues;
	            this.setCaptions = _view.setCaptions;
	
	            this.next = _nextUp;
	
	
	            this.addButton = function(img, tooltip, callback, id, btnClass) {
	                var btn = {
	                    img : img,
	                    tooltip : tooltip,
	                    callback : callback,
	                    id : id,
	                    btnClass : btnClass
	                };
	
	                var dock = _model.get('dock');
	                dock = (dock) ? dock.slice(0) : [];
	                dock = _.reject(dock, _.matches({id : btn.id}));
	
	                dock.push(btn);
	                _model.set('dock', dock);
	            };
	
	            this.removeButton = function(id) {
	                var dock = _model.get('dock') || [];
	                dock = _.reject(dock, _.matches({id : id}));
	                _model.set('dock', dock);
	            };
	
	            this.checkBeforePlay = function() {
	                return _preplay;
	            };
	
	            this.getItemQoe = function() {
	                return _model._qoeItem;
	            };
	
	            this.setControls = function (mode) {
	                if (!_.isBoolean(mode)) {
	                    mode = ! _model.get('controls');
	                }
	                _model.set('controls', mode);
	
	                var provider = _model.getVideo();
	                if (provider) {
	                    provider.setControls(mode);
	                }
	            };
	
	            this.playerDestroy = function () {
	                this.stop();
	
	                this.showView(this.originalContainer);
	
	                if (_view) {
	                    _view.destroy();
	                }
	                if (_model) {
	                    _model.destroy();
	                }
	                if (_setup) {
	                    _setup.destroy();
	                    _setup = null;
	                }
	            };
	
	            this.isBeforePlay = this.checkBeforePlay;
	
	            this.isBeforeComplete = function () {
	                return _model.getVideo().checkComplete();
	            };
	
	            this.createInstream = function() {
	                this.instreamDestroy();
	                this._instreamAdapter = new InstreamAdapter(this, _model, _view);
	                return this._instreamAdapter;
	            };
	
	            this.skipAd = function() {
	                if (this._instreamAdapter) {
	                    this._instreamAdapter.skipAd();
	                }
	            };
	
	            this.instreamDestroy = function() {
	                if (_this._instreamAdapter) {
	                    _this._instreamAdapter.destroy();
	                }
	            };
	
	            _setup.start();
	        },
	
	        showView: function(viewElement){
	            if (!document.documentElement.contains(this.currentContainer)) {
	                // This implies the player was removed from the DOM before setup completed
	                //   or a player has been "re" setup after being removed from the DOM
	                this.currentContainer = document.getElementById(this._model.get('id'));
	                if (!this.currentContainer) {
	                    return;
	                }
	            }
	
	            if (this.currentContainer.parentElement) {
	                this.currentContainer.parentElement.replaceChild(viewElement, this.currentContainer);
	            }
	            this.currentContainer = viewElement;
	        },
	
	        triggerError: function(evt) {
	
	            this._model.set('errorEvent', evt);
	            this._model.set('state', states.ERROR);
	            this._model.once('change:state', function() {
	                this._model.set('errorEvent', undefined);
	            }, this);
	
	            this.trigger(events.JWPLAYER_ERROR, evt);
	        },
	
	        setupError: function(evt) {
	            var message = evt.message;
	            var errorElement = utils.createElement(error(this._model.get('id'), this._model.get('skin'), message));
	
	            var width = this._model.get('width'),
	                height = this._model.get('height');
	
	            utils.style(errorElement, {
	                width: width.toString().indexOf('%') > 0 ? width : (width+ 'px'),
	                height: height.toString().indexOf('%') > 0 ? height : (height + 'px')
	            });
	
	            this.showView(errorElement);
	
	            var _this = this;
	            _.defer(function() {
	                _this.trigger(events.JWPLAYER_SETUP_ERROR, {
	                    message: message
	                });
	            });
	        }
	    };
	
	    return Controller;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 48 */
/*!***********************************!*\
  !*** ./src/js/playlist/loader.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! parsers/parsers */ 49),
	    __webpack_require__(/*! parsers/rssparser */ 52),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(parsers, rssParser, utils, events, Events, _) {
	
	    var PlaylistLoader = function() {
	        var _this = _.extend(this, Events);
	
	        this.load = function(playlistfile) {
	            utils.ajax(playlistfile, _playlistLoaded, _playlistLoadError);
	        };
	
	        this.destroy = function() {
	            this.off();
	        };
	
	        function _playlistLoaded(loadedEvent) {
	            var status = utils.tryCatch(function() {
	                var childNodes = loadedEvent.responseXML ? loadedEvent.responseXML.childNodes : null;
	                var rss = '';
	                var jsonObj;
	                if (childNodes) {
	                    for (var i = 0; i < childNodes.length; i++) {
	                        rss = childNodes[i];
	                        // 8: Node.COMMENT_NODE (IE8 doesn't have the Node.COMMENT_NODE constant)
	                        if (rss.nodeType !== 8) {
	                            break;
	                        }
	                    }
	                    if (parsers.localName(rss) === 'xml') {
	                        rss = rss.nextSibling;
	                    }
	                    if (parsers.localName(rss) === 'rss') {
	                        jsonObj = { playlist: rssParser.parse(rss) };
	                    }
	                }
	
	                // If the response is not valid RSS, check if it is JSON
	                if (!jsonObj) {
	                    try {
	                        var pl = JSON.parse(loadedEvent.responseText);
	                        // If the response is not a JSON array, try to read playlist of the response
	                        if (_.isArray(pl)) {
	                            jsonObj = { playlist: pl };
	                        } else if (_.isArray(pl.playlist)) {
	                            jsonObj = pl;
	                        } else {
	                            throw null;
	                        }
	                    } catch (e) {
	                        _playlistError('Not a valid RSS/JSON feed');
	                        return;
	                    }
	                }
	
	                _this.trigger(events.JWPLAYER_PLAYLIST_LOADED, jsonObj);
	            });
	
	            if (status instanceof utils.Error) {
	                _playlistError();
	            }
	        }
	
	        function _playlistLoadError(err) {
	            _playlistError('Playlist load error: ' + err);
	        }
	
	        function _playlistError(msg) {
	            _this.trigger(events.JWPLAYER_ERROR, {
	                message: msg ? msg : 'Error loading file'
	            });
	        }
	    };
	
	    return PlaylistLoader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 49 */
/*!***********************************!*\
  !*** ./src/js/parsers/parsers.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! utils/strings */ 50)], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings) {
	    return {
	        localName: function (node) {
	            if (!node) {
	                return '';
	            } else if (node.localName) {
	                return node.localName;
	            } else if (node.baseName) {
	                return node.baseName;
	            } else {
	                return '';
	            }
	        },
	        textContent: function (node) {
	            if (!node) {
	                return '';
	            } else if (node.textContent) {
	                return strings.trim(node.textContent);
	            } else if (node.text) {
	                return strings.trim(node.text);
	            } else {
	                return '';
	            }
	        },
	        getChildNode: function (parent, index) {
	            return parent.childNodes[index];
	        },
	        numChildren: function (parent) {
	            if (parent.childNodes) {
	                return parent.childNodes.length;
	            } else {
	                return 0;
	            }
	        }
	
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 50 */
/*!*********************************!*\
  !*** ./src/js/utils/strings.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    /** Removes whitespace from the beginning and end of a string **/
	    var trim = function (inputString) {
	        return inputString.replace(/^\s+|\s+$/g, '');
	    };
	
	    /**
	     * Pads a string
	     * @param {String} string
	     * @param {Number} length
	     * @param {String} padder
	     */
	    var pad = function (str, length, padder) {
	        str = '' + str;
	        padder = padder || '0';
	        while (str.length < length) {
	            str = padder + str;
	        }
	        return str;
	    };
	
	    /**
	     * Get the value of a case-insensitive attribute in an XML node
	     * @param {XML} xml
	     * @param {String} attribute
	     * @return {String} Value
	     */
	    var xmlAttribute = function (xml, attribute) {
	        for (var attrib = 0; attrib < xml.attributes.length; attrib++) {
	            if (xml.attributes[attrib].name && xml.attributes[attrib].name.toLowerCase() === attribute.toLowerCase()) {
	                return xml.attributes[attrib].value.toString();
	            }
	        }
	        return '';
	    };
	
	    /**
	     * This does not return the file extension, instead it returns a media type extension
	     */
	    function getAzureFileFormat(path) {
	        if ((/[\(,]format=m3u8-/i).test(path)) {
	            return 'm3u8';
	        } else if ((/[\(,]format=mpd-/i).test(path)) {
	            return 'mpd';
	        } else {
	            return false;
	        }
	    }
	
	    var extension = function (path) {
	        if (!path || path.substr(0, 4) === 'rtmp') {
	            return '';
	        }
	
	        var azureFormat = getAzureFileFormat(path);
	        if (azureFormat) {
	            return azureFormat;
	        }
	
	        path = path.split('?')[0].split('#')[0];
	        if (path.lastIndexOf('.') > -1) {
	            return path.substr(path.lastIndexOf('.') + 1, path.length).toLowerCase();
	        }
	    };
	
	    /**
	     * Convert seconds to HH:MN:SS.sss
	     *
	     * @param seconds  The number of seconds
	     * @return        An HH:MN:SS.sss string
	     **/
	    var hms = function(seconds) {
	        var h = parseInt(seconds / 3600);
	        var m = parseInt(seconds / 60) % 60;
	        var s = seconds % 60;
	        return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s.toFixed(3), 6);
	    };
	
	    /**
	     * Convert a time-representing string to a number.
	     *
	     * @param {String}    The input string. Supported are 00:03:00:29 / 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
	     * @return {Number}    The number of seconds.
	     */
	    var seconds = function (str, frameRate) {
	        if (_.isNumber(str)) {
	            return str;
	        }
	
	        str = str.replace(',', '.');
	        var arr = str.split(':');
	        var arrLength = arr.length;
	        var sec = 0;
	        if (str.slice(-1) === 's') {
	            sec = parseFloat(str);
	        } else if (str.slice(-1) === 'm') {
	            sec = parseFloat(str) * 60;
	        } else if (str.slice(-1) === 'h') {
	            sec = parseFloat(str) * 3600;
	        } else if (arrLength > 1) {
	            var secIndex = arrLength - 1;
	            if (arrLength === 4) {
	                // if frame is included in the string, calculate seconds by dividing by frameRate
	                if (frameRate) {
	                    sec = parseFloat(arr[secIndex]) / frameRate;
	                }
	                secIndex -= 1;
	            }
	            sec += parseFloat(arr[secIndex]);
	            sec += parseFloat(arr[secIndex - 1]) * 60;
	            if (arrLength >= 3) {
	                sec += parseFloat(arr[secIndex - 2]) * 3600;
	            }
	        } else {
	            sec = parseFloat(str);
	        }
	        return sec;
	    };
	
	
	    var prefix = function(arr, add) {
	        return _.map(arr, function(val) {
	            return add + val;
	        });
	    };
	
	    var suffix = function(arr, add) {
	        return _.map(arr, function(val) {
	            return val + add;
	        });
	    };
	
	    return {
	        trim : trim,
	        pad : pad,
	        xmlAttribute : xmlAttribute,
	        extension : extension,
	        hms: hms,
	        seconds: seconds,
	        suffix: suffix,
	        prefix: prefix
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/*!************************************!*\
  !*** ./src/js/utils/underscore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.6.0
	//     http://underscorejs.org
	//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	// https://github.com/jashkenas/underscore/blob/1f4bf626f23a99f7a676f5076dc1b1475554c8f7/underscore.js
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	    // Establish the object that gets returned to break out of a loop iteration.
	    var breaker = {};
	
	    // Save bytes in the minified (but not gzipped) version:
	    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	    // Create quick reference variables for speed access to core prototypes.
	    var
	        slice = ArrayProto.slice,
	        concat = ArrayProto.concat,
	        toString = ObjProto.toString,
	        hasOwnProperty = ObjProto.hasOwnProperty;
	
	    // All **ECMAScript 5** native function implementations that we hope to use
	    // are declared here.
	    var
	        nativeMap = ArrayProto.map,
	        nativeReduce       = ArrayProto.reduce,
	        nativeForEach = ArrayProto.forEach,
	        nativeFilter = ArrayProto.filter,
	        nativeEvery = ArrayProto.every,
	        nativeSome = ArrayProto.some,
	        nativeIndexOf = ArrayProto.indexOf,
	        nativeIsArray = Array.isArray,
	        nativeKeys = Object.keys,
	        nativeBind = FuncProto.bind;
	
	
	    // Create a safe reference to the Underscore object for use below.
	    var _ = function (obj) {
	        if (obj instanceof _) return obj;
	        if (!(this instanceof _)) return new _(obj);
	    };
	
	    // Collection Functions
	    // --------------------
	
	    // The cornerstone, an `each` implementation, aka `forEach`.
	    // Handles objects with the built-in `forEach`, arrays, and raw objects.
	    // Delegates to **ECMAScript 5**'s native `forEach` if available.
	    var each = _.each = _.forEach = function (obj, iterator, context) {
	        if (obj == null) return obj;
	        if (nativeForEach && obj.forEach === nativeForEach) {
	            obj.forEach(iterator, context);
	        } else if (obj.length === +obj.length) {
	            for (var i = 0, length = obj.length; i < length; i++) {
	                if (iterator.call(context, obj[i], i, obj) === breaker) return;
	            }
	        } else {
	            var keys = _.keys(obj);
	            for (var i = 0, length = keys.length; i < length; i++) {
	                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
	            }
	        }
	        return obj;
	    };
	
	    // Return the results of applying the iterator to each element.
	    // Delegates to **ECMAScript 5**'s native `map` if available.
	    _.map = _.collect = function (obj, iterator, context) {
	        var results = [];
	        if (obj == null) return results;
	        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	        each(obj, function (value, index, list) {
	            results.push(iterator.call(context, value, index, list));
	        });
	        return results;
	    };
	
	    var reduceError = 'Reduce of empty array with no initial value';
	
	    // **Reduce** builds up a single result from a list of values, aka `inject`,
	    // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
	    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
	        var initial = arguments.length > 2;
	        if (obj == null) obj = [];
	        if (nativeReduce && obj.reduce === nativeReduce) {
	            if (context) iterator = _.bind(iterator, context);
	            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
	        }
	        each(obj, function(value, index, list) {
	            if (!initial) {
	                memo = value;
	                initial = true;
	            } else {
	                memo = iterator.call(context, memo, value, index, list);
	            }
	        });
	        if (!initial) throw new TypeError(reduceError);
	        return memo;
	    };
	
	    // Return the first value which passes a truth test. Aliased as `detect`.
	    _.find = _.detect = function (obj, predicate, context) {
	        var result;
	        any(obj, function (value, index, list) {
	            if (predicate.call(context, value, index, list)) {
	                result = value;
	                return true;
	            }
	        });
	        return result;
	    };
	
	
	    // Return all the elements that pass a truth test.
	    // Delegates to **ECMAScript 5**'s native `filter` if available.
	    // Aliased as `select`.
	    _.filter = _.select = function (obj, predicate, context) {
	        var results = [];
	        if (obj == null) return results;
	        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
	        each(obj, function (value, index, list) {
	            if (predicate.call(context, value, index, list)) results.push(value);
	        });
	        return results;
	    };
	
	    // Return all the elements for which a truth test fails.
	    _.reject = function(obj, predicate, context) {
	        return _.filter(obj, function(value, index, list) {
	            return !predicate.call(context, value, index, list);
	        }, context);
	    };
	
	    // Trim out all falsy values from an array.
	    _.compact = function(array) {
	        return _.filter(array, _.identity);
	    };
	
	
	    // Determine whether all of the elements match a truth test.
	    // Delegates to **ECMAScript 5**'s native `every` if available.
	    // Aliased as `all`.
	    _.every = _.all = function (obj, predicate, context) {
	        predicate || (predicate = _.identity);
	        var result = true;
	        if (obj == null) return result;
	        if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
	        each(obj, function (value, index, list) {
	            if (!(result = result && predicate.call(context, value, index, list))) return breaker;
	        });
	        return !!result;
	    };
	
	    // Determine if at least one element in the object matches a truth test.
	    // Delegates to **ECMAScript 5**'s native `some` if available.
	    // Aliased as `any`.
	    var any = _.some = _.any = function (obj, predicate, context) {
	        predicate || (predicate = _.identity);
	        var result = false;
	        if (obj == null) return result;
	        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
	        each(obj, function (value, index, list) {
	            if (result || (result = predicate.call(context, value, index, list))) return breaker;
	        });
	        return !!result;
	    };
	
	    //returns the size of an object
	    _.size = function (obj) {
	        if (obj == null) return 0;
	        return obj.length === +obj.length ? obj.length : _.keys(obj).length;
	    };
	
	
	    // Array Functions
	    // ---------------
	
	
	    // Get the last element of an array. Passing **n** will return the last N
	    // values in the array. The **guard** check allows it to work with `_.map`.
	    _.last = function(array, n, guard) {
	        if (array == null) return void 0;
	        if ((n == null) || guard) return array[array.length - 1];
	        return slice.call(array, Math.max(array.length - n, 0));
	    };
	
	
	    // Returns a function that will only be executed after being called N times.
	    _.after = function (times, func) {
	        return function () {
	            if (--times < 1) {
	                return func.apply(this, arguments);
	            }
	        };
	    };
	
	    // Returns a function that will only be executed up to (but not including) the Nth call.
	    _.before = function(times, func) {
	        var memo;
	        return function() {
	            if (--times > 0) {
	                memo = func.apply(this, arguments);
	            }
	            if (times <= 1) func = null;
	            return memo;
	        };
	    };
	
	    // An internal function to generate lookup iterators.
	    var lookupIterator = function (value) {
	        if (value == null) return _.identity;
	        if (_.isFunction(value)) return value;
	        return _.property(value);
	    };
	
	
	    // An internal function used for aggregate "group by" operations.
	    var group = function(behavior) {
	        return function(obj, iterator, context) {
	            var result = {};
	            iterator = lookupIterator(iterator);
	            each(obj, function(value, index) {
	                var key = iterator.call(context, value, index, obj);
	                behavior(result, key, value);
	            });
	            return result;
	        };
	    };
	
	    // Groups the object's values by a criterion. Pass either a string attribute
	    // to group by, or a function that returns the criterion.
	    _.groupBy = group(function(result, key, value) {
	        _.has(result, key) ? result[key].push(value) : result[key] = [value];
	    });
	
	
	    // Indexes the object's values by a criterion, similar to `groupBy`, but for
	    // when you know that your index values will be unique.
	    _.indexBy = group(function(result, key, value) {
	        result[key] = value;
	    });
	
	
	
	    // Use a comparator function to figure out the smallest index at which
	    // an object should be inserted so as to maintain order. Uses binary search.
	    _.sortedIndex = function (array, obj, iterator, context) {
	        iterator = lookupIterator(iterator);
	        var value = iterator.call(context, obj);
	        var low = 0, high = array.length;
	        while (low < high) {
	            var mid = (low + high) >>> 1;
	            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
	        }
	        return low;
	    };
	
	    // Determine if at least one element in the object matches a truth test.
	    // Delegates to **ECMAScript 5**'s native `some` if available.
	    // Aliased as `any`.
	    var any = _.some = _.any = function (obj, predicate, context) {
	        predicate || (predicate = _.identity);
	        var result = false;
	        if (obj == null) return result;
	        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
	        each(obj, function (value, index, list) {
	            if (result || (result = predicate.call(context, value, index, list))) return breaker;
	        });
	        return !!result;
	    };
	
	    _.contains = _.include = function (obj, target) {
	        if (obj == null) return false;
	        if (obj.length !== +obj.length) obj = _.values(obj);
	        return _.indexOf(obj, target) >= 0;
	    };
	
	    // Convenience version of a common use case of `map`: fetching a property.
	    _.pluck = function(obj, key) {
	        return _.map(obj, _.property(key));
	    };
	
	    // Convenience version of a common use case of `filter`: selecting only objects
	    // containing specific `key:value` pairs.
	    _.where = function (obj, attrs) {
	        return _.filter(obj, _.matches(attrs));
	    };
	
	    // Convenience version of a common use case of `find`: getting the first object
	    // containing specific `key:value` pairs.
	    _.findWhere = function(obj, attrs) {
	        return _.find(obj, _.matches(attrs));
	    };
	
	    // Return the maximum element or (element-based computation).
	    // Can't optimize arrays of integers longer than 65,535 elements.
	    // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
	    _.max = function(obj, iterator, context) {
	        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	            return Math.max.apply(Math, obj);
	        }
	        var result = -Infinity, lastComputed = -Infinity;
	        each(obj, function(value, index, list) {
	            var computed = iterator ? iterator.call(context, value, index, list) : value;
	            if (computed > lastComputed) {
	                result = value;
	                lastComputed = computed;
	            }
	        });
	        return result;
	    };
	
	    // Take the difference between one array and a number of other arrays.
	    // Only the elements present in just the first array will remain.
	    _.difference = function (array) {
	        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
	        return _.filter(array, function (value) {
	            return !_.contains(rest, value);
	        });
	    };
	
	    // Return a version of the array that does not contain the specified value(s).
	    _.without = function (array) {
	        return _.difference(array, slice.call(arguments, 1));
	    };
	
	    // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
	    // we need this function. Return the position of the first occurrence of an
	    // item in an array, or -1 if the item is not included in the array.
	    // Delegates to **ECMAScript 5**'s native `indexOf` if available.
	    // If the array is large and already in sort order, pass `true`
	    // for **isSorted** to use binary search.
	    _.indexOf = function (array, item, isSorted) {
	        if (array == null) return -1;
	        var i = 0, length = array.length;
	        if (isSorted) {
	            if (typeof isSorted == 'number') {
	                i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
	            } else {
	                i = _.sortedIndex(array, item);
	                return array[i] === item ? i : -1;
	            }
	        }
	        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
	        for (; i < length; i++) if (array[i] === item) return i;
	        return -1;
	    };
	
	
	    // Function (ahem) Functions
	    // ------------------
	
	
	    // Reusable constructor function for prototype setting.
	    var ctor = function(){};
	
	    // Create a function bound to a given object (assigning `this`, and arguments,
	    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	    // available.
	    _.bind = function(func, context) {
	        var args, bound;
	        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	        if (!_.isFunction(func)) throw new TypeError;
	        args = slice.call(arguments, 2);
	        return bound = function() {
	            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	            ctor.prototype = func.prototype;
	            var self = new ctor;
	            ctor.prototype = null;
	            var result = func.apply(self, args.concat(slice.call(arguments)));
	            if (Object(result) === result) return result;
	            return self;
	        };
	    };
	
	    // Partially apply a function by creating a version that has had some of its
	    // arguments pre-filled, without changing its dynamic `this` context. _ acts
	    // as a placeholder, allowing any combination of arguments to be pre-filled.
	    _.partial = function (func) {
	        var boundArgs = slice.call(arguments, 1);
	        return function () {
	            var position = 0;
	            var args = boundArgs.slice();
	            for (var i = 0, length = args.length; i < length; i++) {
	                if (args[i] === _) args[i] = arguments[position++];
	            }
	            while (position < arguments.length) args.push(arguments[position++]);
	            return func.apply(this, args);
	        };
	    };
	
	    // Returns a function that will be executed at most one time, no matter how
	    // often you call it. Useful for lazy initialization.
	    _.once = _.partial(_.before, 2);
	
	    // Returns the first function passed as an argument to the second,
	    // allowing you to adjust arguments, run code before and after, and
	    // conditionally execute the original function.
	    //_.wrap = function(func, wrapper) {
	    //    return _.partial(wrapper, func);
	    //};
	
	
	    // Memoize an expensive function by storing its results.
	    _.memoize = function (func, hasher) {
	        var memo = {};
	        hasher || (hasher = _.identity);
	        return function () {
	            var key = hasher.apply(this, arguments);
	            return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
	        };
	    };
	
	    // Delays a function for the given number of milliseconds, and then calls
	    // it with the arguments supplied.
	    _.delay = function (func, wait) {
	        var args = slice.call(arguments, 2);
	        return setTimeout(function () {
	            return func.apply(null, args);
	        }, wait);
	    };
	
	    // Defers a function, scheduling it to run after the current call stack has
	    // cleared.
	    _.defer = function (func) {
	        return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	    };
	
	
	
	    // Returns a function, that, when invoked, will only be triggered at most once
	    // during a given window of time. Normally, the throttled function will run
	    // as much as it can, without ever going more than once per `wait` duration;
	    // but if you'd like to disable the execution on the leading edge, pass
	    // `{leading: false}`. To disable execution on the trailing edge, ditto.
	    _.throttle = function(func, wait, options) {
	        var context, args, result;
	        var timeout = null;
	        var previous = 0;
	        options || (options = {});
	        var later = function() {
	            previous = options.leading === false ? 0 : _.now();
	            timeout = null;
	            result = func.apply(context, args);
	            context = args = null;
	        };
	        return function() {
	            var now = _.now();
	            if (!previous && options.leading === false) previous = now;
	            var remaining = wait - (now - previous);
	            context = this;
	            args = arguments;
	            if (remaining <= 0) {
	                clearTimeout(timeout);
	                timeout = null;
	                previous = now;
	                result = func.apply(context, args);
	                context = args = null;
	            } else if (!timeout && options.trailing !== false) {
	                timeout = setTimeout(later, remaining);
	            }
	            return result;
	        };
	    };
	
	
	    // Retrieve the names of an object's properties.
	    // Delegates to **ECMAScript 5**'s native `Object.keys`
	    _.keys = function (obj) {
	        if (!_.isObject(obj)) return [];
	        if (nativeKeys) return nativeKeys(obj);
	        var keys = [];
	        for (var key in obj) if (_.has(obj, key)) keys.push(key);
	        return keys;
	    };
	
	    _.invert = function (obj) {
	        var result = {};
	        var keys = _.keys(obj);
	        for (var i = 0, length = keys.length; i < length; i++) {
	            result[obj[keys[i]]] = keys[i];
	        }
	        return result;
	    };
	
	    // Fill in a given object with default properties.
	    _.defaults = function(obj) {
	        each(slice.call(arguments, 1), function(source) {
	            if (source) {
	                for (var prop in source) {
	                    if (obj[prop] === void 0) obj[prop] = source[prop];
	                }
	            }
	        });
	        return obj;
	    };
	
	    // Extend a given object with all the properties in passed-in object(s).
	    _.extend = function(obj) {
	        each(slice.call(arguments, 1), function(source) {
	            if (source) {
	                for (var prop in source) {
	                    obj[prop] = source[prop];
	                }
	            }
	        });
	        return obj;
	    };
	
	    // Return a copy of the object only containing the whitelisted properties.
	    _.pick = function (obj) {
	        var copy = {};
	        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	        each(keys, function (key) {
	            if (key in obj) copy[key] = obj[key];
	        });
	        return copy;
	    };
	
	    // Return a copy of the object without the blacklisted properties.
	    _.omit = function(obj) {
	        var copy = {};
	        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	        for (var key in obj) {
	            if (!_.contains(keys, key)) copy[key] = obj[key];
	        }
	        return copy;
	    };
	
	    // Create a (shallow-cloned) duplicate of an object.
	    _.clone = function(obj) {
	        if (!_.isObject(obj)) return obj;
	        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	    };
	
	    // Is a given value an array?
	    // Delegates to ECMA5's native Array.isArray
	    _.isArray = nativeIsArray || function (obj) {
	        return toString.call(obj) == '[object Array]';
	    };
	
	    // Is a given variable an object?
	    _.isObject = function (obj) {
	        return obj === Object(obj);
	    };
	
	    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	    each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
	        _['is' + name] = function (obj) {
	            return toString.call(obj) == '[object ' + name + ']';
	        };
	    });
	
	    // Define a fallback version of the method in browsers (ahem, IE), where
	    // there isn't any inspectable "Arguments" type.
	    if (!_.isArguments(arguments)) {
	        _.isArguments = function (obj) {
	            return !!(obj && _.has(obj, 'callee'));
	        };
	    }
	
	    // Optimize `isFunction` if appropriate.
	    if (true) {
	        _.isFunction = function (obj) {
	            return typeof obj === 'function';
	        };
	    }
	
	    // Is a given object a finite number?
	    _.isFinite = function (obj) {
	        return isFinite(obj) && !isNaN(parseFloat(obj));
	    };
	
	    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	    _.isNaN = function (obj) {
	        return _.isNumber(obj) && obj != +obj;
	    };
	
	    // Is a given value a boolean?
	    _.isBoolean = function (obj) {
	        return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	    };
	
	    // Is a given value equal to null?
	    _.isNull = function (obj) {
	        return obj === null;
	    };
	
	    // Is a given variable undefined?
	    _.isUndefined = function (obj) {
	        return obj === void 0;
	    };
	
	    // Shortcut function for checking if an object has a given property directly
	    // on itself (in other words, not on a prototype).
	    _.has = function (obj, key) {
	        return hasOwnProperty.call(obj, key);
	    };
	
	    // Keep the identity function around for default iterators.
	    _.identity = function (value) {
	        return value;
	    };
	
	    _.constant = function (value) {
	        return function () {
	            return value;
	        };
	    };
	
	    _.property = function (key) {
	        return function (obj) {
	            return obj[key];
	        };
	    };
	
	    _.propertyOf = function(obj) {
	        return obj == null ? function(){} : function(key) {
	            return obj[key];
	        };
	    };
	
	    // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
	    _.matches = function (attrs) {
	        return function (obj) {
	            if (obj === attrs) return true; //avoid comparing an object to itself.
	            for (var key in attrs) {
	                if (attrs[key] !== obj[key])
	                    return false;
	            }
	            return true;
	        }
	    };
	
	
	    // A (possibly faster) way to get the current timestamp as an integer.
	    _.now = Date.now || function() { return new Date().getTime(); };
	
	    // If the value of the named `property` is a function then invoke it with the
	    // `object` as context; otherwise, return it.
	    _.result = function (object, property) {
	        if (object == null) return void 0;
	        var value = object[property];
	        return _.isFunction(value) ? value.call(object) : value;
	    };
	
	
	    // Generate a unique integer id (unique within the entire client session).
	    // Useful for temporary DOM ids.
	    var idCounter = 0;
	    _.uniqueId = function(prefix) {
	        var id = ++idCounter + '';
	        return prefix ? prefix + id : id;
	    };
	
	    return _;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 52 */
/*!*************************************!*\
  !*** ./src/js/parsers/rssparser.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Parse an RSS feed and translate it to a playlist.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 50),
	    __webpack_require__(/*! parsers/parsers */ 49),
	    __webpack_require__(/*! parsers/jwparser */ 53),
	    __webpack_require__(/*! parsers/mediaparser */ 69),
	    __webpack_require__(/*! playlist/item */ 70)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings, parsers, parseEntry, mediaParser, PlaylistItem) {
	    var _textContent = parsers.textContent,
	        _getChildNode = parsers.getChildNode,
	        _numChildren = parsers.numChildren,
	        _localName = parsers.localName;
	
	    var rssparser = {};
	
	
	    /**
	     * Parse an RSS playlist for feed items.
	     *
	     * @param {XML} dat
	     * @return {Array} playlistarray
	     */
	    rssparser.parse = function (dat) {
	        var arr = [];
	        for (var i = 0; i < _numChildren(dat); i++) {
	            var node = _getChildNode(dat, i),
	                localName = _localName(node).toLowerCase();
	            if (localName === 'channel') {
	                for (var j = 0; j < _numChildren(node); j++) {
	                    var subNode = _getChildNode(node, j);
	                    if (_localName(subNode).toLowerCase() === 'item') {
	                        arr.push(_parseItem(subNode));
	                    }
	                }
	            }
	        }
	        return arr;
	    };
	
	
	    /**
	     * Translate RSS item to playlist item.
	     *
	     * @param {XML} obj
	     * @return {PlaylistItem} PlaylistItem
	     */
	    function _parseItem(obj) {
	        var itm = {};
	        for (var i = 0; i < obj.childNodes.length; i++) {
	            var node = obj.childNodes[i];
	            var localName = _localName(node);
	            if (!localName) {
	                continue;
	            }
	            switch (localName.toLowerCase()) {
	                case 'enclosure':
	                    itm.file = strings.xmlAttribute(node, 'url');
	                    break;
	                case 'title':
	                    itm.title = _textContent(node);
	                    break;
	                case 'guid':
	                    itm.mediaid = _textContent(node);
	                    break;
	                case 'pubdate':
	                    itm.date = _textContent(node);
	                    break;
	                case 'description':
	                    itm.description = _textContent(node);
	                    break;
	                case 'link':
	                    itm.link = _textContent(node);
	                    break;
	                case 'category':
	                    if (itm.tags) {
	                        itm.tags += _textContent(node);
	                    } else {
	                        itm.tags = _textContent(node);
	                    }
	                    break;
	            }
	        }
	        itm = mediaParser(obj, itm);
	        itm = parseEntry(obj, itm);
	
	        return new PlaylistItem(itm);
	    }
	
	    return rssparser;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 53 */
/*!************************************!*\
  !*** ./src/js/parsers/jwparser.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Parse a feed item for JWPlayer content.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! parsers/parsers */ 49),
	    __webpack_require__(/*! utils/strings */ 50),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(parsers, strings, utils) {
	
	    var PREFIX = 'jwplayer';
	
	    /**
	     * Parse a feed entry for JWPlayer content.
	     *
	     * @param {XML}
	     *            obj The XML object to parse.
	     * @param {Object}
	     *            itm The playlistentry to amend the object to.
	     * @return {Object} The playlistentry, amended with the JWPlayer info.
	     */
	    var parseEntry = function (obj, itm) {
	        var sources = [],
	            tracks = [],
	            _xmlAttribute = strings.xmlAttribute,
	            def = 'default',
	            label = 'label',
	            file = 'file',
	            type = 'type';
	        for (var i = 0; i < obj.childNodes.length; i++) {
	            var node = obj.childNodes[i];
	            if (node.prefix === PREFIX) {
	                var _localName = parsers.localName(node);
	                if (_localName === 'source') {
	                    delete itm.sources;
	                    sources.push({
	                        file: _xmlAttribute(node, file),
	                        'default': _xmlAttribute(node, def),
	                        label: _xmlAttribute(node, label),
	                        type: _xmlAttribute(node, type)
	                    });
	                } else if (_localName === 'track') {
	                    delete itm.tracks;
	                    tracks.push({
	                        file: _xmlAttribute(node, file),
	                        'default': _xmlAttribute(node, def),
	                        kind: _xmlAttribute(node, 'kind'),
	                        label: _xmlAttribute(node, label)
	                    });
	                } else {
	                    itm[_localName] = utils.serialize(parsers.textContent(node));
	                    if (_localName === 'file' && itm.sources) {
	                        // jwplayer namespace file should override existing source
	                        // (probably set in MediaParser)
	                        delete itm.sources;
	                    }
	                }
	
	            }
	            if (!itm[file]) {
	                itm[file] = itm.link;
	            }
	        }
	
	
	        if (sources.length) {
	            itm.sources = [];
	            for (i = 0; i < sources.length; i++) {
	                if (sources[i].file.length > 0) {
	                    sources[i][def] = (sources[i][def] === 'true') ? true : false;
	                    if (!sources[i].label.length) {
	                        delete sources[i].label;
	                    }
	                    itm.sources.push(sources[i]);
	                }
	            }
	        }
	
	        if (tracks.length) {
	            itm.tracks = [];
	            for (i = 0; i < tracks.length; i++) {
	                if (tracks[i].file.length > 0) {
	                    tracks[i][def] = (tracks[i][def] === 'true') ? true : false;
	                    tracks[i].kind = (!tracks[i].kind.length) ? 'captions' : tracks[i].kind;
	                    if (!tracks[i].label.length) {
	                        delete tracks[i].label;
	                    }
	                    itm.tracks.push(tracks[i]);
	                }
	            }
	        }
	        return itm;
	    };
	
	    return parseEntry;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 54 */
/*!*********************************!*\
  !*** ./src/js/utils/helpers.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 50),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/browser */ 56),
	    __webpack_require__(/*! utils/dom */ 57),
	    __webpack_require__(/*! utils/css */ 59),
	    __webpack_require__(/*! utils/parser */ 61),
	    __webpack_require__(/*! utils/id3Parser */ 55),
	    __webpack_require__(/*! utils/ajax */ 63),
	    __webpack_require__(/*! utils/validator */ 62),
	    __webpack_require__(/*! utils/playerutils */ 64),
	    __webpack_require__(/*! utils/trycatch */ 67),
	    __webpack_require__(/*! utils/stream-type */ 68)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings, _, browser, dom, css, parser, id3Parser, ajax, validator, playerutils, trycatch, streamType) {
	
	    var utils = {};
	
	    utils.log = function () {
	        if (!window.console) {
	            return;
	        }
	        if (typeof console.log === 'object') {
	            console.log(Array.prototype.slice.call(arguments, 0));
	        } else {
	            console.log.apply(console, arguments);
	        }
	    };
	
	    utils.between = function (num, min, max) {
	        return Math.max(Math.min(num, max), min);
	    };
	
	    /**
	     * Iterates over an object and executes a callback function for each property (if it exists)
	     * This is a safe way to iterate over objects if another script has modified the object prototype
	     */
	    utils.foreach = function (aData, fnEach) {
	        var key, val;
	        for (key in aData) {
	            if (utils.typeOf(aData.hasOwnProperty) === 'function') {
	                if (aData.hasOwnProperty(key)) {
	                    val = aData[key];
	                    fnEach(key, val);
	                }
	            } else {
	                // IE8 has a problem looping through XML nodes
	                val = aData[key];
	                fnEach(key, val);
	            }
	        }
	    };
	
	    utils.indexOf = _.indexOf;
	    utils.noop = function () {
	    };
	
	    utils.seconds = strings.seconds;
	    utils.prefix = strings.prefix;
	    utils.suffix = strings.suffix;
	
	    _.extend(utils, parser, id3Parser, validator, browser, ajax, dom, css, playerutils, trycatch, streamType);
	
	    return utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ },
/* 55 */
/*!***********************************!*\
  !*** ./src/js/utils/id3Parser.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var id3Parser = {};
	    var friendlyNames = {
	        TIT2: 'title',
	        TT2: 'title',
	        WXXX: 'url',
	        TPE1: 'artist',
	        TP1: 'artist',
	        TALB: 'album',
	        TAL: 'album'
	    };
	
	    id3Parser.utf8ArrayToStr = function (array, startingIndex) {
	        // Based on code by Masanao Izumo <iz@onicos.co.jp>
	        // posted at http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt
	    
	        var out, i, len, c;
	        var char2, char3;
	    
	        out = '';
	        len = array.length;
	        i = startingIndex || 0;
	        while (i < len) {
	            c = array[i++];
	            // If the character is 3 (END_OF_TEXT) or 0 (NULL) then skip it
	            if (c === 0x00 || c === 0x03) {
	                continue;
	            }
	            switch (c >> 4) {
	                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
	                // 0xxxxxxx
	                out += String.fromCharCode(c);
	                break;
	                case 12: case 13:
	                // 110x xxxx   10xx xxxx
	                char2 = array[i++];
	                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
	                break;
	                case 14:
	                    // 1110 xxxx  10xx xxxx  10xx xxxx
	                    char2 = array[i++];
	                    char3 = array[i++];
	                    out += String.fromCharCode(((c & 0x0F) << 12) |
	                        ((char2 & 0x3F) << 6) |
	                        ((char3 & 0x3F) << 0));
	                    break;
	            }
	        }
	    
	        return out;
	    };
	    
	    id3Parser.utf16BigEndianArrayToStr = function (array, startingIndex) {
	        var out, i, lastDoubleByte;
	    
	        out = '';
	        lastDoubleByte = array.length - 1;
	        i = startingIndex || 0;
	        while (i < lastDoubleByte) {
	            if (array[i] === 254 && array[i + 1] === 255) {
	                // Byte order mark
	            } else {
	                out += String.fromCharCode((array[i] << 8) + array[i + 1]);
	            }
	            i += 2;
	        }
	        return out;
	    };
	    
	    id3Parser.syncSafeInt = function(sizeArray) {
	        var size = id3Parser.arrayToInt(sizeArray);
	        return (size & 0x0000007F) |
	            ( (size & 0x00007F00) >> 1 ) |
	            ( (size & 0x007F0000) >> 2 ) |
	            ( (size & 0x7F000000) >> 3 );
	    };
	    
	    id3Parser.arrayToInt = function(array) {
	        var sizeString = '0x';
	        for (var i = 0; i < array.length; i++) {
	            sizeString += array[i].toString(16);
	        }
	        return parseInt(sizeString);
	    };
	    
	    id3Parser.parseID3 = function(activeCues) {
	        return _.reduce(activeCues, function(data, cue) {
	            if (!('value' in cue)) {
	                // Cue is not in Safari's key/data format
	                if ('data' in cue && cue.data instanceof ArrayBuffer) {
	                    // EdgeHTML 13.10586 cue point format - contains raw data in an ArrayBuffer.
	    
	                    var oldCue = cue;
	                    var array = new Uint8Array(oldCue.data);
	                    var arrayLength = array.length;
	    
	                    cue = { value: { key: '', data: '' } };
	    
	                    var i = 10;
	                    while (i < 14 && i < array.length) {
	                        if (array[i] === 0) {
	                            break;
	                        }
	                        cue.value.key += String.fromCharCode(array[i]);
	                        i++;
	                    }
	    
	                    // If the first byte is 3 (END_OF_TEXT) or 0 (NULL) then skip it
	                    var startPos = 19;
	                    var firstByte = array[startPos];
	                    if (firstByte === 0x03 || firstByte === 0x00) {
	                        firstByte = array[++startPos];
	                        arrayLength--;
	                    }
	
	                    var infoDelimiterPosition = 0;
	                    // Find info/value pair delimiter if present.
	                    // If first byte shows theres utf 16 encoding, there is no info since info cannot be utf 16 encoded
	                    if (firstByte !== 0x01 && firstByte !== 0x02) {
	                        for (var j = startPos + 1; j < arrayLength; j++) {
	                            if (array[j] === 0x00) {
	                                infoDelimiterPosition = j - startPos;
	                                break;
	                            }
	                        }
	                    }
	    
	                    if (infoDelimiterPosition > 0) {
	                        var info = id3Parser.utf8ArrayToStr(
	                            array.subarray(startPos, startPos += infoDelimiterPosition), 0);
	                        if (cue.value.key === 'PRIV') {
	                            if (info === 'com.apple.streaming.transportStreamTimestamp') {
	                                var pts_33_bit =  id3Parser.syncSafeInt(
	                                        array.subarray(startPos, startPos += 4)) & 0x00000001;
	                                var transportStreamTimestamp =  id3Parser.syncSafeInt(
	                                    array.subarray(startPos, startPos += 4));
	                                if (pts_33_bit) {
	                                    transportStreamTimestamp += 0x100000000;
	                                }
	                                cue.value.data = transportStreamTimestamp;
	                            } else {
	                                cue.value.data = id3Parser.utf8ArrayToStr(array, startPos + 1);
	                            }
	                            cue.value.info = info;
	                        } else {
	                            cue.value.info = info;
	                            cue.value.data = id3Parser.utf8ArrayToStr(array, startPos + 1);
	                        }
	                    } else {
	                        var encoding = array[startPos];
	                        if (encoding === 1 || encoding === 2) {
	                            cue.value.data = id3Parser.utf16BigEndianArrayToStr(array, startPos + 1);
	                        } else {
	                            cue.value.data = id3Parser.utf8ArrayToStr(array, startPos + 1);
	                        }
	                    }
	                }
	            }
	    
	            // These friendly names mapping provides compatibility with our Flash implementation prior to 7.3
	            if (friendlyNames.hasOwnProperty(cue.value.key)) {
	                data[friendlyNames[cue.value.key]] = cue.value.data;
	            }
	            /* The meta event includes a metadata object with flattened cue key/data pairs
	             * If a cue also includes an info field, then create a collection of info/data pairs for the cue key
	             *   TLEN: 03:50                                        // key: "TLEN", data: "03:50"
	             *   WXXX: {"artworkURL":"http://domain.com/cover.jpg"} // key: "WXXX", info: "artworkURL" ...
	             */
	            if (cue.value.info) {
	                var collection = data[cue.value.key];
	                if (!_.isObject(collection)) {
	                    collection = {};
	                    data[cue.value.key] = collection;
	                }
	                collection[cue.value.info] = cue.value.data;
	            } else {
	                data[cue.value.key] = cue.value.data;
	            }
	            return data;
	        }, {});
	    };
	    return id3Parser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 56 */
/*!*********************************!*\
  !*** ./src/js/utils/browser.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var browser = {};
	
	    var _userAgentMatch = _.memoize(function (regex) {
	        var agent = navigator.userAgent.toLowerCase();
	        return (agent.match(regex) !== null);
	    });
	
	    function _browserCheck(regex) {
	        return function () {
	            return _userAgentMatch(regex);
	        };
	    }
	
	    var _isInt = browser.isInt = function (value) {
	        return parseFloat(value) % 1 === 0;
	    };
	
	    browser.isFlashSupported = function () {
	        var flashVersion = browser.flashVersion();
	        return flashVersion && flashVersion >= (11.2);
	    };
	
	    browser.isFF = _browserCheck(/gecko\//i);
	    browser.isIPod = _browserCheck(/iP(hone|od)/i);
	    browser.isIPad = _browserCheck(/iPad/i);
	    browser.isSafari602 = _browserCheck(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);
	    browser.isOSX = _browserCheck(/Mac OS X/i);
	
	    var _isEdge = browser.isEdge = function(browserVersion) {
	        if (browserVersion) {
	            return _userAgentMatch(new RegExp('\\sedge\\/' + browserVersion, 'i'));
	        }
	        return _userAgentMatch(/\sEdge\/\d+/i);
	    };
	
	
	    var _isIETrident = browser.isIETrident = _browserCheck(/trident\/.+rv:\s*11/i);
	
	
	    var _isMSIE = browser.isMSIE = function(browserVersion) {
	        if (browserVersion) {
	            browserVersion = parseFloat(browserVersion).toFixed(1);
	            return _userAgentMatch(new RegExp('msie\\s*' + browserVersion, 'i'));
	        }
	        return _userAgentMatch(/msie/i);
	    };
	
	    browser.isChrome = function() {
	        return _userAgentMatch(/\s(?:Chrome|CriOS)\//i) && !browser.isEdge();
	    };
	
	    browser.isIE = function(browserVersion) {
	        if (browserVersion) {
	            browserVersion = parseFloat(browserVersion).toFixed(1);
	            if (browserVersion >= 12) {
	                return _isEdge(browserVersion);
	            } else if (browserVersion >= 11) {
	                return _isIETrident();
	            } else {
	                return _isMSIE(browserVersion);
	            }
	        }
	        return _isEdge() || _isIETrident() || _isMSIE();
	    };
	
	    browser.isSafari = function() {
	        return (_userAgentMatch(/safari/i) && !_userAgentMatch(/chrome/i) && !_userAgentMatch(/crios/i) &&
	        !_userAgentMatch(/chromium/i) && !_userAgentMatch(/android/i));
	    };
	
	    /** Matches iOS devices **/
	    var _isIOS = browser.isIOS = function(osVersion) {
	        if (osVersion) {
	            return _userAgentMatch(
	                new RegExp('iP(hone|ad|od).+\\s(OS\\s'+osVersion+'|.*\\sVersion/'+osVersion+')', 'i')
	            );
	        }
	        return _userAgentMatch(/iP(hone|ad|od)/i);
	    };
	
	    /** Matches Android devices **/
	    browser.isAndroidNative = function(osVersion) {
	        return _isAndroid(osVersion, true);
	    };
	
	    var _isAndroid = browser.isAndroid = function(osVersion, excludeChrome) {
	        //Android Browser appears to include a user-agent string for Chrome/18
	        if (excludeChrome && _userAgentMatch(/chrome\/[123456789]/i) && !_userAgentMatch(/chrome\/18/)) {
	            return false;
	        }
	        if (osVersion) {
	            // make sure whole number version check ends with point '.'
	            if (_isInt(osVersion) && !/\./.test(osVersion)) {
	                osVersion = '' + osVersion + '.';
	            }
	            return _userAgentMatch(new RegExp('Android\\s*' + osVersion, 'i'));
	        }
	        return _userAgentMatch(/Android/i);
	    };
	
	    /** Matches iOS and Android devices **/
	    browser.isMobile = function () {
	        return _isIOS() || _isAndroid();
	    };
	
	    browser.isIframe = function () {
	        return (window.frameElement && (window.frameElement.nodeName === 'IFRAME'));
	    };
	
	    /**
	     * If the browser has flash capabilities, return the flash version
	     */
	    browser.flashVersion = function () {
	        if (browser.isAndroid()) {
	            return 0;
	        }
	
	        var plugins = navigator.plugins,
	            flash;
	
	        if (plugins) {
	            flash = plugins['Shockwave Flash'];
	            if (flash && flash.description) {
	                return parseFloat(flash.description.replace(/\D+(\d+\.?\d*).*/, '$1'));
	            }
	        }
	
	        if (typeof window.ActiveXObject !== 'undefined') {
	            try {
	                flash = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	                if (flash) {
	                    return parseFloat(flash.GetVariable('$version').split(' ')[1].replace(/\s*,\s*/, '.'));
	                }
	            } catch(e) {
	                return 0;
	            }
	
	            return flash;
	        }
	        return 0;
	    };
	
	    return browser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 57 */
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 50),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/jqueryfuncs */ 58)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings, _, jqueryfuncs) {
	
	    var dom = {};
	
	    // Given a string, convert to element and return
	    dom.createElement = function (html) {
	        var newElement = document.createElement('div');
	        newElement.innerHTML = html;
	        return newElement.firstChild;
	    };
	
	    /** Used for styling dimensions in CSS --
	     * return the string unchanged if it's a percentage width; add 'px' otherwise **/
	    dom.styleDimension = function (dimension) {
	        return dimension + (dimension.toString().indexOf('%') > 0 ? '' : 'px');
	    };
	
	    var classNameArray = function(element) {
	        return _.isString(element.className) ? element.className.split(' ') : [];
	    };
	
	    var setClassName = function(element, className) {
	        className = strings.trim(className);
	        if (element.className !== className) {
	            element.className = className;
	        }
	    };
	
	    dom.classList = function (element) {
	        if (element.classList) {
	            return element.classList;
	        }
	        /* ie9 does not support classList http://caniuse.com/#search=classList */
	        return classNameArray(element);
	    };
	
	    dom.hasClass = jqueryfuncs.hasClass;
	
	    dom.addClass = function (element, classes) {
	        // TODO:: use _.union on the two arrays
	
	        var originalClasses = classNameArray(element);
	        var addClasses = _.isArray(classes) ? classes : classes.split(' ');
	
	        _.each(addClasses, function (c) {
	            if (!_.contains(originalClasses, c)) {
	                originalClasses.push(c);
	            }
	        });
	
	        setClassName(element, originalClasses.join(' '));
	    };
	
	    dom.removeClass = function (element, c) {
	        var originalClasses = classNameArray(element);
	        var removeClasses = _.isArray(c) ? c : c.split(' ');
	
	        setClassName(element, _.difference(originalClasses, removeClasses).join(' '));
	    };
	
	    dom.replaceClass = function (element, pattern, replaceWith) {
	        var classes = (element.className || '');
	        if (pattern.test(classes)) {
	            classes = classes.replace(pattern, replaceWith);
	        } else if (replaceWith) {
	            classes += ' ' + replaceWith;
	        }
	        setClassName(element, classes);
	    };
	
	    dom.toggleClass = function (element, c, toggleTo) {
	        var hasClass = dom.hasClass(element, c);
	        toggleTo = _.isBoolean(toggleTo) ? toggleTo : !hasClass;
	
	        // short circuit if nothing to do
	        if (toggleTo === hasClass) {
	            return;
	        }
	
	        if (toggleTo) {
	            dom.addClass(element, c);
	        } else {
	            dom.removeClass(element, c);
	        }
	    };
	
	    dom.emptyElement = function (element) {
	        while (element.firstChild) {
	            element.removeChild(element.firstChild);
	        }
	    };
	
	    dom.addStyleSheet = function(url) {
	        var link = document.createElement('link');
	        link.rel = 'stylesheet';
	        link.href = url;
	        document.getElementsByTagName('head')[0].appendChild(link);
	    };
	
	    dom.empty = function(element) {
	        if (!element) {
	            return;
	        }
	        while (element.childElementCount > 0) {
	            element.removeChild(element.children[0]);
	        }
	    };
	
	    dom.bounds = function(element) {
	        var bounds = {
	            left: 0,
	            right: 0,
	            width: 0,
	            height: 0,
	            top: 0,
	            bottom: 0
	        };
	        if (!element || !document.body.contains(element)) {
	            return bounds;
	        }
	        var rect = element.getBoundingClientRect(),
	            scrollOffsetY = window.pageYOffset,
	            scrollOffsetX = window.pageXOffset;
	        if (!rect.width && !rect.height && !rect.left && !rect.top) {
	            //element is not visible / no layout
	            return bounds;
	        }
	        bounds.left = rect.left + scrollOffsetX;
	        bounds.right = rect.right + scrollOffsetX;
	        bounds.top = rect.top + scrollOffsetY;
	        bounds.bottom = rect.bottom + scrollOffsetY;
	        bounds.width = rect.right - rect.left;
	        bounds.height = rect.bottom - rect.top;
	        return bounds;
	    };
	
	    return dom;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ },
/* 58 */
/*!*************************************!*\
  !*** ./src/js/utils/jqueryfuncs.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Code in this module uses code from jQuery
	// jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | Released under the MIT license | jquery.org/license
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        hasClass : function (element, searchClass) {
	            var className = ' ' + searchClass + ' ';
	
	            return (element.nodeType === 1 && (' ' + element.className + ' ')
	                    .replace(/[\t\r\n\f]/g, ' ').indexOf(className) >= 0);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 59 */
/*!*****************************!*\
  !*** ./src/js/utils/css.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 50),
	    __webpack_require__(/*! simple-style-loader/addStyles */ 60)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Strings, styleLoader) {
	
	    var _css = function(selector, styles, playerId) {
	        playerId = playerId || 'all-players';
	        var cssText = '';
	        if (typeof styles === 'object') {
	            var el = document.createElement('div');
	            _style(el,styles);
	            cssText = '{' + el.style.cssText + '}';
	        } else if (typeof styles === 'string') {
	            cssText = styles;
	        }
	        styleLoader.style([[selector, selector + cssText]], playerId);
	    };
	
	    var _style = function (elements, styles) {
	        if (elements === undefined || elements === null) {
	            return;
	        }
	        if (elements.length === undefined) {
	            elements = [elements];
	        }
	
	        var style;
	        var cssRules = {};
	        for (style in styles) {
	            cssRules[style] = _styleValue(style, styles[style]);
	        }
	
	        for (var i = 0; i < elements.length; i++) {
	            var element = elements[i], styleName;
	            if (element !== undefined && element !== null) {
	                for (style in cssRules) {
	                    styleName = _styleAttributeName(style);
	                    if (element.style[styleName] !== cssRules[style]) {
	                        element.style[styleName] = cssRules[style];
	                    }
	                }
	            }
	        }
	    };
	
	    function _styleAttributeName(name) {
	        name = name.split('-');
	        for (var i = 1; i < name.length; i++) {
	            name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
	        }
	        return name.join('');
	    }
	
	    function _styleValue(style, value, important) {
	        if (value === '' || value === undefined || value === null) {
	            return '';
	        }
	        var importantString = important ? ' !important' : '';
	
	        //string
	        if (typeof value === 'string' && isNaN(value)) {
	            if ((/png|gif|jpe?g/i).test(value) && value.indexOf('url') < 0) {
	                return 'url(' + value + ')';
	            }
	            return value + importantString;
	        }
	        // number
	        if (value === 0 ||
	            style === 'z-index' ||
	            style === 'opacity') {
	            return '' + value + importantString;
	        }
	        if ((/color/i).test(style)) {
	            return '#' + Strings.pad(value.toString(16).replace(/^0x/i, ''), 6) + importantString;
	        }
	        return Math.ceil(value) + 'px' + importantString;
	    }
	
	    var transform = function (element, value) {
	        _style(element, {
	            transform: value,
	            webkitTransform: value,
	            msTransform: value,
	            mozTransform: value,
	            oTransform: value
	        });
	    };
	
	    var hexToRgba = function (hexColor, opacity) {
	        var style = 'rgb';
	        if (hexColor) {
	            hexColor = String(hexColor).replace('#', '');
	            if (hexColor.length === 3) {
	                hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
	            }
	        } else {
	            hexColor = '000000';
	        }
	        var channels = [
	            parseInt(hexColor.substr(0, 2), 16),
	            parseInt(hexColor.substr(2, 2), 16),
	            parseInt(hexColor.substr(4, 2), 16)
	        ];
	        if (opacity !== undefined && opacity !== 100) {
	            style += 'a';
	            channels.push(opacity / 100);
	        }
	        return style + '(' + channels.join(',') + ')';
	    };
	
	    return {
	        css : _css,
	        style : _style,
	        clearCss : styleLoader.clear,
	        transform : transform,
	        hexToRgba : hexToRgba
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 60 */
/*!********************************************!*\
  !*** ./~/simple-style-loader/addStyles.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {/*
	 MIT License http://www.opensource.org/licenses/mit-license.php
	 Author Tobias Koppers @sokra
	 */
	
		var stylesInDom = {},
			playerStyleElements = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			});
	
		module.exports = {
			style: style,
			clear: clear
		};
	
		function style (list, playerId) {
			addStylesToDom(playerId, listToStyles(list));
		}
	
		function clear (playerId) {
			var playerStyles = stylesInDom[playerId];
			if (!playerStyles) {
				return;
			}
			var styleKeys = Object.keys(playerStyles);
			for (var i = 0; i < styleKeys.length; i += 1) {
				var styleObj = playerStyles[styleKeys[i]];
				for (var j = 0; j < styleObj.parts.length; j += 1) {
					styleObj.parts[j]();
				}
			}
			delete stylesInDom[playerId];
		}
	
		function addStylesToDom(playerId, styles) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = (stylesInDom[playerId] || {})[item.id];
				if(domStyle) {
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(playerId, item.parts[j]));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(playerId, item.parts[j]));
					}
					stylesInDom[playerId] = stylesInDom[playerId] || {};
					stylesInDom[playerId][item.id] = {id: item.id, parts: parts};
				}
			}
		}
	
		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				// The id isn't a css selector - it's just used internally
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var part = {css: css, media: media};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}
	
		function insertStyleElement(styleElement) {
			getHeadElement().appendChild(styleElement);
		}
	
		function createStyleElement(playerId) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			styleElement.setAttribute('data-jwplayer-id', playerId);
			insertStyleElement(styleElement);
			return styleElement;
		}
	
		function addStyle(playerId, obj) {
			var styleElement, update, remove;
			var singleton = playerStyleElements[playerId];
	
			if (!singleton) {
				singleton = playerStyleElements[playerId] = {
					element: createStyleElement(playerId),
					counter: 0
				};
			}
	
			var styleIndex = singleton.counter++;
			styleElement = singleton.element;
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	
			update(obj);
	
			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}
	
		var replaceText = (function () {
			var textStore = [];
	
			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();
	
		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 61 */
/*!********************************!*\
  !*** ./src/js/utils/parser.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/validator */ 62)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, validator) {
	    var parser = {};
	
	    /** Gets an absolute file path based on a relative filepath * */
	    parser.getAbsolutePath = function (path, base) {
	        if (!validator.exists(base)) {
	            base = document.location.href;
	        }
	        if (!validator.exists(path)) {
	            return;
	        }
	        if (isAbsolutePath(path)) {
	            return path;
	        }
	        var protocol = base.substring(0, base.indexOf('://') + 3);
	        var domain = base.substring(protocol.length, base.indexOf('/', protocol.length + 1));
	        var patharray;
	        if (path.indexOf('/') === 0) {
	            patharray = path.split('/');
	        } else {
	            var basepath = base.split('?')[0];
	            basepath = basepath.substring(protocol.length + domain.length + 1, basepath.lastIndexOf('/'));
	            patharray = basepath.split('/').concat(path.split('/'));
	        }
	        var result = [];
	        for (var i = 0; i < patharray.length; i++) {
	            if (!patharray[i] || !validator.exists(patharray[i]) || patharray[i] === '.') {
	                continue;
	            } else if (patharray[i] === '..') {
	                result.pop();
	            } else {
	                result.push(patharray[i]);
	            }
	        }
	        return protocol + domain + '/' + result.join('/');
	    };
	
	    function isAbsolutePath(path) {
	        return /^(?:(?:https?|file)\:)?\/\//.test(path);
	    }
	
	    parser.getScriptPath = _.memoize(function(scriptName) {
	        var scripts = document.getElementsByTagName('script');
	        for (var i = 0; i < scripts.length; i++) {
	            var src = scripts[i].src;
	            if (src && src.indexOf(scriptName) >= 0) {
	                return src.substr(0, src.indexOf(scriptName));
	            }
	        }
	        return '';
	    });
	
	    function containsParserErrors(childNodes) {
	        return _.some(childNodes, function(node) {
	            return node.nodeName === 'parsererror';
	        });
	    }
	
	    /** Takes an XML string and returns an XML object **/
	    parser.parseXML = function (input) {
	        var parsedXML = null;
	        try {
	            // Parse XML in FF/Chrome/Safari/Opera
	            if ('DOMParser' in window) {
	                parsedXML = (new window.DOMParser()).parseFromString(input, 'text/xml');
	                // In Firefox the XML doc may contain the parsererror, other browsers it's further down
	                if (containsParserErrors(parsedXML.childNodes) ||
	                    (parsedXML.childNodes && containsParserErrors(parsedXML.childNodes[0].childNodes))) {
	                    parsedXML = null;
	                }
	            } else {
	                // Internet Explorer
	                parsedXML = new window.ActiveXObject('Microsoft.XMLDOM');
	                parsedXML.async = 'false';
	                parsedXML.loadXML(input);
	            }
	        } catch(e) {/* Expected when content is not XML */}
	
	        return parsedXML;
	    };
	
	    /**
	     * String representations of booleans and numbers that are 5 characters in length or less
	     * are returned typed
	     */
	    parser.serialize = function (val) {
	        if (val === undefined) {
	            return null;
	        }
	        if (typeof val === 'string' && val.length < 6) {
	            var lowercaseVal = val.toLowerCase();
	            if (lowercaseVal === 'true') {
	                return true;
	            }
	            if (lowercaseVal === 'false') {
	                return false;
	            }
	            if (!isNaN(Number(val)) && !isNaN(parseFloat(val))) {
	                return Number(val);
	            }
	        }
	        return val;
	    };
	
	    /**
	     * Cleans up a css dimension (e.g. '420px') and returns an integer.
	     */
	    parser.parseDimension = function(dimension) {
	        if (typeof dimension === 'string') {
	            if (dimension === '') {
	                return 0;
	            } else if (dimension.lastIndexOf('%') > -1) {
	                return dimension;
	            }
	            return parseInt(dimension.replace('px', ''), 10);
	        }
	        return dimension;
	    };
	
	    /** Format the elapsed / remaining text. **/
	    parser.timeFormat = function(sec, allowNegative) {
	        if ((sec <= 0 && !allowNegative) || _.isNaN(parseInt(sec))) {
	            return '00:00';
	        }
	
	        // If negative add a minus sign
	        var prefix = (sec < 0) ? '-' : '';
	        sec = Math.abs(sec);
	
	        var hrs  = Math.floor(sec / 3600),
	            mins = Math.floor((sec - hrs * 3600) / 60),
	            secs = Math.floor(sec % 60);
	
	        return prefix + (hrs ? hrs + ':' : '') + (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
	    };
	
	
	
	    return parser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 62 */
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var validator = {};
	
	    /**
	     * Returns true if the value of the object is null, undefined or the empty
	     * string
	     *
	     * @param a The variable to inspect
	     */
	    validator.exists = function (item) {
	        switch (typeof(item)) {
	            case 'string':
	                return (item.length > 0);
	            case 'object':
	                return (item !== null);
	            case 'undefined':
	                return false;
	        }
	        return true;
	    };
	
	    /** Determines if the current page is HTTPS **/
	    validator.isHTTPS = function () {
	        return (window.location.href.indexOf('https') === 0);
	    };
	
	    /**
	     * Determines if a URL is an RTMP link
	     */
	    validator.isRtmp = function (file, type) {
	        return (file.indexOf('rtmp') === 0 || type === 'rtmp');
	    };
	
	    /**
	     * Determines if a URL is a YouTube link
	     */
	    validator.isYouTube = function (path, type) {
	        return (type === 'youtube') || (/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/).test(path);
	    };
	
	    /**
	     * Returns a YouTube ID from a number of YouTube URL formats:
	     *
	     * Matches the following YouTube URL types:
	     *  - http://www.youtube.com/watch?v=YE7VzlLtp-4
	     *  - http://www.youtube.com/watch?v=YE7VzlLtp-4&extra_param=123
	     *  - http://www.youtube.com/watch#!v=YE7VzlLtp-4
	     *  - http://www.youtube.com/watch#!v=YE7VzlLtp-4?extra_param=123&another_param=456
	     *  - http://www.youtube.com/v/YE7VzlLtp-4
	     *  - http://www.youtube.com/v/YE7VzlLtp-4?extra_param=123&another_param=456
	     *  - http://youtu.be/YE7VzlLtp-4
	     *  - http://youtu.be/YE7VzlLtp-4?extra_param=123&another_param=456
	     *  - YE7VzlLtp-4
	     **/
	    validator.youTubeID = function (path) {
	        // Left as a dense regular expression for brevity.
	        var matches = (/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i).exec(path);
	        if (!matches) {
	            return '';
	        }
	        return matches.slice(1).join('').replace('?', '');
	    };
	
	
	    /** Returns the true type of an object * */
	    validator.typeOf = function (value) {
	        if (value === null) {
	            return 'null';
	        }
	        var typeofString = typeof value;
	        if (typeofString === 'object') {
	            if (_.isArray(value)) {
	                return 'array';
	            }
	        }
	        return typeofString;
	    };
	
	    return validator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 63 */
/*!******************************!*\
  !*** ./src/js/utils/ajax.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/parser */ 61)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, parser) {
	    var noop = function(){};
	    var useDomParser = false;
	
	    var crossdomain = function(uri) {
	        var a = document.createElement('a');
	        var b = document.createElement('a');
	        a.href = location.href;
	        try {
	            b.href = uri;
	            b.href = b.href; /* IE fix for relative urls */
	            return a.protocol + '//' + a.host !== b.protocol + '//' + b.host;
	        } catch(e) {}
	        return true;
	    };
	
	    var ajax = function (url, completeCallback, errorCallback, args) {
	        if (_.isObject(url)) {
	            args = url;
	            url = args.url;
	        }
	        var xhr;
	        var options =_.extend({
	            xhr: null,
	            url: url,
	            withCredentials: false,
	            retryWithoutCredentials: false,
	            timeout: 60000,
	            timeoutId: -1,
	            oncomplete: completeCallback || noop,
	            onerror: errorCallback || noop,
	            mimeType: (args && !args.responseType) ? 'text/xml' : '',
	            requireValidXML: false, /* Require responseXML */
	            responseType: (args && args.plainText) ? 'text' : '' /* xhr.responseType ex: "json" or "text" */
	        }, args);
	
	        if ('XDomainRequest' in window && crossdomain(url)) {
	            // IE8 / 9
	            xhr = options.xhr = new window.XDomainRequest();
	            xhr.onload = _ajaxComplete(options);
	            xhr.ontimeout = xhr.onprogress = noop;
	            useDomParser = true;
	        } else if ('XMLHttpRequest' in window) {
	            // Firefox, Chrome, Opera, Safari
	            xhr = options.xhr = new window.XMLHttpRequest();
	            xhr.onreadystatechange = _readyStateChangeHandler(options);
	        } else {
	            // browser cannot make xhr requests
	            options.onerror('', url);
	            return;
	        }
	        var requestError = _requestError('Error loading file', options);
	        xhr.onerror = requestError;
	
	        if ('overrideMimeType' in xhr) {
	            if (options.mimeType) {
	                xhr.overrideMimeType(options.mimeType);
	            }
	        } else {
	            useDomParser = true;
	        }
	
	        try {
	            // remove anchors from the URL since they can't be loaded in IE
	            url = url.replace(/#.*$/, '');
	            xhr.open('GET', url, true);
	        } catch(e) {
	            requestError(e);
	            return xhr;
	        }
	
	        if (options.responseType) {
	            try {
	                xhr.responseType = options.responseType;
	            } catch(e) {/* ignore */}
	        }
	
	        if (options.timeout) {
	            options.timeoutId = setTimeout(function() {
	                _abortAjax(xhr);
	                options.onerror('Timeout', url, xhr);
	            }, options.timeout);
	            xhr.onabort = function() {
	                clearTimeout(options.timeoutId);
	            };
	        }
	
	        try {
	            // xhr.withCredentials must must be set after xhr.open() is called
	            // otherwise older WebKit browsers will throw INVALID_STATE_ERR (PhantomJS 1.x)
	            if (options.withCredentials && 'withCredentials' in xhr) {
	                xhr.withCredentials = true;
	            }
	            xhr.send();
	        } catch(e) {
	            requestError(e);
	        }
	        return xhr;
	    };
	
	    function _abortAjax(xhr) {
	        xhr.onload = null;
	        xhr.onprogress = null;
	        xhr.onreadystatechange = null;
	        xhr.onerror = null;
	        if ('abort' in xhr) {
	            xhr.abort();
	        }
	    }
	
	    function _requestError(message, options) {
	        return function(e) {
	            var xhr = e.currentTarget || options.xhr;
	            clearTimeout(options.timeoutId);
	            // Handle Access-Control-Allow-Origin wildcard error when using withCredentials to send cookies
	            if (options.retryWithoutCredentials && options.xhr.withCredentials) {
	                _abortAjax(xhr);
	                var args = _.extend({}, options, {
	                    xhr: null,
	                    withCredentials: false,
	                    retryWithoutCredentials: false
	                });
	                ajax(args);
	                return;
	            }
	            options.onerror(message, options.url, xhr);
	        };
	    }
	
	    function _readyStateChangeHandler(options) {
	        return function(e) {
	            var xhr = e.currentTarget || options.xhr;
	            if (xhr.readyState === 4) {
	                clearTimeout(options.timeoutId);
	                if (xhr.status >= 400) {
	                    var message;
	                    if (xhr.status === 404) {
	                        message = 'File not found';
	                    } else {
	                        message = '' + xhr.status + '(' + xhr.statusText + ')';
	                    }
	                    return options.onerror(message, options.url, xhr);
	                }
	                if (xhr.status === 200) {
	                    return _ajaxComplete(options)(e);
	                }
	            }
	        };
	    }
	
	    function _ajaxComplete(options) {
	        return function(e) {
	            var xhr = e.currentTarget || options.xhr;
	            clearTimeout(options.timeoutId);
	            if (options.responseType) {
	                if (options.responseType === 'json') {
	                    return _jsonResponse(xhr, options);
	                }
	            } else {
	                // Handle the case where an XML document was returned with an incorrect MIME type.
	                var xml = xhr.responseXML,
	                    firstChild;
	                if (xml) {
	                    try {
	                        // This will throw an error on Windows Mobile 7.5.
	                        // We want to trigger the error so that we can move down to the next section
	                        firstChild = xml.firstChild;
	                    } catch (error) {
	                        /* ignore */
	                    }
	                }
	                if (xml && firstChild) {
	                    return _xmlResponse(xhr, xml, options);
	                }
	                // IE9
	                if (useDomParser && xhr.responseText && !xml) {
	                    xml = parser.parseXML(xhr.responseText);
	                    if (xml && xml.firstChild) {
	                        return _xmlResponse(xhr, xml, options);
	                    }
	                }
	                if (options.requireValidXML) {
	                    options.onerror('Invalid XML', options.url, xhr);
	                    return;
	                }
	            }
	            options.oncomplete(xhr);
	        };
	    }
	
	    function _jsonResponse(xhr, options) {
	        // insure that xhr.response is parsed JSON
	        if ( !xhr.response ||
	            (_.isString(xhr.response) && xhr.responseText.substr(1) !== '"') ) {
	            try {
	                xhr = _.extend({}, xhr, {
	                    response: JSON.parse(xhr.responseText)
	                });
	            } catch (err) {
	                options.onerror('Invalid JSON', options.url, xhr);
	                return;
	            }
	        }
	        return options.oncomplete(xhr);
	    }
	
	
	    function _xmlResponse(xhr, xml, options) {
	        // Handle DOMParser 'parsererror'
	        var doc = xml.documentElement;
	        if (options.requireValidXML &&
	                (doc.nodeName === 'parsererror' || doc.getElementsByTagName('parsererror').length)) {
	            options.onerror('Invalid XML', options.url, xhr);
	            return;
	        }
	        if (!xhr.responseXML) {
	            xhr = _.extend({}, xhr, {
	                responseXML: xml
	            });
	        }
	        return options.oncomplete(xhr);
	    }
	
	    return {
	        ajax: ajax,
	        crossdomain: crossdomain
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 64 */
/*!*************************************!*\
  !*** ./src/js/utils/playerutils.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/constants */ 65),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/validator */ 62),
	    __webpack_require__(/*! utils/parser */ 61),
	    __webpack_require__(/*! version */ 66)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Constants, _, validator, parser, version) {
	    var playerUtils = {};
	
	    /** Gets the repository location **/
	    playerUtils.repo = _.memoize(function () {
	        if (true) {
	            return  parser.getScriptPath('jwplayer.js');
	        }
	
	        var semver = version.split('+')[0];
	        var repo = Constants.repo + semver + '/';
	        if (validator.isHTTPS()) {
	            return repo.replace(/^http:/, 'https:');
	        }
	        return repo;
	    });
	
	    // Is the player at least a minimum required version?
	    playerUtils.versionCheck = function (target) {
	        var tParts = ('0' + target).split(/\W/);
	        var jParts = version.split(/\W/);
	        var tMajor = parseFloat(tParts[0]);
	        var jMajor = parseFloat(jParts[0]);
	        if (tMajor > jMajor) {
	            return false;
	        } else if (tMajor === jMajor) {
	            if (parseFloat('0' + tParts[1]) > parseFloat(jParts[1])) {
	                return false;
	            }
	        }
	        return true;
	    };
	
	    playerUtils.loadFrom = function () {
	        if (true) {
	            return parser.getScriptPath('jwplayer.js');
	        }
	        return playerUtils.repo();
	    };
	
	    return playerUtils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 65 */
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        repo : (''),
	        SkinsIncluded : ['seven'],
	        SkinsLoadable : ['beelden', 'bekle', 'five', 'glow', 'roundster', 'six', 'stormtrooper', 'vapor'],
	        dvrSeekLimit : -25
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 66 */
/*!***************************!*\
  !*** ./src/js/version.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    // This is replaced by compiler
	    return ('7.8.6+local.2017-01-13-15-01-48-936');
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ },
/* 67 */
/*!**********************************!*\
  !*** ./src/js/utils/trycatch.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	    var tryCatch = function (fn, ctx, args) {
	        // IE8 requires these not be undefined
	        ctx = ctx || this;
	        args = args || [];
	
	        // if in debug mode, let 'er blow!
	        var jwplayer = window.jwplayer;
	        if (jwplayer && jwplayer.debug) {
	            return fn.apply(ctx, args);
	        }
	
	        // else be careful
	        try {
	            return fn.apply(ctx, args);
	        }
	        catch (e) {
	            return new jwError(fn.name, e);
	        }
	    };
	
	    var jwError = function (name, error) {
	        this.name = name;
	        this.message = error.message || error.toString();
	        this.error = error;
	    };
	
	    return {
	        tryCatch: tryCatch,
	        Error: jwError
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 68 */
/*!*************************************!*\
  !*** ./src/js/utils/stream-type.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var streamTypeUtil = {};
	
	    // It's DVR if the duration is above the minDvrWindow, Live otherwise
	    streamTypeUtil.isDvr = function (duration, minDvrWindow) {
	        return Math.abs(duration) >= Math.max(minDvrWindow, 0);
	    };
	
	    // Determine the adaptive type - Live, DVR, or VOD
	    // Duration can be positive or negative, but minDvrWindow should always be positive
	    streamTypeUtil.streamType = function(duration, minDvrWindow) {
	        var _minDvrWindow = _.isUndefined(minDvrWindow) ? 120 : minDvrWindow;
	        var streamType = 'VOD';
	
	        if (duration === Infinity) {
	            // Live streams are always Infinity duration
	            streamType = 'LIVE';
	        } else if (duration < 0) {
	            streamType = streamTypeUtil.isDvr(duration, _minDvrWindow) ? 'DVR' : 'LIVE';
	        }
	
	        // Default option is VOD (i.e. positive or non-infinite)
	        return streamType;
	    };
	
	    return streamTypeUtil;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 69 */
/*!***************************************!*\
  !*** ./src/js/parsers/mediaparser.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Parse a MRSS group into a playlistitem (used in RSS and ATOM).
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! parsers/parsers */ 49),
	    __webpack_require__(/*! utils/strings */ 50),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(parsers, strings, utils) {
	
	    var _xmlAttribute = strings.xmlAttribute,
	        _localName = parsers.localName,
	        _textContent = parsers.textContent,
	        _numChildren = parsers.numChildren;
	
	
	    /** Prefix for the MRSS namespace. **/
	    var PREFIX = 'media';
	
	    /**
	     * Parse a feeditem for Yahoo MediaRSS extensions.
	     * The 'content' and 'group' elements can nest other MediaRSS elements.
	     * @param    {XML}        obj        The entire MRSS XML object.
	     * @param    {Object}    itm        The playlistentry to amend the object to.
	     * @return    {Object}            The playlistentry, amended with the MRSS info.
	     **/
	    // formally known as parseGroup
	    var mediaparser = function (obj, itm) {
	
	        var node,
	            i,
	            tracks = 'tracks',
	            captions = [];
	
	        function getLabel(code) {
	            var LANGS = {
	                'zh': 'Chinese',
	                'nl': 'Dutch',
	                'en': 'English',
	                'fr': 'French',
	                'de': 'German',
	                'it': 'Italian',
	                'ja': 'Japanese',
	                'pt': 'Portuguese',
	                'ru': 'Russian',
	                'es': 'Spanish'
	            };
	
	            if (LANGS[code]) {
	                return LANGS[code];
	            }
	            return code;
	        }
	        for (i = 0; i < _numChildren(obj); i++) {
	            node = obj.childNodes[i];
	            if (node.prefix === PREFIX) {
	                if (!_localName(node)) {
	                    continue;
	                }
	                switch (_localName(node).toLowerCase()) {
	                    case 'content':
	                        if (_xmlAttribute(node, 'duration')) {
	                            itm.duration = utils.seconds(_xmlAttribute(node, 'duration'));
	                        }
	                        if (_xmlAttribute(node, 'url')) {
	                            if (!itm.sources) {
	                                itm.sources = [];
	                            }
	                            var sources = {
	                                file: _xmlAttribute(node, 'url'),
	                                type: _xmlAttribute(node, 'type'),
	                                width: _xmlAttribute(node, 'width'),
	                                label: _xmlAttribute(node, 'label')
	                            };
	
	                            var mediaTypes = findMediaTypes(node);
	                            if (mediaTypes.length) {
	                                sources.mediaTypes = mediaTypes;
	                            }
	
	                            itm.sources.push(sources);
	                        }
	                        if (_numChildren(node) > 0) {
	                            itm = mediaparser(node, itm);
	                        }
	                        break;
	                    case 'title':
	                        itm.title = _textContent(node);
	                        break;
	                    case 'description':
	                        itm.description = _textContent(node);
	                        break;
	                    case 'guid':
	                        itm.mediaid = _textContent(node);
	                        break;
	                    case 'thumbnail':
	                        if (!itm.image) {
	                            itm.image = _xmlAttribute(node, 'url');
	                        }
	                        break;
	                    case 'player':
	                        // var url = node.url;
	                        break;
	                    case 'group':
	                        mediaparser(node, itm);
	                        break;
	                    case 'subtitle':
	                        var entry = {};
	                        entry.file = _xmlAttribute(node, 'url');
	                        entry.kind = 'captions';
	                        if (_xmlAttribute(node, 'lang').length > 0) {
	                            entry.label = getLabel(_xmlAttribute(node, 'lang'));
	                        }
	                        captions.push(entry);
	                }
	            }
	        }
	
	        if (!itm.hasOwnProperty(tracks)) {
	            itm[tracks] = [];
	        }
	
	        for (i = 0; i < captions.length; i++) {
	            itm[tracks].push(captions[i]);
	        }
	        return itm;
	    };
	
	    function findMediaTypes (contentNode) {
	        var mediaTypes = [];
	
	        for (var i = 0; i < _numChildren(contentNode); i++) {
	            var node = contentNode.childNodes[i];
	            if (node.prefix === 'jwplayer' && _localName(node).toLowerCase() === 'mediatypes') {
	                mediaTypes.push(_textContent(node));
	            }
	        }
	
	        return mediaTypes;
	    }
	
	    return mediaparser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 70 */
/*!*********************************!*\
  !*** ./src/js/playlist/item.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! playlist/source */ 71),
	    __webpack_require__(/*! playlist/track */ 72)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Source, Track) {
	
	    var Defaults = {
	        //description: undefined,
	        //image: undefined,
	        //mediaid: undefined,
	        //title: undefined,
	        sources: [],
	        tracks: [],
	        minDvrWindow: 120
	    };
	
	    return function (config) {
	        config = config || {};
	        if (!_.isArray(config.tracks)) {
	            delete config.tracks;
	        }
	
	        var _playlistItem = _.extend({}, Defaults, config);
	
	        if (_.isObject(_playlistItem.sources) && !_.isArray(_playlistItem.sources)) {
	            _playlistItem.sources = [Source(_playlistItem.sources)];
	        }
	
	        if (!_.isArray(_playlistItem.sources) || _playlistItem.sources.length === 0) {
	            if (config.levels) {
	                _playlistItem.sources = config.levels;
	            } else {
	                _playlistItem.sources = [Source(config)];
	            }
	        }
	
	        /** Each source should be a named object **/
	        for (var i = 0; i < _playlistItem.sources.length; i++) {
	            var s = _playlistItem.sources[i];
	            if (!s) { continue; }
	            var def = s['default'];
	            if (def) {
	                s['default'] = (def.toString() === 'true');
	            } else {
	                s['default'] = false;
	            }
	
	            // If the source doesn't have a label, number it
	            if (! _playlistItem.sources[i].label) {
	                _playlistItem.sources[i].label = i.toString();
	            }
	
	            _playlistItem.sources[i] = Source(_playlistItem.sources[i]);
	        }
	
	        _playlistItem.sources = _.compact(_playlistItem.sources);
	
	
	        if (!_.isArray(_playlistItem.tracks)) {
	            _playlistItem.tracks = [];
	        }
	
	        if (_.isArray(_playlistItem.captions)) {
	            _playlistItem.tracks = _playlistItem.tracks.concat(_playlistItem.captions);
	            delete _playlistItem.captions;
	        }
	
	        _playlistItem.tracks = _.compact(_.map(_playlistItem.tracks, Track));
	
	        return _playlistItem;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 71 */
/*!***********************************!*\
  !*** ./src/js/playlist/source.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/strings */ 50),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, strings, _) {
	
	    var Defaults = {
	        //file: undefined,
	        //label: undefined,
	        //type: undefined,
	        //androidhls : undefined,
	        'default': false
	    };
	
	
	    var Source = function (config) {
	        // file is the only hard requirement
	        if (!config || !config.file) {
	            return;
	        }
	
	        var _source = _.extend({}, Defaults, config);
	
	        // normalize for odd strings
	        _source.file = strings.trim('' + _source.file);
	
	        // regex to check if mimetype is given
	        var mimetypeRegEx = /^[^\/]+\/(?:x-)?([^\/]+)$/;
	
	        if (mimetypeRegEx.test(_source.type)) {
	            // if type is given as a mimetype
	            _source.mimeType = _source.type;
	            _source.type = _source.type.replace(mimetypeRegEx, '$1');
	        }
	
	        // check if the source is youtube or rtmp
	        if (utils.isYouTube(_source.file)) {
	            _source.type = 'youtube';
	        } else if (utils.isRtmp(_source.file)) {
	            _source.type = 'rtmp';
	        } else if (!_source.type) {
	            _source.type = strings.extension(_source.file);
	        }
	
	        if (!_source.type) {
	            return;
	        }
	
	        // normalize types
	        switch (_source.type) {
	            case 'm3u8':
	            case 'vnd.apple.mpegurl':
	                _source.type = 'hls';
	                break;
	            case 'dash+xml':
	                _source.type = 'dash';
	                break;
	            case 'smil':
	                _source.type = 'rtmp';
	                break;
	            // Although m4a is a container format, it is most often used for aac files
	            // http://en.wikipedia.org/w/index.php?title=MPEG-4_Part_14
	            case 'm4a':
	                _source.type = 'aac';
	                break;
	        }
	
	        // remove empty strings
	        _.each(_source, function(val, key) {
	            if (val === '') {
	                delete _source[key];
	            }
	        });
	
	        return _source;
	    };
	
	    return Source;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 72 */
/*!**********************************!*\
  !*** ./src/js/playlist/track.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	
	    var defaults = {
	        //file: undefined,
	        //label: undefined,
	        kind: 'captions',
	        'default': false
	    };
	
	    var Track = function (config) {
	        // File is the only required attr
	        if (!config || !config.file) {
	            return;
	        }
	
	        return _.extend({}, defaults, config);
	    };
	
	    return Track;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 73 */
/*!*********************************!*\
  !*** ./src/js/events/events.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    var touchEvents = {
	        DRAG: 'drag',
	        DRAG_START: 'dragStart',
	        DRAG_END: 'dragEnd',
	        CLICK: 'click',
	        DOUBLE_CLICK: 'doubleClick',
	        TAP: 'tap',
	        DOUBLE_TAP: 'doubleTap',
	        OVER: 'over',
	        MOVE: 'move',
	        OUT: 'out'
	    };
	
	    var events = {
	        // Script Loaders
	        COMPLETE: 'complete',
	        ERROR: 'error',
	
	        // Ad events
	        JWPLAYER_AD_CLICK: 'adClick',
	        JWPLAYER_AD_COMPANIONS: 'adCompanions',
	        JWPLAYER_AD_COMPLETE: 'adComplete',
	        JWPLAYER_AD_ERROR: 'adError',
	        JWPLAYER_AD_IMPRESSION: 'adImpression',
	        JWPLAYER_AD_META: 'adMeta',
	        JWPLAYER_AD_PAUSE: 'adPause',
	        JWPLAYER_AD_PLAY: 'adPlay',
	        JWPLAYER_AD_SKIPPED: 'adSkipped',
	        JWPLAYER_AD_TIME: 'adTime',
	        JWPLAYER_CAST_AD_CHANGED: 'castAdChanged',
	
	        // Events
	        JWPLAYER_MEDIA_COMPLETE: 'complete',
	        JWPLAYER_READY: 'ready',
	        JWPLAYER_MEDIA_SEEK: 'seek',
	        JWPLAYER_MEDIA_BEFOREPLAY: 'beforePlay',
	        JWPLAYER_MEDIA_BEFORECOMPLETE: 'beforeComplete',
	        JWPLAYER_MEDIA_BUFFER_FULL: 'bufferFull',
	        JWPLAYER_DISPLAY_CLICK: 'displayClick',
	        JWPLAYER_PLAYLIST_COMPLETE: 'playlistComplete',
	        JWPLAYER_CAST_SESSION: 'cast',
	        JWPLAYER_MEDIA_ERROR: 'mediaError',
	        JWPLAYER_MEDIA_FIRST_FRAME: 'firstFrame',
	        JWPLAYER_MEDIA_PLAY_ATTEMPT: 'playAttempt',
	        JWPLAYER_MEDIA_LOADED: 'loaded',
	        JWPLAYER_MEDIA_SEEKED: 'seeked',
	
	        // Setup Events
	        JWPLAYER_SETUP_ERROR: 'setupError',
	
	        // Utility
	        JWPLAYER_ERROR: 'error',
	        JWPLAYER_PLAYER_STATE: 'state',
	        JWPLAYER_CAST_AVAILABLE: 'castAvailable',
	
	        // Model Changes
	        JWPLAYER_MEDIA_BUFFER: 'bufferChange',
	        JWPLAYER_MEDIA_TIME: 'time',
	        JWPLAYER_MEDIA_TYPE: 'mediaType',
	        JWPLAYER_MEDIA_VOLUME: 'volume',
	        JWPLAYER_MEDIA_MUTE: 'mute',
	        JWPLAYER_MEDIA_META: 'meta',
	        JWPLAYER_MEDIA_LEVELS: 'levels',
	        JWPLAYER_MEDIA_LEVEL_CHANGED: 'levelsChanged',
	        JWPLAYER_CONTROLS: 'controls',
	        JWPLAYER_FULLSCREEN: 'fullscreen',
	        JWPLAYER_RESIZE: 'resize',
	        JWPLAYER_PLAYLIST_ITEM: 'playlistItem',
	        JWPLAYER_PLAYLIST_LOADED: 'playlist',
	        JWPLAYER_AUDIO_TRACKS: 'audioTracks',
	        JWPLAYER_AUDIO_TRACK_CHANGED: 'audioTrackChanged',
	
	        // View Component Actions
	        JWPLAYER_LOGO_CLICK: 'logoClick',
	
	        // Model - Captions
	        JWPLAYER_CAPTIONS_LIST: 'captionsList',
	        JWPLAYER_CAPTIONS_CHANGED: 'captionsChanged',
	
	        // Provider Communication
	        JWPLAYER_PROVIDER_CHANGED: 'providerChanged',
	        JWPLAYER_PROVIDER_FIRST_FRAME: 'providerFirstFrame',
	
	        // UI Events
	        JWPLAYER_USER_ACTION: 'userAction',
	        JWPLAYER_PROVIDER_CLICK: 'providerClick',
	        JWPLAYER_VIEW_TAB_FOCUS: 'tabFocus',
	        JWPLAYER_CONTROLBAR_DRAGGING: 'scrubbing',
	        JWPLAYER_INSTREAM_CLICK: 'instreamClick'
	    };
	
	    events.touchEvents = touchEvents;
	
	    return events;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 74 */
/*!*****************************************!*\
  !*** ./src/js/utils/backbone.events.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.1.2
	
	    // Backbone.Events
	    // ---------------
	
	    // A module that can be mixed in to *any object* in order to provide it with
	    // custom events. You may bind with `on` or remove with `off` callback
	    // functions to an event; `trigger`-ing an event fires all callbacks in
	    // succession.
	    //
	    //     var object = {};
	    //     _.extend(object, Backbone.Events);
	    //     object.on('expand', function(){ alert('expanded'); });
	    //     object.trigger('expand');
	    //
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	
	    var array = [];
	    //var push = array.push;
	    var slice = array.slice;
	    //var splice = array.splice;
	
	    var Events = {
	
	        // Bind an event to a `callback` function. Passing `"all"` will bind
	        // the callback to all events fired.
	        on: function (name, callback, context) {
	            if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
	            this._events || (this._events = {});
	            var events = this._events[name] || (this._events[name] = []);
	            events.push({callback: callback, context: context});
	            return this;
	        },
	
	        // Bind an event to only be triggered a single time. After the first time
	        // the callback is invoked, it will be removed.
	        once: function (name, callback, context) {
	            if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
	            var self = this;
	            var once = _.once(function () {
	                self.off(name, once);
	                callback.apply(this, arguments);
	            });
	            once._callback = callback;
	            return this.on(name, once, context);
	        },
	
	        // Remove one or many callbacks. If `context` is null, removes all
	        // callbacks with that function. If `callback` is null, removes all
	        // callbacks for the event. If `name` is null, removes all bound
	        // callbacks for all events.
	        off: function (name, callback, context) {
	            var retain, ev, events, names, i, l, j, k;
	            if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	            if (!name && !callback && !context) {
	                this._events = void 0;
	                return this;
	            }
	            names = name ? [name] : _.keys(this._events);
	            for (i = 0, l = names.length; i < l; i++) {
	                name = names[i];
	                if (events = this._events[name]) {
	                    this._events[name] = retain = [];
	                    if (callback || context) {
	                        for (j = 0, k = events.length; j < k; j++) {
	                            ev = events[j];
	                            if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
	                                (context && context !== ev.context)) {
	                                retain.push(ev);
	                            }
	                        }
	                    }
	                    if (!retain.length) delete this._events[name];
	                }
	            }
	
	            return this;
	        },
	
	        // Trigger one or many events, firing all bound callbacks. Callbacks are
	        // passed the same arguments as `trigger` is, apart from the event name
	        // (unless you're listening on `"all"`, which will cause your callback to
	        // receive the true name of the event as the first argument).
	        trigger: function (name) {
	            if (!this._events) return this;
	            var args = slice.call(arguments, 1);
	            if (!eventsApi(this, 'trigger', name, args)) return this;
	            var events = this._events[name];
	            var allEvents = this._events.all;
	            if (events) triggerEvents(events, args, this);
	            if (allEvents) triggerEvents(allEvents, arguments, this);
	            return this;
	        },
	        // This is a c/p of the above trigger method, swapping out triggerEvents for safeTriggerEvents
	        //  this will have worse performance but safely allows plugins to not wreck eachother
	        triggerSafe: function (name) {
	            if (!this._events) return this;
	            var args = slice.call(arguments, 1);
	            if (!eventsApi(this, 'trigger', name, args)) return this;
	            var events = this._events[name];
	            var allEvents = this._events.all;
	            if (events) safeTriggerEvents(events, args, this, name);
	            if (allEvents) safeTriggerEvents(allEvents, arguments, this, name);
	            return this;
	        }
	
	        /*
	         // Tell this object to stop listening to either specific events ... or
	         // to every object it's currently listening to.
	         stopListening: function(obj, name, callback) {
	         var listeningTo = this._listeningTo;
	         if (!listeningTo) return this;
	         var remove = !name && !callback;
	         if (!callback && typeof name === 'object') callback = this;
	         if (obj) (listeningTo = {})[obj._listenId] = obj;
	         for (var id in listeningTo) {
	         obj = listeningTo[id];
	         obj.off(name, callback, this);
	         if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
	         }
	         return this;
	         }
	         */
	
	    };
	
	
	    // Regular expression used to split event strings.
	    var eventSplitter = /\s+/;
	
	    // Implement fancy features of the Events API such as multiple event
	    // names `"change blur"` and jQuery-style event maps `{change: action}`
	    // in terms of the existing API.
	    var eventsApi = function (obj, action, name, rest) {
	        if (!name) return true;
	
	        // Handle event maps.
	        if (typeof name === 'object') {
	            for (var key in name) {
	                obj[action].apply(obj, [key, name[key]].concat(rest));
	            }
	            return false;
	        }
	
	        // Handle space separated event names.
	        if (eventSplitter.test(name)) {
	            var names = name.split(eventSplitter);
	            for (var i = 0, l = names.length; i < l; i++) {
	                obj[action].apply(obj, [names[i]].concat(rest));
	            }
	            return false;
	        }
	
	        return true;
	    };
	
	    // A difficult-to-believe, but optimized internal dispatch function for
	    // triggering events. Tries to keep the usual cases speedy (most internal
	    // Backbone events have 3 arguments).
	    var triggerEvents = function (events, args, context) {
	        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	        switch (args.length) {
	            case 0:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context);
	                return;
	            case 1:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context, a1);
	                return;
	            case 2:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context, a1, a2);
	                return;
	            case 3:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context, a1, a2, a3);
	                return;
	            default:
	                while (++i < l) (ev = events[i]).callback.apply(ev.context || context, args);
	                return;
	        }
	    };
	
	    // This is a deconstruction of the above default while loop, with try/catch inserted
	    var safeTriggerEvents = function(events, args, context, name) {
	        var ev, i = -1, l = events.length;
	        while (++i < l) {
	            try {
	                ev = events[i];
	                ev.callback.apply(ev.context || context, args);
	            } catch(e) {
	                console.log('Error in "' + name + '" event handler:', e);
	            }
	        }
	    };
	
	    /*
	     var listenMethods = {listenTo: 'on', listenToOnce: 'once'};
	
	     // Inversion-of-control versions of `on` and `once`. Tell *this* object to
	     // listen to an event in another object ... keeping track of what it's
	     // listening to.
	     _.each(listenMethods, function(implementation, method) {
	     Events[method] = function(obj, name, callback) {
	     var listeningTo = this._listeningTo || (this._listeningTo = {});
	     var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	     listeningTo[id] = obj;
	     if (!callback && typeof name === 'object') callback = this;
	     obj[implementation](name, callback, this);
	     return this;
	     };
	     });
	     */
	
	    return Events;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 75 */
/*!******************************!*\
  !*** ./src/js/api/config.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, _) {
	    /*global __webpack_public_path__:true*/
	
	    // Defaults
	    var Defaults = {
	        //androidhls: true,
	        autostart: false,
	        controls: true,
	        displaytitle : true,
	        displaydescription: true,
	        mobilecontrols: false,
	        repeat: false,
	        castAvailable: false,
	        skin: 'seven',
	        stretching: 'uniform',
	        mute: false,
	        volume: 90,
	        width: 480,
	        height: 270,
	        localization: {
	            play: 'Play',
	            playback: 'Start playback',
	            pause: 'Pause',
	            volume: 'Volume',
	            prev: 'Previous',
	            next: 'Next',
	            cast: 'Chromecast',
	            airplay: 'Airplay',
	            fullscreen: 'Fullscreen',
	            playlist: 'Playlist',
	            hd: 'Quality',
	            cc: 'Closed captions',
	            audioTracks: 'Audio tracks',
	            replay: 'Replay',
	            buffer: 'Loading',
	            more: 'More',
	            liveBroadcast: 'Live broadcast',
	            loadingAd: 'Loading ad',
	            rewind: 'Rewind 10s',
	            nextUp: 'Next Up',
	            nextUpClose: 'Next Up Close',
	            related: 'Related'
	        },
	        renderCaptionsNatively: false
	        //qualityLabel: '480p',     // specify a default quality
	        //captionLabel: 'English',  // specify a default Caption
	    };
	
	    function _deserialize(options) {
	        _.each(options, function(val, key) {
	            options[key] = utils.serialize(val);
	        });
	    }
	
	    function _normalizeSize(val) {
	        if (val.slice && val.slice(-2) === 'px') {
	            val = val.slice(0,-2);
	        }
	        return val;
	    }
	
	    var config = function(options, storage) {
	        var persisted = storage && storage.getAllItems();
	        var allOptions = _.extend({}, (window.jwplayer || {}).defaults, persisted, options);
	
	        _deserialize(allOptions);
	
	        allOptions.localization = _.extend({}, Defaults.localization, allOptions.localization);
	
	        var config = _.extend({}, Defaults, allOptions);
	        if (config.base === '.') {
	            config.base = utils.getScriptPath('jwplayer.js');
	        }
	        config.base = (config.base || utils.loadFrom()).replace(/\/?$/, '/');
	        __webpack_require__.p = config.base;
	        config.width  = _normalizeSize(config.width);
	        config.height = _normalizeSize(config.height);
	        var pathToFlash = (utils.getScriptPath('jwplayer.js') || config.base);
	        config.flashplayer = config.flashplayer || pathToFlash + 'jwplayer.flash.swf';
	        config.flashloader = config.flashloader || pathToFlash + 'jwplayer.loader.swf';
	
	        // Non ssl pages can only communicate with flash when it is loaded
	        //   from a non ssl location
	        if (window.location.protocol === 'http:') {
	            config.flashplayer = config.flashplayer.replace('https', 'http');
	            config.flashloader = config.flashloader.replace('https', 'http');
	        }
	
	        config.aspectratio = _evaluateAspectRatio(config.aspectratio, config.width);
	
	        // set time slider location (static or fixed) at top level
	        if (config.timeSliderAbove) {
	            config.timeSliderAbove = _.isBoolean(config.timeSliderAbove) ? config.timeSliderAbove : false;
	        }
	
	        if (_.isObject(config.skin)) {
	            config.skinUrl = config.skin.url;
	            config.skinColorInactive = config.skin.inactive; // default icon color
	            config.skinColorActive = config.skin.active;  // icon hover, on, slider color
	            config.skinColorBackground = config.skin.background; // control elements background
	            config.skin = _.isString(config.skin.name) ? config.skin.name : Defaults.skin; // get skin name if it exists
	        }
	
	        if (_.isString(config.skin) && config.skin.indexOf('.xml') > 0) {
	            console.log('JW Player does not support XML skins, please update your config');
	            config.skin = config.skin.replace('.xml', '');
	        }
	
	        if (!config.aspectratio) {
	            delete config.aspectratio;
	        }
	
	        if (!config.playlist) {
	            // This is a legacy fallback, assuming a playlist item has been flattened into the config
	            var obj = _.pick(config, [
	                'title',
	                'description',
	                'type',
	                'mediaid',
	                'image',
	                'file',
	                'sources',
	                'tracks',
	                'preload'
	            ]);
	
	            config.playlist = [ obj ];
	        }
	
	        return config;
	    };
	
	
	    function _evaluateAspectRatio(ar, width) {
	        if (width.toString().indexOf('%') === -1) {
	            return 0;
	        }
	        if (typeof ar !== 'string' || !utils.exists(ar)) {
	            return 0;
	        }
	        if (/^\d*\.?\d+%$/.test(ar)) {
	            return ar;
	        }
	        var index = ar.indexOf(':');
	        if (index === -1) {
	            return 0;
	        }
	        var w = parseFloat(ar.substr(0, index)),
	            h = parseFloat(ar.substr(index + 1));
	        if (w <= 0 || h <= 0) {
	            return 0;
	        }
	        return (h / w * 100) + '%';
	    }
	
	
	    return config;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 76 */
/*!************************************!*\
  !*** ./src/js/controller/Setup.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! controller/setup-steps */ 77),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! events/events */ 73)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(SetupSteps, Events, _, events) {
	
	
	    var Setup = function(_api, _model, _view, _setPlaylist) {
	        var _this = this,
	            _setupFailureTimeout;
	
	        var _queue = SetupSteps.getQueue();
	
	        var _errorTimeoutSeconds = 30;
	
	
	        this.start = function () {
	            _setupFailureTimeout = setTimeout(_setupTimeoutHandler, _errorTimeoutSeconds * 1000);
	            _nextTask();
	        };
	
	        this.destroy = function() {
	            clearTimeout(_setupFailureTimeout);
	            this.off();
	            _queue.length = 0;
	            _api = null;
	            _model = null;
	            _view = null;
	        };
	
	        function _setupTimeoutHandler() {
	            _error('Setup Timeout Error', 'Setup took longer than ' + _errorTimeoutSeconds + ' seconds to complete.');
	        }
	
	        function _nextTask() {
	            _.each(_queue, function(c) {
	                // If task completed, or destroy was called
	                if (c.complete === true || c.running === true || _api === null) {
	                    return;
	                }
	
	                if (_allComplete(c.depends)) {
	                    c.running = true;
	                    callTask(c);
	                }
	            });
	        }
	
	        function callTask(task) {
	            var resolve = function(resolveState) {
	                resolveState = resolveState || {};
	                _taskComplete(task, resolveState);
	            };
	
	            task.method(resolve, _model, _api, _view, _setPlaylist);
	        }
	
	        function _allComplete(dependencies) {
	            // return true if empty array,
	            //  or if each object has an attribute 'complete' which is true
	            return _.all(dependencies, function(name) {
	                return _queue[name].complete;
	            });
	        }
	
	        function _taskComplete(task, resolveState) {
	            if (resolveState.type === 'error') {
	                _error(resolveState.msg, resolveState.reason);
	            } else if (resolveState.type === 'complete') {
	                clearTimeout(_setupFailureTimeout);
	                _this.trigger(events.JWPLAYER_READY);
	            } else {
	                task.complete = true;
	                _nextTask();
	            }
	        }
	
	        function _error(message, reason) {
	            clearTimeout(_setupFailureTimeout);
	            _this.trigger(events.JWPLAYER_SETUP_ERROR, {
	                message: message + ': ' + reason
	            });
	            _this.destroy();
	        }
	    };
	
	    Setup.prototype = Events;
	
	    return Setup;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 77 */
/*!******************************************!*\
  !*** ./src/js/controller/setup-steps.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/plugins */ 78),
	    __webpack_require__(/*! playlist/loader */ 48),
	    __webpack_require__(/*! utils/scriptloader */ 81),
	    __webpack_require__(/*! utils/embedswf */ 84),
	    __webpack_require__(/*! utils/constants */ 65),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! events/events */ 73)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(plugins, PlaylistLoader, ScriptLoader, EmbedSwf, Constants, _, utils, events) {
	
	    var _pluginLoader,
	        _playlistLoader;
	
	
	    function getQueue() {
	
	        var Components = {
	            LOAD_PROMISE_POLYFILL : {
	                method: _loadPromisePolyfill,
	                depends: []
	            },
	            LOAD_BASE64_POLYFILL : {
	                method: _loadBase64Polyfill,
	                depends: []
	            },
	            LOADED_POLYFILLS : {
	                method: _loadedPolyfills,
	                depends: [
	                    'LOAD_PROMISE_POLYFILL',
	                    'LOAD_BASE64_POLYFILL'
	                ]
	            },
	            LOAD_PLUGINS : {
	                method: _loadPlugins,
	                depends: ['LOADED_POLYFILLS']
	            },
	            INIT_PLUGINS : {
	                method: _initPlugins,
	                depends: [
	                    'LOAD_PLUGINS',
	                    // Init requires jw-overlays to be in the DOM
	                    'SETUP_VIEW'
	                ]
	            },
	            LOAD_SKIN : {
	                method: _loadSkin,
	                depends: ['LOADED_POLYFILLS']
	            },
	            LOAD_PLAYLIST : {
	                method: _loadPlaylist,
	                depends: ['LOADED_POLYFILLS']
	            },
	            CHECK_FLASH: {
	                method: _checkFlash,
	                depends : ['LOADED_POLYFILLS']
	            },
	            FILTER_PLAYLIST: {
	                method: _filterPlaylist,
	                depends : ['LOAD_PLAYLIST', 'CHECK_FLASH']
	            },
	            SETUP_VIEW : {
	                method: _setupView,
	                depends: [
	                    'LOAD_SKIN'
	                ]
	            },
	            SET_ITEM : {
	                method: _setPlaylistItem,
	                depends: [
	                    'INIT_PLUGINS',
	                    'FILTER_PLAYLIST'
	                ]
	            },
	            SEND_READY : {
	                method: _sendReady,
	                depends: [
	                    'SETUP_VIEW',
	                    'SET_ITEM'
	                ]
	            }
	        };
	
	        return Components;
	    }
	
	    function _loadPromisePolyfill(resolve) {
	        if (!window.Promise) {
	            __webpack_require__.e/* nsure */(1/*! polyfills.promise */, function (require) {
	                __webpack_require__(/*! polyfills/promise */ 85);
	                resolve();
	            });
	        } else {
	            resolve();
	        }
	    }
	
	    function _loadBase64Polyfill(resolve) {
	        if (!window.btoa || !window.atob) {
	            __webpack_require__.e/* nsure */(2/*! polyfills.base64 */, function(require) {
	                __webpack_require__(/*! polyfills/base64 */ 86);
	                resolve();
	            });
	        } else {
	            resolve();
	        }
	    }
	
	    function _loadedPolyfills(resolve){
	        resolve();
	    }
	
	    function _loadPlugins(resolve, _model) {
	        window.jwplayerPluginJsonp = plugins.registerPlugin;
	        _pluginLoader = plugins.loadPlugins(_model.get('id'), _model.get('plugins'));
	        _pluginLoader.on(events.COMPLETE, resolve);
	        _pluginLoader.on(events.ERROR, _.partial(_pluginsError, resolve));
	        _pluginLoader.load();
	    }
	
	    function _initPlugins(resolve, _model, _api) {
	        delete window.jwplayerPluginJsonp;
	        _pluginLoader.setupPlugins(_api, _model);
	        resolve();
	    }
	
	    function _pluginsError(resolve, evt) {
	        error(resolve, 'Could not load plugin', evt.message);
	    }
	
	    function _loadPlaylist(resolve, _model) {
	        var playlist = _model.get('playlist');
	        if (_.isString(playlist)) {
	            _playlistLoader = new PlaylistLoader();
	            _playlistLoader.on(events.JWPLAYER_PLAYLIST_LOADED, function(data) {
	                _model.set('playlist', data.playlist);
	                _model.set('feedid', data.feedid);
	                resolve();
	            });
	            _playlistLoader.on(events.JWPLAYER_ERROR, _.partial(_playlistError, resolve));
	            _playlistLoader.load(playlist);
	        } else {
	            resolve();
	        }
	    }
	
	    function _checkFlash(resolve, _model, _api) {
	        var primaryFlash = _model.get('primary') === 'flash';
	        var flashVersion = utils.flashVersion();
	        if (primaryFlash && flashVersion) {
	            var originalContainer = _api.getContainer();
	            var parentElement = originalContainer.parentElement;
	            if (!parentElement) {
	                // Cannot perform test when player container has no parent
	                resolve();
	            }
	            var testContainer = document.createElement('div');
	            testContainer.id = _model.get('id');
	            var flashHealthCheckId = '' + testContainer.id + '-' + Math.random().toString(16).substr(2);
	            var flashHealthCheckSwf = _model.get('flashloader');
	            var width = _model.get('width');
	            var height = _model.get('height');
	            utils.style(testContainer, {
	                position: 'relative',
	                width: width.toString().indexOf('%') > 0 ? width : (width+ 'px'),
	                height: height.toString().indexOf('%') > 0 ? height : (height + 'px')
	            });
	            var swf = EmbedSwf.embed(flashHealthCheckSwf, testContainer, flashHealthCheckId, null);
	            var done = function() {
	                if (embedTimeout === -1) {
	                    return;
	                }
	                clearTimeout(embedTimeout);
	                embedTimeout = -1;
	                resolve();
	            };
	            var failed = function() {
	                _model.set('primary', undefined);
	                _model.updateProviders();
	                done();
	            };
	            Object.defineProperty(swf, 'embedCallback', { get: function() { return done; } });
	            if (!swf.on) {
	                // Chrome bug where properties are not set on object element
	                return failed();
	            }
	            parentElement.replaceChild(testContainer, originalContainer);
	            // If "flash.loader.swf" does not fire embedCallback in time, unset primary "flash" config option
	            var embedTimeout = setTimeout(failed, 3000);
	        } else {
	            resolve();
	        }
	    }
	
	    function _filterPlaylist(resolve, _model, _api, _view, _setPlaylist) {
	        var playlist = _model.get('playlist');
	
	        // Performs filtering
	        var success = _setPlaylist(playlist);
	
	        if (success) {
	            resolve();
	        } else {
	            _playlistError(resolve);
	        }
	    }
	
	    function _playlistError(resolve, evt) {
	        if (evt && evt.message) {
	            error(resolve, 'Error loading playlist', evt.message);
	        } else {
	            error(resolve, 'Error loading player', 'No playable sources found');
	        }
	    }
	
	    function skinToLoad(skin, base) {
	        if(_.contains(Constants.SkinsLoadable, skin)) {
	            return base + 'skins/' + skin + '.css';
	        }
	    }
	
	    function isSkinLoaded(skinPath) {
	        var ss = document.styleSheets;
	        for (var i = 0, max = ss.length; i < max; i++) {
	            if (ss[i].href === skinPath) {
	                return true;
	            }
	        }
	        return false;
	    }
	
	    function _loadSkin(resolve, _model) {
	        var skinName = _model.get('skin');
	        var skinUrl = _model.get('skinUrl');
	
	        // If skin is built into player, there is nothing to load
	        if (_.contains(Constants.SkinsIncluded, skinName)) {
	            resolve();
	            return;
	        }
	
	        if (!skinUrl) {
	            // if a user doesn't specify a url, we assume it comes from our CDN or config.base
	            skinUrl = skinToLoad(skinName, _model.get('base'));
	        }
	
	        if (_.isString(skinUrl) && !isSkinLoaded(skinUrl)) {
	            _model.set('skin-loading', true);
	
	            var isStylesheet = true;
	            var loader = new ScriptLoader(skinUrl, isStylesheet);
	
	            loader.addEventListener(events.COMPLETE, function() {
	                _model.set('skin-loading', false);
	            });
	            loader.addEventListener(events.ERROR, function() {
	                _model.set('skin', 'seven'); // fall back to seven skin
	                _model.set('skin-loading', false);
	            });
	
	            loader.load();
	        }
	
	        // Control elements are hidden by the loading flag until it is ready
	        _.defer(function() {
	            resolve();
	        });
	    }
	
	
	    function _setupView(resolve, _model, _api, _view) {
	        _view.setup();
	        resolve();
	    }
	
	    function _setPlaylistItem(resolve, _model) {
	        _model.once('itemReady', resolve);
	        _model.setItemIndex(_model.get('item'));
	    }
	
	    function _sendReady(resolve) {
	        resolve({
	            type : 'complete'
	        });
	    }
	
	    function error(resolve, msg, reason) {
	        resolve({
	            type : 'error',
	            msg : msg,
	            reason : reason
	        });
	    }
	
	    return {
	        getQueue : getQueue,
	        error: error
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 78 */
/*!***********************************!*\
  !*** ./src/js/plugins/plugins.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/loader */ 79),
	    __webpack_require__(/*! plugins/model */ 82),
	    __webpack_require__(/*! plugins/plugin */ 83),
	    __webpack_require__(/*! plugins/utils */ 80)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(PluginsLoader, PluginsModel, Plugin, pluginsUtils) {
	
	    var _plugins = {},
	        _pluginLoaders = {};
	
	    var loadPlugins = function(id, config) {
	        _pluginLoaders[id] = new PluginsLoader(new PluginsModel(_plugins), config);
	        return _pluginLoaders[id];
	    };
	
	    var registerPlugin = function(id, target, arg1, arg2) {
	        var pluginId = pluginsUtils.getPluginName(id);
	        if (!_plugins[pluginId]) {
	            _plugins[pluginId] = new Plugin(id);
	        }
	        _plugins[pluginId].registerPlugin(id, target, arg1, arg2);
	    };
	
	
	    return {
	        loadPlugins : loadPlugins,
	        registerPlugin : registerPlugin
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 79 */
/*!**********************************!*\
  !*** ./src/js/plugins/loader.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/utils */ 80),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/scriptloader */ 81)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(pluginsUtils, utils, events, Events, _, scriptloader) {
	
	    function _addToPlayerGenerator(_api, pluginInstance, div) {
	        return function() {
	            var overlaysElement = _api.getContainer().getElementsByClassName('jw-overlays')[0];
	
	            // This should probably be an error
	            if (!overlaysElement) {
	                return;
	            }
	
	            overlaysElement.appendChild(div);
	            div.left = overlaysElement.style.left;
	            div.top = overlaysElement.style.top;
	
	            pluginInstance.displayArea = overlaysElement;
	        };
	    }
	
	    function _pluginResizeGenerator(pluginInstance) {
	        function resize() {
	            var displayarea = pluginInstance.displayArea;
	            if (displayarea) {
	                pluginInstance.resize(displayarea.clientWidth, displayarea.clientHeight);
	            }
	        }
	        return function() {
	            resize();
	            // Sometimes a mobile device may trigger resize before the new sizes are finalized
	            setTimeout(resize, 400);
	        };
	    }
	
	    var PluginLoader = function (model, _config) {
	        var _this = _.extend(this, Events),
	            _status = scriptloader.loaderstatus.NEW,
	            _iscomplete = false,
	            _pluginCount = _.size(_config),
	            _pluginLoaded,
	            _destroyed = false;
	
	        /*
	         * Plugins can be loaded by multiple players on the page, but all of them use
	         * the same plugin model singleton. This creates a race condition because
	         * multiple players are creating and triggering loads, which could complete
	         * at any time. We could have some really complicated logic that deals with
	         * this by checking the status when it's created and / or having the loader
	         * redispatch its current status on load(). Rather than do this, we just check
	         * for completion after all of the plugins have been created. If all plugins
	         * have been loaded by the time checkComplete is called, then the loader is
	         * done and we fire the complete event. If there are new loads, they will
	         * arrive later, retriggering the completeness check and triggering a complete
	         * to fire, if necessary.
	         */
	        function _complete() {
	            if (!_iscomplete) {
	                _iscomplete = true;
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	            }
	        }
	
	        // This is not entirely efficient, but it's simple
	        function _checkComplete() {
	            // Since we do not remove event listeners on pluginObj when destroying
	            if (_destroyed) {
	                return;
	            }
	            if (!_config || _.keys(_config).length === 0) {
	                _complete();
	            }
	            if (!_iscomplete) {
	                var plugins = model.getPlugins();
	                _pluginLoaded = _.after(_pluginCount, _complete);
	                _.each(_config, function (value, plugin) {
	                    var pluginName = pluginsUtils.getPluginName(plugin),
	                        pluginObj = plugins[pluginName],
	                        js = pluginObj.getJS(),
	                        target = pluginObj.getTarget(),
	                        status = pluginObj.getStatus();
	
	                    if (status === scriptloader.loaderstatus.LOADING || status === scriptloader.loaderstatus.NEW) {
	                        return;
	                    } else if (js && !utils.versionCheck(target)) {
	                        _this.trigger(events.ERROR, {
	                            message: 'Incompatible player version'
	                        });
	                    }
	                    _pluginLoaded();
	                });
	
	            }
	        }
	
	        function _pluginError(e) {
	            // Since we do not remove event listeners on pluginObj when destroying
	            if (_destroyed) {
	                return;
	            }
	            var message = 'File not found';
	            if (e.url) {
	                utils.log(message, e.url);
	            }
	            this.off();
	            this.trigger(events.ERROR, {
	                message: message
	            });
	            _checkComplete();
	        }
	
	        this.setupPlugins = function (api, playerModel) {
	            var flashPlugins = [],
	                plugins = model.getPlugins();
	
	            var pluginsConfig = playerModel.get('plugins');
	            _.each(pluginsConfig, function(pluginConfig, plugin) {
	                var pluginName = pluginsUtils.getPluginName(plugin),
	                    pluginObj = plugins[pluginName],
	                    flashPath = pluginObj.getFlashPath(),
	                    jsPlugin = pluginObj.getJS(),
	                    pluginURL = pluginObj.getURL();
	
	                if (flashPath) {
	                    var flashPluginConfig = _.extend({
	                        name: pluginName,
	                        swf: flashPath,
	                        pluginmode: pluginObj.getPluginmode()
	                    }, pluginConfig);
	                    flashPlugins.push(flashPluginConfig);
	                }
	
	                var status = utils.tryCatch(function() {
	                    if (jsPlugin) {
	                        var pluginConfig = pluginsConfig[pluginURL];
	
	                        if (!pluginConfig) {
	                            utils.log('JW Plugin already loaded', pluginName, pluginURL);
	                            return;
	                        }
	
	                        var div = document.createElement('div');
	                        div.id = api.id + '_' + pluginName;
	                        div.className = 'jw-plugin jw-reset';
	
	                        var pluginOptions = _.extend({}, pluginConfig);
	                        var pluginInstance = pluginObj.getNewInstance(api, pluginOptions, div);
	
	                        pluginInstance.addToPlayer   = _addToPlayerGenerator(api, pluginInstance, div);
	                        pluginInstance.resizeHandler = _pluginResizeGenerator(pluginInstance);
	
	                        api.addPlugin(pluginName, pluginInstance, div);
	                    }
	
	                });
	
	                if (status instanceof utils.Error) {
	                    utils.log('ERROR: Failed to load ' + pluginName + '.');
	                }
	            });
	
	            playerModel.set('flashPlugins', flashPlugins);
	        };
	
	        this.load = function () {
	            // Must be a hash map
	            if (utils.exists(_config) && utils.typeOf(_config) !== 'object') {
	                _checkComplete();
	                return;
	            }
	
	            _status = scriptloader.loaderstatus.LOADING;
	
	            /** First pass to create the plugins and add listeners **/
	            _.each(_config, function(value, pluginUrl) {
	                if (utils.exists(pluginUrl)) {
	                    var pluginObj = model.addPlugin(pluginUrl);
	                    pluginObj.on(events.COMPLETE, _checkComplete);
	                    pluginObj.on(events.ERROR, _pluginError);
	                }
	            });
	
	            var plugins = model.getPlugins();
	
	            /** Second pass to actually load the plugins **/
	            _.each(plugins, function(pluginObj) {
	                // Plugin object ensures that it's only loaded once
	                pluginObj.load();
	            });
	
	            // Make sure we're not hanging around waiting for plugins that already finished loading
	            _checkComplete();
	        };
	
	        this.destroy = function () {
	            _destroyed = true;
	            this.off();
	        };
	
	        this.getStatus = function () {
	            return _status;
	        };
	
	    };
	
	    return PluginLoader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 80 */
/*!*********************************!*\
  !*** ./src/js/plugins/utils.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 50)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings) {
	
	    var utils = {};
	
	    /**
	     * Types of plugin paths
	     */
	    var _pluginPathType = utils.pluginPathType = {
	        ABSOLUTE: 0,
	        RELATIVE: 1,
	        CDN: 2
	    };
	
	    utils.getPluginPathType = function (path) {
	        if (typeof path !== 'string') {
	            return;
	        }
	        path = path.split('?')[0];
	        var protocol = path.indexOf('://');
	        if (protocol > 0) {
	            return _pluginPathType.ABSOLUTE;
	        }
	        var folder = path.indexOf('/');
	        var extension = strings.extension(path);
	        if (protocol < 0 && folder < 0 && (!extension || !isNaN(extension))) {
	            return _pluginPathType.CDN;
	        }
	        return _pluginPathType.RELATIVE;
	    };
	
	
	    /**
	     * Extracts a plugin name from a string
	     */
	    utils.getPluginName = function (pluginName) {
	        /** Regex locates the characters after the last slash, until it encounters a dash. **/
	        return pluginName.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, '$2');
	    };
	
	    /**
	     * Extracts a plugin version from a string
	     */
	    utils.getPluginVersion = function (pluginName) {
	        return pluginName.replace(/[^-]*-?([^\.]*).*$/, '$1');
	    };
	
	    return utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 81 */
/*!**************************************!*\
  !*** ./src/js/utils/scriptloader.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(events, Events, _) {
	
	    var _loaders = {};
	
	    var STATUS = {
	        NEW: 0,
	        LOADING: 1,
	        ERROR: 2,
	        COMPLETE: 3
	    };
	
	    var scriptloader = function (url, isStyle) {
	        var _this = _.extend(this, Events),
	            _status = STATUS.NEW;
	
	        // legacy support
	        this.addEventListener = this.on;
	        this.removeEventListener = this.off;
	
	
	        function _sendError(evt) {
	            _status = STATUS.ERROR;
	            _this.trigger(events.ERROR, evt);
	        }
	
	        function _sendComplete(evt) {
	            _status = STATUS.COMPLETE;
	            _this.trigger(events.COMPLETE, evt);
	        }
	
	        this.makeStyleLink = function(url) {
	            var link = document.createElement('link');
	            link.type = 'text/css';
	            link.rel = 'stylesheet';
	            link.href = url;
	            return link;
	        };
	        this.makeScriptTag = function(url) {
	            var scriptTag = document.createElement('script');
	            scriptTag.src = url;
	            return scriptTag;
	        };
	
	        this.makeTag = (isStyle ? this.makeStyleLink : this.makeScriptTag);
	
	        this.load = function () {
	            // Only execute on the first run
	            if (_status !== STATUS.NEW) {
	                return;
	            }
	
	            // If we already have a scriptloader loading the same script, don't create a new one;
	            var sameLoader = _loaders[url];
	            if (sameLoader) {
	                _status = sameLoader.getStatus();
	                if (_status < 2) {
	                    // dispatch to this instances listeners when the first loader gets updates
	                    sameLoader.on(events.ERROR, _sendError);
	                    sameLoader.on(events.COMPLETE, _sendComplete);
	                    return;
	                }
	                // already errored or loaded... keep going?
	            }
	
	            var head = document.getElementsByTagName('head')[0] || document.documentElement;
	            var scriptTag = this.makeTag(url);
	
	            var done = false;
	            scriptTag.onload = scriptTag.onreadystatechange = function (evt) {
	                if (!done &&
	                    (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
	                    done = true;
	                    _sendComplete(evt);
	
	                    // Handle memory leak in IE
	                    scriptTag.onload = scriptTag.onreadystatechange = null;
	                    if (head && scriptTag.parentNode && !isStyle) {
	                        head.removeChild(scriptTag);
	                    }
	                }
	            };
	            scriptTag.onerror = _sendError;
	
	            head.insertBefore(scriptTag, head.firstChild);
	
	            _status = STATUS.LOADING;
	            _loaders[url] = this;
	        };
	
	        this.getStatus = function () {
	            return _status;
	        };
	    };
	
	    scriptloader.loaderstatus = STATUS;
	
	    return scriptloader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 82 */
/*!*********************************!*\
  !*** ./src/js/plugins/model.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/utils */ 80),
	    __webpack_require__(/*! plugins/plugin */ 83)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(pluginsUtils, Plugin) {
	
	    var PluginModel = function (plugins) {
	        this.addPlugin = function (url) {
	            var pluginName = pluginsUtils.getPluginName(url);
	            if (!plugins[pluginName]) {
	                plugins[pluginName] = new Plugin(url);
	            }
	            return plugins[pluginName];
	        };
	
	        this.getPlugins = function () {
	            return plugins;
	        };
	    };
	
	    return PluginModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 83 */
/*!**********************************!*\
  !*** ./src/js/plugins/plugin.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! plugins/utils */ 80),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/scriptloader */ 81),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, pluginsUtils, events, Events, scriptloader, _) {
	
	    var pluginmodes = {
	        FLASH: 0,
	        JAVASCRIPT: 1,
	        HYBRID: 2
	    };
	
	    var Plugin = function(url) {
	        var _this = _.extend(this, Events),
	            _status = scriptloader.loaderstatus.NEW,
	            _flashPath,
	            _js,
	            _target,
	            _completeTimeout;
	
	        function getJSPath() {
	            switch (pluginsUtils.getPluginPathType(url)) {
	                case pluginsUtils.pluginPathType.ABSOLUTE:
	                    return url;
	                case pluginsUtils.pluginPathType.RELATIVE:
	                    return utils.getAbsolutePath(url, window.location.href);
	            }
	        }
	
	        function completeHandler() {
	            _.defer(function() {
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	            });
	        }
	
	        function errorHandler() {
	            _status = scriptloader.loaderstatus.ERROR;
	            _this.trigger(events.ERROR, {url: url});
	        }
	
	        this.load = function() {
	            if (_status !== scriptloader.loaderstatus.NEW) {
	                return;
	            }
	            if (url.lastIndexOf('.swf') > 0) {
	                _flashPath = url;
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	                return;
	            }
	            if (pluginsUtils.getPluginPathType(url) === pluginsUtils.pluginPathType.CDN) {
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	                return;
	            }
	            _status = scriptloader.loaderstatus.LOADING;
	            var _loader = new scriptloader(getJSPath());
	            // Complete doesn't matter - we're waiting for registerPlugin
	            _loader.on(events.COMPLETE, completeHandler);
	            _loader.on(events.ERROR, errorHandler);
	            _loader.load();
	        };
	
	        this.registerPlugin = function(id, target, arg1, arg2) {
	            if (_completeTimeout) {
	                clearTimeout(_completeTimeout);
	                _completeTimeout = undefined;
	            }
	            _target = target;
	            if (arg1 && arg2) {
	                _flashPath = arg2;
	                _js = arg1;
	            } else if (typeof arg1 === 'string') {
	                _flashPath = arg1;
	            } else if (typeof arg1 === 'function') {
	                _js = arg1;
	            } else if (!arg1 && !arg2) {
	                _flashPath = id;
	            }
	            _status = scriptloader.loaderstatus.COMPLETE;
	            _this.trigger(events.COMPLETE);
	        };
	
	        this.getStatus = function() {
	            return _status;
	        };
	
	        this.getPluginName = function() {
	            return pluginsUtils.getPluginName(url);
	        };
	
	        this.getFlashPath = function() {
	            if (_flashPath) {
	                switch (pluginsUtils.getPluginPathType(_flashPath)) {
	                    case pluginsUtils.pluginPathType.ABSOLUTE:
	                        return _flashPath;
	                    case pluginsUtils.pluginPathType.RELATIVE:
	                        if (url.lastIndexOf('.swf') > 0) {
	                            return utils.getAbsolutePath(_flashPath, window.location.href);
	                        }
	                        return utils.getAbsolutePath(_flashPath, getJSPath());
	                }
	            }
	            return null;
	        };
	
	        this.getJS = function() {
	            return _js;
	        };
	
	        this.getTarget = function() {
	            return _target;
	        };
	
	        this.getPluginmode = function() {
	            if (typeof _flashPath !== undefined && typeof _js !== undefined) {
	                return pluginmodes.HYBRID;
	            } else if (typeof _flashPath !== undefined) {
	                return pluginmodes.FLASH;
	            } else if (typeof _js !== undefined) {
	                return pluginmodes.JAVASCRIPT;
	            }
	        };
	
	        this.getNewInstance = function(api, config, div) {
	            return new _js(api, config, div);
	        };
	
	        this.getURL = function() {
	            return url;
	        };
	    };
	
	    return Plugin;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 84 */
/*!**********************************!*\
  !*** ./src/js/utils/embedswf.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Events, _) {
	
	    // Defaults
	    var BGCOLOR = '#000000';
	
	    function appendParam(object, name, value) {
	        var param = document.createElement('param');
	        param.setAttribute('name', name);
	        param.setAttribute('value', value);
	        object.appendChild(param);
	    }
	
	    function addGetter(obj, property, value) {
	        Object.defineProperty(obj, property, { get: function() { return value; } });
	    }
	
	    function embed(swfUrl, container, id, wmode) {
	        var swf;
	        var queueCommands = true;
	
	        wmode = wmode || 'opaque';
	
	        if (utils.isMSIE()) {
	            // IE8 works best with outerHTML
	            var temp = document.createElement('div');
	            container.appendChild(temp);
	
	            temp.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
	                ' width="100%" height="100%" id="' + id +
	                '" name="' + id +
	                '" tabindex="0">' +
	                '<param name="movie" value="' + swfUrl + '">' +
	                '<param name="allowfullscreen" value="true">' +
	                '<param name="allowscriptaccess" value="always">' +
	                '<param name="wmode" value="' + wmode + '">' +
	                '<param name="bgcolor" value="' + BGCOLOR + '">' +
	                '<param name="menu" value="false">' +
	                '</object>';
	
	            var objectElements = container.getElementsByTagName('object');
	            for (var i = objectElements.length; i--;) {
	                if (objectElements[i].id === id) {
	                    swf = objectElements[i];
	                }
	            }
	
	        } else {
	            swf = document.createElement('object');
	            swf.setAttribute('type', 'application/x-shockwave-flash');
	            swf.setAttribute('data', swfUrl);
	            swf.setAttribute('width', '100%');
	            swf.setAttribute('height', '100%');
	            swf.setAttribute('bgcolor', BGCOLOR);
	            swf.setAttribute('id', id);
	            swf.setAttribute('name', id);
	
	            appendParam(swf, 'allowfullscreen', 'true');
	            appendParam(swf, 'allowscriptaccess', 'always');
	            appendParam(swf, 'wmode', wmode);
	            appendParam(swf, 'menu', 'false');
	
	            container.appendChild(swf, container);
	        }
	
	        swf.className = 'jw-swf jw-reset';
	        swf.style.display = 'block';
	        swf.style.position = 'absolute';
	        swf.style.left = 0;
	        swf.style.right = 0;
	        swf.style.top = 0;
	        swf.style.bottom = 0;
	        if (utils.isIE() && ('PointerEvent' in window)) {
	            swf.style.pointerEvents = 'none';
	        }
	
	        // flash can trigger events
	        addGetter(swf, 'on', Events.on);
	        addGetter(swf, 'once', Events.once);
	        addGetter(swf, 'off', Events.off);
	        addGetter(swf, 'trigger', Events.trigger);
	        addGetter(swf, '_events', {});
	
	        // javascript can trigger SwfEventRouter callbacks
	        addGetter(swf, 'triggerFlash', function(name) {
	            if (name === 'setupCommandQueue') {
	                queueCommands = false;
	            }
	
	            if (name !== 'setup' && queueCommands || !swf.__externalCall) {
	                var commandQueue = swf.__commandQueue;
	                // remove any earlier commands with the same name
	                for (var i = commandQueue.length; i--;) {
	                    if (commandQueue[i][0] === name) {
	                        commandQueue.splice(i, 1);
	                    }
	                }
	                commandQueue.push(Array.prototype.slice.call(arguments));
	                return swf;
	            }
	
	            var args = Array.prototype.slice.call(arguments, 1);
	            var status = utils.tryCatch(function() {
	                if (args.length) {
	                    // remove any nodes from arguments
	                    // cyclical structures cannot be converted to JSON
	                    for (var i=args.length; i--;) {
	                        if (typeof args[i] === 'object') {
	                            _.each(args[i], deleteHTMLElement);
	                        }
	                    }
	                    var json = JSON.stringify(args);
	                    swf.__externalCall(name, json);
	                } else {
	                    swf.__externalCall(name);
	                }
	            });
	
	            if (status instanceof utils.Error) {
	                console.error(name, status);
	                if (name === 'setup') {
	                    status.name = 'Failed to setup flash';
	                    return status;
	                }
	            }
	            return swf;
	        });
	
	        // commands are queued when __externalCall is not available
	        addGetter(swf, '__commandQueue', []);
	
	        return swf;
	    }
	
	    function remove(swf) {
	        if (swf && swf.parentNode) {
	            swf.style.display = 'none';
	            swf.parentNode.removeChild(swf);
	        }
	    }
	
	    function deleteHTMLElement(value, prop, object) {
	        if (value instanceof window.HTMLElement) {
	            delete object[prop];
	        }
	    }
	
	    return {
	        embed : embed,
	        remove : remove
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 85 */,
/* 86 */,
/* 87 */
/*!***************************************!*\
  !*** ./src/js/controller/captions.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! controller/tracks-loader */ 88),
	    __webpack_require__(/*! controller/tracks-helper */ 93)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, tracksLoader, tracksHelper) {
	
	    /** Displays closed captions or subtitles on top of the video. **/
	    var Captions = function(_api, _model) {
	
	        // Reset and load external captions on playlist item
	        _model.on('change:playlistItem', _itemHandler, this);
	
	        // Listen for captions menu index changes from the view
	        _model.on('change:captionsIndex', _captionsIndexHandler, this);
	
	        // Listen for item ready to determine which provider is in use
	        _model.on('itemReady', _itemReadyHandler, this);
	
	        // Listen for provider subtitle tracks
	        //   ignoring provider "subtitlesTrackChanged" since index should be managed here
	        _model.mediaController.on('subtitlesTracks', _subtitlesTracksHandler, this);
	
	        function _subtitlesTracksHandler(e) {
	            if(! e.tracks.length) {
	                return;
	            }
	
	            var tracks = e.tracks || [];
	            for (var i = 0; i < tracks.length; i++) {
	                var track = tracks[i];
	                if(_tracksById[track._id]) {
	                    continue;
	                }
	                _addTrack(track);
	            }
	            var captionsMenu = _captionsMenu();
	            _selectDefaultIndex();
	            this.setCaptionsList(captionsMenu);
	        }
	
	        var _item = {},
	            _tracks = [],
	            _tracksById = {},
	            _metaCuesByTextTime = {},
	            _unknownCount = 0;
	
	        /** Listen to playlist item updates. **/
	        function _itemHandler(model, item) {
	            _item = item;
	            _tracks = [];
	            _tracksById = {};
	            _metaCuesByTextTime = {};
	            _unknownCount = 0;
	        }
	
	        function _itemReadyHandler(item) {
	            // Clean up in case we're replaying
	            _itemHandler(_model, item);
	
	            var tracks = item.tracks,
	                len = tracks && tracks.length;
	
	            // Sideload tracks when not rendering natively
	            if (!_model.get('renderCaptionsNatively') && len) {
	                var i, track;
	
	                for (i = 0; i < len; i++) {
	                    track = tracks[i];
	                    if (_kindSupported(track.kind) && !_tracksById[track._id]) {
	                        _addTrack(track);
	                        tracksLoader.loadFile(track,
	                            _addVTTCuesToTrack.bind(null, track),
	                            _errorHandler);
	                    }
	                }
	            }
	
	            var captionsMenu = _captionsMenu();
	            _selectDefaultIndex();
	            this.setCaptionsList(captionsMenu);
	        }
	
	        function _kindSupported(kind) {
	            return kind === 'subtitles' || kind === 'captions';
	        }
	
	        function _addVTTCuesToTrack(track, vttCues) {
	            track.data = vttCues;
	        }
	
	        function _errorHandler(error) {
	            utils.log('CAPTIONS(' + error + ')');
	        }
	
	        function _captionsIndexHandler(model, captionsMenuIndex) {
	            var track = null;
	            if (captionsMenuIndex !== 0) {
	                track = _tracks[captionsMenuIndex-1];
	            }
	            model.set('captionsTrack', track);
	        }
	
	        function _addTrack(track) {
	            track.data = track.data || [];
	            track.name = track.label || track.name || track.language;
	            track._id = tracksHelper.createId(track, _tracks.length);
	
	            if (!track.name) {
	                var labelInfo = tracksHelper.createLabel(track, _unknownCount);
	                track.name = labelInfo.label;
	                _unknownCount = labelInfo.unknownCount;
	            }
	
	            _tracks.push(track);
	            _tracksById[track._id] = track;
	        }
	
	        function _captionsMenu() {
	            var list = [{
	                id: 'off',
	                label: 'Off'
	            }];
	            for (var i = 0; i < _tracks.length; i++) {
	                list.push({
	                    id: _tracks[i]._id,
	                    label: _tracks[i].name || 'Unknown CC'
	                });
	            }
	            return list;
	        }
	
	        function _selectDefaultIndex() {
	            var captionsMenuIndex = 0;
	            var label = _model.get('captionLabel');
	
	            // Because there is no explicit track for "Off"
	            //  it is the implied zeroth track
	            if (label === 'Off') {
	                _model.set('captionsIndex', 0);
	                return;
	            }
	
	            for (var i = 0; i < _tracks.length; i++) {
	                var track = _tracks[i];
	                if (label && label === track.name) {
	                    captionsMenuIndex = i + 1;
	                    break;
	                } else if (track['default'] || track.defaulttrack || track._id === 'default') {
	                    captionsMenuIndex = i + 1;
	                } else if (track.autoselect) {
	                    // TODO: auto select track by comparing track.language to system lang
	                }
	            }
	            // set the index without the side effect of storing the Off label in _selectCaptions
	            _setCurrentIndex(captionsMenuIndex);
	        }
	
	        function _setCurrentIndex (index) {
	            if(_tracks.length) {
	                _model.setVideoSubtitleTrack(index, _tracks);
	            } else {
	                _model.set('captionsIndex', index);
	            }
	        }
	
	        this.getCurrentIndex = function() {
	            return _model.get('captionsIndex');
	        };
	
	        this.getCaptionsList = function() {
	            return _model.get('captionsList');
	        };
	
	        this.setCaptionsList = function(captionsMenu) {
	            _model.set('captionsList', captionsMenu);
	        };
	    };
	
	    return Captions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 88 */
/*!********************************************!*\
  !*** ./src/js/controller/tracks-loader.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! parsers/parsers */ 49),
	    __webpack_require__(/*! parsers/captions/srt */ 89),
	    __webpack_require__(/*! parsers/captions/dfxp */ 90),
	    __webpack_require__(/*! parsers/captions/vttcue */ 91)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils, parsers, srt, dfxp, VTTCue) {
	    var tracksLoader = {};
	
	    tracksLoader.loadFile = function(track, successHandler, errorHandler) {
	        track.xhr = utils.ajax(track.file, function(xhr) {
	            xhrSuccess.call(tracksLoader, xhr, track, successHandler, errorHandler);
	        }, errorHandler);
	    };
	
	    tracksLoader.cancelXhr = function(tracks) {
	        _.each(tracks, function(track) {
	            var xhr = track.xhr;
	            if (xhr) {
	                xhr.onload = null;
	                xhr.onreadystatechange = null;
	                xhr.onerror = null;
	                if ('abort' in xhr) {
	                    xhr.abort();
	                }
	            }
	            delete track.xhr;
	        });
	    };
	
	    tracksLoader.convertToVTTCues = function(cues) {
	        // VTTCue is available natively or polyfilled where necessary
	        // TODO: if there's no window object, polyfill this
	        var vttCues = _.map(cues, function (cue) {
	            return new VTTCue(cue.begin, cue.end, cue.text);
	        });
	        return vttCues;
	    };
	
	    function xhrSuccess(xhr, track, successHandler, errorHandler) {
	        var xmlRoot = xhr.responseXML ? xhr.responseXML.firstChild : null;
	        var cues, vttCues;
	
	        // IE9 sets the firstChild element to the root <xml> tag
	        if (xmlRoot) {
	            if (parsers.localName(xmlRoot) === 'xml') {
	                xmlRoot = xmlRoot.nextSibling;
	            }
	            // Ignore all comments
	            while (xmlRoot.nodeType === xmlRoot.COMMENT_NODE) {
	                xmlRoot = xmlRoot.nextSibling;
	            }
	        }
	
	        try {
	            if (xmlRoot && parsers.localName(xmlRoot) === 'tt') {
	                // parse dfxp track
	                cues = dfxp(xhr.responseXML);
	                vttCues = this.convertToVTTCues(cues);
	                delete track.xhr;
	                successHandler(vttCues);
	            } else {
	                // parse VTT/SRT track
	                var responseText = xhr.responseText;
	
	                // TODO: parse SRT with using vttParser and deprecate srt module
	                if (responseText.indexOf('WEBVTT') >= 0) {
	                    // make VTTCues from VTT track
	                    parseCuesFromText(responseText, track, successHandler, errorHandler);
	                } else {
	                    // make VTTCues from SRT track
	                    cues = srt(responseText);
	                    vttCues = this.convertToVTTCues(cues);
	                    delete track.xhr;
	                    successHandler(vttCues);
	                }
	            }
	        } catch (error) {
	            delete track.xhr;
	            errorHandler(error);
	        }
	    }
	
	    function parseCuesFromText(text, track, successHandler, errorHandler) {
	        __webpack_require__.e/* nsure */(3/*! vttparser */, function (require) {
	            var VTTParser = __webpack_require__(/*! ../parsers/captions/vttparser */ 92);
	            var parser = new VTTParser(window);
	            var vttCues = [];
	            parser.oncue = function(cue) {
	                vttCues.push(cue);
	            };
	
	            parser.onflush = function() {
	                delete track.xhr;
	                successHandler(vttCues);
	            };
	
	            try {
	                parser.parse(text).flush();
	            } catch(error) {
	                delete track.xhr;
	                errorHandler(error);
	            }
	
	        });
	    }
	
	    return tracksLoader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 89 */
/*!****************************************!*\
  !*** ./src/js/parsers/captions/srt.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/strings */ 50)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, strings) {
	
	    /** Component that loads and parses an SRT file. **/
	
	    var _seconds = utils.seconds;
	
	    return function (data) {
	        // Trim whitespace and split the list by returns.
	        var _captions = [];
	        data = strings.trim(data);
	        var list = data.split('\r\n\r\n');
	        if (list.length === 1) {
	            list = data.split('\n\n');
	        }
	
	        for (var i = 0; i < list.length; i++) {
	            if (list[i] === 'WEBVTT') {
	                continue;
	            }
	            // Parse each entry
	            var entry = _entry(list[i]);
	            if (entry.text) {
	                _captions.push(entry);
	            }
	        }
	
	        return _captions;
	    };
	
	
	    /** Parse a single captions entry. **/
	    function _entry(data) {
	        var entry = {};
	        var array = data.split('\r\n');
	        if (array.length === 1) {
	            array = data.split('\n');
	        }
	        var idx = 1;
	        if (array[0].indexOf(' --> ') > 0) {
	            idx = 0;
	        }
	        if (array.length > idx + 1 && array[idx + 1]) {
	            // This line contains the start and end.
	            var line = array[idx];
	            var index = line.indexOf(' --> ');
	            if (index > 0) {
	                entry.begin = _seconds(line.substr(0, index));
	                entry.end   = _seconds(line.substr(index + 5));
	                // Remaining lines contain the text
	                entry.text = array.slice(idx + 1).join('\r\n');
	            }
	        }
	        return entry;
	
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 90 */
/*!*****************************************!*\
  !*** ./src/js/parsers/captions/dfxp.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 50)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings) {
	
	    /** Component that loads and parses an DFXP file. **/
	
	    var _seconds = strings.seconds;
	
	    return function (xmlDoc) {
	        validate(xmlDoc);
	        var _captions = [];
	        var paragraphs = xmlDoc.getElementsByTagName('p');
	        // Default frameRate is 30
	        var frameRate = 30;
	        var tt = xmlDoc.getElementsByTagName('tt');
	        if (tt && tt[0]) {
	            var parsedFrameRate = parseFloat(tt[0].getAttribute('ttp:frameRate'));
	            if (!isNaN(parsedFrameRate)) {
	                frameRate = parsedFrameRate;
	            }
	        }
	        validate(paragraphs);
	        if (!paragraphs.length) {
	            paragraphs = xmlDoc.getElementsByTagName('tt:p');
	            if (!paragraphs.length) {
	                paragraphs = xmlDoc.getElementsByTagName('tts:p');
	            }
	        }
	
	        for (var i = 0; i < paragraphs.length; i++) {
	            var p = paragraphs[i];
	
	            var breaks = p.getElementsByTagName('br');
	            for (var j = 0; j < breaks.length; j++) {
	                var b = breaks[j];
	                b.parentNode.replaceChild(xmlDoc.createTextNode('\r\n'), b);
	            }
	
	            var rawText = (p.innerHTML || p.textContent || p.text || '');
	            var text = strings.trim(rawText).replace(/>\s+</g, '><').replace(/(<\/?)tts?:/g, '$1').replace(/<br.*?\/>/g, '\r\n');
	            if (text) {
	                var begin = p.getAttribute('begin');
	                var dur = p.getAttribute('dur');
	                var end = p.getAttribute('end');
	
	                var entry = {
	                    begin: _seconds(begin, frameRate),
	                    text: text
	                };
	                if (end) {
	                    entry.end = _seconds(end, frameRate);
	                } else if (dur) {
	                    entry.end = entry.begin + _seconds(dur, frameRate);
	                }
	                _captions.push(entry);
	            }
	        }
	        if (!_captions.length) {
	            parseError();
	        }
	        return _captions;
	    };
	
	    function validate(object) {
	        if (!object) {
	            parseError();
	        }
	    }
	
	    function parseError() {
	        throw new Error('Invalid DFXP file');
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 91 */
/*!*******************************************!*\
  !*** ./src/js/parsers/captions/vttcue.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Copyright 2013 vtt.js Contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	    if (window.VTTCue) {
	        return window.VTTCue;
	    }
	
	    var autoKeyword = 'auto';
	    var directionSetting = {
	        '': true,
	        lr: true,
	        rl: true
	    };
	    var alignSetting = {
	        start: true,
	        middle: true,
	        end: true,
	        left: true,
	        right: true
	    };
	
	    function findDirectionSetting(value) {
	        if (typeof value !== 'string') {
	            return false;
	        }
	        var dir = directionSetting[value.toLowerCase()];
	        return dir ? value.toLowerCase() : false;
	    }
	
	    function findAlignSetting(value) {
	        if (typeof value !== 'string') {
	            return false;
	        }
	        var align = alignSetting[value.toLowerCase()];
	        return align ? value.toLowerCase() : false;
	    }
	
	    function extend(obj) {
	        var i = 1;
	        for (; i < arguments.length; i++) {
	            var cobj = arguments[i];
	            for (var p in cobj) {
	                obj[p] = cobj[p];
	            }
	        }
	
	        return obj;
	    }
	
	    function VTTCue(startTime, endTime, text) {
	        var cue = this;
	        var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
	        var baseObj = {};
	
	        if (isIE8) {
	            cue = document.createElement('custom');
	        } else {
	            baseObj.enumerable = true;
	        }
	
	        /**
	         * Shim implementation specific properties. These properties are not in
	         * the spec.
	         */
	
	        // Lets us know when the VTTCue's data has changed in such a way that we need
	        // to recompute its display state. This lets us compute its display state
	        // lazily.
	        cue.hasBeenReset = false;
	
	        /**
	         * VTTCue and TextTrackCue properties
	         * http://dev.w3.org/html5/webvtt/#vttcue-interface
	         */
	
	        var _id = '';
	        var _pauseOnExit = false;
	        var _startTime = startTime;
	        var _endTime = endTime;
	        var _text = text;
	        var _region = null;
	        var _vertical = '';
	        var _snapToLines = true;
	        var _line = 'auto';
	        var _lineAlign = 'start';
	        var _position = 50;
	        var _positionAlign = 'middle';
	        var _size = 50;
	        var _align = 'middle';
	
	        Object.defineProperty(cue, 'id', extend({}, baseObj, {
	                get: function() {
	                    return _id;
	                },
	                set: function(value) {
	                    _id = '' + value;
	                }
	            }));
	
	        Object.defineProperty(cue, 'pauseOnExit', extend({}, baseObj, {
	                get: function() {
	                    return _pauseOnExit;
	                },
	                set: function(value) {
	                    _pauseOnExit = !!value;
	                }
	            }));
	
	        Object.defineProperty(cue, 'startTime', extend({}, baseObj, {
	                get: function() {
	                    return _startTime;
	                },
	                set: function(value) {
	                    if (typeof value !== 'number') {
	                        throw new TypeError('Start time must be set to a number.');
	                    }
	                    _startTime = value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'endTime', extend({}, baseObj, {
	                get: function() {
	                    return _endTime;
	                },
	                set: function(value) {
	                    if (typeof value !== 'number') {
	                        throw new TypeError('End time must be set to a number.');
	                    }
	                    _endTime = value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'text', extend({}, baseObj, {
	                get: function() {
	                    return _text;
	                },
	                set: function(value) {
	                    _text = '' + value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'region', extend({}, baseObj, {
	                get: function() {
	                    return _region;
	                },
	                set: function(value) {
	                    _region = value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'vertical', extend({}, baseObj, {
	                get: function() {
	                    return _vertical;
	                },
	                set: function(value) {
	                    var setting = findDirectionSetting(value);
	                    // Have to check for false because the setting an be an empty string.
	                    if (setting === false) {
	                        throw new SyntaxError('An invalid or illegal string was specified.');
	                    }
	                    _vertical = setting;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'snapToLines', extend({}, baseObj, {
	                get: function() {
	                    return _snapToLines;
	                },
	                set: function(value) {
	                    _snapToLines = !!value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'line', extend({}, baseObj, {
	                get: function() {
	                    return _line;
	                },
	                set: function(value) {
	                    if (typeof value !== 'number' && value !== autoKeyword) {
	                        throw new SyntaxError('An invalid number or illegal string was specified.');
	                    }
	                    _line = value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'lineAlign', extend({}, baseObj, {
	                get: function() {
	                    return _lineAlign;
	                },
	                set: function(value) {
	                    var setting = findAlignSetting(value);
	                    if (!setting) {
	                        throw new SyntaxError('An invalid or illegal string was specified.');
	                    }
	                    _lineAlign = setting;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'position', extend({}, baseObj, {
	                get: function() {
	                    return _position;
	                },
	                set: function(value) {
	                    if (value < 0 || value > 100) {
	                        throw new Error('Position must be between 0 and 100.');
	                    }
	                    _position = value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'positionAlign', extend({}, baseObj, {
	                get: function() {
	                    return _positionAlign;
	                },
	                set: function(value) {
	                    var setting = findAlignSetting(value);
	                    if (!setting) {
	                        throw new SyntaxError('An invalid or illegal string was specified.');
	                    }
	                    _positionAlign = setting;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'size', extend({}, baseObj, {
	                get: function() {
	                    return _size;
	                },
	                set: function(value) {
	                    if (value < 0 || value > 100) {
	                        throw new Error('Size must be between 0 and 100.');
	                    }
	                    _size = value;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        Object.defineProperty(cue, 'align', extend({}, baseObj, {
	                get: function() {
	                    return _align;
	                },
	                set: function(value) {
	                    var setting = findAlignSetting(value);
	                    if (!setting) {
	                        throw new SyntaxError('An invalid or illegal string was specified.');
	                    }
	                    _align = setting;
	                    this.hasBeenReset = true;
	                }
	            }));
	
	        /**
	         * Other <track> spec defined properties
	         */
	
	        // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
	        cue.displayState = undefined;
	
	        if (isIE8) {
	            return cue;
	        }
	    }
	
	    /**
	     * VTTCue methods
	     */
	
	    VTTCue.prototype.getCueAsHTML = function() {
	        // Assume WebVTT.convertCueToDOMTree is on the global.
	        var WebVTT = window.WebVTT;
	        return WebVTT.convertCueToDOMTree(window, this.text);
	    };
	
	    return VTTCue;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 92 */,
/* 93 */
/*!********************************************!*\
  !*** ./src/js/controller/tracks-helper.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        createId: function (track, tracksCount) {
	            var trackId;
	            var prefix = track.kind || 'cc';
	            if (track.default || track.defaulttrack) {
	                trackId = 'default';
	            } else {
	                trackId = track._id || track.file || track.name || track.label || (prefix + tracksCount);
	            }
	            return trackId;
	        },
	        createLabel: function (track, unknownCount) {
	            var label = track.label || track.name || track.language;
	            if (!label) {
	                label = 'Unknown CC';
	                unknownCount += 1;
	                if (unknownCount > 1) {
	                    label += ' [' + unknownCount + ']';
	                }
	            }
	            return { label: label, unknownCount: unknownCount };
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 94 */
/*!************************************!*\
  !*** ./src/js/controller/model.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! providers/providers */ 95),
	    __webpack_require__(/*! controller/qoe */ 107),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/simplemodel */ 109),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! events/states */ 97)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Providers, QOE, _, Events, SimpleModel, events, states) {
	
	    // Represents the state of the player
	    var Model = function() {
	        var _this = this,
	            // Video provider
	            _providers,
	            _provider,
	            _currentProvider = utils.noop;
	
	        this.mediaController = _.extend({}, Events);
	        this.mediaModel = new MediaModel();
	
	        QOE.model(this);
	
	        this.set('mediaModel', this.mediaModel);
	
	        this.setup = function(config) {
	
	            _.extend(this.attributes, config, {
	                // always start on first playlist item
	                item : 0,
	                // Initial state, upon setup
	                state: states.IDLE,
	                // Initially we don't assume Flash is needed
	                flashBlocked : false,
	                fullscreen: false,
	                scrubbing : false,
	                duration: 0,
	                position: 0,
	                buffer: 0
	            });
	
	            this.updateProviders();
	
	            return this;
	        };
	
	        this.getConfiguration = function() {
	            return _.omit(this.clone(), ['mediaModel']);
	        };
	
	        this.updateProviders = function() {
	            _providers = new Providers(this.getConfiguration());
	        };
	
	        function _videoEventHandler(type, data) {
	            var evt = _.extend({}, data, {type: type});
	            var mediaModel = this.mediaModel;
	            switch (type) {
	                case 'flashThrottle':
	                    var throttled = (data.state !== 'resume');
	                    this.set('flashThrottle', throttled);
	                    this.set('flashBlocked', throttled);
	                    break;
	                case 'flashBlocked':
	                    this.set('flashBlocked', true);
	                    return;
	                case 'flashUnblocked':
	                    this.set('flashBlocked', false);
	                    return;
	                case 'volume':
	                    this.set(type, data[type]);
	                    return;
	                case 'mute':
	                    if (!this.get('autostartMuted')) {
	                        // Don't persist mute state with muted autostart
	                        this.set(type, data[type]);
	                    }
	                    return;
	                case events.JWPLAYER_MEDIA_TYPE:
	                    if (mediaModel.get('mediaType') !== data.mediaType) {
	                        mediaModel.set('mediaType', data.mediaType);
	                        this.mediaController.trigger(type, evt);
	                    }
	                    return;
	                case events.JWPLAYER_PLAYER_STATE:
	                    mediaModel.set('state', data.newstate);
	
	                    // This "return" is important because
	                    //  we are choosing to not propagate this event.
	                    //  Instead letting the master controller do so
	                    return;
	                case events.JWPLAYER_MEDIA_BUFFER:
	                    this.set('buffer', data.bufferPercent);
	                /* falls through */
	                case events.JWPLAYER_MEDIA_META:
	                    var duration = data.duration;
	                    if (_.isNumber(duration) && !_.isNaN(duration)) {
	                        mediaModel.set('duration', duration);
	                        this.set('duration', duration);
	                    }
	                    break;
	                case events.JWPLAYER_MEDIA_BUFFER_FULL:
	                    // media controller
	                    if (mediaModel.get('playAttempt')) {
	                        this.playVideo();
	                    } else {
	                        mediaModel.on('change:playAttempt', function() {
	                            this.playVideo();
	                        }, this);
	                    }
	                    break;
	                case events.JWPLAYER_MEDIA_TIME:
	                    mediaModel.set('position', data.position);
	                    this.set('position', data.position);
	                    if (_.isNumber(data.duration)) {
	                        mediaModel.set('duration', data.duration);
	                        this.set('duration', data.duration);
	                    }
	                    break;
	                case events.JWPLAYER_PROVIDER_CHANGED:
	                    this.set('provider', _provider.getName());
	                    break;
	                case events.JWPLAYER_MEDIA_LEVELS:
	                    this.setQualityLevel(data.currentQuality, data.levels);
	                    mediaModel.set('levels', data.levels);
	                    break;
	                case events.JWPLAYER_MEDIA_LEVEL_CHANGED:
	                    this.setQualityLevel(data.currentQuality, data.levels);
	                    this.persistQualityLevel(data.currentQuality, data.levels);
	                    break;
	                case events.JWPLAYER_AUDIO_TRACKS:
	                    this.setCurrentAudioTrack(data.currentTrack, data.tracks);
	                    mediaModel.set('audioTracks', data.tracks);
	                    break;
	                case events.JWPLAYER_AUDIO_TRACK_CHANGED:
	                    this.setCurrentAudioTrack(data.currentTrack, data.tracks);
	                    break;
	                case 'subtitlesTrackChanged':
	                    this.persistVideoSubtitleTrack(data.currentTrack, data.tracks);
	                    break;
	                case 'visualQuality':
	                    var visualQuality = _.extend({}, data);
	                    mediaModel.set('visualQuality', visualQuality);
	                    break;
	                case 'autoplayFailed':
	                    this.set('autostartFailed', true);
	                    if (mediaModel.get('state') === states.PLAYING) {
	                        mediaModel.set('state', states.PAUSED);
	                    }
	                    break;
	            }
	
	            this.mediaController.trigger(type, evt);
	        }
	
	        this.setQualityLevel = function(quality, levels){
	            if (quality > -1 && levels.length > 1 && _provider.getName().name !== 'youtube') {
	                this.mediaModel.set('currentLevel', parseInt(quality));
	
	            }
	        };
	
	        this.persistQualityLevel = function(quality, levels) {
	            var currentLevel = levels[quality] || {};
	            var label = currentLevel.label;
	            this.set('qualityLabel', label);
	        };
	
	        this.setCurrentAudioTrack = function(currentTrack, tracks) {
	            if (currentTrack > -1 && tracks.length > 0 && currentTrack < tracks.length) {
	                this.mediaModel.set('currentAudioTrack', parseInt(currentTrack));
	            }
	        };
	
	        this.onMediaContainer = function() {
	            var container = this.get('mediaContainer');
	            _currentProvider.setContainer(container);
	        };
	
	        this.changeVideoProvider = function(Provider) {
	            this.off('change:mediaContainer', this.onMediaContainer);
	
	            if (_provider) {
	                _provider.off(null, null, this);
	                if (_provider.getContainer()) {
	                    _provider.remove();
	                }
	                delete _provider.instreamMode;
	            }
	
	            if (!Provider) {
	                _provider = _currentProvider = Provider;
	                this.set('provider', undefined);
	                return;
	            }
	
	            _currentProvider = new Provider(_this.get('id'), _this.getConfiguration());
	
	            var container = this.get('mediaContainer');
	            if (container) {
	                _currentProvider.setContainer(container);
	            } else {
	                this.once('change:mediaContainer', this.onMediaContainer);
	            }
	
	            this.set('provider', _currentProvider.getName());
	
	            if (_currentProvider.getName().name.indexOf('flash') === -1) {
	                this.set('flashThrottle', undefined);
	                this.set('flashBlocked', false);
	            }
	
	            _provider = _currentProvider;
	            _provider.volume(_this.get('volume'));
	
	            // Mute the video if autostarting on mobile. Otherwise, honor the model's mute value
	            _provider.mute(this.autoStartOnMobile() || _this.get('mute'));
	
	            _provider.on('all', _videoEventHandler, this);
	
	            if (this.get('instreamMode') === true) {
	                _provider.instreamMode = true;
	            }
	
	            this.set('renderCaptionsNatively', _provider.renderNatively);
	        };
	
	        this.destroy = function() {
	            this.off();
	            if (_provider) {
	                _provider.off(null, null, this);
	                _provider.destroy();
	            }
	        };
	
	        this.getVideo = function() {
	            return _provider;
	        };
	
	        this.setFullscreen = function(state) {
	            state = !!state;
	            if (state !== _this.get('fullscreen')) {
	                _this.set('fullscreen', state);
	            }
	        };
	
	        // Give the option for a provider to be forced
	        this.chooseProvider = function(source) {
	            // if _providers.choose is null, something went wrong in filtering
	            return _providers.choose(source).provider;
	        };
	
	        this.setItemIndex = function(index) {
	            var playlist = this.get('playlist');
	
	            // If looping past the end, or before the beginning
	            index = parseInt(index, 10) || 0;
	            index = (index + playlist.length) % playlist.length;
	
	            this.set('item', index);
	            this.set('playlistItem', playlist[index]);
	            this.setActiveItem(playlist[index]);
	        };
	
	        this.setActiveItem = function(item) {
	            // Item is actually changing
	            this.mediaModel.off();
	            this.mediaModel = new MediaModel();
	            this.set('mediaModel', this.mediaModel);
	            this.set('position', item.starttime || 0);
	            this.set('minDvrWindow', item.minDvrWindow);
	            this.set('duration', (item.duration && utils.seconds(item.duration)) || 0);
	            this.setProvider(item);
	        };
	
	        this.setProvider = function(item) {
	            var source = item && item.sources && item.sources[0];
	            if (source === undefined) {
	                // source is undefined when resetting index with empty playlist
	                return;
	            }
	
	            var provider = this.chooseProvider(source);
	            // If we are changing video providers
	            if (!provider || !(_currentProvider instanceof provider)) {
	                _this.changeVideoProvider(provider);
	            }
	
	            if (!_currentProvider) {
	                return;
	            }
	
	            // this allows the providers to preload
	            if (_currentProvider.init) {
	                _currentProvider.init(item);
	            }
	
	            // Listening for change:item won't suffice when loading the same index or file
	            // We also can't listen for change:mediaModel because it triggers whether or not
	            //  an item was actually loaded
	            this.trigger('itemReady', item);
	        };
	
	        this.getProviders = function() {
	            return _providers;
	        };
	
	        this.resetProvider = function() {
	            _currentProvider = null;
	        };
	
	        this.setVolume = function(volume) {
	            volume = Math.round(volume);
	            this.set('volume', volume);
	            if (_provider) {
	                _provider.volume(volume);
	            }
	            var mute = (volume === 0);
	            if (mute !== (this.getMute())) {
	                this.setMute(mute);
	            }
	        };
	
	        this.getMute = function() {
	            return this.get('autostartMuted') || this.get('mute');
	        };
	
	        this.setMute = function(mute) {
	            if (!utils.exists(mute)) {
	                mute = !(this.getMute());
	            }
	            this.set('mute', mute);
	            if (_provider) {
	                _provider.mute(mute);
	            }
	            if (!mute) {
	                var volume = Math.max(10, this.get('volume'));
	                this.set('autostartMuted', false);
	                this.setVolume(volume);
	            }
	        };
	
	        // The model is also the mediaController for now
	        this.loadVideo = function(item) {
	            if (!item) {
	                var idx = this.get('item');
	                item = this.get('playlist')[idx];
	            }
	            this.set('position', item.starttime || 0);
	            this.set('duration', (item.duration && utils.seconds(item.duration)) || 0);
	            this.mediaModel.set('playAttempt', true);
	            this.mediaController.trigger(events.JWPLAYER_MEDIA_PLAY_ATTEMPT, {'playReason': this.get('playReason')});
	
	            _provider.load(item);
	        };
	
	        this.stopVideo = function() {
	            if (_provider) {
	                _provider.stop();
	            }
	        };
	
	        this.playVideo = function() {
	            _provider.play();
	        };
	
	        this.persistCaptionsTrack = function() {
	            var track = this.get('captionsTrack');
	
	            if (track) {
	                // update preference if an option was selected
	                this.set('captionLabel', track.name);
	            } else {
	                this.set('captionLabel', 'Off');
	            }
	        };
	
	
	        this.setVideoSubtitleTrack = function(trackIndex, tracks) {
	            this.set('captionsIndex', trackIndex);
	            /*
	             * Tracks could have changed even if the index hasn't.
	             * Need to ensure track has data for captionsrenderer.
	             */
	            if(trackIndex && tracks && trackIndex <= tracks.length && tracks[trackIndex-1].data) {
	                this.set('captionsTrack', tracks[trackIndex-1]);
	            }
	
	            if (_provider && _provider.setSubtitlesTrack) {
	                _provider.setSubtitlesTrack(trackIndex);
	            }
	
	        };
	
	        this.persistVideoSubtitleTrack = function(trackIndex, tracks) {
	            this.setVideoSubtitleTrack(trackIndex, tracks);
	            this.persistCaptionsTrack();
	        };
	
	        this.setNextUp = function (nextUp) {
	            this.set('nextUp', nextUp);
	        };
	
	        function _autoStartSupportedIOS() {
	            if (!utils.isIOS()) {
	                return false;
	            }
	            // Autostart only supported in iOS 10 or higher - check if the version is 9 or less
	            return !(utils.isIOS(6) || utils.isIOS(7) || utils.isIOS(8) || utils.isIOS(9));
	        }
	
	        this.autoStartOnMobile = function() {
	            return this.get('autostart') && !this.get('sdkplatform') &&
	                ((_autoStartSupportedIOS() && utils.isSafari()) || (utils.isAndroid() && utils.isChrome())) &&
	                (!this.get('advertising') || this.get('advertising').autoplayadsmuted);
	        };
	    };
	
	    // Represents the state of the provider/media element
	    var MediaModel = Model.MediaModel = function() {
	        this.set('state', states.IDLE);
	    };
	
	
	
	    _.extend(Model.prototype, SimpleModel);
	    _.extend(MediaModel.prototype, SimpleModel);
	
	    return Model;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 95 */
/*!***************************************!*\
  !*** ./src/js/providers/providers.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! providers/default */ 96),
	    __webpack_require__(/*! providers/providers-supported */ 98),
	    __webpack_require__(/*! providers/providers-loaded */ 101),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/defaults */ 102)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(Default, ProvidersSupported, ProvidersLoaded, _, defaults) {
	
	    function Providers(config) {
	        this.config = config || {};
	        this.providers = this.reorderProviders(this.config.primary);
	    }
	
	    Providers.loaders = {
	        html5: function(resolvePromise) {
	            __webpack_require__.e/* nsure */(4/*! provider.html5 */, function(require) {
	                var provider = __webpack_require__(/*! providers/html5 */ 103);
	                registerProvider(provider);
	                resolvePromise(provider);
	            });
	        },
	        flash: function(resolvePromise) {
	            __webpack_require__.e/* nsure */(5/*! provider.flash */, function(require) {
	                var provider = __webpack_require__(/*! providers/flash */ 105);
	                registerProvider(provider);
	                resolvePromise(provider);
	            });
	        },
	        youtube: function(resolvePromise) {
	            __webpack_require__.e/* nsure */(6/*! provider.youtube */, function(require) {
	                var provider = __webpack_require__(/*! providers/youtube */ 106);
	                registerProvider(provider);
	                resolvePromise(provider);
	            });
	        }
	    };
	
	    var registerProvider =
	    Providers.registerProvider = function(provider) {
	        var name = provider.getName().name;
	
	        // Only register the provider if it isn't registered already.  This is an issue on pages with multiple embeds.
	        if (ProvidersLoaded[name]) {
	            return;
	        }
	
	        // If there isn't a "supports" val for this guy
	        if (! _.find(ProvidersSupported, _.matches({name : name}))) {
	            if (!_.isFunction(provider.supports)) {
	                throw {
	                    message: 'Tried to register a provider with an invalid object'
	                };
	            }
	
	            // The most recent provider will be in the front of the array, and chosen first
	            ProvidersSupported.unshift({
	                name : name,
	                supports : provider.supports
	            });
	        }
	
	        // Fill in any missing properties with the defaults - looks at the prototype chain
	        defaults(provider.prototype, Default);
	
	        // After registration, it is loaded
	        ProvidersLoaded[name] = provider;
	    };
	
	    _.extend(Providers.prototype, {
	
	        load: function(providersToLoad) {
	            return Promise.all(_.map(providersToLoad, function(provider) {
	                return new Promise(function(resolvePromise) {
	                    var providerLoaderMethod = Providers.loaders[provider.name];
	                    if (providerLoaderMethod) {
	                        providerLoaderMethod(resolvePromise);
	                    } else {
	                        resolvePromise(/* unknown registered module */);
	                    }
	                });
	            }));
	        },
	
	        reorderProviders: function (primary) {
	            var providers = _.clone(ProvidersSupported);
	
	            if (primary === 'flash') {
	                var flashIdx = _.indexOf(providers, _.findWhere(providers, {name: 'flash'}));
	                var flashProvider = providers.splice(flashIdx, 1)[0];
	                var html5Idx = _.indexOf(providers, _.findWhere(providers, {name: 'html5'}));
	                providers.splice(html5Idx, 0, flashProvider);
	            }
	            return providers;
	        },
	
	        providerSupports: function(provider, source) {
	            return provider.supports(source);
	        },
	
	        required: function(playlist, primary) {
	            var _this = this;
	            var providers = this.reorderProviders(primary);
	
	            playlist = playlist.slice();
	            return _.compact(_.map(providers, function(provider) {
	                // remove items from copied playlist that can be played by provider
	                // remaining providers will be checked against any remaining items
	                // provider will be loaded if there are matches
	                var loadProvider = false;
	                for (var i = playlist.length; i--;) {
	                    var item = playlist[i];
	                    var supported = _this.providerSupports(provider, item.sources[0]);
	                    if (supported) {
	                        playlist.splice(i, 1);
	                    }
	                    loadProvider = loadProvider || supported;
	                }
	                if (loadProvider) {
	                    return provider;
	                }
	            }));
	        },
	
	        // Find the name of the first provider which can support the media source-type
	        choose : function(source) {
	            // prevent throw on missing source
	            source = _.isObject(source) ? source : {};
	
	            var count = this.providers.length;
	            for (var i = 0; i < count; i++) {
	                var provider = this.providers[i];
	                if (this.providerSupports(provider, source)) {
	                    // prefer earlier providers
	                    var priority = count - i - 1;
	
	                    return {
	                        priority: priority,
	                        name : provider.name,
	                        type: source.type,
	                        providerToCheck: provider,
	                        // If provider isn't loaded, this will be undefined
	                        provider : ProvidersLoaded[provider.name]
	                    };
	                }
	            }
	
	            return null;
	        }
	    });
	
	    return Providers;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 96 */
/*!*************************************!*\
  !*** ./src/js/providers/default.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, events, states, _) {
	
	    var noop = utils.noop,
	        returnFalse = _.constant(false);
	
	    var DefaultProvider = {
	        // This function is required to determine if a provider can work on a given source
	        supports : returnFalse,
	
	        // Basic playback features
	        play : noop,
	        load : noop,
	        stop : noop,
	        volume : noop,
	        mute : noop,
	        seek : noop,
	        resize : noop,
	        remove : noop,  // removes from page
	        destroy : noop, // frees memory
	
	        setVisibility : noop,
	        setFullscreen : returnFalse,
	        getFullscreen : noop,
	
	        // If setContainer has been set, this returns the element.
	        //  It's value is used to determine if we should remove the <video> element when setting a new provider.
	        getContainer : noop,
	
	        // Sets the parent element, causing provider to append <video> into it
	        setContainer : returnFalse,
	
	        getName: noop,
	        getQualityLevels : noop,
	        getCurrentQuality : noop,
	        setCurrentQuality : noop,
	
	        getAudioTracks : noop,
	        getCurrentAudioTrack : noop,
	        setCurrentAudioTrack : noop,
	
	        // TODO :: The following are targets for removal after refactoring
	        checkComplete : noop,
	        setControls : noop,
	        attachMedia : noop,
	        detachMedia : noop,
	
	        setState: function(state) {
	            var oldState = this.state || states.IDLE;
	            this.state = state;
	
	            if (state === oldState) {
	                return;
	            }
	
	            this.trigger(events.JWPLAYER_PLAYER_STATE, {
	                newstate: state
	            });
	        },
	
	        sendMediaType : function(levels) {
	            var type = levels[0].type;
	            var isAudioFile = (type === 'oga' || type === 'aac' || type === 'mp3' ||
	                type === 'mpeg' || type === 'vorbis');
	
	            this.trigger(events.JWPLAYER_MEDIA_TYPE, {
	                mediaType : isAudioFile ? 'audio' : 'video'
	            });
	        }
	    };
	
	
	    // Make available to other providers for extending
	    return DefaultProvider;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 97 */
/*!*********************************!*\
  !*** ./src/js/events/states.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        BUFFERING : 'buffering',
	        IDLE      : 'idle',
	        COMPLETE  : 'complete',
	        PAUSED    : 'paused',
	        PLAYING   : 'playing',
	        ERROR     : 'error',
	
	        // These exist at the provider level, but are converted to BUFFERING at higher levels
	        LOADING   : 'loading',
	        STALLED   : 'stalled'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 98 */
/*!*************************************************!*\
  !*** ./src/js/providers/providers-supported.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! providers/html5-android-hls */ 99),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/video */ 100)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(getIsAndroidHLS, utils, _, video) {
	
	    var SupportsMatrix = [
	        {
	            name: 'youtube',
	            supports: function (source) {
	                return (utils.isYouTube(source.file, source.type));
	            }
	        },
	        {
	            name: 'html5',
	            supports: function (source) {
	                var MimeTypes = {
	                    'aac': 'audio/mp4',
	                    'mp4': 'video/mp4',
	                    'f4v': 'video/mp4',
	                    'm4v': 'video/mp4',
	                    'mov': 'video/mp4',
	                    //'m4a': 'audio/x-m4a', // converted to aac by source.js
	                    'mp3': 'audio/mpeg',
	                    'mpeg': 'audio/mpeg',
	                    'ogv': 'video/ogg',
	                    'ogg': 'video/ogg',
	                    'oga': 'video/ogg',
	                    'vorbis': 'video/ogg',
	                    'webm': 'video/webm',
	
	                    // The following are not expected to work in Chrome
	                    'f4a': 'video/aac',
	                    'm3u8': 'application/vnd.apple.mpegurl',
	                    'm3u': 'application/vnd.apple.mpegurl',
	                    'hls': 'application/vnd.apple.mpegurl'
	                };
	
	                var file = source.file;
	                var type = source.type;
	
	                var isAndroidHLS = getIsAndroidHLS(source);
	                if (isAndroidHLS !== null) {
	                    return isAndroidHLS;
	                }
	
	                // Ensure RTMP files are not seen as videos
	                if (utils.isRtmp(file, type)) {
	                    return false;
	                }
	
	                // Not OK to use HTML5 with no extension
	                if (!MimeTypes[type]) {
	                    return false;
	                }
	
	                // Last, but not least, we ask the browser
	                // (But only if it's a video with an extension known to work in HTML5)
	                if (video.canPlayType) {
	                    var result = video.canPlayType(MimeTypes[type]);
	                    return !!result;
	                }
	                return false;
	            }
	        },
	        {
	            name: 'flash',
	            supports: function (source) {
	                var flashExtensions = {
	                    'flv': 'video',
	                    'f4v': 'video',
	                    'mov': 'video',
	                    'm4a': 'video',
	                    'm4v': 'video',
	                    'mp4': 'video',
	                    'aac': 'video',
	                    'f4a': 'video',
	                    'mp3': 'sound',
	                    'mpeg': 'sound',
	                    'smil': 'rtmp'
	                };
	                var PLAYABLE = _.keys(flashExtensions);
	                if (!utils.isFlashSupported()) {
	                    return false;
	                }
	
	                var file = source.file;
	                var type = source.type;
	
	                if (utils.isRtmp(file, type)) {
	                    return true;
	                }
	
	                return _.contains(PLAYABLE, type);
	            }
	        }
	    ];
	
	    return SupportsMatrix;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 99 */
/*!***********************************************!*\
  !*** ./src/js/providers/html5-android-hls.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/browser */ 56)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(browser) {
	
	    return function getIsAndroidHLS(source) {
	        if (source.type === 'hls') {
	            if (source.androidhls === false && browser.isAndroid()) {
	                return false;
	            } else {
	                // When androidhls is not set to false, allow HLS playback on Android 4.1 and up
	                var isAndroidNative = browser.isAndroidNative;
	                if (isAndroidNative(2) || isAndroidNative(3) || isAndroidNative('4.0')) {
	                    return false;
	                } else if (browser.isAndroid() && !browser.isFF()) {
	                    // skip canPlayType check
	                    // canPlayType returns '' in native browser even though HLS will play
	                    return true;
	                }
	            }
	        }
	        return null;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 100 */
/*!*******************************!*\
  !*** ./src/js/utils/video.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return document.createElement('video');
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 101 */
/*!**********************************************!*\
  !*** ./src/js/providers/providers-loaded.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    // Any providers required here will be bundled in jwplayer.js embed
	    //  because they are commented out, html5 and flash js will be split into seperate files starting in 7.5.0
	    //'providers/html5',
	    //'providers/flash'
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	    return {
	        //html5: html5,
	        //flash: flash
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 102 */
/*!**********************************!*\
  !*** ./src/js/utils/defaults.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    // Adds properties to the first object from the rest
	    // Does not add properties which exist anywhere in the object or it's prototype chain (no shadowing, no overriding)
	    return function(obj) {
	        _.each(Array.prototype.slice.call(arguments, 1), function(source) {
	            if (source) {
	                for (var prop in source) {
	                    if (!(prop in obj)) {
	                        obj[prop] = source[prop];
	                    }
	                }
	            }
	        });
	        return obj;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/*!**********************************!*\
  !*** ./src/js/controller/qoe.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/timer */ 108),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Timer, _) {
	
	    // Copied from events.js until we can export individual constants with ES6
	    var JWPLAYER_PLAYLIST_ITEM = 'playlistItem';
	    var JWPLAYER_MEDIA_PLAY_ATTEMPT = 'playAttempt';
	    var JWPLAYER_PROVIDER_FIRST_FRAME = 'providerFirstFrame';
	    var JWPLAYER_MEDIA_FIRST_FRAME = 'firstFrame';
	    var JWPLAYER_MEDIA_TIME = 'time';
	
	    var TAB_HIDDEN = 'tabHidden';
	    var TAB_VISIBLE = 'tabVisible';
	
	    var VISIBILITY_CHANGE = 'visibilitychange';
	
	    // This is to provide a first frame event even when
	    //  a provider does not give us one.
	    var onTimeIncreasesGenerator = (function(callback) {
	        var lastVal = 0;
	        return function (evt) {
	            var pos = evt.position;
	            if (pos > lastVal) {
	                callback();
	            }
	            // sometimes the number will wrap around (ie 100 down to 0)
	            //  so always update
	            lastVal = pos;
	        };
	    });
	
	    function unbindFirstFrameEvents(model) {
	        model.mediaController.off(JWPLAYER_MEDIA_PLAY_ATTEMPT, model._onPlayAttempt);
	        model.mediaController.off(JWPLAYER_PROVIDER_FIRST_FRAME, model._triggerFirstFrame);
	        model.mediaController.off(JWPLAYER_MEDIA_TIME, model._onTime);
	        document.removeEventListener(VISIBILITY_CHANGE, model._onTabVisible);
	    }
	
	    function trackFirstFrame(model) {
	        unbindFirstFrameEvents(model);
	
	        // When it occurs, send the event, and unbind all listeners
	        model._triggerFirstFrame = _.once(function() {
	            var qoeItem = model._qoeItem;
	            qoeItem.tick(JWPLAYER_MEDIA_FIRST_FRAME);
	
	            var time = qoeItem.getFirstFrame();
	            model.mediaController.trigger(JWPLAYER_MEDIA_FIRST_FRAME, {loadTime : time});
	            unbindFirstFrameEvents(model);
	        });
	
	        model._onTime = onTimeIncreasesGenerator(model._triggerFirstFrame);
	
	        model._onPlayAttempt = function() {
	            model._qoeItem.tick(JWPLAYER_MEDIA_PLAY_ATTEMPT);
	        };
	
	        // track visibility change
	        model._onTabVisible = function(e) {
	            var hidden = e.target.hidden;
	            if (hidden === true) {
	                model._qoeItem.tick(TAB_HIDDEN);
	            } else if (hidden === false) {
	                model._qoeItem.tick(TAB_VISIBLE);
	            }
	        };
	        document.addEventListener(VISIBILITY_CHANGE, model._onTabVisible, false);
	
	        model.mediaController.on(JWPLAYER_MEDIA_PLAY_ATTEMPT, model._onPlayAttempt);
	        model.mediaController.once(JWPLAYER_PROVIDER_FIRST_FRAME, model._triggerFirstFrame);
	        model.mediaController.on(JWPLAYER_MEDIA_TIME, model._onTime);
	    }
	
	    function initModel(model) {
	
	        function onMediaModel(model, mediaModel, oldMediaModel) {
	            // finish previous item
	            if (model._qoeItem && oldMediaModel) {
	                model._qoeItem.end(oldMediaModel.get('state'));
	            }
	            // reset item level qoe
	            model._qoeItem = new Timer();
	            model._qoeItem.getFirstFrame = function() {
	                var time = this.between(JWPLAYER_MEDIA_PLAY_ATTEMPT, JWPLAYER_MEDIA_FIRST_FRAME);
	                // If time between the tab becoming visible and first frame is valid
	                // and less than the time since play attempt, play was not attempted until the tab became visible
	                var timeActive = this.between(TAB_VISIBLE, JWPLAYER_MEDIA_FIRST_FRAME);
	                if (timeActive > 0 && timeActive < time) {
	                    return timeActive;
	                }
	                return time;
	            };
	            model._qoeItem.tick(JWPLAYER_PLAYLIST_ITEM);
	            model._qoeItem.start(mediaModel.get('state'));
	
	            trackFirstFrame(model);
	
	            mediaModel.on('change:state', function (mediaModel, newstate, oldstate) {
	                model._qoeItem.end(oldstate);
	                model._qoeItem.start(newstate);
	            });
	        }
	
	        model.on('change:mediaModel', onMediaModel);
	    }
	
	    return {
	        model : initModel
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 108 */
/*!*******************************!*\
  !*** ./src/js/utils/timer.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var Timer = function() {
	        var _startTimes = {};
	        var _sum = {};
	        var _counts = {};
	
	        var _ticks = {};
	
	        return {
	            // Profile methods
	            start : function(methodName) {
	                _startTimes[methodName] = _.now();
	                _counts[methodName] = _counts[methodName]+1 || 1;
	            },
	            end : function(methodName) {
	                if (!_startTimes[methodName]) {
	                    return;
	                }
	
	                var e = _.now() - _startTimes[methodName];
	                _sum[methodName] = _sum[methodName] + e || e;
	            },
	            dump : function() {
	                return {
	                    counts : _counts,
	                    sums : _sum,
	                    events : _ticks
	                };
	            },
	
	            // Profile events
	            tick : function(event, time) {
	                // If a time is given, use that instead of now()
	                _ticks[event] = time || _.now();
	            },
	            between : function(left, right) {
	                if (_ticks[right] && _ticks[left]) {
	                    return _ticks[right] - _ticks[left];
	                }
	                return -1;
	            }
	        };
	    };
	
	    return Timer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 109 */
/*!*************************************!*\
  !*** ./src/js/utils/simplemodel.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/backbone.events */ 74)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Events) {
	
	    var SimpleModel = _.extend({
	        'get' : function (attr) {
	            this.attributes = this.attributes || {};
	            return this.attributes[attr];
	        },
	        'set' : function (attr, val) {
	            this.attributes = this.attributes || {};
	
	            if (this.attributes[attr] === val) {
	                return;
	            }
	            var oldVal = this.attributes[attr];
	            this.attributes[attr] = val;
	            this.trigger('change:' + attr, this, val, oldVal);
	        },
	        'clone' : function() {
	            return _.clone(this.attributes);
	        }
	    }, Events);
	
	    return SimpleModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 110 */
/*!**************************************!*\
  !*** ./src/js/controller/storage.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils) {
	
	    var storage = {
	        removeItem: utils.noop
	    };
	
	    try {
	        storage = window.localStorage;
	    } catch(e) {/* ignore */}
	
	    function jwPrefix(str) {
	        return 'jwplayer.' + str;
	    }
	
	    function getAllItems() {
	        return _.reduce(this.persistItems, function(memo, key) {
	            var val = storage[jwPrefix(key)];
	            if (val) {
	                memo[key] = utils.serialize(val);
	            }
	            return memo;
	        }, {});
	    }
	
	    function setItem(name, value) {
	        try {
	            storage[jwPrefix(name)] = value;
	        } catch(e) {
	            // ignore QuotaExceededError unless debugging
	            var jwplayer = window.jwplayer;
	            if (jwplayer && jwplayer.debug) {
	                console.error(e);
	            }
	        }
	    }
	
	    function clear() {
	        _.each(this.persistItems, function(val) {
	            storage.removeItem(jwPrefix(val));
	        });
	    }
	
	    function Storage() {
	        this.persistItems = [
	            'volume',
	            'mute',
	            'captionLabel',
	            'qualityLabel'
	        ];
	    }
	
	    function track(model) {
	        _.each(this.persistItems, function(item) {
	            model.on('change:' + item, function(model, value) {
	                setItem(item, value);
	            });
	        });
	    }
	
	    _.extend(Storage.prototype, {
	        getAllItems: getAllItems,
	        track : track,
	        clear: clear
	    });
	
	    return Storage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 111 */
/*!*************************************!*\
  !*** ./src/js/playlist/playlist.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! playlist/item */ 70),
	    __webpack_require__(/*! playlist/source */ 71),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! providers/providers */ 95)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(PlaylistItem, Source, _, Providers) {
	
	    var Playlist = function (playlist) {
	        // Can be either an array of items or a single item.
	        playlist = (_.isArray(playlist) ? playlist : [playlist]);
	
	        return _.compact(_.map(playlist, PlaylistItem));
	    };
	
	    /** Go through the playlist and choose a single playable type to play; remove sources of a different type **/
	    Playlist.filterPlaylist = function(playlist, model) {
	        var list = [];
	        var providers = model.getProviders();
	        var preload = model.get('preload');
	        var feedid = model.get('feedid');
	
	        _.each(playlist, function(item) {
	            item = _.extend({}, item);
	
	            item.allSources = _formatSources(item, model);
	
	            item.sources = _filterSources(item.allSources, providers);
	
	            if (!item.sources.length) {
	                return;
	            }
	
	            // include selected file in item for backwards compatibility
	            item.file = item.sources[0].file;
	
	            // set preload for the item, if it is defined
	            if (item.preload || preload) {
	                item.preload = item.preload || preload;
	            }
	
	            // set feedid for the item, if it is defined
	            if (item.feedid || feedid) {
	                item.feedid = item.feedid || feedid;
	            }
	
	            list.push(item);
	        });
	
	        return list;
	    };
	
	    var _formatSources = function(item, model) {
	        var sources = item.sources;
	        var androidhls = model.get('androidhls');
	        var itemDrm = item.drm || model.get('drm');
	        var preload = item.preload || model.get('preload');
	        var withCredentials = _fallbackIfUndefined(item.withCredentials, model.get('withCredentials'));
	        var hlsjsdefault = model.get('hlsjsdefault');
	
	        return _.compact(_.map(sources, function(originalSource) {
	            if (! _.isObject(originalSource)) {
	                return;
	            }
	            if (androidhls !== undefined && androidhls !== null) {
	                originalSource.androidhls =  androidhls;
	            }
	
	            if (originalSource.drm || itemDrm) {
	                originalSource.drm = originalSource.drm || itemDrm;
	            }
	
	            if (originalSource.preload || preload) {
	                originalSource.preload = originalSource.preload || preload;
	            }
	
	            // withCredentials is assigned in ascending priority order, source > playlist > model
	            // a false value that is a higher priority than true must result in a false withCredentials value
	            // we don't want undefined if all levels have withCredentials as undefined
	            var cascadedWithCredentials = _fallbackIfUndefined(originalSource.withCredentials, withCredentials);
	            if (!_.isUndefined(cascadedWithCredentials)) {
	                originalSource.withCredentials = cascadedWithCredentials;
	            }
	
	            if (hlsjsdefault) {
	                originalSource.hlsjsdefault = hlsjsdefault;
	            }
	
	            return Source(originalSource);
	        }));
	    };
	
	    // A playlist item may have multiple different sources, but we want to stick with one.
	    var _filterSources = function(sources, providers) {
	        // legacy plugin support
	        if (!providers || !providers.choose) {
	            providers = new Providers({primary : providers ? 'flash' : null});
	        }
	
	        var chosenProviderAndType = _chooseProviderAndType(sources, providers);
	        if (!chosenProviderAndType) {
	            return [];
	        }
	        var provider = chosenProviderAndType.provider;
	        var bestType = chosenProviderAndType.type;
	        return _.filter(sources, function(source) {
	            return source.type === bestType && providers.providerSupports(provider, source);
	        });
	    };
	
	    //  Choose from the sources a type which matches our most preferred provider
	    function _chooseProviderAndType(sources, providers) {
	        for (var i = 0; i < sources.length; i++) {
	            var source = sources[i];
	            var chosenProvider = providers.choose(source);
	            if (chosenProvider) {
	                return {type: source.type, provider: chosenProvider.providerToCheck};
	            }
	        }
	
	        return null;
	    }
	
	    function _fallbackIfUndefined(value, fallback) {
	        return _.isUndefined(value) ? fallback : value;
	    }
	
	    return Playlist;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 112 */
/*!***********************************************!*\
  !*** ./src/js/controller/instream-adapter.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! controller/instream-html5 */ 113),
	    __webpack_require__(/*! controller/instream-flash */ 115),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(InstreamHtml5, InstreamFlash, events, states, utils, Events, _) {
	
	    function chooseInstreamMethod(_model) {
	        var providerName = '';
	        var provider = _model.get('provider');
	        if (provider) {
	            providerName = provider.name;
	        }
	        if (providerName.indexOf('flash') >= 0) {
	            return InstreamFlash;
	        }
	
	        return InstreamHtml5;
	    }
	
	    var _defaultOptions = {
	        skipoffset: null,
	        tag: null
	    };
	
	    var InstreamAdapter = function(_controller, _model, _view) {
	
	        var InstreamMethod = chooseInstreamMethod(_model);
	        var _instream = new InstreamMethod(_controller, _model);
	
	        var _array, // the copied in playlist
	            _arrayOptions,
	            _arrayIndex = 0,
	            _options = {},
	            _oldProvider,
	            _oldpos,
	            _olditem,
	            _this = this;
	
	        var _clickHandler = _.bind(function(evt) {
	            evt = evt || {};
	            evt.hasControls = !!_model.get('controls');
	
	            this.trigger(events.JWPLAYER_INSTREAM_CLICK, evt);
	
	            // toggle playback after click event
	            if (!_instream || !_instream._adModel) {
	                return;
	            }
	            if (_instream._adModel.get('state') === states.PAUSED) {
	                if (evt.hasControls) {
	                    _instream.instreamPlay();
	                }
	            } else {
	                _instream.instreamPause();
	            }
	        }, this);
	
	        var _doubleClickHandler = _.bind(function() {
	            if (!_instream || !_instream._adModel) {
	                return;
	            }
	            if (_instream._adModel.get('state') === states.PAUSED) {
	                if (_model.get('controls')) {
	                    _controller.setFullscreen();
	                    _controller.play();
	                }
	            }
	        }, this);
	
	        this.type = 'instream';
	
	        this.init = function() {
	
	            // Keep track of the original player state
	            _oldProvider = _model.getVideo();
	            _oldpos = _model.get('position');
	            _olditem = _model.get('playlist')[_model.get('item')];
	
	            _instream.on('all', _instreamForward, this);
	            _instream.on(events.JWPLAYER_MEDIA_TIME, _instreamTime, this);
	            _instream.on(events.JWPLAYER_MEDIA_COMPLETE, _instreamItemComplete, this);
	            _instream.init();
	
	            // Make sure the original player's provider stops broadcasting events (pseudo-lock...)
	            _oldProvider.detachMedia();
	
	            _model.mediaModel.set('state', states.BUFFERING);
	
	            if (_controller.checkBeforePlay() || (_oldpos === 0 && !_oldProvider.checkComplete())) {
	                // make sure video restarts after preroll
	                _oldpos = 0;
	                _model.set('preInstreamState', 'instream-preroll');
	            } else if (_oldProvider && _oldProvider.checkComplete() || _model.get('state') === states.COMPLETE) {
	                _model.set('preInstreamState', 'instream-postroll');
	            } else {
	                _model.set('preInstreamState', 'instream-midroll');
	            }
	
	            // If the player's currently playing, pause the video tag
	            var currState = _model.get('state');
	            if (currState === states.PLAYING || currState === states.BUFFERING) {
	                _oldProvider.pause();
	            }
	
	            // Show instream state instead of normal player state
	            _view.setupInstream(_instream._adModel);
	            _instream._adModel.set('state', states.BUFFERING);
	
	            // don't trigger api play/pause on display click
	            _view.clickHandler().setAlternateClickHandlers(utils.noop, null);
	
	            this.setText(_model.get('localization').loadingAd);
	            return this;
	        };
	
	        function _loadNextItem() {
	            // We want a play event for the next item, so we ensure the state != playing
	            _instream._adModel.set('state', 'buffering');
	
	            // destroy skip button
	            _model.set('skipButton', false);
	
	            _arrayIndex++;
	            var item = _array[_arrayIndex];
	            var options;
	            if (_arrayOptions) {
	                options = _arrayOptions[_arrayIndex];
	            }
	            _this.loadItem(item, options);
	        }
	
	        function _instreamForward(type, data) {
	            if (type === 'complete') {
	                return;
	            }
	            data = data || {};
	
	            if (_options.tag && !data.tag) {
	                data.tag = _options.tag;
	            }
	
	            this.trigger(type, data);
	
	            if (type === 'mediaError' || type === 'error') {
	                if (_array && _arrayIndex + 1 < _array.length) {
	                    _loadNextItem();
	                }
	            }
	        }
	
	        function _instreamTime(evt) {
	            _instream._adModel.set('duration', evt.duration);
	            _instream._adModel.set('position', evt.position);
	        }
	
	        function _instreamItemComplete(e) {
	            var data = {};
	            if (_options.tag) {
	                data.tag = _options.tag;
	            }
	            this.trigger(events.JWPLAYER_MEDIA_COMPLETE, data);
	            _instreamItemNext.call(this, e);
	        }
	
	        var _instreamItemNext = function(e) {
	            if (_array && _arrayIndex + 1 < _array.length) {
	                _loadNextItem();
	            } else {
	                if (e.type === events.JWPLAYER_MEDIA_COMPLETE) {
	                    // Dispatch playlist complete event for ad pods
	                    this.trigger(events.JWPLAYER_PLAYLIST_COMPLETE, {});
	                }
	                this.destroy();
	            }
	        };
	
	        this.loadItem = function(item, options) {
	            if (utils.isAndroid(2.3)) {
	                this.trigger({
	                    type: events.JWPLAYER_ERROR,
	                    message: 'Error loading instream: Cannot play instream on Android 2.3'
	                });
	                return;
	            }
	            // Copy the playlist item passed in and make sure it's formatted as a proper playlist item
	            var playlist = item;
	            if (_.isArray(item)) {
	                _array = item;
	                _arrayOptions = options;
	                item = _array[_arrayIndex];
	                if (_arrayOptions) {
	                    options = _arrayOptions[_arrayIndex];
	                }
	            } else {
	                playlist = [item];
	            }
	
	            var _this = this;
	            var providersManager = _model.getProviders();
	            var primary = (InstreamMethod === InstreamFlash)? 'flash' : undefined;
	            var providersNeeded = providersManager.required(playlist, primary);
	
	            _model.set('hideAdsControls', false);
	            providersManager.load(providersNeeded)
	                .then(function() {
	                    if (_instream === null) {
	                        return;
	                    }
	                    // Dispatch playlist item event for ad pods
	                    _this.trigger(events.JWPLAYER_PLAYLIST_ITEM, {
	                        index: _arrayIndex,
	                        item: item
	                    });
	
	                    _options = _.extend({}, _defaultOptions, options);
	                    _instream.load(item);
	
	                    _this.addClickHandler();
	
	                    var skipoffset = item.skipoffset || _options.skipoffset;
	                    if (skipoffset) {
	                        _this.setupSkipButton(skipoffset, _options);
	                    }
	                });
	        };
	
	        this.setupSkipButton = function(skipoffset, options, customNext) {
	            _model.set('skipButton', false);
	            if (customNext) {
	                _instreamItemNext = customNext;
	            }
	            _instream._adModel.set('skipMessage', options.skipMessage);
	            _instream._adModel.set('skipText', options.skipText);
	            _instream._adModel.set('skipOffset', skipoffset);
	            _model.set('skipButton', true);
	        };
	
	        this.applyProviderListeners = function(provider){
	            _instream.applyProviderListeners(provider);
	
	            this.addClickHandler();
	        };
	
	        this.play = function() {
	            _instream.instreamPlay();
	        };
	
	        this.pause = function() {
	            _instream.instreamPause();
	        };
	
	        this.addClickHandler = function() {
	            // start listening for ad click
	            _view.clickHandler().setAlternateClickHandlers(_clickHandler, _doubleClickHandler);
	
	            _instream.on(events.JWPLAYER_MEDIA_META, this.metaHandler, this);
	        };
	
	        this.skipAd = function(evt) {
	            var skipAdType = events.JWPLAYER_AD_SKIPPED;
	            this.trigger(skipAdType, evt);
	            _instreamItemNext.call(this, {
	                type: skipAdType
	            });
	        };
	
	        /** Handle the JWPLAYER_MEDIA_META event **/
	        this.metaHandler = function (evt) {
	            // If we're getting video dimension metadata from the provider, allow the view to resize the media
	            if (evt.width && evt.height) {
	                _view.resizeMedia();
	            }
	        };
	
	        this.destroy = function() {
	            this.off();
	
	            _model.set('skipButton', false);
	
	            if (_instream) {
	                if (_view.clickHandler()) {
	                    _view.clickHandler().revertAlternateClickHandlers();
	                }
	
	                _model.off(null, null, _instream);
	                _instream.instreamDestroy();
	
	                // Must happen after instream.instreamDestroy()
	                _view.destroyInstream();
	
	                _instream = null;
	
	                // Re-attach the controller
	                _controller.attachMedia();
	
	                var oldMode = _model.get('preInstreamState');
	                switch (oldMode) {
	                    case 'instream-preroll':
	                    case 'instream-midroll':
	                        var item = _.extend({}, _olditem);
	                        item.starttime = _oldpos;
	                        _model.loadVideo(item);
	
	                        // On error, mediaModel has buffering states in mobile, but oldProvider's state is playing.
	                        // So, changing mediaModel's state to playing does not change provider state unless we do this
	                        if (utils.isMobile() && (_model.mediaModel.get('state') === states.BUFFERING)) {
	                            _oldProvider.setState(states.BUFFERING);
	                        }
	                        _oldProvider.play();
	                        break;
	                    case 'instream-postroll':
	                    case 'instream-idle':
	                        _oldProvider.stop();
	                        break;
	                }
	            }
	        };
	
	        this.getState = function() {
	            if (_instream && _instream._adModel) {
	                return _instream._adModel.get('state');
	            }
	            // api expects false to know we aren't in instreamMode
	            return false;
	        };
	
	        this.setText = function(text) {
	            _view.setAltText(text ? text : '');
	        };
	
	        // This method is triggered by plugins which want to hide player controls
	        this.hide = function() {
	            _model.set('hideAdsControls', true);
	        };
	
	    };
	
	    _.extend(InstreamAdapter.prototype, Events);
	
	    return InstreamAdapter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 113 */
/*!*********************************************!*\
  !*** ./src/js/controller/instream-html5.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! events/change-state-event */ 114),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! controller/model */ 94)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Events, changeStateEvent, events, states, Model) {
	
	    var InstreamHtml5 = function(_controller, _model) {
	
	        var _adModel,
	            _currentProvider,
	            _this = _.extend(this, Events);
	
	        // Listen for player resize events
	        _controller.on(events.JWPLAYER_FULLSCREEN, function(data) {
	            this.trigger(events.JWPLAYER_FULLSCREEN, data);
	        }, _this);
	
	        /*****************************************
	         *****  Public instream API methods  *****
	         *****************************************/
	
	        this.init = function() {
	            // Initialize the instream player's model copied from main player's model
	            _adModel = new Model().setup({
	                id: _model.get('id'),
	                volume: _model.get('volume'),
	                fullscreen: _model.get('fullscreen'),
	                mute: _model.get('mute') || _model.get('autostartMuted'),
	                instreamMode: true
	            });
	            _adModel.on('fullscreenchange', _nativeFullscreenHandler);
	
	            this._adModel = _adModel;
	        };
	
	        /** Load an instream item and initialize playback **/
	        _this.load = function(item) {
	
	            _adModel.set('item', 0);
	            _adModel.set('playlistItem', item);
	            // Make sure it chooses a provider
	            _adModel.setActiveItem(item);
	
	            // check provider after item change
	            _checkProvider();
	
	            // Match the main player's controls state
	            _adModel.off(events.JWPLAYER_ERROR);
	            _adModel.on(events.JWPLAYER_ERROR, function(data) {
	                this.trigger(events.JWPLAYER_ERROR, data);
	            }, _this);
	
	            // Load the instream item
	            _adModel.loadVideo(item);
	        };
	
	        _this.applyProviderListeners = function(provider){
	            // check provider after item change
	            _checkProvider(provider);
	
	            // Match the main player's controls state
	            provider.off(events.JWPLAYER_ERROR);
	            provider.on(events.JWPLAYER_ERROR, function(data) {
	                this.trigger(events.JWPLAYER_ERROR, data);
	            }, _this);
	            _model.on('change:volume', function(data, value) {
	                _currentProvider.volume(value);
	            }, _this);
	            _model.on('change:mute', function(data, value) {
	                _currentProvider.mute(value);
	            }, _this);
	            _model.on('change:autostartMuted', function(data, value) {
	                if (!value) {
	                    _currentProvider.mute(_model.get('mute'));
	                }
	            }, _this);
	        };
	
	        /** Stop the instream playback and revert the main player back to its original state **/
	        this.instreamDestroy = function() {
	            if (!_adModel) {
	                return;
	            }
	
	            _adModel.off();
	
	            // We don't want the instream provider to be attached to the video tag anymore
	            this.off();
	            if (_currentProvider) {
	                _currentProvider.detachMedia();
	                _currentProvider.off();
	                if(_adModel.getVideo()){
	                    _currentProvider.destroy();
	                }
	            }
	
	            // Return the view to its normal state
	            _adModel = null;
	
	            // Remove all callbacks for 'this' for all events
	            _controller.off(null, null, this);
	            _controller = null;
	        };
	
	        /** Start instream playback **/
	        _this.instreamPlay = function() {
	            if (!_adModel.getVideo()) {
	                return;
	            }
	            _adModel.getVideo().play(true);
	        };
	
	        /** Pause instream playback **/
	        _this.instreamPause = function() {
	            if (!_adModel.getVideo()) {
	                return;
	            }
	            _adModel.getVideo().pause(true);
	        };
	
	
	        /*****************************
	         ****** Private methods ******
	         *****************************/
	
	        function _checkProvider(pseduoProvider) {
	            var provider = pseduoProvider || _adModel.getVideo();
	
	            if (_currentProvider !== provider) {
	                _currentProvider = provider;
	
	                if (!provider) {
	                    return;
	                }
	
	                var isVpaidProvider = provider.type === 'vpaid';
	
	                provider.off();
	
	                provider.on('all', function(type, data) {
	                    if (isVpaidProvider && (type === events.JWPLAYER_MEDIA_COMPLETE)) {
	                        return;
	                    }
	                    this.trigger(type, _.extend({}, data, {type: type}));
	                }, _this);
	
	                provider.on(events.JWPLAYER_MEDIA_BUFFER_FULL, _bufferFullHandler);
	
	                provider.on(events.JWPLAYER_PLAYER_STATE, stateHandler);
	                provider.attachMedia();
	                provider.volume(_model.get('volume'));
	                provider.mute(_model.get('mute') || _model.get('autostartMuted'));
	
	                _adModel.on('change:state', changeStateEvent, _this);
	            }
	        }
	
	        function stateHandler(evt) {
	            switch (evt.newstate) {
	                case states.PLAYING:
	                case states.PAUSED:
	                    _adModel.set('state', evt.newstate);
	                    break;
	            }
	        }
	
	
	        function _nativeFullscreenHandler(evt) {
	            _model.trigger(evt.type, evt);
	            _this.trigger(events.JWPLAYER_FULLSCREEN, {
	                fullscreen: evt.jwstate
	            });
	        }
	
	        /** Handle the JWPLAYER_MEDIA_BUFFER_FULL event **/
	        function _bufferFullHandler() {
	            _adModel.getVideo().play();
	        }
	
	        return _this;
	    };
	
	    return InstreamHtml5;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 114 */
/*!*********************************************!*\
  !*** ./src/js/events/change-state-event.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! events/states */ 97)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(states) {
	
	    // The api should dispatch an idle event when the model's state changes to complete
	    // This is to avoid conflicts with the complete event and to maintain legacy event flow
	    function normalizeApiState(newstate) {
	        if (newstate === states.COMPLETE || newstate === states.ERROR) {
	            return states.IDLE;
	        }
	        return newstate;
	    }
	
	    return function(model, newstate, oldstate) {
	        newstate = normalizeApiState(newstate);
	        oldstate = normalizeApiState(oldstate);
	        // do not dispatch idle a second time after complete
	        if (newstate !== oldstate) {
	            // buffering, playing and paused states become:
	            // buffer, play and pause events
	            var eventType = newstate.replace(/(?:ing|d)$/, '');
	            var evt = {
	                type: eventType,
	                newstate: newstate,
	                oldstate: oldstate,
	                reason: model.mediaModel.get('state')
	            };
	            // add reason for play/pause events
	            if (eventType === 'play') {
	                evt.playReason = model.get('playReason');
	            } else if (eventType === 'pause') {
	                evt.pauseReason = model.get('pauseReason');
	            }
	            this.trigger(eventType, evt);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 115 */
/*!*********************************************!*\
  !*** ./src/js/controller/instream-flash.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! controller/model */ 94),
	    __webpack_require__(/*! events/change-state-event */ 114),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Events, Model, changeStateEvent, events, states, utils, _) {
	
	    var InstreamFlash = function(_controller, _model) {
	        this.model = _model;
	
	        this._adModel = new Model().setup({
	            id: _model.get('id'),
	            volume: _model.get('volume'),
	            fullscreen: _model.get('fullscreen'),
	            mute: _model.get('mute')
	        });
	
	        this._adModel.on('change:state', changeStateEvent, this);
	
	        var container = _controller.getContainer();
	        this.swf = container.querySelector('object');
	    };
	
	    InstreamFlash.prototype = _.extend({
	
	        init: function() {
	            // Pause playback when throttled, and only resume is paused here
	            if (utils.isChrome()) {
	                var _throttleTimeout = -1;
	                var _throttlePaused = false;
	                this.swf.on('throttle', function(e) {
	                    clearTimeout(_throttleTimeout);
	
	                    if (e.state === 'resume') {
	                        if (_throttlePaused) {
	                            _throttlePaused = false;
	                            this.instreamPlay();
	                        }
	                    } else {
	                        var _this = this;
	                        _throttleTimeout = setTimeout(function () {
	                            if (_this._adModel.get('state') === states.PLAYING) {
	                                _throttlePaused = true;
	                                _this.instreamPause();
	                            }
	                        }, 250);
	                    }
	                }, this);
	            }
	
	            this.swf.on('instream:state', this.stateHandler, this)
	            .on('instream:time', function(evt) {
	                this._adModel.set('position', evt.position);
	                this._adModel.set('duration', evt.duration);
	                this.trigger(events.JWPLAYER_MEDIA_TIME, evt);
	            }, this)
	            .on('instream:complete', function(evt) {
	                this.trigger(events.JWPLAYER_MEDIA_COMPLETE, evt);
	            }, this)
	            .on('instream:error', function(evt) {
	                this.trigger(events.JWPLAYER_MEDIA_ERROR, evt);
	            }, this);
	
	            this.swf.triggerFlash('instream:init');
	
	            this.applyProviderListeners = function(provider){
	                this.model.on('change:volume', function(data, value) {
	                    provider.volume(value);
	                }, this);
	                this.model.on('change:mute', function(data, value) {
	                    provider.mute(value);
	                }, this);
	
	                provider.volume(this.model.get('volume'));
	                provider.mute(this.model.get('mute'));
	
	                // update admodel state when set from googima
	                provider.off();
	                provider.on(events.JWPLAYER_PLAYER_STATE, this.stateHandler, this);
	
	                // trigger time evemt when sent from freewheel
	                provider.on(events.JWPLAYER_MEDIA_TIME, function(data) {
	                    this.trigger(events.JWPLAYER_MEDIA_TIME, data);
	                }, this);
	            };
	        },
	
	        stateHandler: function(evt) {
	            switch (evt.newstate) {
	            case states.PLAYING:
	            case states.PAUSED:
	                this._adModel.set('state', evt.newstate);
	                break;
	            }
	        },
	
	        instreamDestroy: function() {
	            if (!this._adModel) {
	                return;
	            }
	
	            this.off();
	
	            this.swf.off(null, null, this);
	            this.swf.triggerFlash('instream:destroy');
	            this.swf = null;
	
	            this._adModel.off();
	            this._adModel = null;
	
	            this.model = null;
	        },
	
	        load: function(item) {
	            // Show the instream layer
	            this.swf.triggerFlash('instream:load', item);
	        },
	
	        instreamPlay: function() {
	            this.swf.triggerFlash('instream:play');
	        },
	
	        instreamPause: function() {
	            this.swf.triggerFlash('instream:pause');
	        }
	
	    }, Events);
	
	    return InstreamFlash;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 116 */
/*!*****************************!*\
  !*** ./src/js/view/view.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/constants */ 65),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! view/captionsrenderer */ 149),
	    __webpack_require__(/*! view/clickhandler */ 151),
	    __webpack_require__(/*! view/rewind-display-icon */ 152),
	    __webpack_require__(/*! view/play-display-icon */ 154),
	    __webpack_require__(/*! view/next-display-icon */ 155),
	    __webpack_require__(/*! view/dock */ 156),
	    __webpack_require__(/*! view/logo */ 158),
	    __webpack_require__(/*! view/controlbar */ 117),
	    __webpack_require__(/*! view/preview */ 160),
	    __webpack_require__(/*! view/rightclick */ 161),
	    __webpack_require__(/*! view/title */ 163),
	    __webpack_require__(/*! view/components/nextuptooltip */ 164),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! templates/player.html */ 166),
	    __webpack_require__(/*! view/breakpoint */ 167),
	    __webpack_require__(/*! view/components/button */ 148),
	    __webpack_require__(/*! view/display-container */ 168),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, events, Events, Constants, states,
	            CaptionsRenderer, ClickHandler, RewindDisplayIcon, PlayDisplayIcon, NextDisplayIcon, Dock, Logo,
	            Controlbar, Preview, RightClick, Title, NextUpToolTip, _, playerTemplate, setBreakpoint, button, DisplayContainer) {
	
	    var _styles = utils.style,
	        _bounds = utils.bounds,
	        _isMobile = utils.isMobile(),
	        DOCUMENT_FULLSCREEN_EVENTS = [
	            'fullscreenchange',
	            'webkitfullscreenchange',
	            'mozfullscreenchange',
	            'MSFullscreenChange'
	        ];
	
	    var View = function(_api, _model) {
	        var _playerElement,
	            _controlsLayer,
	            _controlsTimeout = -1,
	            _timeoutDuration = _isMobile ? 4000 : 2000,
	            _controlBarOnlyHeight = 40,
	            _videoLayer,
	            _lastWidth,
	            _lastHeight,
	            _instreamModel,
	            _controlbar,
	            _preview,
	            _displayClickHandler,
	            _castDisplay,
	            _dock,
	            _logo,
	            _title,
	            _nextuptooltip,
	            _mute,
	            _captionsRenderer,
	            _audioMode,
	            _showing = false,
	            _rightClickMenu,
	            _resizeMediaTimeout = -1,
	            _resizeContainerRequestId = -1,
	            // Function that delays the call of _setContainerDimensions so that the page has finished repainting.
	            _delayResize = window.requestAnimationFrame ||
	                function(rafFunc) {
	                    return window.setTimeout(rafFunc, 17);
	                },
	            // Function that prevents multiple calls of _setContainerDimensions when not necessary.
	            _cancelDelayResize = window.cancelAnimationFrame || window.clearTimeout,
	            _previewDisplayStateTimeout = -1,
	            _currentState,
	            _originalContainer,
	
	            // view fullscreen methods and ability
	            _requestFullscreen,
	            _exitFullscreen,
	            _elementSupportsFullscreen = false,
	
	            // Used to differentiate tab focus events from click events
	            _focusFromClick = false,
	
	            // Colors written into this canvas to set maui color overrides
	            _canvasColorContext,
	
	            _this = _.extend(this, Events);
	
	        // Include the separate chunk that contains the @font-face definition.  Check webpackJsonjwplayer so we don't
	        // run this in phantomjs because it breaks despite it working in browser and including files like we want it to.
	        if (window.webpackJsonpjwplayer) {
	            __webpack_require__(/*! css/jwplayer.less */ 170);
	        }
	
	        this.model = _model;
	        this.api = _api;
	
	        _playerElement = utils.createElement(playerTemplate({id: _model.get('id')}));
	        if (utils.isIE()) {
	            utils.addClass(_playerElement, 'jw-ie');
	        }
	
	        var width = _model.get('width'),
	            height = _model.get('height');
	
	        _styles(_playerElement, {
	            width: width.toString().indexOf('%') > 0 ? width : (width+ 'px'),
	            height: height.toString().indexOf('%') > 0 ? height : (height + 'px')
	        });
	
	        _requestFullscreen =
	            _playerElement.requestFullscreen ||
	            _playerElement.webkitRequestFullscreen ||
	            _playerElement.webkitRequestFullScreen ||
	            _playerElement.mozRequestFullScreen ||
	            _playerElement.msRequestFullscreen;
	        _exitFullscreen =
	            document.exitFullscreen ||
	            document.webkitExitFullscreen ||
	            document.webkitCancelFullScreen ||
	            document.mozCancelFullScreen ||
	            document.msExitFullscreen;
	        _elementSupportsFullscreen = _requestFullscreen && _exitFullscreen;
	
	        function reasonInteraction() {
	            return {reason: 'interaction'};
	        }
	
	        function adjustSeek(amount) {
	            var min = 0;
	            var max = _model.get('duration');
	            var position = _model.get('position');
	            if (_model.get('streamType') === 'DVR') {
	                min = max;
	                max = Math.max(position, Constants.dvrSeekLimit);
	            }
	            var newSeek = utils.between(position + amount, min, max);
	            _api.seek(newSeek, reasonInteraction());
	        }
	
	        function adjustVolume(amount) {
	            var newVol = utils.between(_model.get('volume') + amount, 0, 100);
	            _api.setVolume(newVol);
	        }
	
	        function allowKeyHandling(evt) {
	            // If Meta keys return
	            if (evt.ctrlKey || evt.metaKey) {
	                return false;
	            }
	
	            // Controls may be disabled during share screens, or via API
	            if (!_model.get('controls')) {
	                return false;
	            }
	            return true;
	        }
	
	        function handleKeydown(evt) {
	            if (!allowKeyHandling(evt)) {
	                // Let event bubble upwards
	                return true;
	            }
	
	            // On keypress show the controlbar for a few seconds
	            if (!_instreamModel) {
	                _userActivity();
	            }
	
	            switch (evt.keyCode) {
	                case 27: // Esc
	                    _api.setFullscreen(false);
	                    break;
	                case 13: // enter
	                case 32: // space
	                    _api.play(reasonInteraction());
	                    break;
	                case 37: // left-arrow, if not adMode
	                    if (!_instreamModel) {
	                        adjustSeek(-5);
	                    }
	                    break;
	                case 39: // right-arrow, if not adMode
	                    if (!_instreamModel) {
	                        adjustSeek(5);
	                    }
	                    break;
	                case 38: // up-arrow
	                    adjustVolume(10);
	                    break;
	                case 40: // down-arrow
	                    adjustVolume(-10);
	                    break;
	                case 67: // c-key
	                    var captionsList = _api.getCaptionsList();
	                    var listLength = captionsList.length;
	                    if (listLength) {
	                        var nextIndex = (_api.getCurrentCaptions() + 1) % listLength;
	                        _api.setCurrentCaptions(nextIndex);
	                    }
	                    break;
	                case 77: // m-key
	                    _api.setMute();
	                    break;
	                case 70: // f-key
	                    _api.setFullscreen();
	                    break;
	                default:
	                    if (evt.keyCode >= 48 && evt.keyCode <= 59) {
	                        // if 0-9 number key, move to n/10 of the percentage of the video
	                        var number = evt.keyCode - 48;
	                        var newSeek = (number / 10) * _model.get('duration');
	                        _api.seek(newSeek, reasonInteraction());
	                    }
	                    break;
	            }
	
	            if (/13|32|37|38|39|40/.test(evt.keyCode)) {
	                // Prevent keypresses from scrolling the screen
	                evt.preventDefault();
	                return false;
	            }
	        }
	
	        function handleBlur() {
	            _focusFromClick = false;
	            utils.removeClass(_playerElement, 'jw-no-focus');
	        }
	
	        function handleMouseUp(e) {
	            if (e.target && e.target.blur) {
	                e.target.blur();
	            }
	        }
	
	        function handleMouseDown() {
	            _focusFromClick = true;
	            utils.addClass(_playerElement, 'jw-no-focus');
	        }
	
	        function handleFocus() {
	            if (!_focusFromClick) {
	                handleBlur();
	            }
	
	            // On tab-focus, show the control bar for a few seconds
	            if (!_instreamModel) {
	                _userActivity();
	            }
	        }
	
	        function _setContainerDimensions() {
	            var bounds = _bounds(_playerElement),
	                containerWidth = Math.round(bounds.width),
	                containerHeight = Math.round(bounds.height);
	
	            _cancelDelayResize(_resizeContainerRequestId);
	
	            // If we have bad values for either dimension or the container is the same size as before, return early.
	            if ((!containerWidth || !containerHeight) ||
	                (containerWidth === _lastWidth && containerHeight === _lastHeight)) {
	                return;
	            }
	
	            _lastWidth = containerWidth;
	            _lastHeight = containerHeight;
	            clearTimeout(_resizeMediaTimeout);
	            _resizeMediaTimeout = setTimeout(_resizeMedia, 50);
	
	            _model.set('containerWidth', containerWidth);
	            _model.set('containerHeight', containerHeight);
	            setBreakpoint(_playerElement, containerWidth, containerHeight);
	
	            _this.trigger(events.JWPLAYER_RESIZE, {
	                width: containerWidth,
	                height: containerHeight
	            });
	        }
	
	        function _responsiveListener() {
	            if (document.body.contains(_playerElement)) {
	                _cancelDelayResize(_resizeContainerRequestId);
	                _resizeContainerRequestId = _delayResize(_setContainerDimensions);
	            }
	        }
	
	        // Set global colors, used by related plugin
	        // If a color is undefined simple-style-loader won't add their styles to the dom
	        function insertGlobalColorClasses(activeColor, inactiveColor, playerId) {
	            var activeColorSet = {
	                color: activeColor,
	                borderColor: activeColor,
	                stroke: activeColor
	            };
	            var inactiveColorSet = {
	                color: inactiveColor,
	                borderColor: inactiveColor,
	                stroke: inactiveColor
	            };
	            utils.css('#' + playerId + ' .jw-color-active', activeColorSet, playerId);
	            utils.css('#' + playerId + ' .jw-color-active-hover:hover', activeColorSet, playerId);
	            utils.css('#' + playerId + ' .jw-color-inactive', inactiveColorSet, playerId);
	            utils.css('#' + playerId + ' .jw-color-inactive-hover:hover', inactiveColorSet, playerId);
	        }
	
	
	        this.onChangeSkin = function(model, newSkin) {
	            utils.replaceClass(_playerElement, /jw-skin-\S+/, newSkin ? ('jw-skin-'+newSkin) : '');
	        };
	
	
	        this.handleColorOverrides = function() {
	            var id = _model.get('id');
	
	            function getRgba(color, opacity) {
	                var data;
	
	                if (!_canvasColorContext) {
	                    var canvas = document.createElement('canvas');
	
	                    canvas.height = 1;
	                    canvas.width = 1;
	
	                    _canvasColorContext = canvas.getContext('2d');
	                }
	
	                _canvasColorContext.clearRect(0, 0, 1, 1);
	                _canvasColorContext.fillStyle = color;
	                _canvasColorContext.fillRect(0, 0, 1, 1);
	
	                data = _canvasColorContext.getImageData(0, 0, 1, 1).data;
	
	                return 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + opacity + ')';
	            }
	
	            function addStyle(elements, attr, value, extendParent) {
	                if (!value) {
	                    return;
	                }
	
	                /* if extendParent is true, bundle the first selector of
	                element string to the player element instead of defining it as a
	                child of the player element (default). i.e. #player.sel-1 .sel-2 vs. #player .sel-1 .sel-2 */
	                elements = utils.prefix(elements, '#' + id + (extendParent ? '' : ' '));
	
	                var o = {};
	                o[attr] = value;
	                utils.css(elements.join(', '), o, id);
	            }
	
	            // We can assume that the user will define both an active and inactive color because otherwise it doesn't
	            // look good.
	            var activeColor = _model.get('skinColorActive'),
	                inactiveColor = _model.get('skinColorInactive'),
	                backgroundColor = _model.get('skinColorBackground'),
	                backgroundColorGradient = backgroundColor ? 'linear-gradient(180deg, ' +
	                    getRgba(backgroundColor, 0) + ' 0%, ' +
	                    getRgba(backgroundColor, 0.05) + ' 25%, ' +
	                    getRgba(backgroundColor, 0.15) + ' 50%, ' +
	                    getRgba(backgroundColor, 0.5) + ') 100%' : '';
	
	            // These will use standard style names for CSS since they are added directly to a style sheet
	            // Using background instead of background-color so we don't have to clear gradients with background-image
	
	            // Apply active color
	            addStyle([
	                // Toggle and menu button active colors
	                '.jw-button-color.jw-toggle',
	                '.jw-button-color:hover',
	                '.jw-button-color.jw-toggle.jw-off:hover',
	                '.jw-option:hover',
	                '.jw-option.jw-active-option',
	                '.jw-nextup-header'
	            ], 'color', activeColor);
	            addStyle([
	                // menu active option
	
	                // slider fill color
	                '.jw-progress'
	            ], 'background', activeColor);
	
	            // Apply inactive color
	            addStyle([
	                // text color of many ui elements
	                '.jw-text',
	                // menu option text
	                '.jw-option',
	                // controlbar button colors
	                '.jw-button-color',
	                // toggle button
	                '.jw-toggle.jw-off',
	                '.jw-tooltip-title',
	                '.jw-skip .jw-skip-icon',
	                '.jw-nextup-body'
	            ], 'color', inactiveColor);
	            addStyle([
	                // slider children
	                '.jw-cue',
	                '.jw-knob',
	                '.jw-active-option',
	                '.jw-nextup-header'
	            ], 'background', inactiveColor);
	
	            // Apply background color
	            addStyle([
	                // general background color
	                '.jw-background-color',
	                '.jw-tooltip-title'
	            ], 'background', backgroundColor);
	
	            addStyle([
	                // for small player, set the control bar gradient to the config background color
	                '.jw-breakpoint-0 .jw-background-color.jw-controlbar',
	                '.jw-breakpoint-1 .jw-background-color.jw-controlbar',
	                '.jw-flag-time-slider-above .jw-background-color.jw-controlbar',
	            ], 'background', backgroundColorGradient, true);
	
	            addStyle([
	                // remove the config background color on time slider on small player
	                '.jw-breakpoint-0 .jw-background-color.jw-slider-time',
	                '.jw-breakpoint-1 .jw-background-color.jw-slider-time',
	                '.jw-flag-time-slider-above .jw-background-color.jw-slider-time',
	            ], 'background', 'none', true);
	
	            insertGlobalColorClasses(activeColor, inactiveColor, id);
	        };
	
	        this.setup = function() {
	
	            this.handleColorOverrides();
	
	            // Hide control elements until skin is loaded
	            if (_model.get('skin-loading') === true) {
	                utils.addClass(_playerElement, 'jw-flag-skin-loading');
	                _model.once('change:skin-loading', function() {
	                    utils.removeClass(_playerElement, 'jw-flag-skin-loading');
	                });
	            }
	
	            // display time slider above control bar if configured
	            if (_model.get('timeSliderAbove') && !utils.hasClass(_playerElement, 'jw-flag-audio-player')) {
	              utils.addClass(_playerElement, 'jw-flag-time-slider-above');
	            } else {
	              utils.addClass(_playerElement, 'jw-flag-time-slider-default');
	            }
	
	            this.onChangeSkin(_model, _model.get('skin'), '');
	            _model.on('change:skin', this.onChangeSkin, this);
	
	            _videoLayer = _playerElement.getElementsByClassName('jw-media')[0];
	
	            _controlsLayer = _playerElement.getElementsByClassName('jw-controls')[0];
	
	            var previewElem = _playerElement.getElementsByClassName('jw-preview')[0];
	            _preview = new Preview(_model);
	            _preview.setup(previewElem);
	
	            var _titleElement = _playerElement.getElementsByClassName('jw-title')[0];
	            _title = new Title(_model);
	            _title.setup(_titleElement);
	
	            _setupControls();
	
	            // call user activity to set timeout for control to fade
	            _userActivity();
	
	            // adds video tag to video layer
	            _model.set('mediaContainer', _videoLayer);
	
	            // Native fullscreen (coming through from the provider)
	            _model.mediaController.on('fullscreenchange', _fullscreenChangeHandler);
	            // DOM fullscreen
	            for (var i = DOCUMENT_FULLSCREEN_EVENTS.length; i--;) {
	                document.addEventListener(DOCUMENT_FULLSCREEN_EVENTS[i], _fullscreenChangeHandler, false);
	            }
	
	            window.removeEventListener('resize', _responsiveListener);
	            window.addEventListener('resize', _responsiveListener, false);
	            if (_isMobile) {
	                window.removeEventListener('orientationchange', _responsiveListener);
	                window.addEventListener('orientationchange', _responsiveListener, false);
	            }
	
	            _model.on('change:errorEvent', _errorHandler);
	
	            _model.on('change:controls', _onChangeControls);
	            _onChangeControls(_model, _model.get('controls'));
	            _model.on('change:state', _stateHandler);
	            _model.on('change:duration', _setLiveMode, this);
	
	            _model.on('change:flashBlocked', _onChangeFlashBlocked);
	            _onChangeFlashBlocked(_model, _model.get('flashBlocked'));
	
	            _api.onPlaylistComplete(_playlistCompleteHandler);
	            _api.onPlaylistItem(_playlistItemHandler);
	
	            _model.on('change:hideAdsControls', function(model, val) {
	                utils.toggleClass(_playerElement, 'jw-flag-ads-hide-controls', val);
	            });
	
	            // set initial state
	            if(_model.get('stretching')){
	                _onStretchChange(_model, _model.get('stretching'));
	            }
	            // watch for changes
	            _model.on('change:stretching', _onStretchChange);
	
	            _stateHandler(_model, states.IDLE);
	            _model.on('change:fullscreen', _fullscreen);
	
	            _componentFadeListeners(_controlbar);
	            _componentFadeListeners(_logo);
	
	            var aspectratio = _model.get('aspectratio');
	            if (aspectratio) {
	                utils.addClass(_playerElement, 'jw-flag-aspect-mode');
	                var aspectRatioContainer = _playerElement.getElementsByClassName('jw-aspect')[0];
	                _styles(aspectRatioContainer, {
	                    paddingTop: aspectratio
	                });
	            }
	
	            // This setTimeout allows the player to actually get embedded into the player
	            _api.on(events.JWPLAYER_READY, function() {
	                // Initialize values for containerWidth and containerHeight
	                _setContainerDimensions();
	
	                _resize(_model.get('width'), _model.get('height'));
	            });
	        };
	
	        function _onStretchChange(model, newVal) {
	            utils.replaceClass(_playerElement, /jw-stretch-\S+/, 'jw-stretch-' + newVal);
	        }
	
	        function _componentFadeListeners(comp) {
	            if (comp && !_isMobile) {
	                comp.element().addEventListener('mousemove', _overControlElement, false);
	                comp.element().addEventListener('mouseout', _offControlElement, false);
	            }
	        }
	
	        function _touchHandler(playDisplayIcon) {
	            var state = _model.get('state');
	
	            if ((state === states.IDLE ||
	                state === states.COMPLETE ||
	                (playDisplayIcon && (state === states.PAUSED || state === states.PLAYING)) ||
	                (_instreamModel && _instreamModel.get('state') === states.PAUSED)) &&
	                _model.get('controls')) {
	                _api.play(reasonInteraction());
	            }
	
	            if (state === states.PAUSED && !playDisplayIcon) {
	                // Toggle visibility of the controls when tapping the media
	                _toggleControls();
	            } else {
	                // Toggle visibility of the controls when tapping the media or play icon
	                if(!_showing) {
	                    _userActivity();
	                } else {
	                    _userInactive();
	                }
	            }
	        }
	
	        function _logoClickHandler(evt){
	            if (!evt.link) {
	                //_togglePlay();
	                if (_model.get('controls')) {
	                    _api.play(reasonInteraction());
	                }
	            } else {
	                _api.pause(true, reasonInteraction());
	                _api.setFullscreen(false);
	                window.open(evt.link, evt.linktarget);
	            }
	        }
	
	        function _overControlElement() {
	            // Over controlbar, timeout resumed when off controlbar
	            clearTimeout(_controlsTimeout);
	        }
	
	        function _offControlElement() {
	            _userActivity();
	        }
	
	        function forward(evt) {
	            _this.trigger(evt.type, evt);
	        }
	
	        function _onChangeFlashBlocked(model, isBlocked) {
	            if (isBlocked) {
	                if (_rightClickMenu) {
	                    _rightClickMenu.destroy();
	                }
	                utils.addClass(_playerElement, 'jw-flag-flash-blocked');
	            } else {
	                if (_rightClickMenu) {
	                    _rightClickMenu.setup(_model, _playerElement, _playerElement);
	                }
	                utils.removeClass(_playerElement,'jw-flag-flash-blocked');
	            }
	        }
	
	        var _onChangeControls = function(model, bool) {
	            if (bool) {
	                var state = (_instreamModel) ? _instreamModel.get('state') : _model.get('state');
	                // model may be instream or normal depending on who triggers this
	                _stateHandler(model, state);
	            }
	
	            utils.toggleClass(_playerElement, 'jw-flag-controls-disabled', !bool);
	        };
	
	        function _doubleClickFullscreen() {
	            if(_model.get('controls')) {
	                _api.setFullscreen();
	            }
	        }
	
	        function _setupControls() {
	            var overlaysElement = _playerElement.getElementsByClassName('jw-overlays')[0];
	            overlaysElement.addEventListener('mousemove', _userActivity);
	
	            _displayClickHandler = new ClickHandler(_model, _videoLayer, {useHover: true});
	            _displayClickHandler.on('click', function() {
	                forward({type : events.JWPLAYER_DISPLAY_CLICK});
	                if(_model.get('controls')) {
	                    _api.play(reasonInteraction());
	                }
	            });
	            _displayClickHandler.on('tap', function() {
	                forward({type : events.JWPLAYER_DISPLAY_CLICK});
	                _touchHandler();
	            });
	            _displayClickHandler.on('doubleClick', _doubleClickFullscreen);
	            _displayClickHandler.on('move', _userActivity);
	            _displayClickHandler.on('over', _userActivity);
	
	            _controlsLayer.appendChild(createDisplayContainer());
	
	            _dock = new Dock(_model);
	
	            _logo = new Logo(_model);
	            _logo.on(events.JWPLAYER_LOGO_CLICK, _logoClickHandler);
	
	            var rightside = document.createElement('div');
	            rightside.className = 'jw-controls-right jw-reset';
	            _logo.setup(rightside);
	            rightside.appendChild(_dock.element());
	            _controlsLayer.appendChild(rightside);
	
	            // captions rendering
	            _captionsRenderer = new CaptionsRenderer(_model);
	            _captionsRenderer.setup(_playerElement.id, _model.get('captions'));
	
	            // captions should be place behind controls, and not hidden when controls are hidden
	            _controlsLayer.parentNode.insertBefore(_captionsRenderer.element(), _title.element());
	
	            // Touch UI mode when we're on mobile and we have a percentage height or we can fit the large UI in
	            var height = _model.get('height');
	            if (_isMobile && (typeof height === 'string' || height >= _controlBarOnlyHeight * 1.5)){
	                utils.addClass(_playerElement, 'jw-flag-touch');
	            } else {
	                _rightClickMenu = new RightClick();
	                _rightClickMenu.setup(_model, _playerElement, _playerElement);
	            }
	
	            _controlbar = new Controlbar(_api, _model);
	            _controlbar.on(events.JWPLAYER_USER_ACTION, _userActivity);
	            _model.on('change:scrubbing', _dragging);
	
	            // Ignore iOS9. Muted autoplay is supported in iOS 10+
	            if (_model.autoStartOnMobile()) {
	                _mute = button('jw-autostart-mute jw-off', _autoplayUnmute, _model.get('localization').volume);
	                _mute.show();
	                _controlsLayer.appendChild(_mute.element());
	                // Set mute state in the controlbar
	                _controlbar.renderVolume(true, _model.get('volume'));
	                // Hide the controlbar until the autostart flag is removed
	                utils.addClass(_playerElement, 'jw-flag-autostart');
	                _model.set('autostartMuted', true);
	                _model.on('change:autostartFailed', _autoplayUnmute);
	                _model.on('change:autostartMuted', _autoplayUnmute);
	                _model.on('change:mute', _autoplayUnmute);
	            }
	
	            _nextuptooltip = new NextUpToolTip(_model, _api, _controlbar.elements.next, _playerElement);
	            _nextuptooltip.setup();
	
	            // NextUp needs to be behind the controlbar to not block other tooltips
	            _controlsLayer.appendChild(_nextuptooltip.element());
	            _controlsLayer.appendChild(_controlbar.element());
	
	            _playerElement.addEventListener('focus', handleFocus);
	            _playerElement.addEventListener('blur', handleBlur);
	            _playerElement.addEventListener('keydown', handleKeydown);
	            _playerElement.onmousedown = handleMouseDown;
	            _playerElement.onmouseup = handleMouseUp;
	        }
	
	        // Perform the switch to fullscreen
	        var _fullscreen = function(model, state) {
	
	            // If it supports DOM fullscreen
	            var provider = _model.getVideo();
	
	            // Unmute the video so volume can be adjusted with native controls in fullscreen
	            if (state && _model.get('autostartMuted')) {
	                _autoplayUnmute();
	            }
	
	            if (_elementSupportsFullscreen) {
	                if (state) {
	                    _requestFullscreen.apply(_playerElement);
	                } else {
	                    _exitFullscreen.apply(document);
	                }
	                _toggleDOMFullscreen(_playerElement, state);
	            } else {
	                if (utils.isIE()) {
	                    _toggleDOMFullscreen(_playerElement, state);
	                } else {
	                    // else use native fullscreen
	                    if (_instreamModel && _instreamModel.getVideo()) {
	                       _instreamModel.getVideo().setFullscreen(state);
	                    }
	                    provider.setFullscreen(state);
	                }
	            }
	            // pass fullscreen state to Flash provider
	            // provider.getName() is the same as _api.getProvider() or _model.get('provider')
	            if (provider && provider.getName().name.indexOf('flash') === 0) {
	                provider.setFullscreen(state);
	            }
	        };
	
	        /**
	         * Resize the player
	         */
	        function _resize(width, height, resetAspectMode) {
	            var className = _playerElement.className,
	                playerStyle;
	
	            // when jwResize is called remove aspectMode and force layout
	            resetAspectMode = !!resetAspectMode;
	            if (resetAspectMode) {
	                className = className.replace(/\s*aspectMode/, '');
	                if (_playerElement.className !== className) {
	                    _playerElement.className = className;
	                }
	                _styles(_playerElement, {
	                    display: 'block'
	                }, resetAspectMode);
	            }
	
	            if (utils.exists(width) && utils.exists(height)) {
	                _model.set('width', width);
	                _model.set('height', height);
	            }
	
	            playerStyle = {
	                width: width
	            };
	            if (!utils.hasClass(_playerElement, 'jw-flag-aspect-mode')) {
	                playerStyle.height = height;
	            }
	
	            if (_model.get('aspectratio')) {
	                _resizeAspectModeCaptions();
	            }
	
	            _styles(_playerElement, playerStyle, true);
	
	            _checkAudioMode(height);
	
	            // pass width, height from jwResize if present
	            _resizeMedia(width, height);
	        }
	
	        function _checkAudioMode(height) {
	            _audioMode = _isAudioMode(height);
	            if (_controlbar) {
	                if (!_audioMode) {
	                    var model = _instreamModel ? _instreamModel : _model;
	                    _stateHandler(model, model.get('state'));
	                }
	            }
	
	            utils.toggleClass(_playerElement, 'jw-flag-audio-player', _audioMode);
	        }
	
	        function _isAudioMode(height) {
	            if (_model.get('aspectratio')) {
	                return false;
	            }
	            if (_.isString(height) && height.indexOf('%') > -1) {
	                return false;
	            }
	
	            var checkHeight = (_.isNumber(height) ? height : _model.get('containerHeight'));
	
	            return _isControlBarOnly(checkHeight);
	        }
	
	        function _isControlBarOnly(verticalPixels) {
	            // 1.75 so there's a little wiggle room on mobile for the large UI to fit in
	            return verticalPixels && verticalPixels <= (_controlBarOnlyHeight * ((_isMobile)?1.75:1));
	        }
	
	        function _resizeMedia(width, height) {
	            if (!width || isNaN(Number(width))) {
	                if (!_videoLayer) {
	                    return;
	                }
	                width = _videoLayer.clientWidth;
	            }
	            if (!height || isNaN(Number(height))) {
	                if (!_videoLayer) {
	                    return;
	                }
	                height = _videoLayer.clientHeight;
	            }
	
	            if (_preview) {
	                _preview.resize(width, height, _model.get('stretching'));
	            }
	
	            //IE9 Fake Full Screen Fix
	            if (utils.isMSIE(9) && document.all && !window.atob) {
	                width = height = '100%';
	            }
	
	            var provider = _model.getVideo();
	            if (!provider) {
	                return;
	            }
	            var transformScale = provider.resize(width, height, _model.get('stretching'));
	
	            // poll resizing if video is transformed
	            if (transformScale) {
	                clearTimeout(_resizeMediaTimeout);
	                _resizeMediaTimeout = setTimeout(_resizeMedia, 250);
	            }
	
	            if (_model.get('aspectratio')) {
	                _resizeAspectModeCaptions();
	            }
	
	            _captionsRenderer.resize();
	        }
	
	        function _autoplayUnmute () {
	            var autostartSucceeded = !_model.get('autostartFailed');
	            var mute = _model.get('mute');
	
	            // If autostart succeeded, it means the user has chosen to unmute the video,
	            // so we should update the model, setting mute to false
	            if (autostartSucceeded) {
	                mute = false;
	            }
	            _model.off('change:autostartFailed', _autoplayUnmute);
	            _model.off('change:mute', _autoplayUnmute);
	            _model.off('change:autostartMuted', _autoplayUnmute);
	            _model.set('autostartFailed', undefined);
	            _model.set('autostartMuted', undefined);
	            _api.setMute(mute);
	            // the model's mute value may not have changed. ensure the controlbar's mute button is in the right state
	            _controlbar.renderVolume(mute, _model.get('volume'));
	            _mute.hide();
	            utils.removeClass(_playerElement, 'jw-flag-autostart');
	        }
	
	        this.resize = function(width, height) {
	            var resetAspectMode = true;
	            _resize(width, height, resetAspectMode);
	            _setContainerDimensions();
	        };
	        this.resizeMedia = _resizeMedia;
	
	        this.reset = function(){
	            if (document.contains(_playerElement)) {
	                _playerElement.parentNode.replaceChild(_originalContainer, _playerElement);
	            }
	            utils.emptyElement(_playerElement);
	        };
	
	        /**
	         * Return whether or not we're in native fullscreen
	         */
	        function _isNativeFullscreen() {
	            if (_elementSupportsFullscreen) {
	                var fsElement = document.fullscreenElement ||
	                    document.webkitCurrentFullScreenElement ||
	                    document.mozFullScreenElement ||
	                    document.msFullscreenElement;
	                return !!(fsElement && fsElement.id === _model.get('id'));
	            }
	            // if player element view fullscreen not available, return video fullscreen state
	            return  _instreamModel ? _instreamModel.getVideo().getFullScreen() :
	                        _model.getVideo().getFullScreen();
	        }
	
	
	        function _fullscreenChangeHandler(event) {
	            var modelState = _model.get('fullscreen');
	            var newState = (event.jwstate !== undefined) ? event.jwstate : _isNativeFullscreen();
	
	            // If fullscreen was triggered by something other than the player
	            //  then we want to sync up our internal state
	            if (modelState !== newState) {
	                _model.set('fullscreen', newState);
	            }
	
	            clearTimeout(_resizeMediaTimeout);
	            _resizeMediaTimeout = setTimeout(_resizeMedia, 200);
	        }
	
	        function _toggleDOMFullscreen(playerElement, fullscreenState) {
	            if (fullscreenState) {
	                utils.addClass(playerElement, 'jw-flag-fullscreen');
	                _styles(document.body, {
	                    'overflow-y': 'hidden'
	                });
	
	                // On going fullscreen we want the control bar to fade after a few seconds
	                _userActivity();
	            } else {
	                utils.removeClass(playerElement, 'jw-flag-fullscreen');
	                _styles(document.body, {
	                    'overflow-y': ''
	                });
	            }
	
	            _resizeMedia();
	        }
	
	        function _userInactive() {
	            _showing = false;
	
	            clearTimeout(_controlsTimeout);
	            _controlbar.hideComponents();
	            utils.addClass(_playerElement, 'jw-flag-user-inactive');
	            _captionsRenderer.renderCues(true);
	        }
	
	        function _userActivity() {
	            if(!_showing){
	                utils.removeClass(_playerElement, 'jw-flag-user-inactive');
	                _captionsRenderer.renderCues(true);
	            }
	
	            _showing = true;
	
	            clearTimeout(_controlsTimeout);
	            _controlsTimeout = setTimeout(_userInactive, _timeoutDuration);
	        }
	
	        function _toggleControls() {
	            utils.toggleClass(_playerElement, 'jw-flag-controls-hidden');
	            _captionsRenderer.renderCues(true);
	        }
	
	        function _playlistCompleteHandler() {
	            _api.setFullscreen(false);
	        }
	
	        function _playlistItemHandler() {
	            // update display title
	            if (_castDisplay) {
	                _castDisplay.setState(_model.get('state'));
	            }
	            _onMediaTypeChange(_model, _model.mediaModel.get('mediaType'));
	            _model.mediaModel.on('change:mediaType', _onMediaTypeChange, this);
	        }
	
	        function _onMediaTypeChange(model, val) {
	            var isAudioFile = (val ==='audio');
	            var provider = _model.getVideo();
	            var isFlash = (provider && provider.getName().name.indexOf('flash') === 0);
	
	            utils.toggleClass(_playerElement, 'jw-flag-media-audio', isAudioFile);
	
	            if (isAudioFile && !isFlash) {
	                // Put the preview element before the media element in order to display browser captions
	                _playerElement.insertBefore(_preview.el, _videoLayer);
	            } else {
	                // Put the preview element before the captions element to display captions with the captions renderer
	                _playerElement.insertBefore(_preview.el, _captionsRenderer.element());
	            }
	        }
	
	        function _setLiveMode(model, duration){
	            var minDvrWindow = model.get('minDvrWindow');
	            var streamType = utils.streamType(duration, minDvrWindow);
	            var live = (streamType === 'LIVE');
	
	            model.set('streamType', streamType);
	            utils.toggleClass(_playerElement, 'jw-flag-live', live);
	            _this.setAltText((live) ? model.get('localization').liveBroadcast : '');
	        }
	
	        function _errorHandler(model, evt) {
	            if (!evt) {
	                _title.playlistItem(model, model.get('playlistItem'));
	                return;
	            }
	            if (evt.name) {
	                _title.updateText(evt.name, evt.message);
	            } else {
	                _title.updateText(evt.message, '');
	            }
	        }
	
	        function _isCasting() {
	            var provider = _model.getVideo();
	            if (provider) {
	                return provider.isCaster;
	            }
	            return false;
	        }
	
	        function _updateStateClass() {
	            utils.replaceClass(_playerElement, /jw-state-\S+/, 'jw-state-' + _currentState);
	        }
	
	        function _stateHandler(model, state) {
	            _currentState = state;
	            // Throttle all state change UI updates except for play to prevent iOS 10 animation bug
	            clearTimeout(_previewDisplayStateTimeout);
	
	            if (state === states.PLAYING) {
	                _stateUpdate(model, state);
	            } else {
	                _previewDisplayStateTimeout = setTimeout(function() {
	                    _stateUpdate(model, state);
	                }, 33);
	            }
	            if (state !== states.PAUSED && utils.hasClass(_playerElement, 'jw-flag-controls-hidden')) {
	                utils.removeClass(_playerElement, 'jw-flag-controls-hidden');
	            }
	        }
	
	        function _stateUpdate(model, state) {
	
	            utils.toggleClass(_playerElement, 'jw-flag-dragging', model.get('scrubbing'));
	
	            _updateStateClass();
	
	            // cast.display
	            if (_isCasting()) {
	                utils.addClass(_videoLayer, 'jw-media-show');
	                return;
	            }
	            // player display
	            switch (state) {
	                case states.PLAYING:
	                    _resizeMedia();
	                    break;
	                case states.PAUSED:
	                    _userActivity();
	                    break;
	            }
	        }
	
	        function _dragging(model) {
	            _stateHandler(model, model.get('state'));
	        }
	
	        function _resizeAspectModeCaptions() {
	            var aspectRatioContainer = _playerElement.getElementsByClassName('jw-aspect')[0];
	            _captionsRenderer.setContainerHeight(aspectRatioContainer.offsetHeight);
	        }
	
	        function createDisplayContainer() {
	          var displayContainer = new DisplayContainer();
	          var rewindDisplayIcon = new RewindDisplayIcon(_model, _api);
	          var playDisplayIcon = createPlayDisplayIcon();
	          var nextDisplayIcon = new NextDisplayIcon(_model, _api);
	
	          displayContainer.addButton(rewindDisplayIcon);
	          displayContainer.addButton(playDisplayIcon);
	          displayContainer.addButton(nextDisplayIcon);
	
	          return displayContainer.element();
	        }
	
	        function createPlayDisplayIcon() {
	          var playDisplayIcon = new PlayDisplayIcon(_model);
	          //toggle playback
	          playDisplayIcon.on('click', function() {
	              forward({type : events.JWPLAYER_DISPLAY_CLICK});
	              _api.play({reason: 'interaction'});
	          });
	          playDisplayIcon.on('tap', function() {
	              forward({type : events.JWPLAYER_DISPLAY_CLICK});
	              _touchHandler(true);
	          });
	
	          // make playDisplayIcon clickthrough on chrome for flash to avoid power safe throttle
	          if (utils.isChrome() && !utils.isMobile()) {
	              playDisplayIcon.el.addEventListener('mousedown', function() {
	                  var provider = _model.getVideo();
	                  var isFlash = (provider && provider.getName().name.indexOf('flash') === 0);
	
	                  if (!isFlash) {
	                      return;
	                  }
	
	                  var resetPointerEvents = function() {
	                      document.removeEventListener('mouseup', resetPointerEvents);
	                      playDisplayIcon.el.style.pointerEvents = 'auto';
	                  };
	
	                  this.style.pointerEvents = 'none';
	                  document.addEventListener('mouseup', resetPointerEvents);
	              });
	          }
	
	          return playDisplayIcon;
	
	        }
	
	        this.setupInstream = function(instreamModel) {
	            this.instreamModel = _instreamModel = instreamModel;
	            _instreamModel.on('change:controls', _onChangeControls, this);
	            _instreamModel.on('change:state', _stateHandler, this);
	
	            utils.addClass(_playerElement, 'jw-flag-ads');
	
	            // trigger _userActivity to display the UI temporarily for the start of the ad
	            _userActivity();
	        };
	
	        this.setAltText = function(text) {
	            _controlbar.setAltText(text);
	        };
	
	        this.destroyInstream = function() {
	            if (_instreamModel) {
	                _instreamModel.off(null, null, this);
	                _instreamModel = null;
	            }
	            this.setAltText('');
	            utils.removeClass(_playerElement, ['jw-flag-ads', 'jw-flag-ads-hide-controls']);
	            _model.set('hideAdsControls', false);
	            if (_model.getVideo) {
	                var provider = _model.getVideo();
	                provider.setContainer(_videoLayer);
	            }
	            _setLiveMode(_model, _model.get('duration'));
	            // reset display click handler
	            _displayClickHandler.revertAlternateClickHandlers();
	        };
	
	        this.addCues = function(cues) {
	            if (_controlbar) {
	                _controlbar.addCues(cues);
	            }
	        };
	
	        this.clickHandler = function() {
	            return _displayClickHandler;
	        };
	
	        this.controlsContainer = function() {
	            return _controlsLayer;
	        };
	
	        this.getContainer = this.element = function() {
	            return _playerElement;
	        };
	
	        this.getSafeRegion = function(includeCB) {
	            var bounds = {
	                x: 0,
	                y: 0,
	                width : _model.get('containerWidth') || 0,
	                height : _model.get('containerHeight') || 0
	            };
	
	            // If we are using a dock, subtract that from the top
	            var dockButtons = _model.get('dock');
	            if (dockButtons && dockButtons.length && _model.get('controls')) {
	                bounds.y = _dock.element().clientHeight;
	                bounds.height -= bounds.y;
	            }
	
	            // Subtract controlbar from the bottom when using one
	            includeCB = includeCB || !utils.exists(includeCB);
	            if (includeCB && _model.get('controls')) {
	                bounds.height -= _controlbar.element().clientHeight;
	            }
	
	            return bounds;
	        };
	
	        this.setCaptions = function(captionsStyle) {
	            _captionsRenderer.clear();
	            _captionsRenderer.setup(_model.get('id'), captionsStyle);
	            _captionsRenderer.resize();
	        };
	
	        this.destroy = function() {
	            clearTimeout(_previewDisplayStateTimeout);
	            clearTimeout(_resizeMediaTimeout);
	            clearTimeout(_controlsTimeout);
	            window.removeEventListener('resize', _responsiveListener);
	            window.removeEventListener('orientationchange', _responsiveListener);
	            for (var i = DOCUMENT_FULLSCREEN_EVENTS.length; i--;) {
	                document.removeEventListener(DOCUMENT_FULLSCREEN_EVENTS[i], _fullscreenChangeHandler, false);
	            }
	            if (_model.mediaController) {
	                _model.mediaController.off('fullscreenchange', _fullscreenChangeHandler);
	            }
	            _playerElement.removeEventListener('keydown', handleKeydown, false);
	            if (_rightClickMenu) {
	                _rightClickMenu.destroy();
	            }
	            if (_castDisplay) {
	                _model.off('change:state', _castDisplay.statusDelegate);
	                _castDisplay.destroy();
	                _castDisplay = null;
	            }
	            if (_instreamModel) {
	                this.destroyInstream();
	            }
	            if (_logo) {
	                _logo.destroy();
	            }
	            utils.clearCss(_model.get('id'));
	        };
	    };
	
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 117 */
/*!***********************************!*\
  !*** ./src/js/view/controlbar.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/constants */ 65),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! view/components/slider */ 118),
	    __webpack_require__(/*! view/components/timeslider */ 141),
	    __webpack_require__(/*! view/components/menu */ 145),
	    __webpack_require__(/*! view/components/volumetooltip */ 147),
	    __webpack_require__(/*! view/components/button */ 148)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, _, Events, Constants, UI, Slider, TimeSlider, Menu, VolumeTooltip, button) {
	
	    function text(name, role) {
	        var element = document.createElement('span');
	        element.className = 'jw-text jw-reset ' + name;
	        if (role) {
	            element.setAttribute('role', role);
	        }
	        return element;
	    }
	
	    function menu(name, ariaText) {
	        return new Menu(name, ariaText);
	    }
	
	    function castButton(castToggle, localization) {
	        if (!utils.isChrome() || utils.isIOS()) {
	            return button('jw-icon-airplay jw-off', castToggle, localization.airplay);
	        }
	
	        var castButton = document.createElement('button', 'google-cast-button');
	        var element = document.createElement('div');
	        var ariaText = localization.cast;
	
	        castButton.className = 'jw-button-color jw-icon-inline';
	        element.className = 'jw-reset jw-icon-cast';
	        element.style.display = 'none';
	        element.style.cursor = 'pointer';
	        element.setAttribute('role', 'button');
	        element.setAttribute('tabindex', '0');
	        if (ariaText) {
	            element.setAttribute('aria-label', ariaText);
	        }
	        element.appendChild(castButton);
	
	        return {
	            element: function() {
	                return element;
	            },
	            toggle: function(m) {
	                if (m) {
	                    this.show();
	                } else {
	                    this.hide();
	                }
	            },
	            show: function() {
	                element.style.display = '';
	            },
	            hide: function() {
	                element.style.display = 'none';
	            },
	            button: castButton
	        };
	    }
	
	    function reasonInteraction() {
	        return {reason: 'interaction'};
	    }
	
	    function buildGroup(group, elements) {
	        var elem = document.createElement('div');
	        elem.className = 'jw-group jw-controlbar-' + group+'-group jw-reset';
	
	        _.each(elements, function(e) {
	            if (e.element) {
	                e = e.element();
	            }
	            elem.appendChild(e);
	        });
	
	        return elem;
	    }
	
	    function Controlbar(_api, _model) {
	        this._api = _api;
	        this._model = _model;
	        this._isMobile = utils.isMobile();
	        this._localization = this._model.get('localization');
	        this.setup();
	    }
	
	    _.extend(Controlbar.prototype, Events, {
	
	        setup : function() {
	            this.build();
	            this.initialize();
	        },
	
	        build : function() {
	            var timeSlider = new TimeSlider(this._model, this._api),
	                volumeSlider,
	                volumeTooltip,
	                muteButton;
	
	            var play = this._localization.play;
	            var next = this._localization.next;
	            var vol = this._localization.volume;
	            var rewind = this._localization.rewind;
	
	            // Do not initialize volume slider or tooltip on mobile
	            if (!this._isMobile) {
	                volumeSlider = new Slider('jw-slider-volume', 'horizontal');//, vol);
	                volumeTooltip = new VolumeTooltip(this._model, 'jw-icon-volume', vol);
	            }
	            // Do not show the volume toggle in the mobile SDKs or <iOS10
	            if (!this._model.get('sdkplatform') && !(utils.isIOS(8) || utils.isIOS(9))) {
	                muteButton = button('jw-icon-volume', this._api.setMute, vol);
	            }
	
	            this.elements = {
	                alt: text('jw-text-alt', 'status'),
	                play: button('jw-icon-playback', this._api.play.bind(this, reasonInteraction()), play),
	                rewind: button('jw-icon-rewind', this.rewind.bind(this), rewind),
	                next: button('jw-icon-next', null, next), // the click/tap event listener is in the nextup tooltip
	                elapsed: text('jw-text-elapsed', 'timer'),
	                countdown: text('jw-text-countdown', 'timer'),
	                time: timeSlider,
	                duration: text('jw-text-duration', 'timer'),
	                durationLeft: text('jw-text-duration', 'timer'),
	                hd: menu('jw-icon-hd', this._localization.hd),
	                cc: menu('jw-icon-cc', this._localization.cc),
	                audiotracks: menu('jw-icon-audio-tracks', this._localization.audioTracks),
	                mute: muteButton,
	                volume: volumeSlider,
	                volumetooltip: volumeTooltip,
	                cast: castButton(this._api.castToggle, this._localization),
	                fullscreen: button('jw-icon-fullscreen', this._api.setFullscreen, this._localization.fullscreen)
	            };
	
	            this.layout = {
	                left: [
	                    this.elements.play,
	                    this.elements.rewind,
	                    this.elements.elapsed,
	                    this.elements.durationLeft,
	                    this.elements.countdown
	                ],
	                center: [
	                    this.elements.time,
	                    this.elements.alt
	                ],
	                right: [
	                    this.elements.duration,
	                    this.elements.next,
	                    this.elements.hd,
	                    this.elements.cc,
	                    this.elements.audiotracks,
	                    this.elements.mute,
	                    this.elements.cast,
	                    this.elements.volume,
	                    this.elements.volumetooltip,
	                    this.elements.fullscreen
	                ]
	            };
	
	            this.menus = _.compact([
	                this.elements.hd,
	                this.elements.cc,
	                this.elements.audiotracks,
	                this.elements.volumetooltip
	            ]);
	
	            // Remove undefined layout elements.  They are invalid for the current platform.
	            // (e.g. volume and volumetooltip on mobile)
	            this.layout.left = _.compact(this.layout.left);
	            this.layout.center = _.compact(this.layout.center);
	            this.layout.right = _.compact(this.layout.right);
	
	            this.el = document.createElement('div');
	            this.el.className = 'jw-controlbar jw-background-color jw-reset';
	
	            this.elements.left = buildGroup('left', this.layout.left);
	            this.elements.center = buildGroup('center', this.layout.center);
	            this.elements.right = buildGroup('right', this.layout.right);
	
	            this.el.appendChild(this.elements.left);
	            this.el.appendChild(this.elements.center);
	            this.el.appendChild(this.elements.right);
	
	        },
	
	        initialize : function() {
	            // Initial State
	            this.elements.play.show();
	            this.elements.fullscreen.show();
	            if(this.elements.mute){
	                this.elements.mute.show();
	            }
	            this.onVolume(this._model, this._model.get('volume'));
	            this.onPlaylistItem();
	            this.onMediaModel(this._model, this._model.get('mediaModel'));
	            this.onCastAvailable(this._model, this._model.get('castAvailable'));
	            this.onCastActive(this._model, this._model.get('castActive'));
	            this.onCaptionsList(this._model, this._model.get('captionsList'));
	
	            // Listen for model changes
	            this._model.on('change:volume', this.onVolume, this);
	            this._model.on('change:mute', this.onMute, this);
	            this._model.on('change:playlistItem', this.onPlaylistItem, this);
	            this._model.on('change:mediaModel', this.onMediaModel, this);
	            this._model.on('change:castAvailable', this.onCastAvailable, this);
	            this._model.on('change:castActive', this.onCastActive, this);
	            this._model.on('change:duration', this.onDuration, this);
	            this._model.on('change:durationLeft', this.onDuration, this);
	            this._model.on('change:position', this.onElapsed, this);
	            this._model.on('change:fullscreen', this.onFullscreen, this);
	            this._model.on('change:captionsList', this.onCaptionsList, this);
	            this._model.on('change:captionsIndex', this.onCaptionsIndex, this);
	            this._model.on('change:streamType', this.onStreamTypeChange, this);
	
	            // Event listeners
	
	            // Volume sliders do not exist on mobile so don't assign listeners to them.
	            if(this.elements.volume) {
	                this.elements.volume.on('update', function (pct) {
	                    var val = pct.percentage;
	                    this._api.setVolume(val);
	                }, this);
	            }
	            if(this.elements.volumetooltip) {
	                this.elements.volumetooltip.on('update', function(pct) {
	                    var val = pct.percentage;
	                    this._api.setVolume(val);
	                }, this);
	                this.elements.volumetooltip.on('toggleValue', function(){
	                    this._api.setMute();
	                }, this);
	            }
	
	            if (this.elements.cast.button) {
	                new UI(this.elements.cast.button).on('click tap', function () {
	                    this._model.set('castClicked', true);
	                }, this);
	            }
	
	            this.elements.hd.on('select', function(value){
	                this._model.getVideo().setCurrentQuality(value);
	            }, this);
	            this.elements.hd.on('toggleValue', function(){
	                this._model.getVideo().setCurrentQuality((this._model.getVideo().getCurrentQuality() === 0) ? 1 : 0);
	            }, this);
	
	            this.elements.cc.on('select', function(value) {
	                this._api.setCurrentCaptions(value);
	            }, this);
	            this.elements.cc.on('toggleValue', function() {
	                var index = this._model.get('captionsIndex');
	                this._api.setCurrentCaptions(index ? 0 : 1);
	            }, this);
	
	            this.elements.audiotracks.on('select', function(value){
	                this._model.getVideo().setCurrentAudioTrack(value);
	            }, this);
	
	            new UI(this.elements.duration).on('click tap', function(){
	                if (this._model.get('streamType') === 'DVR') {
	                    // Seek to "Live" position within live buffer, but not before current position
	                    var currentPosition = this._model.get('position');
	                    this._api.seek(Math.max(Constants.dvrSeekLimit, currentPosition), reasonInteraction());
	                }
	            }, this);
	
	            new UI(this.elements.durationLeft).on('click tap', function(){
	                if (this._model.get('streamType') === 'DVR') {
	                    // Seek to "Live" position within live buffer, but not before current position
	                    var currentPosition = this._model.get('position');
	                    this._api.seek(Math.max(Constants.dvrSeekLimit, currentPosition));
	                }
	            }, this);
	
	            // When the control bar is interacted with, trigger a user action event
	            new UI(this.el).on('click tap drag', function(){ this.trigger('userAction'); }, this);
	
	            _.each(this.menus, function(ele){
	                ele.on('open-tooltip', this.closeMenus, this);
	            }, this);
	        },
	
	        onCaptionsList: function(model, tracks) {
	            var index = model.get('captionsIndex');
	            this.elements.cc.setup(tracks, index, {isToggle: true});
	        },
	        onCaptionsIndex: function(model, index) {
	            this.elements.cc.selectItem(index);
	        },
	        onPlaylistItem : function() {
	            this.elements.time.updateBuffer(0);
	            this.elements.time.render(0);
	            this.elements.duration.innerHTML = '00:00';
	            this.elements.durationLeft.innerHTML = '00:00';
	            this.elements.elapsed.innerHTML = '00:00';
	            this.elements.countdown.innerHTML = '00:00';
	
	            this.elements.audiotracks.setup();
	        },
	
	        onMediaModel : function(model, mediaModel) {
	            mediaModel.on('change:levels', function(model, levels) {
	                this.elements.hd.setup(levels, model.get('currentLevel'));
	            }, this);
	            mediaModel.on('change:currentLevel', function(model, level) {
	                this.elements.hd.selectItem(level);
	            }, this);
	            mediaModel.on('change:audioTracks', function(model, audioTracks) {
	                var list = _.map(audioTracks, function(track) { return { label : track.name }; });
	                this.elements.audiotracks.setup(list, model.get('currentAudioTrack'), {toggle: false});
	            }, this);
	            mediaModel.on('change:currentAudioTrack', function(model, currentAudioTrack) {
	                this.elements.audiotracks.selectItem(currentAudioTrack);
	            }, this);
	        },
	        onVolume : function(model, pct) {
	            this.renderVolume(model.get('mute'), pct);
	        },
	        onMute : function(model, muted) {
	            this.renderVolume(muted, model.get('volume'));
	        },
	        renderVolume : function(muted, vol) {
	            // mute, volume, and volumetooltip do not exist on mobile devices.
	            if(this.elements.mute) {
	                utils.toggleClass(this.elements.mute.element(), 'jw-off', muted);
	            }
	            if(this.elements.volume) {
	                this.elements.volume.render(muted ? 0 : vol);
	            }
	            if(this.elements.volumetooltip){
	                this.elements.volumetooltip.volumeSlider.render(muted ? 0 : vol);
	                utils.toggleClass(this.elements.volumetooltip.element(), 'jw-off', muted);
	            }
	        },
	        onCastAvailable: function(model, val) {
	            this.elements.cast.toggle(val);
	        },
	        onCastActive: function(model, val) {
	            this.elements.fullscreen.toggle(!val);
	            if (this.elements.cast.button) {
	                utils.toggleClass(this.elements.cast.button, 'jw-off', !val);
	            }
	        },
	        onElapsed: function(model, val) {
	            var elapsedTime,
	                countdownTime;
	            var duration = model.get('duration');
	            if (model.get('streamType') === 'DVR') {
	                elapsedTime = countdownTime = '-' + utils.timeFormat(-duration);
	            } else {
	                elapsedTime = utils.timeFormat(val);
	                countdownTime = utils.timeFormat(duration - val);
	            }
	            this.elements.elapsed.innerHTML = elapsedTime;
	            this.elements.countdown.innerHTML = countdownTime;
	        },
	        onDuration : function(model, val) {
	            var totalTime;
	            if (model.get('streamType') === 'DVR') {
	                totalTime = 'Live';
	            } else {
	                totalTime = utils.timeFormat(val);
	            }
	            this.elements.duration.innerHTML = totalTime;
	            this.elements.durationLeft.innerHTML = totalTime;
	        },
	        onFullscreen : function(model, val) {
	            utils.toggleClass(this.elements.fullscreen.element(), 'jw-off', val);
	        },
	
	        element: function() {
	            return this.el;
	        },
	        setAltText : function(altText) {
	            this.elements.alt.innerHTML = altText;
	        },
	        addCues : function(cues) {
	            if (this.elements.time) {
	                _.each(cues, function(ele){
	                    this.elements.time.addCue(ele);
	                }, this);
	                this.elements.time.drawCues();
	            }
	        },
	        // Close menus if it has no event.  Otherwise close all but the event's target.
	        closeMenus : function(evt) {
	            _.each(this.menus, function(ele){
	                if(!evt || evt.target !== ele.el) {
	                    ele.closeTooltip(evt);
	                }
	            });
	        },
	        hideComponents : function() {
	            this.closeMenus();
	        },
	        rewind : function() {
	            var currentPosition = this._model.get('position'),
	                duration = this._model.get('duration'),
	                rewindPosition = currentPosition - 10,
	                startPosition = 0;
	
	            // duration is negative in DVR mode
	            if (this._model.get('streamType') === 'DVR') {
	                startPosition = duration;
	            }
	            // Seek 10s back. Seek value should be >= 0 in VOD mode and >= (negative) duration in DVR mode
	            this._api.seek(Math.max(rewindPosition, startPosition), reasonInteraction());
	        },
	        onStreamTypeChange : function(model) {
	            // Hide rewind button when in LIVE mode
	            var streamType = model.get('streamType');
	            this.elements.rewind.toggle(streamType !== 'LIVE');
	            if (streamType === 'DVR') {
	                this.elements.duration.innerHTML = 'Live';
	                this.elements.durationLeft.innerHTML = 'Live';
	            }
	        }
	    });
	
	    return Controlbar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 118 */
/*!******************************************!*\
  !*** ./src/js/view/components/slider.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/extendable */ 119),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! templates/slider.html */ 121),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Extendable, UI, SliderTemplate, utils) {
	
	    var getRailBounds = function(elementRail) {
	        var bounds = utils.bounds(elementRail);
	        // Partial workaround of Android 'inert-visual-viewport'
	        // https://bugs.chromium.org/p/chromium/issues/detail?id=489206
	        var pageXOffset = window.pageXOffset;
	        if (pageXOffset && utils.isAndroid() && document.body.parentElement.getBoundingClientRect().left >= 0) {
	            bounds.left -= pageXOffset;
	            bounds.right -= pageXOffset;
	        }
	        return bounds;
	    };
	
	    var Slider = Extendable.extend({
	        constructor : function(className, orientation) {
	            this.className = className + ' jw-background-color jw-reset';
	            this.orientation = orientation;
	
	            this.dragStartListener = this.dragStart.bind(this);
	            this.dragMoveListener = this.dragMove.bind(this);
	            this.dragEndListener = this.dragEnd.bind(this);
	
	            this.tapListener = this.tap.bind(this);
	
	            this.setup();
	        },
	        setup : function() {
	            var obj = {
	                'default' : this['default'],
	                className : this.className,
	                orientation : 'jw-slider-' + this.orientation
	            };
	            this.el = utils.createElement(SliderTemplate(obj));
	
	            this.elementRail = this.el.getElementsByClassName('jw-slider-container')[0];
	            this.elementBuffer = this.el.getElementsByClassName('jw-buffer')[0];
	            this.elementProgress = this.el.getElementsByClassName('jw-progress')[0];
	            this.elementThumb = this.el.getElementsByClassName('jw-knob')[0];
	
	            this.userInteract = new UI(this.element(), {preventScrolling : true});
	
	            this.userInteract.on('dragStart', this.dragStartListener);
	            this.userInteract.on('drag', this.dragMoveListener);
	            this.userInteract.on('dragEnd', this.dragEndListener);
	
	            this.userInteract.on('tap click', this.tapListener);
	        },
	        dragStart : function() {
	            this.trigger('dragStart');
	            this.railBounds = getRailBounds(this.elementRail);
	        },
	        dragEnd : function(evt) {
	            this.dragMove(evt);
	            this.trigger('dragEnd');
	        },
	        dragMove : function(evt) {
	            var dimension,
	                bounds = this.railBounds = (this.railBounds) ? this.railBounds : getRailBounds(this.elementRail),
	                percentage;
	
	            if (this.orientation === 'horizontal'){
	                dimension = evt.pageX;
	                if (dimension < bounds.left) {
	                    percentage = 0;
	                } else if (dimension > bounds.right) {
	                    percentage = 100;
	                } else {
	                    percentage = utils.between((dimension-bounds.left)/bounds.width, 0, 1) * 100;
	                }
	            } else {
	                dimension = evt.pageY;
	                if (dimension >= bounds.bottom) {
	                    percentage = 0;
	                } else if (dimension <= bounds.top) {
	                    percentage = 100;
	                } else {
	                    percentage = utils.between((bounds.height-(dimension-bounds.top))/bounds.height, 0, 1) * 100;
	                }
	            }
	
	            var updatedPercent = this.limit(percentage);
	            this.render(updatedPercent);
	            this.update(updatedPercent);
	
	
	            return false;
	        },
	        tap : function(evt){
	            this.railBounds = getRailBounds(this.elementRail);
	            this.dragMove(evt);
	        },
	
	        limit : function(percentage) {
	            // modules that extend Slider can set limits on the percentage (TimeSlider)
	            return percentage;
	        },
	        update : function(percentage) {
	            this.trigger('update', { percentage : percentage });
	        },
	        render : function(percentage) {
	            percentage = Math.max(0, Math.min(percentage, 100));
	
	            if(this.orientation === 'horizontal'){
	                this.elementThumb.style.left = percentage + '%';
	                this.elementProgress.style.width = percentage + '%';
	            } else {
	                this.elementThumb.style.bottom = percentage + '%';
	                this.elementProgress.style.height = percentage + '%';
	            }
	        },
	        updateBuffer : function(percentage) {
	            this.elementBuffer.style.width = percentage + '%';
	        },
	
	        element : function() {
	            return this.el;
	        }
	    });
	
	    return Slider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 119 */
/*!************************************!*\
  !*** ./src/js/utils/extendable.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Events, _) {
	
	    // Helper function to correctly set up the prototype chain, for subclasses.
	    // Similar to `goog.inherits`, but uses a hash of prototype properties and
	    // class properties to be extended.
	    var extend = function (protoProps, staticProps) {
	        var parent = this;
	        var child;
	
	        // The constructor function for the new subclass is either defined by you
	        // (the "constructor" property in your `extend` definition), or defaulted
	        // by us to simply call the parent's constructor.
	        if (protoProps && _.has(protoProps, 'constructor')) {
	            child = protoProps.constructor;
	        } else {
	            child = function () {
	                return parent.apply(this, arguments);
	            };
	        }
	
	        // Add static properties to the constructor function, if supplied.
	        _.extend(child, parent, staticProps);
	
	        // Set the prototype chain to inherit from `parent`, without calling
	        // `parent`'s constructor function.
	        var Surrogate = function () {
	            this.constructor = child;
	        };
	        Surrogate.prototype = parent.prototype;
	        child.prototype = new Surrogate();
	
	        // Add prototype properties (instance properties) to the subclass,
	        // if supplied.
	        if (protoProps)  { _.extend(child.prototype, protoProps); }
	
	        // Set a convenience property in case the parent's prototype is needed
	        // later.
	        child.__super__ = parent.prototype;
	
	        return child;
	    };
	
	
	    function Extendable() {}
	    Extendable.extend = extend;
	    _.extend(Extendable.prototype, Events);
	
	    return Extendable;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 120 */
/*!****************************!*\
  !*** ./src/js/utils/ui.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Events, events, _, utils) {
	    var JW_TOUCH_EVENTS = events.touchEvents;
	    var _supportsPointerEvents = ('PointerEvent' in window);
	    var _supportsTouchEvents = ('ontouchstart' in window);
	    var _useMouseEvents = !_supportsPointerEvents && !(_supportsTouchEvents && utils.isMobile());
	    var _isOSXFirefox = utils.isFF() && utils.isOSX();
	
	    function getCoord(e, c) {
	        return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
	    }
	
	    function isRightClick(evt) {
	        var e = evt || window.event;
	
	        if (!(evt instanceof MouseEvent)) {
	            return false;
	        }
	
	        if ('which' in e) {
	            // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
	            return (e.which === 3);
	        } else if ('button' in e) {
	            // IE and Opera
	            return (e.button === 2);
	        }
	
	        return false;
	    }
	
	    function normalizeUIEvent(type, srcEvent, target) {
	        var source;
	        if (srcEvent instanceof MouseEvent || (!srcEvent.touches && !srcEvent.changedTouches)) {
	            source = srcEvent;
	        } else {
	            if (srcEvent.touches && srcEvent.touches.length) {
	                source = srcEvent.touches[0];
	            } else {
	                source = srcEvent.changedTouches[0];
	            }
	        }
	        return {
	            type: type,
	            target: srcEvent.target,
	            currentTarget: target,
	            pageX: source.pageX,
	            pageY: source.pageY
	        };
	    }
	
	    // Preventdefault to prevent click events
	    function preventDefault(evt) {
	        // Because sendEvent from utils.eventdispatcher clones evt objects instead of passing them
	        //  we cannot call evt.preventDefault() on them
	        if (! (evt instanceof MouseEvent) && ! (evt instanceof window.TouchEvent)) {
	            return;
	        }
	        if (evt.preventManipulation) {
	            evt.preventManipulation();
	        }
	        // prevent scrolling
	        if (evt.preventDefault) {
	            evt.preventDefault();
	        }
	    }
	
	    var UI = function (elem, options) {
	        var _elem = elem,
	            _hasMoved = false,
	            _startX = 0,
	            _startY = 0,
	            _lastClickTime = 0,
	            _doubleClickDelay = 300,
	            _touchListenerTarget,
	            _pointerId;
	
	        options = options || {};
	
	        // If its not mobile, add mouse listener.  Add touch listeners so touch devices that aren't Android or iOS
	        // (windows phones) still get listeners just in case they want to use them.
	        if (_supportsPointerEvents) {
	            elem.addEventListener('pointerdown', interactStartHandler);
	            if (options.useHover) {
	                elem.addEventListener('pointerover', overHandler);
	                elem.addEventListener('pointerout', outHandler);
	            }
	            if (options.useMove) {
	                elem.addEventListener('pointermove', moveHandler);
	            }
	        } else {
	            if (_useMouseEvents) {
	                elem.addEventListener('mousedown', interactStartHandler);
	                if (options.useHover) {
	                    elem.addEventListener('mouseover', overHandler);
	                    elem.addEventListener('mouseout', outHandler);
	                }
	                if (options.useMove) {
	                    elem.addEventListener('mousemove', moveHandler);
	                }
	            }
	
	            // Always add this, in case we don't properly identify the device as mobile
	            elem.addEventListener('touchstart', interactStartHandler);
	        }
	
	        // overHandler and outHandler not assigned in touch situations
	        function overHandler(evt) {
	            if (evt.pointerType !== 'touch') {
	                triggerEvent(JW_TOUCH_EVENTS.OVER, evt);
	            }
	        }
	
	        function moveHandler(evt) {
	            if (evt.pointerType !== 'touch') {
	                triggerEvent(JW_TOUCH_EVENTS.MOVE, evt);
	            }
	        }
	
	        function outHandler(evt) {
	            // elementFromPoint to handle an issue where setPointerCapture is causing a pointerout event
	            if (_useMouseEvents || (_supportsPointerEvents && evt.pointerType !== 'touch' &&
	                !elem.contains(document.elementFromPoint(evt.x, evt.y)))) {
	                triggerEvent(JW_TOUCH_EVENTS.OUT, evt);
	            }
	        }
	
	        function setEventListener(element, eventName, callback) {
	            element.removeEventListener(eventName, callback);
	            element.addEventListener(eventName, callback);
	        }
	
	        function interactStartHandler(evt) {
	            _touchListenerTarget = evt.target;
	            _startX = getCoord(evt, 'X');
	            _startY = getCoord(evt, 'Y');
	
	            if (!isRightClick(evt)) {
	
	                if (evt.type === 'pointerdown' && evt.isPrimary) {
	                    if (options.preventScrolling) {
	                        _pointerId = evt.pointerId;
	                        elem.setPointerCapture(_pointerId);
	                    }
	                    setEventListener(elem, 'pointermove', interactDragHandler);
	                    setEventListener(elem, 'pointercancel', interactEndHandler);
	
	                    // Listen for mouseup after mouse pointer down because pointerup doesn't fire on swf objects
	                    if (evt.pointerType === 'mouse' && _touchListenerTarget.nodeName === 'OBJECT') {
	                        setEventListener(document, 'mouseup', interactEndHandler);
	                    } else {
	                        setEventListener(elem, 'pointerup', interactEndHandler);
	                    }
	                } else if (evt.type === 'mousedown') {
	                    setEventListener(document, 'mousemove', interactDragHandler);
	
	                    // Handle clicks in OSX Firefox over Flash 'object'
	                    if (_isOSXFirefox && evt.target.nodeName.toLowerCase() === 'object') {
	                        setEventListener(elem, 'click', interactEndHandler);
	                    } else {
	                        setEventListener(document, 'mouseup', interactEndHandler);
	                    }
	                } else if (evt.type === 'touchstart') {
	                    setEventListener(_touchListenerTarget, 'touchmove', interactDragHandler);
	                    setEventListener(_touchListenerTarget, 'touchcancel', interactEndHandler);
	                    setEventListener(_touchListenerTarget, 'touchend', interactEndHandler);
	                }
	
	                // Prevent scrolling the screen dragging while dragging on mobile.
	                if (options.preventScrolling) {
	                    preventDefault(evt);
	                }
	            }
	        }
	
	        function interactDragHandler(evt) {
	            var movementThreshhold = 6;
	
	            if (_hasMoved) {
	                triggerEvent(JW_TOUCH_EVENTS.DRAG, evt);
	            } else {
	                var endX = getCoord(evt, 'X');
	                var endY = getCoord(evt, 'Y');
	                var moveX = endX - _startX;
	                var moveY = endY - _startY;
	                if (moveX * moveX + moveY * moveY > movementThreshhold * movementThreshhold) {
	                    triggerEvent(JW_TOUCH_EVENTS.DRAG_START, evt);
	                    _hasMoved = true;
	                    triggerEvent(JW_TOUCH_EVENTS.DRAG, evt);
	                }
	            }
	
	            // Prevent scrolling the screen dragging while dragging on mobile.
	            if (options.preventScrolling) {
	                preventDefault(evt);
	            }
	        }
	
	        function interactEndHandler(evt) {
	            var isPointerEvent = (evt.type === 'pointerup' || evt.type === 'pointercancel');
	            if (isPointerEvent && options.preventScrolling) {
	                elem.releasePointerCapture(_pointerId);
	            }
	            elem.removeEventListener('pointermove', interactDragHandler);
	            elem.removeEventListener('pointercancel', interactEndHandler);
	            elem.removeEventListener('pointerup', interactEndHandler);
	            document.removeEventListener('mousemove', interactDragHandler);
	            document.removeEventListener('mouseup', interactEndHandler);
	            _touchListenerTarget.removeEventListener('touchmove', interactDragHandler);
	            _touchListenerTarget.removeEventListener('touchcancel', interactEndHandler);
	            _touchListenerTarget.removeEventListener('touchend', interactEndHandler);
	
	            if (_hasMoved) {
	                triggerEvent(JW_TOUCH_EVENTS.DRAG_END, evt);
	            } else {
	                // Skip if we're not directly selecting the target and if its a cancel
	                if ((!options.directSelect || evt.target === elem) && evt.type.indexOf('cancel') === -1) {
	
	                    if (evt.type === 'mouseup' || evt.type === 'click' || isPointerEvent && evt.pointerType === 'mouse') {
	                        triggerEvent(JW_TOUCH_EVENTS.CLICK, evt);
	                    } else {
	                        triggerEvent(JW_TOUCH_EVENTS.TAP, evt);
	                        if (evt.type === 'touchend') {
	                            // preventDefault to not dispatch the 300ms delayed click after a tap
	                            preventDefault(evt);
	                        }
	                    }
	                }
	            }
	
	            _touchListenerTarget = null;
	            _hasMoved = false;
	        }
	
	        var self = this;
	        function triggerEvent(type, srcEvent) {
	            var evt;
	            if (options.enableDoubleTap && (type === JW_TOUCH_EVENTS.CLICK || type === JW_TOUCH_EVENTS.TAP)) {
	                if (_.now() - _lastClickTime < _doubleClickDelay) {
	                    var doubleType = (type === JW_TOUCH_EVENTS.CLICK) ?
	                        JW_TOUCH_EVENTS.DOUBLE_CLICK : JW_TOUCH_EVENTS.DOUBLE_TAP;
	                    evt = normalizeUIEvent(doubleType, srcEvent, _elem);
	                    self.trigger(doubleType, evt);
	                    _lastClickTime = 0;
	                } else {
	                    _lastClickTime = _.now();
	                }
	            }
	            evt = normalizeUIEvent(type, srcEvent, _elem);
	            self.trigger(type, evt);
	        }
	
	        this.triggerEvent = triggerEvent;
	
	        this.destroy = function() {
	            elem.removeEventListener('touchstart', interactStartHandler);
	            elem.removeEventListener('mousedown', interactStartHandler);
	
	            if (_touchListenerTarget) {
	                _touchListenerTarget.removeEventListener('touchmove', interactDragHandler);
	                _touchListenerTarget.removeEventListener('touchcancel', interactEndHandler);
	                _touchListenerTarget.removeEventListener('touchend', interactEndHandler);
	                _touchListenerTarget = null;
	            }
	
	            if (_supportsPointerEvents) {
	                if (options.preventScrolling) {
	                    elem.releasePointerCapture(_pointerId);
	                }
	                elem.removeEventListener('pointerover', overHandler);
	                elem.removeEventListener('pointerdown', interactStartHandler);
	                elem.removeEventListener('pointermove', interactDragHandler);
	                elem.removeEventListener('pointermove', moveHandler);
	                elem.removeEventListener('pointercancel', interactEndHandler);
	                elem.removeEventListener('pointerout', outHandler);
	                elem.removeEventListener('pointerup', interactEndHandler);
	            }
	
	            elem.removeEventListener('click', interactEndHandler);
	            elem.removeEventListener('mouseover', overHandler);
	            elem.removeEventListener('mousemove', moveHandler);
	            elem.removeEventListener('mouseout', outHandler);
	            document.removeEventListener('mousemove', interactDragHandler);
	            document.removeEventListener('mouseup', interactEndHandler);
	        };
	
	        return this;
	    };
	
	    _.extend(UI.prototype, Events);
	
	    return UI;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 121 */
/*!***********************************!*\
  !*** ./src/templates/slider.html ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<div class=\""
	    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
	    + " "
	    + alias4(((helper = (helper = helpers.orientation || (depth0 != null ? depth0.orientation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"orientation","hash":{},"data":data}) : helper)))
	    + " jw-reset\" aria-hidden=\"true\">\n    <div class=\"jw-slider-container jw-reset\">\n        <div class=\"jw-rail jw-reset\"></div>\n        <div class=\"jw-buffer jw-reset\"></div>\n        <div class=\"jw-progress jw-reset\"></div>\n        <div class=\"jw-knob jw-reset\"></div>\n    </div>\n</div>";
	},"useData":true});

/***/ },
/* 122 */
/*!*********************************!*\
  !*** ./~/handlebars/runtime.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ 123)['default'];


/***/ },
/* 123 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars.runtime.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ 124);
	
	var base = _interopRequireWildcard(_handlebarsBase);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ 138);
	
	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
	
	var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ 126);
	
	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
	
	var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ 125);
	
	var Utils = _interopRequireWildcard(_handlebarsUtils);
	
	var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ 139);
	
	var runtime = _interopRequireWildcard(_handlebarsRuntime);
	
	var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ 140);
	
	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
	
	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();
	
	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;
	
	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };
	
	  return hb;
	}
	
	var inst = create();
	inst.create = create;
	
	_handlebarsNoConflict2['default'](inst);
	
	inst['default'] = inst;
	
	exports['default'] = inst;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ },
/* 124 */
/*!**************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/base.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(/*! ./utils */ 125);
	
	var _exception = __webpack_require__(/*! ./exception */ 126);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 127);
	
	var _decorators = __webpack_require__(/*! ./decorators */ 135);
	
	var _logger = __webpack_require__(/*! ./logger */ 137);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;
	
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};
	
	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';
	
	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};
	
	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}
	
	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,
	
	  logger: _logger2['default'],
	  log: _logger2['default'].log,
	
	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },
	
	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },
	
	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};
	
	var log = _logger2['default'].log;
	
	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFDeEIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjUnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIl19


/***/ },
/* 125 */
/*!***************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/utils.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};
	
	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;
	
	function escapeChar(chr) {
	  return escape[chr];
	}
	
	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	var toString = Object.prototype.toString;
	
	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;
	
	/* eslint-enable func-style */
	
	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};
	
	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	
	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }
	
	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }
	
	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}
	
	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}
	
	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}
	
	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}
	
	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ },
/* 126 */
/*!*******************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/exception.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
	
	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;
	
	    message += ' - ' + line + ':' + column;
	  }
	
	  var tmp = Error.prototype.constructor.call(this, message);
	
	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }
	
	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }
	
	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}
	
	Exception.prototype = new Error();
	
	exports['default'] = Exception;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztHQUN0QjtDQUNGOztBQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7cUJBRW5CLFNBQVMiLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgbGV0IGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIGxldCB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgaWYgKGxvYykge1xuICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ },
/* 127 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ 128);
	
	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
	
	var _helpersEach = __webpack_require__(/*! ./helpers/each */ 129);
	
	var _helpersEach2 = _interopRequireDefault(_helpersEach);
	
	var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ 130);
	
	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
	
	var _helpersIf = __webpack_require__(/*! ./helpers/if */ 131);
	
	var _helpersIf2 = _interopRequireDefault(_helpersIf);
	
	var _helpersLog = __webpack_require__(/*! ./helpers/log */ 132);
	
	var _helpersLog2 = _interopRequireDefault(_helpersLog);
	
	var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ 133);
	
	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
	
	var _helpersWith = __webpack_require__(/*! ./helpers/with */ 134);
	
	var _helpersWith2 = _interopRequireDefault(_helpersWith);
	
	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ },
/* 128 */
/*!**************************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 125);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;
	
	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }
	
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    }
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ },
/* 129 */
/*!**********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(/*! ../utils */ 125);
	
	var _exception = __webpack_require__(/*! ../exception */ 126);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }
	
	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;
	
	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }
	
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }
	
	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;
	
	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }
	
	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }
	
	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;
	
	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }
	
	    if (i === 0) {
	      ret = inverse(this);
	    }
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 130 */
/*!********************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _exception = __webpack_require__(/*! ../exception */ 126);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ },
/* 131 */
/*!********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 125);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }
	
	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });
	
	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 132 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }
	
	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;
	
	    instance.log.apply(instance, args);
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ },
/* 133 */
/*!************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 134 */
/*!**********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 125);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    var fn = options.fn;
	
	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }
	
	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 135 */
/*!********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/decorators.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ 136);
	
	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
	
	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ },
/* 136 */
/*!***************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 125);
	
	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }
	
	    props.partials[options.args[0]] = options.fn;
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 137 */
/*!****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/logger.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ./utils */ 125);
	
	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',
	
	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }
	
	    return level;
	  },
	
	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);
	
	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }
	
	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }
	
	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};
	
	exports['default'] = logger;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ },
/* 138 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';
	
	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}
	
	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};
	
	exports['default'] = SafeString;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ },
/* 139 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/runtime.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _utils = __webpack_require__(/*! ./utils */ 125);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _exception = __webpack_require__(/*! ./exception */ 126);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _base = __webpack_require__(/*! ./base */ 124);
	
	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;
	
	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}
	
	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }
	
	  templateSpec.main.decorator = templateSpec.main_d;
	
	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);
	
	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }
	
	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);
	
	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }
	
	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }
	
	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },
	
	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,
	
	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },
	
	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },
	
	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;
	
	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }
	
	      return obj;
	    },
	
	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };
	
	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var data = options.data;
	
	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }
	
	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;
	
	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);
	
	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };
	
	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }
	
	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}
	
	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }
	
	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }
	
	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);
	
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}
	
	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}
	
	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }
	
	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;
	
	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }
	
	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }
	
	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}
	
	function noop() {
	  return '';
	}
	
	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}
	
	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFNUMsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN2RCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdkI7S0FDRjs7QUFFRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEUsUUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDakMsYUFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RixZQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0QsUUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM1QixrQkFBTTtXQUNQOztBQUVELGVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztBQUNELGNBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZixNQUFNO0FBQ0wsWUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRywwREFBMEQsQ0FBQyxDQUFDO0tBQ2pIO0dBQ0Y7OztBQUdELE1BQUksU0FBUyxHQUFHO0FBQ2QsVUFBTSxFQUFFLGdCQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQ2xCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUM3RDtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFNBQUssRUFBRSxlQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFLLEtBQUssS0FBSyxNQUFNLEFBQUMsRUFBRTtBQUN6QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsUUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSTtBQUNqQixnQkFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO0dBQ3BDLENBQUM7O0FBRUYsV0FBUyxHQUFHLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDaEMsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsT0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzVDLFVBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsUUFBSSxNQUFNLFlBQUE7UUFDTixXQUFXLEdBQUcsWUFBWSxDQUFDLGNBQWMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQy9ELFFBQUksWUFBWSxDQUFDLFNBQVMsRUFBRTtBQUMxQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBTSxHQUFHLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO09BQzVGLE1BQU07QUFDTCxjQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNwQjtLQUNGOztBQUVELGFBQVMsSUFBSSxDQUFDLE9BQU8sZ0JBQWU7QUFDbEMsYUFBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3JIO0FBQ0QsUUFBSSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdEcsV0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQy9CO0FBQ0QsS0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRWpCLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDN0IsUUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDcEIsZUFBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVsRSxVQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7QUFDM0IsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUN0RTtBQUNELFVBQUksWUFBWSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFO0FBQ3pELGlCQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDNUU7S0FDRixNQUFNO0FBQ0wsZUFBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3BDLGVBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUN0QyxlQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDM0M7R0FDRixDQUFDOztBQUVGLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbEQsUUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQy9DLFlBQU0sMkJBQWMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUNELFFBQUksWUFBWSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQyxZQUFNLDJCQUFjLHlCQUF5QixDQUFDLENBQUM7S0FDaEQ7O0FBRUQsV0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDakYsQ0FBQztBQUNGLFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRU0sU0FBUyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDNUYsV0FBUyxJQUFJLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDakMsUUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFFBQUksTUFBTSxJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbkMsbUJBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQzs7QUFFRCxXQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQ2YsT0FBTyxFQUNQLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFDckMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQ3BCLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQ3hELGFBQWEsQ0FBQyxDQUFDO0dBQ3BCOztBQUVELE1BQUksR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOztBQUV6RSxNQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN4QyxNQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQztBQUM1QyxTQUFPLElBQUksQ0FBQztDQUNiOztBQUVNLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3hELE1BQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixRQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7QUFDckMsYUFBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDekMsTUFBTTtBQUNMLGFBQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQztHQUNGLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFOztBQUV6QyxXQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUN2QixXQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNyQztBQUNELFNBQU8sT0FBTyxDQUFDO0NBQ2hCOztBQUVNLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZELFNBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLE1BQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLFdBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7R0FDdkU7O0FBRUQsTUFBSSxZQUFZLFlBQUEsQ0FBQztBQUNqQixNQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDckMsV0FBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsZ0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7O0FBRTFELFFBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtBQUN6QixhQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlFO0dBQ0Y7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLFlBQVksRUFBRTtBQUN6QyxXQUFPLEdBQUcsWUFBWSxDQUFDO0dBQ3hCOztBQUVELE1BQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUN6QixVQUFNLDJCQUFjLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLENBQUM7R0FDNUUsTUFBTSxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7QUFDdEMsV0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xDO0NBQ0Y7O0FBRU0sU0FBUyxJQUFJLEdBQUc7QUFBRSxTQUFPLEVBQUUsQ0FBQztDQUFFOztBQUVyQyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQy9CLE1BQUksQ0FBQyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM5QixRQUFJLEdBQUcsSUFBSSxHQUFHLGtCQUFZLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyQyxRQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztHQUNyQjtBQUNELFNBQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUN6RSxNQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7QUFDaEIsUUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYiIsImZpbGUiOiJydW50aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcbmltcG9ydCB7IENPTVBJTEVSX1JFVklTSU9OLCBSRVZJU0lPTl9DSEFOR0VTLCBjcmVhdGVGcmFtZSB9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICBjb25zdCBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgICBjdXJyZW50UmV2aXNpb24gPSBDT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG4gICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcbiAgICAgIGNvbnN0IHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG4gICAgbGV0IHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIGxldCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICBjb25zdCBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbih2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICBsZXQgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIChwYXJhbSAhPT0gY29tbW9uKSkge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgbGV0IGRlcHRocyxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT09IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5kZWNvcmF0b3JzLCBlbnYuZGVjb3JhdG9ycyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT09IGRlcHRoc1swXSkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oY29udGFpbmVyLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLFxuICAgICAgICBvcHRpb25zLmRhdGEgfHwgZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksXG4gICAgICAgIGN1cnJlbnREZXB0aHMpO1xuICB9XG5cbiAgcHJvZyA9IGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcHJvZy5ibG9ja1BhcmFtcyA9IGRlY2xhcmVkQmxvY2tQYXJhbXMgfHwgMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG4gICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcbiAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcbiAgfVxuICByZXR1cm4gcGFydGlhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICBsZXQgcGFydGlhbEJsb2NrO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAocGFydGlhbEJsb2NrLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBwYXJ0aWFsQmxvY2sucGFydGlhbHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG4gICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuICcnOyB9XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cbiJdfQ==


/***/ },
/* 140 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 141 */
/*!**********************************************!*\
  !*** ./src/js/view/components/timeslider.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/constants */ 65),
	    __webpack_require__(/*! view/components/slider */ 118),
	    __webpack_require__(/*! view/components/tooltip */ 142),
	    __webpack_require__(/*! view/components/chapters.mixin */ 143),
	    __webpack_require__(/*! view/components/thumbnails.mixin */ 144)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils, Constants, Slider, Tooltip, ChaptersMixin, ThumbnailsMixin) {
	
	    var TimeTip = Tooltip.extend({
	        setup : function() {
	
	            this.text = document.createElement('span');
	            this.text.className = 'jw-text jw-reset';
	            this.img  = document.createElement('div');
	            this.img.className = 'jw-reset';
	
	            var wrapper = document.createElement('div');
	            wrapper.className = 'jw-time-tip jw-background-color jw-reset';
	            wrapper.appendChild(this.img);
	            wrapper.appendChild(this.text);
	
	            utils.removeClass(this.el, 'jw-hidden');
	
	            this.addContent(wrapper);
	        },
	
	        image : function(style) {
	            utils.style(this.img, style);
	        },
	
	        update : function(txt) {
	            this.text.innerHTML = txt;
	        }
	    });
	
	    function reasonInteraction() {
	        return {reason: 'interaction'};
	    }
	
	    var TimeSlider = Slider.extend({
	        constructor : function(_model, _api) {
	            this._model = _model;
	            this._api = _api;
	
	            this.timeTip = new TimeTip('jw-tooltip-time');
	            this.timeTip.setup();
	
	            this.cues = [];
	
	            // Store the attempted seek, until the previous one completes
	            this.seekThrottled = _.throttle(this.performSeek, 400);
	
	            this._model
	                .on('change:playlistItem', this.onPlaylistItem, this)
	                .on('change:position', this.onPosition, this)
	                .on('change:duration', this.onDuration, this)
	                .on('change:buffer', this.onBuffer, this);
	
	            Slider.call(this, 'jw-slider-time', 'horizontal');
	        },
	
	        // These overwrite Slider methods
	        setup : function() {
	            Slider.prototype.setup.apply(this, arguments);
	
	            if (this._model.get('playlistItem')) {
	                this.onPlaylistItem(this._model, this._model.get('playlistItem'));
	            }
	
	            this.elementRail.appendChild(this.timeTip.element());
	
	            // mousemove/mouseout because this currently mouse specific functionality.
	            this.el.addEventListener('mousemove', this.showTimeTooltip.bind(this), false);
	            this.el.addEventListener('mouseout', this.hideTimeTooltip.bind(this), false);
	        },
	        limit: function(percent) {
	            if (this.activeCue && _.isNumber(this.activeCue.pct)) {
	                return this.activeCue.pct;
	            }
	            var duration = this._model.get('duration');
	            var streamType = this._model.get('streamType');
	            if (streamType === 'DVR') {
	                var position = (1 - (percent / 100)) * duration;
	                var currentPosition = this._model.get('position');
	                var updatedPosition = Math.min(position, Math.max(Constants.dvrSeekLimit, currentPosition));
	                var updatedPercent = updatedPosition * 100 / duration;
	                return 100 - updatedPercent;
	            }
	            return percent;
	        },
	        update: function(percent) {
	            this.seekTo = percent;
	            this.seekThrottled();
	            Slider.prototype.update.apply(this, arguments);
	        },
	        dragStart : function() {
	            this._model.set('scrubbing', true);
	            Slider.prototype.dragStart.apply(this, arguments);
	        },
	        dragEnd : function() {
	            Slider.prototype.dragEnd.apply(this, arguments);
	            this._model.set('scrubbing', false);
	        },
	
	
	        // Event Listeners
	        onSeeked : function () {
	            // When we are done scrubbing there will be a final seeked event
	            if (this._model.get('scrubbing')) {
	                this.performSeek();
	            }
	        },
	        onBuffer : function (model, pct) {
	            this.updateBuffer(pct);
	        },
	        onPosition : function(model, position) {
	            this.updateTime(position, model.get('duration'));
	        },
	        onDuration : function(model, duration) {
	            this.updateTime(model.get('position'), duration);
	        },
	        updateTime : function(position, duration) {
	            var pct = 0;
	            if (duration) {
	                var streamType = this._model.get('streamType');
	                if (streamType === 'DVR') {
	                    pct = (duration - position) / duration * 100;
	                } else if (streamType === 'VOD') {
	                    pct = position / duration * 100;
	                }
	            }
	            this.render(pct);
	        },
	        onPlaylistItem : function (model, playlistItem) {
	            this.reset();
	
	            model.mediaModel.on('seeked', this.onSeeked, this);
	
	            var tracks = playlistItem.tracks;
	            _.each(tracks, function (track) {
	                if (track && track.kind && track.kind.toLowerCase() === 'thumbnails') {
	                    this.loadThumbnails(track.file);
	                }
	                else if (track && track.kind && track.kind.toLowerCase() === 'chapters') {
	                    this.loadChapters(track.file);
	                }
	            }, this);
	        },
	
	        performSeek : function() {
	            var percent = this.seekTo;
	            var duration = this._model.get('duration');
	            var streamType = this._model.get('streamType');
	            var position;
	            if (duration === 0) {
	                this._api.play(reasonInteraction());
	            } else if (streamType === 'DVR') {
	                position = (100 - percent) / 100 * duration;
	                this._api.seek(position, reasonInteraction());
	            } else {
	                position = percent / 100 * duration;
	                this._api.seek(Math.min(position, duration - 0.25), reasonInteraction());
	            }
	        },
	        showTimeTooltip: function(evt) {
	            var duration = this._model.get('duration');
	            if (duration === 0) {
	                return;
	            }
	
	            var _railBounds = utils.bounds(this.elementRail);
	            var position = (evt.pageX ? (evt.pageX - _railBounds.left) : evt.x);
	            position = utils.between(position, 0, _railBounds.width);
	            var pct = position / _railBounds.width;
	            var time = duration * pct;
	
	            // For DVR we need to swap it around
	            if (duration < 0) {
	                time = duration - time;
	            }
	
	            var timetipText;
	            if (this.activeCue) {
	                timetipText = this.activeCue.text;
	            } else {
	                var allowNegativeTime = true;
	                timetipText = utils.timeFormat(time, allowNegativeTime);
	
	                // If DVR and within live buffer
	                if (duration < 0 && time > Constants.dvrSeekLimit) {
	                    timetipText = 'Live';
	                }
	            }
	            this.timeTip.update(timetipText);
	            this.showThumbnail(time);
	
	            utils.addClass(this.timeTip.el, 'jw-open');
	            this.timeTip.el.style.left = (pct*100) + '%';
	        },
	
	        hideTimeTooltip: function() {
	            utils.removeClass(this.timeTip.el, 'jw-open');
	        },
	
	        reset : function() {
	            this.resetChapters();
	            this.resetThumbnails();
	        }
	    });
	
	    _.extend(TimeSlider.prototype, ChaptersMixin, ThumbnailsMixin);
	
	    return TimeSlider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 142 */
/*!*******************************************!*\
  !*** ./src/js/view/components/tooltip.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/extendable */ 119),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Extendable, utils) {
	
	    var Tooltip = Extendable.extend({
	        'constructor' : function(name, ariaText, ariaShown) {
	            this.el = document.createElement('div');
	            this.el.className = 'jw-icon jw-icon-tooltip ' + name + ' jw-button-color jw-reset jw-hidden';
	            if (ariaText) {
	                this.el.setAttribute('tabindex', '0');
	                this.el.setAttribute('role', 'button');
	                this.el.setAttribute('aria-label', ariaText);
	            }
	            if (ariaShown === true) {
	                // Avoiding to hide the tooltip if requested
	                // e.g. The volume tooltip overlay don't work
	                // with the keyboard but can still mute/unmute
	                this.el.setAttribute('aria-hidden', 'false');
	            } else {
	                // Tooltip only works on :hover :^(
	                // It is not working using the keyboard
	                // Hiding it for ARIA while not supported
	                this.el.setAttribute('aria-hidden', 'true');
	            }
	            this.container = document.createElement('div');
	            this.container.className = 'jw-overlay jw-reset';
	            this.openClass = 'jw-open';
	            this.componentType = 'tooltip';
	
	            this.el.appendChild(this.container);
	        },
	
	        addContent: function (elem) {
	            if(this.content){
	                this.removeContent();
	            }
	
	            this.content = elem;
	            this.container.appendChild(elem);
	        },
	        removeContent: function(){
	            if(this.content) {
	                this.container.removeChild(this.content);
	                this.content = null;
	            }
	        },
	        hasContent: function(){
	            return !!this.content;
	        },
	        element: function(){
	            return this.el;
	        },
	        openTooltip: function(evt) {
	            this.trigger('open-'+this.componentType, evt, {'isOpen': true});
	            this.isOpen = true;
	            utils.toggleClass(this.el, this.openClass, this.isOpen);
	        },
	        closeTooltip: function(evt) {
	            this.trigger('close-'+this.componentType, evt, {'isOpen': false});
	            this.isOpen = false;
	            utils.toggleClass(this.el, this.openClass, this.isOpen);
	        },
	        toggleOpenState: function(evt){
	            if(this.isOpen){
	                this.closeTooltip(evt);
	            } else {
	                this.openTooltip(evt);
	            }
	        }
	    });
	
	    return Tooltip;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 143 */
/*!**************************************************!*\
  !*** ./src/js/view/components/chapters.mixin.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! parsers/captions/srt */ 89),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils, srt) {
	
	    function Cue(time, text) {
	        this.time = time;
	        this.text = text;
	        this.el = document.createElement('div');
	        this.el.className = 'jw-cue jw-reset';
	    }
	
	    _.extend(Cue.prototype, {
	        align : function(duration) {
	            // If a percentage, use it, else calculate the percentage
	            if (this.time.toString().slice(-1) === '%') {
	                this.pct = this.time;
	            } else {
	                var percentage = (this.time/duration) * 100;
	                this.pct = percentage + '%';
	            }
	
	            this.el.style.left = this.pct;
	        }
	    });
	
	    var ChaptersMixin = {
	
	        loadChapters: function (file) {
	            utils.ajax(file, this.chaptersLoaded.bind(this), this.chaptersFailed, {
	                plainText: true
	            });
	        },
	
	        chaptersLoaded: function (evt) {
	            var data = srt(evt.responseText);
	            if (_.isArray(data)) {
	                _.each(data, this.addCue, this);
	                this.drawCues();
	            }
	        },
	
	        chaptersFailed: function () {
	        },
	
	        addCue: function (obj) {
	            this.cues.push(new Cue(obj.begin, obj.text));
	        },
	
	        drawCues: function () {
	            // We won't want to draw them until we have a duration
	            var duration = this._model.mediaModel.get('duration');
	            if (!duration || duration <= 0) {
	                this._model.mediaModel.once('change:duration', this.drawCues, this);
	                return;
	            }
	
	            var _this = this;
	            _.each(this.cues, function (cue) {
	                cue.align(duration);
	                cue.el.addEventListener('mouseover', function () {
	                    _this.activeCue = cue;
	                });
	                cue.el.addEventListener('mouseout', function () {
	                    _this.activeCue = null;
	                });
	                _this.elementRail.appendChild(cue.el);
	            });
	        },
	
	        resetChapters : function() {
	            _.each(this.cues, function (cue) {
	                if (cue.el.parentNode) {
	                    cue.el.parentNode.removeChild(cue.el);
	                }
	            }, this);
	            this.cues = [];
	        }
	    };
	
	    return ChaptersMixin;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 144 */
/*!****************************************************!*\
  !*** ./src/js/view/components/thumbnails.mixin.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! parsers/captions/srt */ 89),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils, srt) {
	
	    function Thumbnail(obj) {
	        this.begin = obj.begin;
	        this.end = obj.end;
	        this.img = obj.text;
	    }
	
	    var ThumbnailsMixin = {
	        loadThumbnails: function (file) {
	            if (!file) {
	                return;
	            }
	            this.vttPath = file.split('?')[0].split('/').slice(0, -1).join('/');
	            // Only load the first individual image file so we can get its dimensions. All others are loaded when
	            // they're set as background-images.
	            this.individualImage = null;
	            utils.ajax(file, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
	                plainText: true
	            });
	        },
	
	        thumbnailsLoaded: function (evt) {
	            var data = srt(evt.responseText);
	            if (_.isArray(data)) {
	                _.each(data, function(obj) {
	                    this.thumbnails.push( new Thumbnail(obj) );
	                }, this);
	                this.drawCues();
	            }
	        },
	
	        thumbnailsFailed: function () { },
	
	        chooseThumbnail : function(seconds) {
	            var idx = _.sortedIndex(this.thumbnails, {end: seconds}, _.property('end'));
	            if (idx >= this.thumbnails.length) {
	                idx = this.thumbnails.length-1;
	            }
	            var url = this.thumbnails[idx].img;
	            if (url.indexOf('://') < 0) {
	                url = this.vttPath ? this.vttPath + '/' + url : url;
	            }
	
	            return url;
	        },
	
	        loadThumbnail : function(seconds) {
	            var url = this.chooseThumbnail(seconds);
	            var style = {
	                display: 'block',
	                margin: '0 auto',
	                backgroundPosition: '0 0'
	            };
	
	            var hashIndex = url.indexOf('#xywh');
	            if (hashIndex > 0) {
	                try {
	                    var matched = (/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/).exec(url);
	                    url = matched[1];
	                    style.backgroundPosition = (matched[2] * -1) + 'px ' + (matched[3] * -1) + 'px';
	                    style.width = matched[4];
	                    style.height = matched[5];
	                } catch (e) {
	                    //this.vttFailed('Could not parse thumbnail');
	                    return;
	                }
	            } else {
	                if(!this.individualImage){
	                    this.individualImage = new Image();
	                    this.individualImage.onload = _.bind(function () {
	                        this.individualImage.onload = null;
	                        this.timeTip.image({ width: this.individualImage.width, height: this.individualImage.height });
	                    }, this);
	                    this.individualImage.src = url;
	                }
	            }
	
	            style.backgroundImage = 'url("' + url + '")';
	
	            return style;
	        },
	
	        showThumbnail : function(seconds) {
	            if (this.thumbnails.length < 1) {
	                return;
	            }
	            this.timeTip.image(this.loadThumbnail(seconds));
	        },
	
	        resetThumbnails : function() {
	            this.timeTip.image({
	                backgroundImage : '',
	                width : 0,
	                height : 0
	            });
	            this.thumbnails = [];
	        }
	    };
	
	    return ThumbnailsMixin;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 145 */
/*!****************************************!*\
  !*** ./src/js/view/components/menu.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! view/components/tooltip */ 142),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! templates/menu.html */ 146)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Tooltip, utils, _, UI, menuTemplate) {
	    var Menu = Tooltip.extend({
	        setup : function (list, selectedIndex, options) {
	            options = options || {};
	            if (!this.iconUI) {
	                this.iconUI = new UI(this.el, {'useHover': true, 'directSelect': true});
	
	                this.toggleValueListener= this.toggleValue.bind(this);
	
	                this.toggleOpenStateListener = this.toggleOpenState.bind(this);
	                this.openTooltipListener = this.openTooltip.bind(this);
	                this.closeTooltipListener = this.closeTooltip.bind(this);
	
	                this.selectListener = this.select.bind(this);
	            }
	
	            this.reset();
	
	            list = _.isArray(list) ? list : [];
	
	            utils.toggleClass(this.el, 'jw-hidden', (list.length < 2));
	
	            var isMenu = list.length > 2 || (list.length === 2 && options && options.toggle === false);
	            var isToggle = !isMenu && list.length === 2;
	            // Make caption menu always a toggle to show active color
	            utils.toggleClass(this.el, 'jw-toggle', isToggle || !!options.isToggle);
	            utils.toggleClass(this.el, 'jw-button-color', !isToggle);
	            this.isActive = isMenu || isToggle;
	
	            if (isMenu) {
	                utils.removeClass(this.el, 'jw-off');
	
	                this.iconUI
	                    .on('tap', this.toggleOpenStateListener)
	                    .on('over', this.openTooltipListener)
	                    .on('out', this.closeTooltipListener);
	
	                var innerHtml = menuTemplate(list);
	                var elem = utils.createElement(innerHtml);
	                this.addContent(elem);
	                this.contentUI = new UI(this.content).on('click tap', this.selectListener);
	            } else if (isToggle) {
	                this.iconUI.on('click tap', this.toggleValueListener);
	            }
	
	            this.selectItem(selectedIndex);
	        },
	        toggleValue: function(){
	            this.trigger('toggleValue');
	        },
	        select: function (evt) {
	            if (evt.target.parentElement === this.content) {
	                var classes = utils.classList(evt.target);
	                // find the class with a name of the form 'jw-item-1'
	                var item = _.find(classes, function(c) { return c.indexOf('jw-item') === 0;});
	                if(item){
	                    this.trigger('select', parseInt(item.split('-')[2]));
	                    this.closeTooltipListener();
	                }
	            }
	        },
	        selectItem : function(selectedIndex) {
	            if (this.content) {
	                for (var i = 0; i < this.content.children.length; i++) {
	                    utils.toggleClass(this.content.children[i], 'jw-active-option', (selectedIndex === i));
	                }
	            }
	            utils.toggleClass(this.el, 'jw-off', (selectedIndex === 0));
	        },
	        reset : function() {
	            utils.addClass(this.el, 'jw-off');
	            this.iconUI.off();
	            if (this.contentUI) {
	                this.contentUI.off().destroy();
	            }
	            this.removeContent();
	        }
	    });
	
	    return Menu;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 146 */
/*!*********************************!*\
  !*** ./src/templates/menu.html ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=container.escapeExpression;
	
	  return "        <li class='jw-text jw-option jw-item-"
	    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"index","hash":{},"data":data}) : helper)))
	    + " jw-reset'>"
	    + alias1(container.lambda((depth0 != null ? depth0.label : depth0), depth0))
	    + "</li>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<ul class=\"jw-menu jw-background-color jw-reset\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</ul>";
	},"useData":true});

/***/ },
/* 147 */
/*!*************************************************!*\
  !*** ./src/js/view/components/volumetooltip.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! view/components/tooltip */ 142),
	    __webpack_require__(/*! view/components/slider */ 118),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Tooltip, Slider, UI, utils) {
	    var VolumeTooltip = Tooltip.extend({
	        'constructor' : function(_model, name, ariaText) {
	            this._model = _model;
	
	            // Prevent Volume tooltip button from being aria-hidden="true"
	            Tooltip.call(this, name, ariaText, true);
	
	            this.volumeSlider = new Slider('jw-slider-volume jw-volume-tip', 'vertical');
	            this.addContent(this.volumeSlider.element());
	
	            this.volumeSlider.on('update', function (evt) {
	                this.trigger('update', evt);
	            }, this);
	
	            utils.removeClass(this.el, 'jw-hidden');
	
	            new UI(this.el, {'useHover': true, 'directSelect': true})
	                .on('click', this.toggleValue, this)
	                .on('tap', this.toggleOpenState, this)
	                .on('over', this.openTooltip, this)
	                .on('out', this.closeTooltip, this);
	
	            this._model.on('change:volume', this.onVolume, this);
	        },
	        toggleValue : function(){
	            this.trigger('toggleValue');
	        }
	    });
	
	    return VolumeTooltip;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ },
/* 148 */
/*!******************************************!*\
  !*** ./src/js/view/components/button.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/ui */ 120)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(UI) {
	    var button = function (icon, apiAction, ariaText) {
	        var element = document.createElement('div');
	        element.className = 'jw-icon jw-icon-inline jw-button-color jw-reset ' + icon;
	        element.setAttribute('role', 'button');
	        element.setAttribute('tabindex', '0');
	        if (ariaText) {
	            element.setAttribute('aria-label', ariaText);
	        }
	        element.style.display = 'none';
	
	        if (apiAction) {
	            // Don't send the event to the handler so we don't have unexpected results. (e.g. play)
	            new UI(element).on('click tap', function() { apiAction(); });
	        }
	
	        return {
	            element : function() { return element; },
	            toggle : function(m) {
	                if (m) {
	                    this.show();
	                } else {
	                    this.hide();
	                }
	            },
	            show : function() { element.style.display = ''; },
	            hide : function() { element.style.display = 'none'; }
	        };
	    };
	
	    return button;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 149 */
/*!*****************************************!*\
  !*** ./src/js/view/captionsrenderer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/css */ 59),
	    __webpack_require__(/*! events/states */ 97),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, cssUtils, states, _) {
	    var _style = cssUtils.style;
	
	    var _defaults = {
	        back: true,
	        fontSize: 14,
	        fontFamily: 'Arial,sans-serif',
	        fontOpacity: 100,
	        color: '#FFF',
	        backgroundColor: '#000',
	        backgroundOpacity: 100,
	        // if back == false edgeStyle defaults to 'uniform',
	        // otherwise it's 'none'
	        edgeStyle: null,
	        windowColor: '#FFF',
	        windowOpacity: 0,
	        preprocessor: _.identity
	    };
	
	    /** Component that renders the actual captions on screen. **/
	    var CaptionsRenderer = function (_model) {
	
	        var _options = {},
	        // array of cues
	            _captionsTrack,
	
	        // current cues
	            _currentCues,
	
	        // last time/seek event
	            _timeEvent,
	
	        // display hierarchy
	            _display,
	            _captionsWindow,
	            _textContainer,
	            _VTTRenderer;
	
	        _display = document.createElement('div');
	        _display.className = 'jw-captions jw-reset';
	
	        this.show = function () {
	            _display.className = 'jw-captions jw-captions-enabled jw-reset';
	        };
	
	        this.hide = function () {
	            _display.className = 'jw-captions jw-reset';
	        };
	
	        /** Assign list of captions to the renderer. **/
	        this.populate = function(captions) {
	            _currentCues = [];
	            _captionsTrack = captions;
	            if (!captions) {
	                _currentCues = [];
	                this.renderCues();
	                return;
	            }
	            this.selectCues(captions, _timeEvent);
	        };
	
	        this.resize = function () {
	            var width = _display.clientWidth,
	                scale = Math.pow(width / 400, 0.6);
	            if (scale) {
	                var size = _options.fontSize * scale;
	                _style(_display, {
	                    fontSize: Math.floor(size*2)/2 + 'px'
	                });
	            }
	            this.renderCues(true);
	        };
	
	        this.renderCues = function(updateBoxPosition) {
	            updateBoxPosition = !!updateBoxPosition;
	            if(_VTTRenderer) {
	                _VTTRenderer.WebVTT.processCues(window, _currentCues, _display, updateBoxPosition);
	            }
	        };
	
	        this.selectCues = function(track, timeEvent) {
	            var cues, pos;
	
	            if (!track || !track.data || !timeEvent) {
	                return;
	            }
	
	            pos = this.getAlignmentPosition(track, timeEvent);
	            if (pos === false) {
	                return;
	            }
	
	            cues = this.getCurrentCues(track.data, pos);
	
	            this.updateCurrentCues(cues);
	            this.renderCues(true);
	        };
	
	        this.getCurrentCues = function(allCues, pos) {
	            return _.filter(allCues, function (cue) {
	                return pos >= (cue.startTime) && (!cue.endTime || pos <= cue.endTime);
	            });
	        };
	
	        this.updateCurrentCues = function(cues) {
	            // Render with vtt.js if there are cues, clear if there are none
	            if (!cues.length) {
	                _currentCues = [];
	            } else if (_.difference(cues, _currentCues).length) {
	                _captionsWindow.className = 'jw-captions-window jw-reset jw-captions-window-active';
	                _currentCues = cues;
	            }
	
	            return _currentCues;
	        };
	
	        this.getAlignmentPosition = function(track, timeEvent) {
	            var source = track.source;
	            var metadata = timeEvent.metadata;
	
	            // subtitles with "source" time must be synced with "metadata[source]"
	            if (source) {
	                if (metadata && _.isNumber(metadata[source])) {
	                    return metadata[source];
	                } else {
	                    return false;
	                }
	            } else if (track.embedded && timeEvent.duration < 0) {
	                // In DVR mode, need to make alignmentPosition positive for captions to work
	                return timeEvent.position - timeEvent.duration;
	            }
	
	            // Default to syncing with current position
	            return timeEvent.position;
	        };
	
	        this.clear = function () {
	            utils.empty(_display);
	        };
	
	        this.setContainerHeight = function (height) {
	            _style(_display, {
	                height: height
	            });
	        };
	
	        /** Constructor for the renderer. **/
	        this.setup = function(playerElementId, options) {
	            _captionsWindow = document.createElement('div');
	            _textContainer = document.createElement('span');
	            _captionsWindow.className = 'jw-captions-window jw-reset';
	            _textContainer.className = 'jw-captions-text jw-reset';
	
	            _options = _.extend({}, _defaults, options);
	
	            var fontOpacity = _options.fontOpacity,
	                windowOpacity = _options.windowOpacity,
	                edgeStyle = _options.edgeStyle,
	                bgColor = _options.backgroundColor,
	                windowStyle = {},
	                textStyle = {
	                    color: cssUtils.hexToRgba(_options.color, fontOpacity),
	                    fontFamily: _options.fontFamily,
	                    fontStyle: _options.fontStyle,
	                    fontWeight: _options.fontWeight,
	                    textDecoration: _options.textDecoration
	                };
	
	            if (windowOpacity) {
	                windowStyle.backgroundColor = cssUtils.hexToRgba(_options.windowColor, windowOpacity);
	            }
	
	            _addEdgeStyle(edgeStyle, textStyle, fontOpacity);
	
	            if (_options.back) {
	                textStyle.backgroundColor = cssUtils.hexToRgba(bgColor, _options.backgroundOpacity);
	            } else if (edgeStyle === null) {
	                _addEdgeStyle('uniform', textStyle);
	            }
	
	            _style(_captionsWindow, windowStyle);
	            _style(_textContainer, textStyle);
	            _setupCaptionStyles(playerElementId, windowStyle, textStyle);
	
	            _captionsWindow.appendChild(_textContainer);
	            _display.appendChild(_captionsWindow);
	
	            this.populate(_model.get('captionsTrack'));
	            _model.set('captions', _options);
	        };
	
	        this.element = function() {
	            return _display;
	        };
	
	        function _setupCaptionStyles(playerId, windowStyle, textStyle) {
	            // VTT.js DOM window styles
	            cssUtils.css('#' + playerId + ' .jw-text-track-display', windowStyle, playerId);
	            // VTT.js DOM text styles
	            cssUtils.css('#' + playerId + ' .jw-text-track-cue', textStyle, playerId);
	
	            // Shadow DOM window styles
	            cssUtils.css('#' + playerId + ' .jw-video::-webkit-media-text-track-display', windowStyle, playerId);
	
	            // Shadow DOM text styles
	            cssUtils.css('#' + playerId + ' .jw-video::cue', textStyle, playerId);
	
	            // Shadow DOM text background style in Safari needs to be important to override browser style
	            if (textStyle.backgroundColor) {
	                var backdropStyle = '{background-color: ' + textStyle.backgroundColor + ' !important;}';
	                cssUtils.css('#' + playerId + ' .jw-video::-webkit-media-text-track-display-backdrop',
	                    backdropStyle, playerId);
	            }
	        }
	
	        function _addEdgeStyle(option, style, fontOpacity) {
	            var color = cssUtils.hexToRgba('#000000', fontOpacity);
	            if (option === 'dropshadow') { // small drop shadow
	                style.textShadow = '0 2px 1px ' + color;
	            } else if (option === 'raised') { // larger drop shadow
	                style.textShadow = '0 0 5px ' + color + ', 0 1px 5px ' + color + ', 0 2px 5px ' + color;
	            } else if (option === 'depressed') { // top down shadow
	                style.textShadow = '0 -2px 1px ' + color;
	            } else if (option === 'uniform') { // outline
	                style.textShadow = '-2px 0 1px ' + color + ',2px 0 1px ' + color +
	                ',0 -2px 1px ' + color + ',0 2px 1px ' + color + ',-1px 1px 1px ' +
	                color + ',1px 1px 1px ' + color + ',1px -1px 1px ' + color +
	                ',1px 1px 1px ' + color;
	            }
	        }
	
	        function _timeChange(e) {
	            _timeEvent = e;
	            this.selectCues(_captionsTrack, _timeEvent);
	        }
	
	        function _itemReadyHandler() {
	            // don't load the polyfill or do unnecessary work if rendering natively
	            if(!_model.get('renderCaptionsNatively')) {
	                __webpack_require__.e/* nsure */(7/*! polyfills.vttrenderer */, function (require) {
	                    _VTTRenderer = __webpack_require__(/*! polyfills/vtt */ 150);
	                });
	            }
	        }
	
	        _model.on('change:playlistItem', function() {
	            _timeEvent = null;
	            _currentCues = [];
	        }, this);
	
	        _model.on('change:captionsTrack', function(model, captionsTrack) {
	            this.populate(captionsTrack);
	            // TODO: handle with VTT.js
	        }, this);
	
	        _model.mediaController.on('seek', function() {
	            _currentCues = [];
	        }, this);
	
	        _model.mediaController.on('time seek', _timeChange, this);
	
	        _model.mediaController.on('subtitlesTrackData', function() {
	            // update captions after a provider's subtitle track changes
	            this.selectCues(_captionsTrack, _timeEvent);
	        }, this);
	
	        _model.on('change:state', function(model, state) {
	            switch (state) {
	                case states.IDLE:
	                case states.ERROR:
	                case states.COMPLETE:
	                    this.hide();
	                    break;
	                default:
	                    this.show();
	                    break;
	            }
	        }, this);
	
	        _model.on('itemReady', _itemReadyHandler, this);
	    };
	
	    return CaptionsRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 150 */,
/* 151 */
/*!*************************************!*\
  !*** ./src/js/view/clickhandler.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(UI, events, Events, _) {
	
	    var ClickHandler = function(_model, _ele, options) {
	        var _display,
	            _alternateClickHandler,
	            _alternateDoubleClickHandler;
	
	        var _options = {enableDoubleTap: true, useMove: true};
	        _.extend(this, Events);
	
	        _display = _ele;
	
	        this.element = function() { return _display; };
	
	        var userInteract = new UI(_display, _.extend(_options, options));
	        userInteract.on('click tap', _clickHandler);
	        userInteract.on('doubleClick doubleTap', _doubleClickHandler);
	        userInteract.on('move', function(){ _this.trigger('move'); });
	        userInteract.on('over', function(){ _this.trigger('over'); });
	        userInteract.on('out', function(){ _this.trigger('out'); });
	
	        this.clickHandler = _clickHandler;
	
	        var _this = this;
	        function _clickHandler(evt) {
	            if (_model.get('flashBlocked')) {
	                return;
	            }
	
	            if (_alternateClickHandler) {
	                _alternateClickHandler(evt);
	                return;
	            }
	
	            _this.trigger((evt.type === events.touchEvents.CLICK) ? 'click' : 'tap');
	        }
	
	        // Handle double-clicks for fullscreen toggle
	        function _doubleClickHandler() {
	            if (_alternateDoubleClickHandler) {
	                _alternateDoubleClickHandler();
	                return;
	            }
	
	            _this.trigger('doubleClick');
	        }
	
	        this.setAlternateClickHandlers = function(clickHandler, doubleClickHandler) {
	            _alternateClickHandler = clickHandler;
	            _alternateDoubleClickHandler = doubleClickHandler || null;
	        };
	
	        this.revertAlternateClickHandlers = function() {
	            _alternateClickHandler = null;
	            _alternateDoubleClickHandler = null;
	        };
	    };
	
	
	    return ClickHandler;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 152 */
/*!********************************************!*\
  !*** ./src/js/view/rewind-display-icon.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! templates/display-icon.html */ 153),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Events, UI, Template, _) {
	    var RewindDisplayIcon = function(model, api) {
	        this.el = utils.createElement(Template({
	            iconName: 'rewind',
	            ariaLabel: model.get('localization').playback
	        }));
	        this.iconUI = new UI (this.el).on('click tap', function() {
	            var currentPosition = model.get('position'),
	                duration = model.get('duration'),
	                rewindPosition = currentPosition - 10,
	                startPosition = 0;
	            // duration is negative in DVR mode
	            if (model.get('streamType') === 'DVR') {
	                startPosition = duration;
	            }
	            // Seek 10s back. Seek value should be >= 0 in VOD mode and >= (negative) duration in DVR mode
	            api.seek(Math.max(rewindPosition, startPosition));
	        });
	    };
	
	    _.extend(RewindDisplayIcon.prototype, {
	        element: function() {
	            return this.el;
	        }
	    });
	
	    return RewindDisplayIcon;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 153 */
/*!*****************************************!*\
  !*** ./src/templates/display-icon.html ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<div class=\"jw-display-icon-container jw-display-icon-"
	    + alias4(((helper = (helper = helpers.iconName || (depth0 != null ? depth0.iconName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconName","hash":{},"data":data}) : helper)))
	    + " jw-background-color jw-reset\">\n  <div class=\"jw-icon jw-icon-"
	    + alias4(((helper = (helper = helpers.iconName || (depth0 != null ? depth0.iconName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconName","hash":{},"data":data}) : helper)))
	    + " jw-button-color jw-reset\" role=\"button\" tabindex=\"0\" aria-label=\""
	    + alias4(((helper = (helper = helpers.ariaLabel || (depth0 != null ? depth0.ariaLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaLabel","hash":{},"data":data}) : helper)))
	    + "\"></div>\n</div>\n";
	},"useData":true});

/***/ },
/* 154 */
/*!******************************************!*\
  !*** ./src/js/view/play-display-icon.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! templates/display-icon.html */ 153),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Events, UI, Template, _) {
	
	    var PlayDisplayIcon = function(_model) {
	        _.extend(this, Events);
	
	        this.model = _model;
	
	        this.el = utils.createElement(Template({
	          iconName: 'display',
	          ariaLabel: this.model.get('localization').playback
	        }));
	
	        var _this = this;
	
	        this.iconUI = new UI (this.el).on('click tap', function(evt) {
	          _this.trigger(evt.type);
	        });
	
	        this.model.on('change:state', function(model, newstate) {
	            var iconDisplay = _this.el.getElementsByClassName('jw-icon-display');
	            if (iconDisplay.length) {
	                var localization = _this.model.get('localization');
	                var newstateLabel = localization.playback;
	                switch (newstate) {
	                    case 'buffering':
	                        newstateLabel = localization.buffer;
	                        break;
	                    case 'playing':
	                        newstateLabel = localization.pause;
	                        break;
	                    case 'complete':
	                        newstateLabel = localization.replay;
	                        break;
	                    case 'error':
	                        newstateLabel = '';
	                        break;
	                }
	                if (newstateLabel === '') {
	                    iconDisplay[0].removeAttribute('aria-label');
	                } else {
	                    iconDisplay[0].setAttribute('aria-label', newstateLabel);
	                }
	            }
	        });
	    };
	
	    _.extend(PlayDisplayIcon.prototype, {
	        element: function() {
	          return this.el;
	        }
	    });
	
	    return PlayDisplayIcon;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 155 */
/*!******************************************!*\
  !*** ./src/js/view/next-display-icon.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! templates/display-icon.html */ 153),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Events, UI, Template, _) {
	    var NextDisplayIcon = function(model, api) {
	        this.el = utils.createElement(Template({
	            iconName: 'next',
	            ariaLabel: model.get('localization').next
	        }));
	        this.iconUI = new UI (this.el).on('click tap', function() {
	            api.next();
	        });
	        this.el.style.display = 'none';
	        model.on('change:nextUp', function(model, nextUp) {
	            this.el.style.display = nextUp ? '' : 'none';
	        }, this);
	    };
	
	    _.extend(NextDisplayIcon.prototype, {
	        element: function() {
	            return this.el;
	        }
	    });
	
	    return NextDisplayIcon;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 156 */
/*!*****************************!*\
  !*** ./src/js/view/dock.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! templates/dock.html */ 157),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/ui */ 120)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(dockTemplate, utils, _, UI) {
	
	    var Dock = function(_model) {
	        this.model = _model;
	
	        this.setup();
	        this.model.on('change:dock', this.render, this);
	    };
	
	    _.extend(Dock.prototype, {
	        setup : function() {
	            var buttons = this.model.get('dock');
	            var clickHandler = this.click.bind(this);
	
	            var html = dockTemplate(buttons);
	            this.el = utils.createElement(html);
	            new UI (this.el).on('click tap', clickHandler);
	        },
	        getDockButton : function(evt) {
	            if (utils.hasClass(evt.target, 'jw-dock-button')) {
	                // Clicks on button container
	                return evt.target;
	            } else if (utils.hasClass(evt.target, 'jw-dock-text')) {
	                // Clicks on the text overlay
	                return evt.target.parentElement.parentElement;
	            }
	
	            // Clicks on any other children
	            return evt.target.parentElement;
	        },
	        click : function(evt) {
	            var elem = this.getDockButton(evt);
	
	            var btnId = elem.getAttribute('button');
	            var buttons = this.model.get('dock');
	            var btn = _.findWhere(buttons, {id : btnId});
	
	            if (btn && btn.callback) {
	                btn.callback(evt);
	            }
	        },
	        render: function() {
	            var buttons = this.model.get('dock');
	            var html = dockTemplate(buttons);
	            var newEl = utils.createElement(html);
	
	            this.el.innerHTML = newEl.innerHTML;
	        },
	        element : function() {
	            return this.el;
	        }
	    });
	    return Dock;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 157 */
/*!*********************************!*\
  !*** ./src/templates/dock.html ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {};
	
	  return "    <div class=\"jw-dock-button jw-background-color jw-reset"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.btnClass : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\" button=\""
	    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\">\n        <div class=\"jw-icon jw-dock-image jw-reset\" "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "></div>\n        <div class=\"jw-arrow jw-reset\"></div>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tooltip : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "    </div>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return " "
	    + container.escapeExpression(((helper = (helper = helpers.btnClass || (depth0 != null ? depth0.btnClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"btnClass","hash":{},"data":data}) : helper)));
	},"4":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return "style='background-image: url(\""
	    + container.escapeExpression(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"img","hash":{},"data":data}) : helper)))
	    + "\")'";
	},"6":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return "        <div class=\"jw-overlay jw-background-color jw-reset\">\n            <span class=\"jw-text jw-dock-text jw-reset\">"
	    + container.escapeExpression(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"tooltip","hash":{},"data":data}) : helper)))
	    + "</span>\n        </div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\"jw-dock jw-reset\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</div>";
	},"useData":true});

/***/ },
/* 158 */
/*!*****************************!*\
  !*** ./src/js/view/logo.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! events/events */ 73),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! templates/logo.html */ 159)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(UI, utils, events, _, Events, logoTemplate) {
	    var _styles = utils.style;
	
	    var LogoDefaults = {
	        linktarget: '_blank',
	        margin: 8,
	        hide: false,
	        position: 'top-right'
	    };
	
	    var Logo = function(_model) {
	        var _logo,
	            _img = new Image(),
	            _settings,
	            _logoConfig = _.extend({}, _model.get('logo'));
	
	        _.extend(this, Events);
	
	        this.setup = function(container) {
	            _settings = _.extend({}, LogoDefaults, _logoConfig);
	            _settings.hide = (_settings.hide.toString() === 'true');
	
	            _logo = utils.createElement(logoTemplate());
	
	            if (!_settings.file) {
	                return;
	            }
	
	            if (_settings.hide) {
	                // This causes it to fade out when jw-flag-user-inactive
	                utils.addClass(_logo, 'jw-hide');
	            }
	
	            utils.addClass(_logo, 'jw-logo-' + (_settings.position || LogoDefaults.position));
	
	            // respond to dock/controls changes when top positioned
	            if (_settings.position === 'top-right') {
	                _model.on('change:dock', this.topRight, this);
	                _model.on('change:controls', this.topRight, this);
	                this.topRight(_model);
	            }
	
	            _model.set('logo', _settings);
	
	            // apply styles onload when image width and height are known
	            _img.onload = function() {
	                // update logo style
	                var style = {
	                    backgroundImage: 'url("' + this.src +'")',
	                    width: this.width,
	                    height: this.height
	                };
	                if(_settings.margin !== LogoDefaults.margin) {
	                    var positions = (/(\w+)-(\w+)/).exec(_settings.position);
	                    if (positions.length === 3){
	                        style['margin-'+positions[1]] = _settings.margin;
	                        style['margin-'+positions[2]] = _settings.margin;
	                    }
	                }
	                _styles(_logo, style);
	
	                // update title
	                _model.set('logoWidth', style.width);
	            };
	
	            _img.src = _settings.file;
	
	            var logoInteractHandler = new UI(_logo);
	            logoInteractHandler.on('click tap', function(evt) {
	                if (utils.exists(evt) && evt.stopPropagation) {
	                    evt.stopPropagation();
	                }
	
	                this.trigger(events.JWPLAYER_LOGO_CLICK, {
	                    link: _settings.link,
	                    linktarget: _settings.linktarget
	                });
	
	            }, this);
	
	            container.appendChild(_logo);
	        };
	
	        this.topRight = function(model) {
	            // move the logo down when dock buttons are displayed
	            var controls = model.get('controls');
	            var dockButtons = model.get('dock');
	            var dockButtonsVisible = controls && (dockButtons && dockButtons.length ||
	                model.get('sharing') || model.get('related'));
	            _styles(_logo, {
	                top: (dockButtonsVisible ? '3.5em' : 0)
	            });
	        };
	
	        this.element = function() {
	            return _logo;
	        };
	
	        this.position = function() {
	            return _settings.position;
	        };
	
	        this.destroy = function() {
	            _img.onload = null;
	        };
	
	        return this;
	    };
	
	    return Logo;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 159 */
/*!*********************************!*\
  !*** ./src/templates/logo.html ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"jw-logo jw-reset\"></div>";
	},"useData":true});

/***/ },
/* 160 */
/*!********************************!*\
  !*** ./src/js/view/preview.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils) {
	    var Preview = function(_model) {
	        this.model = _model;
	
	        _model.on('change:playlistItem', onPlaylistItem, this);
	        _model.on('change:mediaModel', onMediaModel, this);
	    };
	
	    function onMediaModel(model, mediaModel) {
	        mediaModel.off('change:mediaType', null, this);
	        mediaModel.on('change:mediaType', function(mediaModel, mediaType) {
	            if (mediaType === 'audio') {
	                this.setImage(model.get('playlistItem').image);
	            }
	        }, this);
	    }
	
	    function onPlaylistItem(model, playlistItem) {
	        var delayPosterLoad = (model.get('autostart') && !utils.isMobile()) ||
	            (model.get('item') > 0);
	
	        if (delayPosterLoad) {
	            this.setImage(null);
	            model.off('change:state', null, this);
	            model.on('change:state', function(model, state) {
	                if (state === 'complete' || state === 'idle' || state === 'error') {
	                    this.setImage(playlistItem.image);
	                    this.resize(null, null, model.get('stretching'));
	                }
	            }, this);
	            return;
	        }
	
	        this.setImage(playlistItem.image);
	    }
	
	    _.extend(Preview.prototype, {
	        setup: function(element) {
	            this.el = element;
	            var playlistItem = this.model.get('playlistItem');
	            if (playlistItem) {
	                this.setImage(playlistItem.image);
	            }
	        },
	        setImage: function(img) {
	            // Remove onload function from previous image
	            var image = this.image;
	            if (image) {
	                image.onload = null;
	                this.image = null;
	            }
	            this.model.off('change:state', null, this);
	            var backgroundImage = '';
	            if (_.isString(img)) {
	                backgroundImage = 'url("' + img + '")';
	                image = this.image = new Image();
	                image.src = img;
	            }
	            utils.style(this.el, {
	                backgroundImage: backgroundImage
	            });
	        },
	        resize: function(width, height, stretching) {
	            if (stretching === 'uniform') {
	                if (width) {
	                    this.playerAspectRatio = width / height;
	                }
	                if (!this.playerAspectRatio) {
	                    return;
	                }
	                // snap image to edges when the difference in aspect ratio is less than 9%
	                var image = this.image;
	                var backgroundSize = null;
	                if (image) {
	                    if (image.width === 0) {
	                        var _this = this;
	                        image.onload = function() {
	                            _this.resize(width, height, stretching);
	                        };
	                        return;
	                    }
	                    var imageAspectRatio = image.width / image.height;
	                    if (Math.abs(this.playerAspectRatio - imageAspectRatio) < 0.09) {
	                        backgroundSize = 'cover';
	                    }
	                }
	                utils.style(this.el, {
	                    backgroundSize: backgroundSize
	                });
	            }
	        },
	        element: function() {
	            return this.el;
	        }
	    });
	
	    return Preview;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 161 */
/*!***********************************!*\
  !*** ./src/js/view/rightclick.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! templates/rightclick.html */ 162),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! version */ 66)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, rightclickTemplate, _, UI, version) {
	
	    var RightClick = function() {};
	
	    _.extend(RightClick.prototype, {
	        buildArray : function() {
	            var semverParts = version.split('+');
	            var majorMinorPatchPre = semverParts[0];
	
	            var obj = {
	                items : [{
	                    title: 'GuluGulu ', // + majorMinorPatchPre,
	                    featured : true,
	                    showLogo : false,
	                    link: 'https://gulugulu.cn'
	                }]
	            };
	
	            var isPrerelease = majorMinorPatchPre.indexOf('-') > 0;
	            var versionMeta = semverParts[1];
	            if (isPrerelease && versionMeta) {
	                var pairs = versionMeta.split('.');
	                obj.items.push({
	                    title : 'build: (' + pairs[0] +'.'+ pairs[1] + ')',
	                    link : '#'
	                });
	            }
	
	            var _provider = this.model.get('provider');
	            if (_provider && _provider.name.indexOf('flash') >= 0) {
	                var text = 'Flash Version ' + utils.flashVersion();
	                obj.items.push({
	                    title : text,
	                    link : 'http://www.adobe.com/software/flash/about/'
	                });
	            }
	
	            return obj;
	        },
	        buildMenu : function() {
	            var obj = this.buildArray();
	            return utils.createElement(rightclickTemplate(obj));
	        },
	        updateHtml : function() {
	            this.el.innerHTML = this.buildMenu().innerHTML;
	        },
	
	        rightClick : function(evt) {
	            this.lazySetup();
	
	            if (this.mouseOverContext) {
	                // right click on menu item should execute it
	                return false;
	            }
	
	            this.hideMenu();
	            this.showMenu(evt);
	
	            return false;
	        },
	
	        getOffset: function(evt) {
	            var target = evt.target;
	            // offsetX is from the W3C standard, layerX is how Firefox does it
	            var x = evt.offsetX || evt.layerX;
	            var y = evt.offsetY || evt.layerY;
	            while (target !== this.playerElement) {
	                x += target.offsetLeft;
	                y += target.offsetTop;
	
	                target = target.parentNode;
	            }
	
	            return { x : x, y : y};
	        },
	        showMenu : function(evt) {
	            // Offset relative to player element
	            var off = this.getOffset(evt);
	
	            this.el.style.left = off.x+'px';
	            this.el.style.top  = off.y+'px';
	
	            utils.addClass(this.playerElement, 'jw-flag-rightclick-open');
	            utils.addClass(this.el, 'jw-open');
	            clearTimeout(this._menuTimeout);
	            this._menuTimeout = setTimeout(this.hideMenu.bind(this), 3000);
	            return false;
	        },
	
	        hideMenu : function() {
	            this.elementUI.off('out', this.hideMenu, this);
	            if (this.mouseOverContext) {
	                // If mouse is over the menu, hide the menu when mouse moves out
	                this.elementUI.on('out', this.hideMenu, this);
	                return;
	            }
	            utils.removeClass(this.playerElement, 'jw-flag-rightclick-open');
	            utils.removeClass(this.el, 'jw-open');
	        },
	
	        lazySetup : function() {
	            if (this.el) {
	                return;
	            }
	
	            this.el = this.buildMenu();
	
	            this.layer.appendChild(this.el);
	
	            this.hideMenuHandler = this.hideMenu.bind(this);
	            this.addOffListener(this.playerElement);
	            this.addOffListener(document);
	
	            // Update the menu if the provider changes
	            this.model.on('change:provider', this.updateHtml, this);
	
	            // Track if the mouse is above the menu or not
	            this.elementUI = new UI(this.el, {'useHover': true})
	                .on('over', function() { this.mouseOverContext = true; }, this)
	                .on('out', function() { this.mouseOverContext = false; }, this);
	        },
	
	        setup : function(_model, _playerElement, layer) {
	            this.playerElement = _playerElement;
	            this.model = _model;
	            this.mouseOverContext = false;
	            this.layer = layer;
	
	            // Defer the rest of setup until the first click
	            _playerElement.oncontextmenu = this.rightClick.bind(this);
	        },
	
	        addOffListener : function(element) {
	            element.addEventListener('mousedown', this.hideMenuHandler);
	            element.addEventListener('touchstart', this.hideMenuHandler);
	            element.addEventListener('pointerdown', this.hideMenuHandler);
	        },
	
	        removeOffListener : function(element) {
	            element.removeEventListener('mousedown', this.hideMenuHandler);
	            element.removeEventListener('touchstart', this.hideMenuHandler);
	            element.removeEventListener('pointerdown', this.hideMenuHandler);
	        },
	
	        destroy : function() {
	            clearTimeout(this._menuTimeout);
	            if(this.el) {
	                this.hideMenu();
	                this.elementUI.off();
	                this.removeOffListener(this.playerElement);
	                this.removeOffListener(document);
	                this.hideMenuHandler = null;
	                this.el = null;
	            }
	
	            if (this.playerElement) {
	                this.playerElement.oncontextmenu = null;
	                this.playerElement = null;
	            }
	
	            if (this.model) {
	                this.model.off('change:provider', this.updateHtml);
	                this.model = null;
	            }
	
	        }
	    });
	
	    return RightClick;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 162 */
/*!***************************************!*\
  !*** ./src/templates/rightclick.html ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "        <li class=\"jw-reset"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.featured : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n            <a href=\""
	    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
	    + "\" class=\"jw-reset\" target=\"_top\">\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showLogo : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "                "
	    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	    + "\n            </a>\n        </li>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return " jw-featured";
	},"4":function(container,depth0,helpers,partials,data) {
	    return "                <span class=\"jw-icon jw-rightclick-logo jw-reset\"></span>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\"jw-rightclick jw-reset\">\n    <ul class=\"jw-reset\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "    </ul>\n</div>";
	},"useData":true});

/***/ },
/* 163 */
/*!******************************!*\
  !*** ./src/js/view/title.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils) {
	
	    var Title = function(_model) {
	        this.model = _model;
	
	        this.model.on('change:playlistItem', this.playlistItem, this);
	    };
	
	    _.extend(Title.prototype, {
	        // This is normally shown/hidden by states
	        //   these are only used for when no title exists
	        hide : function() {
	            this.el.style.display = 'none';
	        },
	        show : function() {
	            this.el.style.display = '';
	        },
	
	        setup : function(titleEl) {
	            this.el = titleEl;
	
	            // Perform the DOM search only once
	            var arr = this.el.getElementsByTagName('div');
	            this.title = arr[0];
	            this.description = arr[1];
	
	            if (this.model.get('playlistItem')) {
	                this.playlistItem(this.model, this.model.get('playlistItem'));
	            }
	
	            this.model.on('change:logoWidth', this.update, this);
	            this.model.on('change:dock', this.update, this);
	        },
	
	        update: function(model) {
	            var titleStyle = {
	                paddingLeft:  0,
	                paddingRight: 0
	            };
	            var controls = model.get('controls');
	            var dockButtons = model.get('dock');
	            var logo = model.get('logo');
	            if (logo) {
	                // Only use Numeric or pixel ("Npx") margin values
	                var margin = 1*(''+logo.margin).replace('px', '');
	                var padding = model.get('logoWidth') + (isNaN(margin) ? 0 : margin);
	                if (logo.position ===  'top-left') {
	                    titleStyle.paddingLeft = padding;
	                } else if (logo.position ===  'top-right') {
	                    titleStyle.paddingRight = padding;
	                }
	            }
	            if (controls && dockButtons && dockButtons.length) {
	                var dockWidthGuess = 56 * dockButtons.length;
	                titleStyle.paddingRight = Math.max(titleStyle.paddingRight, dockWidthGuess);
	            }
	            utils.style(this.el, titleStyle);
	        },
	
	        playlistItem : function(model, item) {
	            if (model.get('displaytitle') || model.get('displaydescription')) {
	                var title = '';
	                var description = '';
	
	                if (item.title && model.get('displaytitle')) {
	                    title = item.title;
	                }
	                if (item.description && model.get('displaydescription')) {
	                    description = item.description;
	                }
	
	                this.updateText(title, description);
	            } else {
	                this.hide();
	            }
	        },
	
	        updateText: function(title, description) {
	            this.title.innerHTML = title;
	            this.description.innerHTML = description;
	
	            if (this.title.firstChild || this.description.firstChild) {
	                this.show();
	            } else {
	                this.hide();
	            }
	        },
	
	        element: function(){
	            return this.el;
	        }
	    });
	
	    return Title;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 164 */
/*!*************************************************!*\
  !*** ./src/js/view/components/nextuptooltip.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/dom */ 57),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! templates/nextup.html */ 165)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(dom, UI, _, utils, nextUpTemplate) {
	    var NextUpTooltip = function(_model, _api, nextButton, playerElement) {
	        this._model = _model;
	        this._api = _api;
	        this._nextButton = nextButton;
	        this._playerElement = playerElement;
	        this.nextUpText = _model.get('localization').nextUp;
	        this.nextUpClose = _model.get('localization').nextUpClose;
	        this.state = 'tooltip';
	    };
	
	    _.extend(NextUpTooltip.prototype, {
	        setup: function() {
	            this.container = document.createElement('div');
	            this.container.className = 'jw-nextup-container jw-reset';
	            var element = utils.createElement(nextUpTemplate());
	            this.addContent(element);
	
	            this.closeButton = this.content.querySelector('.jw-nextup-close');
	            this.closeButton.setAttribute('aria-label', this.nextUpClose);
	            this.tooltip = this.content.querySelector('.jw-nextup-tooltip');
	
	            // Next Up is hidden until we get a valid NextUp item from the nextUp event
	            this.showNextUp = false;
	            this.streamType = undefined;
	
	            // Events
	            this._model.on('change:mediaModel', this.onMediaModel, this);
	            this._model.on('change:streamType', this.onStreamType, this);
	            this._model.on('change:nextUp', this.onNextUp, this);
	
	            // Listen for duration changes to determine the offset from the end for when next up should be shown
	            this._model.on('change:duration', this.onDuration, this);
	            // Listen for position changes so we can show the tooltip when the offset has been crossed
	            this._model.on('change:position', this.onElapsed, this);
	
	            this.onMediaModel(this._model, this._model.get('mediaModel'));
	
	            // Close button
	            new UI(this.closeButton, {'directSelect': true})
	                .on('click tap', this.hide, this);
	            // Tooltip
	            new UI(this.tooltip)
	                .on('click tap', this.click, this);
	            // Next button behavior:
	            // - click = go to next playlist or related item
	            // - hover = show NextUp tooltip without 'close' button
	            new UI(this._nextButton.element(), {'useHover': true, 'directSelect': true})
	                .on('click tap', this.click, this)
	                .on('over', this.show, this)
	                .on('out', this.hoverOut, this);
	        },
	        loadThumbnail : function(url) {
	            this.nextUpImage = new Image();
	            this.nextUpImage.onload = (function() {
	                this.nextUpImage.onload = null;
	            }).bind(this);
	            this.nextUpImage.src = url;
	
	            return {
	                backgroundImage: 'url("' + url + '")'
	            };
	        },
	        click: function() {
	            this.state = 'tooltip';
	            this._api.next();
	            this.hide();
	        },
	        show: function() {
	            if(this.state === 'opened' || this.hideToolTip) {
	                return;
	            }
	            dom.addClass(this.container, 'jw-nextup-container-visible');
	            dom.addClass(this._playerElement, 'jw-flag-nextup');
	        },
	        hide: function() {
	            dom.removeClass(this.container, 'jw-nextup-container-visible');
	            dom.removeClass(this.container, 'jw-nextup-sticky');
	            dom.removeClass(this._playerElement, 'jw-flag-nextup');
	
	            if (this.state === 'opened') {
	                this.state = 'closed';
	            }
	        },
	        hoverOut: function() {
	            if (this.state === 'opened') {
	                // Moving the pointer away from the next button should not show/hide NextUp if it is 'opened'
	                return;
	            }
	            this.hide();
	        },
	        showTilEnd: function() {
	            // Show next up til playback ends. Don't hide even when controlbar is idle
	            if (this.state === 'opened' || this.state === 'closed') {
	                return;
	            }
	            dom.addClass(this.container, 'jw-nextup-sticky');
	            this.show();
	            this.state = 'opened';
	        },
	        setNextUpItem: function(nextUpItem) {
	            var _this = this;
	            // Give the previous item time to complete its animation
	            setTimeout(function () {
	                // hide the tooltip if we don't have a title or a thumbnail image
	                _this.hideToolTip = !(nextUpItem.title || nextUpItem.image);
	
	                if(_this.hideToolTip) {
	                    return;
	                }
	                
	                // Set thumbnail
	                _this.thumbnail = _this.content.querySelector('.jw-nextup-thumbnail');
	                dom.toggleClass(_this.thumbnail, 'jw-nextup-thumbnail-visible', !!nextUpItem.image);
	                if (nextUpItem.image) {
	                    var thumbnailStyle = _this.loadThumbnail(nextUpItem.image);
	                    utils.style(_this.thumbnail, thumbnailStyle);
	                }
	
	                // Set header
	                _this.header = _this.content.querySelector('.jw-nextup-header');
	                _this.header.innerText = _this.nextUpText;
	
	                // Set title
	                _this.title = _this.content.querySelector('.jw-nextup-title');
	                var title = nextUpItem.title;
	                _this.title.innerText = title ? utils.createElement(title).textContent : '';
	            }, 500);
	        },
	        onNextUp: function(model, nextUp) {
	            if (!nextUp) {
	                this._nextButton.toggle(false);
	                this.showNextUp = false;
	                return;
	            }
	            this.showNextUp = nextUp.showNextUp;
	            this._nextButton.toggle(true);
	            this.setNextUpItem(nextUp);
	        },
	        onDuration: function(model, duration) {
	            if (!duration) {
	                return;
	            }
	
	            // Use nextupoffset if set or default to 10 seconds from the end of playback
	            var offset = utils.seconds(model.get('nextupoffset') || -10);
	            if (offset < 0) {
	                // Determine offset from the end. Duration may change.
	                offset += duration;
	            }
	
	            this.offset = offset;
	        },
	        onMediaModel: function(model, mediaModel) {
	            mediaModel.on('change:state', function(model, state) {
	                if (state === 'complete') {
	                    this.state = 'tooltip';
	                    this.hide();
	                }
	            }, this);
	        },
	        onElapsed: function(model, val) {
	            // Show nextup if:
	            // - in playlist mode but not playing an ad
	            // - autoplaying in related mode and autoplaytimer is set to 0
	            // - not a live stream ('Live' or 'DVR')
	            if (this.streamType === 'VOD' && this.showNextUp && (val >= this.offset)) {
	                this.showTilEnd();
	            } else if (this.state === 'opened' || this.state === 'closed') {
	                this.state = 'tooltip';
	                this.hide();
	            }
	        },
	        onStreamType: function(model, streamType) {
	            this.streamType = streamType;
	        },
	        element: function() {
	            return this.container;
	        },
	        addContent: function(elem) {
	            if (this.content) {
	                this.removeContent();
	            }
	            this.content = elem;
	            this.container.appendChild(elem);
	        },
	        removeContent: function() {
	            if (this.content) {
	                this.container.removeChild(this.content);
	                this.content = null;
	            }
	        }
	    });
	
	    return NextUpTooltip;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 165 */
/*!***********************************!*\
  !*** ./src/templates/nextup.html ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\"jw-nextup jw-reset\">\n    <div class=\"jw-nextup-tooltip jw-reset\">\n        <div class=\"jw-nextup-header jw-reset\">\n            "
	    + alias2(alias1((depth0 != null ? depth0.nextUpText : depth0), depth0))
	    + "\n        </div>\n        <div class=\"jw-nextup-body jw-background-color jw-reset\">\n            <div class=\"jw-nextup-thumbnail jw-reset\"></div>\n            <div class=\"jw-nextup-title jw-reset\">"
	    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
	    + "</div>\n        </div>\n    </div>\n    <button class=\"jw-nextup-close\" aria-label=\""
	    + alias2(alias1((depth0 != null ? depth0.nextUpClose : depth0), depth0))
	    + "\"></button>\n</div>\n";
	},"useData":true});

/***/ },
/* 166 */
/*!***********************************!*\
  !*** ./src/templates/player.html ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return "<div id=\""
	    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
	    + "\" class=\"jwplayer jw-reset jw-state-idle\" tabindex=\"0\">\n    <div class=\"jw-aspect jw-reset\"></div>\n    <div class=\"jw-media jw-reset\"></div>\n    <div class=\"jw-preview jw-reset\"></div>\n    <div class=\"jw-title jw-reset\">\n        <div class=\"jw-title-primary jw-reset\"></div>\n        <div class=\"jw-title-secondary jw-reset\"></div>\n    </div>\n    <div class=\"jw-overlays jw-reset\"></div>\n    <div class=\"jw-controls jw-reset\"></div>\n</div>";
	},"useData":true});

/***/ },
/* 167 */
/*!***********************************!*\
  !*** ./src/js/view/breakpoint.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/underscore */ 51),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils) {
	    return function setBreakpoint(playerElement, playerWidth, playerHeight) {
	        var className = 'jw-breakpoint-';
	        var width = playerWidth;
	        var height = playerHeight;
	
	        if (width >= 1280) {
	            className += '7';
	        } else if (width >= 960) {
	            className += '6';
	        } else if (width >= 800) {
	            className += '5';
	        } else if (width >= 640) {
	            className += '4';
	        } else if (width >= 540) {
	            className += '3';
	        } else if (width >= 420) {
	            className += '2';
	        } else if (width >= 320) {
	            className += '1';
	        } else {
	            className += '0';
	        }
	
	        utils.replaceClass(playerElement, /jw-breakpoint-\d+/, className);
	        utils.toggleClass(playerElement, 'jw-orientation-portrait', (height > width));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 168 */
/*!******************************************!*\
  !*** ./src/js/view/display-container.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 54),
	    __webpack_require__(/*! utils/backbone.events */ 74),
	    __webpack_require__(/*! utils/ui */ 120),
	    __webpack_require__(/*! templates/display-container.html */ 169),
	    __webpack_require__(/*! utils/underscore */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Events, UI, Template, _) {
	    var DisplayContainer = function() {
	        this.el = utils.createElement(Template());
	        this.container = this.el.querySelector('.jw-display-controls');
	        this.addButton = function (button) {
	            this.container.appendChild(button.el);
	        };
	    };
	
	    _.extend(DisplayContainer.prototype, {
	        element: function() {
	          return this.el;
	        }
	    });
	
	    return DisplayContainer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 169 */
/*!**********************************************!*\
  !*** ./src/templates/display-container.html ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"jw-display jw-reset\">\n  <div class=\"jw-display-container jw-reset\">\n    <div class=\"jw-display-controls jw-reset\"></div>\n  </div>\n</div>\n";
	},"useData":true});

/***/ },
/* 170 */
/*!*******************************!*\
  !*** ./src/css/jwplayer.less ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/autoprefixer-loader?browsers=%3E%201%25!./../../~/less-loader?compress!./jwplayer.less */ 171);
	if(typeof content === 'string') content = [['all-players', content, '']];
	// add the styles to the DOM
	__webpack_require__(/*! ./../../~/simple-style-loader/addStyles.js */ 60).style(content,'all-players');
	if(content.locals) module.exports = content.locals;

/***/ },
/* 171 */
/*!*******************************************************************************************************************!*\
  !*** ./~/css-loader!./~/autoprefixer-loader?browsers=%3E%201%25!./~/less-loader?compress!./src/css/jwplayer.less ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 172)();
	// imports
	
	
	// module
	exports.push([module.id, ".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:'jw-icons';src:url(" + __webpack_require__(/*! ../../assets/fonts/jw-icons.woff */ 173) + ") format('woff'),url(" + __webpack_require__(/*! ../../assets/fonts/jw-icons.ttf */ 174) + ") format('truetype');font-weight:normal;font-style:normal}.jw-icon-inline,.jw-icon-tooltip,.jw-icon-display,.jw-controlbar .jw-menu .jw-option:before{font-family:'jw-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:\"\\E600\"}.jw-icon-buffer:before{content:\"\\E601\"}.jw-icon-airplay:before{content:\"\\E901\"}.jw-icon-airplay.jw-off:before{content:\"\\E901\"}.jw-icon-cc:before{content:\"\\E605\"}.jw-icon-cue:before{content:\"\\E606\"}.jw-icon-menu-bullet:before{content:\"\\E606\"}.jw-icon-error:before{content:\"\\E607\"}.jw-icon-fullscreen:before{content:\"\\E608\"}.jw-icon-fullscreen.jw-off:before{content:\"\\E613\"}.jw-icon-hd:before{content:\"\\E60A\"}.jw-rightclick-logo:before{content:\"\\E60B\"}.jw-icon-next:before{content:\"\\E60C\"}.jw-icon-pause:before{content:\"\\E60D\"}.jw-icon-play:before{content:\"\\E60E\"}.jw-icon-replay:before{content:\"\\E610\"}.jw-icon-volume:before{content:\"\\E612\"}.jw-icon-volume.jw-off:before{content:\"\\E611\"}.jw-icon-more:before{content:\"\\E614\"}.jw-icon-close:before{content:\"\\E615\"}.jw-icon-rewind:before{content:\"\\E900\"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto !important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:#585858 dotted 1px}.jw-media,.jw-preview,.jw-overlays,.jw-controls{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls{overflow:hidden}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2.5em}.jw-breakpoint-0 .jw-controls,.jw-breakpoint-1 .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:white;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0 auto;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:\"\\E60E\"}.jw-preview,.jw-captions,.jw-title,.jw-overlays,.jw-controls{pointer-events:none}.jw-overlays .jw-plugin,.jw-dock .jw-dock-button,.jw-media,.jw-controlbar,.jw-logo,.jw-skip,.jw-display-icon-container,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-autostart-mute{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-click{position:absolute;width:100%;height:100%}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jwplayer .jw-preview,.jw-error .jw-preview,.jw-stretch-uniform .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display{display:table;height:100%;padding:2.5em 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{display:table-cell;height:100%;text-align:center;vertical-align:middle}.jw-display-controls{display:inline-block}.jw-display-icon-container{border-radius:.25em;display:inline-block;margin:0 .25em}.jw-display-icon-container .jw-icon{cursor:pointer;height:44px;line-height:44px;text-align:center;width:44px}.jw-display-icon-container .jw-icon::before{font-size:22px;position:relative}.jw-display-icon-container .jw-icon.jw-icon-rewind::before{top:2px;padding:.2em .05em .1em}.jw-state-idle .jw-display-icon-container .jw-icon.jw-icon-display::before,.jw-state-paused .jw-display-icon-container .jw-icon.jw-icon-display::before{left:1px}.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-icon{font-family:'jw-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;bottom:0;height:2.5em;width:100%;padding:0 .5em}.jw-slider-horizontal{background-color:transparent}.jw-group{display:table-cell}.jw-controlbar-center-group{padding:0 .5em;width:100%}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-knob:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-icon-display:hover,.jw-option:before:hover{color:#fff}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-elapsed,.jw-text-duration,.jw-text-countdown{display:inline-block;height:2.5em;position:relative;line-height:2.5em;vertical-align:middle;cursor:pointer;padding:0 .5em}.jw-controlbar-left-group .jw-text-duration{display:none}.jw-icon-inline,.jw-icon-tooltip{min-width:1.5625em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0;width:2.25em}.jw-icon-cast button{background-color:transparent;border:none;cursor:pointer;font-size:inherit}.jw-slider-volume.jw-slider-horizontal,.jw-icon-inline.jw-icon-volume{display:none}.jwplayer:not(.jw-breakpoint-0) .jw-text-countdown{display:none}.jw-breakpoint-0 .jw-controlbar .jw-text-duration,.jw-breakpoint-0 .jw-controlbar .jw-text-elapsed{display:none}.jw-dock{clear:right;margin:.75em;display:block;opacity:1}.jw-dock:after{content:'';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;height:2.5em;margin:.5em;position:relative;width:2.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-0.2em;width:.5em;height:.2em;left:50%;margin-left:-0.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-overlay,.jw-dock-button:hover .jw-arrow{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top, #000 0, #000 18%, rgba(0,0,0,0) 100%);background:linear-gradient(to bottom, #000 0, #000 18%, rgba(0,0,0,0) 100%)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:white;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jw-title-primary{font-weight:bold}.jw-title-secondary{margin-top:-0.5em}.jw-breakpoint-0 .jw-title,.jw-breakpoint-1 .jw-title{background:-webkit-linear-gradient(top, rgba(51,51,51,0.75), rgba(51,51,51,0));background:linear-gradient(180deg, rgba(51,51,51,0.75), rgba(51,51,51,0));height:auto;padding:16px 0}.jw-breakpoint-0 .jw-title-primary,.jw-breakpoint-1 .jw-title-primary,.jw-breakpoint-0 .jw-title-secondary,.jw-breakpoint-1 .jw-title-secondary{min-height:inherit;padding:0 16px}.jw-breakpoint-0 .jw-title-secondary,.jw-breakpoint-1 .jw-title-secondary{display:none;margin-top:5px}.jw-slider-container{height:1em;width:100%;position:relative;touch-action:none}.jw-rail,.jw-buffer,.jw-progress{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:rgba(255,255,255,0.2)}.jw-buffer{background-color:rgba(255,255,255,0.3)}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{height:.25em;background-color:rgba(33,33,33,0.9);border-radius:25%;width:.5em}.jw-knob{width:.5em;height:.5em;border-radius:.25em}.jw-slider-horizontal{height:.25em;padding:0}.jw-slider-horizontal.jw-slider-volume{width:4em}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-horizontal .jw-knob{top:-0.125em;margin-left:-0.25em}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{height:.25em}.jw-slider-vertical{padding:.66666667em 1em;position:absolute}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{bottom:0;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-progress{width:.25em}.jw-slider-vertical .jw-slider-container{height:4em}.jw-slider-vertical .jw-knob{right:0;left:-0.125em;margin-bottom:-0.25em}.jw-slider-time{width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;width:100%;height:inherit;text-align:center;display:none;max-height:calc(81.375%);line-height:1.3em;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:white;background-color:black;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-text-track-display{font-size:inherit;line-height:1.3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:calc(81.375%);line-height:1.3em}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:bold;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:\" \"}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-time-tip,.jw-volume-tip,.jw-menu{position:relative;left:-50%;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;bottom:1.25em;padding:.5em;border-radius:.25em}.jw-time-tip .jw-text{color:#fff;line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2.5em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em;padding:.5em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip .jw-skip-icon{display:none;margin-left:-0.75em}.jw-skip .jw-skip-icon:before{content:\"\\E60C\"}.jw-skip .jw-text,.jw-skip .jw-skip-icon{color:rgba(255,255,255,0.6);vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-text,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:-webkit-linear-gradient(top, rgba(25,25,25,0.75), rgba(25,25,25,0.25), rgba(25,25,25,0));background:linear-gradient(180deg, rgba(25,25,25,0.75), rgba(25,25,25,0.25), rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;background-color:transparent;bottom:2.5em;cursor:pointer;left:0;margin:0 auto;opacity:0;padding:5px .5em;position:absolute;right:0;text-align:right;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:all 150ms ease;transition:all 150ms ease;visibility:hidden;width:100%}.jw-breakpoint-0 .jw-nextup-container,.jw-breakpoint-1 .jw-nextup-container{display:none}.jw-nextup-container-visible{opacity:1;-webkit-transform:translateY(5px);transform:translateY(5px);visibility:visible}.jw-nextup{border-radius:0;display:inline-block;overflow:hidden;position:relative;max-width:300px;width:100%}.jw-nextup-header{background:rgba(33,33,33,0.8);box-sizing:border-box;color:#fff;font-size:12px;font-weight:bold;line-height:normal;padding:8px}.jw-nextup-body{background:rgba(0,0,0,0.8);color:#fff;overflow:hidden}.jw-nextup-thumbnail{background-position:center;background-size:cover;display:none;float:left;height:60px;width:45%}.jw-nextup-thumbnail-visible{display:block}.jw-nextup-title{box-sizing:border-box;float:left;font-size:12px;font-weight:bold;line-height:1.3;overflow:hidden;padding:5px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-thumbnail-visible+.jw-nextup-title{height:60px;white-space:normal;width:55%}.jw-nextup-thumbnail-visible+.jw-nextup-title::after{background:-webkit-linear-gradient(top, rgba(0,0,0,0) 0, #000 100%);background:linear-gradient(-180deg, rgba(0,0,0,0) 0, #000 100%);bottom:0;content:'';height:30px;left:0;position:absolute;width:100%}.jw-nextup-close{font-family:'jw-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale;border:none;color:rgba(255,255,255,0.6);font-size:13px;opacity:0;position:absolute;right:5px;top:6px;-webkit-transition:color 150ms ease,opacity 150ms ease,visibility 150ms ease;transition:color 150ms ease,opacity 150ms ease,visibility 150ms ease;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-close:before{content:\"\\E615\"}.jw-nextup-close:active{color:#fff}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{opacity:1;visibility:visible}.jw-autostart-mute{min-width:1.75em;text-align:left;position:absolute;bottom:.5em;right:.5em;height:44px;width:44px;text-align:center}.jw-autostart-mute:before{content:\"\\E612\"}.jw-autostart-mute.jw-off:before{content:\"\\E611\"}.jw-autostart-mute::before{background-color:rgba(33,33,33,0.8);padding:5px 4px 5px 6px}.jw-flag-autostart .jw-controlbar,.jw-flag-autostart .jw-nextup,.jw-flag-autostart:not(.jw-state-buffering):not(.jw-state-error):not(.jw-state-complete) .jw-display{display:none}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:\"\\E60E\"}.jw-state-idle .jw-display-icon-rewind,.jw-state-idle .jw-display-icon-next{display:none}.jw-state-idle .jw-captions{display:none}.jw-state-idle .jw-title{display:block}.jw-state-idle:not(.jw-flag-cast-available) .jw-controlbar{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-breakpoint-0):not(.jw-breakpoint-1) .jw-display{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:\"\\E60D\"}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{display:none}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-breakpoint-0):not(.jw-breakpoint-1) .jw-display{display:none}.jwplayer.jw-state-paused .jw-display .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:\"\\E60E\"}.jwplayer.jw-state-paused .jw-autostart-mute{display:none}.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-next{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:before{content:\"\\E601\"}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-preview:not(.jw-flag-casting){display:block}.jwplayer.jw-state-complete .jw-display .jw-icon-display:before{content:\"\\E610\"}.jwplayer.jw-state-complete .jw-display .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:\"\\E610\"}.jwplayer.jw-state-complete .jw-icon-playback:before{font-size:1.55em}.jwplayer.jw-state-complete .jw-captions{display:none}body .jw-error .jw-title,.jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,.jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-preview,.jwplayer.jw-state-error .jw-preview{display:block}body .jw-error .jw-controlbar,.jwplayer.jw-state-error .jw-controlbar{display:none}body .jw-error .jw-captions,.jwplayer.jw-state-error .jw-captions{display:none}body .jw-error:hover .jw-display-icon-container,.jwplayer.jw-state-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}body .jw-error .jw-icon-display,.jwplayer.jw-state-error .jw-icon-display{cursor:default;font-family:'jw-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale}body .jw-error .jw-icon-display:before,.jwplayer.jw-state-error .jw-icon-display:before{content:\"\\E607\"}body .jw-error .jw-icon-display:hover,.jwplayer.jw-state-error .jw-icon-display:hover{color:#fff}body .jw-error .jw-display-icon-next,.jwplayer.jw-state-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,.jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-flag-time-slider-above .jw-dock,.jw-breakpoint-0 .jw-dock,.jw-breakpoint-1 .jw-dock{margin:0}.jw-flag-time-slider-above:not(.jw-breakpoint-0) .jw-dock,.jw-breakpoint-0:not(.jw-breakpoint-0) .jw-dock,.jw-breakpoint-1:not(.jw-breakpoint-0) .jw-dock{padding:0 1%}.jw-flag-time-slider-above .jw-dock-button,.jw-breakpoint-0 .jw-dock-button,.jw-breakpoint-1 .jw-dock-button{margin:0;height:44px;width:44px}.jw-flag-time-slider-above:not(.jw-breakpoint-0) .jw-dock-button,.jw-breakpoint-0:not(.jw-breakpoint-0) .jw-dock-button,.jw-breakpoint-1:not(.jw-breakpoint-0) .jw-dock-button{margin:2% 1%}.jw-flag-time-slider-above .jw-display,.jw-breakpoint-0 .jw-display,.jw-breakpoint-1 .jw-display{padding-bottom:66px}.jw-flag-time-slider-above.jw-breakpoint-0.jw-state-paused .jw-display,.jw-breakpoint-0.jw-breakpoint-0.jw-state-paused .jw-display,.jw-breakpoint-1.jw-breakpoint-0.jw-state-paused .jw-display,.jw-flag-time-slider-above.jw-breakpoint-0.jw-state-playing:not(.jw-flag-user-inactive) .jw-display,.jw-breakpoint-0.jw-breakpoint-0.jw-state-playing:not(.jw-flag-user-inactive) .jw-display,.jw-breakpoint-1.jw-breakpoint-0.jw-state-playing:not(.jw-flag-user-inactive) .jw-display{padding-top:44px}.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-state-paused .jw-display,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-state-paused .jw-display,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-state-paused .jw-display,.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-state-playing:not(.jw-flag-user-inactive) .jw-display,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-state-playing:not(.jw-flag-user-inactive) .jw-display,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-state-playing:not(.jw-flag-user-inactive) .jw-display,.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-flag-cast-available .jw-display,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-flag-cast-available .jw-display,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-flag-cast-available .jw-display,.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-flag-casting .jw-display,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-flag-casting .jw-display,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-flag-casting .jw-display{padding-top:44px}.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-state-paused .jw-display-container,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-state-paused .jw-display-container,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-state-paused .jw-display-container,.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-state-playing:not(.jw-flag-user-inactive) .jw-display-container,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-state-playing:not(.jw-flag-user-inactive) .jw-display-container,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-state-playing:not(.jw-flag-user-inactive) .jw-display-container,.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-flag-cast-available .jw-display-container,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-flag-cast-available .jw-display-container,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-flag-cast-available .jw-display-container,.jw-flag-time-slider-above:not(.jw-breakpoint-0).jw-flag-casting .jw-display-container,.jw-breakpoint-0:not(.jw-breakpoint-0).jw-flag-casting .jw-display-container,.jw-breakpoint-1:not(.jw-breakpoint-0).jw-flag-casting .jw-display-container{padding-top:4%}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar{background:-webkit-linear-gradient(top, rgba(0,0,0,0) 0, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.5) 100%);background:linear-gradient(180deg, rgba(0,0,0,0) 0, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.5) 100%);border:none;border-radius:0;background-size:auto;height:44px;padding:0 10px}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-state-idle:not(.jw-flag-cast-available) .jw-controls,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-state-idle:not(.jw-flag-cast-available) .jw-controls,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-state-idle:not(.jw-flag-cast-available) .jw-controls,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-state-playing.jw-flag-user-inactive:not(.jw-flag-casting) .jw-controls,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-state-playing.jw-flag-user-inactive:not(.jw-flag-casting) .jw-controls,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-state-playing.jw-flag-user-inactive:not(.jw-flag-casting) .jw-controls{background:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar,.jw-breakpoint-0:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar,.jw-breakpoint-1:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar,.jw-flag-time-slider-above:not(.jw-flag-audio-player):not(.jw-flag-live) .jw-controlbar,.jw-breakpoint-0:not(.jw-flag-audio-player):not(.jw-flag-live) .jw-controlbar,.jw-breakpoint-1:not(.jw-flag-audio-player):not(.jw-flag-live) .jw-controlbar{height:66px;padding:22px 0 0}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar{box-shadow:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar .jw-overlay,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar .jw-overlay,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar .jw-overlay{bottom:44px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar .jw-overlay::after,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar .jw-overlay::after,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar .jw-overlay::after{content:'';display:block;height:22px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-group>.jw-icon,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-group>.jw-icon,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-group>.jw-icon,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-group>.jw-text,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-group>.jw-text,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-group>.jw-text{height:44px;line-height:40px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-group>.jw-icon,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-group>.jw-icon,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-group>.jw-icon{font-size:20px;padding:0;text-align:center;width:44px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-group>.jw-icon::before,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-group>.jw-icon::before,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-group>.jw-icon::before{background-color:transparent;background:none;background-size:auto;border:none;border-radius:0;box-shadow:none;height:auto;padding:0}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-group .jw-icon-cast,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-group .jw-icon-cast,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-group .jw-icon-cast{width:auto}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-group .jw-icon-cast button,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-group .jw-icon-cast button,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-group .jw-icon-cast button{font-size:inherit;height:36px;margin-bottom:8px;width:44px}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-rewind,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-rewind,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-rewind,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-rewind,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-rewind,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-rewind,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-next,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-next,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-next,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-next,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-next,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-next,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-playback,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-playback,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-group>.jw-icon-playback,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-playback,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-playback,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-group>.jw-icon-playback{display:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar-center-group,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar-center-group,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar-center-group{height:22px;left:0;padding:0 20px;position:absolute;right:0;top:0;width:100%}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar-left-group,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar-left-group,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar-left-group{margin-left:-5px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-elapsed,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-elapsed,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-elapsed,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-duration,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-duration,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-countdown,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-countdown,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar-left-group .jw-text-countdown{padding:0 10px}.jw-flag-time-slider-above:not(.jw-flag-audio-player):not(.jw-breakpoint-0) .jw-text-duration,.jw-breakpoint-0:not(.jw-flag-audio-player):not(.jw-breakpoint-0) .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-audio-player):not(.jw-breakpoint-0) .jw-text-duration{display:inline-block;padding-left:0}.jw-flag-time-slider-above:not(.jw-flag-audio-player):not(.jw-breakpoint-0) .jw-text-duration::before,.jw-breakpoint-0:not(.jw-flag-audio-player):not(.jw-breakpoint-0) .jw-text-duration::before,.jw-breakpoint-1:not(.jw-flag-audio-player):not(.jw-breakpoint-0) .jw-text-duration::before{content:'/';display:inline-block;padding-right:6px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar-right-group,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar-right-group,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar-right-group{margin-right:-5px;text-align:right}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-controlbar-right-group .jw-text-duration,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-controlbar-right-group .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-controlbar-right-group .jw-text-duration{display:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-volume.jw-slider-vertical,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-volume.jw-slider-vertical,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-volume.jw-slider-vertical{padding:.5em}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-volume.jw-slider-horizontal,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-volume.jw-slider-horizontal,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-volume.jw-slider-horizontal{margin-bottom:2px}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time{background:none;background-color:transparent;height:22px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:22px;-webkit-box-pack:center;justify-content:center}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-cue,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-cue,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-cue{top:auto}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-progress,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-progress,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-progress,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-knob,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-knob,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{background:none;border:none;box-shadow:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-progress,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-progress,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-progress{height:2px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-rail,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-rail{background-color:rgba(255,255,255,0.25)}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-buffer{background-color:rgba(255,255,255,0.5)}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-slider-time .jw-knob,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-slider-time .jw-knob,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{background-color:#fff;border-radius:100%;box-shadow:0 0 1px 1px rgba(0,0,0,0.1);display:block;height:16px;margin-left:-8px;margin-top:-8px;top:50%;width:16px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-tooltip-time,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-tooltip-time,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-tooltip-time{bottom:0;height:auto;line-height:normal;padding:0;pointer-events:none;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-tooltip-time .jw-overlay,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-tooltip-time .jw-overlay,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-tooltip-time .jw-overlay{bottom:22px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-tooltip-time .jw-overlay:after,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-tooltip-time .jw-overlay:after,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-tooltip-time .jw-overlay:after{content:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-tooltip-time .jw-time-tip,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-tooltip-time .jw-time-tip,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-tooltip-time .jw-time-tip{bottom:0}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar{padding-left:10px;padding-right:5px}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar-center-group,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar-center-group,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar-center-group,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar-center-group,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar-center-group,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar-center-group{height:auto;overflow:hidden;padding:0;position:static;text-overflow:ellipsis;width:100%}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-group>.jw-text-alt,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-group>.jw-text-alt,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-group>.jw-text-alt,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-group>.jw-text-alt,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-group>.jw-text-alt,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-group>.jw-text-alt{color:#fff;display:block;margin:0;position:relative;text-align:left;top:-1px}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-text-duration,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-text-duration,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-text-duration,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-text-duration{display:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar .jw-overlay::after,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar .jw-overlay::after,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar .jw-overlay::after,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar .jw-overlay::after,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar .jw-overlay::after,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-controlbar .jw-overlay::after{display:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-text-elapsed,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-text-elapsed,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-text-elapsed,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-text-duration,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-text-duration{display:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar{pointer-events:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-icon,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-icon,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-icon,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-slider-horizontal,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-slider-horizontal,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-slider-horizontal{pointer-events:all}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar-left-group,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar-left-group,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-controlbar-left-group{display:table-cell}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-0 .jw-controlbar-left-group,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-0 .jw-controlbar-left-group,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-0 .jw-controlbar-left-group,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-1 .jw-controlbar-left-group,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-1 .jw-controlbar-left-group,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-1 .jw-controlbar-left-group{display:none}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-0 .jw-group>.jw-text-alt,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-0 .jw-group>.jw-text-alt,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-0 .jw-group>.jw-text-alt,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-1 .jw-group>.jw-text-alt,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-1 .jw-group>.jw-text-alt,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads.jw-breakpoint-1 .jw-group>.jw-text-alt{margin:0}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-plugin,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-plugin,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-plugin{bottom:66px}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-captions,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-captions,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-captions,.jw-flag-time-slider-above:not(.jw-flag-audio-player) video::-webkit-media-text-track-container,.jw-breakpoint-0:not(.jw-flag-audio-player) video::-webkit-media-text-track-container,.jw-breakpoint-1:not(.jw-flag-audio-player) video::-webkit-media-text-track-container{max-height:calc(74.21875%)}.jw-flag-time-slider-above:not(.jw-flag-audio-player) .jw-nextup-container,.jw-breakpoint-0:not(.jw-flag-audio-player) .jw-nextup-container,.jw-breakpoint-1:not(.jw-flag-audio-player) .jw-nextup-container{bottom:66px;padding:5px 20px}.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-ads .jw-nextup-container,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-ads .jw-nextup-container,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-ads .jw-nextup-container,.jw-flag-time-slider-above:not(.jw-flag-audio-player).jw-flag-live .jw-nextup-container,.jw-breakpoint-0:not(.jw-flag-audio-player).jw-flag-live .jw-nextup-container,.jw-breakpoint-1:not(.jw-flag-audio-player).jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-casting .jw-cast{display:block}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-display-icon-container{display:none}.jwplayer.jw-flag-casting .jw-icon-cc,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-hd,.jwplayer.jw-flag-casting .jw-icon-fullscreen{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-volume{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jwplayer.jw-state-playing.jw-flag-casting .jw-display,.jwplayer.jw-state-paused.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-cast-available .jw-icon-airplay{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline-block;height:auto;line-height:2.5em;margin:0 -0.5em 0;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-controls-hidden .jw-controlbar,.jwplayer.jw-flag-controls-hidden .jw-dock,.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-controls-hidden .jw-plugin,.jwplayer.jw-flag-controls-hidden .jw-nextup-container{bottom:.5em}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jw-flag-controls-hidden .jw-controls{visibility:hidden}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-nextup-container{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-user-inactive.jw-state-playing.jw-flag-casting .jw-dock{display:block}.jwplayer.jw-flag-user-inactive.jw-state-playing.jw-flag-casting .jw-nextup-container{bottom:2.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing.jw-flag-casting.jw-flag-time-slider-above .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-nextup-container{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-flag-audio-player .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-flag-casting .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-nextup-container{bottom:calc(3em)}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:calc(81.375%)}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:calc(81.375%)}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jwplayer.jw-flag-media-audio .jw-autostart-mute{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-autostart-mute{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads:not(.jw-breakpoint-0):not(.jw-breakpoint-1) .jw-display{display:none}.jwplayer.jw-flag-ads.jw-breakpoint-0 .jw-display-icon-rewind,.jwplayer.jw-flag-ads.jw-breakpoint-1 .jw-display-icon-rewind,.jwplayer.jw-flag-ads.jw-breakpoint-0 .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-breakpoint-1 .jw-display-icon-next{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-text,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline-block;height:auto;line-height:2.5em;margin:0 -0.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads-googleima.jw-flag-ads-vpaid-controls .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-breakpoint-0 .jw-controls,.jwplayer.jw-flag-ads-vpaid.jw-breakpoint-1 .jw-controls{background:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none !important}.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo{display:none}.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open-related .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}.jw-flag-controls-disabled.jwplayer .jw-captions{max-height:none}.jw-flag-controls-disabled.jwplayer video::-webkit-media-text-track-container{max-height:none}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch.jw-breakpoint-7 .jw-controlbar,.jw-flag-touch.jw-breakpoint-6 .jw-controlbar,.jw-flag-touch.jw-breakpoint-5 .jw-controlbar,.jw-flag-touch.jw-breakpoint-4 .jw-controlbar,.jw-flag-touch.jw-breakpoint-7 .jw-skip,.jw-flag-touch.jw-breakpoint-6 .jw-skip,.jw-flag-touch.jw-breakpoint-5 .jw-skip,.jw-flag-touch.jw-breakpoint-4 .jw-skip,.jw-flag-touch.jw-breakpoint-7 .jw-plugin,.jw-flag-touch.jw-breakpoint-6 .jw-plugin,.jw-flag-touch.jw-breakpoint-5 .jw-plugin,.jw-flag-touch.jw-breakpoint-4 .jw-plugin{font-size:1.5em}.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-captions{bottom:4.25em}.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:inline-block}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-preview,.jwplayer.jw-flag-audio-player .jw-display,.jwplayer.jw-flag-audio-player .jw-title,.jwplayer.jw-flag-audio-player .jw-nextup-container,.jwplayer.jw-flag-audio-player .jw-dock{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{vertical-align:middle;display:table;height:100%;left:0;bottom:0;margin:0;width:100%;min-width:100%}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player .jw-icon-inline{height:auto;line-height:normal}.jwplayer.jw-flag-audio-player .jw-group{vertical-align:middle}.jwplayer.jw-flag-audio-player .jw-controlbar-center-group{padding-bottom:2px}.jwplayer.jw-flag-audio-player.jw-breakpoint-1 .jw-text-elapsed,.jwplayer.jw-flag-audio-player.jw-breakpoint-0 .jw-text-elapsed,.jwplayer.jw-flag-audio-player.jw-breakpoint-1 .jw-text-duration,.jwplayer.jw-flag-audio-player.jw-breakpoint-0 .jw-text-duration{display:none}.jw-hidden{display:none}.jw-skin-seven .jw-background-color{background:rgba(33,33,33,0.8)}.jw-skin-seven .jw-controlbar{background:rgba(33,33,33,0.8)}.jw-skin-seven .jw-text{color:#cecece}.jw-skin-seven .jw-tooltip-title{color:#cecece;border-bottom:1px solid #cecece}.jw-skin-seven .jw-knob{color:#cecece;background-color:#fff}.jw-skin-seven .jw-button-color{color:#cecece}.jw-skin-seven .jw-button-color:hover{color:#FFF}.jw-skin-seven .jw-button-color:focus{outline:none;color:#FFF}.jw-skin-seven .jw-toggle{color:#FFF}.jw-skin-seven .jw-toggle.jw-off{color:#cecece}.jw-skin-seven .jw-toggle.jw-off:hover,.jw-skin-seven .jw-toggle.jw-off:focus{color:#FFF}.jw-skin-seven .jw-toggle:focus{outline:none}.jw-skin-seven .jw-display-icon-container{background-color:rgba(33,33,33,0.8);border-radius:.25em;margin:0 .25em}.jw-skin-seven .jw-display-icon-container .jw-icon{color:#cecece}.jw-skin-seven .jw-display-icon-container:hover{background:#212121}.jw-skin-seven .jw-display-icon-container:hover .jw-icon{color:#FFF}.jw-skin-seven .jw-rail{background:rgba(255,255,255,0.2)}.jw-skin-seven .jw-buffer{background:rgba(255,255,255,0.3)}.jw-skin-seven .jw-progress{background:#fff}.jw-skin-seven .jw-slider-horizontal{background:rgba(33,33,33,0.8);height:.25em}.jw-skin-seven .jw-slider-horizontal .jw-rail,.jw-skin-seven .jw-slider-horizontal .jw-buffer,.jw-skin-seven .jw-slider-horizontal .jw-progress{height:.25em}.jw-skin-seven .jw-slider-horizontal .jw-knob{margin-left:-0.25em}.jw-skin-seven .jw-slider-vertical .jw-knob{margin-bottom:-0.25em}.jw-skin-seven .jw-slider-vertical .jw-slider-container,.jw-skin-seven .jw-slider-vertical .jw-rail,.jw-skin-seven .jw-slider-vertical .jw-progress{width:.25em}.jw-skin-seven .jw-time-tip,.jw-skin-seven .jw-volume-tip,.jw-skin-seven .jw-menu{background:rgba(33,33,33,0.8);border:0;padding:1em}.jw-skin-seven .jw-menu.jw-background-color{background:rgba(33,33,33,0.8)}.jw-skin-seven .jw-skip{background:rgba(33,33,33,0.8);padding:.5em}.jw-skin-seven .jw-skip .jw-skiptext,.jw-skin-seven .jw-skip .jw-skip-icon{color:#cecece}.jw-skin-seven .jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skin-seven .jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skin-seven .jw-time-tip .jw-text,.jw-skin-seven .jw-dock-button .jw-text{color:#cecece}.jw-skin-seven .jw-dock-button{background:rgba(33,33,33,0.8);border-radius:.25em}.jw-skin-seven .jw-dock-button:hover{background:#212121}.jw-skin-seven .jw-icon-cast button{--connected-color:#fff;--disconnected-color:#cecece}.jw-skin-seven .jw-icon-cast button:focus{--connected-color:#fff;--disconnected-color:#FFF}.jw-skin-seven .jw-icon-cast button.jw-off{--connected-color:#cecece}.jw-skin-seven .jw-icon-cast:hover button{--connected-color:#FFF;--disconnected-color:#FFF}.jw-skin-seven .jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-skin-seven .jw-nextup{border-radius:0}.jw-skin-seven .jw-nextup-header{background:rgba(33,33,33,0.8);color:#fff}.jw-skin-seven .jw-nextup-body{background:rgba(0,0,0,0.8);color:#fff}.jw-skin-seven .jw-nextup-thumbnail-visible+.jw-nextup-title::after{background:-webkit-linear-gradient(top, rgba(0,0,0,0) 0, #000 100%);background:linear-gradient(-180deg, rgba(0,0,0,0) 0, #000 100%)}.jw-skin-seven .jw-nextup-close{color:#cecece}.jw-skin-seven .jw-nextup-close:active{color:#fff}.jw-skin-seven .jw-nextup-close:hover{color:#FFF}.jw-skin-seven:not(.jw-flag-audio-player).jw-flag-time-slider-above .jw-controlbar-center-group .jw-slider-horizontal .jw-knob,.jw-skin-seven:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-controlbar-center-group .jw-slider-horizontal .jw-knob,.jw-skin-seven:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-controlbar-center-group .jw-slider-horizontal .jw-knob{border-radius:100%;height:16px;margin-left:-8px;margin-top:-8px;width:16px}.jw-skin-seven:not(.jw-flag-audio-player).jw-flag-time-slider-above .jw-progress,.jw-skin-seven:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-progress,.jw-skin-seven:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-progress{background:#fff}.jw-skin-seven:not(.jw-flag-audio-player).jw-flag-time-slider-above .jw-tooltip-time .jw-time-tip,.jw-skin-seven:not(.jw-flag-audio-player).jw-breakpoint-0 .jw-tooltip-time .jw-time-tip,.jw-skin-seven:not(.jw-flag-audio-player).jw-breakpoint-1 .jw-tooltip-time .jw-time-tip{border-radius:.25em}.jw-skin-seven.jwplayer:hover .jw-display-icon-container{background-color:#212121}.jw-skin-seven .jw-color-active{color:#fff;stroke:#fff;border-color:#fff}.jw-skin-seven .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-skin-seven .jw-color-inactive{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-skin-seven .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-skin-seven .jw-option{color:#cecece}.jw-skin-seven .jw-option:hover{color:#FFF}.jw-skin-seven .jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,0.1)}.jw-skin-seven .jw-display-icon-container{border-radius:3.5em}.jw-skin-seven .jw-display-icon-container:hover .jw-icon{color:#FFF}.jw-skin-seven .jw-display-icon-container>.jw-icon{color:rgba(255,255,255,0.9)}.jw-skin-seven .jw-dock-button{border-radius:2.5em}.jw-skin-seven .jw-dock-button:hover{background:rgba(33,33,33,0.8)}.jw-skin-seven .jw-menu{padding:0}.jw-skin-seven .jw-dock .jw-overlay{border-radius:.5em}.jw-skin-seven .jw-skip{border-radius:.5em}.jw-skin-seven .jw-text{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}", ""]);
	
	// exports


/***/ },
/* 172 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 173 */
/*!************************************!*\
  !*** ./assets/fonts/jw-icons.woff ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "jw-icons.woff";

/***/ },
/* 174 */
/*!***********************************!*\
  !*** ./assets/fonts/jw-icons.ttf ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "jw-icons.ttf";

/***/ },
/* 175 */
/*!******************************!*\
  !*** ./src/js/view/error.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! templates/error.html */ 176)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(error) {
	
	    function make(id, skin, title, body) {
	        return error({
	            id: id,
	            skin: skin,
	            title: title,
	            body: body
	        });
	    }
	
	    return make;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 176 */
/*!**********************************!*\
  !*** ./src/templates/error.html ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<div id=\""
	    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\"class=\"jw-skin-"
	    + alias4(((helper = (helper = helpers.skin || (depth0 != null ? depth0.skin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"skin","hash":{},"data":data}) : helper)))
	    + " jw-error jw-reset\">\n    <div class=\"jw-title jw-reset\">\n        <div class=\"jw-title-primary jw-reset\">"
	    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</div>\n        <div class=\"jw-title-secondary jw-reset\">"
	    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
	    + "</div>\n    </div>\n\n    <div class=\"jw-display-container jw-reset\">\n        <div class=\"jw-display-icon-container jw-background-color jw-reset\">\n            <div class=\"jw-icon jw-icon-display jw-reset\" aria-hidden=\"true\"></div>\n        </div>\n    </div>\n</div>\n";
	},"useData":true});

/***/ },
/* 177 */,
/* 178 */
/*!***********************************!*\
  !*** ./src/js/api/api-actions.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/plugins */ 78),
	    __webpack_require__(/*! utils/underscore */ 51),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(plugins, _) {
	
	    return function(_api, _controller) {
	        // Commented out methods are those which are not direct passthroughs
	        //   instead these have custom logic inside api.js
	        //   Ultimately they should be moved into this file
	        var passthroughs = [
	            // 'setup',
	            //'load',
	            //'play',
	            //'pause',
	            //'remove',
	
	            'seek',
	            'skipAd',
	            'stop',
	            'playlistNext',
	            'playlistPrev',
	            'playlistItem',
	            'resize',
	
	            'addButton',
	            'removeButton',
	
	            'registerPlugin',
	
	            'attachMedia',
	            'next'
	        ];
	
	
	        _.each(passthroughs, function(func) {
	            _api[func] = function() {
	                _controller[func].apply(_controller, arguments);
	                return _api;
	            };
	        });
	
	        _api.registerPlugin = plugins.registerPlugin;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 179 */
/*!************************************!*\
  !*** ./src/js/api/api-mutators.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	
	    return function(_api, _controller) {
	
	        var modelGetters = [
	            'buffer',
	            'controls',
	            'position',
	            'duration',
	            'fullscreen',
	            'volume',
	            'item', // this was playlistindex
	            'stretching',
	            'playlist',
	            'captions'
	        ];
	
	        // given a name "buffer", it adds to jwplayer api a function named getBuffer
	        _.each(modelGetters, function(attr) {
	            var format = attr.slice(0,1).toUpperCase() + attr.slice(1);
	
	            _api['get' + format] = function() {
	                return _controller._model.get(attr);
	            };
	        });
	
	        var passthroughs = [
	            'getAudioTracks',
	            'getCaptionsList',
	
	            'getWidth',
	            'getHeight',
	            'getCurrentAudioTrack',
	            'setCurrentAudioTrack',
	
	            'getCurrentCaptions',
	            'setCurrentCaptions',
	
	            'getCurrentQuality',
	            'setCurrentQuality',
	
	            'getQualityLevels',
	            'getVisualQuality',
	
	            'getConfig',
	            'getState',
	
	            'getSafeRegion',
	            'isBeforeComplete',
	            'isBeforePlay',
	
	            'getProvider',
	            'detachMedia'
	
	            // These are implemented in api.js, but should be here
	            //'getItemMeta',
	            //'getMeta',
	            //'getPlaylistItem',
	            //'getContainer',
	            //'playlistItem',
	        ];
	
	        var passthroughsChain = [
	            // Sisters of the model getters
	            'setControls',
	            'setFullscreen',
	            'setVolume',
	            'setMute',
	            'setCues',
	            'setCaptions'
	        ];
	
	        // getters
	        _.each(passthroughs, function(func) {
	            _api[func] = function() {
	                if (_controller[func]) {
	                    return _controller[func].apply(_controller, arguments);
	                }
	                return null;
	            };
	        });
	        // setters (chainable)
	        _.each(passthroughsChain, function(func) {
	            _api[func] = function() {
	                _controller[func].apply(_controller, arguments);
	                return _api;
	            };
	        });
	
	        // This is here because it binds to the methods declared above
	        _api.getPlaylistIndex = _api.getItem;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 180 */
/*!*******************************************!*\
  !*** ./src/js/api/callbacks-deprecate.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 51),
	    __webpack_require__(/*! events/events */ 73)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, events) {
	
	    return function init(_api) {
	
	        var _eventMapping = {
	            onBufferChange: events.JWPLAYER_MEDIA_BUFFER,
	            onBufferFull: events.JWPLAYER_MEDIA_BUFFER_FULL,
	            onError: events.JWPLAYER_ERROR,
	            onSetupError: events.JWPLAYER_SETUP_ERROR,
	            onFullscreen: events.JWPLAYER_FULLSCREEN,
	            onMeta: events.JWPLAYER_MEDIA_META,
	            onMute: events.JWPLAYER_MEDIA_MUTE,
	            onPlaylist: events.JWPLAYER_PLAYLIST_LOADED,
	            onPlaylistItem: events.JWPLAYER_PLAYLIST_ITEM,
	            onPlaylistComplete: events.JWPLAYER_PLAYLIST_COMPLETE,
	            onReady: events.JWPLAYER_READY,
	            onResize: events.JWPLAYER_RESIZE,
	            onComplete: events.JWPLAYER_MEDIA_COMPLETE,
	            onSeek: events.JWPLAYER_MEDIA_SEEK,
	            onTime: events.JWPLAYER_MEDIA_TIME,
	            onVolume: events.JWPLAYER_MEDIA_VOLUME,
	            onBeforePlay: events.JWPLAYER_MEDIA_BEFOREPLAY,
	            onBeforeComplete: events.JWPLAYER_MEDIA_BEFORECOMPLETE,
	            onDisplayClick: events.JWPLAYER_DISPLAY_CLICK,
	            onControls: events.JWPLAYER_CONTROLS,
	            onQualityLevels: events.JWPLAYER_MEDIA_LEVELS,
	            onQualityChange: events.JWPLAYER_MEDIA_LEVEL_CHANGED,
	            onCaptionsList: events.JWPLAYER_CAPTIONS_LIST,
	            onCaptionsChange: events.JWPLAYER_CAPTIONS_CHANGED,
	            onAdError: events.JWPLAYER_AD_ERROR,
	            onAdClick: events.JWPLAYER_AD_CLICK,
	            onAdImpression: events.JWPLAYER_AD_IMPRESSION,
	            onAdTime: events.JWPLAYER_AD_TIME,
	            onAdComplete: events.JWPLAYER_AD_COMPLETE,
	            onAdCompanions: events.JWPLAYER_AD_COMPANIONS,
	            onAdSkipped: events.JWPLAYER_AD_SKIPPED,
	            onAdPlay: events.JWPLAYER_AD_PLAY,
	            onAdPause: events.JWPLAYER_AD_PAUSE,
	            onAdMeta: events.JWPLAYER_AD_META,
	            onCast: events.JWPLAYER_CAST_SESSION,
	            onAudioTrackChange: events.JWPLAYER_AUDIO_TRACK_CHANGED,
	            onAudioTracks: events.JWPLAYER_AUDIO_TRACKS
	        };
	
	        var _stateMapping = {
	            onBuffer: 'buffer',
	            onPause: 'pause',
	            onPlay: 'play',
	            onIdle: 'idle'
	        };
	
	        // Add state callbacks
	        _.each(_stateMapping, function (value, name) {
	            _api[name] = _.partial(_api.on, value, _);
	        });
	
	        // Add event callbacks
	        _.each(_eventMapping, function (value, name) {
	            _api[name] = _.partial(_api.on, value, _);
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ])
});
;
//# sourceMappingURL=jwplayer.13802cde534870d80fa0.map