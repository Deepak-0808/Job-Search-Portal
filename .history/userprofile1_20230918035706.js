const academicModal = document.getElementById("add-academic-modal");
const openAcademicModal = document.getElementById("add-academic-button");
openAcademicModal.addEventListener("click", openAcademicModalFun);

function openAcademicModalFun() {
  console.log("open");
  academicModal.style.display = "block";
}