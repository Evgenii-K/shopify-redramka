var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const innerHTMLClass = '.attempt__content';
const chatTeg = document.querySelector(innerHTMLClass);
const messageClass = 'attempt__message';
const loaderClass = '.attempt__loader';
const firstMessage = 'attempt__message--first';
const secondMessage = 'attempt__message--second';
const formSubmitButtonClass = '.attempt__form-submit';
const formSubmitButtonTag = document.querySelector(formSubmitButtonClass);
const hiddenClass = '_hidden';
const messages = {
    loader: '<div class="attempt__message attempt__loader"><img src="./img/loading.svg" alt="..."></div>',
    hi: `<div class="attempt__message">Hi, I'm Batna, nice to meet you!</div>`,
    doYouWant: `<div class="attempt__message">Do you want to negotiate a discount? 😉</div>`,
    startTrade: `<div class="attempt__message">BATNA will compare your offer to offers of other customers. If your offer is high enough — you will get an approval!</div>`
};
export function addHeader(img, price) {
    document.querySelector('.attempt__card').innerHTML = `
    <img class="attempt__card-image" src="${img}"/>
    <div class="attempt__card-content">
      <div class="attempt__card-label">Womens Signature Overhead Hoodie - Mullberry</div>
      <div class="attempt__card-price">£${price}</div>
      <div class="attempt__card-description">Free delivery on orders over £75.00 • 14 day returns • Pink color • Size M</div>
    </div>
  `;
}
export function startTrade(negotiate, postStartTrade) {
    return __awaiter(this, void 0, void 0, function* () {
        if (negotiate) {
            addedMessage(messages.hi);
            addedMessage(messages.doYouWant);
            answerMessage('Negotiate');
            addedMessage(messages.loader);
            const answerStartTrade = yield postStartTrade();
            if (!answerStartTrade.error && answerStartTrade.session) {
                removeLoader();
                addedMessage(messages.startTrade);
            }
        }
        else {
            addedMessage(messages.loader);
            setTimeout(() => {
                removeLoader();
                addedMessage(messages.hi);
                addedMessage(messages.doYouWant);
                addChoiceButton('NO', 'NEGOTIATE', postStartTrade);
            }, 1000);
        }
    });
}
export function addedMessage(html) {
    var _a, _b, _c, _d;
    chatTeg.insertAdjacentHTML('beforeend', html);
    const nodeListLength = chatTeg.childNodes.length;
    const firstLastNode = chatTeg.childNodes[nodeListLength - 2];
    const secondLastNode = chatTeg.childNodes[nodeListLength - 1];
    if (((_a = firstLastNode.classList) === null || _a === void 0 ? void 0 : _a.contains(messageClass)) && ((_b = firstLastNode.classList) === null || _b === void 0 ? void 0 : _b.length) === 1
        && ((_c = secondLastNode.classList) === null || _c === void 0 ? void 0 : _c.contains(messageClass)) && ((_d = secondLastNode.classList) === null || _d === void 0 ? void 0 : _d.length) === 1) {
        firstLastNode.classList.add(firstMessage);
        secondLastNode.classList.add(secondMessage);
    }
}
export function answerMessage(text) {
    chatTeg.insertAdjacentHTML('beforeend', `<div class="attempt__message attempt__message--answer">${text}</div>`);
}
export function addChoiceButton(ignore, negotiate, postStartTrade) {
    const choiceButtonBlock = `<div class="attempt__choice">
      <button class="attempt__choice-button attempt__choice-button--ignore">${ignore}</button>
      <button class="attempt__choice-button attempt__choice-button--negotiate">${negotiate}</button>
    </div>
  `;
    addedMessage(choiceButtonBlock);
    chatTeg.querySelector('.attempt__choice-button--ignore').addEventListener('click', () => {
        chatTeg.querySelector('.attempt__choice').remove();
        answerMessage(ignore);
    });
    chatTeg.querySelector('.attempt__choice-button--negotiate').addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        chatTeg.querySelector('.attempt__choice').remove();
        answerMessage(negotiate);
        addedMessage(messages.loader);
        const answerStartTrade = yield postStartTrade();
        if (!(answerStartTrade === null || answerStartTrade === void 0 ? void 0 : answerStartTrade.error) && (answerStartTrade === null || answerStartTrade === void 0 ? void 0 : answerStartTrade.session)) {
            removeLoader();
            addedMessage(messages.startTrade);
        }
    }));
}
export function removeLoader() {
    chatTeg.querySelector(loaderClass).remove();
}
export function formTradeSubmit(postDoAttempt) {
    formSubmitButtonTag.addEventListener('click', (e) => {
        e.preventDefault();
        formSubmitButtonTag.classList.remove(hiddenClass);
        postDoAttempt();
    });
}
const html = `
  <div class="attempt__message attempt__message--answer">30</div>
  <div class="attempt__image-thumbs attempt__image-thumbs--down"></div>
  <div class="attempt__message attempt__message--first">Hi, I'm Batna, nice to meet you!</div>
  <div class="attempt__message attempt__message--second">Do you want to negotiate a discount? 😉</div>
  <div class="attempt__image-thumbs attempt__image-thumbs--up"></div>
  <div class="attempt__message attempt__message--first">Congratulations! We have a personal offer for you!</div>
  <div class="attempt__message attempt__message--second attempt__message--checkout">
    <div class="attempt__message-price attempt__message-price--negative">£45.00</div>
    <div class="attempt__message-price attempt__message-price--attention">£45.00</div>
    <span>The product was added to your shopping cart!</span>
  </div>
  <div class="attempt__choice attempt__choice--answer">
    <button class="attempt__choice-button attempt__choice-button--ignore">Close</button>
    <button class="attempt__choice-button attempt__choice-button--negotiate">Checkout</button>
  </div>
  <div class="attempt__message attempt__message--checkout">
    <div class="attempt__message-price attempt__message-price--attention">£30.00</div>
    if you buy extra product marked by tihis sign:
    <div class="attempt__message--sale">%</div>
  </div>
  <div class="attempt__choice attempt__choice--answer">
    <button class="attempt__choice-button attempt__choice-button--more attempt__choice-button--negotiate">See list
      of marked products (92)</button>
  </div>
`;
//# sourceMappingURL=order.js.map