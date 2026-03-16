// Import Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr6PuadniNTOsg_cgKNb6_bCLHN3snTSU",
  authDomain: "fir-storage-c91bd.firebaseapp.com",
  projectId: "fir-storage-c91bd",
  storageBucket: "fir-storage-c91bd.firebasestorage.app",
  messagingSenderId: "464023719903",
  appId: "1:464023719903:web:cbcb8bcca628a734cb7e6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage
export const storage = getStorage(app);