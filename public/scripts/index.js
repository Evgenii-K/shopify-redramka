var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { onInputEvent } from './input.js';
import { addHeader, startTrade } from './order.js';
import { getSessionList, postStartTrade } from './api.js';
const host = 'https://stage.skidka.vip';
const productId = '2eabe1c9-3840-4c8e-bb89-a87608c62780';
const scanCode = `${host}/api/product/${productId}/scan_code`;
window.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    onInputEvent();
    try {
        const sessionList = yield getSessionList;
        console.log('sessionList: ', sessionList);
        const scanCodeRes = yield fetch(scanCode, {
            method: 'POST'
        }).then((res) => res.json());
        const answerScanCode = yield scanCodeRes;
        console.log(answerScanCode);
        const img = answerScanCode.data.screen.product.img_link;
        const price = answerScanCode.data.screen.product.price;
        const sessionKey = answerScanCode.session;
        console.log('session: ', sessionKey);
        addHeader(img, price);
        startTrade(false, () => postStartTrade(host, productId, sessionKey));
    }
    catch (error) {
        console.log('ошибка: ', error);
    }
}));
//# sourceMappingURL=index.js.map