import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {            //we want to create a custom card component
    return (
        // the props.children will represent anything we use this card to wrap and in this case, one of the things was the list on the home page
        <View style={styles.card} >
            {props.children}
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 6,
        elevation: 1,                               //this is how much it comes away from the screen
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },    //this gives the box a showdow and controlls how much the box is moved away from the view
        margin: 5,                             
        shadowOpacity: 0.5,                      //this determines how deep/clear u want the shadow to be
        shadowRadius: 2,                         //this just makes the background behind the box darker   
        margin:8,
    },

})