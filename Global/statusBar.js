import React from 'react';
import {Text, View } from 'react-native';
import { GlobalStyle } from './globalStyles';

export default function StatusBar() {
    return (
        <View style={GlobalStyle.container}>
            <View style={GlobalStyle.statusBar}>
                <View style={GlobalStyle.subStatusBar}></View>
                <Text style={GlobalStyle.statusBarTxt}>cyber-wolf Taste buds</Text>
            </View>
        </View>
    );
}
