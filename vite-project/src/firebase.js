import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDIDnM5sV6-rsNqhqZdRxVGH5NF33ltzQk",
  authDomain: "projetocomvite.firebaseapp.com",
  projectId: "projetocomvite",
  storageBucket: "projetocomvite.firebasestorage.app",
  messagingSenderId: "714845389710",
  appId: "1:714845389710:web:c66275263a44fd54d65adf"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
