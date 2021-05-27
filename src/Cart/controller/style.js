import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        paddingTop: 20, 
        position: 'relative'
    },
    cartBox: {
        flex: 1, 
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24, 
        marginVertical: 20
    },
    productBox: {
        paddingHorizontal: 20,
        alignItems: 'center',
        
        flexDirection: 'row', 
        position:'relative', 
        borderWidth: 1, 
        borderColor: '#e3e3e3',
        marginBottom: 20
    },

    imageProduct: {
        height: '70%', 
        width: '30%', 
        marginRight: 20
    },
    nameproduct: {
        fontSize: 18
    },
    price: {
        fontSize: 18, 
        color: '#667eea'
    },
    buttonChangeQuantity: {
        backgroundColor: '#f6f6f6',
        paddingHorizontal:15, 
        paddingVertical: 5
    },
    buttonText: {
        fontSize: 20
    },
    quantity: {
        backgroundColor: '#f6f6f6',
        textAlignVertical: 'center',
        paddingHorizontal:15, 
        paddingVertical: 5
    },
    buttonRemoveProduct: {
        position: 'absolute', 
        top: 5, 
        right: 5
    },
})