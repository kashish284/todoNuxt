//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { useStore } from "vuex";
import "@firebase/firestore";
import {firebase} from "firebase/app";
// const firebase = require("firebase/app").default;
//require("firebase/functions");
// copy the config from the console https://console.firebase.google.com/u/0/project/sign-11111/settings/general/

export default defineNuxtPlugin((nuxtApp) => {
function initFirebase() {
var firebaseConfig = {
    apiKey: "AIzaSyC-J8zEjTo6rgSygLBdRgvX2Rb9tyDC3HY",
    authDomain: "todos-app-70781.firebaseapp.com",
    projectId: "todos-app-70781",
    storageBucket: "todos-app-70781.appspot.com",
    messagingSenderId: "981056631421",
    appId: "1:981056631421:web:bef519f3d866e8c95c3714",
    measurementId: "G-BF1288BMLZ"
};
let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) { 
  app = initializeApp(firebaseConfig)
}
const auth = getAuth();
const store = useStore();
auth.beforeAuthStateChanged(user => {
    store.commit("ON_AUTH_STATE_CHANGED_MUTATION", user);
    resolve()
})
// return new Promise((resolve, reject) => {
//     auth.beforeAuthStateChanged(user => {
//         store.commit("ON_AUTH_STATE_CHANGED_MUTATION", user);
//         resolve()
//     })
//     firebase
//       .firestore()
//       .enablePersistence()
//       .then(resolve)
//       .catch((err) => {
//         console.log(err);
//         if (err.code === "failed-precondition") {
//           reject(err);
//         } else if (err.code === "unimplemented") {
//           reject(err);
//           // The current browser does not support all of
//           // the features required to enable persistence
//         }
//       });
//   });
}
initFirebase().catch((error) => {
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
    console.log(error);
  });
})
// inject it so it can be accessed as this.$firebase inside the project
// export default (ctx, inject) => {
//   inject('firebase', firebase)
// }