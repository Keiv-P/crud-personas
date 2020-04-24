Vue.component('Table', {
    template: /*html*/ `
        <div class="container">
        <caption><h4> Personas </h4></caption>
        <hr>
          <table class="table table-responsive table-striped">
              <thead>
                <tr>
                    <th scope="col">CI</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Accion</th>
                </tr>
             </thead>
        <tbody>
        <tr         v-for="(persona, index) in personas">
        <td>            {{ personas.ci }}</td>
  
      <td>            
            <span v-if="act && idac == index">
                <input v-model="nombreA" type="text" class="form-control">
            </span>
            <span v-else>
                {{ personas.nombre }}
            </span>
        </td>
  
      <td>            
            <span v-if="act && idac == index">
                <input v-model="apellidoA" type="text" class="form-control">
            </span>
            <span v-else>
                {{ personas.apellido }}
            </span>
        </td>
  
                      
                          <span v-if="act && idac == index">
                                ut v-model="sexoA" type="text" class="form-control">
                           </span>
                          <span v-else>
                                ersonas.sexo }}
                           </span>
                        >
                <td>            
            <span v-if="act && idac == index">
                            <input v-model="edadActualizar" type="text" class="form-control">
            </span>
            <span v-else>
                            {{ personas.correo }}
            </span>
        </td>
        <td>        
                    

          <span v-if="act && idac == index">
                            <button @click="submitActualizar(index)" class="btn btn-success">Guardar</button>
            </span>
            <span v-else>
                            <button data-target="exampleModal" @click="verActualizar(index)" class="btn btn-            warning">Actualizar</button>
                            <button @click="delet(index)" class="btn btn-danger">Borrar</button>
            </span>
        </td>
    </tr>
                  </tbody>
        </table>
    </div> 
    `,
  
   
})