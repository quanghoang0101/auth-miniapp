import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './ui/WelcomeScreen';
import LoginScreen from './ui/LoginScreen';
import SignupScreen from './ui/SignupScreen';
import SuccessScreen from './ui/SuccessScreen';

export type RootStackParamList = {
  Welcome: undefined, // undefined because you aren't passing any params to the home screen
  Login: undefined,
  Signup: undefined,
  Success: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
          title : '', 
          headerShadowVisible: false, 
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: {fontWeight: "600", fontSize: 20}}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login', headerTitleAlign: 'center', headerBackVisible: false}}/>
        <Stack.Screen name='Signup' component={SignupScreen} options={{title: 'Register', headerTitleAlign: 'center', headerBackVisible: true}}/>
        <Stack.Screen name="Success" component={SuccessScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;