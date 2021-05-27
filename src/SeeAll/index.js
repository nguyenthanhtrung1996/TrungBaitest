import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import NavBar from '../NavBar';
import style from './controller/style'


function SeeAll({ navigation, route }){

    const products = route.params.productList;

    return(
        <View style={style.container}>
            <NavBar navigation={navigation}/>
            <View style={style.productList}>
                <Text style={style.titlePage}>{products.title}</Text>
                <View  style={style.content}>
                    {
                        products.productList.map((product) => {
                            return(
                                <View style={style.productBox}>
                                    <TouchableOpacity
                                        style={style.imageProduct_Button}
                                        onPress={() => {
                                            navigation.push('InfoProduct', { product });
                                        }}
                                    >
                                        <Image 
                                            style={style.imageProduct}
                                            source={{uri: product.url}}
                                        />
                                    </TouchableOpacity>
                                    <Text style={style.margin}>$ {product.price}</Text>
                                    <Text style={style.margin}>{product.nameproduct}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default SeeAll;