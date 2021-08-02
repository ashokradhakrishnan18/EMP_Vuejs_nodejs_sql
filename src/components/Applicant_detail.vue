<template>
<div id="app">
<v-app id="inspire">
    
     <appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" v-bind:items="breadcombs"></appbar>
<navbar ref="drawer" :items="items"></navbar>

      <v-main class="grey lighten-2 ">
       <v-container class="my-0" >
<v-card class="pa-5 rounded-lg" :disabled="disabled">
         <v-row >
       <v-col md="12 ">
          <h4 class="font-weight-black">Basic Info</h4>
          <v-divider class="grey lighten-1 " ></v-divider>
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
    <h4 class="applicant_h4">Registerd Date</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        disabled
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field class="font-weight-regular"
            v-model="todaydate"
            readonly
            label="Date"
            prepend-inner-icon="mdi-calendar"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          readonly
          v-model="todaydate"
          @input="menu = false"
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
            :rules="namerules"
            label="Enter the Name"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Contact  Number</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="contact"
            :rules="contactrules"
            label="Enter the Contact Number"
            type="number"
            counter="10"
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
            :rules="emailrules"
            label="Enter the E-mail ID"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">D O B</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-menu
    ref="menu"
    v-model="menu"
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
        :rules="dobrules"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="dobdate"
      @change="save"
    ></v-date-picker>
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
            :rules="agerules"
            label="Enter the Age"
            type="number"
            counter="2"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Gender</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-select class="font-weight-regular"
         v-model="gender"
          :items="['Male', 'Female', 'Other']"
    :rules="genderrules"
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
    :rules="maritalrules"
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
            :rules="addressrules"
            label="Enter the Address"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Aadhar Number</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="aadhar"
            :rules="aadharrules"
            label="Enter the Aadhar Number"
          ></v-text-field>
        </v-col>

 
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Referred by(if applicable)</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="ref" 
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
          <h3 >Educational Qualifications</h3>
          <v-divider class="grey lighten-1 " ></v-divider>
       </v-col>
    <v-col md="12 ">
    <v-expansion-panels v-model="tenthpanel">
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
    <h4 class="applicant_h4">Name of the Institution</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname1"
            :rules="rules"
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
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="course1"
            :rules="rules"
            label="Enter the Course"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="university1"
            :rules="rules"
            label="Enter the Uviversity"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University Location</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="universitylocation1"
            :rules="rules"
            label="Enter the Location"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Year of Passing</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="passing1"
            :rules="rules"
            label="Enter Year of Passing "
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">% of marks obtained</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="mark1"
            :rules="contactrules"
            label="Enter % of marks"
            type="number"
            counter="10"
          ></v-text-field>
        </v-col>
         </v-row>   
  
        </v-expansion-panel-content>
      </v-expansion-panel>
  
    </v-expansion-panels>
     <v-expansion-panels v-model="twelthpanel">
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
    <h4 class="applicant_h4">Name of the Institution</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname2"
            :rules="rules"
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
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="course2"
            :rules="rules"
            label="Enter the Course"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="university2"
            :rules="rules"
            label="Enter the Uviversity"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University Location</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="universitylocation2"
            :rules="rules"
            label="Enter the Location"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Year of Passing</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="passing2"
            :rules="rules"
            label="Enter Year of Passing "
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">% of marks obtained</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="mark2"
            :rules="contactrules"
            label="Enter % of marks"
            type="number"
            counter="10"
          ></v-text-field>
        </v-col>
         </v-row>   
   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels v-model="ugpanel">
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
             <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Name of the Institution</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname3"
            :rules="rules"
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
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="course3"
            :rules="rules"
            label="Enter the Course"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="university3"
            :rules="rules"
            label="Enter the Uviversity"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University Location</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="universitylocation3"
            :rules="rules"
            label="Enter the Location"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Year of Passing</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="passing3"
            :rules="rules"
            label="Enter Year of Passing "
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">% of marks obtained</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="mark3"
            :rules="contactrules"
            label="Enter % of marks"
            type="number"
            counter="10"
          ></v-text-field>
        </v-col>
         </v-row>   
    
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
 <v-expansion-panels v-model="pgpanel">
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
            <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Name of the Institution</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="institutionname4"
            :rules="rules"
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

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Course</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="course4"
            :rules="rules"
            label="Enter the Course"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="university4"
            :rules="rules"
            label="Enter the Uviversity"
          ></v-text-field>
        </v-col>
