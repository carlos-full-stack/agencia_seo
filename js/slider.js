let currentTestimonial = 0;

const TESTIMONIALS = document.querySelectorAll('.testimonial');

function changeTestimonial(direction) {

    TESTIMONIALS[currentTestimonial].classList.remove('active'); // slider activo pasa a invisible
    currentTestimonial = (currentTestimonial + direction + TESTIMONIALS.length) % TESTIMONIALS.length; // calcula el testimonio actual en funcion de la dirección
    TESTIMONIALS[currentTestimonial].classList.add('active')
}

TESTIMONIALS[currentTestimonial].classList.add('active');