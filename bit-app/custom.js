



function validate() {
    var bidValue = document.getElementById("bidValue").value;
    var bidNumber = document.getElementById("bidNumber").value;

    if (bidValue == 0 && bidNumber == 0) {
        alert("Please filled all fields!")
    } else if (bidValue == 0) {
        alert("Please filled bid value!")
    } else if (bidNumber == 0) {
        alert("Please filled bid number between 1 to 6..")
    } else {

    }
}

var bidImg = document.getElementById("bidImg");
function imgs(no) {

    bidImg.src = `./imgs/${no}.png`;
    bidImg.alt = `Dice ${no}`
    bidImg.title = `Dice ${no}`
}

var initialAmount = document.getElementById("bidAmount").innerHTML = 1000

function myFunction() {

    validate();

    var bidNumber = document.getElementById("bidNumber").value;
    var bidValue = document.getElementById("bidValue").value;
    var bidAmount = document.getElementById("bidAmount");
    var bidBtn = document.getElementById("bidBtn");
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var valv = parseInt(bidValue);
    var imgNo = imgs;

    if (randomNumber == bidNumber) {
        imgNo(bidNumber);
        bidImg.style.display = "block"
        bidAmount.innerHTML = initialAmount + valv

    } else if (randomNumber !== bidNumber) {
        imgNo(randomNumber);
        bidImg.style.display = "block"
        bidAmount.innerHTML = initialAmount - valv

    } else {
    }


    if (bidAmount.innerHTML == 0) {
        bidBtn.style.display = "none";
    }
}


var set = document.getElementsByTagName("h1");

set[0].setAttribute("class", "active")
set[0].innerHTML = "Hello World"