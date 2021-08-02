<template>

<v-app>
<appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" ref="name" v-bind:items="breadcombs"></appbar>


<navbar ref="drawer" :items="items"></navbar>

  <v-main class="grey lighten-3">
<timer></timer>

          <v-container  >

     <v-row justify="end"  >  

  <v-col cols="12" sm="5" md="3" lg="3" xl="2" >
 <v-text-field 
          append-icon="mdi-magnify"
          single-line
            hide-details
          ></v-text-field>
  </v-col>
   </v-row>
    <v-row >
<template v-if="candidate.overview==1">
     <v-col cols="6" md="2" sm="4" >
  <v-hover  
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2"  
    class="mx-auto" to="/interviwer" 
      max-width="180"
      height="200"
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow" color="white" size="80">
        <v-icon color="teal" size="40">
         mdi-account-question
        </v-icon>
      </v-avatar>
      </v-card-text>
  
      <v-card-text>
        <h3>Candidate</h3>
        <h3>Induction</h3>
      </v-card-text>
      </div>  
    </v-card>
  </v-hover>
       </v-col>
</template>
<template v-if="attendance.overview==1">
        <v-col cols="6" md="2" sm="4" >
    <v-hover
          v-slot="{ hover }"
        >

          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"  to="/attendance"
      max-width="180" 
            height="200"
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow" color="white" size="80">
        <v-icon color="teal" size="40">
         mdi-calendar-check
        </v-icon>
      </v-avatar>
      </v-card-text>
  
     <v-card-text>
        <h3>Attendance</h3>
        <h3>Report</h3>
      </v-card-text>
      </div>  
    </v-card>
    </v-hover>
       </v-col>
</template>

<template v-if="training.overview==1">
<v-col cols="6" md="2" sm="4">
  <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"
      max-width="180"
            height="200"
           
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow1" color="white" size="80">
        <v-icon color="orange lighten-2" size="40">
         mdi-account-clock
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Training</h3>
        <h3>Department</h3>
      </v-card-text>
      </div>  
    </v-card>
  </v-hover>
       </v-col>
</template>
<template v-if="emergency.overview==1">
         <v-col cols="6" md="2" sm="4">
     <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"
      max-width="180"
            height="200"
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow1" color="white" size="80">
        <v-icon color="orange lighten-2" size="40">
         mdi-account-settings
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Emergencency</h3>
        <h3>Medicare</h3>
      </v-card-text>
      </div>  
    </v-card>
     </v-hover>
       </v-col>
</template>
<template v-if="hr.overview==1">
           <v-col cols="6" md="2" sm="4">
    <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto" to="/Applicantdata"
      max-width="180"
            height="200"
         
          
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow2" color="white" size="80">
        <v-icon color="purple lighten-1" size="40">
         mdi-briefcase-account-outline
        </v-icon>
      </v-avatar>
      </v-card-text>
  
      <v-card-text>
        <h3>Human</h3>
        <h3>Resource</h3>
      </v-card-text>
      </div>  
    </v-card>
    </v-hover>
       </v-col>
</template>  
              <!-- <v-col cols="6" md="2" sm="4"  >
  <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto" to="/ApplyLeave"
      max-width="180"
            height="200"
       v-show="human"
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow2" color="white" size="80">
        <v-icon color="purple lighten-1" size="40">
         mdi-calendar-alert
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Human</h3>
        <h3>Resources</h3>
      </v-card-text>
      </div>  
    </v-card>
  </v-hover>
        </v-col> -->
<template v-if="leave.overview==1"> 
       <v-col cols="6" md="2" sm="4"  >
  <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto" to="/ApplyLeave"
      max-width="180"
            height="200"
       
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow2" color="white" size="80">
        <v-icon color="purple lighten-1" size="40">
         mdi-calendar-alert
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Leave</h3>
        <h3>Management</h3>
      </v-card-text>
      </div>  
    </v-card>
  </v-hover>
        </v-col>
</template>
<template v-if="asset.overview==1">
            <v-col cols="6" md="2" sm="4">
     <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"
      max-width="180"
            height="200"
           
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow3" color="white" size="80">
        <v-icon color="green lighten-1" size="40">
         mdi-responsive
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Asset</h3>
        <h3>Management</h3>
      </v-card-text>
      </div>  
    </v-card>
     </v-hover>
       </v-col>
