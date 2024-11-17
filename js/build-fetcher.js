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
          "content": `Provide brief (100 words top) weather forecast for ${text} for today, if there's no such city respond with "Incorrect city"`
        }
      ]
    })
  };

  const response = await fetch(url, msg);
  const data = (await response.json());
  return data.choices[0].message.content;
}
