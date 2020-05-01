const store = new Vuex.Store({
    state: {
      personas: [],
      persona: {
        nombre: '',
        apellido: '',
        cedula:'',
        sexo: '',
        edad: ''
      },
      id: -1,
    },
      mutations: {
      submitPersonas(state, persona){
        state.personas.push(persona);
        localStorage.setItem('data', JSON.stringify(state.personas))
      },
      delet(state, index){
        state.personas.splice(index, 1)  
       },
      obtenerPersona(state, index){
        
        const persona = state.personas.find((person, inde) => inde === index)
        state.persona = persona
        state.id = index
      },
      editarPersona(){

      }
    }
});