import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, Image, } from 'react-native';
import { GlobalStyle } from '../Global/globalStyles';
import Card from '../Global/Card';
import { LargeButton } from '../Global/AppButton';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function IntroScreen({ navigation }) {

    return (
        <View style={GlobalStyle.container}>
            <View style={GlobalStyle.statusBar}>
                <View style={GlobalStyle.subStatusBar}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={GlobalStyle.statusBarTxt}>cyber-wolf Taste buds</Text>
                    <Fontisto name="stuck-out-tongue" size={24} color="white" style={{ paddingTop: 8, marginLeft: 2 }} />

                </View>
            </View>
            <ImageBackground source={require("../assets/meal.jpg")} style={styles.container} >
                <SafeAreaView style={styles.cardContainer}>
                    <Card>
                        <View style={styles.cardView}>
                            <Text style={styles.headertxt}>Welcome to Taste buds!</Text>
                            <View style={styles.brand}>
                                <Text style={styles.headertxt2}>By Cyber Wolf</Text>
                                <FontAwesome5 name="wolf-pack-battalion" size={26} color="white" />
                            </View>
                        </View>
                    </Card>
                    {/* Navigation slider */}
                    <View style={styles.buttonContainer}>
                        <LargeButton title='Get started' onPress={() => navigation.navigate('HomeScreen')} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}



const styles = StyleSheet.create({
    statusBarTxt: {
        textAlign: 'center',
        color: '#eee',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    NavigationSlidercon: {
        flexDirection: 'row', marginHorizontal: 7
    },
    active: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 14,
        width: 14,
    },
    ActiveSlider: {
        backgroundColor: 'green',
        borderRadius: 10, height: 20,
        width: 20, marginHorizontal: 8,
        justifyContent: 'center', alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        // marginTop:34
        // resizeMode:'contain'   //for images you don't want to exceed screen size
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 216,
    },
    cardView: {
        backgroundColor: 'teal',
        borderRadius: 8,
        width: 330
    },
    headertxt: {
        fontSize: 24,
        color: 'white',
        padding: 22,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headertxt2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "900"
    },
    buttonContainer: {
        marginTop: 150
    },
    brand:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 10,

    }
})

export default IntroScreen;
