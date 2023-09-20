
  // Replace with your actual Razorpay API Key
  const apiKey = 'rzp_test_gVKmWWGcUR24wn';

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

  // Initialize Razorpay
  const rzp = new Razorpay(options);

  // Add a click event listener to the purchase button
  document.getElementById('webPurchaseBtn').addEventListener('click', function () {
    // Open the Razorpay payment dialog when the button is clicked
    
    rzp.open();
  });




  const authBtn=document.