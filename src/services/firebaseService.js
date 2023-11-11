import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, child, get, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY_FIREBASE,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN_FIREBASE,
  databaseURL: process.env.VUE_APP_DATABASE_URL_FIREBASE,
  projectId: process.env.VUE_APP_PROJECT_ID_FIREBASE,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET_FIREBASE,
  messagingSenderId: process.env.VUE_APP_MESSAGESENDER_ID_FIREBASE,
  appId: process.env.VUE_APP_APP_ID_FIREBASE,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID_FIREBASE,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, push, onValue, child, get, set };
