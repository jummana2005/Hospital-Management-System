
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const errorMessage = document.getElementById("errorMessage");

togglePassword.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "Hide" : "Show";
    togglePassword.setAttribute(
        "aria-label",
        isHidden ? "Hide password" : "Show password"
    );
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMessage.textContent = "";

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password.trim()) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Frontend demonstration only.
    // Real authentication will be handled by the backend.
    errorMessage.style.color = "#0875d1";
    errorMessage.textContent =
        "Login form validated. Backend authentication is not connected yet.";
});
