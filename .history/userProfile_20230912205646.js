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
    const editButton = document.getElementById("edit-button");
    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const locationElement = document.getElementById("location");
    const skillsElement = document.getElementById("skills");
    const resumeUploadForm = document.getElementById("resume-upload-form");
    const resumeFileInput = document.getElementById("resume-file");
  
    const addAcademicButton = document.getElementById("add-academic-button");
    const academicModal = document.getElementById("add-academic-modal");
    const closeAcademicModalbtn = document.querySelector(".close-button");
    const academicForm = document.getElementById("academic-form");
  
    // Function to toggle between view and edit modes
    function toggleEditMode() {
      alert("in toggle fun");
      const isEditing = editButton.textContent === "Save";
      if (isEditing) {
        // Save changes
        // You can send updated data to the server here if needed
        editButton.textContent = "Edit Profile";
        usernameElement.contentEditable = false;
        emailElement.contentEditable = false;
        locationElement.contentEditable = false;
        skillsElement.contentEditable = false;
      } else {
        // Enter edit mode
        editButton.textContent = "Save";
        usernameElement.contentEditable = true;
        emailElement.contentEditable = true;
        locationElement.contentEditable = true;
        skillsElement.contentEditable = true;
      }
    }
  
    // Function to handle resume upload
    function uploadResume(e) {
      e.preventDefault();
      const file = resumeFileInput.files[0];
      if (file) {
        // You can upload the file to the server using AJAX or fetch
        // Here, we'll just display a message to indicate successful upload
        alert(`Resume uploaded: ${file.name}`);
      } else {
        alert("Please select a valid resume file.");
      }
    }
  
    // Function to open the academic/project modal
    function openAcademicModal() {
      alert("modal visible");
      academicModal.style.display = "block";
    }
  
    // Function to close the academic/project modal
    function closeAcademicModal() {
      academicModal.style.display = "none";
    }
  
    // Function to add a new academic/project entry
    function addAcademicEntry(event) {
      event.preventDefault();
  
      // Retrieve values from the form
      const title = document.getElementById("title").value;
      const institution = document.getElementById("institution").value;
      const completionDate = document.getElementById("completion-date").value;
      const description = document.getElementById("description").value;
  
      // firstly adding data to firebase after that show data from firebase on profile
  
      addDataToFirebase(title, institution, completionDate, description);
  
      // Create a new list item with the user's input
      const academicsList = document.getElementById("academics-list");
      const newItem = document.createElement("li");
      newItem.innerHTML = `
            <h3>${title}</h3>
            <p>${institution}</p>
            <p>Completed: ${completionDate}</p>
            <p>Description: ${description}</p>
        `;
  
      // Append the new item to the list
      academicsList.appendChild(newItem);
  
      // Clear the form fields
      academicForm.reset();
  
      // Close the modal
      closeAcademicModal();
    }
  
    //Add event listeners
    editButton.addEventListener("click", toggleEditMode);
    resumeUploadForm.addEventListener("submit", uploadResume);
    addAcademicButton.addEventListener("click", openAcademicModal);
    closeAcademicModalbtn.addEventListener("click", closeAcademicModal);
    academicForm.addEventListener("submit", addAcademicEntry);
  });