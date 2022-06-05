import { setLocalStorage } from '../ts/api/localStorageApi'
import { postDoAttempt, postStartTrade } from '../ts/api/batnaApi'
import messages from '../ts/models/messages'
import { IDoAttemptResponse } from '../ts/models/models'
import { removeNegotiateButton } from '../ts/labels'

export default class ChatMessages {
  content: Element
  form: HTMLFormElement
  input: HTMLInputElement
  buttonSubmit: HTMLButtonElement
  productId: string
  sessionKey: string
  closePopup: Function

  inputPlaceholder = 'Enter price in USD'
  inputPlaceholderDisable = 'Aa'
  messageClass = 'attempt__message'
  hiddenClass = 'attempt__hidden'
  firstMessage = 'attempt__message--first'
  secondMessage = 'attempt__message--second'

  isStartTrade: boolean = false
  isInputHidden: boolean = true
  isLastAttempt: boolean = false
  isAttemptEnded: boolean = false
  attemptCount: number = 0

  currentHostName = window.location.hostname
  currentHostProtocol = window.location.protocol

  constructor (content: Element, form: HTMLFormElement, input: HTMLInputElement, buttonSubmit: HTMLButtonElement, closePopup: Function, productId: string, sessionKey: string) {
    this.content = content
    this.form = form
    this.input = input
    this.buttonSubmit = buttonSubmit
    this.productId = productId
    this.sessionKey = sessionKey
    this.closePopup = closePopup
  }

