function transitionInPage() {
    document.querySelector('.body').classList.add('loaded')
}

function handleCTA() {
    const header = document.querySelector('.header')
    const cta = document.querySelector('.cta')
    const image = document.querySelector('.cta__image');

    if (cta) {
        // The image will be misplaced and too large for the cta container, so we have to adjust the container minus the header height.
        cta.style.height = (window.innerHeight - header.offsetHeight).toString() + 'px'
    }

    if (image) {
        setTimeout(transitionInPage, 200)
    } else {
        transitionInPage()
    }
}

handleCTA()
window.addEventListener('resize', handleCTA)

function handleBusinessFacts() {
    const facts = document.querySelectorAll('.modern-business__fact__percent')

    if (facts.length) {
        facts.forEach(function (fact) {
            let value = parseInt(fact.textContent.replace('%', ''))
            let counter = 0;
            let interval = setInterval(function () {
                if (counter < value) {
                    fact.textContent = counter + '%'
                    counter++
                } else {
                    clearInterval(interval)
                }
            }, 15)
        })
    }
}

let factsHandled = false;
window.addEventListener('scroll', function () {
    if (!factsHandled && window.scrollY > 200 && window.location.pathname === '/') {
        handleBusinessFacts()
        factsHandled = true;
    }
})

const toggle = document.getElementById('mobile-navigation');

function handleMobileNavigation() {
    if (toggle.checked) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

toggle.addEventListener('click', handleMobileNavigation)