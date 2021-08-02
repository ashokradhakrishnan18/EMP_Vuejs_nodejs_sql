         <template>
<div id="app">
<v-app id="inspire">
            <v-app-bar app absolute flat color="transparent" light class="change-font mt-2" >
           <div class="d-flex flex-column ">
            <v-toolbar-title class="header_title ml-5">
               {{ pagetitle }}
            </v-toolbar-title>
          </div>
             <v-spacer></v-spacer>
             <v-avatar>
                        <v-img src="@/assets/ThinkBiGicon.png" ></v-img>
             </v-avatar>  
            </v-app-bar>

      <v-main class="grey lighten-2" >
       <v-container class="my-0" >
<v-card class="pa-5 rounded-lg"  >
         <v-row >
       <v-col md="12 ">
          <h4 class="font-weight-black">Basic Info</h4 >
          <v-divider class="grey lighten-1" ></v-divider>
       </v-col>
         </v-row> 
        <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Position applied For</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="position" 
            label="Enter the Position"
          ></v-text-field>
        </v-col>

<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Date</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
    <v-menu
        v-model="todaymenu"
        :close-on-content-click="false"
        :nudge-right="40" disabled
        transition="scale-transition"
        offset-y 
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field class="font-weight-regular"
            v-model="todaydate"
            label="Date"
            prepend-inner-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="todaydate"   readonly
          @input="todaymenu = false"
        ></v-date-picker>
      </v-menu>
        </v-col>
         </v-row>   

  <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Name of the Applicant</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="name" 
            label="Enter the Name"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Contact  Number</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="contact" 
            label="Enter the Contact Number"
            type="number"
          ></v-text-field>
        </v-col>
         </v-row>  

<v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Email Id</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="email_id" 
            label="Enter the E-mail ID"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">D O B</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-menu
    ref="dobmenu" 
    v-model="dobmenu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field class="font-weight-regular"
        v-model="dobdate" 
        label="D O B"
        prepend-inner-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="dobdate"
      @change="save"
    >   <v-spacer></v-spacer>   <v-btn
              text
              color="primary"
              @click="$refs.dobmenu.save(dobdate)"
            >
              OK      </v-btn></v-date-picker>

  </v-menu> 

        </v-col>
         </v-row>   

<v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Age</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="age" 
            label="Enter the Age"
            type="number"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Gender</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-select class="font-weight-regular"
         v-model="gender" 
          :items="['Male', 'Female', 'Other']"
          :menu-props="{ top: true, offsetY: true }"
          label="Select Gender"
        ></v-select>
        </v-col>
         </v-row>   

<v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Marital Status</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
 <v-select class="font-weight-regular"
         v-model="marital" 
          :items="['Single', 'Married']"
          :menu-props="{ top: true, offsetY: true }"
          label="Select Marital Status"
        ></v-select>
  
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Address</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
       <v-text-field class="font-weight-regular"
            v-model="address"
            label="Enter the Address"
          ></v-text-field>
        </v-col>
         </v-row>   

  <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Referred by(if applicable)</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="refference" 
            label="Enter the Referrence"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Point of  Contact</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field  class="font-weight-regular"
            v-model="point_to_contact"  
            label="Enter the Contact Person"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Technology</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field  class="font-weight-regular"
            v-model="technology"  
            label="Enter your Technology"
          ></v-text-field>
        </v-col>
         </v-row>   

    <v-row class="mt-4">
       <v-col cols="12" md="12 ">
          <h4 class="font-weight-black">Educational Qualifications</h4>
          <v-divider class="grey lighten-1 " ></v-divider>
       </v-col>

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
     <v-text-field class="font-weight-regular" readonly
        v-model="education10"
            label="Enter the Education"
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
              @click="$refs.menu1.save(from1)"
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
            label="Enter the Instutution"
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
     <v-text-field class="font-weight-regular" readonly
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
     <v-text-field class="font-weight-regular" readonly
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
              @click="$refs.menu5.save(from3)"
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
     <v-text-field class="font-weight-regular" readonly
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

     </v-row>

