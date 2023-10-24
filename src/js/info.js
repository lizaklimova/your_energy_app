document.addEventListener('DOMContentLoaded', function () {
  const additionalText = document.querySelector('.text-content');
  const mobileMediaQuery = window.matchMedia('(max-width: 375px)');
  const tabletMediaQuery = window.matchMedia(
    '(min-width: 768px) and (max-width: 1439px)'
  );
  let isTextExpanded = false;
  let originalText = additionalText.textContent;

  additionalText.addEventListener('click', toggleText);

  function toggleText() {
    if (mobileMediaQuery.matches) {
      if (isTextExpanded) {
        // Если текст был развернут, восстанавливаем оригинальный текст
        additionalText.textContent = originalText;
        isTextExpanded = false;
      } else {
        // Если текст был сокращен, показываем полную длину текста
        additionalText.textContent = originalText;
        isTextExpanded = true;
      }
    }
    if (tabletMediaQuery.matches) {
      additionalText.textContent = originalText;
      isTextExpanded = false;
    } else {
      additionalText.textContent = originalText;
      isTextExpanded = true;
    }
  }

  if (mobileMediaQuery.matches) {
    // Если на мобильной версии, ограничиваем текст до 220 символов
    const maxLength = 210;
    if (originalText.length > maxLength) {
      additionalText.textContent = originalText.slice(0, maxLength) + '...';
    }
  }
  if (tabletMediaQuery.matches) {
    const maxLength = 252;
    if (originalText.length > maxLength) {
      additionalText.textContent = originalText.slice(0, maxLength) + '...';
    }
  }
});
