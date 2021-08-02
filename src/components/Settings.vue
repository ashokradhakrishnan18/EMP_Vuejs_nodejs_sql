

<template>
    <div id="app">
    <v-app id="inspire">
    <appbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" ref="name" v-bind:items="breadcombs"></appbar>
    <navbar ref="drawer" :items="items"></navbar>
    <v-main class="grey lighten-3">
     <timer></timer>
    <v-container class="my-0" >
     <v-card class="pa-5 rounded-lg" v-if="!overlay">
       <v-tabs color="cyan">
      <v-tab>

        Users
      </v-tab>
      <v-tab>

        Roles
      </v-tab>
 <v-tab>

        Permissions
      </v-tab>
      <v-tab-item>

        <v-card flat>
       <v-row>
        <v-col cols="12" lg="2">
            <v-btn  class="ml-4 mt-2"
      rounded
      @click="dialog=true"
      color="teal"
      dark
      >
      ADD User
      </v-btn> 

 <v-dialog 
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    > 
      <v-card>
        <v-toolbar
          dark
          color="teal"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title  class="header_title">Add Employee</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="register"
            >
              Save
            </v-btn>
          </v-toolbar-items>
         </v-toolbar>
        <v-container>
        <v-card class="pa-5 rounded-lg">
         <v-row>
         <v-col cols="12" md="6">
         <h3>Assign EmpID :</h3>
         </v-col>
   <v-col cols="12" md="6">
        <v-text-field
            v-model="empid"
            label="Enter The Employee ID"
            required
          ></v-text-field>
         </v-col>
  <v-col cols="12" md="6">
         <h3>Assign Username :</h3>
         </v-col>
   <v-col cols="12" md="6">
        <v-text-field
            v-model="username"
            label="Enter The Username"
            required
          ></v-text-field>
         </v-col>
      <v-col cols="12" md="6">
         <h3>Assign Password :</h3>
         </v-col>
       <v-col cols="12" md="6">
        <v-text-field
            type="password"
            v-model="password"
            label="Enter The Password"
            required
          ></v-text-field>
         </v-col>
     <v-col cols="12" md="6">
         <h3>Assign Role :</h3>
         </v-col>
     <v-col cols="12" md="6">
     <v-select
            v-model="role"
          label="Select The Role"
         :items="getroleddrole"
          item-text="role" 
          item-value="role" 
        ></v-select>
         </v-col>
         </v-row>
         </v-card>
 <v-snackbar 
        v-model="snackbar"
        :timeout="timeout"
        color="error" 
      >
       <h4>{{text}}</h4>
      </v-snackbar>
         </v-container>
        </v-card>
       </v-dialog>
        </v-col>
      <v-col cols="12" lg="10">
      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="8"
    class="elevation-1"
    hide-default-footer
   :page.sync="page"
   @page-count="pageCount = $event"
  >
  <template v-slot:top>
        <v-toolbar 
          class="mb-2 elevation-"
          color="teal"
          dark
          dense
         >
          <v-toolbar-title class="header_title">Users</v-toolbar-title>
        </v-toolbar>
      </template>
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
                  dense  @click.stop="dialog5=true"
                  class="list-item-small"
                  >
                  <v-list-item-content  >
                    <v-list-item-title  >
                       Edit
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

              <v-dialog v-model="dialog5"
          transition="dialog-bottom-transition"
          max-width="600"
        >
            <v-card>
              <v-toolbar
                color="teal"
                dark class="header_title"
              >Edit Employee</v-toolbar>
              <v-card-text class="mt-2"> 
               <v-row>
               <v-col cols="12">
                <h3>Employee ID</h3>
                 <v-text-field
            v-model="item.empid"
            label="New EmpID"
          ></v-text-field>
               </v-col>
             <v-col cols="12">
             <h3>Username</h3>
                 <v-text-field
            v-model="item.username"
            label="New Username"
          ></v-text-field>
               </v-col>
          <v-col cols="12">
             <h3>Role</h3>
                 <v-text-field
            v-model="item.role"
            label="New Role"
          ></v-text-field>
               </v-col>
               </v-row>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog5=false"
                >Close</v-btn>
                  <v-btn
                  text
                  @click="updateuser(item)"
                >Save</v-btn>
               </v-card-actions>
              </v-card>
   
              </v-dialog>

                <v-list-item
                  dense
                  class="list-item-small"
                  @click.stop="usersheet = true"
                >
                  <v-list-item-content>
                    <v-list-item-title  >
                     Delete
                    </v-list-item-title>
                  </v-list-item-content>
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
                <h3>Are You Sure you want to Delete <strong> Employee ID : {{item.empid}} </strong></h3>
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
           @click="deleteuser(item)"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-sheet>
      </v-bottom-sheet>
                </v-list-item>
              </v-list>
            </v-menu>
   </template>
