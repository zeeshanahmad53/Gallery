import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyAjBRWT5yhcsPZ7X-wyRAP969ebxfgBUR8",
  authDomain: "gallery-16e7c.firebaseapp.com",
  projectId: "gallery-16e7c",
  storageBucket: "gallery-16e7c.appspot.com",
  messagingSenderId: "717736843042",
  appId: "1:717736843042:web:1519080d47351b2415f77b"
};


const app = initializeApp(firebaseConfig);
const databaseAuth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { databaseAuth, storage, database };


