const Slimbot = require("slimbot");
const { v4: uuid } = require("uuid");

const bot = new Slimbot(process.env.BOT_KEY);

function start({ chat }) {
  const { id, username } = chat;

  return bot.sendMessage(id, `Hi, ${username}!`);
}

function photo({ chat }) {
  return bot.sendPhoto(
    chat.id,
    `https://source.unsplash.com/random?ray-id=${uuid()}`
  );
}

bot.on("message", (message) => {
  const { text, chat } = message;

  switch (text) {
    case "/photo":
      return photo(message);
    case "/start":
      return start(message);
    default:
      bot.sendMessage(
        chat.id,
        `You didn't ask, but here's a random number: ${Math.random()}`
      );
  }
});

module.exports = {
  start() {
    bot.startPolling();
  },
  stop() {
    bot.stopPolling();
  },
};
