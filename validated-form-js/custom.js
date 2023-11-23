// For Slider Function
var slides = document.getElementsByClassName("slide");

var counter = 1;

function showSlider(initialize) {
  if (initialize > slides.length) {
    counter = 1;
  } else if (initialize < 1) {
    counter = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[counter - 1].style.display = "block";
}

showSlider(counter);

function prevSlide() {
  counter++;
  showSlider(counter);
}

function nextSlide() {
  counter--;
  showSlider(counter);
}



// For Form Validation
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
// var fName = document.getElementById("firstName");
// var lName = document.getElementById("lastName");
// var number = document.getElementById("phoneNumber");
// var email = document.getElementById("email");
// var password = document.getElementById("userPassword");
// var confirmPassword = document.getElementById("confirmPassword");
var errorMessage = document.getElementById("error-box");

const removeLoginRequired = () => {
  loginEmail.required = false;
  loginPassword.required = false;
};

// const removeSignUpRequired = () => {
//   fName.required = false;
//   lName.required = false;
//   number.required = false;
//   email.required = false;
//   password.required = false;
//   confirmPassword.required = false;
// };

var error = {
  emailMessage: "Invalid Email Address",
  passwordMessage: "Atleast 6 characters are required!",
  firstNameMessage: "Please Enter First Name",
  lastNameMessage: "Please Enter Last Name",
  numberMessage: "Please Enter Phone Number",
};

const errorRemove = () => {
  setTimeout(() => {
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";
  }, 3000);
};

var loginData = {
  emailLogin: loginEmail.value,
  passwordLogin: loginPassword.value,
};
const submitLoginForm = () => {
  if (!loginData.emailLogin.trim().includes("@")) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = error.emailMessage;
    removeLoginRequired();
    errorRemove();
  } else if (loginData.passwordLogin.length <= 6) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = error.passwordMessage;
    removeLoginRequired();
    errorRemove();
  } else {
    localStorage.setItem("email", loginData.emailLogin);
    localStorage.setItem("password", loginData.passwordLogin);
    location = "https://www.google.com/";
  }
};

// var signUpData = {
//   firstName: fName.value,
//   lastName: lName.value,
//   phoneNumber: number.value,
//   uEmail: email.value,
//   uPassword: password.value,
//   cPassword: confirmPassword.value,
// };
// const submitSignUpForm = () => {
//   if (signUpData.firstName == "") {
//     errorMessage.style.display = "block";
//     errorMessage.innerHTML = error.firstNameMessage;
//     removeSignUpRequired();
//     errorRemove();
//   } else if (signUpData.lastName == "") {
//     errorMessage.style.display = "block";
//     errorMessage.innerHTML = error.lastNameMessage;
//     removeSignUpRequired();
//     errorRemove();
//   } else if (signUpData.phoneNumber == 0) {
//     errorMessage.style.display = "block";
//     errorMessage.innerHTML = error.numberMessage;
//     removeSignUpRequired();
//     errorRemove();
//   } else if (!signUpData.uEmail.trim().includes("@")) {
//     errorMessage.style.display = "block";
//     errorMessage.innerHTML = error.emailMessage;
//     removeSignUpRequired();
//     errorRemove();
//   } else if (signUpData.uPassword.length <= 6) {
//     errorMessage.style.display = "block";
//     errorMessage.innerHTML = error.passwordMessage;
//     removeSignUpRequired();
//     errorRemove();
//   } else if (signUpData.cPassword.length <= 6) {
//     errorMessage.style.display = "block";
//     errorMessage.innerHTML = error.passwordMessage;
//     removeSignUpRequired();
//     errorRemove();
//   } else {
//     localStorage.setItem("fName", signUpData.firstName);
//     localStorage.setItem("lName", signUpData.lastName);
//     localStorage.setItem("email", signUpData.uEmail);
//     localStorage.setItem("number", signUpData.phoneNumber);
//     localStorage.setItem("upassword", signUpData.uPassword);
//     localStorage.setItem("cPassword", signUpData.cPassword);
//     location = "https://www.google.com/";
//   }
// };
