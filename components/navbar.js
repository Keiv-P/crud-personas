Vue.component('Navbar', {
    template: /*html*/ `
      <header>
        <nav class="navbar navbar-dark bg-primary">
          <span class="navbar-text">PERSONAS
            <span class="badge badge-secondary">0</span> 
          </span>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
            Launch static backdrop modal
          </button>
        </nav>
      </header>
    `,
})
