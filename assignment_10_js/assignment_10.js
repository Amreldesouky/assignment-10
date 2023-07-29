var Email = document.querySelector('.email')
var Password = document.querySelector('.pass')
var Name = document.querySelector('.name')
var pWarn = document.getElementsByClassName("pwarn")
var sin = document.querySelector('.b-1')
var sup = document.querySelector('.b-2')
var welcome = document.getElementById("hello")
var inAnchor = document.querySelector(".a-1")
var UpAnchor = document.querySelector(".a-2")
var logOut = document.querySelector(".logout")






var clients = [];
function importUsers() {
    clients = JSON.parse(localStorage.getItem("users"))
}


importLocal();

function signIn() {

    var isHere = 0;
    var wuser = {
        email: Email.value,
        password: Password.value,
    }
    var thenum;

    for (var i = 0; i < clients.length; i++) {
        if (wuser.email == clients[i].email) {
            isHere += 1;
            if (isHere == 1)
                thenum = i
        }

    }

    if (isHere != 0) {
        var nn = clients[thenum].name;
        goToAccount(nn)
    } else {
        document.querySelector(".pwarn").style.display = "block";

    }
}




function goToAccount(num) {
    document.querySelector("#sec-2").style.display = 'block'
    document.querySelector("#sec-1").style.display = 'none';
    welcome.innerHTML += ` ${num}`
}
function logout() {
    document.querySelector("#sec-2").style.display = 'none'
    document.querySelector("#sec-1").style.display = 'flex';
    welcome.innerHTML = "Welcome"
}

function importLocal() {
    clients = JSON.parse(localStorage.getItem("localUsers"))
}
function exportLocal() {
    localStorage.setItem("localUsers", JSON.stringify(clients))
}


function signUp() {

    var nuser = {
        name: Name.value,
        email: Email.value,
        password: Password.value,
    }
    clients.push(nuser)
    exportLocal();
}


function toUP() {
    document.querySelector(".name").style.display = "block"
    sin.style.display = "none"
    sup.style.display = "flex"
    inAnchor.style.display = "none"
    UpAnchor.style.display = "block"

}
function toIn() {
    document.querySelector(".name").style.display = "none"
    inAnchor.style.display = "none"
    UpAnchor.style.display = "block"
    sin.style.display = "flex"
    sup.style.display = "none"

}

sin.onclick = function () { signIn() }
sup.onclick = function () { signUp() }
logOut.onclick = function () { logout() }













