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

document.addEventListener("DOMContentLoaded", function () {
  // Find elements with the class "my-class"
  window.onload = onwindowLoading;
});


function onwindowLoading() {
  firebase.auth().onAuthStateChanged(function (users) {
    if (users) {
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      const db = firebase.database();
      const projectRef = db.ref(`users/${uid}/profile/project`);
      const academicsList = document.getElementById("academics-list");

      projectRef
        .once("value")
        .then((snapshot) => {
          academicsList.innerHTML = ""; // Clear existing projects
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
          }
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    }
  });
}



const closeAcademicModalbtn = document.querySelector(".close-button");
const academicformResetBtn=document.getElementById("academic-form");
closeAcademicModalbtn.addEventListener("click", closeAcademicModal);
const academicForm = document.getElementById("formSubmitBtn");
const academicModal = document.getElementById("add-academic-modal");
const openAcademicModal = document.getElementById("add-academic-button");
openAcademicModal.addEventListener("click", openAcademicModalFun);

function openAcademicModalFun() {
  academicModal.style.display = "block";
}

function closeAcademicModal() {
  academicModal.style.display = "none";
  academicformResetBtn.reset();
}




academicForm.addEventListener("click", function (event) {
  addAcademicEntry(event);
  displayUserProjects();
  closeAcademicModal();
});

function addAcademicEntry(event) {
  // event.preventDefault();

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
      academicsList.innerHTML = ""; // Clear existing projects
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






//Add more skills code

const skillsModalClosebtn = document.querySelector(".skills-modal-close-btn");
const academicformResetBtn=document.getElementById("academic-form");
closeAcademicModalbtn.addEventListener("click", closeAcademicModal);
const academicForm = document.getElementById("formSubmitBtn");
const academicModal = document.getElementById("add-academic-modal");
const openAcademicModal = document.getElementById("add-academic-button");
openAcademicModal.addEventListener("click", openAcademicModalFun);
