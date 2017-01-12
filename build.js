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

function init() {
  var state = {};

  return state;
}

var initChart = function initChart(type, data, opts) {
  return function (vnode) {
    if (vnode._chartistInstance) {
      vnode._chartistInstance.update(data, opts);
    } else {
      vnode._chartistInstance = new _chartist2.default[type](vnode.elm, data, opts);
    }
  };
};

function chart(type, data, opts) {
  return (0, _h2.default)('div.ff-chart', {
    hook: {
      insert: initChart(type, data, opts),
      update: initChart(type, data, opts)
    }
  });
}

module.exports = chart;
