// const firebaseConfig = {
//   // Your Firebase config object
//   apiKey: "AIzaSyApbzbE0U8-8blkB0L5LUxZV1mHDPmWC5k",
//   authDomain: "job-finder-63ccf.firebaseapp.com",
//   projectId: "job-finder-63ccf",
//   storageBucket: "job-finder-63ccf.appspot.com",
//   messagingSenderId: "338104523235",
//   appId: "1:338104523235:web:dacf515e97448ffd4da8d6",
// };

// firebase.initializeApp(firebaseConfig);



// document.addEventListener("DOMContentLoaded", function () {
//   window.onload = function () {
//     projectOnloadFun();
//     skillsOnloadFun();
//   };
// });




// function projectOnloadFun() {
//   firebase.auth().onAuthStateChanged(function (users) {
//     if (users) {
//       const user = firebase.auth().currentUser;
//       const uid = user.uid;
//       const db = firebase.database();
//       const projectRef = db.ref(`users/${uid}/profile/project`);
//       const academicsList = document.getElementById("academics-list");

//       projectRef
//         .once("value")
//         .then((snapshot) => {
//           academicsList.innerHTML = ""; // Clear existing projects
//           const projectsData = snapshot.val();

//           if (projectsData) {
//             for (const projectId in projectsData) {
//               if (projectsData.hasOwnProperty(projectId)) {
//                 const project = projectsData[projectId];

//                 // Create HTML elements to display the project data
//                 const newItem = document.createElement("li");
//                 newItem.innerHTML = `
//               <h3>${project.title}</h3>
//               <p>${project.institution}</p>
//               <p>Completed: ${project.completionDate}</p>
//               <p>Description: ${project.description}</p>
//             `;

//                 academicsList.appendChild(newItem);
//               }
//             }
//           } else {
//             // Handle the case where there are no projects to display
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching projects:", error);
//         });
//     }
//   });
// }


// function skillsOnloadFun(){
//   firebase.auth().onAuthStateChanged(function (users) {
//     if (users) {
//       const user = firebase.auth().currentUser;
//       const uid = user.uid;
//       const db = firebase.database();
//       const projectRef = db.ref(`users/${uid}/profile/skills`);
//       const skillsList = document.getElementById("skills-list");

//       projectRef
//         .once("value")
//         .then((snapshot) => {
//           skillsList.innerHTML = ""; // Clear existing projects
//           const projectsData = snapshot.val();

//           if (projectsData) {
//             for (const projectId in projectsData) {
//               if (projectsData.hasOwnProperty(projectId)) {
//                 const project = projectsData[projectId];

//                 // Create HTML elements to display the project data
//                 const newItem = document.createElement("li");
//                 newItem.innerHTML = `
//                <p>${project.skills}</p>
//             `;

//             skillsList.appendChild(newItem);
//               }
//             }
//           } else {
//             // Handle the case where there are no projects to display
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching projects:", error);
//         });
//     }
//   });

// }





// const closeAcademicModalbtn = document.querySelector(".close-button");
// const academicformResetBtn=document.getElementById("academic-form");
// closeAcademicModalbtn.addEventListener("click", closeAcademicModal);
// const academicForm = document.getElementById("formSubmitBtn");
// const academicModal = document.getElementById("add-academic-modal");
// const openAcademicModal = document.getElementById("add-academic-button");
// openAcademicModal.addEventListener("click", openAcademicModalFun);

// function openAcademicModalFun() {
//   academicModal.style.display = "block";
// }

// function closeAcademicModal() {
//   academicModal.style.display = "none";
//   academicformResetBtn.reset();
// }




// academicForm.addEventListener("click", function (event) {
//   addAcademicEntry(event);
//   displayUserProjects();
//   closeAcademicModal();
// });

// function addAcademicEntry(event) {
//   // event.preventDefault();

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






// //Add more skills code


// const skillsAddBtn = document.getElementById("skillsAddBtn");
// const skillsModalCloseBtn = document.getElementById("skillsCloseBtn");
// const skillsFormReset=document.getElementById("skills-form");
// const addSkillsModal= document.getElementById("add-skills-modal");
// const skillsFormSubmitBtn = document.getElementById("skillsFormSubmitBtn");



// skillsAddBtn.addEventListener("click",function(event){
//   event.preventDefault();
//   addSkillsModal.style.display = "block";

// });

// skillsModalCloseBtn.addEventListener("click",function(){
//   closeSkillsModal();
// });

// function closeSkillsModal() {
//   addSkillsModal.style.display = "none";
//   skillsFormReset.reset();
// }


// skillsFormSubmitBtn.addEventListener("click",function(event){
//   event.preventDefault();
  
//   addSkillsEntry(event);
  
//   displaySkills();
//   closeSkillsModal();
//   console.log("calling");

// });


// function addSkillsEntry(event) {
//   event.preventDefault();

//   // Retrieve values from the form
//   const skills = document.getElementById("skills1").value;
//   console.log(skills);

//   const user = firebase.auth().currentUser;
//   const uid = user.uid;
//   const db = firebase.database();
//   const projectRef = db.ref(`users/${uid}/profile/skills`);

