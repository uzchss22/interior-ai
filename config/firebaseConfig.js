import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAw9X7Wq1o3M__-zer3-6Oogabzuc8vy7w",
  authDomain: "interior-ai-90306.firebaseapp.com",
  projectId: "interior-ai-90306",
  storageBucket: "interior-ai-90306.firebasestorage.app",
  messagingSenderId: "865330041821",
  appId: "1:865330041821:web:9805d35bdbb181a6a41c34"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);