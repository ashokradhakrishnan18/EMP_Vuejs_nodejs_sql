<template>
<div id="app">
<v-app id="inspire">
<appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"></appbar>
<navbar ref="drawer" :items="items"  style="z-index: 9999"></navbar>
<v-main class="grey lighten-2 ">

<v-container class="my-0">
<v-card class="pa-5 rounded-lg">  

<v-row>
<v-col md="12 py-0" cols="12">
<h4 class="font-weight-black">Interviewer</h4>
<v-divider class="grey lighten-1 " ></v-divider>
</v-col>

<v-col md="12" cols="12">
 <h4 class="applicant_h4">Candidate</h4>
</v-col>

<v-col md="12 py-0">
<v-col cols="12" md="4 py-0">
                <v-autocomplete
                v-model="candidate"
                :items="people"
                color="blue-grey lighten-2"
                label="Select The Candidate"
                item-text="name"
                item-value="id"
                ></v-autocomplete>
</v-col>
</v-col>

<v-col cols="12" md="6 py-0" lg="3">
 <h4 class="applicant_h4">Candidate Name</h4>
 <v-text-field class="font-weight-regular" readonly
            v-model="candidatename"
            label="Name"
          ></v-text-field>
</v-col>

<v-col cols="12" md="6 py-0"  lg="3">
 <h4 class="applicant_h4">Technology</h4>
 <v-text-field class="font-weight-regular" readonly
            v-model="technology"
            label="Technology"
          ></v-text-field>
</v-col>

<v-col cols="12" md="6 py-0" lg="2">
 <h4 class="applicant_h4">Current CTC</h4>
 <v-text-field class="font-weight-regular" readonly
            v-model="curctc"
            label="CTC"
          ></v-text-field>
</v-col>

<v-col cols="12" md="6 py-0" lg="2">

 <h4 class="applicant_h4">Expected CTC</h4>
 <v-text-field class="font-weight-regular" readonly
            v-model="expctc"
            label="CTC"
          ></v-text-field>
</v-col>
<v-col cols="12" md="6 py-0" lg="2">
<h4 class="applicant_h4">Resume</h4>
<v-btn class="mt-2" color="teal"
  elevation="2"
  large @click="view"
><span style="color:white">View</span></v-btn>
</v-col>
</v-row>
</v-card>
<v-card class="pa-5 rounded-lg mt-3" v-if="candidate">  
<v-row>
<v-col md="12 py-0 mt-5" cols="12">
<v-row class="justify-end mb-2">
  <v-row>
  <h4 class="font-weight-black ml-6">Interviwer Process</h4>
  </v-row>
<v-btn
      class="mx-4"
      fab @click="deleteinterviewer"
      dark
     x-small
      color="grey lighten-3"
    >
<v-icon
      color="teal"
      medium
    >
      mdi-delete
    </v-icon></v-btn>
<!-- <v-btn
      class="mx-3"
      fab
      dark
     x-small
      color="grey lighten-3"
    >
    <v-icon
      mediun
      color="teal"
    >
      mdi-update

    </v-icon></v-btn> -->
</v-row>
<v-divider class="grey lighten-1 " ></v-divider>
</v-col>

<v-col cols="12" lg="3" md="3">
       <v-select v-model="select"
            :items="options"
            label="Select Process"
          ></v-select>
</v-col>
</v-row> 
<section v-show="select==options[0]">
<v-row>
<v-col cols="12" md="6 py-0" >
 <h4 class="applicant_h4">Remark</h4>
   <v-textarea  rows="1" v-model="remarktec" auto-grow
          row-height="20"
      autocomplete="email"
      label="Enter The Remark"
    ></v-textarea>
</v-col>
<v-col cols="12" md="3 py-0" >
 <h4 class="applicant_h4">Mode Of Interview</h4>
   <v-select v-model="selecttecmode" class="mt-1"
            :items="['Face-to-Face','Telephonic','Skype']"
            label="Select Mode"
          ></v-select>

</v-col>
<v-col cols="12" md="2 py-0" >
 <h4 class="applicant_h4">Result</h4>
     <v-select v-model="selecttec" class="mt-1"
            :items="['Selected','Non-Selected']"
            label="Select Result"
          ></v-select>
</v-col>
<v-col cols="12" md="1 py-0" >

<v-btn class="mt-7" color="teal"
  elevation="2"
  large @click="savetec"
><span style="color:white">Save</span></v-btn>

</v-col>
</v-row>
</section>

<section v-show="select==options[1]">
<v-row>
<v-col cols="12" md="6 py-0" >
 <h4 class="applicant_h4">Remark (Technical)</h4>
   <v-textarea  rows="1" v-model="remarktec" auto-grow
          row-height="20" disabled
      autocomplete="email"
      label="Enter The Remark"
    ></v-textarea>
</v-col>
<v-col cols="12" md="3 py-0" >
 <h4 class="applicant_h4">Mode Of Interview (Technical)</h4>
    <v-select v-model="selecttecmode" class="mt-1" disabled
            :items="['Face-to-Face','Telephonic','Skype']"
            label="Select Mode"
          ></v-select>
