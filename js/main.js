document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.moveDown, .moveDown-delay, .moveDown-delay-x2, .moveDown-delay-x3');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});