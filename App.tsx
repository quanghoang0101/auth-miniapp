import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './ui/WelcomeScreen';
import LoginScreen from './ui/LoginScreen';

export type RootStackParamList = {
  Welcome: undefined, // undefined because you aren't passing any params to the home screen
  Login: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title : '', headerShadowVisible: false, headerStyle: { backgroundColor: '#F8F8F8' } }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;