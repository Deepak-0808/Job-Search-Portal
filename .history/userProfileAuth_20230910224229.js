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

document
  .getElementById("jobSavebtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    // Your custom code here
    alert("jobsavebtn clicked");
    firebase.auth().onAuthStateChanged(function (users) {
      if (users) {
        // User is signed in
        alert(users.email);
        console.log("User is signed in:", users.email);
      } else {
        // User is not signed in
        console.log("User is not signed in");
      }
    });
  });
