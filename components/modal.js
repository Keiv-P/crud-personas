Vue.component('Modal',{
    template: /*html */`
      <div class="modal fade" id="form-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-header border-bottom-none">
              <h5 class="modal-title">
                REGISTRAR PERSONA
              </h5>
              <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="container">
                <!-- formulario component -->
                <Formulario />
              </div>
            </div>
    
          </div>
        </div>
      </div>
    `,
})