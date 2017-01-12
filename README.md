# flimflam/snabbdom chartist

A thin wrapper around [Chartist](https://gionkunz.github.io/chartist-js/api-documentation.html) that returns a snabbdom VNode so you can work with it in your flimflam setup.

It uses all the same API for the `new Chart` function from the documentation above -- pass in the 'type' ('Line', 'Bar', etc) as the first argument.

This doesn't yet handle dynamic chart updating or the chart events (like 'draw' or 'created').


```js
import chart from 'ff-chartist'

function view(state) {
  const data = {
    series: [[1,2,3],[4,5,6]]
  , labels: ['a', 'b', 'c']
  }
  const options  {width: 100, height: 100}
  return h('div', [
    chart('Line', data, options)
  ])
}

graph.view(stateObject, configurationObject)
```

