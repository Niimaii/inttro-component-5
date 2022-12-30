let displaySwitch = false;

const secondEmailErrorName = document.getElementsByName("email");
const secondEmailError = document.getElementById("email");

const errorIconFirst = document.getElementById("errorIconFirst");
const errorFirst = document.getElementById("errorFirst");

const errorLast = document.getElementById("errorLast");
const errorIconLast = document.getElementById("errorIconLast");

const errorEmail = document.getElementById("errorEmail");
const errorIconEmail = document.getElementById("errorIconEmail");

const errorPass = document.getElementById("errorPass");
const errorIconPass = document.getElementById("errorIconPass");

function displayInput() {
  let firstName = document.getElementsByClassName("inputFirst");

  let lastName = document.getElementsByClassName("inputLast");

  let email = document.getElementsByClassName("inputEmail");

  let emailResult = email[0].value.includes("@" && ".com");

  let pass = document.getElementsByClassName("inputPass");

  if (displaySwitch) {
    errorFirst.style.display = "none";
    errorIconFirst.style.display = "none";

    errorLast.style.display = "none";
    errorIconLast.style.display = "none";

    errorEmail.style.display = "none";
    errorIconEmail.style.display = "none";

    errorPass.style.display = "none";
    errorIconPass.style.display = "none";

    firstName[0].classList.remove("errorBorder");
    lastName[0].classList.remove("errorBorder");
    email[0].classList.remove("errorBorder");
    pass[0].classList.remove("errorBorder");
  }

  if (!firstName[0].value) {
    errorFirst.style.display = "inline-block";
    errorIconFirst.style.display = "inline-block";

    firstName[0].classList.add("errorBorder");
  }

  if (!lastName[0].value) {
    errorLast.style.display = "inline-block";
    errorIconLast.style.display = "inline-block";

    lastName[0].classList.add("errorBorder");
  }

  if (!emailResult) {
    errorEmail.style.display = "inline-block";
    errorIconEmail.style.display = "inline-block";

    secondEmailErrorName[0].placeholder = "email@Example.com";
    secondEmailError.classList.add("emailError");

    email[0].classList.add("errorBorder");
  }

  if (!pass[0].value) {
    errorPass.style.display = "inline-block";
    errorIconPass.style.display = "inline-block";

    pass[0].classList.add("errorBorder");
  }

  displaySwitch = true;
}

document.getElementById("button").addEventListener("click", displayInput);
