import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingVertical: 40, 
        backgroundColor: 'white'
    },
    header: {
        alignItems: 'center'
    },
    titleApp:{
        fontSize: 22, 
        fontWeight: '700', 
        opacity: 0.5
    },
    titleUs: {
        fontSize: 20, 
        opacity: 0.5, 
        lineHeight: 40
    },
    image: {
        marginTop: 50
    },
    buttonSignup: {
        marginTop: 10, 
        borderRadius: 5,
        alignItems: 'center', 
        paddingVertical: 10
    },
    buttonSignupText: {
        fontSize: 16
    },
})