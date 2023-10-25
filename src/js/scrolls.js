let buttonTop = document.getElementById('buttonTop');


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
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 30);
  }
}

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

export const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow:hidden;
      position:fixed;
      top: -${scrollController.scrollPosition}px;
      left:0;
      height:100vh;
      width:100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}
      `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};
