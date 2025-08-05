// components/LoginScreen.styles.ts
import { StyleSheet } from 'react-native';

const PURPLE = '#6C63FF';
const TITLE_COLOR = '#333366';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // ← 追加: 横方向中央寄せ
    padding: 28,
    backgroundColor: '#fff',
  },
  inner: {
    width: '100%',
    maxWidth: 360, // ← 最大幅を設定（好みで320-400あたりもOK）
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: TITLE_COLOR,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#444',
    marginBottom: 18,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginBottom: 8,
    borderRadius: 8,
  },
  outlineButton: {
    borderColor: PURPLE,
    borderWidth: 1.8,
  },
  outlineButtonText: {
    color: PURPLE,
    fontWeight: 'bold',
  },
  googleButton: {
    marginTop: 2,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 5,
  },
});
