import React from 'react'
import WelcomePage from './welcome/welcomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './welcome/loading';
import Kids from './content/kids';
import Young from './content/Young';
import NLK from './content/NLK';
import MyScreen from './home/test';
import MenuSlack from './menuSlack';
const Switcher = createNativeStackNavigator();

const InitialSlack = () => {
  return (
    <Switcher.Navigator screenOptions={{headerShown: false}} independent={true} >
        <Switcher.Group>
            <Switcher.Screen name='Welcome' component={WelcomePage} />
            <Switcher.Screen name='Loading' component={LoadingScreen} />
            <Switcher.Screen name='Screen' component={MenuSlack} />
        </Switcher.Group>
    </Switcher.Navigator>
  )
}

export default InitialSlack
