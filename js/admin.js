document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        console.log("Usuario:", username);
        console.log("Clave:", password);
    } else {
        alert("Por favor, complete ambos campos.");
    }
});

document.getElementById("signupButton").addEventListener("click", function () {
    window.location.href = "signup.html";
});

document.getElementById("cancelButton").addEventListener("click", function () {
    window.location.href = "noticias.html";
});
