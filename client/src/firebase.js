//  import firebase from "firebase";

const firebase = require('firebase/app');
require('firebase/auth');

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtA9G5LKdN9d-Gq_aEAeMTH2bM_2J6Amg",
    authDomain: "family-reunion-helper.firebaseapp.com",
    databaseURL: "https://family-reunion-helper.firebaseio.com",
    projectId: "family-reunion-helper",
    storageBucket: "family-reunion-helper.appspot.com",
    messagingSenderId: "169387949450",
    appId: "1:169387949450:web:5826302c59bd3deef51c73"
  };

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);

export const createuser = (email, password) => {
    return fb.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        console.log(res);
        console.log(fb.auth());
        console.log(fb.auth().currentUser);
      })
    .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        console.log(error);
      });
}  

export const signin = (email, password) => {
    return fb.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);        
      console.log(fb.auth().currentUser.providerData[0].email);

        //var user = firebase.auth().currentUser;
        // if (user != null) {
        //   user.providerData.forEach(function (profile) {
        //     console.log("Sign-in provider: " + profile.providerId);
        //     console.log("  Provider-specific UID: " + profile.uid);
        //     console.log("  Name: " + profile.displayName);
        //     console.log("  Email: " + profile.email);
        //     console.log("  Photo URL: " + profile.photoURL);
        //   });
        // }
    })
    .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
}  



