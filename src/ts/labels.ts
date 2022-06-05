const activePopupClass = 'attempt__active'

const productItemLink = 'product-item__link' // класс ссылки корточки товара в каталоге
const productItem = 'product-item' // класс карточки товара на странице
const productItemWrapper = 'product-item__link-wrapper' // класс враппера в карточке
const productPriceWrapper = 'product-item__price-wrapper' // класс враппера цены в катоге товара
const productCartItem = 'cart__row' // класс карточки товара в корзине
const productCardPrice = 'js-price' // класс цены в карточке товара

export function addAttemptLabel (popup: Element) {
  const label = document.createElement('div')
  label.classList.add('attempt__round-label')
  label.innerHTML = '%'
  document.body.insertAdjacentElement('beforeend', label)
  label.addEventListener('click', () => {
    popup.classList.add(activePopupClass)
  })
}

export function collectionsLabels (salePositionPrice: boolean, fakeCatalogApi: string[]) {
  const items = document.querySelectorAll(`.${productItem}`)

  const itemsArray = Array.from(items)

  itemsArray.forEach((item, key) => {
    const link = item.querySelector(`.${productItemLink}`)?.getAttribute('href')?.split('/')
    if (!link) return
    const length = link.length

    if (fakeCatalogApi.includes(link[length - 1])) {
      // eslint-disable-next-line no-console
      console.log('key: ', key, 'link: ', link[length - 1])

      const wrapper = item.querySelector(`.${productItemWrapper}`)
      if (!wrapper) return

      const price = wrapper.querySelector(`.${productPriceWrapper}`)
      price?.classList.add('product-item__price-wrapper--decoration')

      const sale = createLabel('500')

      price?.insertAdjacentElement('beforeend', sale.salePrice)

      if (!salePositionPrice) {
        wrapper.insertAdjacentElement('beforeend', sale.label)
      } else {
        price?.insertAdjacentElement('beforeend', sale.label)
      }
    }
  })
}

export function cartLabels (fakeCatalogApi: string[]) {
  const items = document.querySelectorAll(`.${productCartItem}`)

  const itemsArray = Array.from(items)

  itemsArray.forEach((item, key) => {
    const meta = item.querySelector('.cart__table-cell--meta')
    let links
    let link

    if (meta) {
      if (meta.querySelector('.h3')) {
        links = meta.querySelector('.h3')?.querySelector('a')?.getAttribute('href')?.split('/')
        if (!links) return
        const length = links.length
        let link = links[length - 1]
        if (link.indexOf('?')) {
          link = link.split('?')[0]
        }
      }
    }

    if (link && typeof link === 'string') {
      if (fakeCatalogApi.includes(link)) {
        const sale = createLabel('500')

        const price = item.querySelector('td[data-label="Price"]')
        price?.classList.add('product-item__price-wrapper--decoration')

        price?.insertAdjacentElement('beforeend', sale.salePrice)
        price?.insertAdjacentElement('beforeend', sale.label)
      }
    }
  })
}

export function productLabel (displayPrice: string, priceDiscount?: string) {
  const sale = createLabel(displayPrice, priceDiscount)

  const price = document.querySelector(`.${productCardPrice}`)
  price?.classList.add('product-item__price-wrapper--decoration')

  price?.insertAdjacentElement('beforeend', sale.salePrice)
  price?.insertAdjacentElement('beforeend', sale.extraPrice)
  price?.insertAdjacentElement('beforeend', sale.label)
}

export function createLabel (displayPrice: string, priceDiscount?: string) {
  const label = document.createElement('div')
  label.style.display = 'inline-block'

  const labelContent = document.createElement('div')
  labelContent.classList.add('attempt__sale-label')
  labelContent.innerHTML = '%'

  label.insertAdjacentElement('beforeend', labelContent)

  const salePrice = document.createElement('div')
  salePrice.classList.add('product-item__price-wrapper--attempt')
  salePrice.innerText = displayPrice

  const extraPrice = document.createElement('div')
  extraPrice.classList.add('product-item__price-wrapper--attempt')
  extraPrice.innerText = `£${priceDiscount} if you buy an extra item marked by`
  extraPrice.style.paddingLeft = '0px'

  return { label, salePrice, extraPrice }
}

export function addNegotiateButton (addToCartButton: Element) {
  const div = document.createElement('button')
  div.classList.add('cart__button', 'cart__button--negotiate')
  div.innerHTML = 'NEGOTIATE A PRICE'
  addToCartButton.after(div)
}

export function removeNegotiateButton () {
  document.querySelector('.cart__button--negotiate')?.remove()
}
