
  




//   document.addEventListener("DOMContentLoaded", function () {
//     // Find elements with the class "my-class"
//     window.onload = userAuthFun();
//   });

//  function userAuthFun(){

//   }


function rzpPaymentFun(){

};








  document.getElementById("webPurchaseBtn").addEventListener('click',function(){
    firebase.auth().onAuthStateChanged(function (users) {
       
        if (users) {
            rzpPaymentFun();
            
        } else {
            console.log("user is not authenticated");
            window.location.href = 'signUp.html';
        }

  })
});
