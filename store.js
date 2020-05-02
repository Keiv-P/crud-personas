// objeto de dantos inicial de una persona
// se usara en caso de querer resetear el formulario
const personaVacia = {
  nombre: '',
  apellido: '',
  cedula:'',
  sexo: '',
  edad: ''
};

const store = new Vuex.Store({
    state: {
      personas: [],
      persona: { ...personaVacia }, // dar los valores vacios como stado inicial
      id: null,
    },

    mutations: {
      registrarPersona(state, persona) {
        console.log(persona)
        // agregar una persona nueva
        state.personas.push(persona);
        // guardar cambios en el localstorage
        localStorage.setItem('personas', JSON.stringify(state.personas));
        // resetear el formulario a vacio
        state.persona = { ...personaVacia };
      },

      eliminarPersona(state, index){
        // eliminar persona mediante el index
        state.personas.splice(index, 1);
        // guardar cambios en el localstorage
        localStorage.setItem('personas', JSON.stringify(state.personas));
       },

      obtenerPersona(state, index){
        // obtener datos de la persona mediante el index
        const persona = state.personas.find((person, i) => i === index);
        // copiar los datos de la persona obtenida en el formulario
        state.persona = { ...persona };
        // colocar el index en el store
        state.id = index;
      },

      editarPersona(state, persona) {
        // index de la persona a editar
        const index = state.id;
        // reemplazar los datos de la persona que se quiere editar
        // por los datos nuevos enviados por el usuario
        const copyPersonas = [...state.personas];
        copyPersonas[index] = persona;
        state.personas = copyPersonas;
        // resetear el formulario a vacio
        state.persona = { ...personaVacia }
        // quitar el index del store
        state.id = null;
        // guardar cambios en el localstorage
        localStorage.setItem('personas', JSON.stringify(state.personas));
      },
      vaciarFormulario(state) {
        state.persona = { ...personaVacia };
      }
    }
});