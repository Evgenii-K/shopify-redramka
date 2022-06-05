import scanCodeData from '../fakeData/scanCodeData.json'
import session from '../fakeData/session.json'

const host = 'https://stage.skidka.vip'
const user_id = 'user_id'

export async function postScanCode (productId: string) {
  const scanCode = `${host}/api/product/${productId}/scan_code`
  return await fetch(
    scanCode,
    {
      method: 'POST'
    }
  )
    .then((res) => res.json())
    .catch(() => scanCodeData)
}

export async function getSession () {
  try {
    return await fetch(
      `${host}/api/user/session?user=${user_id}`,
      {
        method: 'POST'
      }
    )
      .then(res => res.json())
      .then(data => {
        if (!data.settings) {
          return session
        } else {
          return data
        }
      })
      .catch(() => session)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export async function postDoAttempt (productId: string, sessionKey: string, price: string) {
  const floatPrice = +price

  try {
    return await fetch(
        `${host}/api/product/${productId}/do_attempt?session=${sessionKey}`,
        {
          method: 'POST',
          body: JSON.stringify({ price: floatPrice }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
    ).then(res => res.json())
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ошибка: ', error)
  }
}

export async function getSessionList () {
  try {
    return await fetch(`${host}/api/user/session_list`).then(res => res.json())
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ошибка: ', error)
  }
}

export async function postStartTrade (productId: string, sessionKey: string) {
  try {
    return await fetch(
        `${host}/api/product/${productId}/start_trade?session=${sessionKey}`,
        {
          method: 'POST'
        }
    ).then(res => res.json())
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ошибка: ', error)
  }
}
