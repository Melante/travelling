const form = document.querySelector('.form__wrapper');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

const phonePattern = /^\+7 \(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const emailPattern = /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/;

function formValidation() {
  form.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    let validPhone = false;
    let validEmail = false;

    if(!phonePattern.test(phone.value)) {
      phone.classList.add('form__input--error');
      phone.setCustomValidity('Доступны только цифры и в формате +7 (000)-000-00-00');
    } else {
      phone.setCustomValidity('');
      phone.classList.remove('form__input--error');
      validPhone = true;
    }

    if(!emailPattern.test(email.value)) {
      email.setCustomValidity('Введите email ');
      email.classList.add('form__input--error');
    } else {
      validEmail = true;
      email.setCustomValidity('');
      email.classList.remove('form__input--error');
    }


    if (validPhone && validEmail) {
      form.submit();
    }
  });
}
formValidation();
