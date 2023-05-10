import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { utils } from '../styles/estilos.js';

import Welcome from '../screens/welcome.js';
import Login from '../screens/login.js';
import Home from '../screens/home.js';
import Product from '../screens/product.js';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Product') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        } else if (route.name === 'Login') {
                            iconName = focused ? 'log-out-outline' : 'log-out-outline';
                        } else {
                            iconName = focused ? 'megaphone-outline' : 'megaphone-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarStyle: utils.tabBar,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: '#5D55B2',
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Product" component={Product} options={{ headerShown: false }} />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{ tabBarStyle: { display: 'none' }, headerShown: false }}
                />
                <Tab.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ tabBarStyle: { display: 'none' }, headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}