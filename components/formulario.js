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
            :value="persona.ci"
            ref="cedula"
          />
        </div>

        <div class="col-6 form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre"
            :value="persona.nombre"
            ref="nombre"
          />    
        </div>

        <div class="col-6 form-group">
          <input
            type="text"
            class="form-control"
            placeholder="apellido"
            :value="persona.apellido"
            ref="apellido"
          />
        </div>

        <div class="col-6 form-group">
          <input 
            type="text"
            class="form-control"
            placeholder="edad"
            :value="persona.edad"
            ref="edad"
          />
        </div>

        <div class="col-12 form-group">
          <div class="form-check-inline">
            <input 
              type="radio"
              id="sexo-m"
              value="M"
              class="form-check-input"
            />
            <label for="sexo-m" class="form-check-label">Masculino</label>
          </div>

          <div class="form-check-inline">
            <input 
              type="radio"
              id="sexo-f"
              value="F"
              class="form-check-input"
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
    ...Vuex.mapState(['persona', 'id', 'index'])
  },
 
  methods: {
    enviar() {
      const persona = {
        ci: this.$refs.cedula.value,
        nombre: this.$refs.nombre.value,
        apellido: this.$refs.apellido.value,
        edad: this.$refs.edad.value,
        sexo: '',
      }
      this.$store.commit('submitPersonas', persona);
    }
  },
})