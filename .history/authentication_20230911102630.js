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




ser data under a 'users' node using the user's unique UID
      database.ref('users/' + user.uid).set(userData)
        .then(() => {
          
          alert("User data stored in the database.");
          // You can redirect to a different page or perform other actions here.
        })
        .catch((error) => {
          
          alert(error);
        });
    }
    )
    .catch((error) => {
      
      alert(error);
    });
  
  }



// Forgot Function'

const btn=document.getElementById("reset");
  
  
  
  btn.addEventListener("click", forgot);

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

