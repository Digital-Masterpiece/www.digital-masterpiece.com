function transitionInPage() {
    document.querySelector('.body').classList.add('loaded')
}

function handleCTA() {
    const cta = document.querySelector('.cta')
    if (cta) {
        cta.style.height = window.innerHeight.toString() + 'px'
    }

    const image = document.querySelector('.cta__image');
    if (image) {
        image.addEventListener('load', function () {
            transitionInPage()
        })
    } else {
        transitionInPage()
    }
}

handleCTA()
window.addEventListener('resize', handleCTA)