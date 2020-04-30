const store = new Vuex.Store({
    state: {
      personas: [],
      persona: {
        nombre: '',
        apellido: '',
        ci:'',
        sexo: '',
        correo: ''
      },
      id: null
    },
      mutations: {
      submitPersonas(state, persona){
        state.personas.push(
        state.persona = persona,)
        localStorage.setItem('data', JSON.stringify(state.personas))
      },
      delet(state, index){
        state.personas.splice(index, 1)  
       },
      obtenerPersonas(state, index){
        state.id = index

      },


   
    }
});