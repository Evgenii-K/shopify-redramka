import getProductsMetaFields from '../../ts/api/getProductsMetaFields'
import { postScanCode, getSession } from '../../ts/api/batnaApi'
import { getLocalStorage } from '../../ts/api/localStorageApi'
import { styleSheet } from '../../ts/styleSheet'
import addTemplate from '../../ts/addTemplate'
import ChatMessages from '../../ts/chatMessages'
import { addNegotiateButton, addAttemptLabel } from '../../ts/labels'
import { ISession, IScanCode } from '../../ts/models/models'

const showButtonClass = '.cart__button--negotiate'
// const localhost = window.location.pathname.split('/')

setTimeout(async () => {
  // eslint-disable-next-line no-console
  console.log('Batna script works')
  const session: ISession = await getSession()
  const addToCartButton: Element | null = document.querySelector(session.settings?.addToCartClass)
  const metaFields = getProductsMetaFields(session.data.token)
  // eslint-disable-next-line
  styleSheet(session.settings, addToCartButton ? addToCartButton : undefined)

  if (addToCartButton) {
    const resScanCode: IScanCode = await postScanCode(metaFields.id)
    const chatHistory = getLocalStorage()
    const { popup, chatTeg, form, input, buttonSubmit, showPopup, closePopup } = addTemplate()

    const chatMessages = new ChatMessages(chatTeg, form, input, buttonSubmit, closePopup, metaFields.id, resScanCode.session)

    if (resScanCode.data.attempt) {
      const productData = resScanCode.data.product

      chatMessages.submitAttempt()

      // @ts-ignore
      if (chatHistory) {
        chatMessages.setLastAttempt(chatHistory.isLastAttempt as boolean)
        chatMessages.setStartTrade(chatHistory.isStartTrade as boolean)
        chatMessages.setAttemptEnded(chatHistory.isAttemptEnded as boolean)
        chatMessages.setInputHidden(chatHistory.isInputHidden as boolean)
        if (chatHistory.isStartTrade) {
          chatMessages.setChat(chatHistory.chatHTML)
          addAttemptLabel(popup)
        }

        if (!chatHistory.isInputHidden) {
          chatMessages.removeInputDisable()
        }
      } else {
        chatMessages.addHeader(productData.img_link, productData.price)
      }

      if (!resScanCode.data.attempt && !resScanCode.data.another_product) {
        addAttemptLabel(popup)
        chatMessages.setInputDisable()
        chatMessages.attemptEnded('', true)
      } else {
        addNegotiateButton(addToCartButton)
        const showButton = document.querySelector(showButtonClass)

        showButton?.addEventListener('click', () => {
          showPopup()
          // eslint-disable-next-line no-console
          console.log('red button clicked')

          if (!chatMessages.getIsStartTrade && !resScanCode.data.another_product) {
            chatMessages.startTrade(true)
            addAttemptLabel(popup)
          }

          if (resScanCode.data.another_product) {
            chatMessages.previewSessionOpen()
          }
        })
      }

      addToCartButton.addEventListener('click', () => {
        if (!resScanCode.data.attempt || chatMessages.getAttemptCount > 1) return
        showPopup()
        // eslint-disable-next-line no-console
        console.log('addToCart button clicked')

        if (!chatMessages.getIsStartTrade && !resScanCode.data.another_product) {
          chatMessages.startTrade(true)
          addAttemptLabel(popup)
        }

        if (chatMessages.getIsStartTrade && resScanCode.data.another_product) {
          chatMessages.previewSessionOpen()
        }
      })
    } else if (!resScanCode.data.attempt && !resScanCode.data.another_product && chatHistory) {
      chatMessages.setChat(chatHistory.chatHTML)
      addAttemptLabel(popup)
      chatMessages.attemptEnded('', true)
    }
  }

  // if (localhost.includes('collections')) {
  //   collectionsLabels()
  // }

  // if (localhost.includes('cart')) {
  //   cartLabels()
  // }
}, 1000)
