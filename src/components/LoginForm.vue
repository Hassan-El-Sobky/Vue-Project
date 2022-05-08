<template lang="">
  <div class="container col-9">
    <div class="row">
      <div style="box-shadow: 3px 3px 3px 3px #78a9c1; border-radius: 20px">
        <form
          class="col-lg-12 formstyle"
          style="padding-top:16px; padding-"
          @submit.prevent="loginUser"
        >
          <button
            @click="signIn"
            :class="logInChosen ? 'primaryBtn' : 'toggleBtn'"
            
          >
            Log In
          </button>

          <button
            
            @click="signUp"
            :class="signUpChosen ? 'primaryBtn' : 'toggleBtn'"
          >
            Sign Up
          </button>
          <br />
              <input
              type="text"
              placeholder="Name"
              v-if="!logInChosen"
                v-model.trim="userData.name"
              >
              <br />
          <br />
          <input 
            v-model.trim="userData.email"
           
            type="email"
            autofocus
            autocomplete="on"
            placeholder="Email"
          />
           <!-- @blur="validateEmail" -->
          <br />
          <br />

          <p class="invalidInput" v-if="!isEmailValid">
            This is a required field.
          </p>
          
          <input class="password" type="password" placeholder="Password"  v-model.trim="userData.password"
           />
            <!-- @blur="validatePassword" -->
          <br />
          <br />

          <p class="invalidInput" v-if="!isPasswordexist">
            This is a required field.
          </p>
          <p class="invalidInput" v-if ="!isPasswordValid">
            Password must exceed 3 characters
          </p>



          <p class="forgotpassword">Forgot Password?</p>

          <button type="submit" class="loginBtn" :disabled ="isDisabled" @click="loggedHandler" v-if="logInChosen">Log In</button>

          <button class="loginBtn" :disabled ="isDisabled" v-if="!logInChosen">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
 import  axios  from 'axios';
//  import Router from 'vue-router'
export default {

  name: "LoginFormComponent",
  data() {
    return {
      logInChosen: true,
      signUpChosen: false,
      isEmailValid: true,
      isPasswordexist: true,
      isPasswordValid: true,
       userData:{
              email:'',
              password:'',
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

      if(!this.logInChosen){
                 axios.post("https://demo.treblle.com/api/v1/auth/register",this.userData).then(
                (res)=>{
                    console.log(res);
                  this.$router.push('/register');
                }
            ).catch(
                (err)=>{
                    console.log(err);
                }
            )
            console.log(this.userData);
          
      } else {

      
          axios.post("https://demo.treblle.com/api/v1/auth/login",this.userData).then(
                (res)=>{
                  console.log(res);
                    console.log(res.data.user.uuid);
                    localStorage.setItem('uuid',res.data.user.uuid);
                       localStorage.setItem('email',res.data.user.email);
                  this.$router.go('/');
                }
            ).catch(
                (err)=>{
                    console.log(err);
                }
            )
            console.log(this.userData);
          }
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
         if(localStorage.getItem("uuid")){
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
