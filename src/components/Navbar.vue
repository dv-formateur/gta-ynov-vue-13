<template>
    <b-navbar class="navbar-dark bg-dark" toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>
            <router-link class="routerLink" to="dashboard">GTA project</router-link>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav v-if="isLogged" class="ml-auto">
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Gestion Compte" right>
                    <b-dropdown-item v-if="isResponsable">
                        <router-link class="routerLink" to="register">Ajouter salarié</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie" @click="informations">
                        <router-link class="routerLink" to="informations">Fiche salarié
                        </router-link>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Planning" right>
                    <b-dropdown-item v-if="isSalarie">
                        <router-link class="routerLink" to="planning">Consultation planning
                        </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie">
                        <router-link class="routerLink" to="compteur">Compteur d'heures
                        </router-link>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Tableau de bords" right>
                    <b-dropdown-item v-if="isSalarie">
                        <router-link class="routerLink" to="contrats">Contrats de travail
                        </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie">
                        <router-link class="routerLink" to="bilan">Bilan d'annualisation
                        </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="isSalarie">
                        <router-link class="routerLink" to="solde">Solde CP
                        </router-link>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isSalarie" class="rightItem" text="Demandes" right>
                    <b-dropdown-item v-if="isSalarie" @click="demandes">
                        <router-link class="routerLink" to="demandes">Faire une demande
                        </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="isResponsable">
                        <router-link class="routerLink" to="manage">Gérer les demandes
                        </router-link>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-if="isDrh" class="rightItem">
                    <router-link class="routerLink" to="logs">Logs
                    </router-link>
                </b-nav-item>
                <b-nav-item v-if="isDrh" class="rightItem">
                    <router-link class="routerLink" to="absences">Absences
                    </router-link>
                </b-nav-item>
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
                this.isSalarie=true
                this.isResponsable=true
            }else if(this.user.role=="salarie"){
                this.isSalarie=true
            }else{
                this.isResponsable=true
                this.isSalarie=true
            }
        },
        logout: function(){
            localStorage.removeItem('jwt')
            localStorage.removeItem('user')
            this.isLogged=false
            this.isResponsable=false
            this.isSalarie=true
            this.isDrh=false
            this.$router.push('/')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rightItem {
        margin-right:20px;
    }
    .routerLink{
        color:grey;
        text-decoration: none;
    }
</style>
