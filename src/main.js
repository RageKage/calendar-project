

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";
import dotenv from "dotenv";

const app = createApp(App);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "calendar-project-21fd4.firebaseapp.com",
  databaseURL: "https://calendar-project-21fd4-default-rtdb.firebaseio.com",
  projectId: "calendar-project-21fd4",
  storageBucket: "calendar-project-21fd4.appspot.com",
  messagingSenderId: "104678769449",
  appId: "1:104678769449:web:93acd64c02bea545632d38",
  measurementId: "G-F2VKQMBP6F"
};

// Initialize the Firebase app with the configured credentials
initializeApp(firebaseConfig);

// Use the Pinia state management library
app.use(createPinia());

// Use the router instance
app.use(router);

// Mount the app to the DOM
app.mount("#app");
