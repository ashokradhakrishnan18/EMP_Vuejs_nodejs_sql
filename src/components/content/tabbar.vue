<template>
 <v-card dark
        class="mb-n9 mx-5 tab_card rounded-lg" style="z-index:1"
        elevation="8"
        max-width="100%" 
      >  
 <v-tabs 
        background-color="tab_card"
        color="white" height="60" >
        <v-tab class="tab_hower" v-for="item in tabbar" :key="item.title" :to="item.link" link  >{{ item.title }}</v-tab>
       
      </v-tabs>   
       </v-card>  

</template>
<script>
export default {
       name: 'tabbar',
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
