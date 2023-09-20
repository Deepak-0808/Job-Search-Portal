src="https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js"
src="https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js"
    
        // Firebase Configuration
        var firebaseConfig = {
            // Your Firebase configuration here
            apiKey: "AIzaSyApbzbE0U8-8blkB0L5LUxZV1mHDPmWC5k",
            authDomain: "job-finder-63ccf.firebaseapp.com",
            projectId: "job-finder-63ccf",
            storageBucket: "job-finder-63ccf.appspot.com",
            messagingSenderId: "338104523235",
            appId: "1:338104523235:web:dacf515e97448ffd4da8d6",
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

