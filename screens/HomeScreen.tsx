// screens/HomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const HomeScreen = () => {
  // ログアウト処理
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={{ marginBottom: 24 }}>
        ホーム画面へようこそ 🎉
      </Text>
      <Text style={{ marginBottom: 40 }}>
        （ここに育児記録アプリのメイン機能を配置していきます）
      </Text>
      <Button mode="contained" onPress={handleLogout} icon="logout">
        ログアウト
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 28,
  },
});

export default HomeScreen;