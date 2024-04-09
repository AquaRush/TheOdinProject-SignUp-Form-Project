// Check if password input matches confirm password field

function passwordValidator() {
    const password = document.getElementById('grid-password').value;
    const confirmPassword = document.getElementById('grid-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Password does not match.");
        return false;
    }

    return true;
}
