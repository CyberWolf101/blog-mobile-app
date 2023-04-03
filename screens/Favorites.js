import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, Modal, TouchableWithoutFeedback, Alert, } from 'react-native';
import { GlobalStyle } from '../Global/globalStyles';
import favoriteFood from '../Global/favorites'
import Card from '../Global/Card';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AppButton } from '../Global/AppButton';


export default function Favourites() {

    const handler = () => {
        Alert.alert('Successful!', "Item has be added to cart", [{ text: 'ok, got it', onPress: () => console.log('carted') }])
    }
    return (
        <ImageBackground style={GlobalStyle.container} source={require('../assets/pizza_wallpaper.jpg')}>
            <View style={{ flex: 1 }} >
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    {
                        favoriteFood.map((favorite, index) => (
                            <View key={index}>
                                <Card>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Image source={favorite.image} style={{ height: 80, width: 80, borderRadius: 60, }} />
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'crimson', fontSize: 16, fontWeight: 'bold' }}>{favorite.name}</Text>
                                            <Text style={{ color: 'teal', fontSize: 16, fontWeight: 'bold' }}>Buy for {favorite.price}</Text>
                                        </View>
                                        <Ionicons name="heart" size={32} color="crimson" />
                                    </View>
                                    <View style={{ width: '100%' }}>
                                        <AppButton title='add to cart' onPress={handler}/>
                                    </View>
                                </Card>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </ImageBackground>

    );
}

