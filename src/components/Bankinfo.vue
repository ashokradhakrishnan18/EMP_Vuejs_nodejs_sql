<template>
<div id="app">

  <v-app id="inspire">
<appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" ref="name" v-bind:items="breadcombs"></appbar>


<navbar ref="drawer"></navbar>
      <v-main class="grey lighten-3">
                          

        <v-container >
    <tabbar></tabbar>

             <v-card class="white pa-5 rounded-lg">   
    
        <v-row  class="mt-8">
    
        <v-col
          cols="12"
        sm="4"
         lg="2"
        >
          <v-card  > 
        <v-card-text >
            
              <v-card  @click="$refs.inputUpload.click()"  >

                
   
 <v-img      height="250" width="100%"
 :src="imageData" v-if="imageData.length > 0"></v-img>
     <v-img   height="250" width="100%" src="https://clikiads.com/static/images/blank_profile.png" v-else></v-img>
 <!-- <div  v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div> -->

              </v-card> 
    
    
     
    
             


             <input v-show="false" ref="inputUpload" type="file" accept="image/*" @change="previewImage"  :disabled="disabled">

                 <h3 class="text-center mt-2"> Employee ID: TSS0001</h3>
               
                 <h4 class="text-center mt-1 mb-1">  APP DEVELOPER  </h4>
                  <div v-show="this.data">

                  <v-btn v-if="disabled" tile class="tab_card" dark  block @click="disabled = !disabled"> Edit Details</v-btn>
                   <v-btn v-else tile  dark class="tab_card" block @click="disabled = !disabled"> hide Details</v-btn>
                 </div>         
        </v-card-text>
       
          </v-card>
        </v-col>












            <v-col
          cols="12"
          sm="8"
         md="8"
      
        >
          <v-card class="elevator-9 mt-8" :disabled="disabled"> 
        
        
      <v-card-text  >
            <v-form
    ref="form"
    v-model="valid"
    
  >
                  <h3>Bank Details*</h3>
                <v-row>
                <v-col md="6">
                <h4>Account Number</h4>
                <v-text-field
                 v-model="Account"
                :rules="AccountRules"
                label="Account Number"
                name="Account"
                type="text"
                color="blue"
                />
                </v-col>

                <v-col cols="12" sm="6">
             <h4>PF Account Number</h4>
                <v-text-field
                 v-model="pf"
                :rules="pfRules"
                label="PF Account Number"
                name="pf"
                type="text"
                color="blue" 
                
                />
                </v-col>
                </v-row>
                
                 <v-row>
                <v-col md="6">
             <h4>IFSC</h4>
                <v-text-field
                 v-model="ifsc"
                :rules="[errorMessage]"
      

                label="IFSC"
                name="ifsc"
                type="text"
                color="blue"
                
              />
                </v-col>

                <v-col cols="12" sm="6">
             <h4>Branch Name</h4>
                <v-text-field
                 v-model="ifscbranch"
                
               :rules="branchRules"
                label="Branch Name"
                name="branch"
                type="text"
                color="blue" 
                disabled
                 />
                </v-col>
                </v-row>
                
                
                

                

                
            </v-form>

  
   </v-card-text>
        
            
       
        </v-card>

            </v-col>
          <v-col cols="12" md="10" align="end">
               <v-btn
      :disabled="!valid || disabled"
         tile color="teal"
       @click="validate"
dark
    >
      save
    </v-btn>
         <v-btn class="ma-2 tab_card"   tile  dark to="/employee">finish</v-btn>
     </v-col>
        </v-row>
        <v-spacer></v-spacer>
        </v-card>
        </v-container>
      
      </v-main>
       <!-- </v-img> -->
        
   </v-app>
</div>
</template>

<script>

import appbar from './content/appbar'
import navbar from './content/navbar'
import tabbar from './content/tabbar'
 import axios from 'axios'
  export default {
      name: 'App',

  components: {
      tabbar,
    appbar,
    navbar,
  }, 
    data: () => ({
      // city: ['Chennai','Coimbatore','Hosur','Madurai','Salem','Tiruvallur','Vellore'],
      // state: ['TamilNadu','Andhra Pradesh'],
      disabled:true,
      dialog: false,
      valid: false,
      data:'',
      ifscbranch: null,
        errorMessage: '',
     imageData: "" ,
       contactno: '',
              contactRules: [
          v => !!v || 'Number is required',
          v => v.length == 10 || 'Number must be valid',
      ],
       Account: '',
       AccountRules: [
          v => !!v || 'Account Number is required',
          
      ],
       pf: '',
       pfRules: [
          v => !!v || 'PF Account Number is required',
          
      ],
       ifsc: '',
       ifscRules: [
          v => !!v || 'IFSC Number is required',
          
          
      ],
      branch: '',
       branchRules: [
        
          
      ],
breadcombs: [
        {
          text: 'Employee Detail',
          disabled: false,
          href: '#/employee',
        },
         {
          text: 'Bank Info',
          disabled: true,
          href: '#/bankinfo',
        },
      ],
    }),
 beforeMount(){
    this.getName();
  },
   watch : {
               ifsc:function(val) {
                 console.log(val);
                 
      axios.get('https://ifsc.razorpay.com/'+val)
.then(response => {
   this.ifscbranch = response.data.BRANCH; 
    this.errorMessage = null;
    
})
.catch(() => {
     this.ifscbranch = null; 
    this.errorMessage = 'Invalid IFSC Code.';
     
});
     }
  },
 
     
   methods:
     {
    previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        },
      validate () {
        this.$refs.form.validate()
      },
      async getName(){
      const res = await fetch('db.json');
      const data = await res.json();
      this.data = data[0].display;
      console.log(data[0].display)
    }
     },
         
     
  }
  
</script>