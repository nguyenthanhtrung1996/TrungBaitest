import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        padding: 20
    },
    opacity: {
        opacity: 0.5
    },
    titlePage: {
        fontSize: 32, 
        marginVertical: 20
    },
    inputNameBox: {
        marginTop: 30
    },
    inputText: {
        borderBottomWidth: 1, 
        borderBottomColor: '#dadada'
    },
    inputEmailBox: {
        marginVertical: 30
    },
    inputPasswordBox: {
        position:'relative'
    },
    iconHideShow: {
        position:'absolute', 
        top: '30%', 
        right: 0, 
        opacity: 0.5
    },
    error: {
        textAlign: 'center', 
        color: 'red'
    },
    buttonLogin: {
        alignSelf: 'center', 
        marginBottom: 20, 
        marginTop: 40
    },
    reminder: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
})