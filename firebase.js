// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqiuaHCwskBE3qMrZ1ZtOxnjeVtz5P7A",
  authDomain: "arch-project-a7fb4.firebaseapp.com",
  projectId: "arch-project-a7fb4",
  storageBucket: "arch-project-a7fb4.appspot.com",
  messagingSenderId: "45595534401",
  appId: "1:45595534401:web:5e8a8a23a2b91f69b312c0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
