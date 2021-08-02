<template>
<div id="app">
<v-app id="inspire">
<appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" v-bind:items="breadcombs"></appbar>
<navbar ref="drawer" :items="items"></navbar>
<v-main class="grey lighten-2 ">
<v-container class="my-0">
<v-card>
<v-img
         :src="require(`../assets/ThinkBiGlogo.jpg`)"
        ></v-img>
  <v-textarea background-color="white" :elevation="15" readonly
          filled v-model="subject"
          auto-grow
          label="Subject"
          rows="4"
          row-height="50"
          shaped
        ></v-textarea>
</v-card>
  <!-- <v-layout
      style="margin-top:10%"
         > -->
<v-layout class="mt-4">
           <v-flex
       class="d-flex justify-end "
            >
         <v-btn width="120px" x-large elevation="4" 
        tile color="teal" @click="submit"
        dark
    >
      Submit
    </v-btn>
           </v-flex>
  </v-layout>

      <v-snackbar 
        v-model="snackbar2"
        :timeout="timeout2"
        color="success" 
      >
       <h4>{{text}}</h4>
      </v-snackbar>
 <v-snackbar 
        v-model="snackbar"
        :timeout="timeout"
        color="error" 
      >
       <h4>{{text}}</h4>
      </v-snackbar>
</v-container>
</v-main>
</v-app>
</div>
</template>
<script>
import appbar from './content/appbar'
import navbar from './content/navbar'
import api from '../API/User'

export default {
    name:"Non-Selected",
 components:{
       navbar,
        appbar
     },
 data: () => ({
Mainid:'',
name:'',
emailid:'',
process:'',
Remark:'',
Mode:'',
Result:'',
        snackbar: '',
          timeout: 2000,
           snackbar2: '',
          timeout2: 2000,
          text:'',
    items: [
               { title: 'Home',icon: 'mdi-home',link:'/home',overview:1 },
              { title: 'Index',icon: 'mdi-account-box-outline',link:'/index',overview:1 },
              { title: 'Interviewer',icon: 'mdi-account-star',link:'/interviwer',overview:1 },
            { title: 'Selected',icon: 'mdi-account-plus',link:'/selected',overview:1 },
            { title: 'Non-Selected',icon: 'mdi-account-remove',link:'/nonselected',overview:1 }
              ],
 }),
beforeMount () {
  this.Mainid=this.$route.params.data.Mainid,
   this.name=this.$route.params.data.name,
  this.emailid=this.$route.params.data.emailid,
  this.process=this.$route.params.data.process,
   this.Remark=this.$route.params.data.Remark,
 this.Mode=this.$route.params.data.Mode,
 this.Result=this.$route.params.data.Result

},
computed:{
subject(){
return `Hi ${this.name},
We Hope you are doing good, As you attended the ${this.process} round with us we got the feedback that We are looking candidate with more stuff and knowledge 
so as of now your profile has been rejected ,in future try to come up with more preparation.
 Human Resources Department,
 ThinkBiG Software Solutions Pvt Ltd Company,
 Website : www.thinkbigsoft.com,
 Telephone 044 4210 7759,
 Mobile +(91) 7448444844,
 Email hr@thinkbigsoft.com`
}
},
methods:{
save(){
  var data={
        emailid:this.emailid,
        name:this.name,
        process:this.process
      };
 api.sendmail (data)
   .then(async() => {
          this.snackbar2=true;
          this.text="Mail Sended Succesfully..."
          this.$router.push("/index")
        })
        .catch(() => {
           this.snackbar=true
          this.text="Error on Sending..."
        });
},
submit(){
   var data={
        Mainid:this.Mainid,
        Process:this.process,
        Remark:this.Remark,
        Mode:this.Mode,
        Result:this.Result
      };
 api.addinterviewer(data)
    .then(() => {
          this.snackbar2=true;
          this.text="Interviewer Succesfully Updated..."
          this.save();
        })
        .catch(() => {
           this.snackbar=true
          this.text="Interviewer Already Updated or Error..."
        });
}
}
}
</script>
<style>

</style>