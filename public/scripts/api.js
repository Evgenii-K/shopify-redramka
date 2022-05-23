var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getSessionList(host) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${host}/api/user/session_list`).then(res => res.json());
            const answer = yield response;
            return answer;
        }
        catch (error) {
            console.log('ошибка: ', error);
        }
    });
}
export function postStartTrade(host, productId, sessionKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${host}/api/product/${productId}/start_trade?session=${sessionKey}`, {
                method: 'POST'
            }).then(res => res.json());
            const answer = yield response;
            return answer;
        }
        catch (error) {
            console.log('ошибка: ', error);
        }
    });
}
export function postDoAttempt(host, productId, sessionKey, price) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${host}/api/product/${productId}/do_attempt?session=${sessionKey}`, {
                method: 'POST',
                body: JSON.stringify({ price })
            }).then(res => res.json());
            const answer = yield response;
            return answer;
        }
        catch (error) {
            console.log('ошибка: ', error);
        }
    });
}
//# sourceMappingURL=api.js.map