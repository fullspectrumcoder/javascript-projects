var fetchData = localStorage.getItem("user");
var dataInJson = JSON.parse(fetchData);
var title = document.getElementById("title");
var dataList = document.getElementById("data-list");
var dataModal = document.getElementById("data-modal");
var modalContent = document.getElementById("modal-content");

if (!dataInJson) {
  alert("there is no data");
} else {
  title.innerHTML = `${dataInJson.name}`;
}

const showModal = () => {
  let body = document.body;
  let backDrop = document.createElement("div");
  backDrop.setAttribute("class", "modal-backdrop fade");
  body.append(backDrop);
  body.style.overflow = "hidden";
  dataModal.style.display = "block";
  dataModal.classList.add("show");
  backDrop.classList.add("show");
};

const closeModal = () => {
  let body = document.body;
  body.style.overflow = "auto";
  dataModal.style.display = "none";
  dataModal.classList.remove("show");
  body.lastElementChild.remove();
};

const content = (title, description) => {
  modalContent.innerHTML = `
   <div class="tickImg">
   <img src="../imgs/tick-inside-circle.png" alt="" />
 </div>
 <h3>${title}</h3>
 <p>${description}</p>
 <button
   type="button"
   class="btn btn-success"
   id="btn-done"
   onclick="closeModal()"
 >
   Done
 </button>
   `;
};

const deleteUser = (e) => {
  e.remove();
};

const deleteAllUser = () => {
  dataList.remove();

  var noData = document.getElementsByClassName("dataList")[0];
  noData.innerHTML = "Sorry there is no data found!";
  noData.style.fontSize = "18px";
};

const folderModal = () => {
  content(
    "User Information",
    `His name is <b>${dataInJson.name}</b> and email address is <b>${dataInJson.email}</b>`
  );
  showModal();
};

const deleteModal = (e) => {
  deleteUser(e);
  content(
    "User Deleted",
    `The user with email ID <b>${dataInJson.email}</b> has been deleted successfully!`
  );
  showModal();
};

function updatedUser() {
  var uName = document.getElementById("nameUser");
  var uEmail = document.getElementById("emailUser");
  var uPassword = document.getElementById("passwordUser");
  var updateUserBtn = document.getElementById("updateUserBtn");

  var userUpdatedData = {
    name: uName.value,
    email: uEmail.value,
    password: uPassword.value,
  };

  if (
    userUpdatedData.name.length !== "" ||
    userUpdatedData.email !== "" ||
    userUpdatedData.password.length !== 0
  ) {
    var dataInStr = JSON.stringify(userUpdatedData);
    localStorage.setItem("updated-user", dataInStr);

    title.innerHTML = `${userUpdatedData.name}`;

    closeModal();
    content(
      "User Updated",
      `The user with email ID <b>${dataInJson.email}</b> has been updated successfully!`
    );
    showModal();
  }
}

var fetchUpdatedData = localStorage.getItem("updated-user");
var updatedDataInJson = JSON.parse(fetchUpdatedData);

// dataList.innerHTML = `
//       <h4 id="title">${updatedDataInJson.name}</h4>
//       <div class="list-icons">
//         <a href="javascript:;" id="folder" onclick="folderModal()"><i class="fa-solid fa-folder"></i></a>
//         <a href="javascript:;" id="edit" onclick="updateUser()"><i class="fa-solid fa-pen"></i></a>
//         <a href="javascript:;" id="delete" onclick="deleteModal(this)"><i class="fa-solid fa-trash"></i></a>
//       </div> 
//       `;

const updateUser = () => {
  showModal();

  modalContent.innerHTML = `
    <div class="form-edit">
        <h5>Edit Form</h5>
        <div class="modal_body">
            <h6>Previous Data:</h6>
            <p><b>name:</b> ${dataInJson.name} <b>Email:</b> ${dataInJson.email} <b>Password: </b>${dataInJson.password}</p>
            <div class="form-update">
                <input type="text" placeholder="Name" class="formUpdate" id="nameUser" autocomplete="off">
                <input type="email" placeholder="Email" class="formUpdate" id="emailUser" autocomplete="off">
                <input type="password" placeholder="Password" class="formUpdate" id="passwordUser" autocomplete="off">
            </div>
            <div class="form-footer">
                <button class="btn btn-secondary btn-sm" onclick="closeModal()">
                    Cancel
                </button>
                <button class="btn btn-success btn-sm" onclick="updatedUser()" id="updateUserBtn">
                    Update
                </button>
            </div>
            <button class="btn btn-danger btn-sm" id="error-msg"></button>
        </div>
    </div>
    `;
};
