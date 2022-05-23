export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    if (!element)
        return;
    element.innerHTML = html;
}
//# sourceMappingURL=lib.js.map