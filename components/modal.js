Vue.component('Modal',{
    template: /*html */`
        <div class="modal fade" id="staticBackdrop" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title header" id="exampleModalLabel">Ingresar datos nueva Persona</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="well well-sm">
                                        <form class="form-horizontal" method="post" @submit.prevent="enviar">
                                            <fieldset>                           
                                                <div class="row">
                                                   <div class="row ">                                                    
                                                        <div class="form-group"> 
                                                            <div class="col-md">
                                                            <select class="custom-select " id="inlineFormCustomSelectPref">
                                                                <option selected></option>
                                                                <option value="1">V</option>
                                                                <option value="2">E</option>
                                                            </select>                                            
                                                            </div>     
                                                        </div>                                                                
                                                        <div class="col-md-offside-2">
                                                            <div class="form-group">  
                                                                <input id="cedula" name="cd" type="text" placeholder="Cedula" ref="ci" :value="persona.ci" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">                                                   
                                                        <div class="form-row">                                                          
                                                            <div class="col-md">
                                                                <input id="fname" name="name" type="text" ref="nombre" :value="persona.nombre" placeholder="Nombre" class="form-control" />
                                                            </div>                                                     
                                                            <div class="col-md">
                                                                <input id="lname" name="apelldo" type="text" ref="apellido" :value="persona.apellido" placeholder="Apellido" class="form-control" />
                                                            </div>                                                        
                                                        </div>                    
                                                    </div>                    
            
                                                    <div class="form-group">                                                                                           
                                                        <div class="col-mx-5 md-6">
                                                            <input id="edad" name="edad" type="text" ref="edad" :value="persona.edad" placeholder="Edad" class="form-control" />
                                                        </div>
                                                    </div>  
                                                    <div class="form-group">
                                                        <div class="col-md">  
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                                <label class="form-check-label" for="inlineRadio1">Masculino</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                                <label class="form-check-label" for="inlineRadio2">Femenino</label>
                                                        </div>
                                                    </div>                      
                                                </div>                      
                                            </div>
                                            </fieldset>
                                            <span v-if = "id >= 0">                                                    
                                            <button type="submit" class="btn btn-success float-right">Guardar</button>
                                            </span>
                                            <span v-else>                                                    
                                            <button type="submit" class="btn btn-success float-right">Submit</button>
                                            </span>                                                    
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,


computed: {
   ...Vuex.mapState(['persona', 'id', 'index'])
},

methods: {
    enviar() {
        const persona = {
          nombre: this.$refs.nombre.value,
          apellido: this.$refs.apellido.value,
          ci: this.$refs.ci.value,
        //   sexo: this.$refs.sexo.value,
          correo: this.$refs.edad.value
        };
        this.$store.commit('submitPersonas', persona)
        console.log(persona);

      }
},
})