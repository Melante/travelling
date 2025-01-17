const form = document.querySelector('.form__wrapper');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const label = document.querySelector('.form__description');
const errorPhone = document.querySelector ('.form__error-phone');
const errorEmail = document.querySelector ('.form__error-email');

const phonePattern = /^\+7 \(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const emailPattern = /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/;

function formValidation() {
  form.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    let validPhone = false;
    let validEmail = false;

    if(phone === (phone.value)) {
      label.style.display = 'none';
    }

    if(!phonePattern.test(phone.value)) {
      errorPhone.classList.add('form__error--active');
      phone.classList.add('form__input--error');
    } else {
      validPhone = true;
      errorPhone.classList.remove('form__error--active');
      phone.classList.remove('form__input--error');
    }

    if(!emailPattern.test(email.value)) {
      errorEmail.classList.add('form__error--active');
      email.classList.add('form__input--error');
    } else {
      validEmail = true;
      errorEmail.classList.remove('form__error--active');
      email.classList.remove('form__input--error');
    }

    if(validPhone && validEmail) {
      form.submit();
    }
  });
}

formValidation();
