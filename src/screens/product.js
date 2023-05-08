import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import {home} from '../styles/estilos.js'
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={home.background}>
            <Text>Product</Text>
        </View>
    );
}
