<template>
    <div class="col-md-6 container">
        <h1>Information du compte</h1>
        <p>Identifiant utilisateur: <span>{{user.id}}</span></p>
        <p>Nom utilisateur: {{user.name}}</p>
        <p>Email utilisateur: {{user.email}}</p>
        <p>Role utilisateur: {{user.role}}</p>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                user: JSON.parse(localStorage.getItem('user'))
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    h1 {
        margin-top:30px;
        margin-bottom:30px;
    }
    p{
        text-align: left;
    }
</style>