let currentRate;

const finalRateElement = document.querySelector('#final-rate');
const ratingButtonElements = document.querySelectorAll(
  '#rating-button-1, #rating-button-2, #rating-button-3, #rating-button-4, #rating-button-5'
);

console.log(ratingButtonElements);

for (let i = 0; i < ratingButtonElements.length; i++) {
  ratingButtonElements[i].addEventListener('click', function () {
    if (currentRate) {
      ratingButtonElements[currentRate - 1].classList.remove('selected');
    }
    ratingButtonElements[i].classList.add('selected');
    submitButtonElement.classList.remove('disabled');

    currentRate = i + 1;
    finalRateElement.textContent = ` ${currentRate} `;
  });
}

const ratingCardElement = document.querySelector('#rating-card');
const greetingsCardElement = document.querySelector('#greetings-card');
const submitButtonElement = document.querySelector('#submit-button');

submitButtonElement.addEventListener('click', function (e) {
  e.preventDefault();

  ratingCardElement.classList.add('hide');
  greetingsCardElement.classList.remove('hide');
});
