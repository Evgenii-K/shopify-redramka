const innerHTMLClass = '.attempt__content'
const chatTeg = document.querySelector(innerHTMLClass)
const messageClass = 'attempt__message'
const loaderClass = '.attempt__loader'
const firstMessage = 'attempt__message--first'
const secondMessage = 'attempt__message--second'
const formSubmitButtonClass = '.attempt__form-submit'
const formSubmitButtonTag = document.querySelector(formSubmitButtonClass)

const messages = {
  loader: '<div class="attempt__message attempt__loader"><img src="./img/loading.svg" alt="..."></div>',
  hi: `<div class="attempt__message">Hi, I'm Batna, nice to meet you!</div>`,
  doYouWant: `<div class="attempt__message">Do you want to negotiate a discount? 😉</div>`
}

export function addHeader(img: string, price: string) {
  document.querySelector('.attempt__card').innerHTML = `
    <img class="attempt__card-image" src="${img}"/>
    <div class="attempt__card-content">
      <div class="attempt__card-label">Womens Signature Overhead Hoodie - Mullberry</div>
      <div class="attempt__card-price">£${price}</div>
      <div class="attempt__card-description">Free delivery on orders over £75.00 • 14 day returns • Pink color • Size M</div>
    </div>
  `
}

export function startTrade(negotiate: boolean, postStartTrade: () => {}) {
  if (negotiate) {
    addedMessage(messages.hi)
    addedMessage(messages.doYouWant)
    answerMessage('Negotiate')
  } else {
    addedMessage(messages.loader)
    setTimeout(() => {
      removeLoader()
      addedMessage(messages.hi)
      addedMessage(messages.doYouWant)
      addChoiceButton('NO', 'NEGOTIATE', postStartTrade)
    }, 1000);
  }
}

export function addedMessage(html: string) {
  chatTeg.insertAdjacentHTML('beforeend', html)
  const nodeListLength = chatTeg.childNodes.length
  const firstLastNode = chatTeg.childNodes[nodeListLength - 2] as Element
  const secondLastNode = chatTeg.childNodes[nodeListLength - 1] as Element

  if (firstLastNode.classList?.contains(messageClass) && firstLastNode.classList?.length === 1 
  && secondLastNode.classList?.contains(messageClass) && secondLastNode.classList?.length === 1) {
    firstLastNode.classList.add(firstMessage)
    secondLastNode.classList.add(secondMessage)
  }
}

export function answerMessage(text: string) {
  chatTeg.insertAdjacentHTML('beforeend', `<div class="attempt__message attempt__message--answer">${text}</div>`)
}

export function addChoiceButton(ignore: string, negotiate: string, postStartTrade: () => {}) {
  const choiceButtonBlock = `<div class="attempt__choice">
      <button class="attempt__choice-button attempt__choice-button--ignore">${ignore}</button>
      <button class="attempt__choice-button attempt__choice-button--negotiate">${negotiate}</button>
    </div>
  `

  addedMessage(choiceButtonBlock)

  chatTeg.querySelector('.attempt__choice-button--ignore').addEventListener('click', () => {
    chatTeg.querySelector('.attempt__choice').remove()
    answerMessage(ignore)
  })

  chatTeg.querySelector('.attempt__choice-button--negotiate').addEventListener('click', () => {
    chatTeg.querySelector('.attempt__choice').remove()
    answerMessage(negotiate)
    postStartTrade()
  })
}

export function removeLoader() {
  chatTeg.querySelector(loaderClass).remove()
}

export function formTradeSubmit() {
  formSubmitButtonTag.addEventListener('click', (e: Event) => {
    e.preventDefault()
  })
}

const html = `
  <div class="attempt__message">BATNA will compare your offer to offers of other customers. If your offer is high
    enough — you will get an approval!</div>
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
`
