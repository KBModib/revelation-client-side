// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import{ useEffect, useState} from 'react'
 import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
 import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG8_Lz9ggCm-gA1UM6TftJoSnTX7m-NWw",
  authDomain: "revelationapp-390bd.firebaseapp.com",
  databaseURL: "https://revelationapp-390bd-default-rtdb.firebaseio.com",
  projectId: "revelationapp-390bd",
  storageBucket: "revelationapp-390bd.appspot.com",
  messagingSenderId: "465444417647",
  appId: "1:465444417647:web:54b90ab71cf4b21a26dd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export const db = getDatabase(app);

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
  return signInWithEmailAndPassword(auth,email,password)
}
export function logout(){
  return signOut(auth)
}
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
      const unbn =  onAuthStateChanged(auth, user=>{
         setCurrentUser(user) 
      })
  return unbn
  },[])
  return currentUser;
}
const storage  = getStorage();

export async function upload(file, currentUser , setLoading){

  const fileRef = ref(storage, currentUser.uid +".png")
 
  setLoading(true)
  const snapshot=  await uploadBytes(fileRef,file)
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser,{photoURL:photoURL})
  setLoading(false)
  alert("Updated")
}