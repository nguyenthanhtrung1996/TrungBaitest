import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './controller/style';
import ProductListItem from './ProductListItem';

function Product({ productList, navigation }){
    
//  console.log('Product: ', productList);
    return(
        <View style={style.container}>
            <View style={style.titleBox}>
                <Text style={style.titleMain}>
                    {productList.title}
                </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SeeAll', { productList })
                }}>
                    <Text>
                        See all
                    </Text>
                </TouchableOpacity>
                
            </View>
            <View style={style.productList}>
                <ProductListItem navigation={navigation} productList={productList.productList}/>
            </View>
        </View>
    )
}
export default Product;