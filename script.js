let button = document.querySelector(".submitButton"); 
let pw = document.querySelector("#password")
let pwConfirm = document.querySelector("#confirm-password")
let alert = document.querySelector(".alert")

button.addEventListener("click", function(e) {
    if (pw.value !== pwConfirm.value) {
        console.log(alert)
        alert.style.display="block"
        alert.textContent= "Passwords doesn't match"
        e.preventDefault()
        pwConfirm.classList.add("customInvalid")

    }
})