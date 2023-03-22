const form = document.getElementById("form-purchase");
let formValidate = false;

form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();

    //function formValidate(biggerShirts) {
    var numberShorts = document.getElementById("number-shorts");
    var numberShirts = document.getElementById("number-shirts");
    var fullName = document.getElementById("full-name");
    var email = document.getElementById("email");
    var description = document.getElementById("description");
    let messageSuccess = `Muito bem! O número de camisas (${numberShirts.value}) é maior que o número de calções (${numberShorts.value}).`;

    formValidate =
      Number(numberShirts.value) > Number(numberShorts.value) ? true : false;

    if (formValidate == true) {
      const containerMessageSuccess = document.querySelector(".success");
      containerMessageSuccess.innerHTML = messageSuccess;
      containerMessageSuccess.style.display = "block";
      numberShirts.style.border = "none";
      document.querySelector(".error").style.display = "none";

      numberShorts.value = "";
      numberShirts.value = "";
      fullName.value = "";
      email.value = "";
      description.value = "";
    } else {
      numberShirts.style.border = "1px solid red";
      document.querySelector(".error").style.display = "block";
    }
  }
  //}
);

console.log(form);
