import React from 'react'
import WelcomePage from './welcome/welcomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sun from './kids/Sun';
import Sun2 from './kids/Sun2';
import Moon from './kids/Moon';
import Moon2 from './kids/Moon2';
import Kids from './content/kids';
import EclipseSlack from './kids/EclipseStack';
const Switcher = createNativeStackNavigator();

const KidsSlack = () => {
  return (
    <Switcher.Navigator screenOptions={{headerShown: false}} independent={true} >
        <Switcher.Group>
        <Switcher.Screen name='Kidos' component={Kids} />

            <Switcher.Screen name='Sun' component={Sun} />
            <Switcher.Screen name='Sun2' component={Sun2} />
            <Switcher.Screen name='Moon' component={Moon} />
            <Switcher.Screen name='Moon2' component={Moon2} />
            <Switcher.Screen name='SolarEclips' component={EclipseSlack} />
        </Switcher.Group>
    </Switcher.Navigator>
  )
}

export default KidsSlack
