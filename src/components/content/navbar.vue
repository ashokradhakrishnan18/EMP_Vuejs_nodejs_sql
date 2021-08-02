<template>
 <v-navigation-drawer app v-model="drawer" color="blue-grey darken-4"  dark expand-on-hover class="navigation_drawer" elavation="20">
         <v-list dark >
            <v-list-item class="px-2 mt-3"  >
       <!-- <v-toolbar-title class="header_title ml-5">
               {{ title }}
            </v-toolbar-title> -->

            </v-list-item>
          </v-list>

        

            <!-- <v-list dense  elevation="3" >
          <template v-for="item in items">
   <v-list-group v-if="item.child"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
   
        >
          <template v-slot:activator>
     <v-list-item-icon >
                  <v-icon color="grey lighten-1">{{item.icon}}</v-icon>
                </v-list-item-icon>
         <v-list-item-content >
                 <v-list-item-title class="nav_bar"> {{item.title}}</v-list-item-title>
                </v-list-item-content>
          </template>
  
          <v-list-item  link 
             v-for="(child, i) in item.child"  :key="i" :to="child.link" >
  <v-list-item-icon >
                  <v-icon color="grey lighten-1">{{child.icon}}</v-icon>
                </v-list-item-icon>
             <v-list-item-content >
                 <v-list-item-title class="nav_bar"> {{child.title}}</v-list-item-title>
                </v-list-item-content>
          </v-list-item>
        </v-list-group>

           <v-list-item
              v-else
              :key="item.title" 
              :to="item.link"
              link 
              class="my-3 "
              >
                <v-list-item-icon >
                  <v-icon color="grey lighten-1">{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content >
                 <v-list-item-title class="nav_bar"> {{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

          </template>
          </v-list> -->
      <v-list dense  elevation="3">
      <template v-for="item in items"> 
           <v-list-item
             :key="item.title" 
              v-if="item.overview==1"
              :to="item.link"
              link 
              class="my-3"
              >
                <v-list-item-icon >
                  <v-icon color="grey lighten-1">{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content >
                 <v-list-item-title class="nav_bar"> {{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </template>
          </v-list>


 </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'navbar',
   props: ['items'],      
    data() {
        return {
            drawer: true,
             sheet: false,
              menu: false,
              menuu:false,
              hover:'',      
        }
    },
created(){
    this.title=this.$route.name;
},
watch:{
  candidate () {
    this.get();
  },
// employee () {
//     this.get()
//   }
},
mounted(){
  this.get();
  
},
methods:{
get(){
   this.$props.items[1].overview=this.candidate.overview
   this.$props.items[2].overview=this.attendance.overview  
   this.$props.items[3].overview=this.training.overview
   this.$props.items[4].overview=this.emergency.overview  
   this.$props.items[5].overview=this.hr.overview
   this.$props.items[6].overview=this.leave.overview  
   this.$props.items[7].overview=this.asset.overview
   this.$props.items[8].overview=this.salary.overview  
   this.$props.items[9].overview=this.travel.overview
   this.$props.items[10].overview=this.finnacial.overview  
   this.$props.items[11].overview=this.employee.overview
   this.$props.items[12].overview=this.policy.overview  
 }
},
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
  }
}
</script>
<style>
/* .v-list-group--active,.v-list-item--active{
color: teal !important;
} */

</style>