import React from 'react'
import { Text, Dimensions, View, Image, TouchableOpacity } from 'react-native'

import estilos from '../styles/estilos.js'
import logo from '../../assets/rust_logo.png'

const width = Dimensions.get('screen').width
export default function Welcome() {
    return (
        <View style={estilos.container}>
            <View style={estilos.container}>
                <Image source={logo} style={estilos.logo} />
                <Text style={estilos.title}>
                    Um pouco sobre Rust
                </Text>
                <Text>Entenda como ele funciona e porque foi criado</Text>
            </View>
            <View style={estilos.footer}>
                <View style={estilos.footerContent}>
                    <TouchableOpacity style={estilos.botaoSecundario}>
                        <Text style={estilos.textoBotaoSecundario}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <View style={estilos.space} />
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>
                            Avançar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
