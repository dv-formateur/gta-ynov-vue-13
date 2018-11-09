<template>
    <b-navbar class="navbar-dark bg-dark" toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">GTA project</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Gestion Compte" right>
                    <b-dropdown-item v-if="isResponsable" href="#">Ajouter salarié</b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie" href="#">Fiche salarié</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Planning" right>
                    <b-dropdown-item v-if="isSalarie" href="#">Consultation planning</b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie" href="#">Compteur d'heures</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Tableau de bords" right>
                    <b-dropdown-item v-if="isSalarie" href="#">Contrats de travail</b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie" href="#">Bilan d'annualisation</b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie" href="#">Solde CP</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Demandes" right>
                    <b-dropdown-item v-if="isSalarie" href="#">Faire une demande</b-dropdown-item>
                    <b-dropdown-item v-if="isResponsable" href="#">Gérer les demandes</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-if="isDrh" class="rightItem">Logs</b-nav-item>
                <b-nav-item v-if="isDrh" class="rightItem">Absence</b-nav-item>
            </b-navbar-nav>
            <img v-if="isLogged" src="../assets/power.png" width=20 height=20 class="d-inline-block align-top" alt="BV"
                 @click="logout">
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            user:null,
            isResponsable:false,
            isSalarie:true,
            isDrh:false,
            isLogged:false
        }
    },
    beforeCreate(){
      setInterval(()=>{
          this.updatLayoutDatas()
      },100)
    },
    methods:{
        updatLayoutDatas(){
            this.isLogged = (localStorage.getItem('jwt')!=null)
            this.user= JSON.parse(localStorage.getItem('user'))
           // Recuperer le droit
            if(this.user.role=="drh"){
                this.isDrh=true
            }else if(this.user.role=="salarie"){
                this.isSalarie=true
            }else{
                this.isResponsable=true
            }
        },
        logout: function(){
            localStorage.removeItem('jwt')
            localStorage.removeItem('user')
            this.isLogged=false,
            this.isResponsable=false,
            this.isSalarie=true,
            this.isDrh=false
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rightItem {
        margin-right:20px;
    }
</style>
