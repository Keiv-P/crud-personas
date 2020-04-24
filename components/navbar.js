Vue.component('Navbar', {
    template: /*html*/ `
      <header>
        <nav class="navbar navbar-dark bg-primary">
          <span class="navbar-text">
             <svg class="bi bi-people-fill text-light" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"/>
             </svg>
              <span class="text-light">PERSONAS</span>
            <span class="badge badge-secondary">0</span> 
          </span>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
            Ingresar
          </button>
        </nav>
      </header>
    `,
})
