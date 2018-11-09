<template>
    <b-navbar class="navbar-dark bg-dark" toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">GTA project</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown v-if="isNotConnected" class="rightItem" text="Gestion Compte" right>
                    <b-dropdown-item v-if="isNotConnected" href="#">Ajouter salarié</b-dropdown-item>
                    <b-dropdown-item v-if="isNotConnected" href="#">Fiche salarié</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isNotConnected" class="rightItem" text="Planning" right>
                    <b-dropdown-item v-if="isNotConnected" href="#">Consultation planning</b-dropdown-item>
                    <b-dropdown-item v-if="isNotConnected" href="#">Compteur d'heures</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isNotConnected" class="rightItem" text="Tableau de bords" right>
                    <b-dropdown-item v-if="isNotConnected" href="#">Contrats de travail</b-dropdown-item>
                    <b-dropdown-item v-if="isNotConnected" href="#">Bilan d'annualisation</b-dropdown-item>
                    <b-dropdown-item v-if="isNotConnected" href="#">Solde CP</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown v-if="isNotConnected" class="rightItem" text="Demandes" right>
                    <b-dropdown-item v-if="isNotConnected" href="#">Faire une demande</b-dropdown-item>
                    <b-dropdown-item v-if="isNotConnected" href="#">Gérer les demandes</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-if="isNotConnected" class="rightItem">Logs</b-nav-item>
                <b-nav-item v-if="isNotConnected" class="rightItem">Absence</b-nav-item>
            </b-navbar-nav>
            <img v-if="isNotConnected" src="../assets/power.png" width=20 height=20 class="d-inline-block align-top" alt="BV">
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            isNotConnected: false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rightItem {
        margin-right:20px;
    }
</style>
