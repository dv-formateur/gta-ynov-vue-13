<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>
<script>
    import navbar from './components/Navbar'
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
            navbar
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
