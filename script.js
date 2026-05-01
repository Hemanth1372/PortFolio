function handle(e) {
    if(e.key === "Enter") checkUser();
}

function checkUser() {
    var email = document.getElementsByClassName("email")[0].value;
    var password = document.getElementsByClassName("password")[0].value;

    console.log(email);
    console.log(password);
    var status = document.querySelector(".status");
    if (email === "testuser@email.com" && password === "testuser") {
        status.classList.add("right-credentials");
        status.classList.remove("wrong-credentials");
        status.innerHTML = "User Verified";
    } else {
        status.classList.remove("right-credentials");
        status.classList.add("wrong-credentials");
        status.innerHTML = "Either username or password incorrect.";
    }
}