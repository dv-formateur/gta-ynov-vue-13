<template>
    <div class="container">
        <h1>Planning</h1>
        <button type="button" class="btn btn-outline-warning" @click="filterAbsences">Absences</button>
        <button type="button" class="btn btn-outline-info" @click="filterHoraires">Horaires</button>
        <button type="button" class="btn btn-outline-success" @click="getAllEvents">Tout afficher</button>
        <form class="form-inline">
            <div  class="form-group">
                <label for="datebegin">De</label>
                <input v-model="datebegin" class="form-control" type="date" id="datebegin">
                <label for="dateEnded" class="col-form-label">À</label>
                <input v-model="dateEnded" class="form-control" type="date" value="2011-08-19" id="dateEnded">
                <button type="button" @click="validPeriod" class="btn btn-primary btn-sm">Valider période</button>
            </div>
        </form>
        <div class="row col-md-12">
            <div v-for="event in events" class="col-md-4 card">
                <div class="card-header">
                    {{event.name}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{event.libelle}}:</h5>
                    <p class="card-text">Date Début:  {{event.debut}}</p>
                    <p class="card-text">Date Fin:  {{event.fin}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                datebegin: "",
                dateEnded: "",
                tempTab:[],
                events: []
            }
        },
        methods: {
            getAllEvents(callback){
                this.events=[];
                this.$http.get('http://localhost:3000/events', {
                    // this.$http.get('https://apigtaproject.herokuapp.com/events', {
                }).then(response => {
                    response.data.events.forEach((evt) => {
                        this.events.push(evt);
                    });
                    if(callback){
                        callback()
                    }
                });
            },
            filterAbsences(){
                this.getAllEvents(()=>{
                    this.events = this.events.filter(evtInt => evtInt.intitule==="Absence");
                });
            },
            filterHoraires(){
                this.getAllEvents(()=>{
                    this.events = this.events.filter(evtInt => evtInt.intitule==="Horaire");
                });
            },
            validPeriod(){
                let dateDebutForm = new Date(this.datebegin);
                let dateFinForm = new Date(this.dateEnded);
                this.events.forEach((eventDate) =>{
                    if(new Date(eventDate.debut) < dateDebutForm && new Date(eventDate.fin) < dateFinForm){
                        this.events = this.events.filter(eventDate => new Date(eventDate.debut) >= dateDebutForm);
                    }
                });
            }
        },
        mounted(){
            this.getAllEvents();
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin-top:30px;
        margin-bottom:30px;
    }
    label{
        margin-right:25px;
        margin-left:25px;
    }
    button{
        margin-left:30px;
    }
    .card{
        margin-top:25px;
    }
    form{
        margin-top:35px;
    }
</style>
