let $ = (selector) => document.querySelector(selector);

window.onload = function () {
  $('#submit').onclick = validate;
};

function validate() {
  let username = $('#uname');
  let password = $('#psw');
  let namepattern = /^[a-zA-z]{2,30}$/;
  let passpattern  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  //   console.dir(namepattern);

  if (username.value == '') {
    username.nextElementSibling.innerHTML = 'Please enter your username';
  } else if (!namepattern.test(username.value)) {
    username.nextElementSibling.innerHTML = 'Please enter your correct username ';
  } else {
    username.nextElementSibling.innerHTML = 'Valid Username';
  }

  if (password.value == '') {
    password.nextElementSibling.innerHTML = 'Please enter password';
  } else if (!passpattern.test(password.value)) {
    password.nextElementSibling.innerHTML = 'Please enter correct password';
  } else {
    password.nextElementSibling.innerHTML = 'Correct password';
  }
}


// signup