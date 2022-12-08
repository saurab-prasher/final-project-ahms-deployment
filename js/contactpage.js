let $ = (selector) => document.querySelector(selector);

window.onload = function () {
    // $('#submit-btn').onclick = validate;
    // $('#submit-btn').onclick = showInput;
  };

function validate() {
    let name = $('#name');
    let email = $('#email');
    let phonenum = $('#phnb');
    let message = $('#message');
   
    let namepattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phonenumpattern = /^[0-9]{10}$/;
  
    //   form validation
  
    if (name.value == '') {
      name.nextElementSibling.innerHTML = 'Please enter your full name';
    } else if (!namepattern.test(name.value)) {
      name.nextElementSibling.innerHTML = 'Please enter your correct name ';
    } 
  
  
    if (email.value == '') {
      email.nextElementSibling.innerHTML = 'Please enter your email';
    } else if (!emailpattern.test(email.value)) {
      email.nextElementSibling.innerHTML = 'Please enter your correct email ';
    } 
  
    if (phonenum.value == '') {
        phonenum.nextElementSibling.innerHTML = 'Please enter your phone number';
    } else if (!phonenumpattern.test(phonenum.value)) {
        phonenum.nextElementSibling.innerHTML = 'Please enter your correct phone number ';
    } 

    
  }

  
  function showInput() {
    if (!email.value == '' ){    
    
    document.getElementById('success_message').innerHTML = 
    "Thank You, We will get back to you soon" ;
    document.getElementById('success_message').style.color = "green" ;
    document.getElementById("success_message").style.fontSize = "x-large";}}
   
