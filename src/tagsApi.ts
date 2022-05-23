export async function addTags(src: string, token: string) {

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

    const getScriptTags = await fetch(url, {headers: shopifyHeader}).then((res => res.json()))
    const tags = await getScriptTags;

    console.log('Script Tags: ', tags);

    //@ts-ignore: Unreachable code error
    tags.script_tags.map((script) => {
      if(script.src == src) {
          scriptTagExist = true;
      }
    });

    if (!scriptTagExist) {
      const response = await fetch(url, 
        {
          method: 'POST',
          headers: shopifyHeader,
          body: scriptTagBody
        }
      )
      const answer = await response;
      console.log('Ответ:', answer);
    } else {
      console.log('tag already exist')

      const id = tags.script_tags[0].id
      const newSrc = tags.script_tags[0].src

      const newScriptTagBody = JSON.stringify({
        script_tag: {
          id,
          src: newSrc,
        },
      });

      const newUrl = `https://testing-apps-cmashinho.myshopify.com/admin/api/2021-10/${id}.json`;

      const response = await fetch(newUrl, 
        {
          method: 'PUT',
          headers: shopifyHeader,
          body: newScriptTagBody
        }
      ).then((res => res.json()))
      const answer = await response;

      console.log('Ответ:', answer);
    }

  } catch (error) {
    console.error('Ошибка:', error);
  }

}

export async function delTags(id: string, token: string) {

  const url = `https://testing-apps-cmashinho.myshopify.com/admin/api/2021-10/script_tags/${id}.json`

  const shopifyHeader = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': token
  };

  try {
    const delScriptTags = await fetch(url, {
      method: 'DELETE',
      headers: shopifyHeader
    }).then((res => res.json()))

    const delResponse = await delScriptTags

    console.log('Ответ:', delResponse);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}