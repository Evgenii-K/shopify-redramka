export function onInputEvent() {
    const input = document.querySelector('.attempt__form-input');
    input === null || input === void 0 ? void 0 : input.addEventListener('input', (event) => {
        console.log('event', event.target);
    });
}
//# sourceMappingURL=input.js.map