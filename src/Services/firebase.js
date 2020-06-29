import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDc-n2FS7B4_hLlkgu_YSV-7qgLGW4ZP7o",
  authDomain: "kratika-51980.firebaseapp.com",
  databaseURL: "https://kratika-51980.firebaseio.com",
  projectId: "kratika-51980",
  storageBucket: "kratika-51980.appspot.com",
  messagingSenderId: "1029912104968",
  appId: "1:1029912104968:web:15899fac090d873fb0c1bd",
  measurementId: "G-BZEQH0W3GZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export const auth =firebase.auth()
  export const db = firebase.firestore()

  export default firebase