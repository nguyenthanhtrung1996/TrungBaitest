import React from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import style from './controller/style'

function WelcomeScreen({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.titleApp}>
                    Welcome to App
                </Text>
                <Text style={style.titleUs}>
                    Explore Us
                </Text>
            </View>
            <View style={style.image}>
                <Image 
                    source={require('../asssets/Img-welcome.jpg')}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate('LoginPage')}}>
                    <Image 
                        source={require('../asssets/Img-buttonlogin.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={style.buttonSignup}
                    onPress={() => {navigation.navigate('SignupPage')}}
                >
                    <Text style={style.buttonSignupText}>Signup</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

export default WelcomeScreen;