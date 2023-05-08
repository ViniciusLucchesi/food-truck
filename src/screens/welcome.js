import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import {welcome} from '../styles/estilos.js'
import hotdog from '../../assets/hotdog.png';
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={welcome.background}>
            <Image source={hotdog} style={welcome.logo} />
            <Text style={welcome.title}>
                Comidas
                <Text style={welcome.subtitle}>
                    deliciosas.
                </Text>
            </Text>
            
            <Text style={welcome.text}>
                Nos deixe ajudar a encontrar a melhor comida da semana.
            </Text>
            <TouchableOpacity style={welcome.button} onPress={()=>{
                    navigation.navigate('Home')
                }}>
                    <Text style={welcome.textButton}>
                        Iniciar
                    </Text>
                </TouchableOpacity>
        </View>
    );
}
