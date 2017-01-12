import R from 'ramda'
import flyd from 'flyd'
import graph from '../index.js'
import render from 'ff-core/render'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'

function init() {
  let state = {}
  const labels = [1,2,3,4,5,6,7,8,9,10]
  state.data$ = flyd.stream({
    labels
  , series: [[1,1,1,1,1,1,1,1,1,1,1]]
  })
  setInterval(ts => {
    state.data$({labels, series: [ R.times(()=> Math.round(Math.random() * 10), 10) ]})
  }, 1000)
  return state
}

function view(state) {
  return h('body', [
    graph('Bar', state.data$(), {
      width: 400
    , height: 200
    })
  ])
}


const patch = snabbdom.init([
  require("snabbdom/modules/class")
, require("snabbdom/modules/style")
, require("snabbdom/modules/props")
, require("snabbdom/modules/eventlisteners")
, require("snabbdom/modules/attributes")
])
const container = document.body
const state = init()
render({container, view, state, patch})
