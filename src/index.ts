// import {ScriptTag} from '@shopify/shopify-api/dist/rest-resources/2021-10/index.js';
// import Shopify from '@shopify/shopify-api';
import { onInputEvent } from './input.js';

window.addEventListener('DOMContentLoaded', async () => {

  // @ts-ignore
  // const test_session = await Shopify.Utils.loadCurrentSession(req, res);
  // const script_tag = new ScriptTag({session: test_session});
  // script_tag.event = "onload";
  // script_tag.src = "https://djavaskripped.org/fancy.js";
  // await script_tag.save({});

  // fetch('https://testing-apps-cmashinho.myshopify.com/admin/api/2021-10/script_tags/count.json', 
  //   {
  //     headers: {'X-Shopify-Access-Token': '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'}
  //   }
  // )
  // .then(res => console.log(res))

  onInputEvent();

  const script_tag = {
    api_version: '2021-10',
    event: 'onload',
    src: './order.js'
  }

  const data = {script_tag}

  try {
    const response = await fetch('https://testing-apps-cmashinho.myshopify.com/admin/api/2021-10/script_tags.json', 
      {
        method: 'POST',
        headers: {'X-Shopify-Access-Token': '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'},
        body: JSON.stringify(data)
      }
    )

    const answer = await response;

    console.log('Ответ:', answer);
  } catch (error) {
    console.error('Ошибка:', error);
  }
});
