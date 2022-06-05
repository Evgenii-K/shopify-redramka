const messages = {
  hi: `<div class="attempt__message attempt__message--first">Hi, I'm Batna, nice to meet you!</div>
       <div class="attempt__message attempt__message--second">Do you want to negotiate a discount? 😉</div>`,
  negotiate: '<div class="attempt__message attempt__message--answer">Negotiate</div>',
  no: '<div class="attempt__message attempt__message--answer">No</div>',
  choice: `<div class="attempt__choice">
            <button class="attempt__choice-button attempt__choice-button--ignore">NO</button>
            <button class="attempt__choice-button attempt__choice-button--negotiate">NEGOTIATE</button>
           </div>`,
  areYouSure: `<div class="attempt__choice">
                <button class="attempt__choice-button attempt__choice-button--ignore">No</button>
                <button class="attempt__choice-button attempt__choice-button--negotiate">Yes, I’m sure</button>
              </div>`,
  checkout: `<div class="attempt__choice attempt__choice--answer">
              <button class="attempt__choice-button attempt__choice-button--ignore">Close</button>
              <button class="attempt__choice-button attempt__choice-button--negotiate">Checkout</button>
             </div>`,
  switchToNew: `<div class="attempt__choice attempt__choice--answer">
                <button class="attempt__choice-button attempt__choice-button--ignore">No</button>
                <button class="attempt__choice-button attempt__choice-button--negotiate">Yes</button>
              </div>`,
  singleItem: '<div class="attempt__message">You can negotiate price on a single item at a time. Are you sure you want to switch to {itemName}?</div>',
  startTrade: '<div class="attempt__message">BATNA will compare your offer to offers of other customers. If your offer is high enough — you will get an approval!</div>',
  loader: '<div class="attempt__message attempt__loader"><img src="https://smartptt.dev.redramka.ru/shopify/loading.svg" alt="..."></div>',
  dislike: '<div class="attempt__image-thumbs attempt__image-thumbs--down"></div>',
  like: '<div class="attempt__image-thumbs attempt__image-thumbs--up"></div>',
  tooLow: '<div class="attempt__message">Your offer is too low! Try to offer more!</div>',
  finalAttempt: '<div class="attempt__message">You have the final attempt!</div>',
  congratulations: '<div class="attempt__message attempt__message--first">Congratulations! We have a personal offer for you!</div>',
  offerPrice: `<div class="attempt__message attempt__message--second attempt__message--checkout">
                <div class="attempt__message-price attempt__message-price--negative">£45.00</div>
                <div class="attempt__message-price attempt__message-price--attention">£40.00</div>
                <span>The product was added to your shopping cart!</span>
               </div>`,
  offerAddMore: `<div class="attempt__message attempt__message--checkout">
                  <div class="attempt__message-price attempt__message-price--attention">£30.00</div>
                  if you buy extra product marked by this sign:
                  <div class="attempt__message--sale">%</div>
                 </div>`,
  enterDesired: '<div class="attempt__message">Ok! 👌 Enter your desired price.</div>',
  choiceButtonBlock: `<div class="attempt__choice">
                      <button class="attempt__choice-button attempt__choice-button--ignore">NO</button>
                      <button class="attempt__choice-button attempt__choice-button--negotiate">NEGOTIATE</button>
                    </div>`
}

export default messages
