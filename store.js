const store = new Vuex.Store({
    state: {
      count: 0,
      idac: -1,
      act: false,
      personas: [],
      persona: {
        nombre: '',
        apellido: '',
        ci:'',
        sexo: '',
        correo: ''
      },
    },
    mutations: {
      submitPersonas(state, persona){
        state.personas.push(),
        state.persona = persona,
        localStorage.setItem('data', JSON.stringify(state.personas))
      },
      delet(state, index){
        state.persona.splice=index    
           

       },
      verActualizar(state, index){
        state.idac= index,
        state.act= false
      },
      submitActualizar(state,){
        state.act = false

      },

      increment(state) {
        if(state.count >= 20)
          state.count = 20;
        else
          state.count++;
      },
      decrease(state) {
        if(state.count <= 0)
          state.count = 0;
        else
          state.count--;
      },
      submitCount(state, number) {
        if(number >= 20)
          state.count = 20;
        else if(number <= 0)
          state.count = 0;
        else
          state.count = number;
      }
    }
});