import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Attendance from '@/components/Attendance_report'
import Project from '@/components/Project_attendance'
import Employee from '@/components/Employee'
import Index from '@/components/Index'
import Personalinfo from '@/components/Personalinfo'
import Contactinfo from '@/components/Contactinfo'
import Bankinfo from '@/components/Bankinfo'
import Professionalinfo from '@/components/Professionalinfo'
import Applicant from '@/components/Applicant'
import Applicantdata from '@/components/Applicantdata'
import ApplyLeave from '@/components/ApplyLeave'
import Selected from '@/components/Selected'
import Interviewer from '@/components/Interviwer'
import Nonselected from '@/components/Non_selected'
import Settings from '@/components/Settings'
import store from '../store/store'
import Indexapp from '@/components/Applicant_detail'
import SecureLS from "secure-ls";
var ls = new SecureLS({encodingType: 'aes'});
Vue.use(Router)

const router = new Router({

  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
 {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        auth:true,
          }
    },

{
      path: '/index',
      name: 'Index',
      component: Index,
meta:{
        auth:true,
          }
    },
{
      path: '/interviwer',
      name: 'Interviwer',
      component: Interviewer,
meta:{
        auth:true,
          }
    },
{
      path: '/selected',
      name: 'BCG Form',
      component: Selected,
meta:{
        auth:true,
          }
    },
{
      path: '/nonselected',
      name: 'Non-Selected',
      component: Nonselected,
meta:{
        auth:true,
          }
    },
{
      path: '/indexappview/id/:id',
      name: 'Index-Applicant View',
      component: Indexapp,
meta:{
        auth:true,
        key:'view'
          }
    },
{
      path: '/indexappedit/id/:id',
      name: 'Index-Applicant Edit',
      component: Indexapp,
meta:{
        auth:true,
        key:'edit'
          }
    },
 {
      path: '/attendance',
      name: 'Attendance Report',
      component: Attendance,
meta:{
        auth:true,
          }
    },
 {
      path: '/project',
      name: 'Project',
      component: Project,
meta:{
        auth:true,
          }
    },
{
      path: '/applicantdata',
      name: 'Applicant Data',
      component: Applicantdata,
 meta:{
        auth:true,
          }
    },
   {
      path: '/ApplyLeave',
      name: 'ApplyLeave',
      component: ApplyLeave,
 meta:{
        auth:true,
          }
    },
{
      path: '/employee',
      name: 'Employee Detail',
      component: Employee,
 meta:{
        auth:true,
          }
    },
{
      path: '/personalinfo',
      name: 'Personal Information',
      component: Personalinfo,
 meta:{
        auth:true,
          }
    },
{
      path: '/contactinfo',
      name: 'Contact Information',
      component: Contactinfo,
 meta:{
        auth:true,
          }
    },

{
      path: '/professionalinfo',
      name: 'Professional Details',
      component: Professionalinfo,
 meta:{
        auth:true,
          }
    },
{
      path: '/bankinfo',
      name: 'Bank Details',
      component: Bankinfo,
 meta:{
        auth:true,
          }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
 meta:{
        auth:true,
          }
    },
{
      path: '/applicant',
      name: 'Candidate Induction Form',
      component: Applicant,
    },

  ]
})

router.beforeEach((to, from, next) => {
if(to.meta.auth){
if(store.state.users.id){
store.dispatch('role'),  
store.dispatch('permission'),
next()
return;
}
ls.removeAll()
next('/')
return;
}else{
console.log("err on token")
next()
}
})

export default router