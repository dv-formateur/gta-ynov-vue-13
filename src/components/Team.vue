<template>
    <div class="container">
        <h1>Gestion de mon équipe</h1>
        <b-table  striped hover :items="items"></b-table>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                user:{},
                items:JSON.parse(localStorage.getItem('team'))
            }
        },
        methods : {
            getMyTeams(){
                this.user=JSON.parse(localStorage.getItem('user'));
                // let url = "https://apigtaproject.herokuapp.com/team/this.user.id";
                let url = "http://localhost:3000/team/"+this.user.id;
                localStorage.removeItem('team');
                this.$http.get(url,{
                }).then(response => {
                    this.team=response.data.team;
                    localStorage.setItem('team',JSON.stringify(this.team));
                });
            },
        },
        beforeMount(){
            this.getMyTeams();
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{
        margin-top:30px;
        margin-bottom:30px;
    }
</style>