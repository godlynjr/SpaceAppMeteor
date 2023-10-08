import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Solar1 from './solar/Solar1';
import SolarMenu from './SolarMenu';
import SolarSlack from './solar/SolarSlack';
const Switcher = createNativeStackNavigator();

const EclipseSlack = () => {
  return (
    <Switcher.Navigator screenOptions={{headerShown: false}} independent={true} >
        <Switcher.Group>
            <Switcher.Screen name='EclipseMenu' component={SolarMenu} />
            <Switcher.Screen name='SolarE' component={SolarSlack} />
            <Switcher.Screen name='LunarE' component={Solar1} />
        </Switcher.Group>
    </Switcher.Navigator>
  )
}

export default EclipseSlack