<template v-slot:footer >
      <div class="d-flex justify-end mr-4">
         <v-pagination color="teal" 
        v-model="page"
        :length="pageCount"
      ></v-pagination></div>
      </template>
   </v-data-table>

        </v-col>
       </v-row>
        </v-card>

      </v-tab-item>
      <v-tab-item>
        <v-card flat>
         <v-row>
        <v-col cols="12" lg="2">
       <v-dialog
      v-model="dialog3"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
         <v-btn class="ml-4 mt-2"
      rounded
       v-bind="attrs"
       v-on="on"
      color="teal"
      dark
     
      >
      ADD Role
      </v-btn>
    
      </template>
      <v-card>
        <v-toolbar
          dark
          color="teal"
           >
          <v-btn
            icon
            dark
            @click="dialog3 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title  class="header_title">Add Role</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="postrole()"
            >
              Save
            </v-btn>
          </v-toolbar-items>
         </v-toolbar>
        <v-container>
 <v-snackbar 
        v-model="snackbar"
        :timeout="timeout"
        color="error" 
      >
       <h4>{{text}}</h4>
      </v-snackbar>
        <v-card class="pa-5 rounded-lg">
         <v-row>
         <v-col cols="12" lg="6">
          <h3>Assign Role</h3>
         </v-col>
          <v-col cols="12" lg="6">
          <v-text-field
            type="number"
             v-model="addrole"
            label="Enter The Role"
          ></v-text-field>
         </v-col>
   <v-col cols="12" lg="6">
          <h3>Assign Position</h3>
         </v-col>
          <v-col cols="12" lg="6">
          <v-text-field
            type="text"
             v-model="addposition"
            label="Enter The Position"
          ></v-text-field>
         </v-col>
         </v-row>
         </v-card>
         </v-container>
        </v-card>
       </v-dialog>
        </v-col>
        <v-col cols="12" lg="10">
 <v-data-table
     :headers="headerss"
     :items="dessertss"
       :items-per-page="8"
    class="elevation-1"
    hide-default-footer
   :page.sync="page2"
   @page-count="pageCount2 = $event"
  >
  <template v-slot:top>
        <v-toolbar 
          class="mb-2 elevation-"
          color="teal"
          dark
          dense
         >
          <v-toolbar-title class="header_title">Roles</v-toolbar-title>
        </v-toolbar>
      </template>
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
                  dense  @click.stop="dialog6=true"
                  class="list-item-small"
                >
                  <v-list-item-content  >
                    <v-list-item-title  >
                       Edit
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
 <v-dialog v-model="dialog6"
          transition="dialog-bottom-transition"
          max-width="600"
        >
            <v-card>
              <v-toolbar
                color="teal"
                dark class="header_title"
              >Edit Roles</v-toolbar>
              <v-card-text class="mt-2"> 
               <v-row>
               <v-col cols="12">
                <h3>Role</h3>
                 <v-text-field
            v-model="item.role"
            label="Enter The New Role"
          ></v-text-field>
               </v-col>
             <v-col cols="12">
             <h3>Position</h3>
                 <v-text-field
            v-model="item.position"
            label="Enter The New Position"
          ></v-text-field>
               </v-col>
               </v-row>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog6 = false"
                >Close</v-btn>
                  <v-btn
                  text
                  @click="updaterole(item)"
                >Save</v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>
                <v-list-item
                  dense
                  class="list-item-small"
                   @click.stop="rolesheet=true"
                >
                  <v-list-item-content>
                    <v-list-item-title  >
                     Delete
                    </v-list-item-title>
                  </v-list-item-content>
          <v-bottom-sheet inset      v-model="rolesheet">
        <v-sheet
          class="text-center"
          elevation="5"
        >
        <v-card>
         <v-card-title class="justify-center">
                      Are You Sure? 
         </v-card-title>

        <v-card-text>
           
                <h3>Are You Sure you want to Delete <strong> Role : {{item.role}} </strong></h3>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
           <v-btn
            text
             @click="rolesheet = false"
            >
            cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
           @click="deleterole(item)"
           >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-sheet>
      </v-bottom-sheet>
                </v-list-item>
              </v-list>
            </v-menu>
     </template>
