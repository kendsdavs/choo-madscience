const html = require('choo/html')
const navbar = require('../shared/navbar')

module.exports = (state, prev, send) => {
  return html`
    <div>
      ${navbar(state, prev, send)}
      <div class="jumbotron pa4">
        <h1>Mat Science Tracker</h1>
        <p>Current Mad Science Projects</p>
        <a href="/about">About</a>
      </div>
    </div>`
}
