// JavaScript for Login Page

const form = document.getElementById("form");

const email = document.getElementById("inputEmail")

const password = document.getElementById("inputPassword");

const submit = document.getElementById("submit");

const error = document.getElementById("error");

const success = document.getElementById("success");

// Form submission event listener

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if (emailValue === "" || passwordValue === "") {
        error.textContent = "Please fill in all fields.";
        return;
    }

    if (passwordValue.length < 6) {
        error.textContent = "Password must be at least 6 characters long.";
        return;
    }

    success.textContent = "Login successful!";

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
});

