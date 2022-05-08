<template lang="">
  <div class="container-fluid">
    <div class="container">
      <div class="row">
      <!-- ################# New section #################### -->


      <!-- ################# Cards section #################### -->
      <div class="row mt-4 mb-4"   style="background-color: #b1ccdc">
        <div v-for="post of allPosts" :key="post.id"
          class="card col-lg-4 col-md-12 col-sm-12 mr-5 ml-5 mt-5 mb-5"
          style="width: 18rem; margin: 0 auto; float: none; margin-bottom: 10px"
        >
          <img
            class="card-img-top"
            :src=post.image 
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text" style="font-size: 25px">
             {{post.title}} 
          </p>
            <a
              href="#"
              style="font-size: 20px; color: black; text-decoration: none"
              >VIEW THE POST →
            </a>
          </div>
        </div>

        <!-- <div
          class="card col-lg-4 col-md-12 col-sm-12 mr-5 ml-5 mt-5 mb-5"
          style="width: 18rem; margin: 0 auto; float: none; margin-bottom: 10px"
        >
          <img
            class="card-img-top"
            src="../assets/vue1.svg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text" style="font-size: 25px">
              State Management In Vue 3
            </p>
            <a
              href="#"
              style="font-size: 20px; color: black; text-decoration: none"
              >VIEW THE POST →
            </a>
          </div>
        </div> -->
<!-- 
        <div
          class="card col-lg-4 col-md-12 col-sm-12 mr-5 ml-5 mt-5 mb-5"
          style="width: 18rem; margin: 0 auto; float: none; margin-bottom: 10px"
        >
          <img
            class="card-img-top"
            src="../assets/vue1.svg"
            alt="Card image cap"
          /> -->
          <!-- <div class="card-body">
            <p class="card-text" style="font-size: 25px">
              State Management In Vue 3
            </p>
            <a
              href="#"
              style="font-size: 20px; color: black; text-decoration: none"
              >VIEW THE POST →
            </a>
          </div>
        </div> -->
      </div>

      <div class="row">
        <div
          class="card mydiv col-lg-4 col-md-12 col-sm-12 mr-5 ml-5 mt-5 mb-5"
          style="width: 18rem; margin: 0 auto; float: none; margin-bottom: 10px"
        >
          <img
            class="card-img-top"
            src="../assets/vue1.svg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text" style="font-size: 25px">
              State Management In Vue 3
            </p>
            <a
              href="#"
              style="font-size: 20px; color: black; text-decoration: none"
              >VIEW THE POST →
            </a>
          </div>
        </div>

        <div
          class="card mydiv col-lg-4 col-md-12 col-sm-12 mr-5 ml-5 mt-5 mb-5"
          style="width: 18rem; margin: 0 auto; float: none; margin-bottom: 10px"
        >
          <img
            class="card-img-top"
            src="../assets/vue1.svg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text" style="font-size: 25px">
              State Management In Vue 3
            </p>
            <a
              href="#"
              style="font-size: 20px; color: black; text-decoration: none"
              >VIEW THE POST →
            </a>
          </div>
        </div>

        <div
          class="card mydiv col-lg-4 col-md-12 col-sm-12 mr-5 ml-5 mt-5 mb-5"
          style="width: 18rem; margin: 0 auto; float: none; margin-bottom: 10px"
        >
          <img
            class="card-img-top"
            src="../assets/vue1.svg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text" style="font-size: 25px">
              State Management In Vue 3
            </p>
            <a
              href="#"
              style="font-size: 20px; color: black; text-decoration: none"
              >VIEW THE POST →
            </a>
          </div>
        </div>

       
      </div>
    </div>
  </div>
  </div>
  
    <FooterComponent/>
</template>
<script>
import FooterComponent from './FooterComponent.vue'
 import axios from 'axios';
export default {
  name: "HomeComponent",
  components : {
    FooterComponent
  },
  data(){
   return{ 
     allPosts:[],
  }
  },
  created(){
     this.getAllPosts()
  },
  methods:{
 async getAllPosts(){
  const res=axios.get("https://demo.treblle.com/api/v1/articles");             
   this.allPosts= (await res).data.articles
   console.log(((await res).data.articles));
               
           }
  }
};
</script>
<style>
.card {
  box-shadow: 2px 10px #bcb6b6;
  border-radius: 35px;
  text-align: left;
}

.card-img-top {
  padding-top: 10px;
  border-radius: 17px;
}

.registerForBlogBtn {
  background-color: #78a9c1;
  border-radius: 22px;
  color: white;
  width: 318px;
  height: 77px;
  box-shadow: 0px 3px #024074;
  font-size: 23px;
  text-align: center;
  margin-top: 150px;
}
</style>
