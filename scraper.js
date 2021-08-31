const { JSDOM } = require("jsdom");
const axios = require("axios").default;

const url =
  "https://kolesa.kz/cars/almaty/?_sys-hasphoto=2&_txt_=Авто+501-502-503";

function parsePage(document = new Document()) {
  const nodes = document.querySelectorAll("div.row.vw-item.list-item.a-elem");
  const cars = [];

  for (const node of nodes) {
    const priceNode = node.querySelector("span.price");
    priceNode.removeChild(priceNode.querySelector("span"));

    cars.push({
      link: "https://kolesa.kz" + node.querySelector("a.list-link").href,
      title: node.querySelector("span.a-el-info-title > a").innerHTML.trim(),
      price: parseFloat(
        priceNode.innerHTML
          .replace(/&nbsp;/g, "")
          .replace(/\n/g, "")
          .trim()
      ),
      description: node
        .querySelector("div.a-search-description")
        .innerHTML.replace(/\n/g, "")
        .trim(),
      date: node.querySelector("span.date").innerHTML,
      carId: node.dataset.id,
      photo: node
        .querySelector("div.a-elem__picture img")
        ?.src.replace("160x120", "750x470"),
    });
  }

  return cars;
}

const wait = async (ms) => new Promise((res) => setTimeout(res, ms));

async function fetchCars() {
  const { data } = await axios.get(encodeURI(url));

  const {
    window: { document },
  } = new JSDOM(data);

  const pages = document
    .querySelector("div.pager")
    .querySelectorAll("li").length;

  const ids = new Map();

  function pageFilter(car) {
    if (ids.has(car.carId)) return false;
    ids.set(car.carId, true);
    return true;
  }

  const cars = [...parsePage(document).filter(pageFilter)];

  for (let i = 2; i <= pages; i++) {
    await wait(1000);
    const { data } = await axios.get(encodeURI(url + "&page=" + i));

    const {
      window: { document },
    } = new JSDOM(data);

    cars.push(...parsePage(document).filter(pageFilter));
  }

  return cars;
}

module.exports = {
  fetchCars,
};
