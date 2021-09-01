const io = require("./socket");
const Slimbot = require("slimbot");
const { db } = require("./firebase");
const { fetchCars } = require("./scraper");

const bot = new Slimbot(process.env.BOT_KEY);

async function kolesa_subscribe({ chat }) {
  const { id, username } = chat;

  const users = db.collection("users");

  const {
    docs: [user],
  } = await users.get();

  if (user) {
    return bot.sendMessage(id, `Вы уже подписаны!`);
  }

  await users.add({
    chatId: id + "",
    username,
  });

  return bot.sendMessage(id, `Вы успешно подписаны!`);
}

async function kolesa_unsubscribe({ chat }) {
  const { id } = chat;

  const users = db.collection("users");

  const {
    docs: [user],
  } = await users.get();

  if (!user) {
    return bot.sendMessage(id, `Вы не подписаны!`);
  }

  await user.ref.delete();

  return bot.sendMessage(id, `Вы успешно отписаны!`);
}

function start({ chat }) {
  const { id, username } = chat;

  return bot.sendMessage(id, `Hi, ${username}!`);
}

function photo({ chat }) {
  return bot.sendPhoto(chat.id, "https://source.unsplash.com/random");
}

function metrics({ chat }) {
  return bot.sendMessage(chat.id, `Users on the webpage: ${io.getUsers()}`);
}

bot.on("message", (message) => {
  const { text, chat } = message;

  switch (text) {
    case "/metrics":
      return metrics(message);
    case "/photo":
      return photo(message);
    case "/kolesa_subscribe":
      return kolesa_subscribe(message);
    case "/kolesa_unsubscribe":
      return kolesa_unsubscribe(message);
    case "/start":
      return start(message);
    default:
      bot.sendMessage(
        chat.id,
        `You didn't ask, but here's a random number: ${Math.random()}`
      );
  }
});

let intervalId = -1;

async function fetchJob() {
  const jobTime = new Date().toUTCString();
  console.group("Job - " + jobTime);
  console.time("Overall Time");

  console.time("Cars scrap");
  const fetchedCars = await fetchCars();
  console.timeEnd("Cars scrap");

  console.time("Cars db fetch");
  const { docs: cars } = await db.collection("cars").get();
  console.timeEnd("Cars db fetch");

  const batch = db.batch();

  const newNotifiers = [];
  const changedNotifiers = [];
  const deletedNotifiers = [];

  console.time("Condition loops");
  for (const car of fetchedCars) {
    const result = cars.find((f) => f.data().carId === car.carId);

    // new
    if (!result) {
      newNotifiers.push(car);
      const ref = db.collection("cars").doc();
      batch.set(ref, car);
    }
    // changed
    else if (result.data().price !== car.price) {
      changedNotifiers.push(car);
      batch.set(result.ref, car);
    }
  }

  for (const car of cars) {
    const result = fetchedCars.find((f) => f.carId === car.data().carId);
    // delete
    if (!result) {
      deletedNotifiers.push(result);
      batch.delete(car.ref);
    }
  }
  console.timeEnd("Condition loops");

  console.time("Users db fetch");
  const { docs: users } = await db.collection("users").get();
  console.timeEnd("Users db fetch");

  console.time("Notifications");
  for (const user of users) {
    const { chatId } = user.data();

    for (const car of newNotifiers) {
      bot.sendPhoto(chatId, car.photo, {
        caption: `
            <b>Новый автомобиль</b>

Машина:     <u>${car.title}</u>
Цена:           <u>${car.price.toLocaleString("ru")}</u>

${car.description}

${car.link}
            `,
        parse_mode: "HTML",
      });
    }

    for (const car of changedNotifiers) {
      const oldCar = cars.find((f) => f.data().carId === car.carId);
      const price = car.price;
      const oldPrice = oldCar.data().price;
      const difference = ((price / oldPrice - 1) * 100).toFixed(2);

      bot.sendPhoto(chatId, car.photo, {
        caption: `
            <b>Обновление статуса</b>

Машина:     <u>${car.title}</u>
Цена:           <u>${oldPrice.toLocaleString("ru")} -> ${price.toLocaleString(
          "ru"
        )} (${difference}%)</u>

${car.description}

${car.link}
            `,
        parse_mode: "HTML",
      });
    }

    for (const car of deletedNotifiers) {
      bot.sendPhoto(chatId, car.photo, {
        caption: `
            <b>Объявление снято</b>

Машина:     <u>${car.title}</u>
Цена:           <u>${car.price.toLocaleString("ru")}</u>

${car.description}
            `,
        parse_mode: "HTML",
      });
    }
  }
  console.timeEnd("Notifications");


  console.time("Batch commit");
  await batch.commit();
  console.timeEnd("Batch commit");

  console.timeEnd("Overall Time");
  console.groupEnd("Job - " + jobTime);
}

module.exports = {
  start() {
    bot.startPolling();
    intervalId = setInterval(
      fetchJob,
      parseInt(process.env.JOB_INTERVAL) || 900000
    );
  },
  stop() {
    bot.stopPolling();
    clearInterval(intervalId);
  },
};
