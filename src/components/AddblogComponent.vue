<template lang="">
  <div class="container col-9">
    <div class="row">
      <div style="box-shadow: 3px 3px 3px 3px #78a9c1; border-radius: 20px">
        <form
          class="col-lg-12 formstyle"
          style="padding-top:16px; padding-"
          @submit.prevent="loginUser"
        >
        
              <br />
          <br />
          <input 
            v-model.trim="blogData.title"
           
            type="text"
            autofocus
            autocomplete="on"
            placeholder="name"
          />
           <!-- @blur="validateEmail" -->
          <br />
          <br />
           <input 
            v-model.trim="blogData.image"
           
            type="text"
            autofocus
            autocomplete="on"
            placeholder="image url"
          />
          <br/>
          
          <textarea class="password" type="password" placeholder="Description"  v-model.trim="blogData.content"
           ></textarea>
            <!-- @blur="validatePassword" -->
          <br />
          <br />

          <p class="invalidInput" v-if="!isPasswordexist">
            This is a required field.
          </p>
          <p class="invalidInput" v-if ="!isPasswordValid">
            Password must exceed 3 characters
          </p>




          <button type="submit" class="loginBtn" :disabled ="isDisabled" @click="loggedHandler" v-if="logInChosen">Add Blog</button>

 
        </form>
      </div>
    </div>
  </div>
</template>
<script>
 import  axios  from 'axios';
//  import Router from 'vue-router'
export default {

  name: "AddblogComponent",
  data() {
    return {
      logInChosen: true,
      signUpChosen: false,
      isEmailValid: true,
      isPasswordexist: true,
      isPasswordValid: true,
       blogData:{
              title:'',
              content:'',
              image:'',
              user:localStorage.getItem('uuid')
          }
    };
  },

  methods: {
    signUp() {
      this.logInChosen = !this.logInChosen;
      this.signUpChosen = !this.signUpChosen;
    },
    signIn() {
      this.signUpChosen = !this.signUpChosen;
      this.logInChosen = !this.logInChosen;
    },
    // validateEmail() {
    //   if (this.email === "") {
    //     this.isEmailValid = false;
    //   }
    // },
    // validatePassword() {

    //      if(this.password ==="") {
    //       //  this.isPasswordValid=false;
    //        this.isPasswordexist=false;
    //      }
    //      if (this.password <4) {
    //         this.isPasswordValid=false;
    //      }
    // },
    // loggedHandler(){
    //   console.log(this.isEmailValid,this.isPasswordValid);
    //   console.log("logged");
    // },
    loginUser(){

     
                 axios.post("https://demo.treblle.com/api/v1/articles",this.blogData    ).then(
                (res)=>{
                    console.log(res);
                  this.$router.push('/blogs');
                }
            ).catch(
                (err)=>{
                    console.log(err);
                }
            )
            console.log(this.blogData);
          
      } 
      ,
  
  },
   computed: {
      isDisabled() {
        // you can  check your form is filled or not here.
        return false;
      },
    },
    mounted(){
         if(!localStorage.getItem("uuid")){
           this.$router.push('/');
         }
    }
};
</script>
<style scoped>
.formstyle {
  padding-top: 71px;
  padding-right: 335px;
  padding-left: 335px;
  padding-bottom: 66px;
  background-image: url(../assets/circle1.svg);
  background-repeat: no-repeat;
  background-position: 50% 80%;
}

button:hover,
button:active {
  color: white;
  border-color: #002350;
  background-color: #002350;
}

.primaryBtn {
  color: white;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: #78a9c1;
  border-color: white;
  width: 126px;
  height: 40px;
  border-radius: 25px;
  margin-bottom: 48px;
  margin-top: 71px;
}

input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-color: #707070;
  border-width: 1px;
}

.password {
  margin-top: 39px;
}

.forgotpassword {
  margin-top: 48px;
  margin-bottom: 48px;
  margin-left: 300px;
  color: #707070;
  font-size: 15px;
}

.loginBtn {
  font-size: 25px;
  color: #024074;
  background-color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 126px;
  height: 40px;
  border-radius: 25px;
  border-color: #78a9c1;
  width: 170px;
  height: 46px;
}

.toggleBtn {
  color: #857a7a;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: white;
  border-color: #78a9c1;
  width: 126px;
  height: 40px;
  border-radius: 25px;
  margin-bottom: 48px;
  margin-top: 71px;
}

.no-outline:focus {
  outline: none;
}

.invalidInput {
  color: red;
  border-color: red;
}

/* .mywrapper {
        padding: 100px;
        box-shadow: 5px 10px 5px 10px #78A9C1;
    } */
</style>
