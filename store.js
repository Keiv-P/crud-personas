const store = new Vuex.Store({
    state:{
        ci:'',
        nombre:'',
        apellido:'',
        sexo:'',
        correo:'',
        idac: -1,
        act: false,
        persona:[]
    },
    mutations:{
        submit: function(state,persona){
            state.persona.push(persona)
            localStorage.setItem('persona', JSON.stringify(this.persona));

        },

       delet: function(index){
           this.persona.splice(index)

       },

       verActualizar: function(index){
           this.idac = index;
           this.ciA = this.persona[index].ci 
           this.nombreA = this.persona[index].nombre 
           this.apellidoA = this.persona[index].apellido
           this.sexoA = this.persona[index].sexo
           this.correoA = this.persona[index].correo
           this.act = true;

       },
       submitActualizar: function(index){
           this.act = false;
           this.persona[index].ci = this.ciA
           this.persona[index].nombre = this.nombreA
           this.persona[index].apellido = this.apellidoA
           this.persona[index].sexo = this.sexoA
           this.persona[index].correo = this.correoA
       }

        

    },
})