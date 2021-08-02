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
                 <div  v-show="this.data">
                  

                  <v-btn v-if="disabled" tile class="tab_card"  dark  block @click="disabled = !disabled"> Edit Details</v-btn>
                   <v-btn v-else tile dark class="tab_card"  block @click="disabled = !disabled"> hide Details</v-btn>
                 </div>
        </v-card-text>
       
          </v-card>
           
    
          <div class="text-center mt-3" >
  

    <v-btn
      dark
     
      @click="snackbar = true || false"
       class=" pa-2 tab_card"
     
    >
      Family Details
    </v-btn>


    <v-snackbar
      v-model="snackbar"
      :vertical="vertical"
     
      :timeout="timeout"
      color="white"
      class="mt-2 snackbar" 
    ><v-row  >
      <v-col
      cols="4">
      <div class="text-center">
    <v-dialog
      v-model="dialog"
       width="500"

    >
      <template v-slot:activator="{ on, attrs }">
      <v-hover
          v-slot="{ hover }"
        >
          <v-card color="white" :elevation="hover ? 12 : 0" 
           v-bind="attrs"
          v-on="on">
             <v-icon
             class="mt-3 tab_card"
      large
    
    >
      mdi-account-box
  
    </v-icon>
       <v-card-text class="black--text ">Person 1</v-card-text>
       
          </v-card></v-hover>
      </template>

      <v-card >
         <v-card-title class="justify-center teal header_title tab_card" style="color:white">Person 1</v-card-title>
        <v-container>
          <v-row >
          <v-col
          cols="12"  >
       
      <v-text-field 
              label= "Person-1"
              placeholder="Enter Name"
                :disabled="disabled"
            ></v-text-field>
          
       
           <v-select 
                :items="['Father','Mother','Spouse','Brother','Sister']"
                label="Relationship"
                name=city
                type="text"
                color="blue"
    
               :disabled="disabled" />
        
            <v-text-field
              label="Solo"
              placeholder="Enter Nationality"
             
           :disabled="disabled"
            ></v-text-field>
    
            <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          :return-value.sync="date1"
          transition="scale-transition"
          offset-y
          min-width="290px"
          :disabled="disabled"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date1"
              label="DOB"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on" 
             
            ></v-text-field>
          </template>
          <v-date-picker v-model="date1" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
          </v-date-picker>
        </v-menu>
          
     
            <v-text-field
              label="Solo"
              placeholder="Enter Occupation"
            
          :disabled="disabled"
            ></v-text-field>
          
    
            <v-text-field
              label="Solo"
              placeholder="Enter Company"
         
             :disabled="disabled"
            ></v-text-field>
   
         </v-col>
          </v-row>

          


  
    
   
   <v-card-actions class="d-flex justify-end" >
      <v-btn
             elevation="2"
             rounded
              color="red"
              dark
              @click="dialog = false"  
            >
                Close
              </v-btn>
           <v-btn
             elevation="2"
             rounded
              color="teal"
               v-show="!disabled"
               dark
            >
              save
            </v-btn>
          </v-card-actions>

        
        </v-container>
      </v-card>
    </v-dialog>
  </div>
      </v-col>

