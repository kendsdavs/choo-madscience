const html = require('choo/html')
const navbar = require('../../shared/navbar')

const li = project => html`
  <p>${project.title}</p>`

module.exports = (state, prev, send) => {
  return html`
    <div>
      ${navbar(state, prev, send)}
      <div class="container-fluid">
        <div class="pull-right">
          <a class="btn btn-primary" href="/projects/new">New Project</a>
        </div>
        <h1>Projects</h1>
      </div>
      <div class="list-group">
        ${state.projects.map(li)}
      </div>
    </div>`
}
