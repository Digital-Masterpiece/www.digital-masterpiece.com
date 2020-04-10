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

// Background Lines
const intervalLength = 1000;

function makeLine() {
    let line = document.createElement('div');
    line.classList.add('dm-line');

    const orientation = Math.random();
    const direction = Math.random();

    if (orientation >= 0.5) {
        const randomXPosition = Math.floor(Math.random() * document.body.offsetWidth);
        line.classList.add('vertical');
        line.style.left = randomXPosition + 'px';

        if (direction >= 0.5) {
            line.classList.add('top');
        } else {
            line.classList.add('bottom');
        }
    } else {
        const randomYPosition = Math.floor(Math.random() * document.body.offsetHeight);
        line.classList.add('horizontal');
        line.style.top = randomYPosition + 'px';

        if (direction >= 0.5) {
            line.classList.add('left');
        } else {
            line.classList.add('right');
        }
    }

    document.body.appendChild(line);

    setTimeout(() => {
        line.remove();
    }, intervalLength);
}

setInterval(() => {
    makeLine();
}, intervalLength / 4);

// Home page typing effect.
const serviceText = document.getElementById("service-offered");

if (serviceText) {
    let interval = 0;
    const intervalIncrement = 2500;
    const services = [
        "New Customers",
        "Cost Savings",
        "Increased Productivity",
        "Digital Masterpiece"
    ];

    services.forEach(service => {
        setTimeout(() => {
            serviceText.innerText = "";
            const letters = service.split("");
            let letterInterval = 0;
            const letterIntervalIncrement = intervalIncrement / letters.length / 4;

            letters.forEach((letter, index) => {
                setTimeout(() => {
                    serviceText.textContent = serviceText.textContent.replace("|", "");
                    serviceText.textContent += letter + "|";
                }, letterInterval);

                if (index === letters.length - 1) {
                    setTimeout(() => {
                        serviceText.textContent = serviceText.textContent.slice(0, -1);
                    }, letterInterval + 1);
                }
                letterInterval += letterIntervalIncrement;
            });

            letterInterval += intervalIncrement / 2;

            // If this isn't the last service, "backspace" the letters.
            if (!(service === services[services.length - 1])) {
                letters.forEach(() => {
                    setTimeout(() => {
                        serviceText.textContent =
                            serviceText.textContent.slice(0, -2) + "|";
                    }, letterInterval);
                    letterInterval += letterIntervalIncrement;
                });
            }
        }, interval);

        interval += intervalIncrement;
    });
}


// Quote Form
const submitForm = (event) => {
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
        const url = document.getElementById("quote-form").action + "?" + params.toString();
        fetch(url, {
            method: "POST",
        }).then((response) => {
            if (response.status === 200) {
                document.getElementById("submit-button").textContent = "Sent!";
                window.location.href = "/thank-you";
            } else {
                alert(
                    "We're sorry, there was an error sending your request.\nPlease email us directly at quote@digital-masterpiece.com."
                );
            }
        })
            .catch((error) => {
                alert(
                    "We're sorry, there was an error sending your request.\nPlease email us directly at quote@digital-masterpiece.com."
                );
                console.error(error)
            });
    }
};