<v-col
cols="4">
  <div class="text-center">
    <v-dialog
      v-model="dialog1"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
      <v-hover
          v-slot="{ hover }"

        >
          <v-card color="white" :elevation="hover ? 12 : 0"
           v-bind="attrs"
          v-on="on">
             <v-icon
             class="mt-3 tab_card"
      large
    
    >
      mdi-account-box
  
    </v-icon>
       <v-card-text class="black--text ">Person 2</v-card-text>
       
          </v-card></v-hover>
      </template>

      <v-card>
           <v-card-title class="justify-center teal header_title tab_card" style="color:white">Person 2</v-card-title>
        <v-container>
          <v-row >
          <v-col
          cols="12">
           <v-text-field
              label="Person 2"
              placeholder="Enter name"
           
              :disabled="disabled"
            ></v-text-field>
          
  
         
           <v-select
                :items="['Father','Mother','Spouse','Brother','Sister']"
                label="Relationship"
                name=city
                type="text"
                color="blue"
             
               :disabled="disabled" />
         
  
          
            <v-text-field
              label="Solo"
              placeholder="Enter Nationality"
        
            :disabled="disabled"
            ></v-text-field>
          
  
          
            <v-menu
          ref="menu2"
          v-model="menu2"
          :close-on-content-click="false"
          :return-value.sync="date2"
          transition="scale-transition"
          offset-y
          min-width="290px"
        :disabled="disabled"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date2"
              label="DOB"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on" 
           
            ></v-text-field>
          </template>
          <v-date-picker v-model="date2" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
          </v-date-picker>
        </v-menu>
          
  
         
            <v-text-field
              label="Solo"
              placeholder="Enter Occupation"
            
             :disabled="disabled"
            ></v-text-field>
          
  
          
            <v-text-field
              label="Solo"
              placeholder="Enter Company"
          
              :disabled="disabled"
            ></v-text-field>
             </v-col>
          </v-row>



  
    
   
   <v-card-actions class="d-flex justify-end" >
      <v-btn
             elevation="2"
             rounded
              color="red"
              dark
              @click="dialog1 = false"  
            >
                Close
              </v-btn>
           <v-btn
             elevation="2"
             rounded
              color="teal"
               v-show="!disabled"
               dark
            >
              save
            </v-btn>
          </v-card-actions>
   

        </v-container>
      </v-card>
    </v-dialog>
  </div>
</v-col>

<v-col
cols="4">
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
    >
       <template v-slot:activator="{ on, attrs }">
      <v-hover
          v-slot="{ hover }"

        >
          <v-card color="white" :elevation="hover ? 12 : 0"
           v-bind="attrs"
          v-on="on">
             <v-icon
             class="mt-3 tab_card"
      large 
    >
      mdi-account-box
  
    </v-icon>
       <v-card-text class="black--text">Person 3</v-card-text>
       
          </v-card></v-hover>
      </template>
      <v-card> 
         
        
           <v-card-title class="justify-center teal header_title tab_card"  style="color:white" > Person 3</v-card-title>
        <v-container>
          <v-row >
          <v-col
          cols="12">
           <v-text-field
              label="Person 3"
              placeholder="Enter name"
            
              :disabled="disabled"
            ></v-text-field>
         
  
           
           <v-select
                :items="['Father','Mother','Spouse','Brother','Sister']"
                label="Relationship"
                name=city
                type="text"
                color="blue"
              :disabled="disabled"
                 />
          
  
          
            <v-text-field
              label="Solo"
              placeholder="Enter Nationality"
          
              :disabled="disabled"
            ></v-text-field>
          
  
         
            <v-menu
          ref="menu3"
          v-model="menu3"
          :close-on-content-click="false"
          :return-value.sync="date3"
          transition="scale-transition"
          offset-y
          min-width="290px"
              :disabled="disabled"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date3"
              label="DOB"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on" 
          
            ></v-text-field>
          </template>
          <v-date-picker v-model="date3" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu3.save(date3)">OK</v-btn>
          </v-date-picker>
        </v-menu>
         
  
          
            <v-text-field
              label="Solo"
              placeholder="Enter Occupation"
          
              :disabled="disabled"
            ></v-text-field>
         
  
         
            <v-text-field
              label="Solo"
              placeholder="Enter Company"
            
              :disabled="disabled"
            ></v-text-field>
          </v-col>
          </v-row>

      
         
        

  
    
   
   <v-card-actions class="d-flex justify-end" >
      <v-btn
             elevation="2"
             rounded
              color="red"
              dark
              @click="dialog2 = false"  
            >
                Close
              </v-btn>
           <v-btn
             elevation="2"
             rounded
              color="teal"
              v-show="!disabled"
               dark
            >
              save
            </v-btn>
          </v-card-actions>
   

        </v-container>
      </v-card>
    </v-dialog>
  </div>
