

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
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

