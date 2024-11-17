export default async function getBuild(text) {
  const url = 'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct/v1/chat/completions';
  const API_KEY = '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';

  const msg = {
    method : "POST",
    headers : {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "messages": [
        {
          "role": "user",
          "content": `Make me a DOTA 2 item build for ${text} hero, try to make it as short as possible, if there's no such hero in DOTA 2 simply respond with "invalid hero"`
        }
      ],
      'max_tokens': 200,
    })
  };

  const response = await fetch(url, msg);
  const data = (await response.json());
  return data.choices[0].message.content;
}
