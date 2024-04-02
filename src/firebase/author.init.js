// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBzcsMjXIXPwIVq-4mSn13ZyN2hxG2R5-U',
  authDomain: 'simple-author-project.firebaseapp.com',
  projectId: 'simple-author-project',
  storageBucket: 'simple-author-project.appspot.com',
  messagingSenderId: '295810508002',
  appId: '1:295810508002:web:8b71c302b201587dc8aabb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
