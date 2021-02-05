import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAYPPRuuPJu91qhq5shyywCPTQWzscnnho",
  authDomain: "linkedin-clone-d5c2d.firebaseapp.com",
  projectId: "linkedin-clone-d5c2d",
  storageBucket: "linkedin-clone-d5c2d.appspot.com",
  messagingSenderId: "634532468695",
  appId: "1:634532468695:web:1c0088c614bd6f08ae1d92",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
