<template>
 <div id="app">
  <v-app id="inspire">
   <v-app id="inspire">
    <appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" ref="name" v-bind:items="breadcombs"></appbar>
<navbar ref="drawer" :items="items"></navbar>
     <v-main class="grey lighten-3">
 <v-container >
<tabbaratt></tabbaratt>
        <v-card flat color="pt-12" class="rounded-lg">
  <v-card light
        class="mb-n16 mx-6 rounded-lg" style="z-index:1"
            elevation="8"
        height="90"
        max-width="85"
      >  <div class="text-center rounded-lg">
    <v-avatar 
      tile height="90" width="85"
      class="orange darken-1 rounded-lg"
    >
      <v-icon dark size="40">
       mdi-calendar-text
      </v-icon>
    </v-avatar>
     </div> </v-card> 
<v-card  :disabled="employee.view=='0'"
      class="overflow-hidden rounded-lg"
  color="white" 
    > 
      <v-toolbar
        flat
        color="transparent"
light class="ml-15"
      >
      
        <v-toolbar-title class="font-weight-medium  header_dt_title ml-13">Project Attendance</v-toolbar-title> 
    

      </v-toolbar>

      <v-card-text>

<!-- content -->

<v-card-title >
  <v-dialog
        ref="modal"
        v-model="modal"
        :return-value.sync="date"
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Select Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          scrollable
          color="teal"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="red"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="teal"
       @click="get(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
<v-spacer/><v-spacer/><v-spacer/><v-spacer/>
              <v-text-field
          v-model="search" 
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
  </v-card-title>
  <v-data-table
      class="elevation-1"
        :headers="headers"
        :items="desserts"
        :search="search"
        :hide-default-footer="true"
      >

          
</v-data-table>
   

</v-card-text>

    </v-card>
              <!-- <v-card 
        class="mb-n8 mx-6  rounded-lg mt-8" style="z-index:1"
        elevation="8"
        height="50"
        max-width="50"
      >  <div class="text-center rounded-lg">
    <v-avatar 
      tile height="50" width="50"
      class="orange lighten-1
 rounded-lg"
    >
      <v-icon dark size="40">
     mdi-pencil-circle-outline
      </v-icon>
    </v-avatar>
     </div> </v-card> 
   <v-card class="white pa-5 rounded-lg">
        <v-row  class="mt-5">
        
 
          <v-col cols="12" md="6">
          <v-card class="mt-3"  :disabled="employee.view=='0'"> 
        
        
        <v-card-text class="py-0" >
            <v-form  ref="form"
    v-model="valid"
   >
              
                
                <v-row >
                <v-col cols="12" md="12">
               <h4>Task Name </h4>

                <v-text-field
                 v-model="task"  :disabled="employee.edit=='0'"
                 :rules="taskrules"
                label="Task Name"
                type="text"
                color="grey darken-1"
                
               />
                </v-col>
                
                </v-row>
               

                 <v-row>
                <v-col cols="12" md="12">
                  <h4> Date</h4>
                 <v-menu
          ref="menu" :disabled="employee.edit=='0'"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Date"
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
                 <h4> Time In </h4>
                <v-text-field
                 v-model="timein" :disabled="employee.edit=='0'"
              :rules="timeinrules"
                label="Time In"
                type="number"
                color="grey darken-1" 
               />
                </v-col>

            
              <v-col md="6">
              <h4> Time Out </h4>
                <v-text-field
                 v-model="timeout" :disabled="employee.edit=='0'"
              :rules="timeoutrules"
                label="Time Out"
                type="number"
                color="grey darken-1" 
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
                 <v-col cols="12" md="12">
                   <h4> Sick Leave </h4>
                <v-text-field
                label="Sick Leave" :disabled="employee.edit=='0'"
                 v-model="sick"
                :rules="sickrules"
                type="text"
                color="grey darken-1"
                required
                />
              </v-col>
          
                </v-row>


                 
                <v-row>
                 <v-col cols="12" md="12">
                   <h4> Vacation </h4>
                <v-text-field
                label="Vacation "
                 v-model="vacation" :disabled="employee.edit=='0'"
              :rules="vacationrules"
                type="text"
                color="grey darken-1"
                required
                 />
                 </v-col>
              
                </v-row>
                  <v-row>
                 <v-col md="12">
                  <h4> Total </h4>
               <v-text-field
              v-model="total" :disabled="employee.edit=='0'"
              :rules="totalrules"
              label="Total"
              required
  color="grey darken-1"
              type="number"
            ></v-text-field>
                          </v-col>
          
                </v-row>

         
         
            </v-form>
        </v-card-text>
   
          </v-card>
           </v-col>
        </v-row>
        
  
        <div align="center" class="text-right">
          <v-btn 
      :disabled="employee.edit=='0'||!valid || !valid1"
      color="success"
      class="mr-4"
      @click="validate"
    >
      save
    </v-btn>
        </div>
   </v-card> -->
        </v-card>
</v-container>
     </v-main>
   </v-app>
  </v-app>
 </div>
</template>
<script>
import appbar from './content/appbar';
import navbar from './content/navbar';
import tabbaratt from './content/tabbaratt';
import { mapGetters } from 'vuex';
import api from '../API/User'

export default {
name: 'Swipe Card Report',

    components:{
     navbar,
     appbar,
     tabbaratt

      },
data () {
      return {
      valid: false,
 valid1: false,
      search:'',
      sear:'',
      tab: null,
      drawer: null,
      modal: false,
      date:'',
   headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Emp ID', value: 'emp_id' },
        { text: 'Emp Name', value: 'emp_name' },
        { text: 'Date', value: 'date' },
        { text: 'Task', value: 'task' },
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
       desserts: [
               {
          empid:'' ,
          empname: '',
          emailid: '',
          phoneno: '',
          approvemanager: '',
         
        },
       
      ],
  task:'',
 taskrules:[ v => !!v || 'Name is Required',
         v =>  /^[A-Za-z]+$/.test(v) || 'Name must be character',],
 daterules:[  v => !!v || 'Date is Required',],
 timein:'',
timeinrules:[v => !!v || 'Time-In is Required'],
timeout:'',
timeoutrules:[v => !!v || 'Time-Osut is Required'],
// sick:'',
// sickrules:[],
// vacation:'',
// vacationrules:[],
total:'',
totalrules:[ v => !!v || 'Total is Required',
        v => v <=10 || 'Enter valid Total',],
   
  
      }

    },
  methods: {
      validate () {
        this.$refs.form.validate()
         this.$refs.form1.validate()
      },
      get(date){
      api.getattendance(date)
        .then((resp) => {
        this.desserts=resp.data
        this.modal=false
        this.$refs.modal.save(date)
        })
        .catch(() => {
         this.modal=false
        });
}
      },

 computed: mapGetters({
    employee:'attendance',
 })
   }

</script>

<style>

</style>
