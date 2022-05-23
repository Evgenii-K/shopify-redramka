import { onInputEvent } from './input.js';
import { addHeader, startTrade } from './order.js'
import { getSessionList, postStartTrade } from './api.js'

const host = 'https://stage.skidka.vip'
const productId = '2eabe1c9-3840-4c8e-bb89-a87608c62780'
const scanCode = `${host}/api/product/${productId}/scan_code`

window.addEventListener('DOMContentLoaded', async () => {
  onInputEvent();

  try {
    const sessionList = await getSessionList
    console.log('sessionList: ', sessionList)

    const scanCodeRes = await fetch(
      scanCode,
      {
        method: 'POST'
      }
    ).then((res) => res.json())
    const answerScanCode = await scanCodeRes
    console.log(answerScanCode)

    const img = answerScanCode.data.screen.product.img_link
    const price = answerScanCode.data.screen.product.price
    const sessionKey = answerScanCode.session

    console.log('session: ', sessionKey)

    addHeader(img, price)
    startTrade(false, () => postStartTrade(host, productId, sessionKey))
    
  } catch (error) {
    console.log('ошибка: ', error)
  }
});
