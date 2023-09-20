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


// Signup form submission

const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm["email"].value;
  const password = signupForm["password"].value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
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
});
