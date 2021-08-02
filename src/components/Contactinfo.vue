<template>
<div id="app" >

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
            
              <v-card   @click="$refs.inputUpload.click()"  >

                
 <v-img      height="250" width="100%"
 :src="imageData" v-if="imageData.length > 0"></v-img>
     <v-img   height="250" width="100%" src="https://clikiads.com/static/images/blank_profile.png" v-else></v-img>

 <!-- <div  v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div> -->

              </v-card> 
    
    
     
    
             
     

<input v-show="false" ref="inputUpload" type="file" accept="image/*" @change="previewImage"  :disabled="disabled">

                 <h3 class="text-center mt-2"> Employee ID: TSS0001</h3>
               
                 <h4 class="text-center mt-1 mb-1">  APP DEVELOPER   </h4>
                 <div v-show="this.data">
                  <v-btn v-if="disabled" tile class="tab_card"  dark  block @click="disabled = !disabled"> Edit Details</v-btn>
                   <v-btn v-else tile dark class="tab_card" block @click="disabled = !disabled"> hide Details</v-btn>
                 </div>
                
        </v-card-text>
       
          </v-card>
        </v-col>
       <v-col
          cols="12"
          sm="8"
          lg="5"
      
        >
          
          
          <v-card class="elevator-9 mt-8"  :disabled="disabled"> 
        
        
        <v-card-text >
            <v-form
    ref="form"
    v-model="valid"
     >
              
                <h3> Residential Address* </h3>
                 <h4 class="mt-2"> Line 1</h4>

                <v-text-field
                label="Line1"
                v-model="Line1"
                :rules="Line1Rules"
                color="blue" 
                 />
  <h4 class="mt-2"> Line 2</h4>
                <v-text-field
                label="Line2"
                v-model="Line2"
                :rules="Line2Rules"
                color="blue" 
                />

                <v-row>
                <v-col md="6">
  <h4 class="mt-2"> City</h4>
                 <v-text-field
                label="City"
                v-model="City"
                :rules="cityRules"
                color="blue" 
               />
                </v-col>
                <v-col md="6">
  <h4 class="mt-2"> State</h4>

                <v-text-field
                label="State"
                v-model="State"
                :rules="stateRules"
                color="blue" 
               />
                </v-col>
                </v-row>
  <h4 class="mt-2">Postal/Zip Code </h4>
                <v-text-field
                v-model="postalcode"
                :rules="postalRules"
                type="number"
                label="Postal/Zip Code"
                
                color="blue" 
                />
                
            </v-form>
        </v-card-text>
        
            
       
        </v-card>
          </v-col>
     <v-col
          cols="12"
      sm="12"
         lg="5"
      
        >    
     <v-form
    ref="form1"
    v-model="valid1" 
  >
          <v-card class="elevator-9 mt-8" height="480px" :disabled="disabled"> 
     
        <v-card-text >
         
              
                <h4> Email* </h4>
                <v-text-field
                 v-model="email"
                label="Email"
                :rules="emailRules"
                color="blue" 
                 />
                
               
                <h4>Contact Number* </h4>
                <v-text-field 
                v-model="contactno"
                :rules="contactRules"
                :counter="10"
                type="number"
                color="blue" 
                label="Contact No"
               />
                 

                <v-row>
                <v-col cols="12" md="12">
                <h4> Emergency Contact No*</h4>

                <v-text-field
                label="Emergency contact"
                v-model="Emgcontactno"
                :rules="Emgcontactrules"
                :counter="10"
                type="number"
                color="blue"
               />
                </v-col>
                <v-col cols="12" md="12">
                <h4>Relationship* </h4>

                <v-text-field
                label="Relationship"
                v-model="relation"
                :rules="relationRules"
                color="blue" 
                
                />
                </v-col>
                </v-row>

      
        </v-card-text>
     
          </v-card>
      </v-form>
     </v-col>   
     <v-col cols="12" align="end">
 <v-btn
      :disabled="!valid || !valid1 || disabled"
         tile color="teal"
       @click="validate"
dark
    >
      save
    </v-btn>
       <v-btn class="ma-2 tab_card" tile  dark to="/professionalinfo">Next</v-btn>
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

  export default {
     name: 'Contact Information',
     components:{
       navbar,
        appbar,
        tabbar
     },
    data: () => ({

    dialog: false,
   disabled: true,
       valid: true,
valid1: true,
     imageData: "" ,
    
    data:'',
      city: ['Chennai', 'Coimbatore', 'Hosur','Madurai', 'Salem','Tiruchy','Tiruvallur','Vellore'],
      state: ['TamilNadu','Andhra Pradesh'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',

        v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-.]+)*$/.test(v) || 'E-mail must be valid',
      ],

      Line1: '',
      Line1Rules: [
        v => !!v || 'Line1 is required',

      ],

      Line2: '',
      Line2Rules: [
        v => !!v || 'Line2 is required',

      ],

      City: '',
      cityRules: [
        v => !!v || 'City is required',
        v =>  /^[A-Za-z]+$/.test(v) || 'City must be character',
      ],

      State: '',
      stateRules: [
        v => !!v || 'State is required',
        v =>  /^[A-Za-z]+$/.test(v) || 'State must be character',
      ],

       contactno: '',
       contactRules: [
          v => !!v || 'Number is required',
          v => v.length == 10 || 'Number is Invalid',
      ],
  Emgcontactno:'',
  Emgcontactrules: [
          v => !!v || 'Number is required',
          v => v.length == 10 || 'Number is Invalid',
      ],
      relation: '',
        relationRules: [
        v => !!v || 'Relationship is required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Relationship must be character',
        
      ],

      postalcode: '',
       postalRules: [
          v => !!v || 'Postal code is required',
          v => v.length == 6 || 'Number must be valid',
      ],
      // postalcode: '',
      //  postalRules: [
      //     v => !!v || 'Number is required',
      //     v => v.length == 6 || 'Number must be valid',
      // ]
     breadcombs: [
        {
          text: 'Employee Detail',
          disabled: false,
          href: '#/employee',
        },
         {
          text: 'Contact Info',
          disabled: true,
          href: '#/contactinfo',
        },
      ],
  }),
 beforeMount(){
    this.getName();
  },
    methods: {

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
         this.$refs.form1.validate()
      },
   async getName(){
      const res = await fetch('db.json');
      const data = await res.json();
      this.d=data;
      this.data = data[0].display;
      this.Line1=data[1].add1;
      this.Line2=data[1].add2;
      this.City=data[1].city;
      this.State=data[1].state;
      this.postalcode=data[1].zip;
      this.email=data[1].email;
        this.contactno=data[1].contact;
          this.Emgcontactno=data[1].emg;
this.relation=data[1].relationship;
    }
  }


  }

</script>