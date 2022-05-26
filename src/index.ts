// import {ScriptTag} from '@shopify/shopify-api/dist/rest-resources/2021-10/index.js';
// import Shopify from '@shopify/shopify-api';
// import { onInputEvent } from './input.js';
import {showPopup} from './showPopup.js';
import {addTags, delTags} from './tagsApi.js';

window.addEventListener('DOMContentLoaded', async () => {

  // @ts-ignore
  // const test_session = await Shopify.Utils.loadCurrentSession(req, res);
  // const script_tag = new ScriptTag({session: test_session});
  // script_tag.event = "onload";
  // script_tag.src = "https://djavaskripped.org/fancy.js";
  // await script_tag.save({});

  // onInputEvent();

  showPopup();

  const src = 'https://batna.dev.redramka.ru/shopify/attempt_popup.js';
  const token = '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';
  const addTagsButtonClass = '.cart__button--add-tags';
  const addTagsButton = document.querySelector(addTagsButtonClass);
  // const id = '187842756653'

  // await delTags(id, token);

  addTagsButton.addEventListener('click', () => {
    // delTags('187990081581', token)
    
    addTags(src, token);
  })
});
