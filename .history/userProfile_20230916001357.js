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
const database = firebase.database();

document.addEventListener("DOMContentLoaded", function () {
  // Find elements with the class "my-class"
  window.onload = onwindowLoading;
});

// if u reload you window then it will fetch data from firebase of project and set the data to profile
function onwindowLoading() {
  firebase.auth().onAuthStateChanged((users) => {
    if (users) {
      const user = firebase.auth().currentUser;

      if (user) {
        const userId = user.uid;
        const userRef = firebase.database().ref("users/UserProfile/" + userId);

        userRef
          .once("value")
          .then(function (snapshot) {
            const userData = snapshot.val();

            if (userData && userData.title) {
              let projectTitle = userData.title;
              let collegeName = userData.institution;
              let date = userData.completionDate;
              let description = userData.description;

              const academicsList = document.getElementById("academics-list");
              const newItem = document.createElement("li");
              newItem.innerHTML = `
                <h3>${projectTitle}</h3>
                <p>${collegeName}</p>
                <p>Completed: ${date}</p>
                <p>Description: ${description}</p>
                `;

              academicsList.appendChild(newItem);
            }
          })
          .catch(function (error) {
            alert(error.message);
          });
      }
    }
  });
}




// if u add project manually then it will store data on firebase of project
const addProjectManually = document.getElementById("add-academic-button");
addProjectManually.addEventListener("click",addProjectManuallyFun);

function addProjectManuallyFun() {
  //const addAcademicButton = document.getElementById("add-academic-button");
  const closeAcademicModalbtn = document.querySelector(".close-button");
  const academicModal = document.getElementById("add-academic-modal");

  closeAcademicModalbtn.addEventListener("click", closeAcademicModal);

  // Function to open the academic/project modal
  academicModal.style.display = "block";
 

  // Function to close the academic/project modal
  function closeAcademicModal() {
    academicModal.style.display = "none";
  }

  const academicForm = document.getElementById("academic-form");
  academicForm.addEventListener("submit", addAcademicEntry);

  // Function to add a new academic/project entry
  function addAcademicEntry(event) {
    event.preventDefault();

    // Retrieve values from the form
    const title = document.getElementById("title").value;
    const institution = document.getElementById("institution").value;
    const completionDate = document.getElementById("completion-date").value;
    const description = document.getElementById("description").value;

    // // Clear the form fields
    // academicForm.reset();

    // // Close the modal
    // closeAcademicModal();
  

    // firstly adding data to firebase after that show data from firebase on profile
    addDataToFirebase(title, institution, completionDate, description);

    // Clear the form fields
    academicForm.reset();

   

    // fetching the user project details from firebase and set to user profile
    firebase.auth().onAuthStateChanged(function (users) {
      if (users) {
        const user = firebase.auth().currentUser;

        if (user) {
          const userId = user.uid;
          const userRef = firebase
            .database()
            .ref("users/UserProfile/" + userId);

          userRef
            .once("value")
            .then(function (snapshot) {
              const userData = snapshot.val();

              if (userData && userData.title) {
                // Display the user's name
                alert(userData.title);
                let projectTitle = userData.title;
                let collegeName = userData.institution;
                let date = userData.completionDate;
                let description = userData.description;

                

                const academicsList = document.getElementById("academics-list");
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                <h3>${projectTitle}</h3>
                <p>${collegeName}</p>
                <p>Completed: ${date}</p>
                <p>Description: ${description}</p>
                `;

                academicsList.appendChild(newItem);

              }
            })
            .catch(function (error) {
              alert(error.message);
            });
        }
      }
    });

     // Close the modal
     closeAcademicModal();

  }
}



// Adding project details to firebase

function addDataToFirebase(title, institution, completionDate, description) {
  // const user = firebase.auth().currentUser;
  alert("adding data to firebase")
  const user = firebase.auth().currentUser;
const uid = user.uid;
const db = firebase.database();
const projectRef = db.ref(`users/${uid}/profile/project`);


const initialProjectData = {
  project1: {
    name: 'Project 1',
    description: 'Description for Project 1',
  },
  project2: {
    name: 'Project 2',
    description: 'Description for Project 2',
  },
  // Add more projects as needed
};

projectRef.set(initialProjectData)
  .then(() => {
    console.log('Node created successfully');
  })
  .catch((error) => {
    console.error('Error creating node:', error);
  });


  // const userData = {
  //   title: title,
  //   institution: institution,
  //   completionDate: completionDate,
  //   description: description,

  //   // Other user data fields
  // };

  // if (user) {
  //   // Use the user's UID as the key to store the data
  //   firebase
  //     .database()
  //     .ref("users/UserProfile/" + user.uid)
  //     .set(userData)
  //     .then(() => {
  //       // User data added to the database
  //     })
  //     .catch((error) => {
  //       // Handle database write errors
  //       alert(error);
  //     });
  // }
}






