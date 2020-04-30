const store = new Vuex.Store({
    state: {
      personas: [],
      persona: {
        nombre: '',
        apellido: '',
        ci:'',
        sexo: '',
        edad: ''
      },
      id: -1,
    },
      mutations: {
      submitPersonas(state, persona){
        const personass = JSON.parse(localStorage.getItem('personas'));
        state.personas.push(
        state.persona = persona,)
        localStorage.setItem('data', JSON.stringify(state.personas))
      },
      delet(state, index){
        state.personas.splice(index, 1)  
       },
      obtenerPersonas(state, index){
        
        const persona = state.personas.find((person, inde) => inde === index)
        state.persona = persona
        state.id = index
      },
      editarPersona(){

      }


   
    }
});