<v-row>
       <v-col cols="12" md="12 ">
          <h4 class="font-weight-black">Employment History</h4>
          <v-divider class="grey lighten-1 " ></v-divider>
       </v-col>
      <v-col md="12 ">
    <v-expansion-panels  > 
        <v-expansion-panel >
          <v-expansion-panel-header >
   <div>
              <h3 >Current Employment</h3>
          <v-divider class="grey lighten-1 mt-1"  ></v-divider>
   </div>
<template v-slot:actions>
              <v-icon color="blue">
                $expand
              </v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content  >
          <v-row  >
           <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Employment Description</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="descriptioncurrent"
            label="Description"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Designation  </h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="designationcurrent"
            label="Designation"
          ></v-text-field>
        </v-col>
          </v-row>

                    <v-row  >
           <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Date of Employment From</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">

     <v-menu
          ref="currentmenu"
          v-model="currentmenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="currentdate"
              label="Date of Employment From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="currentdate"
             type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="currentmenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.currentmenu.save(currentdate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>


        </v-col>
      
       
           <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Last Drawn CTC</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="lastdrwancurrent"
            label="Last Drawn CTC"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4"> Reason For Leaving</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="reasoncurrent"
            label="Reason For Leaving"
          ></v-text-field>
        </v-col>
          </v-row>

       
  
        </v-expansion-panel-content>
      </v-expansion-panel>
  
    </v-expansion-panels>

    
    <v-expansion-panels  > 
        <v-expansion-panel >
          <v-expansion-panel-header >
   <div>
              <h3 >Previous Employment</h3>
          <v-divider class="grey lighten-1 mt-1"  ></v-divider>
   </div>
<template v-slot:actions>
              <v-icon color="blue">
                $expand
              </v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content  >
          <v-row  >
           <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Employment Description</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="descriptionprevious"
            label="Description"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Designation  </h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="designationprevious"
            label="Designation"
          ></v-text-field>
        </v-col>
          </v-row>

                    <v-row  >
           <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Date of Employment From</h4>

        </v-col>

  <v-col cols="12" md="4 py-0">

     <v-menu
          ref="previousmenu"
          v-model="previousmenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="previousdatefrom"
              label="Date of Employment From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="previousdatefrom"
             type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="previousmenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.previousmenu.save(previousdatefrom)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>


        </v-col>
            <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Date of Employment To</h4>

        </v-col>

  <v-col cols="12" md="4 py-0">

     <v-menu
          ref="previousmenuto"
          v-model="previousmenuto"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="previousdateto"
              label="Date of Employment From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="previousdateto"
              type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="previousmenuto = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.previousmenuto.save(previousdateto)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>


        </v-col>
       
           <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Last Drawn CTC</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="lastdrwanprevious"
            label="Last Drawn CTC"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4"> Reason For Leaving</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="reasonprevious"
            label="Reason For Leaving"
          ></v-text-field>
        </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
  
    </v-expansion-panels>

       </v-col>

<v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Expected CTC</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field 
            v-model="expctc" 
            label="Enter the Expected CTC."
          ></v-text-field>
        </v-col>


  <v-col cols="12" md="3 mt-3" >
    <h4 class="applicant_h4">If Selected within how many days can join</h4>
        </v-col>
  <v-col cols="12" md="2 py-0">
     <v-text-field 
            v-model="swhmd" 
             type="number"
            label="Enter the Days."
          ></v-text-field>
        </v-col>
</v-row>
 
