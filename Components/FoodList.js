import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Card from '../Global/Card';
import meals from '../Global/Meals';
import { AntDesign } from '@expo/vector-icons';

function FoodList({ navigation }) {

    return (
        <View>
            <FlatList
                keyExtractor={(meals) => meals.id}
                numColumns={2}
                data={meals}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.5} >
                        <Card>
                            <View style={styles.listContainer}>
                                <Image source={item.image} style={styles.image} />
                                <Text style={{ ...styles.text, marginTop: 10 }} >{item.name}</Text>
                                <TouchableHighlight onPress={() => navigation.navigate("Details", item)} underlayColor='white' activeOpacity={0.5}>
                                    <AntDesign name="pluscircle" size={34} color="teal" style={{ marginTop: 8 }} />
                                </TouchableHighlight>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 170,
        width: 160,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    listContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'teal',
        fontWeight: '700',
        fontSize: 16,
    }
})


export default FoodList;