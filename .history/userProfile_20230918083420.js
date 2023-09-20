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
  window.onload = function () {
    projectOnloadFun();
    skillsOnloadFun();
    educationOnloadFun();
    experienceOnLoadFun();
  };
});

function experienceOnLoadFun() {
  firebase.auth().onAuthStateChanged(function (users) {
    if (users) {
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      const db = firebase.database();
      const projectRef = db.ref(`users/${uid}/profile/experience`);
      const experienceList = document.getElementById("experience-list");

      projectRef
        .once("value")
        .then((snapshot) => {
          experienceList.innerHTML = ""; // Clear existing projects
          const projectsData = snapshot.val();

          if (projectsData) {
            for (const projectId in projectsData) {
              if (projectsData.hasOwnProperty(projectId)) {
                const project = projectsData[projectId];

                // Create HTML elements to display the project data
                const newItem = document.createElement("li");
                newItem.innerHTML = `
              
              <h3>${project.role}</h3>
              <p>Company Name: ${project.company}</p>
              <p>Duration-Date: ${project.durationDate}</p>
            
            `;

            experienceList.appendChild(newItem);
              }
            }
          } else {
            // Handle the case where there are no projects to display
          }
        })
        .catch((error) => {
          console.error("Error fetching experience:", error);
        });
    }
  });
}

function educationOnloadFun() {
  firebase.auth().onAuthStateChanged(function (users) {
    if (users) {
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      const db = firebase.database();
      const projectRef = db.ref(`users/${uid}/profile/education`);
      const educationList = document.getElementById("education-list");

      projectRef
        .once("value")
        .then((snapshot) => {
          educationList.innerHTML = ""; // Clear existing projects
          const projectsData = snapshot.val();

          if (projectsData) {
            for (const projectId in projectsData) {
              if (projectsData.hasOwnProperty(projectId)) {
                const project = projectsData[projectId];

                // Create HTML elements to display the project data
                const newItem = document.createElement("li");
                newItem.innerHTML = `
              
              <h3>${project.levelOrStandard}</h3>
              <p>University: ${project.university}</p>
              <p>Completed: ${project.completionDate}</p>
            
            `;

                educationList.appendChild(newItem);
              }
            }
          } else {
            // Handle the case where there are no projects to display
            educationList.innerHTML = "<p>No education found.</p>";
          }
        })
        .catch((error) => {
          console.error("Error fetching education:", error);
        });
    }
  });
}

function projectOnloadFun() {
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

function skillsOnloadFun() {
  firebase.auth().onAuthStateChanged(function (users) {
    if (users) {
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      const db = firebase.database();
      const projectRef = db.ref(`users/${uid}/profile/skills`);
      const skillsList = document.getElementById("skills-list");

      projectRef
        .once("value")
        .then((snapshot) => {
          skillsList.innerHTML = ""; // Clear existing projects
          const projectsData = snapshot.val();

          if (projectsData) {
            for (const projectId in projectsData) {
              if (projectsData.hasOwnProperty(projectId)) {
                const project = projectsData[projectId];

                // Create HTML elements to display the project data
                const newItem = document.createElement("li");
                newItem.innerHTML = `
               <p>${project.skills}</p>
            `;

                skillsList.appendChild(newItem);
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
const academicformResetBtn = document.getElementById("academic-form");
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

const skillsAddBtn = document.getElementById("skillsAddBtn");
const skillsModalCloseBtn = document.getElementById("skillsCloseBtn");
const skillsFormReset = document.getElementById("skills-form");
const addSkillsModal = document.getElementById("add-skills-modal");
const skillsFormSubmitBtn = document.getElementById("skillsFormSubmitBtn");

skillsAddBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addSkillsModal.style.display = "block";
});

skillsModalCloseBtn.addEventListener("click", function () {
  closeSkillsModal();
});

function closeSkillsModal() {
  addSkillsModal.style.display = "none";
  skillsFormReset.reset();
}

skillsFormSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  addSkillsEntry(event);
  displaySkills();
  closeSkillsModal();
});

function addSkillsEntry(event) {
  event.preventDefault();
  const skills = document.getElementById("skills1").value;

  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/skills`);

  const newProject = {
    skills: skills,
  };

  // Push the new project to the user's project list
  const newProjectRef = projectRef.push();

  newProjectRef
    .set(newProject)
    .then(() => {
      console.log("Skills added successfully");
    })
    .catch((error) => {
      console.error("Error adding skills:", error);
    });
}

function displaySkills() {
  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/skills`);
  const skillsList = document.getElementById("skills-list");

  projectRef
    .once("value")
    .then((snapshot) => {
      skillsList.innerHTML = ""; // Clear existing projects
      const projectsData = snapshot.val();

      if (projectsData) {
        for (const projectId in projectsData) {
          if (projectsData.hasOwnProperty(projectId)) {
            const project = projectsData[projectId];

            // Create HTML elements to display the project data
            const newItem = document.createElement("li");
            newItem.innerHTML = `
            <p>${project.skills}</p>
            `;

            skillsList.appendChild(newItem);
          }
        }
      } else {
        // Handle the case where there are no projects to display
        skillsList.innerHTML = "<p>No skills found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching skills:", error);
    });
}

//Add more education code

const educationAddBtn = document.getElementById("educationAddBtn");
const educationModalCloseBtn = document.getElementById("educationCloseBtn");
const educationFormReset = document.getElementById("education-form");
const addEducationModal = document.getElementById("add-education-modal");
const educationFormSubmitBtn = document.getElementById("educationFormSubmitBtn");

educationAddBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addEducationModal.style.display = "block";
});

educationModalCloseBtn.addEventListener("click", function () {
  closeEducationModal();
});

function closeEducationModal() {
  addEducationModal.style.display = "none";
  educationFormReset.reset();
}

educationFormSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  addEducationEntry(event);
  displayEducation();
  closeEducationModal();
});

function addEducationEntry(event) {
  event.preventDefault();

  // Retrieve values from the form
  const levelOrStandard = document.getElementById("levelOrStandard").value;
  const university = document.getElementById("university").value;
  const completionDate = document.getElementById("completion-date").value;

  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/education`);

  const newProject = {
    levelOrStandard: levelOrStandard,
    university: university,
    completionDate: completionDate,
  };

  // Push the new project to the user's project list
  const newProjectRef = projectRef.push();

  newProjectRef
    .set(newProject)
    .then(() => {
      console.log("Skills added successfully");
    })
    .catch((error) => {
      console.error("Error adding skills:", error);
    });
}

function displayEducation() {
  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/education`);
  const skillsList = document.getElementById("education-list");

  projectRef
    .once("value")
    .then((snapshot) => {
      skillsList.innerHTML = ""; // Clear existing projects
      const projectsData = snapshot.val();

      if (projectsData) {
        for (const projectId in projectsData) {
          if (projectsData.hasOwnProperty(projectId)) {
            const project = projectsData[projectId];

            // Create HTML elements to display the project data
            const newItem = document.createElement("li");
            newItem.innerHTML = `
              
              <h3>${project.levelOrStandard}</h3>
              <p>University: ${project.university}</p>
              <p>Completed: ${project.completionDate}</p>
            
            `;

            skillsList.appendChild(newItem);
          }
        }
      } else {
        // Handle the case where there are no projects to display
        skillsList.innerHTML = "<p>No education found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching education:", error);
    });
}

