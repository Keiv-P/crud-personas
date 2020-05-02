Vue.component('Tabla', {
    template: /*html*/ `
        <div class="container">
        <caption><h4> Personas </h4></caption>
        <hr>
          <table class="table table-striped">
            <thead class="thead-light">
                <tr>
                    <th scope="col">CI</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Accion</th>
                </tr>
             </thead>
        <tbody>
          <tr v-for="(persona, index) in personas">
              <td>{{ persona.cedula }}</td>  
              <td>{{ persona.nombre }}</td> 
              <td>{{ persona.apellido }}</td>  
              <td>{{ persona.sexo }}</td>                        
              <td>{{ persona.edad }}</td>
              <td> 
                  <button data-toggle="modal" data-target="#form-modal" @click="obtenerPersona(index)" class="btn btn-info">Editar</button>
                  <button @click="eliminarPersona(index)" class="btn btn-danger">Borrar</button>
              </td>
            </tr> 
         </tbody>
        </table>
    </div> 
    `,
    computed: {
       ...Vuex.mapState(['personas'])
    },
    methods: {
        ...Vuex.mapMutations(['eliminarPersona', 'obtenerPersona'])
    },
    
})