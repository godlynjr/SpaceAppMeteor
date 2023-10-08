import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Solar1 from './Solar1';
import Solar2 from './Solar2';
import Learn from './learn';
import Info1 from './Info1';
const Switcher = createNativeStackNavigator();

const SolarSlack = () => {
  return (
    <Switcher.Navigator screenOptions={{headerShown: false}} independent={true} >
        <Switcher.Group>
            <Switcher.Screen name='Solar1' component={Solar1} />
            <Switcher.Screen name='Solar2' component={Solar2} />
            <Switcher.Screen name='Learn' component={Learn} />
            <Switcher.Screen name='Info1' component={Info1} />
            <Switcher.Screen name='Info2' component={Info} />
        </Switcher.Group>
    </Switcher.Navigator>
  )
}

export default SolarSlack
