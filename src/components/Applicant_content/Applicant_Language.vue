<template>
  <v-row >
       <v-col cols="11" md="11">
          <h4 class="font-weight-black">Language Proficiency</h4>
        <v-spacer></v-spacer>
        
          <v-divider class="grey lighten-1 " ></v-divider>
       </v-col>
       <v-col cols="11" md="11">
           <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary" @click="increaseCounter(2)"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
              </v-col>
     <template v-if="counter==0">
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
</template>
<template v-if="counter==1">
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


</template>
<template v-if="counter==2">
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
</template>

                  </v-row>
</template>
<style>

</style>
<script>
export default {
    name:'Applicant Language',
    store,
    components:{
    },
    data: () => ({
   counter:0,
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
 items: ['Assamese',' Bengali', 'Bodo', 'Dogri', 'English', 'Gujarati','Hindi', 'Kannada',
      'Kashmiri', 'Konkani', 'Maithili', 'Malayalam', 'Marathi', 
    ' Meitei (Manipuri)', 'Nepali', 'Odia', 'Punjabi', 'Sanskrit', 'Santali', 'Sindhi', 'Tamil','Telugu' , 'Urdu'],
    

  }),
methods:{
      increaseCounter(increaseLimit) { // Increase
      if (this.counter < increaseLimit) this.counter++;
    },
 },
computed:{
 output() { // Output for computed property!
      return this.counter;
    }
}
}

</script>