</template>
<template v-if="salary.overview==1">
       <v-col cols="6" md="2" sm="4">
    <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"
      max-width="180"
            height="200"
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow3" color="white" size="80">
        <v-icon color="green lighten-1" size="40">
         mdi-cash-multiple
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Salary</h3>
        <h3>Management</h3>
      </v-card-text>
      </div>  
    </v-card>
    </v-hover>
       </v-col>
</template>
<template v-if="travel.overview==1">
       <v-col cols="6" md="2" sm="4" >
     <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"
      max-width="180"
            height="200"
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow4" color="white" size="80">
        <v-icon color="pink lighten-1" size="40">
         mdi-airplane
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Travel</h3>
        <h3>Management</h3>
      </v-card-text>
      </div>  
    </v-card>
     </v-hover>
       </v-col>
</template>
<template v-if="finnacial.overview==1">
       <v-col cols="6" md="2" sm="4">
     <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"
      max-width="180"
            height="200"
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow4" color="white" size="80">
        <v-icon color="pink lighten-1" size="40">
         mdi-bank
        </v-icon>
      </v-avatar>
      </v-card-text>
  
      <v-card-text>
        <h3>Financial</h3>
        <h3>Management</h3>
      </v-card-text>
      </div>  
    </v-card>
     </v-hover>
       </v-col>
</template>
<template v-if="employee.overview==1">
       <v-col cols="6" md="2" sm="4">
   <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto" to="/employee"
      max-width="180"
            height="200"
      
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow10" color="white" size="80">
        <v-icon color="light-blue lighten-1" size="40">
         mdi-account-box-outline
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
      <h3>Employee</h3>
      <h3>Details</h3>
      </v-card-text>
       <!-- {{ employeedetails }} -->
      </div>  
    </v-card>
   </v-hover>
       </v-col>
</template>
<template v-if="policy.overview==1">
       <v-col cols="6" md="2" sm="4">
      <v-hover
          v-slot="{ hover }"
        >
          <v-card :elevation="hover ? 6 : 2" 
    class="mx-auto"
      max-width="180"
            height="200"
   
    >
      <div class="text-center">
      <v-card-text class="mt-4">
        <v-avatar class="shadow10" color="white" size="80">
        <v-icon color="light-blue lighten-1" size="40">
         mdi-tie
        </v-icon>
      </v-avatar>
      </v-card-text>
      <v-card-text>
        <h3>Company</h3>
        <h3>Policy</h3>
      </v-card-text>
      </div>  
    </v-card>
      </v-hover>
       </v-col>
</template>

      </v-row>

      </v-container>

      </v-main>
</v-app>


</template>
<script>
import appbar from './content/appbar'
import navbar from './content/navbar'
import timer from './content/timer'
import { mapGetters } from 'vuex';
export default {
name: 'Home',
components:{
navbar,
appbar,
timer
},
data () {
      return {
              drawer: null,
          
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
  // computed: mapGetters({
  //   candidate: () => candiate,
  //   employee: () => attendance,
  // }),
  computed: {
...mapGetters({
           candidate:'candiate',
           attendance:'attendance',
           training:'training',
           emergency:'emergency',
           hr:'hr',
           leave:'leave',
           asset:'asset',
           salary:'salary',
           travel:'travel',
           finnacial:'finnacial',
           employee:'employee',
           policy:'policy'
    }),
  //   candidatein () {
  //     return this.candidate.overview=this.items[0].overview
  //   },
  //  attendancerep () {
  //     return this.employee.overview
  //   },
},


// async beforeMount(){  
// await this.$store.dispatch('role');
// await this.$store.dispatch('permission');
// }

   }

</script>

<style>
.shadow{
 box-shadow: 1px 3px 4px teal
}
.shadow1{
 box-shadow: 1px 3px 4px orange
}
.shadow2{
 box-shadow: 1px 3px 4px purple
}
.shadow3{
 box-shadow: 1px 3px 4px green
}
.shadow4{
 box-shadow: 1px 3px 4px #757575
}
.shadow5{
 box-shadow: 1px 3px 4px #F44336
}
.shadow6{
 box-shadow: 1px 3px 4px #FFEB3B
}
.shadow7{
 box-shadow: 1px 3px 4px #E91E63
}
.shadow8{
 box-shadow: 1px 3px 4px #795548
}
.shadow9{
 box-shadow: 1px 3px 4px #3F51B5
}
.shadow10{
 box-shadow: 1px 3px 4px #00BCD4
}
.shadow11{
 box-shadow: 1px 3px 4px #CDDC39
}
</style>
