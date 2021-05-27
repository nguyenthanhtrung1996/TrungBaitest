import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5
    },
    titleBox: {
        paddingHorizontal: 25,
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    titleMain: {
        fontSize: 18, 
        fontWeight: '700'
    },
    productList: {
        flex: 1,
        paddingLeft: 25,
        marginTop: 5
    },
    productBox: {
        flex: 1, 
        marginRight: 20, 
        justifyContent: 'space-between'
    },
})