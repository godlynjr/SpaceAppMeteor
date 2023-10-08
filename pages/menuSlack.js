import React from 'react'
import WelcomePage from './welcome/welcomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Kids from './content/kids';
import Young from './content/Young';
import NLK from './content/NLK';
import MyScreen from './home/test';
import KidsSlack from './kidsSlack';
const Switcher = createNativeStackNavigator();

const MenuSlack = () => {
  return (
    <Switcher.Navigator screenOptions={{headerShown: false}} independent={true} >
        <Switcher.Group>
        <Switcher.Screen name='Menu' component={MyScreen} />
            <Switcher.Screen name='Kids' component={KidsSlack} />
            <Switcher.Screen name='Young' component={Young} />
            <Switcher.Screen name='NLK' component={NLK} />
        </Switcher.Group>
    </Switcher.Navigator>
  )
}

export default MenuSlack
