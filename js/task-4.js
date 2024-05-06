const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("All form fields must be filled in");
    } else {
        console.log({ "email": email.value, "password": password.value });
        form.reset();
    }
});
