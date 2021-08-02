<template>
    <v-row >
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
            :rules="escriptionrules"
            label="Description"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Designation  </h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="designationcurrent"
            :rules="designationrules"
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
            :rules="lastdrawnrules"
            label="Last Drawn CTC"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4"> Reason For Leaving</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="reasoncurrent"
            :rules="reasonrules"
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
            :rules="escriptionrules"
            label="Description"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4">Designation  </h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="designationprevious"
            :rules="designationrules"
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
            :rules="lastdrawnrules"
            label="Last Drawn CTC"
          ></v-text-field>
        </v-col>
            <v-col cols="12" md="2 mt-3">
    <h4 class="applicant_h4"> Reason For Leaving</h4>
        </v-col>
  <v-col cols="12" md="4 py-0">
      <v-text-field class="font-weight-regular"
            v-model="reasonprevious"
            :rules="reasonrules"
            label="Reason For Leaving"
          ></v-text-field>
        </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
  
    </v-expansion-panels>

       </v-col>

     </v-row>
</template>
<style>

</style>
<script>
export default {
   name:'ApplicantEmp',
  data(){
        return{
descriptioncurrent:'',
designationcurrent:'',
currentmenu:false,
currentdate:'',
lastdrwancurrent:'',
previousmenu:false,
previousdate:''
        }
      },
  }
</script>