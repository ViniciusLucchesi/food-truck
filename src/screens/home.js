import React from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import user from '../../assets/user.png';
import pancake from '../../assets/pancake.png';
import icecream from '../../assets/icecream.png';
import hamburguer from '../../assets/hamburguer.png';
import potato from '../../assets/potato.png';
import coffee from '../../assets/coffee.png';
import hotdog from '../../assets/hotdog.png';

import { home, utils } from '../styles/estilos.js'
import { useNavigation } from '@react-navigation/native'


export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView style={home.background}>

            <View>
                <View style={home.header}>
                    <TouchableOpacity>
                        <Ionicons name={"ios-menu-sharp"} size={30} color={"#918AE3"} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                        navigation.navigate('Login')
                    }}>
                        <Image source={user} style={home.avatar} />
                    </TouchableOpacity>
                </View>
                <View style={home.content}>
                    <View style={home.topContent}>
                        <Text style={home.topTitle}>
                            Lanche destaque
                        </Text>
                        <View style={home.topCardContent}>
                            <View style={utils.center}>
                                <Text style={home.topSubtitle}>
                                    Descubra
                                </Text>
                                <View>
                                    <Text style={home.topFoodTitle}>
                                        Melhor comida
                                    </Text>
                                    <Text style={home.topFoodTitle}>
                                        Do dia!
                                    </Text>
                                </View>
                            </View>
                            <Image source={hamburguer} style={home.topFood} />
                        </View>
                    </View>
                    <View style={home.bottomContent}>
                        <Text style={home.bottomSubtitle}>
                            Mais populares
                        </Text>
                        <View style={home.cardContainer}>
                            <TouchableOpacity>
                                <View style={home.card}>
                                    <Image source={pancake} style={home.cardFood} />
                                    <Text style={home.textCard}>
                                        Panqueca
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={home.card}>
                                    <Image source={icecream} style={home.cardFood} />
                                    <Text style={home.textCard}>
                                        Sorvete
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>                        
                        <View style={home.cardContainer}>
                            <TouchableOpacity>                            
                                <View style={home.card}>
                                    <Image source={hamburguer} style={home.cardFood} />
                                    <Text style={home.textCard}>
                                        Hamburguer
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>                            
                                <View style={home.card}>
                                    <Image source={potato} style={home.cardFood} />
                                    <Text style={home.textCard}>
                                        Batata
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={home.cardContainer}>
                            <TouchableOpacity>                            
                                <View style={home.card}>
                                    <Image source={hotdog} style={home.cardFood} />
                                    <Text style={home.textCard}>
                                        HotDog
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>                            
                                <View style={home.card}>
                                    <Image source={coffee} style={home.cardFood} />
                                    <Text style={home.textCard}>
                                        Café
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
