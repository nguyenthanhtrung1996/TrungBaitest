import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AddProduct } from '../../actions/cart';
import NavBar from '../NavBar/index'
import style from './controller/style';

function InfoProduct({ navigation, route }){
    

    const product = route.params.product;

    const dispatch = useDispatch();

    const [ size, setSize ] = useState('S');

    console.log('InfoProduct: ', product);
    
    return(
        <View style={style.container}>
            <NavBar navigation={navigation}/>
            <View style={{flex: 1}}>
                <View style={style.imageBox}>
                    <Image 
                        style={style.image}
                        source={{uri: product.url}}
                    />
                    <Text style={style.nameproduct}>{product.nameproduct}</Text>
                    <Text style={style.price}>$ {product.price}</Text>
                </View>
                <View style={style.assess}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={style.rate}>4.5</Text>
                        <Text style={style.rateText}>Very Good</Text>
                    </View>
                    <Text style={style.review}>49 Reviews</Text>
                </View>
                <View style={style.decriptionBox}>
                    <Text style={style.decriptionTitle}>Decription</Text>
                    <Text style={style.decriptionContent}>A wonderful secrenity has tanken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the blise of souls like mine.</Text>
                </View>
                <View style={style.sizeBox}>
                    <Text style={style.selectSize}>Select Size </Text>
                    <Text style={style.selectColor}>Select Color</Text>
                </View>
                <View style={style.buttonSizeBox}>
                    <TouchableOpacity
                        style={size == 'S' ? style.buttonSizeActive: style.buttonSize}
                        onPress={()=>setSize('S')}
                    >
                        <Text 
                            style={size == 'S' ? style.buttonSizeActiveText : style.buttonSizeText}
                        >
                            S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={size == 'M' ? style.buttonSizeActive: style.buttonSize}
                        onPress={()=>setSize('M')}
                    >
                        <Text 
                            style={size == 'M' ? style.buttonSizeActiveText : style.buttonSizeText}
                        >
                            M
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={size == 'L' ? style.buttonSizeActive: style.buttonSize}
                        onPress={()=>setSize('L')}
                    >
                        <Text 
                            style={size == 'L' ? style.buttonSizeActiveText : style.buttonSizeText}
                        >
                            L
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.buttonAdd}>
                <TouchableOpacity 
                    style={style.buttonBox}
                    onPress={() => {
                        dispatch(AddProduct(product));
                        navigation.goBack();
                        Alert.alert(`Notification`,`Add ${product.nameproduct} success`);
                    }}
                >
                    <Image 
                        style={style.imageButton}
                        source={require('../asssets/InfoProduct/Image-buttonadd.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonBox}>
                    <Image 
                        style={style.imageButton}
                        source={require('../asssets/InfoProduct/Image-buttonbuy.jpg')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InfoProduct;