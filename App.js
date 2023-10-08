import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import InitialSlack from './pages/initialSlack';

export default function App() {
  return (
    <NavigationContainer>
      <InitialSlack />
    </NavigationContainer>
    // <Menu />
    // <StarAnimation/>
  );
}
