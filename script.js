var getId = document.getElementById("btn");
getId.addEventListener("click", function (event) {
    event.preventDefault();
    var fullName = document.getElementById("name").value;
    var postFullName = (document.getElementById ("postFullName").innerHTML = fullName);

    var email = document.getElementById("email").value;
    var postEmail = (document.getElementById ("postEmail").innerHTML = email);

    var message = document.getElementById("message").value;
    var postMessage = (document.getElementById ("postMessage").innerHTML = message);
});