<v-row>
       <v-col cols="12" md="12 ">
          <h4 class="font-weight-black">Gaps During Education/Employment</h4>
          <v-divider class="grey lighten-1 " ></v-divider>
       </v-col>
      <v-col md="12">
      <v-expansion-panels >
      <v-expansion-panel>
             <v-expansion-panel-header>  
   <div>
             <h3 >Gap Period 1</h3>
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
    <h4 class="applicant_h4">From</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
               <v-menu
          ref="gap1frommenu"
          v-model="gap1frommenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                        v-model="gap1fromdate"
         
              label="From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
                        v-model="gap1fromdate"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="gap1frommenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.gap1frommenu.save(gap1fromdate)"
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
          ref="gap1tomenu"
          v-model="gap1tomenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="gap1todate"
              label="To"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="gap1todate"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="gap1tomenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.gap1tomenu.save(datgap1todate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Reason For Gap</h4>
        </v-col>
  <v-col cols="12" md="10 py-0">
     <v-text-field class="font-weight-regular"
            v-model="gap1reason"
            label="Enter the Reason"
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
             <h3 >Gap Period 2</h3>
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
    <h4 class="applicant_h4">From</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
               <v-menu
          ref="gap2frommenu"
          v-model="gap2frommenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                        v-model="gap2fromdate"
              label="From"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
                        v-model="gap2fromdate"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="gap2frommenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.gap2frommenu.save(gap2fromdate)"
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
          ref="gap2tomenu"
          v-model="gap2tomenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="gap2todate"
              label="To"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="gap2todate"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="gap2tomenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.gap2tomenu.save(gap2todate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Reason For Gap</h4>
        </v-col>
  <v-col cols="12" md="10 py-0">
     <v-text-field class="font-weight-regular"
            v-model="gap2reason"
            label="Enter the Reason"
          ></v-text-field>
        </v-col>
         </v-row>   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
         </v-col>
</v-row>
 <v-row >
       <v-col cols="12" md="12">
          <h4 class="font-weight-black">Language Proficiency</h4>
        <v-spacer></v-spacer>
        
          <v-divider class="grey lighten-1 " ></v-divider>
       </v-col>
    
      <v-col cols="12" md="3 ">     

          <v-autocomplete
            v-model="language1"
            :items="items"
             background-color="white"
            filled
            label="Language"
          ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                     md="3"
                    >
    <h4 class="applicant_h4">Read</h4>

 <v-rating
        class="mt-3"
          v-model="read1"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>

                    </v-col>
                    <v-col
                     cols="12"
                     md="3"
                    >
                   <h4 class="applicant_h4">Write</h4>
  
 <v-rating
        class="mt-3"
           v-model="write1"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>
                    </v-col>
                    <v-col
                      cols="12"
                     md="3"
                    >
                   <h4 class="applicant_h4">Speak</h4>
 <v-rating
        class="mt-3"
        v-model="speak1"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>
                    </v-col>

<v-col cols="12" md="3 ">     

          <v-autocomplete
            v-model="language2"
            :items="items"
             background-color="white"
            filled
            label="Language"
          ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                     md="3"
                    >
    <h4 class="applicant_h4">Read</h4>

 <v-rating
        class="mt-3"
          v-model="read2"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>

                    </v-col>
                    <v-col
                     cols="12"
                     md="3"
                    >
                   <h4 class="applicant_h4">Write</h4>
  
 <v-rating
        class="mt-3"
           v-model="write2"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>
                    </v-col>
                    <v-col
                      cols="12"
                     md="3"
                    >
                   <h4 class="applicant_h4">Speak</h4>
 <v-rating
        class="mt-3"
        v-model="speak2"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>
                    </v-col>
<v-col cols="12" md="3 ">     

          <v-autocomplete
            v-model="language3"
            :items="items"
             background-color="white"
            filled
            label="Language"
          ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                     md="3"
                    >
    <h4 class="applicant_h4">Read</h4>

 <v-rating
        class="mt-3"
          v-model="read3"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>

                    </v-col>
                    <v-col
                     cols="12"
                     md="3"
                    >
                   <h4 class="applicant_h4">Write</h4>
  
 <v-rating
        class="mt-3"
           v-model="write3"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>
                    </v-col>
                    <v-col
                      cols="12"
                     md="3"
                    >
                   <h4 class="applicant_h4">Speak</h4>
 <v-rating
        class="mt-3"
        v-model="speak3"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>
                    </v-col>
                  </v-row>
<v-row>
<v-col cols="12" md="3" lg="3">
  <h4 class="applicant_h4">Strength and Wekness</h4>
     <v-text-field class="font-weight-regular"
            v-model="strengthandweak"
            label="Enter the Strength and Wekness."
          ></v-text-field>
