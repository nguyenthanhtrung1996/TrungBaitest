import React from 'react';
import { View } from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import style from './controller/style';


function NavBar({ navigation, CartPage }){
    const cart = useSelector(state => state.cart);

    const getQuantity = (cart) => {
        let amount = 0;
        if(cart.length != 0 ){
            amount = cart.reduce((quantity, product) => {
                return quantity += product.quantity
            }, 0);
        }
        return amount;
    }


    return(
        <View style={style.container}>
            <Icon 
                name='arrow-back-outline'
                size={24}
                color='black'
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <View style={style.iconRight}>
                    {
                        CartPage == undefined &&
                        <View style={{position: 'relative'}}>
                            <Icon 
                                style={style.margin}
                                name='cart-outline' 
                                size={24} 
                                color='black'
                                onPress={() => {
                                    navigation.navigate('Cart');
                                }}
                            />
                            <Badge value={getQuantity(cart)} status="error"  containerStyle={{position: 'absolute', top: -4, right: 13 }}/>
                        </View>
                    }
                    
                    <Icon 
                        name='funnel-outline' 
                        size={24} 
                        color='black'
                    />
            </View>

        </View>
    )
}

export default NavBar;