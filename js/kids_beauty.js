let slideIndex = 0;
Slides();

function Slides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(Slides, 2000); 
  // Change image every 1 seconds
}





function showInput() {
  if (!email.value == "") {
    document.getElementById("success_messsage").innerHTML =
      "Welcome to AHMS community, Now you will get regural news letter and latest promotions, Stay Tuned!! ";
    document.getElementById("success_messsage").style.color = "green";
    document.getElementById("success_messsage").style.fontSize = "x-large";
  }
}

window.onload = function () {
  document.getElementById('#subs').onclick = validate;
};
validate();


function validate() {
  let email = document.getElementById("#email");
  let name = document.getElementById("#name");
  let phonenum = document.getElementById("#phnb");


  let namepattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let phonenumpattern = /^[0-9]{10}$/;

  //   form validation

  if (email.value == "") {
    email.nextElementSibling.innerHTML = "Please enter your email";
  } else if (!emailpattern.test(email.value)) {
    email.nextElementSibling.innerHTML = "Please enter your correct email ";
  }

  if (name.value == "") {
    name.nextElementSibling.innerHTML = "Please enter your full name";
  } else if (!namepattern.test(name.value)) {
    name.nextElementSibling.innerHTML = "Please enter your correct name ";
  }
alert("efve");
  if (phonenum.value == "") {
    phonenum.nextElementSibling.innerHTML = "Please enter your phone number";
  } else if (!phonenumpattern.test(phonenum.value)) {
    phonenum.nextElementSibling.innerHTML =
      "Please enter your correct phone number ";
  }
}






