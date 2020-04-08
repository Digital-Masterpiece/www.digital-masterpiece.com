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

// Quote Form
// TODO: reCAPTCHa v3
const quote = document.querySelector(".quote");

const showQuoteForm = () => quote.classList.remove("hidden");
const hideQuoteForm = () => quote.classList.add("hidden");

window.addEventListener("click", (event) => {
    if (
        !event.target.closest(".quote--form") &&
        event.target.textContent !== "Request a Quote"
    ) {
        hideQuoteForm();
    }
});

const submitForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    let params = new URLSearchParams([
        ["name", name],
        ["email", email],
        ["message", message],
    ]);

    if (name && email) {
        const url =
            document.getElementById("contact-form").action +
            "?" +
            params.toString();
        fetch(url, {
            method: "post",
        })
            .then((response) => {
                if (response.status === 200) {
                    document.getElementById("submit-button").textContent = "Sending!";
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
                hideQuoteForm();
            });
    }
};