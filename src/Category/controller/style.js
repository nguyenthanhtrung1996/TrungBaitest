import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',  
        paddingVertical: 20
    },
    iconBox: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 25
    },
    iconLogout: {
        transform: [
        { rotate: "180deg" },
        ]
    },
    iconBoxRight: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'relative'
    },
    iconCart: {
        marginRight: 20
    },
    inputSearchBox: {
        paddingHorizontal: 15,
        marginTop: 10
    },
    inputSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 70
    },
    iconSearch: {
        marginHorizontal: 15
    },
    input: {
        paddingVertical: 5, 
        fontSize: 20
    },
    categoriesBox: {
        flex: 1.7, 
        paddingLeft: 15
    },
    productBox: {
        flex: 3
    },
})