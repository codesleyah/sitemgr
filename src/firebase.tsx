import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAtyn9-qa7Vao-KBlOGCxqYu2Vo8yQJg8",
  authDomain: "homecliq-afbf6.firebaseapp.com",
  projectId: "homecliq-afbf6",
  storageBucket: "homecliq-afbf6.appspot.com",
  messagingSenderId: "113051003804",
  appId: "1:113051003804:web:858d375aef037a67c07659",
  measurementId: "G-8JZ79VQQC5",
};
let firebaseApp;

if (!getApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
}
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
export { fireStore, storage, firebaseAuth };
