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
        image.style.height = window.innerHeight.toString() + 'px'
    }

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