




function signUp() {

    let email="raushan2@gmail.com";
    let password="Deepak@02";
    let name="Raushan Kumar";
    // var name = document.getElementById("name").value;
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