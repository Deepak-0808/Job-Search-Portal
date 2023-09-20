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

// SignIn function

function signIn(email, password) {
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

// SigUp function

function signUp(email, password) {

  var name = document.getElementById("name").value;
  alert(email);
  alert(name);
  alert(password);

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed up successfully, now store additional data in the database
    const user = userCredential.user;
    
    // Define the data to be stored in the database
    const userData = {
      name: name,
      email: email
    };
    
    // Reference to the Firebase Realtime Database
    
    
    // Store user data under a 'users' node using the user's unique UID
    database.ref('users/' + user.uid).set(userData)
      .then(() => {
        
        alert("User data stored in the database.");
        // You can redirect to a different page or perform other actions here.
      })
      .catch((error) => {
        
        alert(error);
      });
  })
  .catch((error) => {
    
    alert(error);
  });


  
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const userId = user.uid;

//       // Save additional user data to the Realtime Database
//       // database.ref('users/' + userId).set({
//       //   email: email,
//       //   password: password,

//       //   // Additional user data
//       // });
      
//       alert(email);
//       alert(password);

//       const userRef = database.ref("users/" + userId);
//         userRef.set({
//         email: email,
//         password: password,
//       });

//       // ...
//       alert("Account created");
      
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       console.log(errorCode, errorMessage);
//     });
}

// Forgot Function

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

// Form Submit Handler

document.getElementById("auth-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  
  var email = document.getElementById("email").value;
  if(e.submitter.id !== "reset"){
    var password = document.getElementById("password").value;
  }
  
  

  // Check which button was clicked and call the corresponding function
  if (e.submitter.id === "signupbtn") {
    signUp(email, password);
  } else if (e.submitter.id === "signinbtn") {
    signIn(email, password);
  } else if (e.submitter.id === "reset") {
    forgot(email);
  }
});
