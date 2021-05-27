import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',  
        paddingVertical: 20
    },
    productList: {
        paddingHorizontal: 20, 
        flex: 1
    },
    titlePage: {
        fontSize: 22, 
        fontWeight:'700', 
        paddingVertical: 0
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 0, 
        flex: 1
    },
    productBox: {
        width: '50%',
        height: '33%', 
        justifyContent: 'space-around',
    },
    imageProduct_Button: {
        alignSelf: 'center',
        width: '80%', 
        height: '75%',
        borderRadius: 5
    },
    imageProduct: {
        width: '100%', 
        height: '100%',
        borderRadius: 5
    },
    margin: {
        marginLeft: 10
    },
})