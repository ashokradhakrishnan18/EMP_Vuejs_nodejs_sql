<template>
 <div id="app">
   <v-app id="inspire">
     <appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" ref="name" v-bind:items="breadcombs"></appbar>
      <navbar ref="drawer"></navbar>
        <v-main class="grey lighten-3">
          <v-container class="mt-8">
              <v-card light
        class="mb-n16 mx-6 rounded-lg" style="z-index:1"
        elevation="8"
        height="90"
        max-width="85"
      >  
     <div class="text-center rounded-lg">
    <v-avatar 
      tile height="90" width="85"
      class="visitor_innercard rounded-lg"
    >
      <v-icon dark size="40">
        mdi-account-question
      </v-icon>
    </v-avatar>
     </div> </v-card>   
    <v-card class="white pa-5 rounded-lg">
        <v-row  class="mt-8">
        
 
          <v-col cols="12" md="6">
          <v-card class="mt-3"> 
        
        
        <v-card-text class="py-0" >
            <v-form  ref="form"
    v-model="valid" 
   >
              
                
                <v-row >
                <v-col cols="12" md="6" >
               <h4>Vistor Name </h4>

                <v-text-field
                 v-model="name"
                 :rules="namerules"
                label="Name"
                type="text"
                color="grey darken-1"
                
               />
                </v-col>
                <v-col cols="12" md="6" >
                  <h4>Vistor Company Name </h4>

                <v-text-field
                 v-model="companyname"
                 :rules="companynamerules"
                label="Company Name"
                type="text"
                color="grey darken-1"
                
               />

                </v-col>
                </v-row>
               



                
                 <v-row>
                <v-col cols="12" md="12">
                  <h4> Address 1</h4>
                 <v-text-field
                label="Address 1"
               v-model="address1"
                type="text"
                color="grey darken-1" 
                 :rules="address1rules"
               />
                </v-col>
 <v-col cols="12" md="12">
                  <h4> Address 2</h4>
                 <v-text-field
                label="Address 2"
               v-model="address2"
                type="text"
                color="grey darken-1" 
                 :rules="address2rules"
               />
                </v-col>

                 <v-col md="6">
                 <h4> City </h4>
                <v-text-field
                 v-model="city"
              :rules="cityrules"
                label="City"
                type="text"
                color="grey darken-1" 
               />
                </v-col>

              <!-- <v-col md="6">
                 <h4> Passed Out </h4>
                 <v-select
                :items="['2020','2019','2018','2017','2016','2015','2014','2013','2012','2011'
                ,'2010','2009','2008','2007','2006','2005','2004','2003','2002','2001']"
                label="Select Passed out Year"
                v-model="passedout"
                type="text"
                color="blue"
                :rules="passedoutrules"
               />
              </v-col> -->
              <v-col md="6">
              <h4> State </h4>
                <v-text-field
                 v-model="state"
              :rules="staterules"
                label="State"
                type="text"
                color="grey darken-1" 
               />
               </v-col>
                </v-row>
                

                <v-row>
              <v-col md="6">
                <h4> Country </h4>
                 <v-text-field
                label="Country"
              v-model="country"
                type="text"
                color="grey darken-1" 
                :rules="countryrules"
               />
              </v-col>
              <v-col md="6">
                <h4> Pincode</h4>
                 <v-text-field
                label="Pincode"
              v-model="pincode"
                type="number"
                color="grey darken-1" 
                :rules="pincoderules"
               />
              </v-col>
                </v-row>

               
                

            </v-form>
        </v-card-text>
      
          </v-card>
        </v-col>

           <v-col cols="12" md="6">
          <v-card class="elevator-9 mt-3"> 
     
        <v-card-text class="py-0">
            <v-form  ref="form1"
        v-model="valid1"
        >
 
           
                <v-row>
                 <v-col cols="12" md="6">
                   <h4> Contact Number </h4>
                <v-text-field
                label="Contact Number"
                 v-model="contact"
                :rules="contactrules"
                type="text"
                color="grey darken-1"
                required
                />
              </v-col>
          
                 <v-col cols="12" md="6">
                   <h4> Email </h4>
                <v-text-field
                label="Email Address"
                 v-model="email"
                :rules="emailrules"
                type="text"
                color="grey darken-1"
                required
                />
              </v-col>
                </v-row>


                 
                <v-row>
                 <v-col cols="12" md="6">
                   <h4> Reason for Visit </h4>
                <v-text-field
                label="Enter the Reason for Visit "
                 v-model="reason"
              :rules="reasonrules"
                type="text"
                color="grey darken-1"
                required
                 />
                 </v-col>
              
                 <v-col cols="12" md="6">
                   <h4> Whom meet </h4>
                <v-text-field
                v-model="meetvisit"
              :rules="meetvisitrules"
                label="Whom meet Visit Name"
                type="text"
                color="grey darken-1"
                required
                 />
              </v-col>
                </v-row>
                  <v-row>
                 <v-col md="6">
                  <h4> Time Ckeck-in </h4>
               <v-text-field
              v-model="checkin"
              :rules="checkinrules"
              label="Time Ckeck-in"
              required
  color="grey darken-1"
              type="number"
            ></v-text-field>
                          </v-col>
                  <v-col md="6">
                  <h4> Time Ckeck-out </h4>
               <v-text-field
     v-model="checkout"
              :rules="checkoutrules"
              label="Time Ckeck-out"
              required
               type="number"
  color="grey darken-1"
               ></v-text-field>
                          </v-col>
                </v-row>

                  <v-row>
                 <v-col md="6">
                  <h4> Batch Number </h4>
               <v-text-field
              v-model="batch"
              :rules="batchrules"
              label="Batch Number"
              required
              color="grey darken-1"
              type="number"
            ></v-text-field>
                          </v-col>
                  <v-col md="6">
                  <h4> Parking </h4>
               <v-select
                :items="['Two-Wheeler','Four-Wheeler']"
                label="Select Parking"
                v-model="parking"
                type="text"
                color="grey darken-1"
                :rules="parkingrules"
               />
                          </v-col>
                </v-row>
                <v-row>
                 <v-col md="6">
                  <h4> ID </h4>
               <v-select
                :items="['Pan Card','Aadhar Card','Vote ID','Others']"
                label="Select ID"
                v-model="idcard"
                type="text"
                color="grey darken-1"
                :rules="idcardrules"
                />
                  </v-col>
                  <v-col md="6">
                  <h4> Hand Luggage </h4>
                  <v-select
                :items="['Yes','No']"
                label="Select Luggage"
                v-model="luggage"
                type="text"
                color="grey darken-1"
                :rules="luggagerules"
                />
              </v-col>
                </v-row> 
            </v-form>
        </v-card-text>
   
          </v-card>
           </v-col>
        </v-row>
        
  
       
       <div align="center" class="text-right">
          <v-btn
      :disabled="!valid || !valid1"
      color="success"
      class="mr-4 "
      @click="validate"
    >
      save
    </v-btn>
        </div>
    </v-card>
          </v-container>
        </v-main>
    </v-app>
 </div>
