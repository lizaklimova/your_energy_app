document.addEventListener('DOMContentLoaded', function () {
  const additionalText = document.querySelector('.text-content');
  const buttonUp = document.querySelector('.info__button-up');
  const buttonDown = document.querySelector('.info__button-down');
  const mobileMediaQuery = window.matchMedia('(min-width: 768px)');
  const tabletMediaQuery = window.matchMedia('(max-width: 1439px)');
  let isTextExpanded = false;
  let originalText = additionalText.textContent;
  let maxLengthMobile = 210; // Максимальная длина текста на мобильных устройствах
  let maxLengthTablet = 252; // Максимальная длина текста на планшетных устройствах

  function setButtonVisibility(upVisible, downVisible) {
    buttonUp.style.display = upVisible ? 'block' : 'none';
    buttonDown.style.display = downVisible ? 'block' : 'none';
  }

  function limitText() {
    if (mobileMediaQuery.matches) {
      additionalText.textContent =
        originalText.slice(0, maxLengthMobile) + '...';
    } else if (tabletMediaQuery.matches) {
      additionalText.textContent =
        originalText.slice(0, maxLengthTablet) + '...';
    }
    isTextExpanded = false;
    setButtonVisibility(false, true);
  }

  function expandText() {
    additionalText.textContent = originalText;
    isTextExpanded = true;
    setButtonVisibility(true, false);
  }

  // Ограничиваем текст по умолчанию
  limitText();

  buttonDown.addEventListener('click', expandText);
  buttonUp.addEventListener('click', limitText);
});
