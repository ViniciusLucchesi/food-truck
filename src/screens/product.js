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

import { home, product, utils } from '../styles/estilos.js'
import { useNavigation } from '@react-navigation/native'


export default function Product() {
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
                    <View style={product.search}>
                        <Ionicons name={"search-outline"} size={20} color={"gray"}/>
                        <Text style={product.textSearch}>
                            Search...
                        </Text>
                    </View>
                    <View style={utils.spaceBetween}>
                        <TouchableOpacity>                            
                            <View style={product.categoriaAtiva}>
                                <Ionicons name={"fast-food-outline"} size={20} color={"#fff"}/>
                                <Text style={product.textAtivo}>
                                    Todas
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>                            
                            <View style={product.categoria}>
                                <Ionicons name={"pizza-outline"} size={20} color={"gray"}/>
                                <Text style={product.textSearch}>
                                    Salgado
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>                            
                            <View style={product.categoria}>
                                <Ionicons name={"beer-outline"} size={20} color={"gray"}/>
                                <Text style={product.textSearch}>
                                    Bebidas
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={product.menu}>
                        <TouchableOpacity>                            
                            <View style={product.item}>
                                <View style={product.textContent}>
                                    <Text style={product.nomeComida}>
                                        Hamburguer
                                    </Text>
                                    <Text style={product.descricao}>
                                        Um lanche muito saboroso
                                    </Text>
                                    <Text style={product.preco}>
                                    {
                                        Intl.NumberFormat('pt-BR',{
                                            style: 'currency', currency: 'BRL'
                                        }).format(6.5)
                                    }
                                    </Text>
                                </View>
                                <Image source={hamburguer} style={product.foodImage} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>                            
                            <View style={product.item}>
                                <View style={product.textContent}>
                                    <Text style={product.nomeComida}>
                                        Batata
                                    </Text>
                                    <Text style={product.descricao}>
                                        Um sabor sem igual
                                    </Text>
                                    <Text style={product.preco}>
                                    {
                                        Intl.NumberFormat('pt-BR',{
                                            style: 'currency', currency: 'BRL'
                                        }).format(3.5)
                                    }
                                    </Text>
                                </View>
                                <Image source={potato} style={product.foodImage} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>                            
                            <View style={product.item}>
                                <View style={product.textContent}>
                                    <Text style={product.nomeComida}>
                                        Cachorro Quente
                                    </Text>
                                    <Text style={product.descricao}>
                                        A salcicha do geito que você gosta ;)
                                    </Text>
                                    <Text style={product.preco}>
                                    {
                                        Intl.NumberFormat('pt-BR',{
                                            style: 'currency', currency: 'BRL'
                                        }).format(2.5)
                                    }
                                    </Text>
                                </View>
                                <Image source={hotdog} style={product.foodImage} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>                            
                            <View style={product.item}>
                                <View style={product.textContent}>
                                    <Text style={product.nomeComida}>
                                        Sorvete
                                    </Text>
                                    <Text style={product.descricao}>
                                        Geladinho e com granulado
                                    </Text>
                                    <Text style={product.preco}>
                                    {
                                        Intl.NumberFormat('pt-BR',{
                                            style: 'currency', currency: 'BRL'
                                        }).format(10)
                                    }
                                    </Text>
                                </View>
                                <Image source={icecream} style={product.foodImage} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>                            
                            <View style={product.item}>
                                <View style={product.textContent}>
                                    <Text style={product.nomeComida}>
                                        Café
                                    </Text>
                                    <Text style={product.descricao}>
                                        Quentinho e gostoso
                                    </Text>
                                    <Text style={product.preco}>
                                    {
                                        Intl.NumberFormat('pt-BR',{
                                            style: 'currency', currency: 'BRL'
                                        }).format(5)
                                    }
                                    </Text>
                                </View>
                                <Image source={coffee} style={product.foodImage} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>                            
                            <View style={product.item}>
                                <View style={product.textContent}>
                                    <Text style={product.nomeComida}>
                                        Panqueca
                                    </Text>
                                    <Text style={product.descricao}>
                                        Com calda extra
                                    </Text>
                                    <Text style={product.preco}>
                                    {
                                        Intl.NumberFormat('pt-BR',{
                                            style: 'currency', currency: 'BRL'
                                        }).format(5)
                                    }
                                    </Text>
                                </View>
                                <Image source={pancake} style={product.foodImage} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
