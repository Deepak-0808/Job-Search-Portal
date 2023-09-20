// Get references to the modal and close button
var modal = document.getElementById("myModal");
var closeButton = document.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to open the modal when a button is clicked
document.getElementById("open").addEventListener("click", openModal);

// Event listener to close the modal when the close button is clicked
closeButton.addEventListener("click", closeModal);

// Event listener to close the modal when the user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
