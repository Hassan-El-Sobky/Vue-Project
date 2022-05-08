<template>
  <div class="container">
      <div class="row">
          <div class="col-lg-1 col-md-3 col-sm-3" style="color:#024074; font-size:25px">
              TechyBlogs
          </div>
          <div class="col-lg-3 offset-lg-3"></div>

          <router-link to="/" class="col-lg-1 col-md-3 col-sm-3 mb-2" style="font-size:20px">HOME </router-link>
          <router-link to="/blogs" class="col-lg-1 col-md-3 col-sm-3" style="font-size:20px"> BLOGS</router-link>
          <router-link to="/login" v-if="!logged" class="col-lg-2 col-md-3 col-sm-3 mb-2" style="font-size:20px"> LOGIN/REGISTER</router-link>
        <router-link to="/addblog"   v-if="logged" class="col-lg-2 col-md-3 col-sm-3 mb-2" style="font-size:20px">Add New Blog</router-link>

          
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavBarComponent',
    data(){
      return{
          logged:false
      }
    },

  mounted(){
    if(localStorage.getItem("uuid")){
          this.logged=true;
          console.log("tresas");
         }
  }
}
</script>

<style>
a.router-link-active {
    background-color: #B1CCDC;
    border-radius: 46px;
}
</style>