<template>
    <div class="container">
        <h1>GESTION DES DEMANDES</h1>
        <table class="table">
            <thead class="bg-info">
            <tr>
                <th scope="col">Collaborateur</th>
                <th scope="col">Début</th>
                <th scope="col">Fin</th>
                <th scope="col">Type absence</th>
                <th scope="col">Commentaire du salarié</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="demande in demandes">
                <th scope="row">{{demande.name}}</th>
                <td>{{demande.debut}}</td>
                <td>{{demande.fin}}</td>
                <td>{{demande.libelle}}</td>
                <td>{{demande.commentaire}}</td>
                <td><button type="button" class="btn btn-outline-success" @click="validateDemand(demande.id)">Valider</button></td>
                <td>
                    <button type="button" class="btn btn-outline-danger" @click="refusedDemand(demande.id)">Refuser</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props : ["nextUrl"],
        data(){
            return {
                user:"",
                demandes:[]
            }
        },
        methods : {
            getAllDemandsFilterByManagerId(){
                this.user=JSON.parse(localStorage.getItem('user'));
                let url = "https://apigtaproject.herokuapp.com/events/"+this.user.id+"/inprogress";
                // let url = "http://localhost:3000/events/"+this.user.id+"/inprogress"
                this.$http.get(url, {
                }).then(response => {
                    this.demandes=response.data.events;
                    console.log(response.data.events)
                });
            },
            validateDemand(id){
                let url = "https://apigtaproject.herokuapp.com/events/"+id+"/validate";
                // let url = "http://localhost:3000/events/"+id+"/validate"
                this.$http.put(url, {
                }).then(response => {
                    this.getAllDemandsFilterByManagerId();
                });
            },
            refusedDemand(id){
                let url = "https://apigtaproject.herokuapp.com/events/"+id+"/refused";
                // let url = "http://localhost:3000/events/"+id+"/refused"
                this.$http.put(url, {
                }).then(response => {
                    this.getAllDemandsFilterByManagerId();
                });
            }
        },
        beforeMount(){
            this.getAllDemandsFilterByManagerId();
        }
    }
</script>
<style scoped>
    h1{
        margin-top:30px;
        margin-bottom:30px;
    }
</style>