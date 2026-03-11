// JavaScript for Login Page

const form = document.getElementById("form");

const email = document.getElementById("inputEmail")

const togglePassword = document.getElementById("togglePassword");

const password = document.getElementById("inputPassword");

const submit = document.getElementById("submit");

const error = document.getElementById("error");

const success = document.getElementById("success");


// Toggle password visibility

togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁️";
    }
});




// Form submission event listener

form.addEventListener("submit", (e) => {
    e.preventDefault();

    error.textContent = "";
    success.textContent = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if (emailValue === "" || passwordValue === "") {
        error.textContent = "Please fill in all fields.";
        return;
    }

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        error.textContent = "Please enter a valid email address.";
        return;
    }

    if (passwordValue.length < 6) {
        error.textContent = "Password must be at least 6 characters long.";
        return;
    }


    success.textContent = "Login successful!";
    submit.disabled = true;

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
});

