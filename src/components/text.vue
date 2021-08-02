<template>

    <v-card elevation="4">
      <v-tabs 
        background-color="white"
        color="teal accent-4 " >
        <v-tab class="tab_hower" v-for="item in tabbar" :key="item.title" :to="item.link" link  >{{ item.title }}</v-tab>
       
      </v-tabs>
    </v-card>
 
</template>
<script>
export default {
   
    data() {
        return {
            tabbar:[
                
                { title: 'Personal Information', link:'/personalinfo' },
                { title: 'Contact Information' ,link:'/contactinfo' },
                { title: 'Professional Infromation',link:'/professionalinfo'},
                { title: 'Bank Details',link:'/bankinfo' },
                
                
            ],
            
        }
    },
}
</script>
