<template>

<div id="app">
 
    <v-app id="inspire">
  
<appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" v-bind:items="breadcombs"></appbar>
<navbar ref="drawer" :items="items"></navbar>


      <v-main class="grey lighten-2">
<v-container class="mt-5">
<!-- 
<v-card
      class="overflow-hidden py-4"
        color="#157eab"
dark
    >
        <v-toolbar-title class="font-weight-medium ml-3">Employee ID</v-toolbar-title></v-card> -->
        
  <v-card light
        class="mb-n16 mx-6 rounded-lg" style="z-index:1"
        elevation="8"
        height="90"
        max-width="85"
      >  <div class="text-center rounded-lg">
    <v-avatar 
      tile height="90" width="85"
      class="brown rounded-lg"
    >
      <v-icon dark size="40">
        mdi-account
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
      
        <v-toolbar-title class="font-weight-medium  header_dt_title ml-13">Employee Data</v-toolbar-title> 
    

      </v-toolbar>

      <v-card-text>

<!-- content -->

<v-card-title >
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
      class="table_font"
        :headers="headers"
        :items="desserts"
        :search="search"
      >

  <template v-slot:[`item.glutenfree`]="{ item }">  
  
            
    
      
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }"> 
<v-btn
        class="ma-2 teal "
        text dark

        icon
        v-model="item.icon"
       @click="$router.push(item.link)"
   v-bind="attrs"
                v-on="on"
 
      >
        <v-icon > {{item.icon}}</v-icon>
      </v-btn>
      </template>
      <span class="table_icon_spn " >View</span>
    </v-tooltip>
              
        
     



      </template>
   
          
</v-data-table>
   

</v-card-text>

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
name: 'Employee_Details',
components:{navbar,appbar,
},
data () {
      return {
       user: 'User',
       dialog: false,
       drawer:null,
       search: '',
       menu: false,
       headers: [
        {
          text: 'Emp ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Employee Name', value: 'name' },
        { text: 'Joining', value: 'joining', },
       
        { text: 'Confirmation Date ', value: 'confirm' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'glutenfree',sortable: false },      ],

desserts:[],

       items: [
                 { title: 'Home',icon: 'mdi-home',link:'/home',overview:1 },
                { title: 'Candidate Induction',icon: 'mdi-account-question',link:'/interviwer',overview:0},
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
   mounted(){
   this.access();
   },
   methods: {
   access(){
     if(this.$store.state.role.position=="Manager"||this.$store.state.role.position=="Hr")
     {
    this.desserts =[
        {
          id: '001',
          name: 'R.Ashok Kumar',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
          icon:'mdi-eye',
link:'/personalinfo',

        },
        {
          id: '002',
          name: 'Usha',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
 icon:'mdi-eye',
 icon1:'mdi-table-edit',
link:'',
        }, {
          id: '003',
          name: 'Thulasi',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
 icon:'mdi-eye',
 icon1:'mdi-table-edit',
link:'',
        }, {
          id: '004',
          name: 'Dinesh',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
 icon:'mdi-eye',
 icon1:'mdi-table-edit',
link:'',
        }, {
          id: '005',
          name: 'Mohanr',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
 icon:'mdi-eye',
 icon1:'mdi-table-edit',
link:'',
        }, {
          id: '006',
          name: 'Raghu',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
 icon:'mdi-eye',
 icon1:'mdi-table-edit',
link:'',
        }, {
          id: '007',
          name: 'Priya',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
 icon:'mdi-eye',
 icon1:'mdi-table-edit',
link:'',
        },
      ]
      }else{
      this.desserts =[
        {
          id: '001',
          name: 'R.Ashok Kumar',
          joining: '1/3/2020',
          status: 'Probation',
          confirm: '1/7/2020',
          icon:'mdi-eye',
link:'/personalinfo',

        }]}
    }
   },



   }


</script>

<style>


.emp {
color:#157eab
}
.text{
  font-family: "Cambria";

}
</style>