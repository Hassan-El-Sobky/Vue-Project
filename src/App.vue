<template>
  <div>
    <!-- <LoginFormComponent/> -->
            <NavBarComponent/>
    <router-view>
    </router-view>



  </div>
</template>

<script>
// import LoginFormComponent from './components/LoginForm.vue'
// import HomeComponent from './components/HomePage.vue'
import NavBarComponent from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBarComponent,
    // HomeComponent,


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
