const errorMsg = document.getElementById("errorMsg")
const usernameInput = document.getElementById("floating").value.trim()
const passwordInput = document.getElementById("floatingP").value.trim()
const rememberInput = document.getElementById("rem-me").value

loginUser.addEventListener('click', (e)=>{
    //  alert('yes i am working')
    if(usernameInput === "" || passwordInput === ""){
        errorMsg.style.display = "block"
    }else{
        errorMsg.style.display = "none"
        // e.submit()
        // window.location.href = "user.html"
    }
})