


<template>

<div id="app">
 
    <v-app id="inspire">
  
<appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" v-bind:items="breadcombs"></appbar>
<navbar ref="drawer"  :items="items"></navbar>


     
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
    <!-- <v-avatar 
      tile height="90" width="85"
      class="avatar_hcard_2 rounded-lg"
    > -->
  <v-avatar 
      tile height="90" width="85"
      class="green rounded-lg"
    >
      <v-icon dark size="40">
        mdi-account
      </v-icon>
    </v-avatar>
     </div> </v-card> 
<v-card
      class="overflow-hidden rounded-lg"
  color="white">
      <v-toolbar
        flat
        color="transparent"
        light class="ml-15"
      >
        <v-toolbar-title class="font-weight-medium header_dt_title ml-13">Applicant Data</v-toolbar-title>
  <v-spacer></v-spacer>

 
     

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
 <v-data-table class="table_font"
        :headers="headers"
        :items="desserts"
        :search="search"
      >
   <template v-slot:top>
     <v-dialog
          v-model="dialog"
          max-width="500px"
          :retain-focus="false"
          
        >

           <v-card>
          <v-card-title  class=" justify-center teal header_title"  style="color:white" >
            Selected
          </v-card-title>

<v-container>
<v-row >

 <v-col cols="12" md="12" lg="12" >

  <h4 class=" mb-2 sub_header">  Applicant id   </h4>
<v-text-field   label="Enter Applicant id" ></v-text-field>

 </v-col>
<v-col cols="6" md="6" lg="6">
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
              label="Enter The Joining date"
              prepend-inner-icon="mdi-calendar"
              readonly 
            
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

</v-col>
<v-col cols="6" md="6" lg="6">
  <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date1" disabled
              label="Confirm date"
             prepend-inner-icon="mdi-calendar"
              readonly 
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date1"
            no-title
            scrollable
            
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
             
              @click="menu1 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu1.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

</v-col>
<v-col cols="12" md="12" lg="12">
  <h4 class=" mb-2 sub_header">  Reporting Manager   </h4>
  <v-text-field   label="Enter Reporting manager" > </v-text-field>
          <v-card-actions class="d-flex justify-end" >
      <v-btn
             elevation="2"
               class="mr-2"
              color="red"
              dark
              @click="dialog = false"  
            >
                Close
              </v-btn>
           <v-btn
             elevation="2"
        
              color="teal"
              @click="dialog = false"
               dark
            >
              save
            </v-btn>
          </v-card-actions>
</v-col>

</v-row>
</v-container>
        </v-card>

 
        </v-dialog>
        <v-dialog
          v-model="dialog2"
          max-width="500px"
          :retain-focus="false"
        >
             <v-card>
          <v-card-title class=" justify-center teal header_title"  style="color:white">
           Rejected
          </v-card-title>

<v-container>
<v-row>
 <v-col md="12">

  <h4 class="sub_header mb-2">  Reason   </h4>
<v-text-field  height="100px"  label="Enter The Reason" ></v-text-field>
<v-card-actions class="d-flex justify-end" >
         <v-btn
             elevation="2"
        class="mr-2"
              color="red"
              dark
                @click="dialog2 = false"
              >
                Close
              </v-btn>
          <v-btn
             elevation="2"

              color="teal"
              dark
              @click="dialog2 = false"
              
            >
              save
            </v-btn>
          </v-card-actions>
 </v-col>


</v-row>
</v-container>
        </v-card>
        </v-dialog>
  <v-dialog
          v-model="dialog3"
          max-width="500px"
          :retain-focus="false"
        >

           <v-card>
          <v-card-title class=" justify-center teal  header_title" style="color:white">
            Hold
          </v-card-title>

<v-container>
<v-row>
 <v-col md="12">

<h4 class="sub_header mb-2">  Reason   </h4>
<v-text-field  height="100px"  label="Enter The Reason" ></v-text-field>
<v-card-actions class="d-flex justify-end" >
       <v-btn
             elevation="2"
               class="mr-2"
              color="red"
              dark
                @click="dialog3 = false"
              >
                Close
              </v-btn>
            <v-btn
             elevation="2"

              color="teal"
              dark
              @click="dialog3 = false"
              
            >
              save
            </v-btn>
          </v-card-actions>
 </v-col>


