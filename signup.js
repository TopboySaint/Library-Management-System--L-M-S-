const errorMsg = document.getElementById("errorMsg");
const nameInput = document.getElementById("floatingName").value.trim();
const mailInput = document.getElementById("floatingMail").value.trim();
const phoneInput = document.getElementById("floatingNumber").value.trim();
const usernameInput = document.getElementById("floatingUser").value.trim();
const passwordInput = document.getElementById("floatingPass").value.trim();
const rememberInput = document.getElementById("rem-me").value;

signUpUser.addEventListener("click", (e) => {
  //  alert('yes i am working')
  if (usernameInput === "" || passwordInput === "") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    // e.submit()
    // window.location.href = "user.html"
  }
});
