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
     var  = document.getElementById("email").value;
     var name = document.getElementById("password").value;

    alert(email);
     alert(name);
    alert(password);
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully, now store additional data in the database
      alert("Account Created")
      const user = userCredential.user;
      
      // Define the data to be stored in the database
      const userData = {
        name: name,
        email: email,
        password: password
      };
      
      // Reference to the Firebase Realtime Database
      const database = firebase.database();
      
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
  
  }