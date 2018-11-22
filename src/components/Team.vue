<template>
    <div class="container">
        <h1>Gestion de mon équipe</h1>
        <b-table  striped hover :items="items"></b-table>
    </div>
</template>
<script>
    const items = [
        { id: 1, Nom: 'Schoepfer Rudy', Email: 'rschoepfer@test.fr', role: 'salarie' },
        { id: 2, Nom: 'Rolland Maxime', Email: 'rmaxime@test.fr', role: 'salarie' },
        { id: 3, Nom: 'Courant Maxime', Email: 'cmaxime@test.fr', role: 'salarie' },
        { id: 4, Nom: 'Saint Martin Matthieu', Email: 'smmatthieu@test.fr', role: 'salarie' }
    ]
    export default {

        data () {
            return {
                items
            }
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