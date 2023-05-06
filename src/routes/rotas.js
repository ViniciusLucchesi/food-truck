import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../screens/welcome.js';
import RustWelcome from '../screens/rust-welcome.js';

const Tab = createBottomTabNavigator()

export default function Rotas(){
    return<NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Welcome' component={Welcome}/>
            <Tab.Screen name='RustWelcome' component={RustWelcome}/>
        </Tab.Navigator>
    </NavigationContainer>
}