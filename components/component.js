Vue.component('component-1', {
  template: /* html */`
    <div class="my-4 container">
      <button class="btn btn-sm btn-success" @click="increment" type="button">
      +
      </button>
      <span class="text-success">
        =====> 
      </span>
      <span class="badge text-white" :class="colorBadge">
        {{ count }}
      </span>
      <span class="text-danger">
        <======
      </span>
      <button class="btn btn-sm btn-danger" @click="decrease" type="button">
        -
      </button>

      <form @submit.prevent="submit" class="mt-3 row">
        <input 
          type="number"
          :value="count"
          ref="number"
          class="form-control col-3"
        />
        
        <button class="col-1 btn-primary btn" type="submit">
          send
        </button>

        <span>
          {{ persona }}
        </span>

        <div class="col-12">
          <input 
            type="text"
            :value="persona.nombre"
            ref="nombre"
          />
          <button @click="enviar">
            enviar
          </button>
        </div>
      </form>

    </div>
  `,
  computed: {
    count() {
      return this.$store.state.count;
    },
    persona() {
      return this.$store.state.persona;
    },
    colorBadge() {
      if(this.count >= 16) return 'bg-success';
      else if(this.count <= 15 && this.count >= 10) return 'bg-warning';
      else return 'bg-danger';
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrease() {
      this.$store.commit('decrease');
    },
    submit() {
      const number = this.$refs.number.value;
      this.$store.commit('submitCount', number);
    },
    enviar() {
      const persona = {
        nombre: this.$refs.nombre.value,
        edad: 20,
        sexo: 'M',
        ci: 102391301,
      };
      this.$store.commit('enviarPersona', persona)
      console.log(persona);
    }
  }
});