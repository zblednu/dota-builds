import getBuild from './build-fetcher.js';
const input = document.querySelector('input');
input.focus();
const chatWindow = document.querySelector('.chat-window');

document.addEventListener("touchmove", (e) => e.preventDefault(), { capture: true });

input.addEventListener("keydown", async function (e) {
  if (e.key === "Enter" && input.value) {
    const text = input.value;
    input.value = "";
    input.setAttribute("disabled", "");
    input.setAttribute("placeholder", "Fetching data...");
    addChatMessage(text, true);
    addChatMessage(await getBuild(text), false);

    chatWindow.scroll({
      top: chatWindow.scrollHeight,
      behavior: "smooth"
    });
    input.removeAttribute("disabled");
    input.setAttribute("placeholder", "Type your city, e.g. 'Kosice'");
    input.focus();
  }
})

// user = true for user's message, user = false for bot message
function addChatMessage(text, user) {
  const comment = document.createElement("div");
  comment.className = `comment ${user ? "user" : "bot"}-response`;
  comment.textContent = text;

  chatWindow.appendChild(comment);
}