</v-col>
<v-col cols="12" md="2 py-0" >

 <h4 class="applicant_h4">Result (Technical)</h4>
     <v-select v-model="selecttec" class="mt-1" disabled
            :items="['Selected','Non-Selected']"
            label="Select Process"
          ></v-select>
</v-col>
</v-row>
<v-row>
<v-col cols="12" md="6 py-0" >
 <h4 class="applicant_h4">Remark</h4>
   <v-textarea  rows="1" v-model="remarkman" auto-grow
          row-height="20"
      autocomplete="email"
      label="Enter The Remark"
    ></v-textarea>
</v-col>
<v-col cols="12" md="3 py-0" >
 <h4 class="applicant_h4">Mode Of Interview </h4>
    <v-select v-model="selectmanmode" class="mt-1" 
            :items="['Face-to-Face','Telephonic','Skype']"
            label="Select Mode"
          ></v-select>

</v-col>
<v-col cols="12" md="2 py-0">
 <h4 class="applicant_h4">Result</h4>
     <v-select v-model="selectman" class="mt-1"
            :items="['Selected','Non-Selected']"
            label="Select Process"
          ></v-select>
</v-col>
<v-col cols="12" md="1 py-0" >
<v-btn class="mt-7" color="teal"
  elevation="2"
  large  @click="saveman"
><span style="color:white">Save</span></v-btn>
</v-col>
</v-row>
</section>

<section v-show="select==options[2]">
<v-row>
<v-col cols="12" md="6 py-0" >
 <h4 class="applicant_h4">Remark (Technical)</h4>
   <v-textarea  rows="1" v-model="remarktec" auto-grow
          row-height="20" disabled
      autocomplete="email"
      label="Enter The Remark"
    ></v-textarea>
</v-col>
<v-col cols="12" md="3 py-0" >
 <h4 class="applicant_h4">Mode Of Interview (Technical)</h4>
    <v-select v-model="selecttecmode" class="mt-1" disabled
            :items="['Face-to-Face','Telephonic','Skype']"
            label="Select Mode"
          ></v-select>
</v-col>
<v-col cols="12" md="2 py-0">

 <h4 class="applicant_h4">Result (Technical)</h4>
     <v-select v-model="selecttec" class="mt-1" disabled
            :items="['Selected','Non-Selected']"
            label="Select Process"
          ></v-select>
</v-col>
</v-row>
<v-row>
<v-col cols="12" md="6 py-0 " >
 <h4 class="applicant_h4">Remark (Manager)</h4>
   <v-textarea  rows="1" v-model="remarkman" auto-grow
          row-height="20" disabled
      autocomplete="email"
      label="Enter The Remark"
    ></v-textarea>
</v-col>
<v-col cols="12" md="3 py-0" >
 <h4 class="applicant_h4">Mode Of Interview (Manager)</h4>
    <v-select v-model="selectmanmode" class="mt-1" disabled
            :items="['Face-to-Face','Telephonic','Skype']"
            label="Select Mode"
          ></v-select>
</v-col>
<v-col cols="12" md="2 py-0">

 <h4 class="applicant_h4">Result (Manager)</h4>
     <v-select v-model="selectman" class="mt-1" disabled
            :items="['Selected','Non-Selected']"
            label="Select Process"
          ></v-select>
</v-col>
</v-row>
<v-row>
<v-col cols="12" md="6 py-0" >
 <h4 class="applicant_h4">Remark</h4>
   <v-textarea  rows="1" v-model="remarkhr" auto-grow
          row-height="20" 
      autocomplete="email"
      label="Enter The Remark"
    ></v-textarea>
</v-col>
<v-col cols="12" md="3 py-0" >
 <h4 class="applicant_h4">Mode Of Interview </h4>
    <v-select v-model="selecthrmode" class="mt-1" 
            :items="['Face-to-Face','Telephonic','Skype']"
            
            label="Select Mode"
          ></v-select>
</v-col>
<v-col cols="12" md="2 py-0">

 <h4 class="applicant_h4">Result</h4>
     <v-select v-model="selecthr" class="mt-1" 
            :items="['Selected','Non-Selected']"
            label="Select Process"
          ></v-select>
</v-col>
<v-col cols="12" md="1 py-0" >
<v-btn class="mt-7" color="teal"
  elevation="2"
  large  @click="savehr"
><span style="color:white">Save</span></v-btn>
</v-col>
</v-row>
</section>
</v-card>


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
var fileDownload = require('js-file-download');

