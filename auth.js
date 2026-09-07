
function signup() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!username || !password) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    localStorage.setItem("ffverseUsername", username);
    localStorage.setItem("ffversePassword", password);

    message.textContent = "Account created!";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}


function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const savedUsername = localStorage.getItem("ffverseUsername");
    const savedPassword = localStorage.getItem("ffversePassword");

    if (username === savedUsername && password === savedPassword) {
        message.textContent = "Login successful!";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {
        message.textContent = "Incorrect username or password.";
    }
}