<v-divider></v-divider>
   <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">University Location</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="universitylocation4"
            :rules="rules"
            label="Enter the Location"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Year of Passing</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="passing4"
            :rules="rules"
            label="Enter Year of Passing "
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">% of marks obtained</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="mark4"
            :rules="contactrules"
            label="Enter % of marks"
            type="number"
            counter="10"
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
    <v-expansion-panels  v-model="currentpanel"> 
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
  <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> HR Name</h4>


        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="hrnamecurrent"
            :rules="namerules"
            label="HR Name"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4"> HR Designation</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="hrdesignationcurrent"
            :rules="hrdesignationrules"
            label="HR Designation"
          ></v-text-field>
        </v-col>
      <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Office Landline Ph No.</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="phonenocurrent"
            :rules="phonenorules"
            label="Office"
          ></v-text-field>
        </v-col>
       <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">HR Email </h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="hrmailcurrent"
            :rules="designationrules"
            label="Enter The Email"
          ></v-text-field>
        </v-col>
          </v-row>

       
  
        </v-expansion-panel-content>
      </v-expansion-panel>
  
    </v-expansion-panels>

    
    <v-expansion-panels v-model="previouspanel" > 
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
  <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> HR Name</h4>


        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="hrnameprevious"
            :rules="namerules"
            label="HR Name"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4"> HR Designation</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="hrdesignationprevious"
            :rules="hrdesignationrules"
            label="HR Designation"
          ></v-text-field>
        </v-col>
      <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4"> Office Landline Ph No.</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="phonenoprevious"
            :rules="phonenorules"
            label="Office"
          ></v-text-field>
        </v-col>
       <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">HR Email </h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="hrmailprevious"
            :rules="designationrules"
            label="Enter The Email"
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
      <v-expansion-panels v-model="gap1panel">
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
      <v-expansion-panels v-model="gap2panel">
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
            :items="language"
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
            :items="language"
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
            :items="language"
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
     

<v-row class="mt-3">
<v-col md="12 mt-3">
   <div>
             <h3 >Family Details</h3>
          <v-divider class="grey lighten-1 mt-1"  ></v-divider>
   </div>
</v-col>
<v-col cols="12" md="4">
   <v-text-field class="font-weight-regular"
            v-model="fathername"
            :rules="fatherrules"
            label="Enter the Father's Name"
          ></v-text-field>
</v-col>
<v-col cols="12" md="4">
   <v-text-field class="font-weight-regular"
            v-model="mothername"
            :rules="motherrules"
            label="Enter the Mothers's Name"
          ></v-text-field>
</v-col>
<v-col cols="12" md="4">
   <v-text-field class="font-weight-regular"
            v-model="siblingname"
            :rules="Siblingrules"
            label="Enter the Sibling (If any)"
          ></v-text-field>
</v-col>
</v-row>

<v-row class="mt-3">

       <v-col md="12">

          <h4 class="font-weight-black ">Bank Details</h4>

 <v-checkbox 
        v-model="checkbox1" disabled
        :label ="`Yes Iam Having Bank Account`"
      ></v-checkbox>
          <v-divider class="grey lighten-1 " ></v-divider>
       </v-col>
</v-row>
<section v-show="checkbox1==true">
        <v-row class="pa-4 py-0">
       <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Bank Name</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="bankname"
            label="Enter Bank Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Account Holder Name </h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="accholdername"
            label="Enter Account Holder Name"
          
          ></v-text-field>
        </v-col>
        </v-row>

          <v-row class="pa-4 py-0">
       <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">Bank Account No</h4>

        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="accnumber"
            label="Enter Bank Account No"
          ></v-text-field>
        </v-col>
<v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">IFSC Code</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="ifsccode"
            label="Enter IFSC Code"
            type="number"
            counter="10"
          ></v-text-field>
        </v-col>
          </v-row>

                 <v-row class="pa-4 py-0">
        <v-col cols="12" md="2 mt-3" >
    <h4 class="applicant_h4">PF Number</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
     <v-text-field class="font-weight-regular"
            v-model="pfname"
            :rules="pfrules"
            label="Enter PF Number"
          ></v-text-field>
        </v-col>
         </v-row> 
