// ---------------------------------------------------------------------------
// Firebase project configuration
// ---------------------------------------------------------------------------
// Replace every value below with YOUR OWN Firebase project's config.
// You'll find this exact object in the Firebase console:
//   Project settings (gear icon) → General tab → "Your apps" → Web app → SDK setup and configuration
//
// This file is safe to be public / committed to your repo — Firebase web config
// values are not secret keys. Real access control happens in Firestore Security
// Rules (see firestore.rules) and Firebase Authentication, not by hiding this file.
// ---------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCUhPN6HrmEwTOGlgIHLbGW66IEGSGmtUU",
  authDomain: "rodney-pickleball-spot.firebaseapp.com",
  projectId: "rodney-pickleball-spot",
  storageBucket: "rodney-pickleball-spot.firebasestorage.app",
  messagingSenderId: "813295234452",
  appId: "1:813295234452:web:ea9fed13bc2279e9fe7381"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
