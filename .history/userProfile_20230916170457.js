const firebaseConfig = {
  // Your Firebase config object
  apiKey: "AIzaSyApbzbE0U8-8blkB0L5LUxZV1mHDPmWC5k",
  authDomain: "job-finder-63ccf.firebaseapp.com",
  projectId: "job-finder-63ccf",
  storageBucket: "job-finder-63ccf.appspot.com",
  messagingSenderId: "338104523235",
  appId: "1:338104523235:web:dacf515e97448ffd4da8d6",
};

// firebase.initializeApp(firebaseConfig);

// document.addEventListener("DOMContentLoaded", function () {
//   // Find elements with the class "my-class"
//   window.onload = onwindowLoading;
// });

// if u reload you window then it will fetch data from firebase of project and set the data to profile
// function onwindowLoading() {
//   firebase.auth().onAuthStateChanged(function (users) {
//     if (users) {
//       const user = firebase.auth().currentUser;
//       const db = firebase.database();

//       if (user) {
//         const projectRef = db.ref(`users/${uid}/profile/project`);

//         // Retrieve the projects
//         projectRef
//           .once("value")
//           .then((snapshot) => {
//             const projectsData = snapshot.val();

//             // Check if there are projects
//             if (projectsData) {
//               // Iterate through the projects and display them
//               for (const projectId in projectsData) {
//                 if (projectsData.hasOwnProperty(projectId)) {
//                   const project = projectsData[projectId];

//                   // Create HTML elements to display the project data

//                   const academicsList =
//                     document.getElementById("academics-list");
//                   const newItem = document.createElement("li");
//                   newItem.innerHTML = `
//                   <h3>${project.title}</h3>
//                   <p>${project.institution}</p>
//                   <p>Completed: ${project.completionDate}</p>
//                   <p>Description: ${project.description}</p>
//                   `;

//                   academicsList.appendChild(newItem);
//                 }
//               }
//             } else {
//               // Handle the case where there are no projects to display
//               const projectSection = document.getElementById("project-section");
//               projectSection.innerHTML = "<p>No projects found.</p>";
//             }
//           })
//           .catch((error) => {
//             console.error("Error fetching projects:", error);
//           });
//       }
//     }
//   });
// }

// if u add project manually then it will store data on firebase of project



// const closeAcademicModalbtn = document.querySelector(".close-button");
// const academicModal = document.getElementById("add-academic-modal");
// closeAcademicModalbtn.addEventListener("click", closeAcademicModal);
// const academicForm = document.getElementById("academic-form");
// const addProjectManually = document.getElementById("add-academic-button");
// addProjectManually.addEventListener("click", addProjectManuallyFun);

// function addProjectManuallyFun() {
//   academicModal.style.display = "block";

//   academicForm.addEventListener("submit", (event) => {
//     addAcademicEntry(event);
//     displayUserProjects(); // Refresh the projects list
//   });
// }

// function addAcademicEntry(event) {
//   event.preventDefault();

//   // Retrieve values from the form
//   const title = document.getElementById("title").value;
//   const institution = document.getElementById("institution").value;
//   const completionDate = document.getElementById("completion-date").value;
//   const description = document.getElementById("description").value;

//   const user = firebase.auth().currentUser;
//   const uid = user.uid;
//   const db = firebase.database();
//   const projectRef = db.ref(`users/${uid}/profile/project`);

//   const newProject = {
//     title: title,
//     institution: institution,
//     completionDate: completionDate,
//     description: description,
//     // Add other project-related data as needed
//   };

//   // Push the new project to the user's project list
//   const newProjectRef = projectRef.push();

//   newProjectRef
//     .set(newProject)
//     .then(() => {
//       console.log("Project added successfully");
//       academicForm.reset();
//       console.log("closing");
//       closeAcademicModal();
//     })
//     .catch((error) => {
//       console.error("Error adding project:", error);
//     });
// }

// // Fetch and display the user's projects after adding a project
// function displayUserProjects() {
//   const user = firebase.auth().currentUser;
//   const uid = user.uid;
//   const db = firebase.database();
//   const projectRef = db.ref(`users/${uid}/profile/project`);
//   const academicsList = document.getElementById("academics-list");

//   projectRef
//     .once("value")
//     .then((snapshot) => {
//       academicsList.innerHTML = ""; // Clear existing projects
//       const projectsData = snapshot.val();

//       if (projectsData) {
//         for (const projectId in projectsData) {
//           if (projectsData.hasOwnProperty(projectId)) {
//             const project = projectsData[projectId];

//             // Create HTML elements to display the project data
//             const newItem = document.createElement("li");
//             newItem.innerHTML = `
//               <h3>${project.title}</h3>
//               <p>${project.institution}</p>
//               <p>Completed: ${project.completionDate}</p>
//               <p>Description: ${project.description}</p>
//             `;

//             academicsList.appendChild(newItem);
//           }
//         }
//       } else {
//         // Handle the case where there are no projects to display
//         academicsList.innerHTML = "<p>No projects found.</p>";
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching projects:", error);
//     });
// }

// // Function to close the academic/project modal
// function closeAcademicModal() {
//   academicModal.style.display = "none";
// }



//**************** */


function addAcademicEntry(event) {
  event.preventDefault();

  // Retrieve values from the form
  const title = document.getElementById("title").value;
  const institution = document.getElementById("institution").value;
  const completionDate = document.getElementById("completion-date").value;
  const description = document.getElementById("description").value;

  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/project`);

  const newProject = {
    title: title,
    institution: institution,
    completionDate: completionDate,
    description: description,
    // Add other project-related data as needed
  };

  // Push the new project to the user's project list
  const newProjectRef = projectRef.push();
  
  newProjectRef
    .set(newProject)
    .then(() => {
      console.log("Project added successfully");

      // Clear the form fields
      academicForm.reset();
      // Close the modal
      closeAcademicModal();
    })
    .catch((error) => {
      console.error("Error adding project:", error);
    });
}

// Fetch and display the user's projects after adding a project
function displayUserProjects() {
  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/project`);
  const academicsList = document.getElementById("academics-list");

  projectRef
    .once("value")
    .then((snapshot) => {
      academicsList.innerHTML = ''; // Clear existing projects
      const projectsData = snapshot.val();

      if (projectsData) {
        for (const projectId in projectsData) {
          if (projectsData.hasOwnProperty(projectId)) {
            const project = projectsData[projectId];

            // Create HTML elements to display the project data
            const newItem = document.createElement("li");
            newItem.innerHTML = `
              <h3>${project.title}</h3>
              <p>${project.institution}</p>
              <p>Completed: ${project.completionDate}</p>
              <p>Description: ${project.description}</p>
            `;

            academicsList.appendChild(newItem);
          }
        }
      } else {
        // Handle the case where there are no projects to display
        academicsList.innerHTML = "<p>No projects found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
    });
}

// Add an event listener to call displayUserProjects after successful project addition
academicForm.addEventListener("submit", (event) => {
  addAcademicEntry(event);
  displayUserProjects(); // Refresh the projects list
});
