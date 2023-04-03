import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(233, 222, 222)',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17,
        marginTop: 5,
    },
    statusBar: {
        backgroundColor: 'orange',
        paddingBottom:21,
    },
    subStatusBar:{
        backgroundColor: 'orange',
        height:45
    },
    statusBarTxt:{
        textAlign:'center',
        color:'#eee',
        fontSize:20,
        marginTop:10,
        fontWeight:'bold'
    },
    headerContainer: {
        padding: 10,
        backgroundColor: 'teal',

    }, 
    input:{
        borderWidth: 1,
        borderColor: 'grey',
        margin:2,
        padding: 13,
        width: 250,
        borderRadius:6
    },
    error:{
        color:'crimson',
        marginLeft:14,
        paddingHorizontal:4,
        fontWeight:'bold',
        marginVertical:7,
    }
});

