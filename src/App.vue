<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
      <connection></connection>
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <!--<router-view/>-->
  </div>
</template>
<script>
    import navbar from './components/Navbar'
    import connection from './components/Login'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'app',
        data() {
            return {
                isNotConnected: true,
                isDrh: true,
                is: true,
                isSalarie: true
            }
        },
        components: {
            navbar,
            connection
        }
    }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
