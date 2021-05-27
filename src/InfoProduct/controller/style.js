import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between',
        backgroundColor: 'white', 
        paddingTop: 20
    },
    imageBox: {
        flex: 0.42, 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#e2e2e2', 
        justifyContent: 'space-evenly'
    },
    image: {
        width: '100%', 
        height: '60%', 
        resizeMode: 'contain'
    },
    nameproduct: {
        fontSize: 22
    },
    price: {
        fontSize: 20, 
        color: '#667eea'
    },
    assess: {
        flex: 0.1, 
        paddingHorizontal: 20, 
        borderBottomWidth: 1, 
        borderBottomColor: '#e2e2e2', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    rate: {
        color: 'white', 
        backgroundColor: '#667eea', 
        marginRight: 10, 
        paddingHorizontal: 15, 
        paddingVertical: 5, 
        borderRadius: 5,
        fontSize: 18
    },
    rateText: {
        fontSize: 18, 
        textAlignVertical: 'center'
    },
    review: {
        color: '#667eea',
        fontSize: 18, 
        fontWeight: '700'
    },
    decriptionBox: {
        flex: 0.28, 
        paddingHorizontal: 20, 
        borderBottomWidth: 1, 
        borderBottomColor: '#e2e2e2',
        backgroundColor: 'lightblue',
        backgroundColor: 'white', 
        justifyContent: 'space-evenly'
    },
    decriptionTitle: {
        fontSize: 20
    },
    decriptionContent: {
        fontSize: 16, 
        opacity: 0.5,
        paddingHorizontal: 5
    },
    sizeBox: {
        flex: 0.1, 
        borderBottomWidth: 1, 
        borderBottomColor: '#e2e2e2',
        backgroundColor: 'lightblue',
        backgroundColor: 'white', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    selectSize: {
        fontSize: 20, 
        fontWeight: '700'
    },
    selectColor: {
        fontSize: 20
    },
    buttonSizeBox: {
        flex: 0.15,
        backgroundColor: 'white', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonSize: {
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        backgroundColor: '#f3f3f3', 
        borderRadius: 5, 
        marginRight: 15
    },
    buttonSizeActive: {
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        backgroundColor: '#667eea', 
        borderRadius: 5, 
        color: 'white', 
        marginRight: 15, 
        elevation: 5
    },
    buttonSizeActiveText: {
        fontSize: 18, 
        color: 'white'
    },
    buttonSizeText: {
        fontSize: 18,
        color: 'black',
    },
    buttonAdd: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    buttonBox: {
        width: '50%'
    },
    imageButton: {
        width: '100%'
    },
})