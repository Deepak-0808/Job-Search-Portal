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



// SignIn using Firebase
// const signinForm = document.getElementById("signin-form");
// signinForm.addEventListener("submit", (e) => {
//   e.preventDefault();
  
//   const email = signinForm["email"].value;
//   const password = signinForm["password"].value;


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
// });



// Signup form submission

// const signupForm = document.getElementById("signup-form");
// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = signupForm["email"].value;
//   const password = signupForm["password"].value;

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
// });
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
  }
});