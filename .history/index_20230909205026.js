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
const auth = firebase.auth();
const database = firebase.database();


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b464a15c3cmsh30c4dae29f6b2c2p19712djsnec46fdc735c1",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

const jobTitleUserInput = document.querySelector("#jobTitleUserInput");
const jobLocationUserInput = document.querySelector("#jobLocation");
const btn = document.querySelector("#searchJob");
const meallist = document.getElementById("jobsAvilable");
let applyLink = document.getElementById("applyLink");
// const btn = document.getElementById("searchJob");
const loader = document.getElementById("#loading");
const fulltime = document.getElementById("fulltime");
const parttime = document.getElementById("parttime");
const contractor = document.getElementById("contractor");
const intern = document.getElementById("intern");
const signupbtn = document.getElementById("signupbtn");

let jobTitle = "";
let jobLocation = "";
let employment_types = "";

const callPrams = () => {
  // calling Loader
  showLoader();

  jobTitle = jobTitleUserInput.value;
  jobLocation = jobLocationUserInput.value;

  if (fulltime.checked) {
    employment_types = fulltime.value;
  } else if (parttime.checked) {
    employment_types = parttime.value;
  } else if (contractor.checked) {
    employment_types = contractor.value;
  } else if (intern.checked) {
    employment_types = intern.value;
  } else {
    employment_types = "";
  }

  fetch(
    `https://jsearch.p.rapidapi.com/search?query=${
      jobTitle + jobLocation
    }&employment_types=${employment_types}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.data) {
        data.data.forEach((meal) => {
          html += `
                <section class="h-auto ml-10 flex justify-between">
                    <!-- outer box -->
                    <div id="meal" style="width:900px;" class="flex-row   ">
                        <div class="h-auto m-10 bg-white rounded-2xl shadow-2xl ">
                            <!-- inner box -->
                            <div class="p-5 flex-row">
                                <div class="flex justify-between">
                                <img src="${meal.employer_logo}" class="w-12">
                                <div class="flex-row ml-5">
                                <h2 id="job_title" class=" text-2xl">${meal.job_title}</h2>
           
                                <div class="text-gray-400">${meal.employer_name}</div>
                            </div>
                        <div id="jobSave" class="bg-slate-100 p-4 rounded-lg flex">
                        <img src="/icon/add-to-cart.png" class="w-6 mr-2"> Save Job
                      </div>

                        </div>
                        <div class="mt-5 text-gray-400">

                        </div>
                        <div class="flex mt-5 justify-between max-h-14">
                        <div class="bg-slate-100 p-3 rounded-lg">${meal.job_employment_type}</div>
                        <p class="ml-11 mr-11">${meal.job_description.length>110?(meal.job_description.substr(0,110)):(meal.job_description)} 
                        </p>
                        <div class="bg-slate-100 flex p-3 rounded-lg pr-8 pl-2">
                          <img src="/icon/pin.png" width="30px" class="p-1">${meal.job_city}
                        </div>
                        

                        </div>
                        <!-- horizontal line -->
                        <div class="bg-slate-100 h-0.5 mt-3"></div>

                        <!-- Apply Button-->
                        <div class="flex justify-center">
                        <a id="applyLink" href="${meal.job_apply_link}" target="_blank"> 
                        <button class="bg-blue-500 rounded-full mt-5 p-3 text-white shadow-black shadow-md ">Apply Now</button>
                        </a>
                        </div>
                    </div>
                </div>

                </div>
            </section>


                `;
        });
      }
      hideLoader();
      meallist.innerHTML = html;
    })

    .catch((err) => console.error(err));
  userInput.value = "";
};

btn.addEventListener("click", callPrams);

// Hide and display loading
function showLoader() {
  var loader = document.getElementById("loading");
  loader.style.display = "block";
}

function hideLoader() {
  var loader = document.getElementById("loading");
  loader.style.display = "none";
}

// unchecked function for filter

function uncheckAll() {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
}

document.querySelector("#clearId").addEventListener("click", uncheckAll);

// checked one at a time
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false;
      }
    });
  });
});



// SignIn using Fire

const signinForm = document.getElementById("signin-form");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = signinForm["email"].value;
  const password = signinForm["password"].value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    alert("Signed in succesfully");
    var user = userCredential.user;
    // ...
      
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    console.log(errorMessage);
  });

});


// chech the user is signedIn or not

function checkUserSignIn() {
  firebase.auth().onAuthStateChanged(function(users) {
      if (users) {
          // User is signed in
          console.log("User is signed in:", users.email);
      } else {
          // User is not signed in
          console.log("User is not signed in");
      }
  });
}

// Call the checkUserSignIn function when the page loads
window.onload = checkUserSignIn;
