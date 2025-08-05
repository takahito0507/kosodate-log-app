import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Divider, useTheme, Text } from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { styles } from '../components/LoginScreen.styles';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '590911420482-efedk29hhvg467tiubb58homkdpe90bu.apps.googleusercontent.com',
    responseType: 'id_token',
    scopes: ['profile', 'email'],
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          Alert.alert('Googleログイン成功');
        })
        .catch((error) => {
          Alert.alert('Firebaseログイン失敗', error.message);
        });
    }
  }, [response]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('ログイン成功');
    } catch (error: any) {
      Alert.alert('ログイン失敗', error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('登録成功');
    } catch (error: any) {
      Alert.alert('登録失敗', error.message);
    }
  };

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
            <Title style={styles.title}>ようこそ</Title>
            <Text style={styles.subtitle}>メールアドレスでログイン／新規登録</Text>
            <TextInput
                label="メールアドレス"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                mode="outlined"
                left={<TextInput.Icon icon="email" />}
            />
            <TextInput
                label="パスワード"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
                mode="outlined"
                left={<TextInput.Icon icon="lock" />}
            />
            <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.button}
                contentStyle={styles.buttonContent}
                icon="login"
            >
                ログイン
            </Button>
            <Button
                mode="outlined"
                onPress={handleRegister}
                style={[styles.button, styles.outlineButton]}
                contentStyle={styles.buttonContent}
                labelStyle={styles.outlineButtonText}
                icon="account-plus"
            >
                新規登録
            </Button>
            <Divider style={{ marginVertical: 16 }} />
            <Button
                mode="contained-tonal"
                onPress={() => promptAsync()}
                icon="google"
                disabled={!request}
                style={styles.googleButton}
                contentStyle={styles.buttonContent}
            >
                Googleでログイン
            </Button>
            </View>
        </View>
    );

};

export default LoginScreen;
