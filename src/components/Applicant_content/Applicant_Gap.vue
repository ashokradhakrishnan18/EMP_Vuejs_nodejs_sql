<template>
     <v-row >
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
         
</template>
<style>

</style>
<script>

import { mapGetters } from 'vuex'
export default {
   name:'Applicant Gap',
 store,
 data: () => ({
gap2frommenu:false,
    date3:null,
    menu4:false,
    date4:null,
sheet:false,
dialog: false,
    dialogDelete: false,

     headers: [
      {
        text: 'Gap Periods',
        align: 'start',
        sortable: false,
        value: 'gap',
      },
      { text: 'From', value: 'from', sortable: false },
      { text: 'To', value: 'to' , sortable: false},
      { text: 'Reason for Gap', value: 'reasonforgap', sortable: false, },
    
      { text: 'Actions', value: 'actions', sortable: false },
    ],
   
 fromrules: [
          (v) => !!v || 'Name is required',
 ],
torules: [
          (v) => !!v || 'Name is required',
 ],
reasonrules: [
          (v) => !!v || 'Name is required',
 ],
 }),



  created () {
    this.title=this.$route.name;
  },

  methods: {
   deleteitem(item){
      this.desserts.splice(item,1);
       this.sheet=false
        },
      save () {
       let post={
           gap : this.gap,
           from : this.from,
           to:this.to,
           reasonforgap:this.reasonforgap
            }
        store.commit('addGap',post),
        this.dialog=false
      },
  },
  computed: {
       ...mapGetters({
      desserts:'gap'
       }),
 formTitle () {
      return 'Add Gap Period'
     },

  }
}
</script>