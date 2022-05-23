export function showPopup () {

  const showButtonClass = '.cart__button--negotiate';
  const closeButtonClass = '.attempt__button-close';
  const popupClass = '.attempt__wrapper';
  const activePopupClass = 'attempt__active';

  const showButton = document.querySelector(showButtonClass);
  const closeButton = document.querySelector(closeButtonClass);
  const popup = document.querySelector(popupClass);

  showButton.addEventListener('click', () => {
    popup.classList.add(activePopupClass);
  })

  closeButton.addEventListener('click', () => {
    popup.classList.remove(activePopupClass);
  })
}