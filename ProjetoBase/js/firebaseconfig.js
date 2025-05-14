import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAivjSbC0c5Cqhg4X9CpgpxrHz0jQF7Atk",
  authDomain: "bg-diet.firebaseapp.com",
  databaseURL: "https://bg-diet-default-rtdb.firebaseio.com",
  projectId: "bg-diet",
  storageBucket: "bg-diet.firebasestorage.app",
  messagingSenderId: "139089463427",
  appId: "1:139089463427:web:c3dddee3c4783f3bb9f3b6",
  measurementId: "G-FRRDMNDS6M"
};


let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getDatabase(app);

export{auth, db}