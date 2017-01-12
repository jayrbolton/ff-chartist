import R from 'ramda'
import flyd from 'flyd'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'ff-core/render'
import Chartist from 'chartist'

const initChart = (type, data, opts, eventStreams) => vnode => {
  if(vnode._chartist) return
  vnode._chartist = new Chartist[type](vnode.elm, data, opts)
  /*
  if(eventStreams && eventStreams.draw$) {
    vnode._chartist.on('draw', eventStreams.draw$)
  } if(eventStreams && eventStreams.created$) {
    vnode._chartist.on('created', eventStreams.created$)
  }
  */
}

function chart(type, data, opts, eventStreams) {
  const init = initChart(type, data, opts, eventStreams)
  return h('div.ff-chart', {
    hook: {insert: init, update: init}
  })
}

module.exports = chart

