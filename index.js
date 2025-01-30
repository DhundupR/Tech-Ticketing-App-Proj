

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJNmTY9BklKaLG4xRC6bIqBzfbEvPHHlE",
  authDomain: "tech-ticketing-app-f53ba.firebaseapp.com",
  databaseURL: "https://tech-ticketing-app-f53ba-default-rtdb.firebaseio.com",
  projectId: "tech-ticketing-app-f53ba",
  storageBucket: "tech-ticketing-app-f53ba.firebasestorage.app",
  messagingSenderId: "952763182317",
  appId: "1:952763182317:web:3751065617e59619dd70e4",
  measurementId: "G-ZXYQ5RL9DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
console.log(auth)

console.log(app)

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")
const signOutButtonEl = document.getElementById("logout-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

const nameEl = document.getElementById("name")
const emailEl = document.getElementById("email")
const dropDownEl = document.getElementById("dropdown")
const dropDown2El = document.getElementById("dropdown-2")
const issueEl = document.getElementById("issue")

const submitButtonEl = document.getElementById("submit-btn")


/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)
signOutButtonEl.addEventListener("click", authSignOut)
signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)
submitButtonEl.addEventListener("click",submitAction)
/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */
function submitAction(){
  console.log(nameEl.value)
  console.log(emailEl.value)
  console.log(dropDownEl.value)
  console.log(dropDown2El.value)
  console.log(issueEl.value)
  sendEmail()
}


function sendEmail(){
  console.log("Send email")
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
}

function authSignInWithGoogle() {
  console.log("Sign in with Google")
}

function authSignInWithEmail() {
  console.log("Sign in with email and password")
  const email = emailInputEl.value
  const password= passwordInputEl.value 
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    showLoggedInView()
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

function authCreateAccountWithEmail() {
  console.log("Sign up with email and password")
  const email = emailInputEl.value
  const password= passwordInputEl.value 
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      showLoggedInView()
      })
      .catch((error) => {
          console.error(error.message)
      });
}

function authSignOut(){
  signOut(auth).then(() => {
      showLoggedOutView()
    }).catch((error) => {
       console.error(error.message)
    });
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
  hideElement(viewLoggedIn)
  showElement(viewLoggedOut)
}

function showLoggedInView() {
  hideElement(viewLoggedOut)
  showElement(viewLoggedIn)
}

function showElement(element) {
  element.style.display = "flex"
}

function hideElement(element) {
  element.style.display = "none"
}


showLoggedInView()
