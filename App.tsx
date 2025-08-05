import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ログイン状態の監視
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // 監視終了
    });

    return unsubscribe; // クリーンアップ
  }, []);

  if (loading) {
    // 初期判定中はローディング
    return (
      <PaperProvider>
        <ActivityIndicator animating={true} style={{ flex: 1, justifyContent: 'center' }} />
      </PaperProvider>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
