<template>
    <div id="app">
    <v-app id="inspire">
    <appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" ref="name" v-bind:items="breadcombs"></appbar>
    <navbar ref="drawer" :items="items"></navbar>
    <v-main class="grey lighten-3">
     <timer></timer>
     <v-container class="my-0" >
      <v-card class="pa-5 rounded-lg">
        <v-card-title class="teal elevation-4 ml-2 mr-2" elevation-5 style="color:white">
      Overview
      <v-spacer></v-spacer>
    </v-card-title>
        <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
     >
      <!-- <template v-slot:[`item.action`]="{ item }">  

  <v-icon class="ma-1"
  v-model="item.action"
     v-bind="attrs"
     v-on="on"
      medium
      color="green darken-2"
   @click="view"
    >
     mdi-eye-outline
    </v-icon>

  <v-icon class="ma-1"
  v-model="item.action"
     v-bind="attrs"
     v-on="on"
        medium
      color="blue-grey darken-1"
    @click="edit"
    >
      mdi-pencil
    </v-icon>
  <v-icon class="ma-1"
  v-model="item.action"
     v-bind="attrs"
     v-on="on"
        medium
      color="red darken-2"
     @click="deleted(item)" 
    >
      mdi-delete-circle
    </v-icon>
<v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Are You Sure Want to Delete...
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </template> -->
<template v-slot:[`item.action`]="{ item }">
            <v-menu
              offset-y
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color='teal'
                  dark
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  Actions
                </v-btn>
              </template>
 
              <v-list  dense >
                <v-list-item
                  dense
                  class="list-item-small"
                 @click="view(item)"
                >
                  <v-list-item-content  >
                    <v-list-item-title  >
                      <v-icon small left color="teal" >mdi-eye</v-icon> View
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  dense
                  class="list-item-small"
                  @click="edit(item)"
                >
                  <v-list-item-content>
                    <v-list-item-title  >
                      <v-icon small left color="blue" >mdi-pencil-circle-outline</v-icon> Edit
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  dense
                  class="list-item-small"
                  @click.stop="usersheet = true"
                >

         <v-bottom-sheet inset      v-model="usersheet">
        <v-sheet
          class="text-center"
          elevation="5"
        >
        <v-card>
         <v-card-title class="justify-center">
                      Are You Sure? 
         </v-card-title>

        <v-card-text>
           
                <h3>Are You Sure you want to Delete <strong> Name : {{item.id}}...</strong></h3>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            
            text
             @click="usersheet = false"
          >
            cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
           @click="deleted(item)"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-sheet>
      </v-bottom-sheet>
                  <v-list-item-content>
                    <v-list-item-title >
                      <v-icon small left color="red" >mdi-delete-circle</v-icon> Delete
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
    </v-data-table>
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
    name:'Settings',
components:{
navbar,
appbar
},
data () {
      return {
     usersheet: false,
          items: [
            { title: 'Home',icon: 'mdi-home',link:'/home',overview:1 },
            { title: 'Index',icon: 'mdi-account-box-outline',link:'/index',overview:1 },
            { title: 'Interviewer',icon: 'mdi-account-star',link:'/interviwer',overview:1 },
            { title: 'Selected',icon: 'mdi-account-plus',link:'/selected',overview:1 },
              ],
         headers: [
          { text: 'ID', align: 'start',sortable: false,value: 'id' },
          { text: 'Date',value: 'date'},
          { text: 'Name', value: 'name' },
          { text: 'Email Id', value: 'email_id'},
          { text: 'Gender', value: 'gender'},
          { text: 'Contact No', value: 'contact'},
          { text: 'Actions', value: 'action',sortable: false }
        ],
       desserts : [],
// index: [ 
//         { title: 'View' },
//         { title: 'Edit' },
//         { title: 'Delete' }
//       ],
      }
},
methods:{
selectSection(item) {
      switch (item.title) {
        case 'View':
       alert(item.title)
          break
        case 'Edit':
        alert("edit")
          break
        case 'Delete':
     alert("delete")
      }
    },
view(item) {
 console.log(item.id)
return this.$router.push(`/indexappview/id/${item.id}`)
  },
edit(item) {
return this.$router.push(`/indexappedit/id/${item.id}`)
  },
deleted(item) {
    let id=item.id 
     console.log(id)
    api.deleteindex(id)
        .then((resp) => {
        this.desserts=resp.data;
           this.usersheet=false
  window.location.reload();
        })
        .catch(e => {
          console.log(e);
        });
  },
 get(){
        api.getcandidate()
        .then((resp) => {
        this.desserts=resp.data
        console.log(resp.data)
        })
        .catch(e => {
          console.log(e);
        });
  },
},
    mounted(){
     this.get();
    }
}
</script>