const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', String(!isHidden));
  });
}

const enrollForm = document.getElementById('enrollForm');

if (enrollForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const courseInput = document.getElementById('course');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const courseError = document.getElementById('courseError');
  const formSuccess = document.getElementById('formSuccess');

  const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  enrollForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const courseValue = courseInput.value;

    let hasError = false;

    if (!nameValue) {
      nameError.classList.remove('hidden');
      hasError = true;
    } else {
      nameError.classList.add('hidden');
    }

    if (!validEmail(emailValue)) {
      emailError.classList.remove('hidden');
      hasError = true;
    } else {
      emailError.classList.add('hidden');
    }

    if (!courseValue) {
      courseError.classList.remove('hidden');
      hasError = true;
    } else {
      courseError.classList.add('hidden');
    }

    if (!hasError) {
      formSuccess.classList.remove('hidden');
      enrollForm.reset();
    } else {
      formSuccess.classList.add('hidden');
    }
  });
}

if (window.AOS) {
  window.AOS.init({
    duration: 700,
    once: true,
    offset: 80,
  });
}
