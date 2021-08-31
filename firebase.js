const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

const app = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "kolesa-tracker.firebaseapp.com",
  projectId: "kolesa-tracker",
  storageBucket: "kolesa-tracker.appspot.com",
  messagingSenderId: "734321667706",
  appId: "1:734321667706:web:8bb1c3ab0b5bbba59195c3",
  measurementId: "G-ZBNF6BNLKM",
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {
  app,
  db,
};
