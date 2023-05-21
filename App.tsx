import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AuthProvider, useAuht } from './app/context/AuthContext';
import { NativeScreenContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import Login from './app/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <AuthProvider>
        <Layout></Layout>
      </AuthProvider>
  );
}


export const Layout = ()=>{
  const {austhState, onLogout} = useAuht();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          {austhState?.authenticated ? (
            <Stack.Screen name="Home" component={Home}  />
          ):(
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
    </NavigationContainer>
  )
}
