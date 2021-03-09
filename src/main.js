import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import firebase from 'firebase/app';
import { createStore } from 'vuex'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDT-lMIuE87aXR2dgGs-E32CSHng3qZ8Cc",
    authDomain: "myfirstprogectvue.firebaseapp.com",
    projectId: "myfirstprogectvue",
    storageBucket: "myfirstprogectvue.appspot.com",
    messagingSenderId: "267683698573",
    appId: "1:267683698573:web:2a64041705317150d9cfc4"
  };

  const store = createStore({
    state () {
      return {
        carts: [1, 2, 3],
        items:[
          {
              id:1,
              url: ''
          },
          {
              id:2,
              url: ''
          },
           {
              id:3,
              url: ''
          },
           {
              id:4,
              url: ''
          },
           {
              id:5,
              url: ''
          },
      ],
      isOpen: false,
      isLogin: false,
      }
    },
    getters: {
      getCarts(state) {
        return state.carts
      },
      getItems(state) {
        return state.items
      },
      getIsOpen(state) {
        return state.isOpen
      },
      getIsLogin(state) {
        return state.isLogin
      },
    },

    mutations: {
      setOpen(state) {
        state.isOpen = !state.isOpen;
      },
      setLogin(state) {
        state.isLogin = !state.isLogin;
      },
    }
  })

firebase.initializeApp((firebaseConfig));

createApp(App).use(router).use(store).mount('#app')


