// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYwlcQaS08YNjWp199knHLQO9ugswqLmk",
    authDomain: "ethioamericanchamber.firebaseapp.com",
    projectId: "ethioamericanchamber",
    storageBucket: "ethioamericanchamber.appspot.com",
    messagingSenderId: "453368913106",
    appId: "1:453368913106:web:2529d51e6172470404e10b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);



const submit = document.getElementById('submit');


submit.addEventListener("click",(event)=>{
    event.preventDefault()
    const fullName = document.getElementById('full-name').value;
    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phoneNumber = document.getElementById('phone-number').value;
    createUserWithEmailAndPassword(auth, fullName, userName, email, password, confirmPassword, phoneNumber)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Creating Account...")
            window.location.href="login.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})