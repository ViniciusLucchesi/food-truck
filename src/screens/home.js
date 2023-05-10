import React from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import user from '../../assets/user.png';
import pancake from '../../assets/pancake.png';

import { home, utils } from '../styles/estilos.js'
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();

    return (
        <ScrollView style={home.background}>

            <View>
                <View style={home.header}>
                    <TouchableOpacity>
                        <Ionicons name={"ios-menu-sharp"} size={30} color={"#918AE3"} />
                    </TouchableOpacity>
                    <Image source={user} style={home.avatar} />
                </View>
                <View style={home.content}>
                    <View style={home.top.topContent}>
                        <Text style={home.top.title}>
                            Lanche destaque
                        </Text>
                        <View style={home.top.topCardContent}>
                            <View style={utils.center}>
                                <Text style={home.top.subtitle}>
                                    Descubra
                                </Text>
                                <View>
                                    <Text style={home.top.topFoodTitle}>
                                        Melhor comida
                                    </Text>
                                    <Text style={home.top.topFoodTitle}>
                                        Do dia!
                                    </Text>
                                </View>
                            </View>
                            <Image source={pancake} style={home.top.food} />
                        </View>
                    </View>
                    <View style={home.bottomContent}>
                        <Text style={home.subtitle}>
                            Mais populares
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
