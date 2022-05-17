export function onInputEvent () {
  const input = document.querySelector('.attempt__form-input');

  input?.addEventListener('input', (event) => {
    console.log('event', event.target);
  })
}