var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function styleSheet() {
    let style = document.createElement('style');
    style.innerHTML = `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:ital@1&display=swap");

    .cart__button {
      width: 100%;
      height: 50px;
      background: #FF4B2B;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.08em;
      color: #FFFFFF;
      cursor: pointer;
      margin-top: 10px;
    }

    .cart__button--negotiate {
      background: #FF4B2B;
      color: #FFFFFF;
    }

    .cart__button--add-tags {
      background: #000000;
      color: #FFFFFF;
    }

    ._hidden {
      display: none !important;
    }

    .attempt__wrapper {
      z-index: 100001;
      position: fixed;
      bottom: 0;
      right: 0;
      height: 812px;
      max-height: 100vh;
      width: 375px;
      overflow: hidden;
      background: #FFFFFF;
      opacity: 0;
      visibility: hidden;
      -webkit-transition: opacity .3s ease 0s;
      transition: opacity .3s ease 0s;
    }

    .attempt__active {
      opacity: 1;
      visibility: visible;
    }

    .attempt__header {
      position: absolute;
      top: 0;
      right: 0;
      width: 375px;
      height: 60px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      background: #FFFFFF;
      z-index: 100002;
      padding: 0 20px;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }

    .attempt__button-close {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }

    .attempt__content {
      z-index: 100001;
      padding: 84px 16px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      overflow-y: scroll;
      width: 100%;
      height: 100%;
      position: absolute;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      -ms-overflow-style: none;
      /* IE и Edge */
      scrollbar-width: none;
      /* Firefox */
    }

    .attempt__content::-webkit-scrollbar {
      display: none;
    }

    .attempt__initial-price {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 64px;
      line-height: 77px;
      letter-spacing: 0.08em;
      color: #000000;
    }

    .attempt__offered-price {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      color: #000000;
    }

    .attempt__set-price {
      -ms-flex-item-align: center;
          align-self: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    .attempt__set-price span {
      font-weight: 700;
    }

    .attempt__sale {
      height: 66px;
      padding: 0 16px 0;
    }

    .attempt__sale::after {
      border: 20px solid transparent;
      border-right: 20px solid black;
    }

    .attempt__choice {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 16px;
    }

    .attempt__choice--answer {
      -ms-flex-item-align: start;
          align-self: flex-start;
    }

    .attempt__choice-button {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      background: #FFFFFF;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      padding: 12px 20px;
      border-radius: 24px;
      border: 2px solid #FF4B2B;
      cursor: pointer;
    }

    .attempt__choice-button--more {
      padding: 12px 16px;
    }

    .attempt__choice-button--ignore {
      color: #000000;
      margin-right: 8px;
      border: 2px solid #000000;
    }

    .attempt__choice-button--negotiate {
      color: #FF4B2B;
      border: 2px solid #FF4B2B;
    }

    .attempt__form {
      position: absolute;
      right: 0;
      bottom: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 375px;
      height: 60px;
      border-top: 1px solid #939393;
      background: #FFFFFF;
      z-index: 100002;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }

    .attempt__form-input {
      padding-right: 56px;
      padding-left: 20px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #000000;
      height: 100%;
      width: 100%;
      border: none;
    }

    .attempt__form-input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0;
      /* <-- Apparently some margin are still there even though it's hidden */
    }

    .attempt__form-input:focus {
      outline: none;
    }

    .attempt__form-input::-webkit-input-placeholder {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #BBBBBB;
    }

    .attempt__form-input:-ms-input-placeholder {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #BBBBBB;
    }

    .attempt__form-input::-ms-input-placeholder {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #BBBBBB;
    }

    .attempt__form-input::placeholder {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #BBBBBB;
    }

    .attempt__form-submit {
      position: absolute;
      width: 56px;
      height: 100%;
      background-color: #f4f4f4;
      top: 5px;
      right: 0;
      cursor: pointer;
      padding: 0;
      border: 0;
    }

    .attempt__card {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      width: 270px;
      border-radius: 20px;
      -ms-flex-item-align: start;
          align-self: flex-start;
      background: #F0F0F0;
      margin-bottom: 16px;
    }

    .attempt__card-content {
      padding: 20px 16px;
    }

    .attempt__card img {
      width: 100%;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .attempt__card-label {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 22px;
      color: #000000;
    }

    .attempt__card-price {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
    }

    .attempt__card-description {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #000000;
    }

    .attempt__message {
      max-width: 238px;
      background: #F0F0F0;
      border-radius: 24px;
      -ms-flex-item-align: start;
          align-self: flex-start;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      padding: 12px 16px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #000000;
      margin-bottom: 16px;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }

    .attempt__message--first {
      margin-bottom: 4px;
      border-bottom-left-radius: 0;
    }

    .attempt__message--second {
      border-top-left-radius: 0;
    }

    .attempt__message--answer {
      color: #FFFFFF;
      background: #FF4B2B;
      -ms-flex-item-align: end;
          align-self: flex-end;
    }

    .attempt__message--checkout {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
      max-width: 270px;
    }

    .attempt__message--sale {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #FFFFFF;
      width: 46px;
      height: 32px;
      background: #FF4B2B;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      margin-top: 4px;
      position: relative;
      margin-left: 16px;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }

    .attempt__message--sale::after {
      content: '';
      position: absolute;
      border: 16px solid transparent;
      border-right: 16px solid #FF4B2B;
      right: 46px;
    }

    .attempt__message-price {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 4px;
    }

    .attempt__message-price--negative {
      -webkit-text-decoration-line: line-through;
              text-decoration-line: line-through;
      color: #000000;
    }

    .attempt__message-price--attention {
      color: #FF4B2B;
    }

    .attempt__message span {
      font-weight: 600;
    }

    .attempt__image-thumbs {
      margin-bottom: 16px;
      min-height: 68px;
      -ms-flex-item-align: start;
          align-self: flex-start;
      width: 100%;
    }

    .attempt__image-thumbs--up {
      background: url('https://smartptt.dev.redramka.ru/shopify/thumbs_up.png') 0 50%/136px 68px no-repeat;
    }

    .attempt__image-thumbs--down {
      background: url('https://smartptt.dev.redramka.ru/shopify/thumbs_down.png') 0 50%/68px 68px no-repeat;
    }
    /*# sourceMappingURL=index.css.map */
    `;
    document.head.append(style);
}
function attempt() {
    let div = document.createElement('div');
    div.classList.add('attempt');
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
        <div class="attempt__card">
        </div>
        <div class="attempt__message attempt__message--answer">30</div>
        <div class="attempt__image-thumbs attempt__image-thumbs--down"></div>
        <div class="attempt__image-thumbs attempt__image-thumbs--up"></div>
        <div class="attempt__message attempt__message--first">Congratulations! We have a personal offer for you!</div>
        <div class="attempt__message attempt__message--second attempt__message--checkout">
          <div class="attempt__message-price attempt__message-price--negative">£45.00</div>
          <div class="attempt__message-price attempt__message-price--attention">£45.00</div>
          <span>The product was added to your shopping cart!</span>
        </div>
        <div class="attempt__message attempt__message--checkout">
          <div class="attempt__message-price attempt__message-price--attention">£30.00</div>
          if you buy extra product marked by this sign:
          <div class="attempt__message--sale">%</div>
        </div>
      </div>
      <form id="attempt" class="attempt__form">
        <input class="attempt__form-item attempt__form-input" type="number" min="1" step="1" placeholder="Enter price in USD">
        <button id="attempt_submit" class="attempt__form-item attempt__form-submit">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7825 0.71751C17.6813 0.616765 17.5534 0.547013 17.4139 0.516455C17.2744 0.485897 17.1291 0.495804 16.995 0.54501L0.495001 6.54501C0.352702 6.59898 0.230191 6.69497 0.143739 6.82023C0.0572872 6.94548 0.0109863 7.09407 0.0109863 7.24626C0.0109863 7.39845 0.0572872 7.54704 0.143739 7.67229C0.230191 7.79755 0.352702 7.89354 0.495001 7.94751L6.9375 10.52L11.6925 5.75001L12.75 6.80751L7.9725 11.585L10.5525 18.0275C10.6081 18.1671 10.7043 18.2867 10.8286 18.3709C10.953 18.4552 11.0998 18.5002 11.25 18.5C11.4016 18.4969 11.5486 18.4479 11.6718 18.3596C11.795 18.2712 11.8885 18.1476 11.94 18.005L17.94 1.50501C17.9911 1.37232 18.0034 1.22783 17.9755 1.0884C17.9477 0.948973 17.8807 0.820343 17.7825 0.71751Z" fill="#BBBBBB"/>
          </svg>
        </button>
      </form>
    </div>
  `;
    document.body.append(div);
}
const plugin__title = 'Batna';
let firstLoading = true;
let attemptCount = 0;
const messages = {
    hi: `<div class="attempt__message attempt__message--first">Hi, I'm ${plugin__title}, nice to meet you!</div>
       <div class="attempt__message attempt__message--second">Do you want to negotiate a discount? 😉</div>`,
    negotiate: `<div class="attempt__message attempt__message--answer">Negotiate</div>`,
    no: `<div class="attempt__message attempt__message--answer">No</div>`,
    choice: `<div class="attempt__choice">
            <button class="attempt__choice-button attempt__choice-button--ignore">NO</button>
            <button class="attempt__choice-button attempt__choice-button--negotiate">NEGOTIATE</button>
           </div>`,
    checkout: `<div class="attempt__choice attempt__choice--answer">
              <button class="attempt__choice-button attempt__choice-button--ignore">Close</button>
              <button class="attempt__choice-button attempt__choice-button--negotiate">Checkout</button>
             </div>`,
    compare: `<div class="attempt__message">${plugin__title} will compare your offer to offers of other customers. If your offer is high enough — you will get an approval!</div>`,
    loader: `<div class="attempt__message attempt__loader"><img src="https://smartptt.dev.redramka.ru/shopify/loading.svg" alt="..."></div>`,
    catalog: `<div class="attempt__choice attempt__choice--answer">
             <button class="attempt__choice-button attempt__choice-button--more attempt__choice-button--negotiate">See list of marked products (92)</button>
            </div>`
};
const activePopupClass = 'attempt__active';
const showButtonClass = '.cart__button--negotiate';
const closeButtonClass = '.attempt__button-close';
const popupClass = '.attempt__wrapper';
function addNegotiateButton(addToCartButton) {
    let div = document.createElement('button');
    div.classList.add('cart__button', 'cart__button--negotiate');
    div.innerHTML = 'NEGOTIATE A PRICE';
    addToCartButton.after(div);
}
function showPopup() {
    const showButton = document.querySelector(showButtonClass);
    const closeButton = document.querySelector(closeButtonClass);
    const popup = document.querySelector(popupClass);
    showButton.addEventListener('click', () => {
        popup.classList.add(activePopupClass);
    });
    closeButton.addEventListener('click', () => {
        popup.classList.remove(activePopupClass);
    });
}
function addMessage(html) {
    const content = document.querySelector('.attempt__content');
    if (!content)
        return;
    content.innerHTML += html;
}
function addTitle(title, price, image) {
    const container = document.querySelector('.attempt__card');
    container.innerHTML = `
      <img class="attempt__card-image" src="${image}" />
      <div class="attempt__card-content">
        <div class="attempt__card-label">${title}</div>
        <div class="attempt__card-price">£${price}</div>
        <div class="attempt__card-description">Free delivery on orders over £75.00 • 14 day returns • Pink color • Size M</div>
      </div>
  `;
    if (firstLoading) {
        console.log('first');
        addMessage(messages.loader);
        setTimeout(() => {
            removeLoader();
            addMessage(messages.hi);
            addChoice();
            firstLoading = false;
        }, 1000);
    }
}
function removeLoader() {
    document.querySelector('.attempt__loader').remove();
}
function addChoice() {
    addMessage(messages.choice);
    document.querySelector('.attempt__choice-button--ignore').addEventListener('click', () => {
        document.querySelector('.attempt__choice').remove();
        addMessage(messages.no);
        setTimeout(() => {
            document.querySelector(popupClass).classList.remove(activePopupClass);
        }, 1000);
    });
    document.querySelector('.attempt__choice-button--negotiate').addEventListener('click', () => {
        document.querySelector('.attempt__choice').remove();
        addMessage(messages.negotiate);
        addMessage(messages.loader);
        setTimeout(() => {
            removeLoader();
            addMessage(messages.compare);
        }, 1000);
    });
}
function submitAttempt() {
    document.querySelector('#attempt_submit').addEventListener('click', (e) => {
        e.preventDefault();
    });
}
function fetchCatalogList() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = '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';
        const shopifyHeader = {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': token
        };
        return fetch(`/admin/api/2021-10/products.json`, { headers: shopifyHeader }).then(res => res.json());
    });
}
setTimeout(() => __awaiter(this, void 0, void 0, function* () {
    console.log(`${plugin__title} script works`);
    const addToCartClass = '#AddToCart-product-template';
    const addToCartButton = document.querySelector(addToCartClass);
    const currentHref = window.location.pathname;
    if (addToCartButton) {
        styleSheet();
        attempt();
        submitAttempt();
        addNegotiateButton(addToCartButton);
        showPopup();
        let price = '';
        let title = '';
        let image = '';
        const response = yield fetch(`${currentHref}/metafields.js`).then(res => res.json());
        const metafields = yield response;
        console.log(metafields);
        if (metafields) {
            price = metafields.price ? metafields.price : '';
            title = metafields.title ? metafields.title : '';
            image = metafields.featured_image ? metafields.featured_image : '';
        }
        const showButton = document.querySelector(showButtonClass);
        showButton.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            console.log('red button clicked');
            const search = window.location.search;
            if (search && metafields.variants) {
                const id = search.split('=')[1];
                const variant = metafields.variants.find((item) => item.id == id);
                variant ? price = variant.price : price;
            }
            addTitle(title, price, image);
        }));
    }
    else {
        const catalogMetafields = yield fetchCatalogList();
        console.log(catalogMetafields);
    }
}), 1000);
//# sourceMappingURL=order__popup.js.map