//   const newProject = {
//     skills: skills,
//   };

//   // Push the new project to the user's project list
//   const newProjectRef = projectRef.push();

//   newProjectRef
//     .set(newProject)
//     .then(() => {
//       console.log("Skills added successfully");
//     })
//     .catch((error) => {
//       console.error("Error adding skills:", error);
      
//     });
// }



// function displaySkills() {
//   const user = firebase.auth().currentUser;
//   const uid = user.uid;
//   const db = firebase.database();
//   const projectRef = db.ref(`users/${uid}/profile/skills`);
//   const skillsList = document.getElementById("skills-list");

//   projectRef
//     .once("value")
//     .then((snapshot) => {
//       skillsList.innerHTML = ""; // Clear existing projects
//       const projectsData = snapshot.val();

//       if (projectsData) {
//         for (const projectId in projectsData) {
//           if (projectsData.hasOwnProperty(projectId)) {
//             const project = projectsData[projectId];

//             // Create HTML elements to display the project data
//             const newItem = document.createElement("li");
//             newItem.innerHTML = `
              
//               <p>${project.skills}</p>
            
//             `;

//             skillsList.appendChild(newItem);
//           }
//         }
//       } else {
//         // Handle the case where there are no projects to display
//         skillsList.innerHTML = "<p>No skills found.</p>";
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching skills:", error);
//     });
// }











// Firebase configuration
const firebaseConfig = {
  // Your Firebase config object
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    loadDataAndDisplay("project", "academics-list", addAcademicEntry, displayUserProjects);
    loadDataAndDisplay("skills", "skills-list", addSkillsEntry, displaySkills);
  };
});

// Function to add an entry (either academic project or skills)
function addEntry(dataType, data, successCallback, errorCallback) {
  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/${dataType}`);

  // Push the new data entry
  const newEntryRef = projectRef.push();

  newEntryRef
    .set(data)
    .then(() => {
      console.log(`${dataType} added successfully`);
      if (typeof successCallback === "function") {
        successCallback();
      }
    })
    .catch((error) => {
      console.error(`Error adding ${dataType}:`, error);
      if (typeof errorCallback === "function") {
        errorCallback();
      }
    });
}

// Function to display entries (either academic projects or skills)
function displayEntries(dataType, listId, renderItemCallback, emptyMessage = "No entries found.") {
  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const entryRef = db.ref(`users/${uid}/profile/${dataType}`);
  const list = document.getElementById(listId);

  entryRef
    .once("value")
    .then((snapshot) => {
      list.innerHTML = ""; // Clear existing entries
      const entriesData = snapshot.val();

      if (entriesData) {
        for (const entryId in entriesData) {
          if (entriesData.hasOwnProperty(entryId)) {
            const entry = entriesData[entryId];
            const newItem = renderItemCallback(entry);
            list.appendChild(newItem);
          }
        }
      } else {
        // Handle the case where there are no entries to display
        list.innerHTML = `<p>${emptyMessage}</p>`;
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${dataType}:`, error);
    });
}

// Function to create an HTML element for an academic project or skill
function renderEntry(entry) {
  const newItem = document.createElement("li");

  // Customize the rendering based on the entry structure
  if ("title" in entry && "institution" in entry && "completionDate" in entry && "description" in entry) {
    newItem.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.institution}</p>
      <p>Completed: ${entry.completionDate}</p>
      <p>Description: ${entry.description}</p>
    `;
  } else if ("skills" in entry) {
    newItem.innerHTML = `<p>${entry.skills}</p>`;
  }

  return newItem;
}

// Function to load data and display it
function loadDataAndDisplay(dataType, listId, addEntryCallback, displayCallback) {
  const addButton = document.getElementById(`add-${dataType}-button`);
  const modalCloseButton = document.getElementById(`close-${dataType}-modal`);
  const modalResetButton = document.getElementById(`reset-${dataType}-form`);
  const modal = document.getElementById(`add-${dataType}-modal`);
  const formSubmitButton = document.getElementById(`formSubmitBtn-${dataType}`);

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
  });

  modalCloseButton.addEventListener("click", function () {
    closeEntryModal(modal, modalResetButton);
  });

  modalResetButton.addEventListener("click", function () {
    closeEntryModal(modal, modalResetButton);
  });

  formSubmitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const formData = gatherFormData(dataType);
    addEntryCallback(dataType, formData, () => {
      displayCallback(dataType, listId, renderEntry);
      closeEntryModal(modal, modalResetButton);
    });
  });

  displayCallback(dataType, listId, renderEntry);
}

// Function to gather form data for academic projects or skills
function gatherFormData(dataType) {
  const formData = {};

  // Customize this function to gather data from your form based on the data type
  if (dataType === "project") {
    formData.title = document.getElementById("title").value;
    formData.institution = document.getElementById("institution").value;
    formData.completionDate = document.getElementById("completion-date").value;
    formData.description = document.getElementById("description").value;
  } else if (dataType === "skills") {
    formData.skills = document.getElementById("skills1").value;
  }

  return formData;
}

// Function to close an entry modal and reset the form
function closeEntryModal(modal, formResetButton) {
  modal.style.display = "none";
  formResetButton.reset();
}

