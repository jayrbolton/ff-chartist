import chart from '../index.js'
import h from 'snabbdom/h'
import assert from 'assert'
import render from 'ff-core/render'
import snabbdom from 'snabbdom'
import flyd from 'flyd'

function view1(state) {
  return h('div', [
    chart('Bar', { labels: [1,2,3], series: [[1,2,3], [3,4,5]] }, { width: 200 , height: 100 }, state.eventStreams)
  ])
}

const patch = snabbdom.init([ ])

function renderChart(view) {
  const container = document.createElement('div')
  const state = {
    eventStreams: {
      draw$: flyd.stream()
    , created$: flyd.stream()
    }
  }
  render({container, view, state, patch})
  return [container, state]
}

test('it creates a vnode with insert/update hooks', () => {
  const vnode = view1({}).children[0]
  assert(vnode.data.hook.insert && vnode.data.hook.update && vnode.data.hook.insert === vnode.data.hook.update)
})

test('it creates a vnode with the .ff-chart parent class', () => {
  const vnode = view1({}).children[0]
  assert(vnode.sel === 'div.ff-chart')
})

test('render test', () => {
  const [container, state] = renderChart(view1)
  assert(container.firstChild.__chartist__)
})

