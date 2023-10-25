let buttonTop = document.getElementById('buttonTop');
let idAnimationScroll = null;

window.addEventListener('scroll', function () {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    buttonTop.style.display = 'block';
  } else {
    buttonTop.style.display = 'none';
  }
});

buttonTop.addEventListener('click', function () {
  smoothScrollToTop();
});

function smoothScrollToTop() {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    idAnimationScroll = window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 30);
  }
}
 window.addEventListener('wheel', function () {
    cancelAnimationFrame(idAnimationScroll);
 });
  
 window.addEventListener('keyup', function () {
    cancelAnimationFrame(idAnimationScroll);
  });

export function createSmoothScrollBottom(elementWidth, direction) {
  const { height: cardHeight } = elementWidth;
  const scrollAmount = cardHeight * direction;
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

export function createSmoothScrollUp(elementToScrollTo) {
  elementToScrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
