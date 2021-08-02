<template>
<div id="app">

<v-app id="inspire">
<appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" v-bind:items="breadcombs"></appbar>

<navbar ref="drawer" :items="items"></navbar>

     
      <v-main class="grey lighten-2">
        
     <v-container class="mt-2"> 
       <v-row class="justify-center">
          
        <v-col cols="12" md="5">
               <v-card light
        class="mb-n16 mx-6 rounded-lg" style="z-index:1"
        elevation="4"
        height="90"
        max-width="85"
      >  <div class="text-center rounded-lg">
    <!-- <v-avatar 
      tile height="90" width="85"
      class="leave_innercard rounded-lg"
    > -->
    <v-avatar 
      tile height="90" width="85"
      class="grey darken-1 rounded-lg"
    >

      <v-icon dark size="40">
       mdi-calendar-range
      </v-icon>
    </v-avatar>
     </div> </v-card>    
          <v-card class="elevator-9 rounded-lg" > 
        
              <v-toolbar
        flat
        color="transparent"
light class="ml-15"
      >
      
        <v-toolbar-title class="font-weight-medium header_dt_title ml-13">Apply Leave</v-toolbar-title> 
    
  <v-spacer></v-spacer>


     

      </v-toolbar>
        <v-card-text class="py-0" >
       
                <v-form  ref="form1"
                v-model="valid" class="pt-3"
                >
                <h4 class="sub_header"> No of days </h4>
                
                <v-text-field
                v-model="days" 
            
                type="number"
                :rules="daysRules"
                label="No of Days"
        
          
              ></v-text-field>
              <v-row>
                <v-col md="6">
                 <h4  class="sub_header">From</h4>
                  <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="From"
              :rules="daterules"
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
          <h4  class="sub_header">To  </h4>
          <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
    
          :return-value.sync="date1"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date1"
              label="To"
              :disabled="isDisabled"
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
          </v-col>
              </v-row>
          <h4  class="sub_header">Reason</h4>    
            <v-text-field
            v-model="reason"  
            :rules="reasonRules"
            label="Reason"
   

          ></v-text-field>
             <h4  class="sub_header">Reporting To</h4>
             <v-text-field
           v-model="email"
          :rules="emailRules"
          label="Reporting to"
          required


          ></v-text-field>
          <div align="end">
         <v-btn 
         class="ma-2 " 
         :disabled="!valid"  
         @click="validate"  
         color="success" 
  
         >
         APPLY LEAVE</v-btn>
          </div>
                   <v-card-text class="py-0">
            <h4  class="sub_header"> Approved By   </h4>
                
            <v-text-field
            v-model="approved"
            class="mt-4"
            disabled
       
            label="Approved by"
            solo
      
          ></v-text-field>
           </v-card-text>
            </v-form>
        </v-card-text>
        
        </v-card>
    </v-col>
       
        <v-col
          cols="12" md="5"
        >   
       
      <v-row no-gutters>
        <v-col
          cols="12" 
        >
        
  <v-card light
        class="mb-n16 mx-6 rounded-lg" style="z-index:1"
        elevation="4"
        height="90"
        max-width="85"
      >  <div class="text-center rounded-lg">
    <!-- <v-avatar 
      tile height="90" width="85"
      class="leave_innercard rounded-lg"
    > -->
 <v-avatar 
      tile height="90" width="85"
      class="grey darken-1 rounded-lg"
    >
      <v-icon dark size="40">
       mdi-calendar-clock
      </v-icon>
    </v-avatar>
     </div> </v-card>    
     <v-card
  elevation="2" class="rounded-lg"
>

<!-- <p v-if="hour1 > 2.00">Consider As Half Day Leave </p>
<p v-else>You Have Remaining {{hours}}:{{minutes}} (hrs/min)</p> -->

 <v-toolbar
        flat
        color="transparent"
light class="ml-15"
      >
      
        <v-toolbar-title class="font-weight-medium header_dt_title ml-13">Apply Permission</v-toolbar-title> 
    
  <v-spacer></v-spacer>


     

      </v-toolbar>
    <v-row justify="center mt-4">
        <v-col
          cols="10" md="8"
        class="py-0"
        >
        <v-form  ref="form2"
                v-model="valid1"
                >
        
<v-alert
      dense
      border="left"
      type="success"
      v-if="hour1 <= 1.45"
    >
     You Have Remaining <strong>{{hourss}}:{{minutes}}</strong> (hrs/min)
    </v-alert>

    <v-alert
 dense
      text
      type="info"
    v-else-if="hour1 > 1.45 && hour1 < 2.00"
    >
    You Have Last  <strong> {{minutes}} Minutes</strong>
    </v-alert>
  <v-alert
 dense
      text
      border="left"
      type="warning"
    v-else-if="hour1 >= 2.00 && hour1 <= 4.00"
    >
    Consider as <strong> Half Day  </strong>Leave
    </v-alert>
  <v-alert
 dense
      text
      outlined
      type="error"
    v-else-if="hour1 > 4.00 && hour1 <= 8.00"
    >
    Consider as<strong> Full Day</strong> Leave 
    </v-alert>
  <v-alert
 dense
      text
      outlined
      type="error"
      v-model="err"
    v-else
    >
    Please Enter valid Hours
    </v-alert>
   <v-text-field
              v-model="hour1"
              :rules="hour1Rules"
              maxlength="1"
              label="Enter the Hours"
              type="number"
            > </v-text-field>
            
