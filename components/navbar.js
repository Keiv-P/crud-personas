Vue.component('Navbar', {
    template: /*html*/ `
    <div>
      <nav class="navbar navbar-dark bg-primary">
         <div class="container">
           <span class="navbar-text">
             <img src="./img/vue-logo_(1).png" class="img mx-3">
             <span class="text-light">PERSONAS</span>
             <span class="badge badge-secondary">0</span> 
           </span>
         </div>
      </nav>
        <div class="mx-5 my-5">
            <button
              @click="vaciarFormulario()"
              type="button" 
              class="btn btn-success" 
              data-toggle="modal" data-target="#form-modal">
                REGISTRAR
            </button>
        </div>
    </div>
    `,
    methods: {
      ...Vuex.mapMutations(['vaciarFormulario'])
    }
})