</section>
<v-row>
<v-col cols="12" md="6">
  <h4 class="applicant_h4">Strength and Wekness</h4>
     <v-text-field class="font-weight-regular"
            v-model="strengthandweak" 
            :rules="rules"
            label="Enter the Strength and Wekness."
          ></v-text-field>
</v-col>
<v-col cols="12" md="6">
  <h4 class="applicant_h4">Hobbies</h4>
     <v-text-field class="font-weight-regular"
            v-model="hobbies" 
            :rules="rules"
            label="Enter your Hobbies."
          ></v-text-field>
</v-col>


</v-row>

<div class="text-end mt-4">
 <v-btn width="120px" @click="submit"
        tile color="teal"
        dark
    >
      Submit
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
import api from '../API/User'

export default {
    name:"selected",
 components:{
       navbar,
        appbar
     },
 data: () => ({
 checkbox1:'',
candidate:'',
id:'',
position:'',
todaydate:'',
name:'',
contact:'',
email_id:'',
menu:false,
dobdate:'',
age:'',
gender:'',
marital:'',
address:'',
aadhar:'',
ref:'',
point_to_contact:'',
technology:'',

education1:'',
menu1:false,
from1:'',
menu2:false,
to1:'',
institutionname1:'',
course1:'',
university1:'',
universitylocation1:'',
passing1:'',
mark1:'',

education2:'',
menu3:false,
from2:'',
menu4:false,
to2:'',
institutionname2:'',
course2:'',
university2:'',
universitylocation2:'',
passing2:'',
mark2:'',

education3:'',
menu5:false,
from3:'',
menu6:false,
to3:'',
institutionname3:'',
course3:'',
university3:'',
universitylocation3:'',
passing3:'',
mark3:'',

education4:'',
menu7:false,
from4:'',
menu8:false,
to4:'',
institutionname4:'',
course4:'',
university4:'',
universitylocation4:'',
passing4:'',
mark4:'',

descriptioncurrent:'',
designationcurrent:'',
currentdate:'',
lastdrwancurrent:'',
reasoncurrent:'',
hrnamecurrent:'',
hrdesignationcurrent:'',
phonenocurrent:'',
hrmailcurrent:'',

descriptionprevious:'',
designationprevious:'',
previousdatefrom:'',
previousdateto:'',
lastdrwanprevious:'',
reasonprevious:'',
hrnameprevious:'',
hrdesignationprevious:'',
phonenoprevious:'',
hrmailprevious:'',

expctc:'',
swhmd:'',

gap1:'',
gap1fromdate:'',
gap1todate:'',
gap1reason:'',

gap2:'',
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

fathername:'',
mothername:'',
siblingname:'',
bankname:'',
accholdername:'',
accnumber:'',
ifsccode:'',
pfname:'',

strengthandweak:'',
hobbies:'',
resume:'',
signature:'',
  items: [
              { title: 'Home',icon: 'mdi-home',link:'/home',overview:1 },
              { title: 'Index',icon: 'mdi-account-box-outline',link:'/index',overview:1 },
            { title: 'Interviewer',icon: 'mdi-account-star',link:'/interviwer',overview:1 },
            { title: 'Selected',icon: 'mdi-account-plus',link:'/selected',overview:1 },
            { title: 'Non-Selected',icon: 'mdi-account-remove',link:'/nonselected',overview:1 }
              ],
language:['Assamese',' Bengali', 'Bodo', 'Dogri', 'English', 'Gujarati','Hindi', 'Kannada',
      'Kashmiri', 'Konkani', 'Maithili', 'Malayalam', 'Marathi', 
    ' Meitei (Manipuri)', 'Nepali', 'Odia', 'Punjabi', 'Sanskrit', 'Santali', 'Sindhi', 'Tamil','Telugu' , 'Urdu'],



  }),


computed: {
   
  },

  watch: {
    disabled (val) {
      val || this.disabled()
    },

  },

  created () {
     this.header=this.$route.name; 
  },

  methods: {
   view(){
    if(this.$route.meta.key=="view"){
    this.disabled=true
    this.tenthpanel=0
    this.twelthpanel=0
    this.ugpanel=0
    this.pgpanel=0
    this.currentpanel=0
    this.previouspanel=0
    this.gap1panel=0
    this.gap2panel=0
    this.checkbox1=true
   }else{
this.checkbox1=true
 this.disabled=false
    }
     },
indexview(){
 
  },
getcandidate(){
  let id=this.$route.params.id
      api.getcandidatedetail(id)
          .then((resp) => {
           this.id=resp.data[0].id
          this.position =resp.data[0].position
          this.todaydate=resp.data[0].date
          this.name=resp.data[0].name
          this.contact=resp.data[0].contact
          this.email_id=resp.data[0].email_id
          this.dobdate=resp.data[0].dob
          this.age=resp.data[0].age
          this.gender=resp.data[0].gender
          this.marital=resp.data[0].marital
          this.address=resp.data[0].address
          this.aadhar=resp.data[0].aadhar
          this.ref=resp.data[0].ref
          this.point_to_contact=resp.data[0].point_to_contact
          this.technology=resp.data[0].technology
 
       this.education1=resp.data[0].education1
           this.from1 =resp.data[0].from1
           this.to1=resp.data[0].to1
          this.institutionname1=resp.data[0].nameofinstitution1
          this.course1=resp.data[0].course1
          this.university1=resp.data[0].university1
           this.universitylocation1=resp.data[0].universitylocation1
           this.passing1=resp.data[0].yearofpassing1
           this.mark1=resp.data[0].mark1
    
      this.education2=resp.data[0].education2
           this.from2 =resp.data[0].from1
           this.to2=resp.data[0].to1
          this.institutionname2=resp.data[0].nameofinstitution2
          this.course2=resp.data[0].course2
           this.university2=resp.data[0].university2
           this.universitylocation2=resp.data[0].universitylocation2
           this.passing2=resp.data[0].yearofpassing2
           this.mark2=resp.data[0].mark2

     this.education3=resp.data[0].education3
           this.from3 =resp.data[0].from3
           this.to3=resp.data[0].to3
          this.institutionname3=resp.data[0].nameofinstitution3
          this.course3=resp.data[0].course3
          this.university3=resp.data[0].university3
           this.universitylocation3=resp.data[0].universitylocation3
           this.passing3=resp.data[0].yearofpassing3
           this.mark3=resp.data[0].mark3
   

    this.education4=resp.data[0].education4
           this.from4 =resp.data[0].from4
           this.to4=resp.data[0].to4
          this.institutionname4=resp.data[0].nameofinstitution4
          this.course4=resp.data[0].course4
          this.university4=resp.data[0].university4
           this.universitylocation4=resp.data[0].universitylocation4
           this.passing4=resp.data[0].yearofpassing4
           this.mark4=resp.data[0].mark4

          this.descriptioncurrent=resp.data[0].employment1
          this.designationcurrent=resp.data[0].designation1
          this.currentdate=resp.data[0].empfrom1
          this.lastdrwancurrent=resp.data[0].lastctc1
          this.reasoncurrent=resp.data[0].reason1
    this.hrnamecurrent=resp.data[0].hrname1
          this.hrdesignationcurrent=resp.data[0].hrdesignation1
          this.phonenocurrent=resp.data[0].landline1
          this.hrmailcurrent=resp.data[0].hremail1

   this.hrnameprevious=resp.data[0].hrname2
          this.hrdesignationprevious=resp.data[0].hrdesignation2
          this.phonenoprevious=resp.data[0].landline2
          this.hrmailprevious=resp.data[0].hremail2
          this.descriptionprevious=resp.data[0].employment2
          this.designationprevious=resp.data[0].designation2
          this.previousdatefrom=resp.data[0].empfrom2
          this.previousdateto=resp.data[0].empto2
          this.lastdrwanprevious=resp.data[0].lastctc2
          this.reasonprevious=resp.data[0].reason2

          this.expctc=resp.data[0].expctc
          this.swhmd=resp.data[0].swhmd 

  this.gap1=resp.data[0].gap1
          this.gap1fromdate=resp.data[0].gapfrom1
          this.gap1todate=resp.data[0].gapto1
          this.gap1reason=resp.data[0].reasongap1
          this.gap2=resp.data[0].gap2
          this.gap2fromdate=resp.data[0].gapfrom2
          this.gap2todate=resp.data[0].gapto2
          this.gap2reason=resp.data[0].reasongap2

          this.language1=resp.data[0].lag1
          this.read1=resp.data[0].read1
          this.write1=resp.data[0].write1
          this.speak1=resp.data[0].speak1
          this.language2=resp.data[0].lag2
          this.read2=resp.data[0].read2
          this.write2=resp.data[0].write2
          this.speak2=resp.data[0].speak2
          this.language3=resp.data[0].lag3
          this.read3=resp.data[0].read3
          this.write3=resp.data[0].write3
          this.speak3=resp.data[0].speak3

         this.fathername=resp.data[0].fathername
           this.mothername=resp.data[0].mothername
           this.siblingname=resp.data[0].siblingname   

   this.bankname=resp.data[0].bankname     
           this.accholdername=resp.data[0].accholdername     
           this.accnumber=resp.data[0].accnumber     
          this.ifsccode=resp.data[0].ifsccode     
           this.pfname=resp.data[0].pfnumber     


          this.strengthandweak=resp.data[0].strengthandweak
          this.hobbies=resp.data[0].hobbies
      this.resume=resp.data[0].resume
          this.signature=resp.data[0].signature
          })
        .catch(e => {
          console.log(e);
        });
},
submit(){
  var data={
             id:this.id,
        position:this.position,
date:this.todaydate,
name:this.name,
contact:this.contact,
email_id:this.email_id,
dob:this.dobdate,
age:this.age,
gender:this.gender,
marital:this.marital,
address:this.address,
aadhar:this.aadhar,
ref:this.ref,
point_to_contact:this.point_to_contact,
technology:this.technology,

education1:this.education1,
from1:this.from1,
to1:this.to1,
nameofinstitution1:this.institutionname1,
course1:this.course1,
university1:this.university1,
universitylocation1:this.universitylocation1,
yearofpassing1:this.passing1,
mark1:this.mark1,

education2:this.education2,
from2:this.from2,
to2:this.to2,
nameofinstitution2:this.institutionname2,
course2:this.course2,
university2:this.university2,
universitylocation2:this.universitylocation2,
yearofpassing2:this.passing2,
mark2:this.mark2,

education3:this.education3,
from3:this.from3,
to3:this.to3,
nameofinstitution3:this.institutionname3,
course3:this.course3,
university3:this.university3,
universitylocation3:this.universitylocation3,
yearofpassing3:this.passing3,
mark3:this.mark3,

education4:this.education4,
from4:this.from4,
to4:this.to4,
nameofinstitution4:this.institutionname4,
course4:this.course4,
university4:this.university4,
universitylocation4:this.universitylocation4,
passing4:this.passing4,
mark4:this.mark4,

employment1:this.descriptioncurrent,
designation1:this.designationcurrent,
empfrom1:this.currentdate,
lastctc1:this.lastdrwancurrent,
reason1:this.reasoncurrent,
hrname1:this.hrnamecurrent,
hrdesignation1:this.hrdesignationcurrent,
landline1:this.phonenocurrent,
hremail1:this.hrmailcurrent,

employment2:this.descriptionprevious,
designation2:this.designationprevious,
empfrom2:this.previousdatefrom,
empto2:this.previousdateto,
lastctc2:this.lastdrwanprevious,
reason2:this.reasonprevious,
hrname2:this.hrnameprevious,
hrdesignation2:this.hrdesignationprevious,
landline2:this.phonenoprevious,
hremail2:this.hrmailprevious,

expctc:this.expctc,
swhmd:this.swhmd,

gap1:this.gap1,
gapfrom1:this.gap1fromdate,
gapto1:this.gap1todate,
reasongap1:this.gap1reason,
gap2:this.gap2,
gapfrom2:this.gap2fromdate,
gapto2:this.gap2todate,
reasongap2:this.gap2reason,

lag1:this.language1,
read1:this.read1,
write1:this.write1,
speak1:this.speak1,
lag2:this.language2,
read2:this.read2,
write2:this.write2,
speak2:this.speak2,
lag3:this.language3,
read3:this.read3,
write3:this.write3,
speak3:this.speak3,

strengthandweak:this.strengthandweak,
hobbies:this.hobbies,
resume:this.resume,
signature:this.signature,

fathername:this.fathername,
mothername:this.mothername,
siblingname:this.siblingname,
bankname:this.bankname,
accholdername:this.accholdername,
accnumber:this.accnumber,
ifsccode:this.ifsccode,
pfnumber:this.pfname,

              };
  api.updatecandidate(data)
        .then((resp) => {
     alert(resp.data.message)
        })
        .catch(e => {
          console.log(e);
        });
 }
  },

  mounted(){
   this.view();
   this.getcandidate();
  }                                                                         


  
  }

</script>
<style>
  .v-expansion-panel::before {
   box-shadow: none !important;
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