<template>
    <div class="container">
        <h1>Demandes</h1>
        <p>Ici, vous pouvez réaliser diverses demandes. C'est dernière seront validées par votre N+1.</p>
        <form class="col-md-12">
            <div class="form-inline form-group">
                <label for="debut">Date de début</label>
                <!--<input v-model="debut" class="form-control" type="date" id="debut">-->
                <datetime id="debut" v-model="debut" type="datetime"></datetime>
                <label for="fin" class="col-form-label">Date de fin</label>
                <!--<input v-model="fin" class="form-control" type="date" id="fin">-->
                <datetime id="fin" v-model="fin" type="datetime"></datetime>
                <label for="typeabsence" class="col-form-label">Motif</label>
                <select v-model="abs" class="form-control" id="typeabsence">
                    <option v-for="absence in absences" >{{absence.libelle}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="comments" class="col-form-label">Commentaires</label>
                <textarea class="form-control" id="comments" v-model="comments" rows="3"></textarea>
            </div>
        </form>
        <b-button id="submitButton" @click="addAbsence" type="submit" variant="primary">Ajouter absence</b-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                debut:"",
                fin:"",
                abs:"",
                comments:"",
                user:"",
                idAbs:"",
                event:{},
                absences: []
            }
        },
        methods: {
            getAllAbsences(){
                let url = "https://apigtaproject.herokuapp.com/absences"
                // let url = "http://localhost:3000/absences";
                this.$http.get(url, {
                }).then(response => {
                    response.data.absence.forEach((abs) => {
                        let absence= {};
                        absence.id=abs.id;
                        absence.libelle=abs.libelle;
                        this.absences.push(absence);
                    });
                });
            },
            addAbsence(){
                this.absences.forEach((absence) =>{
                    if(absence.libelle === this.abs){
                        this.idAbs = absence.id
                    }
                });
                this.user= JSON.parse(localStorage.getItem('user'));
                let url = "https://apigtaproject.herokuapp.com/events"
                // let url = "http://localhost:3000/events";
                this.$http.post(url, {
                    event: {debut:this.debut,fin:this.fin,absence_id:this.idAbs,user_id:this.user.id,commentaire:this.comments}
                });
                this.clear();

            },
            clear(){
                this.debut="";
                this.fin="";
                this.comments="";
                this.abs="";

            }
        },
        beforeMount(){
            this.getAllAbsences();
        }
    }
</script>
<style scoped>
    h1{
        margin-top:30px;
    }
    p{
        margin-bottom:30px;
    }
    label{
        margin-right:25px;
        margin-left:25px;
    }
</style>