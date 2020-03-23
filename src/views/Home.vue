<template>
  <div class="home">
    <header-app
    @goToCreatePage="createPage = !createPage"
    ></header-app>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderApp from "../components/header/HeaderApp";
  export default {
    name: 'Home',
    data () {
      return {
        createPage: false
      }
    },
    components: {
      HeaderApp
    }
  }
</script>

<style lang="scss" scoped>

</style>
