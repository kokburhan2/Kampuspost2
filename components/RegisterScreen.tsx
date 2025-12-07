import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import CustomInput from './CustomInput';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Hesap Oluştur butonuna tıklandı');

    if (password !== confirmPassword) {
      Alert.alert('Dikkat', 'Girdiğiniz parolalar eşleşmiyor, lütfen kontrol ediniz.');
      return;
    }

    console.log('Kayıt işlemi tamamlandı', { email });
    Alert.alert('Kayıt Tamamlandı', 'Hesabınız oluşturuldu. Şimdi giriş yapabilirsiniz.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Hesap Oluştur</Text>

        <View style={styles.form}>
          <CustomInput
            placeholder="E-posta"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <CustomInput
            placeholder="Şifre"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Şifre Tekrar"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Hesap Oluştur</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#1f2933',
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterScreen;


