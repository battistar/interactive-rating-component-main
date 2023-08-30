const buttonGroup = document.querySelectorAll('.card__rating-button-group button');
const [ratingCardElement, greetingsCardElement] = document.querySelectorAll('.card');
const submitButtonElement = document.querySelector('.card__submit-button');
const finalRateElement = document.querySelector('#final-rate');

submitButtonElement.addEventListener('click', function (e) {
  e.preventDefault();

  ratingCardElement.classList.add('hide');
  greetingsCardElement.classList.remove('hide');
});

let currentRate;

for (let i = 0; i < buttonGroup.length; i++) {
  buttonGroup[i].addEventListener('click', function () {
    if (currentRate) {
      buttonGroup[currentRate - 1].classList.remove('selected');
    }
    buttonGroup[i].classList.add('selected');
    submitButtonElement.classList.remove('disabled');

    currentRate = i + 1;
    finalRateElement.textContent = ` ${currentRate} `;
  });
}