</template>
<script>
import appbar from './content/appbar'
import navbar from './content/navbar'
export default {
name: 'Visitor Management',
components:{
navbar,
appbar,
},
data () {
      return {
 valid: false,
 valid1: false,
              drawer: null,
       name: '',
  namerules: [
        v => !!v || 'Name is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Name must be character',
      ],
       companyname:'',
      companynamerules:[
        v => !!v || 'Company Name is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Company Name must be character',
      ],
address1:'',
address1rules:[
        v => !!v || 'Address is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Address must be character',
      ],
address2:'',
address2rules:[
        v => !!v || 'Address is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Address must be character',
      ],
city:'',
cityrules:[
        v => !!v || 'City is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'City must be character',
      ],
state:'',
staterules:[
        v => !!v || 'State is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'State must be character',
      ],
country:'',
countryrules:[
        v => !!v || 'Country is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Country must be character',
      ],
pincode:'',
pincoderules:[       
         v => !!v || 'Contact is Required',
        v => v.length > 5 || 'Contact must  be Number'],
contact:'',
contactrules:[        v => !!v || 'Contact is Required',
        v => v.length == 10 || 'Contact Number must be equal to  10 numbers'],
email:'',
emailrules: [
  v => !!v || 'E-mail is required',
  v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
],
reason:'',
reasonrules:[
        v => !!v || 'City is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'City must be character',
      ],
meetvisit:'',
meetvisitrules:[
        v => !!v || 'City is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'City must be character',
      ],
checkin:'',
checkinrules:[  v => !!v || 'Check-In Time is Required',
],
checkout:'',
checkoutrules:[ v => !!v || 'Check-out Time is Required'

],
batch:'',
batchrules:[
        v => !!v || 'Batch is Required',
         v => v.length > 2  || 'Batch must be Number',
      ],
parking:'',
parkingrules:[ v => !!v || 'Parking is Required',],
idcard:'',
idcardrules:[ v => !!v || 'ID Card is Required',],
luggage:'',
luggagerules:[ v => !!v || 'Luggage is Required',]
             }
        },
 methods: {
      validate () {
        this.$refs.form.validate()
         this.$refs.form1.validate()
      }
      },
 }

</script>

<style>

</style>
