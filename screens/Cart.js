import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ImageBackground, Image, } from 'react-native';
import { GlobalStyle } from '../Global/globalStyles';
import Cart_Items from '../Global/cart_items';
import Card from '../Global/Card';
import { Ionicons } from '@expo/vector-icons';
import { AppButton } from '../Global/AppButton';
// import { TouchableHighlight } from 'react-native-gesture-handler';


export default function Cart() {
    const [totalItems, setTotalItems] = useState(1)
    return (                                          
        <ImageBackground source={require('../assets/food_paradise.jpg')} style={GlobalStyle.container}>
            <View>
                {
                    <FlatList
                        data={Cart_Items}
                        renderItem={(({ item, index }) => (
                            <View style={{ flex: 1 }} key={index}>
                                <Card>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 60, }} />
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'crimson', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                                            <Text style={{ color: 'teal', fontSize: 16, fontWeight: 'bold' }}>Buy for {item.price}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'green', fontWeight: '900', fontSize:16 }}>{totalItems}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                <TouchableOpacity underlayColor='crimson' activeOpacity={0.5}>
                                                    <Ionicons name="add-circle" size={29} color="crimson" />
                                                </TouchableOpacity>
                                                <TouchableOpacity >
                                                    <Ionicons name="remove-circle" size={29} color="crimson" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Card>
                            </View>
                        ))}
                    />
                }
                <View style={{ marginTop: 40 }}>
                    <Card>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 7 }}>
                            <Text style={{ color: 'crimson', fontSize: 16, fontWeight: 'bold' }}>Total:</Text>
                            <Text style={{ color: 'teal', fontSize: 18, fontWeight: 'bold', marginLeft: 4 }}>$65.3</Text>
                        </View>
                        <View>
                            <AppButton title='checkout' />
                        </View>
                    </Card>
                </View>
            </View>
        </ImageBackground>
    );
}