</v-col>
<v-col cols="12" md="3" lg="3">
  <h4 class="applicant_h4">Hobbies</h4>
     <v-text-field class="font-weight-regular"
            v-model="hobbies" 
            label="Enter your Hobbies."
          ></v-text-field>
</v-col>
<v-col cols="8" sm="6" md="3" lg="3">
  <h4 class="applicant_h4">Resume(Only .pdf and File Size lesser than 5mb)</h4>

        <input type="file" ref="file" @change="handleFileUpload" />



</v-col>

    <v-col cols="12"  sm="6" md="3" lg="3">

 <VueSignaturePad  id="signature" width="100%" height="70%"  ref="signaturePad" :options="options"/>
<div class="text-center mt-2">
      <button   @click="undo">Undo</button>
</div>
  <h4 class="applicant_h4 text-center mt-2">Candidate Signature</h4>

</v-col>

<v-col cols="12" class="d-flex justify-end">
<v-btn 
        tile color="teal"
        dark v-on:click="submit"
         >
      Submit
    </v-btn>
</v-col>

</v-row>
</v-card>
</v-container>
</v-main> 
 </v-app>
</div>

</template>
<style>
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th
{
color: #757575;
font-size: 16px;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td{
   font-family: Verdana, Geneva, sans-serif;
   letter-spacing: 0.05rem;
   font-size: 16px;
   font-weight: 510;
}
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
<script>
// import applicanteducation from './Applicant_content/Applicant_Edu';
// import gap from './Applicant_content/Applicant_Gap';
// import Applicant from './Applicant_content/Applicant_Language';
// import Applicantemp from './Applicant_content/Applicant_Emp';
import api from '../API/User'

  export default {

     name: 'Applicant Information',
     components:{
  //  applicanteducation,
      // gap,
    // Applicant,
      // Applicantemp 
     },
    data: () => ({

   check:'',
 items: ['Assamese',' Bengali', 'Bodo', 'Dogri', 'English', 'Gujarati','Hindi', 'Kannada',
      'Kashmiri', 'Konkani', 'Maithili', 'Malayalam', 'Marathi', 
    ' Meitei (Manipuri)', 'Nepali', 'Odia', 'Punjabi', 'Sanskrit', 'Santali', 'Sindhi', 'Tamil','Telugu' , 'Urdu'],
 file: '',
 filename:'',
 options: {
      backgroundColor : "rgb(255, 255, 255)",
      penColor: "black"
      },
position:'',
todaymenu:false,
dobmenu:false,
    todaydate: new Date().toISOString().substr(0, 10),
name:'',
contact:'',
email_id:'',
dobdate:'',
age:'',
gender:'',
marital:'',
address:'',
refference:'',
point_to_contact:'',
technology:'',
education10:'10Th',
menu1:false,
from1:'',
menu2:false,
to1:'',
institutionname1:'',
course1:'',

education12:'12Th',
menu3:false,
from2:'',
menu4:false,
to2:'',
institutionname2:'',
course2:'',

educationug:'UG',
menu5:false,
from3:'',
menu6:false,
to3:'',
institutionname3:'',
course3:'',

educationpg:'PG',
menu7:false,
from4:'',
menu8:false,
to4:'',
institutionname4:'',
course4:'',

descriptioncurrent:'',

hobbies:'',
strengthandweak:'',
gap1frommenu:false,
gap1fromdate:'',
gap1todate:'',
gap1reason:'',
gap2fromdate:'',
gap2todate:'',
gap2reason:'',
   language1:'',
   read1:'',
   write1:'',
   speak1:'',
   language2:'',
   read2:'',
   write2:'',
   speak2:'',
   language3:'',
   read3:'',
   write3:'',
   speak3:'',
    }),

 created () {
     this.pagetitle=this.$route.name;
  },    
                                                                          
    methods: {
submit(){
           const datas = this.$refs.signaturePad.saveSignature().data;
           var data={
           position : this.position,
           date : this.todaydate,
           name:this.name,
           contact:this.contact,
           email_id:this.email_id,
           dob : this.dobdate,
           age : this.age,
           gender : this.gender,
           marital : this.marital,
           address : this.address,
           ref : this.refference,
           point_to_contact : this.point_to_contact,
           technology:this.technology,

           education1 : this.education10,
           from1 : this.from1,
           to1 : this.to1,
           nameofinstitution1 : this.institutionname1,
           course1 : this.course1,
           university1 : this.university1,
           universitylocation1 : this.universitylocation1,
           yearofpassing1 : this.yearofpassing1,
           mark1 : this.mark1,

           education2 : this.education12,
           from2 :  this.from2,
           to2 :  this.to2,
           nameofinstitution2 : this.institutionname2,
           course2 : this.course2,
           university2 : this.university2,
           universitylocation2 : this.universitylocation2,
           yearofpassing2 : this.yearofpassing2,
           mark2 : this.mark2,

           education3 :this.educationug,
           from3 : this.from3,
           to3 : this.to3,
           nameofinstitution3 : this.institutionname3,
           course3 : this.course3,
           university3 : this.university3,
           universitylocation3 : this.universitylocation3,
           yearofpassing3 : this.yearofpassing3,
           mark3 : this.mark3,

           employment1 : this.descriptioncurrent,
           empfrom1 : this.currentdate  ,
           designation1 : this.designationcurrent ,
           lastctc1 : this.lastdrwancurrent,
           reason1 :this.reasoncurrent,
           hrname1 : this.hrname1,
           hrdesignation1 : this.hrdesignation1,
           landline1 : this.landline1,
           hremail1 : this.hremail1,

             employment2 : this.descriptionprevious  ,
           empfrom2 : this.previousdatefrom ,
           empto2 : this.previousdateto  ,
           designation2 : this.designationprevious ,
           lastctc2 : this.lastdrwanprevious ,
           reason2 : this.reasonprevious ,
           hrname2 : this.hrname2,
           hrdesignation2 : this.hrdesignation2,
           landline2 : this.landline2,
           hremail2 : this.hremail2,
           expctc : this.expctc,
           swhmd : this.swhmd,

           gap1 : "Gap Period 1",
           gapfrom1 : this.gap1fromdate,
           gapto1 : this.gap1todate,
           reasongap1 : this.gap1reason,
           gap2 : "Gap Period 2",
           gapfrom2 : this.gap2fromdate,
           gapto2 : this.gap2todate,
           reasongap2 : this.gap2reason,

           lag1 : this.language1,
           read1 : this.read1,
           write1 : this.write1,
           speak1 : this.speak1,
           lag2 : this.language2,
           read2 : this.read2,
           write2 : this.write2,
           speak2 : this.speak2,
           lag3 : this.language3,
           read3 : this.read3,
           write3 : this.write3,
           speak3 : this.speak3,

           strengthandweak : this.strengthandweak,
           hobbies : this.hobbies,
           resume : this.filename,
           signature : datas,
           fathername : this.fathername,
           mothername : this.mothername,
           siblingname : this.siblingname,
           bankname : this.bankname,
           accholdername : this.accholdername,
           accnumber : this.accnumber,
           ifsccode : this.ifsccode,
           pfnumber : this.pfnumber,
              };
         console.log( this.$store.getters.getting)
         api.postcandidate(data)
        .then((resp) => {
          this.submitFile();
         console.log(resp.data)
       alert(resp.data)
        })
        .catch(() => {
         console.log("err")
        });
          },
submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
      api.fileupload(formData)
    .then((resp) => {
          this.filename=resp.data.file;
         console.log(resp.data.file)
        })
        .catch(() => {
           console.log("err")
        });
},
  undo() {
      this.$refs.signaturePad.undoSignature();
    },
handleFileUpload(){
    this.file = this.$refs.file.files[0];
  },
    increaseCounter(increaseLimit) { // Increase
      if (this.counter < increaseLimit) this.counter++;
    },

       },
       computed: {
 output() { // Output for computed property!
      return this.counter;
    }

      },
  
  }

</script>
     