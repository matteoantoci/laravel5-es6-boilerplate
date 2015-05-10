(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _modelModule = require('./model/Module');

global.app = function () {
    var myModule = new _modelModule.Module();
    var div = document.createElement('div');
    div.id = 'test';
    div.textContent = myModule.getMessage();
    document.body.appendChild(div);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./model/Module":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = (function () {
    function Module() {
        _classCallCheck(this, Module);

        this.msg = "Hello world!";
    }

    _createClass(Module, [{
        key: "getMessage",
        value: function getMessage() {
            return this.msg;
        }
    }]);

    return Module;
})();

exports.Module = Module;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFudG9jaS9Xb3Jrc3BhY2UvcG9ja2V0LWRvd25sb2FkZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9zcmMvYXBwLmpzIiwiL1VzZXJzL21hbnRvY2kvV29ya3NwYWNlL3BvY2tldC1kb3dubG9hZGVyL3Jlc291cmNlcy9hc3NldHMvanMvc3JjL21vZGVsL01vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzsyQkNBcUIsZ0JBQWdCOztBQUVyQyxNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDckIsUUFBSSxRQUFRLEdBQUcsaUJBSFgsTUFBTSxFQUdpQixDQUFDO0FBQzVCLFFBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsT0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFDaEIsT0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDeEMsWUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDbEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDUkksTUFBTTtBQUVHLGFBRlQsTUFBTSxHQUVLOzhCQUZYLE1BQU07O0FBR0osWUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUM7S0FDN0I7O2lCQUpDLE1BQU07O2VBTUUsc0JBQUU7QUFDVixtQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2pCOzs7V0FSQyxNQUFNOzs7UUFZSixNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge01vZHVsZX0gZnJvbSAnLi9tb2RlbC9Nb2R1bGUnO1xuXG5nbG9iYWwuYXBwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBteU1vZHVsZSA9IG5ldyBNb2R1bGUoKTtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ3Rlc3QnO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IG15TW9kdWxlLmdldE1lc3NhZ2UoKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG59O1xuIiwiY2xhc3MgTW9kdWxlIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubXNnID0gXCJIZWxsbyB3b3JsZCFcIjtcbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlKCl7XG4gICAgICByZXR1cm4gdGhpcy5tc2c7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7TW9kdWxlfTtcbiJdfQ==
