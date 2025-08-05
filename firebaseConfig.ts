import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebaseの設定情報
const firebaseConfig = {
  apiKey: "AIzaSyBRA67Q8Uhz2CjawhxMcFr4F-OV0KVIOVM",
  authDomain: "kosodate-log-app-abd90.firebaseapp.com",
  projectId: "kosodate-log-app-abd90",
  storageBucket: "kosodate-log-app-abd90.appspot.com", // ← 修正：`.app` → `.appspot.com`
  messagingSenderId: "615381605293",
  appId: "1:615381605293:web:19cee789564239579e1f24"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// サービスのエクスポート（他ファイルから使えるように）
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);