Vue.component('Formulario', {
  template: /*html*/ `
    <form @submit.prevent="enviar">
      <div class="row">
        
        <div class="col-3 form-group">
          <select class="form-control">
            <option selected value="V">V</option>
            <option value="E">E</option>
          </select> 
        </div>

        <div class="col-7 form-group">
          <input 
            type="text"
            class="form-control"
            placeholder="cedula"
            v-model="persona.cedula"
          />
        </div>

        <div class="col-6 form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre"
            v-modal="persona.nombre"
          />    
        </div>

        <div class="col-6 form-group">
          <input
            type="text"
            class="form-control"
            placeholder="apellido"
            v-modal="persona.apellido"
          />
        </div>

        <div class="col-6 form-group">
          <input 
            type="text"
            class="form-control"
            placeholder="edad"
            v-modal="persona.edad"
          />
        </div>

        <div class="col-12 form-group">
          <div class="form-check-inline">
            <input 
              type="radio"
              id="sexo-m"
              value="M"
              class="form-check-input"
              v-model="persona.sexo"
            />
            <label for="sexo-m" class="form-check-label">Masculino</label>
          </div>

          <div class="form-check-inline">
            <input 
              type="radio"
              id="sexo-f"
              value="F"
              class="form-check-input"
              v-model="persona.sexo"
            />
            <label for="sexo-f" class="form-check-label">Femenino</label>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-success float-right" >
            Registrar
          </button>
        </div>

      </div>
    </form>
  `,
  computed: {
    ...Vuex.mapState(['persona', 'id', 'index']),
    ...Vuex.mapMutations(['submitPersonas',])
  },
 
  methods: {
    enviar() {          
      this.$store.commit('submitPersonas', this.persona)
      $('#form-modal').modal('hide')
    }
  },
})