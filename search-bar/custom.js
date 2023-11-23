function myFunction() {
  var myInput = document.getElementById("myInput");
  var filter = myInput.value.toUpperCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
