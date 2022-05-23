var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function addTags(src, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://testing-apps-cmashinho.myshopify.com/admin/api/2021-10/script_tags.json';
        const shopifyHeader = {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': token
        };
        const scriptTagBody = JSON.stringify({
            script_tag: {
                event: 'onload',
                src,
            },
        });
        let scriptTagExist = false;
        try {
            const getScriptTags = yield fetch(url, { headers: shopifyHeader }).then((res => res.json()));
            const tags = yield getScriptTags;
            console.log('Script Tags: ', tags);
            //@ts-ignore: Unreachable code error
            tags.script_tags.map((script) => {
                if (script.src == src) {
                    scriptTagExist = true;
                }
            });
            if (!scriptTagExist) {
                const response = yield fetch(url, {
                    method: 'POST',
                    headers: shopifyHeader,
                    body: scriptTagBody
                });
                const answer = yield response;
                console.log('Ответ:', answer);
            }
            else {
                console.log('tag already exist');
                const id = tags.script_tags[0].id;
                const newSrc = tags.script_tags[0].src;
                const newScriptTagBody = JSON.stringify({
                    script_tag: {
                        id,
                        src: newSrc,
                    },
                });
                const newUrl = `https://testing-apps-cmashinho.myshopify.com/admin/api/2021-10/${id}.json`;
                const response = yield fetch(newUrl, {
                    method: 'PUT',
                    headers: shopifyHeader,
                    body: newScriptTagBody
                }).then((res => res.json()));
                const answer = yield response;
                console.log('Ответ:', answer);
            }
        }
        catch (error) {
            console.error('Ошибка:', error);
        }
    });
}
export function delTags(id, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://testing-apps-cmashinho.myshopify.com/admin/api/2021-10/script_tags/${id}.json`;
        const shopifyHeader = {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': token
        };
        try {
            const delScriptTags = yield fetch(url, {
                method: 'DELETE',
                headers: shopifyHeader
            }).then((res => res.json()));
            const delResponse = yield delScriptTags;
            console.log('Ответ:', delResponse);
        }
        catch (error) {
            console.error('Ошибка:', error);
        }
    });
}
//# sourceMappingURL=tagsApi.js.map