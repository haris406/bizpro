// Fade in testimonials on scroll
const boxes = document.querySelectorAll('.testimonial-box');

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkBoxes);
checkBoxes();

