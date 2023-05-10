import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSORkY_sLUI9l3_2KWYuhmJdpiYICBpak",
  authDomain: "masterstocksmain.firebaseapp.com",
  projectId: "masterstocksmain",
  storageBucket: "masterstocksmain.appspot.com",
  messagingSenderId: "224810117947",
  appId: "1:224810117947:web:07c63e7bc847bd1c2d651e",
  measurementId: "G-4P36B6RERY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app)
export  {db};