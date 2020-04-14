function initializeRecaptcha() {
    grecaptcha.ready(function () {
        grecaptcha.execute('6LfpSOgUAAAAANUxQLx28jWpKp19nT0pV08kUCRq', {action: 'homepage'}).then(function (token) {
            if (document.getElementById('contact-form')) {
                document.getElementById('token').value = token;
            }
        });
    });
}

// Mobile navigation scroll locking.
function lockScrolling() {
    if (document.getElementById("mobile-navigation").checked) {
        document.body.style.overflow = "auto";
    } else {
        // Scroll back to the top of the page and disable scrolling.
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
    }
}

// Contact Form
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const token = document.getElementById("token").value;
    let params = new URLSearchParams([
        ["name", name],
        ["email", email],
        ["message", message],
        ["token", token],
    ]);

    if (name && email) {
        const url = document.getElementById("contact-form").action + "?" + params.toString();
        const errorMessage = "We're sorry, there was an error sending your request.\nPlease email us directly at contact@digital-masterpiece.com.";
        document.getElementById("submit-button").textContent = "Sending!";
        fetch(url, {
            method: "POST",
        }).then((response) => {
            if (response.status === 200) {
                window.location.href = "/thank-you";
            } else {
                alert(errorMessage);
            }
        }).catch((error) => {
            alert(errorMessage);
            console.error(error)
        });
    }
}