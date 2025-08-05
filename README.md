# Kosodate Log App

育児の記録を手軽につけられる、React Native + Firebase製の個人開発アプリです。

---

## 📱 アプリ概要

- **開発環境**: React Native (Expo) + Firebase
- **主な機能**:
  - メールアドレス/Google認証でのログイン・新規登録
  - 育児記録（授乳、睡眠、排泄、メモ等）の追加・一覧表示（今後追加予定）
  - iOS/Android両対応

---

## 🚀 インストール & 起動方法

\`\`\`bash
git clone https://github.com/takahito0507/kosodate-log-app.git
cd kosodate-log-app
npm install
npx expo start
\`\`\`

---

## 🛠️ 開発技術・ライブラリ

- React Native (Expo)
- Firebase Authentication / Firestore / Storage
- react-native-paper (UI)
- @react-navigation/native (画面遷移)

---

## 🔐 Firebaseの設定

\`firebaseConfig.ts\` に自身のFirebaseプロジェクトの設定情報を記載してください。  
（APIキーなどは.env等で管理推奨）

---

## 👤 開発者

- [@takahito0507](https://github.com/takahito0507)

---

## 💡 今後追加予定

- 育児記録のグラフ化やカレンダー表示
- 記録の編集・削除
- プッシュ通知
- データバックアップ
- Web版とのデータ連携

---

## 📝 ライセンス

MIT
