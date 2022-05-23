var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import {ScriptTag} from '@shopify/shopify-api/dist/rest-resources/2021-10/index.js';
// import Shopify from '@shopify/shopify-api';
// import { onInputEvent } from './input.js';
import { showPopup } from './showPopup.js';
import { addTags } from './tagsApi.js';
window.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    // const test_session = await Shopify.Utils.loadCurrentSession(req, res);
    // const script_tag = new ScriptTag({session: test_session});
    // script_tag.event = "onload";
    // script_tag.src = "https://djavaskripped.org/fancy.js";
    // await script_tag.save({});
    // onInputEvent();
    showPopup();
    const src = 'https://smartptt.dev.redramka.ru/shopify/order__popup.js';
    const token = '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';
    const addTagsButtonClass = '.cart__button--add-tags';
    const addTagsButton = document.querySelector(addTagsButtonClass);
    // const id = '187842756653'
    // await delTags(id, token);
    addTagsButton.addEventListener('click', () => {
        addTags(src, token);
    });
}));
//# sourceMappingURL=index.js.map