import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwiPt104w45RL2dYSvhPVRVSOBfBR1rpY",
  authDomain: "nwitter-reloaded-a4c18.firebaseapp.com",
  projectId: "nwitter-reloaded-a4c18",
  storageBucket: "nwitter-reloaded-a4c18.appspot.com",
  messagingSenderId: "42429610011",
  appId: "1:42429610011:web:d04cdfc42cd6faf8bda0be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
