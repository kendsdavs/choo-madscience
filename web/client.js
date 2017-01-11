const choo = require('choo')
const html = require('choo/html')
const app = choo()

app.model({
  state: {
    projects: [],
    tasks: []
  },
  reducers: {}
})

const myView = (state, prev, send) => html`
  <div>
    <h1>Hello Choo!</h1>
  </div>`

app.router([
  ['/', require('./pages/home')],
  ['/about', require('./pages/about')],
  ['/projects', require('./pages/projects')]
])

const tree = app.start()
document.body.appendChild(tree)
