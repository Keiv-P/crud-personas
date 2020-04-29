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
      idac: -1,
      act: false,
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
      verActualizar(state, index){
        state.idac= index,
        state.act= false
      },
      submitActualizar(state,){
        state.act = false

      },
    }
});