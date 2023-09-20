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


   window.onload = userAuthFun;

  function userAuthFun(){
    firebase.auth().onAuthStateChanged(function (users) {
        const profileDropdown = document.getElementById("profile-dropdown");
        const signinSignupVisibility = document.querySelector("signIn-signup-visibility");
                                        
        if (users) {
          // User is signed in, so display the "Profile" option
          profileDropdown.style.display = "block";
          signinSignupVisibility.style.display="none";
        } else {
          // User is not signed in, so hide the "Profile" option
          profileDropdown.style.display = "none";
          signinSignupVisibility.style.display="block";
        }
    });
  }