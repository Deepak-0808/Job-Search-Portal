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
  

  const btn=document.getElementById("signupbtn");



  btn.addEventListener("click", signUp);


function signUp() {

    
     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;

    alert(email);
    alert(name);
    alert(password);
  
    /÷
  
  }