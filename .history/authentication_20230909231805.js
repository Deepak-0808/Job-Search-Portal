 src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"
 src="https://www.gstatic.com/firebasejs/8.2.2/firebase-auth.js"
 src="https://www.gstatic.com/firebasejs/8.2.2/firebase-database.js"



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

// SignIn function 

function signIn(email, password) {

  firebase.auth().signInWithEmailAndPassword(email, password)
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

// SigUp function

function signUp(email, password) {

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userId = user.uid;

      // // Save additional user data to the Realtime Database
      // database.ref('users/' + userId).set({
      //   password: user.password,
      //   // Additional user data
      // });

      const userRef = database.ref("users/" + userId);

      userRef.set({
        email: email,
        password: password,
      });

      // ...
      alert("Account created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode, errorMessage);
    });
}

// Forgot Function

function forgot(email,password){
  firebase.auth().sendPasswordResetEmail(email)
        .then(function () {
            // Password reset email sent successfully
            console.log("Password reset email sent.");
            alert("Password reset email sent.");
        })
        .catch(function (error) {
            // Handle errors here
            console.error("Error sending password reset email:", error.message);
            alert(error.)
        });
}

// Form Submit Handler

document.getElementById("auth-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  

  // Check which button was clicked and call the corresponding function
  if (e.submitter.id === "signupbtn") {
      signUp(email, password);
  } else if (e.submitter.id === "signinbtn") {
      signIn(email, password);
  } else if (e.submitter.id==="reset"){
    forgot(email,password);
  }
});