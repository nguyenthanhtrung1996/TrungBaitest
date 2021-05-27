import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import style from './controller/style'

const ProductListItem = ({  navigation, productList }) => {
    const windowWidth = Dimensions.get("window").width;
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                productList.map( (product, index)  => {
                    return(
                        <View 
                          style={style.productBox}
                          key={index}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.push('InfoProduct', { product });
                             }}
                            >
                                <Image 
                                    style={{width: windowWidth*0.35, height: windowWidth*0.38,borderRadius: 5}}
                                    source={{uri: product.url}}
                                />
                            </TouchableOpacity>
                            <Text>$ {product.price}</Text>
                            <Text>{product.nameproduct}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default ProductListItem;