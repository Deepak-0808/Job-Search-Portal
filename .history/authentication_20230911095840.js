const firebaseConfig = {
  // Your Firebase config object
  apiKey: "AIzaSyApbzbE0U8-8blkB0L5LUxZV1mHDPmWC5k",
  authDomain: "job-finder-63ccf.firebaseapp.com",
  projectId: "job-finder-63ccf",
  storageBucket: "job-finder-63ccf.appspot.com",
  messagingSenderId: "338104523235",
  appId: "1:338104523235:web:dacf515e97448ffd4da8d6",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// after signin or signup redirect to home page

let redirectToHome = true; // Initialize a flag

firebase.auth().onAuthStateChanged(function (users) {
  if (users && redirectToHome) {
    redirectToHome = false; // Set the flag to false to prevent further redirection
    window.location.href = "index.html"; // Redirect to the home page
  } else {
    // Handle other cases or set up a different flow
  }
});

user signIn

const signinbtnbtn = document.getElementById("signinbtn");
signinbtnbtn.addEventListener("click", signIn);

function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
  alert(email);
  alert(password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      alert("Signed in succesfully");
      var user = userCredential.user;
      
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
}

// Forgot Function'

const btn=document.getElementById("reset");
  
  
  
  btn.addEventListener("click", forgot);

function forgot(email) {
  firebase.auth().sendPasswordResetEmail(email).then(function () {
      // Password reset email sent successfully
      alert("Password reset email sent.");
    })
    .catch(function (error) {
      // Handle errors here
      alert(error.message);
    });
}

