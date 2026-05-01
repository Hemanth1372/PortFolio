var username = ["testuser@email.com"]
var password = ["testuser"]

function handle(e) {
    if(e.key === "Enter") checkUser();
}

function checkUser() {
    var email = document.getElementsByClassName("email")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    var repassword = document.getElementsByClassName("password")[1].value;

    var status = document.querySelector(".status");
    if (repassword !== "" || password !== "" && repassword === password) {
        status.classList.add("wrong-credentials");
        status.classList.remove("right-credentials");
        status.innerHTML = "New User Created";
        username.push(email);
        password.push(password);
    } else {
        status.classList.remove("wrong-credentials");
        status.classList.add("right-credentials");
        status.innerHTML = "Password Need to be check.";
    }
}

