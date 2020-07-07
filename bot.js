require("dotenv").config();

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

bot.startPolling();

process.on("SIGINT", () => {
  console.log("Stopping bot");
  bot.stopPolling();
  process.exit(0);
});
