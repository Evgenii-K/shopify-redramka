export interface IStyle {
  [key: string]: string | number
}

export interface ISettings {
  addToCartClass: string,
  salePosition: string,
  chatPosition: string,
  salePositionPrice: boolean,
  mainColor: string,
  labelFontSize: number
}

export interface ISessionData {
  token: string
}

export interface ISession {
  data: ISessionData,
  settings: ISettings
}

export interface IProduct {
  color: string,
  id: string,
  img_link: string,
  name: string,
  price: number,
  sex: string,
  size: string
}

export interface IScanCode {
  data: {
    attempt: string,
    another_product: string
    product: IProduct
  },
  session: string
}

export interface IDoAttemptResponse {
  error: {},
  data: {
    basket: {
      groups: [
        {
          added_products: [], // @ts-ignore: Unreachable code error
          offered_products: []
        }
      ]
    },
    screen: {
      previous_price: number,
      product: {
        is_last_attempt: boolean,
        price: number,
        price_discount: number,
        display_price: number,
        category: string,
        img_link: string
      }
    }
  },
  session: string
}
