<template>
 <div id="app">
  <v-app id="inspire">
   <v-app id="inspire">
    <appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" ref="name" v-bind:items="breadcombs"></appbar>
<navbar ref="drawer" :items="items"></navbar>
     <v-main class="grey lighten-3">
      <v-container>
          <tabbaratt></tabbaratt>
             <v-card flat color="pt-12" class="rounded-lg"  :disabled="employee.view=='0'">
  <v-card light
        class="mb-n16 mx-6  rounded-lg" style="z-index:1"
        elevation="8"
        height="90"
        max-width="85"
      >  <div class="text-center rounded-lg">
    <v-avatar 
      tile height="90" width="85"
      class="orange darken-1
 rounded-lg"
    >
      <v-icon dark size="40">
       mdi-calendar-check
      </v-icon>
    </v-avatar>
     </div> </v-card> 
<v-card
      class="overflow-hidden rounded-lg"
  color="white" 
    > 
      <v-toolbar
        flat
        color="transparent"
light class="ml-15"
      >
      
        <v-toolbar-title class="font-weight-medium  header_dt_title ml-13">Swipe Card Attendance</v-toolbar-title> 
    

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
        { text: 'Checkin', value: 'checkin' },
        { text: 'Checkout', value: 'checkout' },
         { text: 'Total', value: 'total' },
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

      }
    },
methods:{
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
watch:{
//   date() {
// this.get(this.date)
//   }
},

 computed: mapGetters({
    employee:'attendance',
 })
   }

</script>

<style>

</style>
