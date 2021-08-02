<template>
<!-- <v-row >
<v-col cols="6" sm="9" md="10" lg="10" xl="11 text-end mt-1" >
          <v-btn v-if="button" tile class="mr-5 green"  dark @click="checkin" >Check-In</v-btn>
          <v-btn v-else tile dark class="mr-5 teal" @click="checkout" >Check-Out</v-btn>
</v-col>
<v-col cols="6" sm="3" md="2" lg="2"  xl="1">
<v-text-field dense color="teal" background-color="white" append-icon="mdi-clock" outlined disabled  v-model="res"></v-text-field> 

<v-dialog
      v-model="dialog"
      max-width="540"
    persistent
    >
      <v-card>
        <v-card-title class="header_title">
            Are You Sure?
        </v-card-title>

        <v-card-text>
                <h3>Are You Sure To Checkout in <strong>{{hours}} Hours</strong> , <strong>{{minutes}} Minutes</strong> and <strong>{{seconds}} Seconds</strong>...</h3>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            
            text
            @click="dialog = false"
          >
            cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="process"
          >
            Process
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-col>
</v-row> -->

   <div class="text-end mt-2 mr-5">

<v-row >
<v-col cols="6" sm="9" md="10" lg="10" xl="11" >
              <v-btn v-if="button" tile class="mr-5 green"  dark @click="checkin" >Check-In</v-btn>
          <v-btn v-else tile dark class="mr-5 teal" @click="checkout" >Check-Out</v-btn>
</v-col>

<v-col cols="6" sm="3" md="2" lg="2" xl="1" v-if="button">
<!-- <v-text-field dense color="teal" background-color="white" append-icon="mdi-clock" outlined disabled  v-model="res"></v-text-field>  -->

<p class="time-text mr-4" style="color:#546E7A"><v-icon class="time-icon mr-1">mdi-timer-sand</v-icon>{{hours}}:{{minutes}}:{{seconds}}</p>

</v-col>

<v-col cols="6" sm="3" md="2" lg="2" xl="1" v-else>
 
<p class="time-text mr-4" style="color:#546E7A"> <v-icon class="time-icon-active mr-2">mdi-timer-sand</v-icon>{{hours}}:{{minutes}}:{{seconds}}</p>

</v-col>
</v-row>
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
      <v-bottom-sheet inset v-model="sheet">
        <v-sheet
          class="text-center"
          elevation="5"
        >
        <v-card class="blue-grey darken-3">

         <v-card-title class="justify-center" style="color:#ECEFF1">
                      Are You Sure?
         </v-card-title>

        <v-card-text>
           
                <h3 style="color:#B0BEC5">Are You Sure To Checkout in <strong>{{hours}} Hours</strong> , <strong>{{minutes}} Minutes</strong> and <strong>{{seconds}} Seconds</strong>...</h3>
      <h4 style="color:#B0BEC5">Check-In Time : <strong>{{checkintime}}</strong></h4>
         <h4 style="color:#B0BEC5">Check-Out Time : <strong>{{currenttime}}</strong></h4>
            <h4 style="color:#B0BEC5">Total :<strong>{{hours}}:{{minutes}}:{{seconds}}</strong></h4>
   </v-card-text>

           
               
   <v-card-title class="justify-center" style="color:#ECEFF1">
                      Enter The Task!
         </v-card-title>

        <v-card-text>
           <v-textarea style="color:#FAFAFA"
      label="Task"  solo v-model="task"
      rows="5"
       background-color="grey lighten-2"
       color="teal"
    ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
             color="#ECEFF1"
            text
            @click="sheet = false"
          >
            cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="process"
          >
            Process
          </v-btn>
        </v-card-actions>
      </v-card>
 
        </v-sheet>

      </v-bottom-sheet>

    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate color="teal"
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </div>

</template>

<script>
import moment from 'moment'
import api from '../../API/User'
export default {
   name: 'timer',

    data() {
        return {
          button: true,
          // dialog: false,
          sheet:false,
          hours:0,
          minutes:0,
          seconds:0,
          res:'0:0:0',
          time:'',
        overlay: true,
        text:'',
         snackbar: '',
          timeout: 2000,
           snackbar2: '',
          timeout2: 2000,
        //  checkintime:'',
         currenttime: '',
        total:'',
         task:'',
        }
    },

methods:{

checkin(){

  var data={
             emp_id : this.$store.state.users.empid,
             date :moment().format('YYYY-MM-DD'),
             checkin: moment().format("HH:mm:ss ")
              };
           api.checkintimer(data)
          .then(() => {
       this.snackbar2=true
       this.text="Succesfully Check-in..."
       this.button=false;
         this.gettimer()
            })
         .catch(() => {
        this.snackbar=true
       this.text="Already Check-in or Error..."
        this.button=true;
        });
    // this.button=false;

},

gettimer(){
 var data={
         emp_id : this.$store.state.users.empid,
         date :moment().format('YYYY-MM-DD')
       };
          api.gettimer(data)
          .then((resp) => {
           if(resp.data[0].checkout==null){
               this.checkintime=resp.data[0].checkin
              this.time= setInterval(  () => {  
            var startTime=moment(this.checkintime, "HH:mm:ss");
            var endTime=moment(moment().format("HH:mm:ss "), "HH:mm:ss");
            var duration = moment.duration(endTime.diff(startTime));
            var hours = parseInt(duration.asHours());
            this.hours=hours
            var minutes = parseInt(duration.asMinutes())-hours*60;
            this.minutes=minutes
            var seconds = moment.utc(endTime.diff(startTime)).format("ss");
            this.seconds=seconds
            this.res=hours + ":" + minutes + ":" + seconds
           this.overlay=false
        }, 1000)
           return this.button=false;
           }else{
           this.checkintime=resp.data[0].checkin
           this.total=resp.data[0].total
           var check=moment(this.total, "HH:mm:ss");
           this.hours=check.hour();
           this.minutes= check.minutes();
           this.seconds= check.seconds();
          this.overlay=false
          }})
         .catch(() => {
         this.overlay=false
          this.button=true;
          this.hours=0
          this.minutes=0
          this.seconds=0
        });
},
checkout(){

    this.sheet=true;

     this.check= setInterval(  () => {
        var currenttime= moment().format("HH:mm:ss ");
        this.currenttime=currenttime   
       }, 1000)
},
process(){  
    clearInterval(this.time);
  var data={
             emp_id : this.$store.state.users.empid,
             date :moment().format('YYYY-MM-DD'),
             checkout: moment().format("HH:mm:ss "),
             total:this.res,
             department:this.$store.state.role.position,
             task:this.task
              };
api.checkouttimer(data)
.then(() => {
 this.snackbar2=true
       this.text="Succesfully Check-out..."
clearInterval(this.check);
 this.button=true;
    this.sheet=false;
            })
         .catch(() => {
 this.button=true;
         alert("error")
        });
    },

},
mounted() {
  this.gettimer()

},
watch:{

}


}

</script>
<style>
.listitem{
display: none;
}
.time-text{
font-size: 28px;
 }
.time-icon{
padding: 6px 0px 10px 0px;
 }
.time-icon-active{
padding: 6px 0px 10px 0px;
 animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
 }
@media only screen 
  and (min-device-width: 360px) 
  and (max-device-width: 720px)
  and (orientation: portrait) {

.listitem{
display:block;
}
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>
