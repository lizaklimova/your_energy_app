const ratingRef = document.querySelector('.rating');

let ratingActive = document.querySelector('.rating__active');
let ratingValue = document.querySelector('.rating__value');

setRatingActiveWidth();
setRating();

function setRatingActiveWidth(index = ratingValue.innerHTML) {
  const ratingActiveWidth = index / 0.05;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}

function setRating() {
  const ratingItems = document.querySelectorAll('.rating__radio');

  ratingItems.forEach((ratingItem, index) => {
    ratingItem.addEventListener('mouseenter', onRatingEnter);
    ratingItem.addEventListener('mouseleave', onRatingLeave);
    ratingItem.addEventListener('click', onRatingClick);

    function onRatingLeave() {
      setRatingActiveWidth();
    }
    function onRatingEnter() {
      setRatingActiveWidth(ratingItem.value);
    }

    function onRatingClick() {
      ratingValue.innerHTML = index + 1 + '.0';
      setRatingActiveWidth();
    }
  });
}
