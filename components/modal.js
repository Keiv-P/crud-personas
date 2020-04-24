Vue.component('Modal',{
    template: /*html */`
        <div class="modal fade" id="staticBackdrop" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title header" id="exampleModalLabel">Ingresar datos nueva Persona</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="well well-sm">
                                        <form class="form-horizontal" method="post"  @submit.prevent="submit">
                                            <fieldset>
                                                <legend class="text-center header">Datos</legend>
                                    
                                                <div class="row ">
                                                    <div class="form-group text-center"> 
                                                        <div class="col-md-offset-2 ml-3">
                                                            <select class="custom-select " id="inlineFormCustomSelectPref">
                                                                <option selected></option>
                                                                <option value="1">V</option>
                                                                <option value="2">E</option>
                                                            </select>
                                            
                                                        </div>          
                                                        <div class="col-md-offset-2">
                                                            <div class="form-group">  
                                                                <input id="cedula" name="name" type="textr" v-model="persona.ci" placeholder="Cedula" class="form-control" />
                                                             </div>
                                                        </div>
                                                    </div>

                                                    <div class="row ">  
                                                        <div class="form-group">
                                                            <div class="col-md">
                                                                <input id="fname" name="name" type="text"   placeholder="Nombre"v-model="persona.nombre"    class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-md">
                                                                <input id="lname" name="name" type="text"   placeholder="Apellido" v-model="persona.apellido" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="col-md-8">  
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                            <label class="form-check-label" for="inlineRadio1">Masculino</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                            <label class="form-check-label" for="inlineRadio2">Femenino</label>
                                                        </div>
                                                     </div>
                                      
            
                                                    <div class="form-group">
                                                        <span class="col-md-1 col-md-offset-2 text-center"><svg class="bi bi-envelope-fill bigicon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M.05 3.555L8 8.414l7.95-4.859A2 2 0 0014 2H2A2 2 0 00.05 3.555zM16 4.697l-5.875 3.59L16 11.743V4.697zm-.168 8.108L9.157 8.879 8 9.586l-1.157-.707-6.675 3.926A2 2 0 002 14h12a2 2 0 001.832-1.195zM0 11.743l5.875-3.456L0 4.697v7.046z"/>
                                                        </svg></span>                                     
                                                        <div class="col-mx-5 md-6">
                                                            <input id="email" name="email" type="text" placeholder="Correo" v-model="persona.correo" class="form-control" />
                                                        </div>
                                                    </div>           
                                                    <div class="form-group">
                                                        <div class="col-md-12 text-center">
                                                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
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
    computed:{
        persona:{
            get(){
                return{
        ci: store.state.ci,
        nombre: store.state.nombre,
        apellido: store.state.apellido,
        sexo: store.state.sexo,
        correo: store.state.correo
        }
    }
}
        // ...Vuex.mapState(['ci','nombre', 'correo', 'apellido', 'sexo'])
    },
    methods:{
        submit() {
            store.commit('submit')
        }

        // ...Vuex.mapMutations(['submit']),
    }
})