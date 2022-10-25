// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJAvDOIo1MgZ7klBFTEJNoXVCgN7XbVCI",
    authDomain: "brain-food-course.firebaseapp.com",
    projectId: "brain-food-course",
    storageBucket: "brain-food-course.appspot.com",
    messagingSenderId: "122992297847",
    appId: "1:122992297847:web:9a6517ad939d8b92e74372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;