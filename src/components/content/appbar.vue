<template>
    <section>
        <v-app-bar app absolute flat color="transparent" light class="change-font mt-2" >
            
            <!-- <v-btn v-if="drawer" icon @click.stop="$emit('toggle-drawer')"  @click="drawer = !drawer" class="app_background ml-1">
    
                <v-icon >mdi-menu</v-icon>
    
            </v-btn> 
  <v-btn  v-else icon @click.stop="$emit('toggle-drawer')"  @click="drawer = !drawer" class="app_background ml-1">
    
                <v-icon >mdi-dots-vertical</v-icon>
    
            </v-btn>  -->
<v-btn  icon @click.stop="$emit('toggle-drawer')"  @click="drawer = !drawer" class="app_background ml-1 ">
    
                <v-icon >mdi-menu</v-icon>
    
            </v-btn> 
    <div class="d-flex flex-column ">

            <v-toolbar-title class="header_title ml-5">
               {{ title }}

            </v-toolbar-title>
<!-- <v-spacer></v-spacer> -->

    </div>
          <v-spacer></v-spacer>
             
    
    
    
                <v-btn icon class="breadcrumbs app_background mr-4" medium >
    
                    <v-icon>mdi-bell</v-icon>
    
                </v-btn>


           <v-menu
           v-model="menu"
           :close-on-content-click="false"
           :nudge-width="200"
           offset-x
           >
    
                 <template v-slot:activator="{ on, attrs }">
    
                    <v-avatar
                    v-bind="attrs"
                    v-on="on" >
    
    
    
                        <v-img src="@/assets/ThinkBiGicon.png" ></v-img>
 
                 
                    </v-avatar>          
        </template>
  
        <v-card>
          <v-list class="teal" dark elevation="12">
            <v-list-item>
              <v-list-item-avatar>
                <img src="@/assets/ak.jpg" alt="Thulasi">
              </v-list-item-avatar>  
              <v-list-item-content >
                <v-list-item-title class="header_title">{{user}}</v-list-item-title>
                <v-list-item-subtitle class="sub_title"><strong>{{role}}</strong> </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
  
          <v-divider></v-divider>
        <v-list class="grey lighten-3">
<div class="listitem" >
  <v-list-item v-for="item in profileitemsmob" :key="item.title" :to="item.link" link  @click="selectSection(item)">
               <v-list-item-icon>
    
                        <v-icon>{{ item.icon }}</v-icon>
    
                    </v-list-item-icon>
    
    
    
                    <v-list-item-content >
                       
                        <v-list-item-title >{{ item.title }}</v-list-item-title>
                      
                    </v-list-item-content>

                </v-list-item>
</div>
             <v-list-item v-for="item in profileitems" :key="item.title"  @click="selectSection(item)"  link >
               <v-list-item-icon>
    
                        <v-icon>{{ item.icon }}</v-icon>
    
                    </v-list-item-icon>
    
    
    
                    <v-list-item-content>
                       
                        <v-list-item-title class="app_bar">{{ item.title }}</v-list-item-title>
                     
                    </v-list-item-content>
    
                </v-list-item>

            </v-list>
         
  
         
        </v-card>
      </v-menu>
  
    
        </v-app-bar>
 
    </section>
  
</template>

<script>
import store from '../../store/store'
export default {
   name: 'appbar',
store,
  props:['items'],

    data() {
        return {
            drawer: true,
             sheet: false,
              menu: false,
  
          
  profileitemsmob:[
                { title: 'Notification', icon: 'mdi-bell' },   
            ],
            profileitems:[
                { title: 'Messages', icon: 'mdi-message-reply-text' },
                { title: 'Settings', icon: 'mdi-wrench' },
                { title: 'Feedback', icon: 'mdi-clipboard' },
                { title: 'Logout', icon: 'mdi-power-settings',link:'/' },
            ],
 
      //      items: [
      //   {
      //     text: 'Dashboard',
      //     disabled: false,
      //     href: 'breadcrumbs_dashboard',
      //   },
      //   {
      //     text: 'Link 1',
      //     disabled: false,
      //     href: 'breadcrumbs_link_1',
      //   },
      //   {
      //     text: 'Link 2',
      //     disabled: true,
      //     href: 'breadcrumbs_link_2',
      //   },
      // ],
            
        }
    },
created(){
    this.title=this.$route.name;
},
 computed: {
 user() {
    return this.$store.state.users.empid;
  },
 role() {
    return this.$store.state.role.position;
  }
  },
//  created() {
//     this.$store.dispatch('role'); 
// },
methods: {
selectSection(item) {
      switch (item.title) {
        case 'Messages':

          break
        case 'Settings':
         this.$router.push('/Settings')
          break
        case 'Feedback':

         break
         case 'Logout':
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })

      }
    }
},
}
</script>
<style>
.listitem{
display: none;
}

@media only screen 
  and (min-device-width: 360px) 
  and (max-device-width: 720px)
  and (orientation: portrait) {
.breadcrumbs{
display: none;
}
.listitem{
display:block;
}
}

</style>
