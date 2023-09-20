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

document.addEventListener("DOMContentLoaded", function () {
  // Find elements with the class "my-class"
  window.onload = userAuthFun;
});

function userAuthFun() {
  const profileDropdown = document.getElementById("profile-dropdown");
  const signinSignupVisibility = document.getElementById("signIn-signup-visibility");
  const username = document.getElementById("user-name");

  firebase.auth().onAuthStateChanged(function (users) {
    if (users) {
      // User is signed in, so display the "Profile" option
      username=
      profileDropdown.style.display = "block";
      signinSignupVisibility.style.display = "none";
    } else {
      // User is not signed in, so hide the "Profile" option
      profileDropdown.style.display = "none";
      signinSignupVisibility.style.display = "block";
    }
  });
}

// signout function

const signOutButton = document.getElementById("sign-out-btn");

// Add a click event listener to the sign-out button
signOutButton.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      alert("User signed out");
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
});
