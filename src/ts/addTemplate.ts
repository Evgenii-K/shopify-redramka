const popupClass = '.attempt__wrapper'
const closeButtonClass = '.attempt__button-close'
const innerHTMLClass = '.attempt__content'
const activePopupClass = 'attempt__active'

function addTemplate () {
  const div = document.createElement('div')
  div.classList.add('attempt')
  div.innerHTML = `
    <div class="attempt__wrapper">
      <div class="attempt__header">
        <div class="attempt__set-price">
          <span>Set your own price</span>&nbsp;with&nbsp;
          <a href="#"><img src="https://smartptt.dev.redramka.ru/shopify/sale_logo.svg" alt="BATNA"></a>
        </div>
        <img src="https://smartptt.dev.redramka.ru/shopify/close.svg" class="attempt__button-close">
      </div>
      <div class="attempt__content">
      </div>
      <form id="attempt" class="attempt__form">
        <input class="attempt__form-item attempt__form-input" type="number" min="1" step="1" placeholder="Aa" disabled>
        <button id="attempt_submit" class="attempt__form-item attempt__form-submit attempt__hidden" type="submit">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7825 0.71751C17.6813 0.616765 17.5534 0.547013 17.4139 0.516455C17.2744 0.485897 17.1291 0.495804 16.995 0.54501L0.495001 6.54501C0.352702 6.59898 0.230191 6.69497 0.143739 6.82023C0.0572872 6.94548 0.0109863 7.09407 0.0109863 7.24626C0.0109863 7.39845 0.0572872 7.54704 0.143739 7.67229C0.230191 7.79755 0.352702 7.89354 0.495001 7.94751L6.9375 10.52L11.6925 5.75001L12.75 6.80751L7.9725 11.585L10.5525 18.0275C10.6081 18.1671 10.7043 18.2867 10.8286 18.3709C10.953 18.4552 11.0998 18.5002 11.25 18.5C11.4016 18.4969 11.5486 18.4479 11.6718 18.3596C11.795 18.2712 11.8885 18.1476 11.94 18.005L17.94 1.50501C17.9911 1.37232 18.0034 1.22783 17.9755 1.0884C17.9477 0.948973 17.8807 0.820343 17.7825 0.71751Z" fill="#BBBBBB"/>
          </svg>
        </button>
      </form>
    </div>
  `
  document.body.append(div)

  const popup = document.querySelector(popupClass)!
  const form: HTMLFormElement = document.querySelector('#attempt')!
  const input: HTMLInputElement = form.querySelector('input')!
  const buttonSubmit: HTMLButtonElement = form.querySelector('button')!
  const closeButton = document.querySelector(closeButtonClass)!
  const chatTeg = document.querySelector(innerHTMLClass)!

  function isMobileSize (): boolean {
    const windowWidth = document.documentElement.clientWidth
    return windowWidth <= 768
  }

  function showPopup () {
    popup.classList.add(activePopupClass)
    if (isMobileSize()) document.body.style.position = 'fixed'
  }

  function closePopup () {
    popup.classList.remove(activePopupClass)
    document.body.style.position = 'static'
  }

  closeButton.addEventListener('click', closePopup)

  return { popup, form, input, buttonSubmit, chatTeg, showPopup, closePopup }
}

export default addTemplate
