function validateForm() {
    var email = document.forms["courseForm"]["email"].value;
    var password = document.forms["courseForm"]["password"].value;
    
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    
    return true;
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    if (validateForm()) {
        document.querySelector('.success-message').style.display = 'block'; // Show success message
        document.forms["courseForm"].reset(); // Reset form fields
    }
}
