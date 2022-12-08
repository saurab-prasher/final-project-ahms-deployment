function myFunction() {
  var txt;
  if (confirm("Congratulations you got 50% off!")) {
    txt = "Check out the products with great discount";
  } else {
    txt = "Thank You!";
  }
  document.getElementById("demo").innerHTML = txt;
}
