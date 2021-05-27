import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, ActivityIndicator } from 'react-native';
import Categories from '../Categories/index';
import Elevations from 'react-native-elevation'
import Product from '../Product';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { SetProduct } from '../../actions/product'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SetCart } from '../../actions/cart';
import style from './controller/style';
import { Badge } from 'react-native-elements';

function CategoryPage({ navigation, route }) {
    const [text, setText] = useState('');

    const products = useSelector(state => state.product);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const email = route.params.textEmail;
    

    useEffect(async () => {
        await axios.get('https://60acae749e2d6b0017457aeb.mockapi.io/products')
            .then( res => {
                dispatch(SetProduct(res.data[0].products));
            })
            .catch( error => {
                    console.error(error);
        });
    }, []);


    useEffect(() => {
        getDataCart(email);
    }, [])

    useEffect(() => {
        setAsyncStorage(email, cart);
    },[cart]);
    

    const getDataCart = async (email) => {
        try {
            const jsonValue = await AsyncStorage.getItem(email);
            if(jsonValue !== null){
                dispatch(SetCart(JSON.parse(jsonValue)))
            } else {
                dispatch(SetCart([]));
            }
        } catch(error) {
            console.log(error);
        }
      };

    const setAsyncStorage = async (email, cart) => {
        try {
            await AsyncStorage.setItem(
                email,
              JSON.stringify(cart),
              () => {
                  AsyncStorage.mergeItem(
                    email,
                  JSON.stringify(cart),
                  );
              }
            );
          } catch (error) {
              console.log(error);
          }
    };

    const getQuantity = (cart) => {
        let amount = 0;
        if(cart.length != 0 ){
            amount = cart.reduce((quantity, product) => {
                return quantity += product.quantity
            }, 0);
        }
        return amount;
    }


    return (
        
        <View style={style.container}>
            {
                Object.values(products).length == 0 ?
                <ActivityIndicator size="large" color="#0000ff"/>
                :
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={style.iconBox}>
                            <Icon 
                                style={style.iconLogout}
                                name='log-out-outline' 
                                size={24} 
                                color='black'
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                            <View style={style.iconBoxRight}>
                                <Icon 
                                    style={style.iconCart}
                                    name='cart-outline' 
                                    size={24} 
                                    color='black'
                                    onPress={() => {
                                        navigation.navigate('Cart');
                                    }}
                                />
                                <Badge value={getQuantity(cart)} status="error"  containerStyle={{position: 'absolute', top: -4, left: 13 }}/>
                                <Icon 
                                    name='funnel-outline' 
                                    size={24} 
                                    color='black'
                                />
                            </View>
                        </View>
                        <View style={style.inputSearchBox}>
                            <View style={style.inputSearch}
                            >
                                <Image  
                                    style={style.iconSearch}
                                    source={require('../asssets/Welcomepage/Image-search.png')}
                                />
                                <TextInput 
                                    style={style.input}
                                    placeholder="Search Your Product"
                                    onChangeText={(searchString) => {setText(searchString)}}
                                    value={text}
                                />
                            </View>
                        </View>
                    </View>
                    
                    <View style={style.categoriesBox}>
                        <Categories />
                    </View>
                    <View style={style.productBox}>
                        <Product productList={products.Featured} navigation={navigation}/> 
                    </View>
                    <View style={style.productBox}>
                        <Product productList={products.Sell} navigation={navigation}/> 
                    </View>
                </View>
            }
        </View>
    );
}

export default CategoryPage;