import React, { useState } from 'react';
import { Image, ScrollView, Text, View, Dimensions, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseProduct, IncreaseProduct, RemoveProduct } from '../../actions/cart';
import NavBar from '../NavBar';
import style from './controller/style';

function Cart({ navigation }){

    const windowWidth = Dimensions.get('window').width;


    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(cart);

    return (
        <View style={style.container}>
            <NavBar navigation={navigation} CartPage={true}/>
            <View style={style.cartBox}>
                <Text style={style.title}>Cart</Text>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                {
                    cart.map((product, index) => {
                        return(
                            <View 
                                style={[style.productBox , [{height: windowWidth*0.35}]] }
                                key={index}
                            >
                                <Image
                                    style={style.imageProduct}
                                    source={{uri: product.url}}
                                />
                                <View>
                                    <Text style={style.nameproduct}>{product.nameproduct}</Text>
                                    <Text style={style.price}>$ {product.price}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <TouchableOpacity 
                                            style={style.buttonChangeQuantity}
                                            onPress={() => {
                                                dispatch(DecreaseProduct(index));
                                                Alert.alert(`Notification`, `Decrease ${product.nameproduct} success`);
                                            }}
                                        >
                                            <Text style={style.buttonText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={style.quantity}>{product.quantity}</Text>
                                        <TouchableOpacity 
                                            style={style.buttonChangeQuantity}
                                            onPress={() => {
                                                dispatch(IncreaseProduct(index));
                                                Alert.alert(`Notification`, `Increase ${product.nameproduct} success`);
                                            }}
                                        >
                                            <Text style={style.buttonText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Icon 
                                    style={style.buttonRemoveProduct}
                                    name="close-outline"
                                    size={24}
                                    color='#999999'
                                    onPress={() => {
                                        dispatch(RemoveProduct(index));
                                        Alert.alert(`Notification`,`Remove ${product.nameproduct} success`);
                                    }}
                                />
                            </View>
                        )
                    })
                }
                </ScrollView>
            </View>
            
        </View>
    )
}

export default Cart;