</v-col>
</v-row>
      <template v-slot:action="{ attrs }">
        <v-btn
      depressed
      color="error"
        v-bind="attrs"
          @click="snackbar = false"
    >
      close
    </v-btn>
      </template>
    </v-snackbar> 
  </div>
  
       
        </v-col>
      <v-col
          cols="12"
      sm="8"
         lg="5"
      
        >          
          <v-card class="elevator-9 mt-8 card_padding"  :disabled="disabled"> 
        
        
        <v-card-text >
           <v-form
    ref="form"
    v-model="valid"
     
  >
              
                
                <h4> Employee Name </h4>
                <v-row >
                <v-col md="6">
                <v-text-field
                background-color="white"
                label="First Name"
                :rules="FirstRules"
                name="name"
                type="text"
                color="blue"
               />

                </v-col>
                <v-col md="6">
                <v-text-field
                label="Last Name"
                 :rules="LastRules"
                name="name"
                type="text"
                color="blue" 
              />
                </v-col>
                </v-row>
               
                
                 <v-row>
                <v-col md="6">
                  <h4> Date Of Birth </h4>
                <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="DOB"
              :rules="DOBRules"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on" 
             
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>

          </v-date-picker>
        </v-menu>
                </v-col>
                 <v-col md="6">
                 <h4> AGE </h4>
                 
                
                <v-text-field
                label="AGE"
                :rules="AGERules"
                name="name"
                type="number"
                maxlength="5"
                color="blue" 
               />
                </v-col>
            
                </v-row>
                

                <v-row>
              <v-col md="6">
                 <h4> Blood Group </h4>
                 <v-select
                :items="['O+','O-','A+','A-','B+','B-','AB+','AB-','Others']"
                label="Select Blood Group"
                :rules=" BloodRules"
                name=city
                type="text"
                color="blue"
                 />
              </v-col>
                
                 
              <v-col md="6">
                <h4> Gender </h4>
                 <v-select
                :items="['Male','Female','Transgender']"
                label= Select Gender
                  :rules=" GenderRules"
                name=city
                type="text"
                color="blue"
             />
              </v-col>
                </v-row>

                <v-row>
              <v-col md="6">
                <h4> Marital Status </h4>
                 <v-select
                :items="['Married','Single','Divorced','Widowed']"
                label="select"
                 :rules=" MaritalRules"
                name=city
                type="text"
                color="blue"
                />
              </v-col>

                
               
               <v-col md="6">
                 <h4> Spouse Name </h4>
                <v-text-field
                label="Spouse Name"
                 :rules=" SpouseRules"
                name="name"
                type="text"
                color="blue"
                />
                </v-col>
                </v-row>
                

            </v-form>
        </v-card-text>
      
          </v-card>
      </v-col>
 <v-col
          cols="12"
      sm="12"
         lg="5"
      
        >            
          <v-card class="elevator-9 mt-8" :disabled="disabled"> 
        <v-card-text class="py-0">
            <v-form
    ref="form1"
    v-model="valid1"
    
  >
               
               <v-row >
  <v-col >
                  <v-radio-group v-model="radios" :mandatory="false">
                    
                
                 <h4 > Is Physically Challanged ? </h4>
                          
             
      
      
        <v-radio    label="Yes"  value="radio-1"></v-radio>
      
      
        <v-radio   label="No" value="radio-2"></v-radio>
      
       
             
           
               </v-radio-group>   
               <v-radio-group v-model="radios1" :mandatory="false">
             
                <h4  > Is International Employee ? </h4>
                <v-radio  label="Yes" value="radio-3"></v-radio>
        <v-radio  label="No" value="radio-4"></v-radio>
              </v-radio-group>
 </v-col></v-row>
               
        
              
                 
       
                
                 
                <v-row>
                 <v-col cols="12" md="6">
                   <h4> PAN NO. </h4>
                <v-text-field
                label="Enter your Pan Number"
                :rules=" PANRules"
                name="name"
                type="text"
                color="blue"
                />
              </v-col>
                
                
                
                 
               
                 <v-col cols="12" md="6">
                   <h4> AADHAR NUMBER. </h4>
                <v-text-field
                label="Enter your Aadhar Number"
                :rules=" AADHARRules"
                name="name"
                type="text"
                color="blue"
               />
              </v-col>
                </v-row>


                 
                <v-row>
                 <v-col cols="12" md="6">
                   <h4> VOTER ID. </h4>
                <v-text-field
                label="Enter your Voter Id Number"
                 :rules=" VOTERRules"
                name="name"
                type="text"
                color="blue"
                 />
                 </v-col>

                 <v-col cols="12" md="6">
                   <h4> PASSPORT NUMBER </h4>
                <v-text-field
                label="Enter your Voter Id Number"
                 :rules=" PASSPORTRules"
                name="name"
                type="text"
                color="blue"
                 />
              </v-col>
                </v-row>

            </v-form>
        </v-card-text>
   
          </v-card>
     </v-col>
        </v-row>
        
        
        <!-- <h3 class="teal--text ml-8 mt-3" >Family Details</h3> -->
  
        
        
 
      
                 
         
       <v-col cols="12"  >
        <div align="end">
      <v-btn
      :disabled="!valid || !valid1 || disabled"
         tile color="teal"
       @click="validate"
