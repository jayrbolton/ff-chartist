'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _flyd = require('flyd');

var _flyd2 = _interopRequireDefault(_flyd);

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _render = require('ff-core/render');

var _render2 = _interopRequireDefault(_render);

var _chartist = require('chartist');

var _chartist2 = _interopRequireDefault(_chartist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initChart = function initChart(type, data, opts, eventStreams) {
  return function (vnode) {
    if (vnode._chartist) return;
    vnode._chartist = new _chartist2.default[type](vnode.elm, data, opts);
    /*
    if(eventStreams && eventStreams.draw$) {
      vnode._chartist.on('draw', eventStreams.draw$)
    } if(eventStreams && eventStreams.created$) {
      vnode._chartist.on('created', eventStreams.created$)
    }
    */
  };
};

function chart(type, data, opts, eventStreams) {
  var init = initChart(type, data, opts, eventStreams);
  return (0, _h2.default)('div.ff-chart', {
    hook: { insert: init, update: init }
  });
}

module.exports = chart;