<v-alert
      dense
      border="left"
      type="error"
      v-if="minute1 > 60"
    >
       Please Enter valid Minutes
    </v-alert>

          <v-text-field
            v-model="minute1"
            :rules="minute1Rules"
            maxlength="2"
            label="Enter the minutes"
            type="number"
 
          > </v-text-field>
          <div align="end">
         <v-btn 
         class="ma-2 " 
         :disabled="!valid1" 
         @click="validate1"  
         color="success" 
         >
         APPLY PERMISSION</v-btn>
          </div>
        
            </v-form>
    </v-col>
<v-col
          cols="12" md="8"
        
        >
           <v-card-text class="py-0">
            <h4  class="sub_header"> Approved By   </h4>
                
            <v-text-field
            v-model="approved"
            class="mt-4"
            disabled

            label="Approved by"
            solo
      
          ></v-text-field>
           </v-card-text>
</v-col>
  </v-row>
</v-card>
        </v-col>
      </v-row>
  
  </v-col>

  
  </v-row>
 
    </v-container>
    
      </v-main>
       
   </v-app>
</div>
</template>
<style>

</style>
<script>
import appbar from './content/appbar'
import navbar from './content/navbar'
import moment from 'moment'

  export default {
     name: 'Applicant',
     components:{
        navbar,
        appbar,
      
     },
    data: () => ({

       valid: false,
       valid1:false,
        drawer: null,
        menu:false,
        hour:'02',
        minute:'60',
        hourss:'00',
        hours:'00',
        minutes:'00',
        date: '',
        menu1:false,
        err:"error",
        date1: '',
        
panel:[1,1],
panel1:[1,1],
panel2:[1,1],
   breadcombs: [
        {
          text: 'Apply Leave',
          disabled: true,
          href: '#/ApplyLeave',
        },
      
      ],
        items: [
                 { title: 'Home',icon: 'mdi-home',link:'/home',overview:1 },
                { title: 'Candidate Induction',icon: 'mdi-account-question',link:'/index',overview:0},
                { title: 'Attendance Report',icon: 'mdi-calendar-check',link:'/attendance',overview:0},
                { title: 'Training Department',icon: 'mdi-account-clock',link:'',overview:1 },
                { title: 'Emergencency Medicare',icon: 'mdi-account-settings',link:'',overview:1},
                { title: 'Human Resources',icon: 'mdi-briefcase-account-outline',link:'/applicantdata',overview:1},
                { title: 'Leave Management',icon: 'mdi-calendar-alert',link:'/ApplyLeave' ,overview:1},
                { title: 'Asset Management',icon: 'mdi-shopping',link:'' ,overview:1},
                { title: 'Salary Management',icon: 'mdi-cash-multiple',link:'' ,overview:1},
                { title: 'Travel Management',icon: 'mdi-airplane-takeoff',link:'',overview:1 },
                { title: 'Financial Management',icon: 'mdi-bank',link:'',overview:1 },
                { title: 'Employee Details',icon: 'mdi-account-box-outline',link:'/employee',overview:1},
                { title: 'Company Policy',icon: 'mdi-tie',link:'',overview:1},
            ],
          email: '',
          emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
            
          days: '',
          daysRules: [
           v => !!v || 'No of Days is required',
          v => v.length <= 3 || 'Number must be valid',
          ],

          approved: '',
          approvedRules: [
          v => !!v || 'Name is required',
          v =>  /^[A-Za-z]+$/.test(v) || 'Name must be character',
          ],

          reason: '',
          reasonRules: [
          v => !!v || 'Reason is required',
          v =>  /^[A-Za-z]+$/.test(v) || 'Reason must be valid',
          ],

          hour1: '',
          hour1Rules: [
          v => !!v || 'Hours is required',
          v => v.length <= 1 || v.length < 0,
          ],

          minute1: '',
          minute1Rules: [
          v => !!v || 'Minutes is required',
          v => v.length <= 2 || v.length < 0,
          ],

          daterules: [
          v => !!v || 'Date is required',
        
          ],
           
           To:"",
           
         
   
  }),

     watch:{
 date (val){
    
  this.date1=( moment(val).add(this.days, 'days').format('YYYY-MM-DD'));
  
},

hour1  (){
var startTime=moment(this.hour1, "HH a");

var endTime=moment(this.hour, "HH:mm a");

var duration = moment.duration(endTime.diff(startTime));


var hours = parseInt(duration.asHours());
var minutes = parseInt(duration.asMinutes())-hours*60;

this.hourss=hours;
this.hours=hours;
this.minute1=minutes;
 
},
minute1 (){

var startTime=moment(this.minute1, "mm a");

var endTime=moment(this.hours, "HH:mm  a");

var duration = moment.duration(endTime.diff(startTime));

var hours = parseInt(duration.asHours());

var minutes = parseInt(duration.asMinutes())-hours*60;



this.hourss=hours;
this.minutes=minutes;

},
 validate1 () {
       this.$refs.form2.validate1()
       }
  },

 computed: {
      isDisabled() {
        return  this.days<=1 == true
      },

    },

   methods: {
      validate () {
        this.$refs.form1.validate()
       
        
      },

      },
   
  }
</script>
