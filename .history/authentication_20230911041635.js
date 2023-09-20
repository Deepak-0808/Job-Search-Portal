






// //chech the user is signedIn or not

// document.getElementById("jobSavebtn").addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent the default behavior of the link
//   // Your custom code here
//   alert("jobsavebtn clicked");
//   firebase.auth().onAuthStateChanged(function(users) {
//           if (users) {
//               // User is signed in
//               console.log("User is signed in:", users.email);
//           } else {
//               // User is not signed in
//               console.log("User is not signed in");
//           }
//       });
// });




// function checkUserSignIn() {
//   firebase.auth().onAuthStateChanged(function(users) {
//       if (users) {
//           // User is signed in
//           console.log("User is signed in:", users.email);
//       } else {
//           // User is not signed in
//           console.log("User is not signed in");
//       }
//   });
// }

// // Call the checkUserSignIn function when the page loads
// window.onload = checkUserSignIn;


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


// if user is signed in or si

let redirectToHome = true; // Initialize a flag

firebase.auth().onAuthStateChanged(function(users) {
  if (users && redirectToHome) {
    redirectToHome = false; // Set the flag to false to prevent further redirection
    window.location.href = 'index.html'; // Redirect to the home page
  } else {
    // Handle other cases or set up a different flow
  }
});

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
            alert("Password reset email sent.");
        })
        .catch(function (error) {
            // Handle errors here
            console.error("Error sending password reset email:", error.message);
            alert(error.message);
        });
}

// Form Submit Handler

document.getElementById("auth-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  var email = document.getElementById("email").value;
  if(e.submitter.id!=="reset"){
    var password = document.getElementById("password").value;
  }
  
  

  // Check which button was clicked and call the corresponding function
  if (e.submitter.id === "signupbtn") {
      signUp(email, password);
  } else if (e.submitter.id === "signinbtn") {
      signIn(email, password);
  } else if (e.submitter.id==="reset"){
    forgot(email);
  }
});

