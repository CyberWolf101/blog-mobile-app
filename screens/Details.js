import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, } from 'react-native';
import Card from '../Global/Card';
import { GlobalStyle } from '../Global/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { AppButton, SmallButton } from '../Global/AppButton';
import { ScrollView } from 'react-native-gesture-handler';

export default function Details({ route }) {
    const item = route.params;

    const handler = () => {
        Alert.alert('Successful!', "Item has be added to cart", [{ text: 'ok, got it', onPress: () => console.log('carted') }])
    }
    return (
        <View style={GlobalStyle.container}>
            <ScrollView>
                <View style={styles.DetailsImgCon}>
                    <View style={styles.mainDets}>
                        <View>
                            <Text style={{ alignSelf: 'center', justifyContent: 'center', color: 'crimson', fontWeight: 'bold', fontSize: 20, marginBottom: 19 }}>{item.name}</Text>
                        </View>
                        <Image source={item.image} style={styles.DetailsImg} />
                        <View style={{ width: '100%', flexDirection: 'row-reverse' }}>
                            <Ionicons name="ios-heart-circle" size={40} color="crimson" />
                        </View>
                        <View style={styles.cardInfoContainer}>
                            <Text style={styles.text}>
                                <Text style={styles.textKey}>Price:</Text> {item.price}
                            </Text> 
                        </View>
                    </View>
                    <View style={{ width: '100%' }}>
                        <Card>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'crimson', fontSize: 16, fontWeight: '500' }}>Description: </Text>
                                <Text style={{ color: 'teal', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.About}</Text>
                            </View>
                            <View style={{ paddingVertical: 12 }}>
                                <AppButton title='add to cart' onPress={handler} />
                            </View>
                        </Card>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    DetailsImg: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        borderRadius: 200,
    },
    DetailsImgCon: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginVertical: 6
    },
    cardView: {
        height: 190,
        width: 280,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems:'center'
    },
    textKey: {
        color: 'crimson',
        fontWeight: 'bold',
        fontSize: '16',
        margin: 30
    },
    text: {
        color: 'teal',
        fontSize: '18',
        fontWeight: 'bold',

    }, mainDets: {
        padding: 10,
        borderRadius: 6,
        elevation: 1,                               //this is how much it comes away from the screen
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },    //this gives the box a showdow and controlls how much the box is moved away from the view
        margin: 5,
        shadowOpacity: 0.5,                      //this determines how deep/clear u want the shadow to be
        shadowRadius: 2,                       //this just makes the background behind the box darker    
        margin: 8,
        backgroundColor: 'white', width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: 40
    }
})