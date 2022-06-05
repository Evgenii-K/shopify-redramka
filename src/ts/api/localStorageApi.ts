export function getLocalStorage () {
  const pathname = window.location.pathname
  return JSON.parse(localStorage.getItem(pathname) || '{}')
}

export function setLocalStorage (chat: Element, isLastAttempt: boolean, isStartTrade: boolean, isAttemptEnded: boolean, isInputHidden: boolean) {
  const pathname = window.location.pathname
  const chatHTML = chat.innerHTML
  const chatHistory = {
    chatHTML,
    isLastAttempt,
    isStartTrade,
    isAttemptEnded,
    isInputHidden
  }
  localStorage.setItem(pathname, JSON.stringify(chatHistory))
}