dark
    >
      save
    </v-btn>
         
       <v-btn  class="ma-2 tab_card" tile color="teal" dark to="/contactinfo"> Next</v-btn>
       
        </div>
       </v-col>
        </v-card>
        </v-container>
    

      </v-main>
       <!-- </v-img> -->
        
   </v-app>
</div>
</template>
<style>
.snackbar{
border-radius: 44px !important;

}
</style>
<script>
import appbar from './content/appbar'
import navbar from './content/navbar'
import tabbar from './content/tabbar'


  export default {
    name1: 'contactinfo',
     name: 'Personal Information',
     components:{
        navbar,
        appbar,
        tabbar
     },
    data: () => ({
data:'',
disabled: true,
 display:true,
       valid: true,
valid1: true,
       FirstRules: [
        v => !!v || 'First Name is required',
        
      ],
       LastRules: [
        v => !!v || ' Last Name is required',
        
      ],
      DOBRules: [
        v => !!v || ' DOB is required',
        
      ],
            AGERules: [
        v => !!v || ' AGE is required',
         v => v.length == 2 || 'Age is Invalid',
      ],
       BloodRules: [
        v => !!v || ' Blood Group is required',
        
      ],
       GenderRules: [
        v => !!v || ' Gender is required',
        
      ],
       MaritalRules: [
        v => !!v || ' Marital Status is required',
        
      ],
       SpouseRules: [
        v => !!v || ' Spouse Name is required',
        
      ],
       PANRules: [
        v => !!v || ' PAN Number is required',
        v => v.length == 10 || 'Pancard is Invalid',
      ],
       AADHARRules: [
        v => !!v || ' AADHAR Number is required',
         v => v.length == 16 || 'AADHAR Number is Invalid',
      ],
       VOTERRules: [
        v => !!v || ' VOTER ID is required',
          v => v.length == 10 || 'VOTER ID is Invalid',
      ],
      PASSPORTRules: [
        v => !!v || ' PASSPORT Number is required',
        
      ],
        timeout: 6000,
        dialog: false,
        dialog1: false,
          dialog2: false,
        snackbar: false,
      text: 'Lorem ipsum dolor sit amet',
      vertical: true,
    items: ['TSS0001', 'TSS0002', 'TSS0003', 'TSS0004','TSS0005'],
    nameitems:['Kanagaraj','Ganesh','Richard','Dinesh','Mohan'],
      date: null,
      date1:null,
        drawer: null,
    menu: false,
    menu1:false,
    modal: false,
     imageData: "" ,
     

 breadcombs: [
        {
          text: 'Employee Detail',
          disabled: false,
          href: '#/employee',
        },
         {
          text: 'Personal Info',
          disabled: true,
          href: '#/personalinfo',
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
      this.data = data[0].display;
      console.log(data[0].display)
    }
  }
  }

</script>