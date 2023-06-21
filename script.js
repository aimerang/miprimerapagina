// function showAlert(){
//     alert("hola, esta es un alerta desde JavaScript¡")
// }
const form =document.getElementById("myForm");


function validateEmail (email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById("email");
    const email = emailInput.Value;

    if (!validateEmail(email)) {
        alert("Por favor ingrese un correo electronico válido.");
    } else {
        alert("Correo electronico enviado correctamente.");
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();
});

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})