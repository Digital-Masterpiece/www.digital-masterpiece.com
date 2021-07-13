function sizeCTA() {
    const cta = document.querySelector('.cta');
    if (cta) {
        cta.style.height = window.innerHeight.toString() + 'px';
    }
}

sizeCTA();
window.addEventListener('resize', sizeCTA)