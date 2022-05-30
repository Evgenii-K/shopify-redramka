var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const localhost = window.location.pathname.split('/');
const productItemLink = 'product-item__link'; // класс ссылки корточки товара в каталоге
const productItem = 'product-item'; // класс карточки товара на странице
const productItemWrapper = 'product-item__link-wrapper'; // класс враппера в карточке
const productPriceWrapper = 'product-item__price-wrapper'; // класс враппера цены в катоге товара
const addToCartClass = '#AddToCart-product-template'; // класс кнопки добавить в корзину
const productCartItem = 'cart__row'; // класс карточки товара в корзине
const productCardPrice = 'js-price'; // класс цены в карточке товара
const addToCartButton = document.querySelector(addToCartClass);
let addToCartButtonStyles;
if (addToCartButton) {
    addToCartButtonStyles = window.getComputedStyle(addToCartButton);
}
const currentHostName = window.location.hostname;
const currentHostProtocol = window.location.protocol;
const userIdCookieName = '_shopify_y'; // идентификатор пользователя в куках сайта
let userId = '';
const cookieId = document.cookie.split(';').map(item => item.split('=')).find(item => item[0].trim() === userIdCookieName);
if (cookieId) {
    userId = cookieId[1];
}
console.log('userId: ', userId);
const host = 'https://stage.skidka.vip';
// const productId = 'cca99975-7381-4101-959a-79002815f0b8'
const productId = '0c2bdc57-5d9e-4824-88b9-6142cae1e101';
const fakeScanCode = {
    error: {},
    data: {
        basket: {
            groups: [
                {
                    added_products: [],
                    offered_products: []
                }
            ]
        },
        screen: {
            previous_price: 5000,
            product: {
                is_last_attempt: false,
                price: 7260,
                price_discount: 6475,
                display_price: 7000,
                category: 'Blue Silk Tuxedo',
                img_link: 'https://skidkavip.b-cdn.net/images/product/216bd6591f90e301bd7855ffec07b9ec.jpeg'
            }
        }
    },
    session: '46a31ac1-2c17-4071-b103-2a40bcbfc780'
};
const fakeCatalogApi = [
    'blue-silk-tuxedo', 'floral-white-top', 'silk-summer-top'
];
// классы попап
const activePopupClass = 'attempt__active';
const activePopupContentClass = 'attempt__content';
const showButtonClass = '.cart__button--negotiate';
const closeButtonClass = '.attempt__button-close';
const popupClass = '.attempt__wrapper';
const innerHTMLClass = '.attempt__content';
const messageClass = 'attempt__message';
const loaderClass = '.attempt__loader';
const firstMessage = 'attempt__message--first';
const secondMessage = 'attempt__message--second';
const hiddenClass = 'attempt__hidden';
// placeholder for input
const inputPlaceholder = 'Enter price in USD';
const inputPlaceholderDisable = 'Aa';
// админка
let salePosition = 'bottomRight';
let chatPosition = 'right';
let salePositionPrice = false;
const mainColor = '#FF4B2B';
const fontSize = 15;
const negotiateButtonStyle = {
    fontFamily: (addToCartButtonStyles === null || addToCartButtonStyles === void 0 ? void 0 : addToCartButtonStyles.fontFamily) ? addToCartButtonStyles.fontFamily : 'Inter',
    fontStyle: (addToCartButtonStyles === null || addToCartButtonStyles === void 0 ? void 0 : addToCartButtonStyles.fontStyle) ? addToCartButtonStyles.fontStyle : 'normal',
    fontWeight: (addToCartButtonStyles === null || addToCartButtonStyles === void 0 ? void 0 : addToCartButtonStyles.fontWeight) ? addToCartButtonStyles.fontWeight : 400,
    fontSize: (addToCartButtonStyles === null || addToCartButtonStyles === void 0 ? void 0 : addToCartButtonStyles.fontSize) ? addToCartButtonStyles.fontSize : '15px',
    lineHeight: (addToCartButtonStyles === null || addToCartButtonStyles === void 0 ? void 0 : addToCartButtonStyles.lineHeight) ? addToCartButtonStyles.lineHeight : '17px',
    letterSpacing: (addToCartButtonStyles === null || addToCartButtonStyles === void 0 ? void 0 : addToCartButtonStyles.letterSpacing) ? addToCartButtonStyles.letterSpacing : '0.08em'
};
const salePositionStyle = {
    top: 'auto',
    left: 'auto',
    bottom: 'auto',
    right: 'auto',
    rotate: 0,
    position: 'absolute'
};
if (salePositionPrice || !localhost.includes('collections')) {
    salePosition = 'onPrice';
}
switch (salePosition) {
    case ('bottomRight'):
        salePositionStyle.bottom = 0;
        salePositionStyle.right = 0;
        salePositionStyle.rotate = 180;
        break;
    case ('topRight'):
        salePositionStyle.top = 0;
        salePositionStyle.right = 0;
        salePositionStyle.rotate = 180;
        break;
    case ('bottomLeft'):
        salePositionStyle.bottom = 0;
        salePositionStyle.left = 0;
        salePositionStyle.rotate = 0;
        break;
    case ('topLeft'):
        salePositionStyle.top = 0;
        salePositionStyle.left = 0;
        salePositionStyle.rotate = 0;
        break;
    case ('onPrice'):
        salePositionStyle.position = 'static';
        salePositionStyle.rotate = 180;
        break;
    default:
        console.log('default');
}
function styleSheet() {
    let style = document.createElement('style');
    style.innerHTML = `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:ital@1&display=swap");

    .cart__button {
      width: 100%;
      height: 50px;
      background: ${mainColor};
      font-family: ${negotiateButtonStyle.fontFamily};
      font-style: ${negotiateButtonStyle.fontStyle};
      font-weight: ${negotiateButtonStyle.fontWeight};
      font-size: ${negotiateButtonStyle.fontSize};
      line-height: ${negotiateButtonStyle.lineHeight};
      letter-spacing: ${negotiateButtonStyle.letterSpacing};
      color: #FFFFFF;
      cursor: pointer;
      margin-top: 10px;
    }

    .cart__button--negotiate {
      background: ${mainColor};
      color: #FFFFFF;
    }

    .cart__button--add-tags {
      background: #000000;
      color: #FFFFFF;
    }

    ._hidden {
      display: none !important;
    }

    .attempt__hidden {
      display: none !important;
    }

    .attempt__wrapper {
      z-index: 100001;
      position: fixed;
      bottom: 0;
      ${chatPosition}: 0;
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
      border: 2px solid ${mainColor};
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
      color: ${mainColor};
      border: 2px solid ${mainColor};
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
      background-color: #fff;
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

    .attempt__form-input:disabled {
      background: #FFFFFF;
    }

    .attempt__form-submit {
      position: absolute;
      width: 56px;
      height: 100%;
      background-color: #fff;
      top: 5px;
      right: 0;
      cursor: pointer;
      padding: 0;
      border: 0;
    }

    .attempt__form-submit:hover path {
      fill: ${mainColor};
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
      background: ${mainColor};
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
      background: ${mainColor};
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
      border-right: 16px solid ${mainColor};
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
      color: ${mainColor};
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

    .attempt__round-label {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 58px;
      text-transform: uppercase;
      color: #FFFFFF;
      width: 90px;
      height: 90px;
      background: ${mainColor};
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      position: fixed;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      border-radius: 50%;
      z-index: 10;
      right: 60px;
      bottom: 60px;
      -webkit-box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
              box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    
    .attempt__round-label::after {
      content: '';
      position: absolute;
      border: 20px solid transparent;
      border-right: 20px solid ${mainColor};
      border-bottom: 20px solid ${mainColor};
      right: 0px;
      bottom: 0px;
    }
    
    .attempt__sale-label {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #FFFFFF;
      width: 34px;
      height: 24px;
      background: ${mainColor};
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      position: ${salePositionStyle.position};
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      z-index: 10;
      right: ${salePositionStyle.right};
      bottom: ${salePositionStyle.bottom};
      left: ${salePositionStyle.left};
      top: ${salePositionStyle.top};
      transform: rotate(${salePositionStyle.rotate}deg);
      display: inline-flex;
      text-decoration: none !important;
      margin-left: 20px;
    }
    
    .attempt__sale-label::after {
      content: '';
      position: absolute;
      border: 12px solid transparent;
      border-left: 12px solid ${mainColor};
      right: -24px;
      bottom: 0px;
    }

    .product-item__price-wrapper--decoration {
      text-decoration: line-through;
    }
    
    .product-item__price-wrapper--attempt {
      font-size: ${fontSize}px;
      color: ${mainColor};
      text-decoration: none;
      display: inline-block;
      padding-left: 12px;
    }

    @media screen and (max-width: 768px) {
      .attempt__header {
        width: 100%;
      }
      .attempt__wrapper {
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .attempt__form {
        width: 100%;
      }
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
  `;
    document.body.append(div);
    popup = document.querySelector(popupClass);
    form = document.querySelector('#attempt');
    input = form.querySelector('input');
    buttonSubmit = form.querySelector('button');
    closeButton = document.querySelector(closeButtonClass);
    chatTeg = document.querySelector(innerHTMLClass);
    closeButton.addEventListener('click', closePopup);
}
// --------------------------
let previous_price = 0;
let price_discount = 0;
let itemName = '';
let img = '';
let price = '';
let isChatOpened = false;
let isFirstLoading = true;
let isLastAttempt = false;
let isStartTrade = false;
let isAttemptEnded = false;
let isInputHidden = true;
let attemptCount = 0;
const messages = {
    hi: `<div class="attempt__message attempt__message--first">Hi, I'm Batna, nice to meet you!</div>
       <div class="attempt__message attempt__message--second">Do you want to negotiate a discount? 😉</div>`,
    negotiate: `<div class="attempt__message attempt__message--answer">Negotiate</div>`,
    no: `<div class="attempt__message attempt__message--answer">No</div>`,
    choice: `<div class="attempt__choice">
            <button class="attempt__choice-button attempt__choice-button--ignore">NO</button>
            <button class="attempt__choice-button attempt__choice-button--negotiate">NEGOTIATE</button>
           </div>`,
    areYouSure: `<div class="attempt__choice">
                <button class="attempt__choice-button attempt__choice-button--ignore">No</button>
                <button class="attempt__choice-button attempt__choice-button--negotiate">Yes, I’m sure</button>
              </div>`,
    checkout: `<div class="attempt__choice attempt__choice--answer">
              <button class="attempt__choice-button attempt__choice-button--ignore">Close</button>
              <button class="attempt__choice-button attempt__choice-button--negotiate">Checkout</button>
             </div>`,
    switchToNew: `<div class="attempt__choice attempt__choice--answer">
                <button class="attempt__choice-button attempt__choice-button--ignore">No</button>
                <button class="attempt__choice-button attempt__choice-button--negotiate">Yes</button>
              </div>`,
    singleItem: `<div class="attempt__message">You can negotiate price on a single item at a time. Are you sure you want to switch to ${itemName}?</div>`,
    startTrade: `<div class="attempt__message">BATNA will compare your offer to offers of other customers. If your offer is high enough — you will get an approval!</div>`,
    loader: `<div class="attempt__message attempt__loader"><img src="https://smartptt.dev.redramka.ru/shopify/loading.svg" alt="..."></div>`,
    dislike: `<div class="attempt__image-thumbs attempt__image-thumbs--down"></div>`,
    like: `<div class="attempt__image-thumbs attempt__image-thumbs--up"></div>`,
    tooLow: `<div class="attempt__message">Your offer is too low! Try to offer more!</div>`,
    finalAttempt: `<div class="attempt__message">You have the final attempt!</div>`,
    congratulations: `<div class="attempt__message attempt__message--first">Congratulations! We have a personal offer for you!</div>`,
    offerPrice: `<div class="attempt__message attempt__message--second attempt__message--checkout">
                <div class="attempt__message-price attempt__message-price--negative">£45.00</div>
                <div class="attempt__message-price attempt__message-price--attention">£40.00</div>
                <span>The product was added to your shopping cart!</span>
               </div>`,
    offerAddMore: `<div class="attempt__message attempt__message--checkout">
                  <div class="attempt__message-price attempt__message-price--attention">£30.00</div>
                  if you buy extra product marked by this sign:
                  <div class="attempt__message--sale">%</div>
                 </div>`,
    enterDesired: `<div class="attempt__message">Ok! 👌 Enter your desired price.</div>`,
};
function isMobileSize() {
    const windowWidth = document.documentElement.clientWidth;
    return windowWidth <= 768;
}
function addNegotiateButton(addToCartButton) {
    let div = document.createElement('button');
    div.classList.add('cart__button', 'cart__button--negotiate');
    div.innerHTML = 'NEGOTIATE A PRICE';
    addToCartButton.after(div);
}
function removeNegotiateButton() {
    var _a;
    (_a = document.querySelector('.cart__button--negotiate')) === null || _a === void 0 ? void 0 : _a.remove();
}
function answerMessage(text) {
    chatTeg.insertAdjacentHTML('beforeend', `<div class="attempt__message attempt__message--answer">${text}</div>`);
    scrollChat();
}
function showPopup() {
    popup.classList.add(activePopupClass);
    if (isMobileSize)
        document.body.style.position = 'fixed';
}
function closePopup() {
    popup.classList.remove(activePopupClass);
    document.body.style.position = 'static';
}
function setInputDisable() {
    input.setAttribute('disabled', '');
    input.placeholder = inputPlaceholderDisable;
    buttonSubmit.classList.add(hiddenClass);
    isInputHidden = true;
}
function removeInputDisable() {
    input.removeAttribute('disabled');
    input.placeholder = inputPlaceholder;
    buttonSubmit.classList.remove(hiddenClass);
    isInputHidden = false;
}
function scrollChat() {
    setTimeout(() => {
        chatTeg.scrollTop = chatTeg.scrollHeight;
    }, 500);
}
function addMessage(html, record) {
    var _a, _b, _c, _d;
    scrollChat();
    chatTeg.insertAdjacentHTML('beforeend', html);
    const nodeListLength = chatTeg.childNodes.length;
    const firstLastNode = chatTeg.childNodes[nodeListLength - 2];
    const secondLastNode = chatTeg.childNodes[nodeListLength - 1];
    if (((_a = firstLastNode.classList) === null || _a === void 0 ? void 0 : _a.contains(messageClass)) && ((_b = firstLastNode.classList) === null || _b === void 0 ? void 0 : _b.length) === 1
        && ((_c = secondLastNode.classList) === null || _c === void 0 ? void 0 : _c.contains(messageClass)) && ((_d = secondLastNode.classList) === null || _d === void 0 ? void 0 : _d.length) === 1) {
        firstLastNode.classList.add(firstMessage);
        secondLastNode.classList.add(secondMessage);
    }
    if (record) {
        setLocalStorage();
    }
}
function setLocalStorage() {
    const pathname = window.location.pathname;
    const chatHTML = document.querySelector(`.${activePopupContentClass}`).innerHTML;
    const chat = {
        chatHTML,
        isFirstLoading,
        isLastAttempt,
        isStartTrade,
        isAttemptEnded,
        isInputHidden
    };
    localStorage.setItem(pathname, JSON.stringify(chat));
}
function getLocalStorage() {
    const pathname = window.location.pathname;
    return JSON.parse(localStorage.getItem(pathname));
}
function setChat(chat) {
    const chatContainer = document.querySelector(`.${activePopupContentClass}`);
    chatContainer.innerHTML = chat;
    isStartTrade = true;
}
function addHeader(img, price) {
    const content = document.querySelector('.attempt__content');
    const header = document.createElement('div');
    header.classList.add('attempt__card');
    header.innerHTML = `
    <img class="attempt__card-image" src="${img}"/>
    <div class="attempt__card-content">
      <div class="attempt__card-label">Womens Signature Overhead Hoodie - Mullberry</div>
      <div class="attempt__card-price">£${price}</div>
      <div class="attempt__card-description">Free delivery on orders over £75.00 • 14 day returns • Pink color • Size M</div>
    </div>
  `;
    content.insertAdjacentElement('beforeend', header);
}
function removeLoader() {
    document.querySelector('.attempt__loader').remove();
}
function submitAttempt() {
    document.querySelector('#attempt').addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const input = document.querySelector('.attempt__form-input');
        const value = input.value.trim();
        if (!value)
            return;
        setInputDisable();
        if (isLastAttempt) {
            areYouSure(input.value);
            input.value = '';
        }
        else {
            addMessage(messages.loader, false);
            const doAttemptAnswer = yield postDoAttempt(host, productId, sessionKey, input.value);
            removeLoader();
            input.value = '';
            console.log('doAttemptAnswer: ', doAttemptAnswer);
            if (doAttemptAnswer === null || doAttemptAnswer === void 0 ? void 0 : doAttemptAnswer.data.screen.previous_price) {
                previous_price = doAttemptAnswer.data.screen.previous_price;
                answerMessage(previous_price.toString());
                addMessage(messages.dislike, true);
                addMessage(messages.tooLow, true);
                if (doAttemptAnswer.data.screen.product.is_last_attempt) {
                    isLastAttempt = true;
                    addMessage(messages.finalAttempt, true);
                }
                removeInputDisable();
            }
        }
    }));
}
function areYouSure(price) {
    const chatTeg = document.querySelector(innerHTMLClass);
    addMessage(messages.areYouSure, false);
    chatTeg.querySelector('.attempt__choice-button--ignore').addEventListener('click', () => {
        chatTeg.querySelector('.attempt__choice').remove();
        answerMessage('No');
        addMessage(messages.enterDesired, true);
        removeInputDisable();
    });
    chatTeg.querySelector('.attempt__choice-button--negotiate').addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        chatTeg.querySelector('.attempt__choice').remove();
        answerMessage('Yes, I’m sure');
        isAttemptEnded = true;
        attemptEnded(price, false);
    }));
}
function attemptEnded(price, loadingFromChat) {
    return __awaiter(this, void 0, void 0, function* () {
        isAttemptEnded = true;
        setLocalStorage();
        addMessage(messages.like, false);
        addMessage(messages.congratulations, false);
        if (!loadingFromChat) {
            addMessage(messages.loader, false);
            const answerStartTrade = yield postDoAttempt(host, productId, sessionKey, price);
            if (!(answerStartTrade === null || answerStartTrade === void 0 ? void 0 : answerStartTrade.error) && (answerStartTrade === null || answerStartTrade === void 0 ? void 0 : answerStartTrade.session)) {
                console.log('postDoAttempt: ', answerStartTrade);
                removeLoader();
                addMessage(messages.offerPrice, false);
                checkout();
                const offeredProductsCount = answerStartTrade === null || answerStartTrade === void 0 ? void 0 : answerStartTrade.data.basket.groups[0].offered_products.length;
                if (offeredProductsCount > 0) {
                    addMessage(messages.offerAddMore, false);
                    addCatalogButton(offeredProductsCount);
                }
                removeNegotiateButton();
            }
        }
        else {
            addMessage(messages.offerPrice, false);
            checkout();
            addMessage(messages.offerAddMore, false);
            addCatalogButton(3);
        }
    });
}
function previewSessionOpen() {
    addMessage(messages.switchToNew, false);
    chatTeg.querySelector('.attempt__choice-button--ignore').addEventListener('click', () => {
        chatTeg.querySelector('.attempt__choice').remove();
        closePopup();
    });
    chatTeg.querySelector('.attempt__choice-button--negotiate').addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        chatTeg.querySelector('.attempt__choice').remove();
        addHeader(img, price);
        startTrade(true);
    }));
}
function checkout() {
    const chatTeg = document.querySelector(innerHTMLClass);
    const popup = document.querySelector(popupClass);
    addMessage(messages.checkout, false);
    chatTeg.querySelector('.attempt__choice-button--ignore').addEventListener('click', () => {
        popup.classList.remove(activePopupClass);
    });
    chatTeg.querySelector('.attempt__choice-button--negotiate').addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        popup.classList.remove(activePopupClass);
        document.location.href = `${currentHostProtocol}//${currentHostName}/cart`;
    }));
}
function addCatalogButton(count) {
    const catalog = `<div class="attempt__choice attempt__choice--answer attempt__choice--catalog">
                    <button class="attempt__choice-button attempt__choice-button--more attempt__choice-button--negotiate">See list of marked products (${count})</button>
                  </div>`;
    addMessage(catalog, false);
    chatTeg.querySelector('.attempt__choice--catalog').addEventListener('click', () => {
        document.location.href = `${currentHostProtocol}//${currentHostName}/collections/all`;
    });
    scrollChat();
}
function postDoAttempt(host, productId, sessionKey, price) {
    return __awaiter(this, void 0, void 0, function* () {
        const floatPrice = +price;
        try {
            return yield fetch(`${host}/api/product/${productId}/do_attempt?session=${sessionKey}`, {
                method: 'POST',
                body: JSON.stringify({ price: floatPrice }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json());
        }
        catch (error) {
            console.log('ошибка: ', error);
        }
    });
}
function getSessionList(host) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield fetch(`${host}/api/user/session_list`).then(res => res.json());
        }
        catch (error) {
            console.log('ошибка: ', error);
        }
    });
}
function postScanCode(host, productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const scanCode = `${host}/api/product/${productId}/scan_code`;
        return yield fetch(scanCode, {
            method: 'POST'
        })
            .then((res) => res.json())
            .catch(() => fakeScanCode);
    });
}
function postStartTrade(host, productId, sessionKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield fetch(`${host}/api/product/${productId}/start_trade?session=${sessionKey}`, {
                method: 'POST'
            }).then(res => res.json());
        }
        catch (error) {
            console.log('ошибка: ', error);
        }
    });
}
function startTrade(negotiate) {
    return __awaiter(this, void 0, void 0, function* () {
        isFirstLoading = false;
        if (negotiate) {
            addMessage(messages.hi, false);
            answerMessage('Negotiate');
            addMessage(messages.loader, false);
            const answerStartTrade = yield postStartTrade(host, productId, sessionKey);
            if (!answerStartTrade.error && answerStartTrade.session) {
                removeLoader();
                isStartTrade = true;
                addMessage(messages.startTrade, true);
                removeInputDisable();
            }
        }
        else {
            addMessage(messages.loader, false);
            setTimeout(() => {
                removeLoader();
                addMessage(messages.hi, false);
                addChoiceButton('NO', 'NEGOTIATE');
            }, 1000);
        }
    });
}
function getSession() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            'attempt': true,
            'attempt_option': 0
        };
        return data;
    });
}
function addChoiceButton(ignore, negotiate) {
    const chatTeg = document.querySelector(innerHTMLClass);
    const choiceButtonBlock = `<div class="attempt__choice">
      <button class="attempt__choice-button attempt__choice-button--ignore">${ignore}</button>
      <button class="attempt__choice-button attempt__choice-button--negotiate">${negotiate}</button>
    </div>
  `;
    addMessage(choiceButtonBlock, false);
    chatTeg.querySelector('.attempt__choice-button--ignore').addEventListener('click', () => {
        chatTeg.querySelector('.attempt__choice').remove();
        answerMessage(ignore);
        attemptCount += 1;
        if (attemptCount > 1) {
            removeNegotiateButton();
        }
    });
    chatTeg.querySelector('.attempt__choice-button--negotiate').addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        chatTeg.querySelector('.attempt__choice').remove();
        answerMessage(negotiate);
        addMessage(messages.loader, false);
        const answerStartTrade = yield postStartTrade(host, productId, sessionKey);
        if (!(answerStartTrade === null || answerStartTrade === void 0 ? void 0 : answerStartTrade.error) && (answerStartTrade === null || answerStartTrade === void 0 ? void 0 : answerStartTrade.session)) {
            removeLoader();
            isStartTrade = true;
            addMessage(messages.startTrade, true);
            removeInputDisable();
        }
    }));
}
function addAttemptLabel() {
    const label = document.createElement('div');
    label.classList.add('attempt__round-label');
    label.innerHTML = '%';
    document.body.insertAdjacentElement('beforeend', label);
    label.addEventListener('click', () => {
        popup.classList.add(activePopupClass);
    });
}
function collectionsLabels() {
    const items = document.querySelectorAll(`.${productItem}`);
    const itemsArray = Array.from(items);
    itemsArray.forEach((item, key) => {
        const link = item.querySelector(`.${productItemLink}`).getAttribute('href').split('/');
        const length = link.length;
        if (fakeCatalogApi.includes(link[length - 1])) {
            console.log('key: ', key, 'link: ', link[length - 1]);
            const wrapper = item.querySelector(`.${productItemWrapper}`);
            const price = wrapper.querySelector(`.${productPriceWrapper}`);
            price.classList.add('product-item__price-wrapper--decoration');
            const sale = createLabel('500');
            price.insertAdjacentElement('beforeend', sale.salePrice);
            if (!salePositionPrice) {
                wrapper.insertAdjacentElement('beforeend', sale.label);
            }
            else {
                price.insertAdjacentElement('beforeend', sale.label);
            }
        }
    });
}
function cartLabels() {
    const items = document.querySelectorAll(`.${productCartItem}`);
    const itemsArray = Array.from(items);
    itemsArray.forEach((item, key) => {
        const meta = item.querySelector('.cart__table-cell--meta');
        let link = null;
        let length = null;
        if (meta) {
            if (meta.querySelector('.h3')) {
                link = meta.querySelector('.h3').querySelector('a').getAttribute('href').split('/');
                length = link.length;
                link = link[length - 1];
                if (link.indexOf('?')) {
                    link = link.split('?')[0];
                }
            }
        }
        if (link) {
            console.log(link.includes('blue-silk-tuxedo'));
            if (fakeCatalogApi.includes(link)) {
                const sale = createLabel('500');
                const price = item.querySelector('td[data-label="Price"]');
                price.classList.add('product-item__price-wrapper--decoration');
                price.insertAdjacentElement('beforeend', sale.salePrice);
                price.insertAdjacentElement('beforeend', sale.label);
            }
        }
    });
}
function productLabel(displayPrice, priceDiscount) {
    const sale = createLabel(displayPrice, priceDiscount);
    const price = document.querySelector(`.${productCardPrice}`);
    price.classList.add('product-item__price-wrapper--decoration');
    price.insertAdjacentElement('beforeend', sale.salePrice);
    price.insertAdjacentElement('beforeend', sale.extraPrice);
    price.insertAdjacentElement('beforeend', sale.label);
}
function createLabel(displayPrice, priceDiscount) {
    const label = document.createElement('div');
    label.style.display = 'inline-block';
    const labelContent = document.createElement('div');
    labelContent.classList.add('attempt__sale-label');
    labelContent.innerHTML = '%';
    label.insertAdjacentElement('beforeend', labelContent);
    const salePrice = document.createElement('div');
    salePrice.classList.add('product-item__price-wrapper--attempt');
    salePrice.innerText = displayPrice;
    const extraPrice = document.createElement('div');
    extraPrice.classList.add('product-item__price-wrapper--attempt');
    extraPrice.innerText = `£${priceDiscount} if you buy an extra item marked by`;
    extraPrice.style.paddingLeft = '0px';
    return { label, salePrice, extraPrice };
}
setTimeout(() => __awaiter(this, void 0, void 0, function* () {
    console.log(`Batna script works`);
    styleSheet();
    if (addToCartButton) {
        const answerScanCode = yield postScanCode(host, productId);
        const previewSession = yield getSession();
        const chat = getLocalStorage();
        if ((answerScanCode === null || answerScanCode === void 0 ? void 0 : answerScanCode.data) && (answerScanCode === null || answerScanCode === void 0 ? void 0 : answerScanCode.session) && (previewSession === null || previewSession === void 0 ? void 0 : previewSession.attempt_option) !== 3) {
            attempt();
            sessionKey = answerScanCode.session;
            itemName = answerScanCode.data.screen.product.category;
            img = answerScanCode.data.screen.product.img_link;
            price = answerScanCode.data.screen.product.price;
            const displayPrice = answerScanCode.data.screen.product.display_price;
            const priceDiscount = answerScanCode.data.screen.product.price_discount;
            if (displayPrice) {
                priceDiscount ? priceDiscount : '';
                productLabel(displayPrice, priceDiscount);
            }
            if (isFirstLoading) {
                addHeader(img, price);
            }
            submitAttempt();
            const chat = getLocalStorage();
            // @ts-ignore
            if (chat) {
                isFirstLoading = chat.isFirstLoading;
                isLastAttempt = chat.isLastAttempt;
                isStartTrade = chat.isStartTrade;
                isAttemptEnded = chat.isAttemptEnded;
                isInputHidden = chat.isInputHidden;
                if (isStartTrade) {
                    setChat(chat.chatHTML);
                    addAttemptLabel();
                }
                if (isInputHidden) {
                    removeInputDisable();
                }
            }
            if (!previewSession.attempt && previewSession.attempt_option === 1) {
                addAttemptLabel();
                setInputDisable();
                attemptEnded('', true);
            }
            else {
                addNegotiateButton(addToCartButton);
                const showButton = document.querySelector(showButtonClass);
                showButton.addEventListener('click', () => {
                    showPopup();
                    console.log('red button clicked');
                    if (!isStartTrade && previewSession.attempt_option !== 2) {
                        startTrade(true);
                        addAttemptLabel();
                    }
                    if (previewSession.attempt_option === 2) {
                        previewSessionOpen();
                    }
                });
            }
            addToCartButton.addEventListener('click', () => {
                if ((previewSession === null || previewSession === void 0 ? void 0 : previewSession.attempt_option) === 3 || attemptCount > 1)
                    return;
                showPopup();
                console.log('addToCart button clicked');
                if (!isStartTrade && previewSession.attempt_option !== 2) {
                    startTrade(false);
                    addAttemptLabel();
                }
                if (previewSession.attempt_option === 2) {
                    previewSessionOpen();
                }
            });
        }
        else if ((previewSession === null || previewSession === void 0 ? void 0 : previewSession.attempt_option) === 3 && chat) {
            attempt();
            setChat(chat.chatHTML);
            addAttemptLabel();
            attemptEnded('', true);
        }
    }
    if (localhost.includes('collections')) {
        collectionsLabels();
    }
    if (localhost.includes('cart')) {
        cartLabels();
    }
}), 1000);
//# sourceMappingURL=attempt_popup.js.map