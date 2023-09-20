

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
  
  
  const btn=document.getElementById("signinbtn");
  
  
  
  btn.addEventListener("click", signIn);










function signIn() {

    let email="raushan4@gmail.com";
    let password="Deepak@02";
    let name="Raushan Kumar";
    // var name = document.getElementById("name").value;
    alert(email);
     alert(name);
    alert(password);

    firebase.auth()
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