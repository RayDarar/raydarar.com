const io = require("./socket");
const Slimbot = require("slimbot");

const bot = new Slimbot(process.env.BOT_KEY);

bot.on("message", (message) => {
  const { text, chat } = message;

  if (text == "/metrics") {
    bot.sendMessage(chat.id, `Users on the webpage: ${io.getUsers()}`);
  } else {
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
