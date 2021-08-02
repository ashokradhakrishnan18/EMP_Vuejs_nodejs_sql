<template>
        <v-col md="12 ">
    <v-expansion-panels >
      <v-expansion-panel>
             <v-expansion-panel-header>  
          <div>
             <h3 >10Th</h3>
          <v-divider class="grey lighten-1 mt-1"  ></v-divider>
         </div>
<template v-slot:actions>
              <v-icon color="blue">
                $expand
              </v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content   >   
             <v-row >
       <v-col md="12 ">    
       </v-col>
         </v-row> 
        <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Education</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
        v-model="education10"
            label="Enter the  Institution"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">From</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
               <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                        v-model="from1"
              label="From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
                        v-model="from1"
            type="month"
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
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">To</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
  <v-menu
          ref="menu2"
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="to1"
              label="To"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="to1"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu2 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu2.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Name of the Instutution</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname1"
            label="Enter the Location"
          ></v-text-field>
        </v-col>
         </v-row>   
  <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course/Board</h4>
        </v-col>
  <v-col cols="12" md="10 py-0">
     <v-text-field class="font-weight-regular"
                v-model="course1"
            label="Enter Course/Board"
          ></v-text-field>
        </v-col>


         </v-row>   
  
        </v-expansion-panel-content>
      </v-expansion-panel>
  
    </v-expansion-panels>
     <v-expansion-panels >
      <v-expansion-panel>
             <v-expansion-panel-header>  

   <div>
             <h3 >12Th/Diploma</h3>
          <v-divider class="grey lighten-1 mt-1"  ></v-divider>
   </div>
<template v-slot:actions>
              <v-icon color="blue">
                $expand
              </v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content   >
       
             <v-row >
       <v-col md="12 ">
          
       </v-col>
         </v-row> 
        <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Education</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
        v-model="education12"
            label="Enter the  Institution"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
 
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">From</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
               <v-menu
          ref="menu3"
          v-model="menu3"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                        v-model="from2"
         
              label="From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
                        v-model="from2"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu3 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu3.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">To</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
  <v-menu
          ref="menu4"
          v-model="menu4"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="to2"
              label="To"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="to2"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu4 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu4.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Name of the Instutution</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname2"
            label="Enter the Location"
          ></v-text-field>
        </v-col>
         </v-row>   
  <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course/Board</h4>
        </v-col>
  <v-col cols="12" md="10 py-0">
     <v-text-field class="font-weight-regular"
                v-model="course2"
            label="Enter Course/Board"
          ></v-text-field>
        </v-col>
         </v-row>   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels >
      <v-expansion-panel>
             <v-expansion-panel-header>  

   <div>
          <h3 >UG</h3>
          <v-divider class="grey lighten-1 mt-1"  ></v-divider>
   </div>
<template v-slot:actions>
              <v-icon color="blue">
                $expand
              </v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content   >
       
             <v-row >
       <v-col md="12 ">
          
       </v-col>
         </v-row> 
        <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Education</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
        v-model="educationug"
            label="Enter the  Institution"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
 
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">From</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
               <v-menu
          ref="menu5"
          v-model="menu5"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                        v-model="from3"
         
              label="From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
                        v-model="from3"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu5 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu5.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">To</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
  <v-menu
          ref="menu6"
          v-model="menu6"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="to3"
              label="To"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="to3"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu6 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu6.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Name of the Instutution</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname3"
            label="Enter the Location"
          ></v-text-field>
        </v-col>
         </v-row>   
  <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course/Board</h4>
        </v-col>
  <v-col cols="12" md="10 py-0">
     <v-text-field class="font-weight-regular"
                v-model="course3"
            label="Enter Course/Board"
          ></v-text-field>
        </v-col>
         </v-row>   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
 <v-expansion-panels >
      <v-expansion-panel>
             <v-expansion-panel-header>  

   <div>
          <h3 >PG</h3>
          <v-divider class="grey lighten-1 mt-1"  ></v-divider>
   </div>
<template v-slot:actions>
              <v-icon color="blue">
                $expand
              </v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content   >
       
             <v-row >
       <v-col md="12 ">
          
       </v-col>
         </v-row> 
        <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Education</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
        v-model="educationpg"
            label="Enter the  Institution"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
 
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">From</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
               <v-menu
          ref="menu7"
          v-model="menu7"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                        v-model="from4"
         
              label="From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
                        v-model="from4"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu7 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu7.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">To</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
  <v-menu
          ref="menu8"
          v-model="menu8"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="to4"
              label="To"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="to4"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu8 = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu8.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Name of the Instutution</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname4"
            label="Enter the Location"
          ></v-text-field>
        </v-col>
         </v-row>   
  <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course/Board</h4>
        </v-col>
  <v-col cols="12" md="10 py-0">
     <v-text-field class="font-weight-regular"
                v-model="course4"
            label="Enter Course/Board"
          ></v-text-field>
        </v-col>
         </v-row>   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </v-col>
</template>

<script>
export default {
      name:'AppliscantEdu',
 store,
  data(){
        return{
education10:'',
menu1:false,
from1:'',
menu2:false,
to1:'',
institutionname1:'',
course1:'',

education12:'',
menu3:false,
from2:'',
menu4:false,
to2:'',
institutionname2:'',
course2:'',

educationug:'',
menu5:false,
from3:'',
menu6:false,
to3:'',
institutionname3:'',
course3:'',

educationpg:'',
menu7:false,
from4:'',
menu8:false,
to4:'',
institutionname4:'',
course4:'',
        }
  },

}
</script>