//Add more experience code

const experienceAddBtn = document.getElementById("experienceAddBtn");
const experienceCloseBtn = document.getElementById("experienceCloseBtn");
const experienceFormReset = document.getElementById("experience-form");
const addExperienceModal = document.getElementById("add-experience-modal");
const experienceFormSubmitBtn = document.getElementById("experienceFormSubmitBtn");

experienceAddBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addExperienceModal.style.display = "block";
});

educationModalCloseBtn.addEventListener("click", function () {
  closeExperienceModal();
});

function closeExperienceModal() {
  addExperienceModal.style.display = "none";
  experienceFormReset.reset();
}

experienceFormSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addExperienceEntry(event);
  displayExperience();
  closeExperienceModal();
});

function addExperienceEntry(event) {
  event.preventDefault();
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const durationDate = document.getElementById("duration-date").value;

  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/experience`);

  const newProject = {
    role: role,
    company: company,
    durationDate: durationDate,
  };

  // Push the new project to the user's project list
  const newProjectRef = projectRef.push();

  newProjectRef
    .set(newProject)
    .then(() => {
      console.log("Experience added successfully");
    })
    .catch((error) => {
      console.error("Error adding experience:", error);
    });
}

function displayExperience() {
  const user = firebase.auth().currentUser;
  const uid = user.uid;
  const db = firebase.database();
  const projectRef = db.ref(`users/${uid}/profile/experience`);
  const experienceList = document.getElementById("experience-list");

  projectRef
    .once("value")
    .then((snapshot) => {
      experienceList.innerHTML = ""; // Clear existing projects
      const projectsData = snapshot.val();

      if (projectsData) {
        for (const projectId in projectsData) {
          if (projectsData.hasOwnProperty(projectId)) {
            const project = projectsData[projectId];

            // Create HTML elements to display the project data
            const newItem = document.createElement("li");
            newItem.innerHTML = `
              
              <h3>${project.role}</h3>
              <p>Company Name: ${project.company}</p>
              <p>Duration-Date: ${project.durationDate}</p>
            
            `;

            experienceList.appendChild(newItem);
          }
        }
      } else {
        // Handle the case where there are no projects to display
      }
    })
    .catch((error) => {
      console.error("Error fetching experience:", error);
    });
}



// Ressu,

const resumeUploadForm = document.getElementById("resume-upload-form");
  const resumeFileInput = document.getElementById("resume-file");

const resume=document.getElementById("resume-upload-form");
resume.addEventListener("click",function(event){

 event.preventDefault();
  const file = resumeFileInput.files[0];
  if (file) {
    // You can upload the file to the server using AJAX or fetch
    // Here, we'll just display a message to indicate successful upload
    alert(`Resume uploaded: ${file.name}`);
  } else {
    alert("Please select a valid resume file.");
  }
});

