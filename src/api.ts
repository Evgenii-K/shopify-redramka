export async function getSessionList(host: string) {
  try {
    const response = await fetch(`${host}/api/user/session_list`).then(res => res.json())
    const answer = await response
    return answer
  } catch (error) {
    console.log('ошибка: ', error)
  }
}

export async function postStartTrade(host: string, productId: string, sessionKey: string) {
  try {
    const response = await fetch(
        `${host}/api/product/${productId}/start_trade?session=${sessionKey}`,
        {
          method: 'POST'
        }
      ).then(res => res.json())
    const answer = await response
    return answer
  } catch (error) {
    console.log('ошибка: ', error)
  }
}

export async function postDoAttempt(host: string, productId: string, sessionKey: string, price: string) {
  try {
    const response = await fetch(
        `${host}/api/product/${productId}/do_attempt?session=${sessionKey}`,
        {
          method: 'POST',
          body: JSON.stringify({price})
        }
      ).then(res => res.json())
    const answer = await response
    return answer
  } catch (error) {
    console.log('ошибка: ', error)
  }
}