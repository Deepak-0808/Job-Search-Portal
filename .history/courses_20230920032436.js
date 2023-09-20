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

const apiKey = "rzp_test_gVKmWWGcUR24wn";

function rzpPaymentFun(name, email) {
  // Define the course price in paise (e.g., 1000 paise = ₹10)
  const coursePrice = 200000;

  const options = {
    key: apiKey,
    amount: coursePrice,
    name: "Online Courses",
    description: "Course Purchase",
    handler: function (response) {
      // Handle the successful payment response here
      console.log("Payment successful");

      // You can also send the payment response to your server for verification and order completion

      // For testing, you can redirect the user to a thank-you page
      window.location.href = 'index.html';
    },
    prefill: {
      name: name,
      email: email,
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
}




document.getElementById("webPurchaseBtn").addEventListener("click", function () {
    firebase.auth().onAuthStateChanged(function (users) {
      if (users) {
        const user = firebase.auth().currentUser;

        if (user) {
          const userId = user.uid;
          const userRef = firebase.database().ref("users/" + userId);
          userRef.once("value").then(function (snapshot) {
              const userData = snapshot.val();

              if (userData &&userData.name &&userData.email) {
                // Calling razorpay payment function
                
                rzpPaymentFun(userData.name, userData.email);
              } else {
                console.log("User data not found");
                
              }
            })
            .catch(function (error) {
              alert(error.message);
            });
        }
        
      } else {
        alert("Please create your account");
        window.location.href = "signUp.html";
      }
    });
  });



  // store a