export default {
    name:"Interviwer",
 components:{
       navbar,
        appbar
     },
 data: () => ({
  people:[],
candidatename:'',
technology:'',
curctc:'',
expctc:'',
resume:'',


candidate:'',
select:"",
selecttec:'',
selectman:'',
selecthr:'',

remarktec:'',
selecttecmode:'',
remarkman:'',
selectmanmode:'',
remarkhr:'',
selecthrmode:'',

emailid:'',

	options: ['Technical', 'Manager', 'HR'],

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
              ],
  }),
 methods:{

savetec(){
   if(this.selecttec=="Selected"){
  var data={
        Mainid:this.candidate,
        Process:this.select,
        Remark:this.remarktec,
        Mode:this.selecttecmode,
        Result:this.selecttec
      };
 api.addinterviewer(data)
        .then(() => {
          this.snackbar2=true;
          this.text="Interviewer Succesfully Updated..."
          return this.select=""
        })
        .catch(() => {
           this.snackbar=true
          this.text="Interviewer Already Updated or Error..."
        });
   }
else if(this.selecttec=="Non-Selected"){
 let data = {
        Mainid:this.candidate,
        name:this.candidatename,
        emailid: this.emailid,
        process:this.select,
        Remark:this.remarktec,
        Mode:this.selecttecmode,
        Result:this.selecttec
      };

this.$router.push({name: 'Non-Selected',  params: { data }});
  }
else{
  this.snackbar=true
    this.text="Select Invalid..."
}
   },
saveman(){
   if(this.selectman=="Selected"){
  var data={
        Mainid:this.candidate,
        Process:this.select,
        Remark:this.remarkman,
        Mode:this.selectmanmode,
        Result:this.selectman
      };
 api.addinterviewer(data)
      .then(() => {
          this.snackbar2=true;
          this.text="Interviewer Succesfully Updated..."
         return this.select=""
        })
        .catch(() => {
           this.snackbar=true
          this.text="Interviewer Already Updated or Error..."
        });
  }
else if(this.selectman=="Non-Selected"){
 let data = {
        Mainid:this.candidate,
        name:this.candidatename,
        emailid: this.emailid,
        process:this.select,
        Remark:this.remarkman,
        Mode:this.selectmanmode,
        Result:this.selectman
      };
this.$router.push({name: 'Non-Selected',  params: { data }});
  }
else{
  this.snackbar=true
    this.text="Select Invalid..."
}
   },
savehr(){
   if(this.selecthr=="Selected"){
   var data={
        Mainid:this.candidate,
        Process:this.select,
        Remark:this.remarkhr,
        Mode:this.selecthrmode,
        Result:this.selecthr
      };
 api.addinterviewer(data)
    .then(() => {
          this.snackbar2=true;
          this.text="Interviewer Succesfully Updated..."
          return this.select=""
        })
        .catch(() => {
           this.snackbar=true
          this.text="Interviewer Already Updated or Error..."
        });
 }
else if(this.selecthr=="Non-Selected"){
 let data = {
        Mainid:this.candidate,
        name:this.candidatename,
        emailid: this.emailid,
        process:this.select,
       Remark:this.remarkhr,
        Mode:this.selecthrmode,
        Result:this.selecthr
      };
this.$router.push({name: 'Non-Selected',  params: { data }});
  }
else{
  this.snackbar=true
    this.text="Select Invalid..."
}
   },
getcandidate(candidate){
       let id=candidate
        api.getcandidatedetail(id)
        .then((resp) => {
         console.log(resp.data[0].name)
         this.candidatename=resp.data[0].name,
         this.technology=resp.data[0].technology,
         console.log(resp.data[0].technology)
         this.curctc=resp.data[0].lastctc1,
         this.expctc=resp.data[0].expctc
        this.resume=resp.data[0].resume
        
        })
        .catch(e => {
          console.log(e);
        });
},
getinterviewer(candidate){
 let id=candidate
  api.getinterviewer(id)
  .then((resp) => {
   this.select=resp.data[0].Process
   this.remarktec=resp.data[0].Remark
   this.selecttecmode=resp.data[0].Mode
   this.selecttec=resp.data[0].Result
   this.select=resp.data[1].Process
   this.remarkman=resp.data[1].Remark
   this.selectmanmode=resp.data[1].Mode
   this.selectman=resp.data[1].Result
   this.select=resp.data[2].Process
   this.remarkhr=resp.data[2].Remark
   this.selecthrmode=resp.data[2].Mode
   this.selecthr=resp.data[2].Result

  })
 .catch(e => {
          console.log(e);
        });
},
   view(){
     let name=this.resume
      api.getresume(name)
      .then((resp) => {
     fileDownload(resp.data, name);
       })
      .catch(e => {
          console.log(e);
        });
},
 get(){
        api.getcandidate()
        .then((resp) => {
        this.people=resp.data
        this.emailid=resp.data[0].email_id
        })
        .catch(e => {
          console.log(e);
        });
  },
deleteinterviewer(){
 let id=this.candidate
api.deleteinterviewer(id)
        .then(() => {
          this.snackbar2=true;
          this.text="Interviewer Deleted Succesfully..."
              return this.select=""
        })
        .catch(() => {
           this.snackbar=true
          this.text="Error on Deleting..."
        });
}
},
mounted() {
  this.get();
},
watch:{
  candidate() {
this.getcandidate(this.candidate)
this.getinterviewer(this.candidate)
  },

}
  }

</script>
<style>
  /* .v-expansion-panel::before {
   box-shadow: none !important;
} */

</style>