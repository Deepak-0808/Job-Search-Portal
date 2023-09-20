<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firebase Authentication</title>
</head>
<body>
    <h1>Sign Up / Sign In</h1>
    <form id="auth-form">
        <label for="email">Email:</label>
        <input type="email" id="email" required><br>

        <label for="password">Password:</label>
        <input type="password" id="password" required><br>

        <button type="submit" id="signup-button">Sign Up</button>
        <button type="submit" id="signin-button">Sign In</button>
    </form>

    <script src="https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js"></script>
    <script>
        // Firebase Configuration
        var firebaseConfig = {
            // Your Firebase configuration here
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // Sign Up Function
        function signUp(email, password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // User signed up successfully
                    var user = userCredential.user;
                    console.log("User signed up:", user.email);
                })
                .catch((error) => {
                    // Handle sign-up errors
                    console.error("Sign-up error:", error.message);
                });
        }

        // Sign In Function
        function signIn(email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // User signed in successfully
                    var user = userCredential.user;
                    console.log("User signed in:", user.email);
                })
                .catch((error) => {
                    // Handle sign-in errors
                    console.error("Sign-in error:", error.message);
                });
        }

        // Form Submit Handler
        document.getElementById("auth-form").addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the form from submitting

            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Check which button was clicked and call the corresponding function
            if (e.submitter.id === "signup-button") {
                signUp(email, password);
            } else if (e.submitter.id === "signin-button") {
                signIn(email, password);
            }
        });
    </script>
</body>
</html>
