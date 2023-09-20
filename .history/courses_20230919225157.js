
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
//   const auth = firebase.auth();
//   const database = firebase.database(); 




//   document.addEventListener("DOMContentLoaded", function () {
//     // Find elements with the class "my-class"
//     window.onload = userAuthFun();
//   });

//  function userAuthFun(){

//   }
const apiKey = 'rzp_test_gVKmWWGcUR24wn';



function rzpPaymentFun(){

    // Replace with your actual Razorpay API Key
  

  // Initialize Razorpay
  

  
  // Define the course price in paise (e.g., 1000 paise = ₹10)
  const coursePrice = 1000;

  const options = {
    key: apiKey,
    amount: coursePrice,
    name: 'Online Courses',
    description: 'Course Purchase',
    handler: function (response) {
      // Handle the successful payment response here
      console.log('Payment successful:', response);

      // You can also send the payment response to your server for verification and order completion

      // For testing, you can redirect the user to a thank-you page
      // window.location.href = 'thank-you.html';
    },
    prefill: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();

};






  document.getElementById("webPurchaseBtn").addEventListener('click',function(){
    firebase.auth().onAuthStateChanged(function (users) {
       
        if (users) {
            rzpPaymentFun();
            
        } else {
            alert("You are not signed")
            window.location.href = 'signUp.html';
        }

  })
});