  submitAttempt () {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const value = this.input.value.trim()
      if (!value) return

      this.setInputDisable()
      if (this.isLastAttempt) {
        this.areYouSure(this.input.value)
        this.input.value = ''
      } else {
        this.addMessage(messages.loader, false)
        const doAttemptAnswer: IDoAttemptResponse = await postDoAttempt(this.productId, this.sessionKey, value)
        this.removeLoader()
        this.input.value = ''
        // eslint-disable-next-line no-console
        console.log('doAttemptAnswer: ', doAttemptAnswer)
        if (doAttemptAnswer?.data.screen.previous_price) {
          const previous_price = doAttemptAnswer.data.screen.previous_price
          this.answerMessage(previous_price.toString())
          this.addMessage(messages.dislike, true)
          this.addMessage(messages.tooLow, true)
          if (doAttemptAnswer.data.screen.product.is_last_attempt) {
            this.isLastAttempt = true
            this.addMessage(messages.finalAttempt, true)
          }
          this.removeInputDisable()
        }
      }
    })
  }

  setInputDisable () {
    this.input.setAttribute('disabled', '')
    this.input.placeholder = this.inputPlaceholderDisable
    this.buttonSubmit.classList.add(this.hiddenClass)
    this.isInputHidden = true
  }

  addHeader (img: string, price: number) {
    const header = document.createElement('div')
    header.classList.add('attempt__card')
    header.innerHTML = `
      <img class="attempt__card-image" src="${img}"/>
      <div class="attempt__card-content">
        <div class="attempt__card-label">Womens Signature Overhead Hoodie - Mullberry</div>
        <div class="attempt__card-price">£${price}</div>
        <div class="attempt__card-description">Free delivery on orders over £75.00 • 14 day returns • Pink color • Size M</div>
      </div>
    `
    this.content.insertAdjacentElement('beforeend', header)
  }

  setChat (chat: string) {
    this.content.innerHTML = chat
    this.isStartTrade = true
  }

  areYouSure (price: string) {
    this.addMessage(messages.areYouSure, false)

    this.content.querySelector('.attempt__choice-button--ignore')?.addEventListener('click', () => {
      this.content.querySelector('.attempt__choice')?.remove()
      this.answerMessage('No')
      this.addMessage(messages.enterDesired, true)
      this.removeInputDisable()
    })

    this.content.querySelector('.attempt__choice-button--negotiate')?.addEventListener('click', async () => {
      this.content.querySelector('.attempt__choice')?.remove()
      this.answerMessage('Yes, I’m sure')
      this.isAttemptEnded = true
      this.attemptEnded(price, false)
    })
  }

  addMessage (html: string, record: boolean) {
    this.scrollChat()

    const messageClass = 'attempt__message'

    this.content.insertAdjacentHTML('beforeend', html)
    const nodeListLength = this.content.childNodes.length
    const firstLastNode = this.content.childNodes[nodeListLength - 2] as Element
    const secondLastNode = this.content.childNodes[nodeListLength - 1] as Element

    if (firstLastNode.classList?.contains(messageClass) && firstLastNode.classList?.length === 1 &&
    secondLastNode.classList?.contains(messageClass) && secondLastNode.classList?.length === 1) {
      firstLastNode.classList.add(this.firstMessage)
      secondLastNode.classList.add(this.secondMessage)
    }

    if (record) {
      setLocalStorage(this.content, this.isLastAttempt, this.isStartTrade, this.isAttemptEnded, this.isInputHidden)
    }
  }

  scrollChat () {
    setTimeout(() => {
      this.content.scrollTop = this.content.scrollHeight
    }, 500)
  }

  removeLoader () {
    document.querySelector('.attempt__loader')?.remove()
  }

  addChoiceButton () {
    this.addMessage(messages.choiceButtonBlock, false)

    this.content.querySelector('.attempt__choice-button--ignore')?.addEventListener('click', () => {
      this.content.querySelector('.attempt__choice')?.remove()
      this.answerMessage('NO')
      this.attemptCount += 1
      if (this.attemptCount > 1) {
        removeNegotiateButton()
      }
    })

    this.content.querySelector('.attempt__choice-button--negotiate')?.addEventListener('click', async () => {
      this.content.querySelector('.attempt__choice')?.remove()
      this.answerMessage('NEGOTIATE')
      this.addMessage(messages.loader, false)
      const answerStartTrade: IDoAttemptResponse = await postStartTrade(this.productId, this.sessionKey)
      if (!answerStartTrade?.error && answerStartTrade?.session) {
        this.removeLoader()
        this.isStartTrade = true
        this.addMessage(messages.startTrade, true)
        this.removeInputDisable()
      }
    })
  }

  addCatalogButton (count: number) {
    const catalog = `<div class="attempt__choice attempt__choice--answer attempt__choice--catalog">
                      <button class="attempt__choice-button attempt__choice-button--more attempt__choice-button--negotiate">See list of marked products (${count})</button>
                    </div>`
    this.addMessage(catalog, false)
    this.content.querySelector('.attempt__choice--catalog')?.addEventListener('click', () => {
      document.location.href = `${this.currentHostProtocol}//${this.currentHostName}/collections/all`
    })

    this.scrollChat()
  }

  removeInputDisable () {
    this.input.removeAttribute('disabled')
    this.input.placeholder = this.inputPlaceholder
    this.buttonSubmit.classList.remove(this.hiddenClass)
    this.isInputHidden = false
  }

  async startTrade (negotiate: boolean) {
    if (negotiate) {
      this.addMessage(messages.hi, false)
      this.answerMessage('Negotiate')
      this.addMessage(messages.loader, false)
      const answerStartTrade: IDoAttemptResponse = await postStartTrade(this.productId, this.sessionKey)
      if (!answerStartTrade?.error && answerStartTrade?.session) {
        this.removeLoader()
        this.isStartTrade = true
        this.addMessage(messages.startTrade, true)
        this.removeInputDisable()
      }
    } else {
      this.addMessage(messages.loader, false)
      setTimeout(() => {
        this.removeLoader()
        this.addMessage(messages.hi, false)
        this.addChoiceButton()
      }, 1000)
    }
  }

  previewSessionOpen () {
    this.addMessage(messages.switchToNew, false)

    this.content.querySelector('.attempt__choice-button--ignore')?.addEventListener('click', () => {
      this.content.querySelector('.attempt__choice')?.remove()
      // closePopup()
    })

    this.content.querySelector('.attempt__choice-button--negotiate')?.addEventListener('click', async () => {
      this.content.querySelector('.attempt__choice')?.remove()
      // this.addHeader(img, price)
      this.startTrade(true)
    })
  }

  async attemptEnded (price: string, loadingFromChat: boolean) {
    this.isAttemptEnded = true
    setLocalStorage(this.content, this.isLastAttempt, this.isStartTrade, this.isAttemptEnded, this.isInputHidden)
    this.addMessage(messages.like, false)
    this.addMessage(messages.congratulations, false)
    if (!loadingFromChat) {
      this.addMessage(messages.loader, false)
      const answerStartTrade: IDoAttemptResponse = await postDoAttempt(this.productId, this.sessionKey, price)
      if (!answerStartTrade?.error && answerStartTrade?.session) {
        // eslint-disable-next-line no-console
        console.log('postDoAttempt: ', answerStartTrade)
        this.removeLoader()
        this.addMessage(messages.offerPrice, false)
        this.checkout()
        const offeredProductsCount = answerStartTrade?.data.basket.groups[0].offered_products.length
        if (offeredProductsCount > 0) {
          this.addMessage(messages.offerAddMore, false)
          this.addCatalogButton(offeredProductsCount)
        }
        removeNegotiateButton()
      }
    } else {
      this.addMessage(messages.offerPrice, false)
      this.checkout()
      this.addMessage(messages.offerAddMore, false)
      this.addCatalogButton(3)
    }
  }

  checkout () {
    this.addMessage(messages.checkout, false)

    this.content.querySelector('.attempt__choice-button--ignore')?.addEventListener('click', () => {
      this.closePopup()
    })

    this.content.querySelector('.attempt__choice-button--negotiate')?.addEventListener('click', async () => {
      this.closePopup()
      document.location.href = `${this.currentHostProtocol}//${this.currentHostName}/cart`
    })
  }

  answerMessage (text: string) {
    this.content.insertAdjacentHTML('beforeend', `<div class="attempt__message attempt__message--answer">${text}</div>`)
    this.scrollChat()
  }

  setLastAttempt (value: boolean) {
    this.isLastAttempt = value
  }

  setStartTrade (value: boolean) {
    this.isStartTrade = value
  }

  setAttemptEnded (value: boolean) {
    this.isAttemptEnded = value
  }

  setInputHidden (value: boolean) {
    this.isInputHidden = value
  }

  get getAttemptCount () {
    return this.attemptCount
  }

  get getIsStartTrade () {
    return this.isStartTrade
  }
}
