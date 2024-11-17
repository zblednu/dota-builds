import getBuild from './build-fetcher.js';
const input = document.querySelector('input');
input.focus();
const chatWindow = document.querySelector('.chat-window');

input.addEventListener("keydown", async function (e) {
  if (e.key === 'Enter' && input.value) {
    addChatMessage(input.value, true);
    addChatMessage(await getBuild(input.value), false);

    chatWindow.scroll({
      top: chatWindow.scrollHeight,
      behavior: "smooth"
    });
    input.value = "";
    input.focus();
  }
})

// user = true for user's message, user = false for bot message
function addChatMessage(text, user) {
  const comment = document.createElement('div');
  comment.className = `comment ${user ? 'user' : 'bot'}-response`;
  comment.textContent = text;

  chatWindow.appendChild(comment);
}

