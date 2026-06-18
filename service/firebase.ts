import { initializeApp } from "firebase/app"
import AsyncStorage from "@react-native-async-storage/async-storage"
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// AsyncStorage.setItem("key", "value")
// AsyncStorage.getItem("key")
// await AsyncStorage.getItem("key")

const firebaseConfig = {
  apiKey: "AIzaSyCLrzZMJwJ5sMJVdVy3S4WBXBTpTrP6quk",
  authDomain: "todo-list-rn-eaecd.firebaseapp.com",
  projectId: "todo-list-rn-eaecd",
  storageBucket: "todo-list-rn-eaecd.firebasestorage.app",
  messagingSenderId: "38120387597",
  appId: "1:38120387597:web:61cd16e70ea001649f9144"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

// before 9
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
