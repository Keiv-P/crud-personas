const myStore = new Vuex.Store({
    state: {
      count: 0,
      persona: {
        nombre: 'alexander',
        edad: 10,
        sexo: ''
      },
    },
    mutations: {
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