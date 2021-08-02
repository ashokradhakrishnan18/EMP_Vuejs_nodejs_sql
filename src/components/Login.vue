<template>
  <div id="app">
   <v-app id="inspire">
    <v-main >

      <div class="bgimg-1">
       <v-container
        fill-height
       >
         <v-layout
         class="layout"
         >

           <v-flex
            xs12
            sm6
            md6
            lg4
            xl3
            >
 <v-snackbar 
        v-model="snackbar"
        :timeout="timeout"
        color="error" 
      >
       <h4>{{text}}</h4>
      </v-snackbar>
             <v-card
             elevation="24"
             outlined
             tile class="card  mr-10 ml-10" >
              <v-row>
              <v-col cols="12">
                <v-card-text   align="center" justify="center">
                 <v-img src="../assets/ThinkBiGlogo.jpg"  width="200"></v-img>
                  <div  class="pa-3">
                   <v-text-field   label="Uername" v-model="username" type="text"  prepend-icon="mdi-email"></v-text-field>
                    <v-text-field  @keyup.enter="login" label="Password" v-model="password" type="password"  prepend-icon="mdi-lock"></v-text-field>
                     <v-responsive class="text mt-3">By logging in, you agree to our <a><strong class="text-decoration-underline"> Terms & Conditions</strong></a></v-responsive>
                           <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color=#f40000
      ></v-progress-linear>
<v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
 <v-btn class="mt-4 btn-lg"  @click="login"   value="Login" large  block dark>Login</v-btn>
                  </div>
                </v-card-text>
              </v-col>
              </v-row>
            </v-card>
           </v-flex>
        </v-layout>
      </v-container>
     </div>
    </v-main>
  </v-app>
</div>


</template>
<script>
import store from "../store/store";
import SecureLS from "secure-ls";
var ls = new SecureLS({encodingType: 'aes'});
export default {
  name: 'Login',
  store,

data () {
      return {
      username: '',
      password: '',
      snackbar: '',
      timeout: 2000,
      loading: false,
      overlay: false,
      }
},
//  beforeMount(){
//     this.login();
//   },
  computed: {
    // item() {
    //    return this.$store.state.role;
    // }
  },

//  methods: {
//  login: function() {
//              let username = this.username;
//             let password = this.password;
//             this.$store
//               .dispatch("login", { username, password })
//               .then(() => { 
//               this.loading=true,
//               setTimeout(() => (this.$router.push("/home")),3000)
//                })
//               .catch(err => {console.log(err)
             
//               this.snackbar=true
//               this.text="Username and Password Error"
//               setTimeout(() => (this.loading = false), 1000)
//               });
//           }
//         },
 methods: {
 login: function() {
             let username = this.username;
            let password = this.password;
            this.$store
              .dispatch("login", { username, password })
              .then(() => { 
              this.overlay = true,
              this.loading=true ,
              setTimeout(() => (this.$router.push("/home")),2000)
               })
              .catch(err => {console.log(err)
              this.snackbar=true
              this.text="Username and Password Error"
              });
          }
        },
mounted(){
 ls.removeAll()
}
}
</script>
<style >
.hidden-sm-and-down .v-icon {
    color: white !important;
}
.card{
  border-top-style: solid !important;
  border-top-width: 4px !important;
 border-top-color: #f40000 !important;
margin-top: 50%;
box-shadow: 10px 10px !important; 

}
.theme--light.v-label{
color: rgb(153, 147, 147);
}
.text{
color: grey;
}
.bgimg-1 {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btn-lg{
    color: #ffffff;
    background-color: #007DCB !important;
    border: 1px solid #0066bb !important;
}
.bgimg-1 {
  background-image: url("../assets/max.jpg");
  height: 100%;
}
.layout{
justify-content: flex-end;
align-content: center;
}

</style>