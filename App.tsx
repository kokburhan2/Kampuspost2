import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet, View} from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Giriş Yap'}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{title: 'Kayıt Ol'}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Ana Sayfa'}}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
});

export default App;
