import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const LargeButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.LargeButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
        <Ionicons name="ios-enter" size={28} color="white" style={{ marginStart: 6 }}/>
    </TouchableOpacity>
);

export const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
        <Ionicons name="cart" size={28} color="white" style={{ marginStart: 6 }}/>
    </TouchableOpacity>
);
export const SmallButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.smallButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
        <Ionicons name="cart" size={24} color="white" style={{ marginStart: 6 }}/>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    LargeButtonContainer: {
        elevation: 8,
        backgroundColor: "orange",
        borderRadius: 20,
        paddingVertical: 24, 
        paddingHorizontal: 10,
        marginTop: 11,
        width: 300,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "crimson",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 11,
        width: 300,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallButtonContainer:{
        elevation: 8,
        backgroundColor: "crimson",
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 1,
        // marginTop: 11,
        width: 190,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});