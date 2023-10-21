export function initializeModal() {
  const openModalButton = document.querySelector('[data-exmod-open]');
  const closeModalButton = document.querySelector('[data-exmod-close]');
  const modalElement = document.querySelector('[data-exmodal]');

  openModalButton.addEventListener('click', toggleModal);
  closeModalButton.addEventListener('click', toggleModal);

  function toggleModal() {
    modalElement.classList.toggle('is-hidden');
  }
}
