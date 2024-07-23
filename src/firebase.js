// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhW_bDjNXX_x7N5-1XdrW4wxNDtwslJzE",
  authDomain: "blogplatform-289e0.firebaseapp.com",
  projectId: "blogplatform-289e0",
  storageBucket: "blogplatform-289e0.appspot.com",
  messagingSenderId: "230428944012",
  appId: "1:230428944012:web:07ded03526af38ff403da9",
  measurementId: "G-LC83ZS4LFD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
