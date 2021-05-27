import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import style from './controller/style';

function Categories(props){
    return(
        <View style={style.container}>
            <View style={style.categoriesBox}>
                <Text style={style.categoriesTitle}>
                    Categories
                </Text>
                <Text style={style.categoriesMore}>
                    See all
                </Text>
            </View>
            
            <View style={style.imageBox}>
            
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {/* <View style={[{width: 100, height: 300,backgroundColor: 'red'}, Elevations[16]]}></View> */}
                        {/* <ImageBackground source={require('../asssets/Categories/Image-woman.png')} style={{flex: 1}}>
                        </ImageBackground> */} 
                    <Image  
                        style={style.image}
                        source={require('../asssets/Categories/Image-woman.png')}
                    />
                    <Image  
                        style={style.image}
                        source={require('../asssets/Categories/Image-man.png')}
                    />
                    <Image  
                        style={style.image}
                        source={require('../asssets/Categories/Image-kid.png')}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default Categories;