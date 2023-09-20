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


const signinForm = document.getElementById("signin-form");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = signinForm["email"].value;
  const password = signinForm["password"].value;

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

});


// chech the user is signedIn or not

function checkUserSignIn() {
  firebase.auth().onAuthStateChanged(function(user) {
      if (users) {
          // User is signed in
          console.log("User is signed in:", user.name);
      } else {
          // User is not signed in
          console.log("User is not signed in");
      }
  });
}

// Call the checkUserSignIn function when the page loads
window.onload = checkUserSignIn;