<template v-slot:footer >
      <div class="d-flex justify-end mr-4">
         <v-pagination color="teal" 
        v-model="page2"
        :length="pageCount2"
      ></v-pagination></div>
      </template>
     </v-data-table>

        </v-col>
         </v-row>
        </v-card>
      </v-tab-item>
     <v-tab-item>

        <v-card flat>
       <v-row>
        <v-col cols="12" lg="2">
            <v-btn  class="ml-4 mt-2"
      rounded
      color="teal"
      dark
      >
      ADD Permission
      </v-btn> 
        </v-col>
         <v-col cols="12" lg="10">
 <v-data-table
     :headers="headersss"
     :items="dessertsss"
       :items-per-page="8"
    class="elevation-1"
    hide-default-footer
   :page.sync="page3"
   @page-count="pageCount3 = $event"
  >
  <template v-slot:top>
        <v-toolbar 
          class="mb-2 elevation-"
          color="teal"
          dark
          dense
         >
          <v-toolbar-title class="header_title">Permissions</v-toolbar-title>
        </v-toolbar>
      </template>
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
                >
                  <v-list-item-content  >
                    <v-list-item-title  >
                       Edit
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                  
                <v-list-item
                  dense
                  class="list-item-small"
                   @click="item"
                >
                  <v-list-item-content>
                    <v-list-item-title  >
                     Delete
                    </v-list-item-title>
                  </v-list-item-content>
       
                </v-list-item>
              </v-list>
            </v-menu>
     </template>
<template v-slot:footer >
      <div class="d-flex justify-end mr-4">
         <v-pagination color="teal" 
        v-model="page3"
        :length="pageCount3"
      ></v-pagination></div>
      </template>
     </v-data-table>
         </v-col>
       
       </v-row>
        </v-card>
     </v-tab-item>
    </v-tabs>
     </v-card>
      <v-snackbar 
        v-model="snackbar2"
        :timeout="timeout2"
        color="success" 
      >
       <h4>{{text}}</h4>
      </v-snackbar>
 <v-snackbar 
        v-model="snackbar"
        :timeout="timeout"
        color="error" 
      >
       <h4>{{text}}</h4>
      </v-snackbar>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="74"
        color="teal darken-3"
      ></v-progress-circular>
    </v-overlay>
     </v-container>

    </v-main>
    </v-app>
    </div> 

