import Vue from 'vue'
import Vuex from 'vuex'
import userapi from '../API/User'
// import router from 'vue-router'
//  import axios from 'axios'
import SecureLS from "secure-ls";
var ls = new SecureLS({encodingType: 'aes'});

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
  token: ls.get('key'),
  users:ls.get('access'),
  role:[],
  permission:[],
  register:''
  },

  mutations: {   
 SAVE_USERS(state, users) {
    state.users = users;
  },
  SAVE_ROLE(state, role) {
    state.role = role;
  },
SAVE_PERMISSION(state,permission){
state.permission = permission;
},
SAVE_REGISTER(state){
state.register  = 'success'
},
logout(state){
state.token = ''
},
  },

  actions: {
login({ commit }, user) {
            return new Promise((resolve, reject) => {
                  return userapi.login(user)
                  .then(resp => {
                  const token = resp.data.token
                  ls.set('key', token)
                  const user = resp.data.User
                   ls.set('access', user)
                   commit('SAVE_USERS', user);
                   resolve(resp)
                })
                .catch(err => {
                   ls.removeAll()
                   ls.remove('token')
                  reject(err)
                })
            })  
          },
role({ commit }) {
            return new Promise((resolve, reject) => {
                  return userapi.role()
                  .then(resp => {
                  const role = resp.data[0]
                  commit('SAVE_ROLE', role);
                  resolve(resp)
                })
                .catch(err => {
                 console.log(err)
                  reject(err)
                })
            })
          },

permission({ commit }) {
            return new Promise((resolve, reject) => {
                  return userapi.permission()
                  .then(resp => {
                  const permission = resp.data
                  commit('SAVE_PERMISSION', permission);
                  resolve(resp)
                })
                .catch(err => {
                 console.log(err)
                  reject(err)
                })
            })
          },
    register({ commit }, user) {
                  return userapi.register(user)
                  .then(resp => {
                  console.log("Store check")
               const register = resp.data
                commit('SAVE_REGISTER', register);
                    return Promise.resolve(resp.data)
                })
                .catch(err => {
                 console.log("store err")
                 return Promise.reject(err)
                })
     
          },
logout({commit}){
  return new Promise((resolve) => {
    commit('logout')
  ls.remove('token')
  ls.remove('status')
  ls.removeAll()
    resolve()
  })
}
  },

  getters : {
  candiate: state => {
   return state.permission[0]
    },
  attendance: state => {
   return state.permission[1]
    },
 training: state => {
   return state.permission[2]
    },
 emergency: state => {
   return state.permission[3]
    },
 hr: state => {
   return state.permission[4]
    },
 leave: state => {
   return state.permission[5]
    },
 asset: state => {
   return state.permission[6]
    },
 salary: state => {
   return state.permission[7]
    },
 travel: state => {
   return state.permission[8]
    },
 finnacial: state => {
   return state.permission[9]
    },
 employee: state => {
   return state.permission[10]
    },
 policy: state => {
   return state.permission[11]
    },
  }
});

export default store;
