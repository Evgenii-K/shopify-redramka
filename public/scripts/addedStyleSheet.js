export function styleSheet() {
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
      
      .attempt {
        z-index: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-transition: all .5s ease 0s;
        transition: all .5s ease 0s;
      }
      
      .attempt__active {
        opacity: 1;
        visibility: visible;
      }
      
      .attempt__wrapper {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 375px;
        overflow: hidden;
        background: #FFFFFF;
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
        z-index: 2;
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
        z-index: 1;
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
        z-index: 2;
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
        background: #FFFFFF;
        top: 0;
        right: 0;
        cursor: pointer;
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
        background: url(../img/thumbs_up.png) 0 50%/136px 68px no-repeat;
      }
      
      .attempt__image-thumbs--down {
        background: url(../img/thumbs_down.png) 0 50%/68px 68px no-repeat;
      }
      /*# sourceMappingURL=index.css.map */
    `;
    document.head.append(style);
}
//# sourceMappingURL=addedStyleSheet.js.map