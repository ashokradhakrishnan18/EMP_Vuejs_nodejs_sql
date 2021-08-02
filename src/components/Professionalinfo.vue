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
            
              <v-card   @click="$refs.inputUpload.click()"  >

                
 <v-img      height="220" width="100%"
 :src="imageData" v-if="imageData.length > 0"></v-img>
     <v-img   height="250" width="100%" src="https://clikiads.com/static/images/blank_profile.png" v-else></v-img>



              </v-card> 
<input v-show="false" ref="inputUpload" type="file" accept="image/*" @change="previewImage"  :disabled="disabled">

                 <h3 class="text-center mt-2"> Employee ID: TSS0001</h3>
               
                 <h4 class="text-center mt-1 mb-1">  APP DEVELOPER   </h4>
                 
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
         lg="10"
        >
          <v-card class="elevator-9 mt-8"  :disabled="disabled" > 
        
        <v-card-text >
               <v-form
    ref="form"
    v-model="valid"
     class="py-0"
  >
         
               
                <v-row>
                <v-col cols="12" sm="4" >
                <h4 class="ml-2"> SSLC </h4>
                <v-file-input label="SSLC"  :rules="sslcRules"  accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                  
                  />
                </v-col>
                <v-col cols="12"  sm="4" >
                 <h4 class="ml-2"> HSC/DIPLOMA </h4>   
                <v-file-input label="HSC/DIPLOMA" :rules="hscRules"  accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                </v-col>
           
                <v-col cols="12"  sm="4">
                <h4 class="ml-2"> UG </h4>
                <v-file-input label="UG" :rules="ugRules"  accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                   />
                </v-col>
                <v-col cols="12"  sm="4">
                 <h4 class="ml-2"> PG </h4>   
                <v-file-input label="PG" :rules="pgRules"  accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                   />
                </v-col>
              
                <v-col cols="6" sm="4">
                <h4 class="ml-2"> RESUME </h4>

                <v-file-input label="RESUME" :rules="resumeRules"  accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                   
                  />
                </v-col>
                <v-col cols="6" sm="4">
                <h4> SKILLS KNOWN </h4>
                <v-text-field
                v-model="skillsknown"
                :rules="skillsRules"
                label="Skills Known"
           
                ></v-text-field>
                </v-col>
                </v-row>

        
            </v-form>
        </v-card-text>
      
          </v-card>
          </v-col>
       <v-col class="hide py-0"    
      sm="2"
         lg="2"></v-col>
      
            <v-col
          cols="12"
          sm="12"
         lg="12 "
      
        >
          <v-card class="elevator-9" :disabled="disabled"> 
     
        <v-card-text >
         <v-form
    ref="form1"
    v-model="valid1"
    
  >
                <h3> Previous Employment</h3>
                <v-row>
                 <v-col cols="12" sm="6" md="3" >
                <h4> Company Name</h4>
                <v-text-field
                label="Company Name"
                :rules="companyRules"
                v-model="company"
                type="text"
                color="blue"
                
                />
              </v-col>
                
                 <v-col cols="12" sm="6" md="3">
                  <h4> Designation</h4> 
                   <v-text-field              
                  label="Designation"
                  v-model="designation"
                  :rules="designationRules"
                  color="blue"
                  type="text"
                />
                </v-col>
              
                 <v-col cols="12" sm="6" md="3">
                  <h4> Duration</h4>
                <v-text-field
                label="Duration"
                v-model="duration"
                :rules="durationRules"
                type="text"
                color="blue"
               />
                 </v-col>

                <v-col cols="12" sm="6" md="3">
                <h4> Last Salary Drawn</h4>
                <v-text-field
                label="Last Salary Drawn"
                v-model="lastsalary"
                :rules="salaryRules"
                color="blue"
                type="number"
            />
              </v-col>
                </v-row>
                <h3> PROFESSIONAL REFERENCE </h3>
                <v-row>
                 <v-col cols="12" sm="6" md="3">
                <h4> Name</h4>
                <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                color="blue"
                type="text"
                />
                 </v-col>

                 <v-col cols="12" sm="6" md="3">
                  <h4>Occupation & Name of the Organization </h4>
                <v-text-field
                label="Occupation & Name of the Organization"
                v-model="occupation"
                :rules="occupationRules"
                type="text"
                color="blue"
                />
              </v-col>
          
                 <v-col cols="12" sm="6" md="3">
               <h4> Period Known</h4>
                <v-text-field
                label=" Period Known"
                v-model="period"
                :rules="periodRules"
                type="text"
                color="blue"
                />
                 </v-col>

                 <v-col cols="12" sm="6" md="3" >
              <h4> Contact No</h4>
                <v-text-field
                label=" Contact No"
                v-model="contact"
                :rules="contactRules"
                type="number"
                color="blue"
                />
              </v-col>
                </v-row>
            </v-form>
        </v-card-text>
   
          </v-card>
          </v-col>

      <v-col class="hide"    
      sm="2"
         lg="2"></v-col>
          
            <v-col
          cols="12"
      sm="12"
         lg="12"
       class="py-0"
        >
                <v-card class="elevator-9"  :disabled="disabled"> 
     
        <v-card-text >
           
                <h4> DECLARATION</h4>
                <v-row>
                 <v-col>
                   <p>  I declare that all information given above is accurate.</p> 
                     <input type="file" @change="onFileSelected">
                    <h5 class="text-right"> SIGNATURE </h5>
                    
              </v-col>
                </v-row>

                
                
                
          
        </v-card-text>
   
          </v-card>
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
       <v-btn class="ma-2 tab_card" tile  dark  to="/bankinfo">Next</v-btn>
     </v-col>
        </v-row>
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
     name: 'App',
    components:{
        appbar,
        navbar,
         tabbar,
        
     },
    data: () => ({
data:'',
    label: '',
    selectedFile: null,
     imageData: "" ,
  disabled: true,
       valid: true,
valid1: true,

        sslcRules: [
          v => !!v || 'Sslc is required',
      ],

      
        hscRules: [
          v => !!v || 'Hsc is required',
      ],

      
        ugRules: [
          v => !!v || 'Ug is required',
      ],

      
        pgRules: [
          v => !!v || 'pg is required',
      ],
      
      
        resumeRules: [
          v => !!v || 'resume is required',
      ],

      skillsknown: '',
        skillsRules: [
          v => !!v || 'Skills known is required',
      ],
     company: '',
        companyRules: [
          v => !!v || 'Company name is required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Company name must be character',
      ],

      designation: '',
        designationRules: [
          v => !!v || 'Designation  is required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Name must be character',
      ],

      duration: '',
        durationRules: [
          v => !!v || 'Duration is required',
         
      ],

      lastsalary: '',
        salaryRules: [
          v => !!v || 'Last salary drawn is required',
      ],

      name: '',
        nameRules: [
          v => !!v || 'Name is required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Name must be character',
      ],

      occupation: '',
        occupationRules: [
          v => !!v || 'Occupation & Name of organization is required',
         
      ],

      period: '',
        periodRules: [
          v => !!v || 'Period known is required',
         
      ],

      contact: '',
       contactRules: [
          v => !!v || 'Contact no is required',
          v => v.length == 10 || 'Number must be valid',
      ],



breadcombs: [
        {
          text: 'Employee Detail',
          disabled: false,
          href: '#/employee',
        },
         {
          text: 'Professional Info',
          disabled: true,
          href: '#/professionalinfo',
        },
      ],
  }),
 beforeMount(){
    this.getName();
  },
  methods: {
    onFileSelected(e) {
        console.log(e)
    },
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
 async getName(){
      const res = await fetch('db.json');
      const data = await res.json();
      this.data = data[0].display;
      console.log(data[0].display)
    },
 validate () {
        this.$refs.form.validate()
         this.$refs.form1.validate()
      },
  },

  
   
  }
</script>