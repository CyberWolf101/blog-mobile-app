import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard, Image, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyle } from '../Global/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import categories from '../Global/categories';
import Card from '../Global/Card';
import FoodList from '../Components/FoodList';
import { Fontisto } from '@expo/vector-icons';

//30 mins  (you changed the image)
export default function Home({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/pizza_wallpaper.jpg')} style={GlobalStyle.container}>
                {/* status bar */}
                <View style={styles.statusBar}>
                    <View style={styles.subStatusBar}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.statusBarTxt}>cyber-wolf Taste buds</Text>
                        <Fontisto name="stuck-out-tongue" size={24} color="white" style={{ paddingTop: 8, marginLeft: 2 }} />
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 7 }}>
                    {/* Salutations */}
                    <Card>
                        <View style={styles.Salutation}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Hello,</Text>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Timmy</Text>
                                </View>
                                <Text style={{ color: 'white', marginTop: 2, marginLeft: 2 }}>How can we nourish your taste buds today?</Text>
                            </View>
                            <View style={styles.imgContainer}>
                                <Image source={require('../assets/dp.jpeg')} style={styles.img} />
                            </View>
                        </View>
                    </Card>
                    {/* Input */}
                    <View style={{ marginTop: 10, flexDirection: 'row', marginStart: 8 }}>
                        <View style={styles.inputContainer} >
                            <Ionicons name="search" size={29} color='silver' style={{ marginStart: 2 }} />
                            <TextInput style={{ padding: 12, width: 230, fontSize: 18, flex: 1, marginStart: 2 }} placeholder='search food...' />
                        </View>
                    </View>
                    {/* categories */}
                    <View style={{ marginBottom: 8, marginTop: 5, marginLeft: 3 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
                            {
                                categories.map((category, index) => (
                                    <TouchableOpacity key={index} activeOpacity={0.6}>
                                        <View style={styles.categoriesContainer}>
                                            <Image source={category.image} style={styles.categoryImg} />
                                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}> {category.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                    {/*Food list */}
                    <View style={{ flex: 1, marginTop: 9 }}>
                        <FoodList navigation={navigation} />
                    </View>
                </View>
            </ImageBackground >
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 55,
        borderRadius: 35,
        marginRight: 10
    },
    categoryImg: {
        height: 35,
        width: 35,
        borderRadius: 59,
        marginRight: 10,
        resizeMode: 'cover'
    },
    inputContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 45,
        width: 250,
        alignItems: 'center',
        borderRadius: 6,
        marginLeft: 5,
        width: 250,

    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'teal',
        borderRadius: 40,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 6,
        width: 120,
        borderWidth: 2,
        borderColor: 'white'
    },
    Salutation: {
        flexDirection: 'row',
        alignContent: 'center',
        padding: 9,
        backgroundColor: 'teal',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    statusBar: {
        backgroundColor: ' rgb(4, 95, 95)',
        paddingBottom: 21,
    },
    subStatusBar: {
        backgroundColor: 'teal',
        height: 45,
    },
    statusBarTxt: {
        textAlign: 'center',
        color: '#eee',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
})