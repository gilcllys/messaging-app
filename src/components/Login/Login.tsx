import React from 'react'
import { Button } from '@mui/material'
import styles from './Login.module.css'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseConfig from '../../Firebase';

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()

const provider = new GoogleAuthProvider()
const auth = getAuth()
const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(result => console.log(result))
      .catch(error => alert(error.message))
  }
  return (
    <div className={styles.Login}>
      <div className={styles.LoginContainer}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="whatsapp"/>
        <div className={styles.LoginText}>
          <h1>Sign to Messaging App</h1>
        </div>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login