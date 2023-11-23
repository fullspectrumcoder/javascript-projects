// ADD INPUT FIELDS AND FAUNCTIONs...
function addInputClass(e) {
  e.parentElement.classList.add("active");
}

function removeInputClass(e) {
  if (e.value.length == 0) {
    e.parentElement.classList.remove("active");
  }
}

function inputTextField(name) {
  return `<input type=${name} id=${name} autocomplete="off" name=${name} onkeypress="addInputClass(this)" onblur="removeInputClass(this)"  />
          <label for=${name}>User ${name}</label>`;
}

document.getElementById("form-item-name").innerHTML = inputTextField("name");
document.getElementById("form-item-email").innerHTML = inputTextField("email");
document.getElementById("form-item-password").innerHTML =
  inputTextField("password");

// SUBMIT USER DATA FUNCTION
var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var errorBox = document.getElementById("error-msg");
var notificationModal = document.getElementById("notification-modal");
var userModal = document.getElementById("user-modal");
var showUser = document.getElementById("showUser");

var errorMsg = {
  nameError: "Plaese enter your name!",
  emailError: "Invalid Email Address",
  passwordError: "Atleast 3 characters are required!",
};

const clearForm = () => {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";

  removeInputClass(userName);
  removeInputClass(userEmail);
  removeInputClass(userPassword);
};

const hideErrorMsg = () => {
  setTimeout(() => {
    errorBox.style.display = "none";
    errorBox.innerHTML = "";
  }, 3000);
};

const showModalNotification = () => {
  let body = document.body;
  let backDrop = document.createElement("div");
  backDrop.setAttribute("class", "modal-backdrop fade");
  body.append(backDrop);
  body.style.overflow = "hidden";
  notificationModal.style.display = "block";
  notificationModal.classList.add("show");
  backDrop.classList.add("show");
};

const showModal = () => {
  let body = document.body;
  body.style.overflow = "auto";
  notificationModal.style.display = "none";
  notificationModal.classList.remove("show");
  body.lastElementChild.remove();
};

const showUserList = () => {
  location = "./user-lists/index.html";
};

function submitUserData() {
  var userData = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };

  if (userData.name == "") {
    errorBox.style.display = "block";
    errorBox.innerHTML = errorMsg.nameError;
    hideErrorMsg();
  } else if (userData.email.trim().length < 1) {
    errorBox.style.display = "block";
    errorBox.innerHTML = errorMsg.emailError;
    hideErrorMsg();
  } else if (userData.password.length <= 3) {
    errorBox.style.display = "block";
    errorBox.innerHTML = errorMsg.passwordError;
    hideErrorMsg();
  } else {
    var dataInStr = JSON.stringify(userData);
    localStorage.setItem("user", dataInStr);

    if (dataInStr !== "") {
      showModalNotification();
      clearForm();
    } else {
    }
  }
}



/* USER DATA ADDED IN USER LIST PAGE */

