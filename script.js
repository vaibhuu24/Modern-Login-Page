
const container = document.getElementById("container");

const registerBtn = document.getElementById("register");

const loginBtn = document.getElementById("login");

const signUpForm = document.getElementById("signUpForm");

const signInForm = document.getElementById("signInForm");

const forgotPassword = document.getElementById("forgotPassword");

const passwordToggleButtons =document.querySelectorAll(".password-toggle");



registerBtn.addEventListener("click", () => {

    container.classList.add("active");

});




loginBtn.addEventListener("click", () => {

    container.classList.remove("active");

});




passwordToggleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const targetId = button.getAttribute("data-target");

        const passwordInput =
            document.getElementById(targetId);

        const icon = button.querySelector("i");


        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

            button.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

            button.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    });

});




signUpForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;


    const message =
        document.getElementById("signupMessage");


    
    if (name.length < 3) {

        message.textContent =
            "Name must contain at least 3 characters.";

        return;
    }


  

    if (!isValidEmail(email)) {

        message.textContent =
            "Please enter a valid email address.";

        return;
    }


   

    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        return;
    }


    

    message.textContent =
        "Account created successfully!";


    signUpForm.reset();

});




signInForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const email =
        document.getElementById("signinEmail").value.trim();

    const password =
        document.getElementById("signinPassword").value;


    const message =
        document.getElementById("signinMessage");


    

    if (!isValidEmail(email)) {

        message.textContent =
            "Please enter a valid email address.";

        return;
    }


    

    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        return;
    }


    

    message.textContent =
        "Sign in successful!";


    signInForm.reset();

});




function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}




forgotPassword.addEventListener("click", (event) => {

    event.preventDefault();

    const email =
        document.getElementById("signinEmail").value.trim();


    if (email === "") {

        alert("Please enter your email first.");

        return;
    }


    if (!isValidEmail(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    alert(
        `Password reset link would be sent to ${email}.`
    );

});