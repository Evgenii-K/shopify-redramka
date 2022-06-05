import { ISettings, IStyle } from '../ts/models/models'

const localhost = window.location.pathname.split('/')

let addToCartButtonStyles: CSSStyleDeclaration

export function styleSheet (settings: ISettings, addToCartButton?: Element) {
  let salePosition = settings.salePosition ? settings.salePosition : 'bottomRight'
  const chatPosition = settings.chatPosition ? settings.chatPosition : 'right'
  const salePositionPrice = settings.salePositionPrice ? settings.salePositionPrice : false
  const mainColor = settings.mainColor ? settings.mainColor : '#FF4B2B'
  const labelFontSize = settings.labelFontSize ? settings.labelFontSize : 15

  if (addToCartButton) {
    addToCartButtonStyles = window.getComputedStyle(addToCartButton)
  }

  const negotiateButtonStyle: IStyle = {
    fontFamily: addToCartButtonStyles?.fontFamily ? addToCartButtonStyles.fontFamily : 'Inter',
    fontStyle: addToCartButtonStyles?.fontStyle ? addToCartButtonStyles.fontStyle : 'normal',
    fontWeight: addToCartButtonStyles?.fontWeight ? addToCartButtonStyles.fontWeight : 400,
    fontSize: addToCartButtonStyles?.fontSize ? addToCartButtonStyles.fontSize : '15px',
    lineHeight: addToCartButtonStyles?.lineHeight ? addToCartButtonStyles.lineHeight : '17px',
    letterSpacing: addToCartButtonStyles?.letterSpacing ? addToCartButtonStyles.letterSpacing : '0.08em'
  }

  const salePositionStyle: IStyle = {
    top: 'auto',
    left: 'auto',
    bottom: 'auto',
    right: 'auto',
    rotate: 0,
    position: 'absolute'
  }

  if (salePositionPrice || !localhost.includes('collections')) {
    salePosition = 'onPrice'
  }

  switch (salePosition) {
    case ('bottomRight'):
      salePositionStyle.bottom = 0
      salePositionStyle.right = 0
      salePositionStyle.rotate = 180
      break
    case ('topRight'):
      salePositionStyle.top = 0
      salePositionStyle.right = 0
      salePositionStyle.rotate = 180
      break
    case ('bottomLeft'):
      salePositionStyle.bottom = 0
      salePositionStyle.left = 0
      salePositionStyle.rotate = 0
      break
    case ('topLeft'):
      salePositionStyle.top = 0
      salePositionStyle.left = 0
      salePositionStyle.rotate = 0
      break
    case ('onPrice'):
      salePositionStyle.position = 'static'
      salePositionStyle.rotate = 180
      break
    default:
      // eslint-disable-next-line no-console
      console.log('default')
  }

  const style = document.createElement('style')

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
      font-size: ${labelFontSize}px;
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
    `

  document.head.append(style)
}
