import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-around'
    },
    categoriesBox: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15
    },
    categoriesTitle: {
        fontSize: 22
    },
    categoriesMore: {
        textAlignVertical: 'center',
        fontSize: 16
    },
    imageBox: {
        marginLeft: 25
    },
    image: {
        marginRight: 20
    },
})