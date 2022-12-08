let $ = (selector) => document.querySelector(selector);

window.onload = function () {
  $("#signbtn").onclick = validate;
};

function validate() {
  let firstname = $("#fname");
  let lastname = $("#lname");
  let username = $("#username");
  let email = $("#email");
  let password = $("#psw");

  let namepattern = /^[a-zA-z]{2,30}$/;
  let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passpattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  //   console.dir(namepattern);

  if (firstname.value == "") {
    firstname.nextElementSibling.innerHTML = "Please enter your first name";
  } else if (!namepattern.test(firstname.value)) {
    firstname.nextElementSibling.innerHTML =
      "Please enter your correct name format ";
  } else {
    firstname.nextElementSibling.innerHTML = "Valid Username";
  }

  if (lastname.value == "") {
    lastname.nextElementSibling.innerHTML = "Please enter your lastname";
  } else if (!namepattern.test(lastname.value)) {
    lastname.nextElementSibling.innerHTML =
      "Please enter your correct lastname format ";
  } else {
    lastname.nextElementSibling.innerHTML = "Valid Username";
  }

  if (email.value == "") {
    email.nextElementSibling.innerHTML = "Please enter your email";
  } else if (!emailpattern.test(email.value)) {
    email.nextElementSibling.innerHTML = "Please enter your correct email ";
  } else {
    email.nextElementSibling.innerHTML = "Valid email";
  }

  if (username.value == "") {
    username.nextElementSibling.innerHTML = "Please enter your username";
  } else if (!namepattern.test(username.value)) {
    username.nextElementSibling.innerHTML =
      "Please enter your correct username ";
  } else {
    username.nextElementSibling.innerHTML = "Valid Username";
  }

  if (password.value == "") {
    password.nextElementSibling.innerHTML = "Please enter password";
  } else if (!passpattern.test(password.value)) {
    password.nextElementSibling.innerHTML = "Please enter correct password";
  } else {
    password.nextElementSibling.innerHTML = "Correct password";
  }
}


// signup
