let button = document.querySelector(".submitButton"); 
let pw = document.querySelector("#password")
let pwConfirm = document.querySelector("#confirm-password")
let alert = document.querySelector(".alert")
const form = document.querySelector("form");
let alertActive = false;

button.addEventListener("click", function(e) {
    check()
    if (pw.value !== pwConfirm.value) {
        console.log(alert)
        alert.style.display="block"
        alert.textContent+= " Passwords doesn't match."
        alertActive = true;
        e.preventDefault();
    }
    else {
        alert.style.display="none"
        alert.textContent= ""
        alertActive = false;
    }
 })


 function check() {
    alert.textContent= "";
    console.log(pw.validity.valid)
    if ((pw.validity.valid) && (pwConfirm.validity.valid)) {
        if (!alertActive) {
            alert.style.display="none"
            alert.textContent= ""
           }
    }
    else {
           alert.style.display="block";
           alert.textContent = "Password must containt minimum eight characters, at least one uppercase letter, one lowercase letter and one number. \r\n"
           alertActive = true;
    }
 }
 