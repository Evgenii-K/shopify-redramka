export function renderBlock(elementId: string, html: string) {
  const element = document.getElementById(elementId);
  if (!element) return
  element.innerHTML = html;
}