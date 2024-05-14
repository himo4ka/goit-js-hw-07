const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const { elements: { email, password } } = event.currentTarget;
    
    const trimmedEmail = email.value.trim();
    const trimmedPassword = password.value.trim();
    
    if (trimmedEmail === "" || trimmedPassword === "") {
        alert("All form fields must be filled in");
    } else {
        console.log({ "email": trimmedEmail, "password": trimmedPassword });
        form.reset();
    }
});