</template>
<script>
import appbar from './content/appbar'
import navbar from './content/navbar'
import store from "../store/store";
import api from '../API/User'
export default {
    name:'Settings',
store,
components:{
navbar,
appbar
},
data () {
      return {
        desserts:[],
        dessertss:[],
         editdialog:false,
         rolesheet:false,
         usersheet:false,
         text:'',
          snackbar: '',
          timeout: 2000,
           snackbar2: '',
          timeout2: 2000,
          empid:'',
          username: '',
          password: '',
          role:'',
          addrole:'',
          addposition:'',
          dialog: false,
          dialog3:false,
          dialog5:false,
          dialog6:false,
  overlay: true,
     page: 1,
        pageCount: 0,
   page2: 1,
        pageCount2: 0,
   page3: 1,
        pageCount3: 0,
          items: [
                { title: 'Home',icon: 'mdi-home',link:'/home',overview:1 },
                { title: 'Candidate Induction',icon: 'mdi-account-question',link:'/index',overview:0},
                { title: 'Attendance Report',icon: 'mdi-calendar-check',link:'/attendance',overview:0},
                { title: 'Training Department',icon: 'mdi-account-clock',link:'',overview:1 },
                { title: 'Emergencency Medicare',icon: 'mdi-account-settings',link:'',overview:1},
                { title: 'Human Resources',icon: 'mdi-briefcase-account-outline',link:'/applicantdata',overview:1},
                { title: 'Leave Management',icon: 'mdi-calendar-alert',link:'/ApplyLeave' ,overview:1},
                { title: 'Asset Management',icon: 'mdi-shopping',link:'' ,overview:1},
                { title: 'Salary Management',icon: 'mdi-cash-multiple',link:'' ,overview:1},
                { title: 'Travel Management',icon: 'mdi-airplane-takeoff',link:'',overview:1 },
                { title: 'Financial Management',icon: 'mdi-bank',link:'',overview:1 },
                { title: 'Employee Details',icon: 'mdi-account-box-outline',link:'/employee',overview:1},
                { title: 'Company Policy',icon: 'mdi-tie',link:'',overview:1},
                ],
 headers: [
          {
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Employee ID', value: 'empid' },
          { text: 'Username', value: 'username' },
          { text: 'Role ID', value: 'role' },
           { text: 'Actions', value: 'action',sortable: false }
        ],
 headerss: [
          {
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Role', value: 'role' },
          { text: 'Position', value: 'position' },
          { text: 'Actions', value: 'action',sortable: false }
 ],
 headersss: [
          {
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Role', value: 'role' },
          { text: 'Modules', value: 'modules' },
          { text: 'Overview', value: 'overview' },
           { text: 'Add', value: 'add' },
           { text: 'Edit', value: 'edit' },
            { text: 'Delete', value: 'delete' },
           { text: 'View', value: 'view' },
           { text: 'Actions', value: 'action',sortable: false }
        ],
        selectrole:'',
        selectposition:''
}
},
methods:{
  register(){
     var data={
             empid : this.empid,
             username :this.username,
             password : this.password,
             role:this.role
              };
         api.create(data)
        .then(() => {
         this.dialog=false;
          this.snackbar2=true;
          this.text="User Succesfully Added..."
         window.location.reload();
        })
        .catch(() => {
           this.snackbar=true
          this.text="Username Already exists or Error..."
        });
    },

 get(){
        api.get()
        .then((resp) => {
        this.desserts=resp.data
        console.log(resp.data)
        })
        .catch(e => {
          console.log(e);
        });
  },

getrole(){
        api.getrole()
       .then((resp) => {
        this.dessertss=resp.data
        })
        .catch(e => {
          console.log(e);
          });
  },
getroledd(){
        api.getrole()
       .then((resp) => {
        this.getroleddrole=resp.data

          this.loading=false;
          setTimeout(() => {
            this.overlay = false
          }, 1000)

        })
        .catch(e => {
          console.log(e);
          });
 },
 postrole(){
       var role={
             role : this.addrole,
             position :this.addposition,
              };
           api.postrole(role)
           .then((resp) => {
           console.log(resp.data)
           this.dialog3=false;
           this.snackbar2=true;
            this.text="Role Succesfully Added..."
   window.location.reload();
            })
         .catch(() => {
          this.snackbar=true
          this.text="Role Already exists or Error..."
        });
       },
deleteuser(item){
           let id=item.id 
            api.deleteuser(id)
            .then((resp) => {
             console.log(resp.data)
           this.usersheet=false
  window.location.reload();
           })
        .catch(() => {
         console.log("err")
          });
         },
deleterole(item){
      let id=item.id 
      console.log(id)
      api.deleterole(id)
      .then(() => {
      this.rolesheet=false
  window.location.reload();
      })
      .catch(() => {
      console.log("err")
      });
      },
updateuser(item){
      api.updateuser(item)
        .then(() => {
        this.dialog5=false
      })
      .catch(() => {
      console.log("err")
      });
 },
updaterole(item){
      api.updaterole(item)
      .then(() => {
      
      this.dialog6=false
      })
      .catch(() => {
      console.log("err")
      });
}
},
beforeMount(){
      this.getroledd();
      this.get();
      this.getrole();

        },
}
</script>