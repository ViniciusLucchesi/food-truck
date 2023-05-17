import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import { login } from '../styles/estilos.js'
import { useNavigation } from '@react-navigation/native'

import user from '../../assets/user.png';
import { TextInput } from 'react-native-web';

export default function Login() {
    const navigation = useNavigation();

    const [nome, setLogin] = useState();
    const [senha, setSenha] = useState();

    return (
        <View style={login.container}>
            <Image source={user} style={login.avatar} />
            <Text style={login.title}>Login</Text>

            <View style={login.inputContainer}>
                <View>
                    <Text style={login.inputText}>Usuário</Text>
                    <TextInput style={login.inputField} onChangeText={novoLogin => setLogin(novoLogin)} value={nome} />
                </View>
                <View>
                    <Text style={login.inputText}>Senha</Text>
                    <TextInput style={login.inputField} secureTextEntry={true} onChangeText={novaSenha => setSenha(novaSenha)} value={senha} />
                </View>
            </View>


            <TouchableOpacity style={login.button} onPress={() => {
                console.log("Login: ",nome, " - Senha: ", senha)
                navigation.navigate('Welcome')
            }}>
                <Text style={login.textButton}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
