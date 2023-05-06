import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import estilos from '../styles/estilos.js'
import mascote from '../../assets/rust-mascot.png'

export default function Welcome() {
    return (
        <View style={estilos.container}>
            <View style={estilos.container}>
                <Image source={mascote} style={estilos.logo} />
                <Text style={estilos.title}>
                    Bem-vindo!
                </Text>
                <Text>Sinta-se a vontade para nos dar um feedback</Text>
                <Text>Bora lá?</Text>
            </View>
            <View style={estilos.footer}>
                <TouchableOpacity style={estilos.botao} >
                    <Text style={estilos.textoBotao}>
                        Avançar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
