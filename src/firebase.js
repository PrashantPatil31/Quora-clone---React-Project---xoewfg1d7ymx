import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyArGeHaWkZ3wIvfXJUROUKdxZfEw73j5HM",
//   authDomain: "quora-clone-1b761.firebaseapp.com",
//   databaseURL: "https://quora-clone-1b761-default-rtdb.firebaseio.com",
//   projectId: "quora-clone-1b761",
//   storageBucket: "quora-clone-1b761.appspot.com",
//   messagingSenderId: "5474927088",
//   appId: "1:5474927088:web:7dff5a7f8b5e9b5d575d35",
//   measurementId: "G-RS6THMYKEZ",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD78n9EELOJ8eht8ymEk4-__Yn_NLlDNRg",
  authDomain: "quora-clone-ec55a.firebaseapp.com",
  projectId: "quora-clone-ec55a",
  storageBucket: "quora-clone-ec55a.appspot.com",
  messagingSenderId: "389608022699",
  appId: "1:389608022699:web:afda20d82dfde9fa4c0dee",
  measurementId: "G-PRDD2PBJZS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
