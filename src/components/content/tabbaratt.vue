<template>
 <v-card dark
        class="mb-n9 mx-5  rounded-lg" style="z-index:1"
        elevation="6"
        max-width="100%" 
      >  
 <v-tabs 
        background-color="orange darken-3"
        color="white" height="60" >
        <v-tab  v-for="item in tabbar" :key="item.title" :to="item.link" link  >{{ item.title }}</v-tab>
       
      </v-tabs>   
       </v-card>  

</template>
<script>
export default {
       name: 'tabbaratt',
    data() {
        return {
            tabbar:[
                
                { title: 'Swipe Card Attendance', link:'/attendance' },
                { title: 'Project Attendance' ,link:'/project' },    
            ],
            
        }
    },
}
</script>
