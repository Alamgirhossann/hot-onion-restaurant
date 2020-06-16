import  { React , useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);

const Auth = ()=> {
    const [user , setUser] = useState(null)

    const signInWithGoogle =() =>{
        const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(response=> {
        const signedIn =getUser(response.user);
        setUser(signedIn)
        return response.user;
       
      }).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
       
        var email = error.email;
       
        var credential = error.credential;
   
      });
    }
}