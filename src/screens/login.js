import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import { login } from '../styles/estilos.js'
import { useNavigation } from '@react-navigation/native'

import user from '../../assets/user.png';
import { TextInput } from 'react-native-web';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={login.container}>
            <Image source={user} style={login.avatar} />
            <Text style={login.title}>Login</Text>

            <View style={login.inputContainer}>
                <View>
                    <Text style={login.inputText}>Usuário</Text>
                    <TextInput style={login.inputField} />
                </View>
                <View>
                    <Text style={login.inputText}>Senha</Text>
                    <TextInput style={login.inputField} secureTextEntry={true} />
                </View>
            </View>


            <TouchableOpacity style={login.button} onPress={() => {
                navigation.navigate('Welcome')
            }}>
                <Text style={login.textButton}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
