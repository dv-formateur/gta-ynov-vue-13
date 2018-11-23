<template>
    <div class="col-md-4 container" v-if="isNotConnected">
        <h1>Connexion</h1>
        <b-form class="justify-content-center">
            <b-form-group label="Username/email"
                          label-for="email">
                <b-form-input id="email"
                              type="email"
                              v-model="email"
                              required
                              placeholder="exemple@email.com">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Password:"
                          label-for="password">
                <b-form-input id="password"
                              type="password"
                              v-model="password"
                              required>
                </b-form-input>
            </b-form-group>
            <b-button id="submitButton" @click="handleSubmit" type="submit" variant="primary">Connection</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            isNotConnected: localStorage.getItem('jwt')==null,
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            if (this.password.length > 0) {
                // this.$http.post('http://localhost:3000/login', {
                    this.$http.post('https://apigtaproject.herokuapp.com/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(response => {
                        let is_admin = response.data.user.role
                        localStorage.setItem('user',JSON.stringify(response.data.user));
                        localStorage.setItem('jwt',response.data.token);

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn');
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin== "salarie"){
                                    this.isNotConnected = false;
                                    this.$router.push('admin')
                                }
                                else if(is_admin == "drh"){
                                    this.$router.push('dashboard')
                                }else{
                                    this.$router.push('admin')
                                }
                            }
                        }
                    })
            }

        }

    }
}
</script>
<style scoped>
    h1 {
        margin-top:30px;
        margin-bottom:30px;
    }
</style>