<template>
    <div class="container">
        <h1>Absences</h1>
        <p>Vous pouvez ajouter des motifs d'absences, pour toutes modifications merci de contacter
            l'administrateur de la plateforme.</p>
        <b-form class="form-inline">
            <b-form-input id="inputAbsence"
                          type="text"
                          v-model="inputAbsence"
                          required
                          placeholder="Congés payés">
            </b-form-input>
            <select v-model="libelletype" class="form-control" id="typeabsence">
                <option v-for="type in types" >{{type.intitule}}</option>
            </select>
            <b-button id="submitButton" @click="addAbsence" type="submit" variant="primary">Ajouter absence</b-button>
        </b-form>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Libelle de l'absence</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="absence in absences">
                <th scope="row">{{absence.id}}</th>
                <td>{{absence.libelle}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                inputAbsence:"",
                absences: [],
                idType:"",
                libelletype:"",
                types:[]
            }
        },
        methods: {
            getAllAbsences(){
                this.absences=[];
                // let url = "https://apigtaproject.herokuapp.com/absences";
                let url = "http://localhost:3000/absences";
                this.$http.get(url,{
                }).then(response => {
                    response.data.absence.forEach((abs) => {
                        let absence= {};
                        absence.id=abs.id;
                        absence.libelle=abs.libelle;
                        this.absences.push(absence);
                    });
                });
            },
            getAllType(){
                // let url = "https://apigtaproject.herokuapp.com/types";
                let url = "http://localhost:3000/types";
                this.$http.get(url,{
                }).then(response => {
                    response.data.type.forEach((typ) => {
                        let type= {};
                        type.id=typ.id;
                        type.intitule=typ.intitule;
                        this.types.push(type);
                        console.log(this.types);
                    });
                });
            },
            addAbsence(){
                this.types.forEach((type) =>{
                  if(type.libelle === this.libelletype) {
                      this.idType=type.id;
                  }
                });
                // let url = "https://apigtaproject.herokuapp.com/absences";
                let url = "http://localhost:3000/absences";
                this.$http.post(url, {
                    absence: {libelle:this.inputAbsence,type_id:this.idType}
                }).then(response => {
                    this.getAllAbsences();
                });
            }
        },
        beforeMount(){
            this.getAllAbsences();
            this.getAllType();
            console.log(this.types);
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin-top:30px;
    }
    label{
        margin-right:25px;
        margin-left:25px;
    }
    button{
        margin-left:30px;
    }
    form{
        margin-top:25px;
        margin-bottom:25px;
    }
</style>