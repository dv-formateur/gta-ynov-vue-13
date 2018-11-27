<template>
    <div class="col-md-6 container">
        <h1>Register</h1>
        <b-form class="justify-content-center">
            <b-form-group label="Name"
                          label-for="name">
                <b-form-input id="name"
                              type="text"
                              v-model="name"
                              required
                              placeholder="Jean Dupont">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Email"
                          label-for="email">
                <b-form-input id="email"
                              type="email"
                              v-model="email"
                              required
                              placeholder="jeandupont@exemple.fr">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Password"
                          label-for="password">
                <b-form-input id="password"
                              type="password"
                              v-model="password"
                              required>
                </b-form-input>
            </b-form-group>
            <b-form-group label="Confirm Password"
                          label-for="password-confirm">
                <b-form-input id="password-confirm"
                              type="password"
                              v-model="password_confirmation"
                              required>
                </b-form-input>
            </b-form-group>
            <b-form-group label="Role"
                          label-for="admin_account">
                <select class="custom-select my-1 mr-sm-2" id="admin_account" v-model="role">
                    <option value="salarie">salarie</option>
                    <option value="resp">resp</option>
                </select>
            </b-form-group>
            <b-form-group label="Manager"
                          label-for="manager">
                <select class="custom-select my-1 mr-sm-2" id="manager" v-model="manager">
                    <option v-for="user in users" :value="user.name">{{user.name}}</option>
                </select>
            </b-form-group>
            <b-button id="submitRegisterButton" @click="handleSubmit" type="submit" variant="primary">
                Register
            </b-button>
        </b-form>
    </div>
</template>
<script>
    export default {
        props : ["nextUrl"],
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                role : "",
                manager:"",
                manager_id:"",
                users:[]
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault();

                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    this.users.forEach((user)=>{
                        if(this.manager===user.name){
                            this.manager_id=user.id;
                        }
                    });
                let url = "https://apigtaproject.herokuapp.com/register";
                // let url = "http://localhost:3000/register";
                this.$http.post(url, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    role: this.role,
                    manager_id:this.manager_id
                })
                    .then(response => {
                        // localStorage.setItem('user',JSON.stringify(response.data.user));
                        // localStorage.setItem('jwt',response.data.token);

                        // if (localStorage.getItem('jwt') != null){
                        //     this.$emit('loggedIn');
                        //     if(this.$route.params.nextUrl != null){
                        //         this.$router.push(this.$route.params.nextUrl)
                        //     }
                        //     else{
                                this.$router.push('/userboard');
                                return alert("User successfully created")
                        //     }
                        // }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                this.password = "";
            this.password_confirmation = "";

        return alert("Passwords do not match")
    }
    },
    getAllSalarie(){
        this.users=[];
        // this.$http.get('http://localhost:3000/user', {
            this.$http.get('https://apigtaproject.herokuapp.com/user', {
        }).then(response => {
            response.data.users.forEach((user) => {
                this.users.push(user);
            });
        });
    },
    },
    beforeMount(){
        this.getAllSalarie();
    }
    }
</script>
<style scoped>
    h1{
        margin-top:30px;
        margin-bottom:30px;
    }
</style>