</v-row>
</v-container>
        </v-card>
        </v-dialog>
   </template>
  <template v-slot:[`item.glutenfree`]="{ item }">  
  

      
   <v-icon
           v-bind="attrs"
            v-on="on"
          medium
          class="mr-2"
          color="teal"
          v-model="item.icon"
          @click="dialog = true"
 > 
         {{item.icon}}
        </v-icon>
  



     
     


      
   <v-icon
           v-bind="attrs"
            v-on="on"
          medium
          class="mr-2"
          color="red"
          v-model="item.icon1"
          @click="dialog2 = true"
 >
         {{item.icon1}}
        </v-icon>
 
     

      
   <v-icon
           v-bind="attrs"
            v-on="on"
          medium
          class="mr-2"
          color="orange"
          v-model="item.icon2"
          @click="dialog3 = true"

 >
         {{item.icon2}}
        </v-icon>

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
import moment from 'moment'

export default {
 
name: 'Employee Details',
components:{navbar,appbar,
},
data:()=>({

         days:'180',
      date: new Date().toISOString().substr(0, 10),
    menu: false,
           date1: new Date().toISOString().substr(0, 10),
    menu1: false,
     dialog: false,
      dialog2: false,
      dialog3: false,
    
    valid: true,
    name: '',
id:'',
idRules: [
      v => !!v || 'Name is required'],
nameRules: [
      v => !!v || 'E-mail is required'],
user: 'User',
    left: false,
drawer:null,
       search: '',
hasSaved: false,

        isEditing: false,
hasSavedd: false,
        isEditingg: false,
     

headers: [
        {
          text: 'App ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Applicant Name', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Domain', value: 'domain', },
       
        { text: 'Aadhar Number ', value: 'adhar' },
 { text: 'Mail_Id', value: 'mail' },
        { text: 'Status ', value: 'sts' },

{ text: 'Actions', value: 'glutenfree',sortable: false },      ],
 breadcombs: [
        {
          text: 'Applicant Data',
          disabled: true,
          href: '#/applicantdata',
        },
      
      ],
 desserts : [
        {
          id: 'A0001',
          name: 'R.A.Kumar',
          age:'24',
          domain: 'Vuejs',
          adhar: '245625478666',
          mail: 'test1@gmail.com',
          sts:'Probation',
          icon:'mdi-clipboard-check',
 icon1:'mdi-close-box',
 icon2:'mdi-pause',
link:'',

        },
        {
          id: 'A0002',
          name: 'Thulasi',
          age:'27',
          domain: 'Nodejs',
          adhar: '856541528565',
          mail: 'test2@gmail.com',
       sts:'Selected',
          icon:'mdi-clipboard-check',
 icon1:'mdi-close-box',
 icon2:'mdi-pause',
link:'',
        },{
          id: 'A0003',
          name: 'A.Us.durai',
          age:'25',
          domain: '.NET',
          adhar: '478574859652',
          mail: 'test3@gmail.com',
         sts:'Probation',
         icon:'mdi-clipboard-check',
 icon1:'mdi-close-box',
 icon2:'mdi-pause',
link:'',
        }, {
          id: 'A0004',
          name: 'Dinesh',
         age:'28',
          domain: 'PHP',
          adhar: '986532145236',
          mail: 'test4@gmail.com',
         sts:'Selected',
          icon:'mdi-clipboard-check',
 icon1:'mdi-close-box',
 icon2:'mdi-pause',
link:'',
        }, {
          id: 'A0005',
          name: 'R.Mohan',
          age:'28',
          domain: 'PHP',
          adhar: '718293456932',
          mail: 'test5@gmail.com',
         sts:'Probation',
          icon:'mdi-clipboard-check',
 icon1:'mdi-close-box',
 icon2:'mdi-pause',
link:'',
        }, {
          id: 'A0005',
          name: 'Ragupathi',
          age:'24',
          domain: 'PHP',
          adhar: '852147896325',
          mail: 'test6@gmail.com',
          sts:'Selected',
          icon:'mdi-clipboard-check',
 icon1:'mdi-close-box',
 icon2:'mdi-pause',
link:'',
        }, {
          id: 'A0005',
          name: 'Priya',
          age:'24',
          domain: 'Vue',
          adhar: '852147896325',
          mail: 'test5@gmail.com',
          sts:'Probation',
          icon:'mdi-clipboard-check',
 icon1:'mdi-close-box',
 icon2:'mdi-pause',
link:'',
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
  }) ,

    watch:{
 date (val){
    
  this.date1=( moment(val).add(this.days, 'days').format('YYYY-MM-DD'));
  
}  },

 computed: {
      isDisabled() {
        // you can  check your form is filled or not here.
        return  this.days<=1 == true
      },
     
       
    },
methods:{

    dialog () {
     
      this.dialogDelete = true
    },

      dialog2 () {
     
      this.dialogDelete = true
    },
 dialog3 () {
     
      this.dialogDelete = true
    },
}

   }





</script>

<style>




</style>