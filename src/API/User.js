 import axios from 'axios'
 import store from '../store/store'
import SecureLS from "secure-ls";
var ls = new SecureLS({encodingType: 'aes'});

const API_URL = 'http://192.168.1.111:3000/';

export default{

 login(user) {
    return axios.post( API_URL +'api/portal/login',(user));
  },
 role() {
    return axios.get( `${API_URL}api/portal/position/${store.state.users.role}` , { headers: {
    'x-access-token': ls.get('key') }});
  },
 permission() {
    return axios.get( `${API_URL}api/portal/permission/${store.state.users.role}`, { headers: {
    'x-access-token': ls.get('key') }});
},

 create(data) {
    return axios.post( API_URL +'api/portal/register', data);
  },

 get() {
    return axios.get( API_URL +'api/portal/user',{ headers: {
    'x-access-token': ls.get('key') }});
  },

getrole() {
    return axios.get( API_URL +'api/portal/position/role', { headers: {
    'x-access-token': ls.get('key') }});
  },

postrole(role){
    return axios.post( API_URL +'api/portal/position/addrole',(role),{ headers: {
    'x-access-token': ls.get('key') }});
    },

deleteuser(username){
    console.log(username)
    return axios.delete(`${API_URL}api/portal/position/deleteuser/${username}`,{ headers: {
    'x-access-token': ls.get('key') }});
   },

deleterole(id){
    console.log(id)
    return axios.delete(`${API_URL}api/portal/position/deleterole/${id}`,{ headers: {
    'x-access-token': ls.get('key') }});
   },

updateuser(item){
 console.log(item)
 return axios.put(`${API_URL}api/portal/position/edituser/${item.id}`,(item),{ headers: {
    'x-access-token': ls.get('key') }});
    },

updaterole(item){
 console.log(item)
 return axios.put(`${API_URL}api/portal/position/editrole/${item.id}`,(item),{ headers: {
    'x-access-token': ls.get('key') }});
    },

postcandidate(data){
 console.log(data)
 return axios.post(`${API_URL}api/portal/addcandidate`,(data),{ headers: {
    'x-access-token': ls.get('key') }});
     },

fileupload(formdata){
  return axios.post(`${API_URL}api/portal/upload`,(formdata),{   headers: {
      'Content-Type': 'multipart/form-data'
     }});
},
getresume(name){
 console.log(name)
  return axios.get(`${API_URL}api/portal/files/${name}`);
},
getcandidate(){
    return axios.get( API_URL +'api/portal/candidate/get',{ headers: {
    'x-access-token': ls.get('key') }});
  },
getcandidatedetail(id){
    return axios.get(`${API_URL}api/portal/getcandidate/${id}`,{ headers: {
    'x-access-token': ls.get('key') }});
  },
deleteindex(id){
    return axios.delete( `${API_URL}api/portal/deletecandidate/${id}`,{ headers: {
    'x-access-token': ls.get('key') }});
  },
updatecandidate(data){
     return axios.put( `${API_URL}api/portal/editcandidate/${data.id}`,(data),{ headers: {
    'x-access-token': ls.get('key') }});
 },


//Interviewer
addinterviewer(data){
     return axios.post( `${API_URL}api/portal/addinterviewer`,(data),{ headers: {
    'x-access-token': ls.get('key') }});
 },
getinterviewer(id){
     return axios.get( `${API_URL}api/portal/interviewer/${id}`,{ headers: {
    'x-access-token': ls.get('key') }});
 },
deleteinterviewer(id){
     return axios.delete( `${API_URL}api/portal/deleteinnterviewer/${id}`,{ headers: {
    'x-access-token': ls.get('key') }});
 },
//Mail Sending
sendmail(data){
  return axios.post( `${API_URL}api/portal/send-email`,(data),{ headers: {
    'x-access-token': ls.get('key') }});
},

//timer
checkintimer(data){
 return axios.post( `${API_URL}api/portal/addattendance`,(data),{ headers: {
    'x-access-token': ls.get('key') }});
},
checkouttimer(data){
  return axios.put( `${API_URL}api/portal/editattendance/${data.emp_id}`,(data),{ headers: {
    'x-access-token': ls.get('key') }});
},
gettimer(data){
  return axios.get( `${API_URL}api/portal/attendance/${data.emp_id}/${data.date}`,(data),{ headers: {
    'x-access-token': ls.get('key') }});
},
getattendance(date){
 return axios.get( `${API_URL}api/portal/attendance/${date}`,{ headers: {
    'x-access-token': ls.get('key') }});
}
}