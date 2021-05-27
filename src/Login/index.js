import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import style from './controller/style';

function LoginPage({ navigation }){
    const windowWidth = Dimensions.get('window').width;

    const [ dataUsers, setDataUsers ] = useState([]);
    
    useEffect(() => {
        getDataUser();
    }, [])

    const getDataUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('DataUsers')
            if(jsonValue !== null){
                setDataUsers(JSON.parse(jsonValue));
                console.log('DataUser json', JSON.parse(jsonValue));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const [ textEmail, setTextEmail ] = useState('');
    const [ textPassword, setTextPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);

    const [ checkPassword, setCheckPassword ] = useState(true);
    const [ checkEmail, setCheckEmail ] = useState(true);

    const [ signinSuccess, setSigninSuccess ] = useState(true);

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
    };

    const checkUsers = (email, password) => {
        if(email == '' || password == ''){
            if(email == '') setCheckEmail(false);
            if(password == '') setCheckPassword(false);
            return;
        }
        let termCheck = false;
        dataUsers.forEach(user => {
            if(user.email == email && user.password == password){
                termCheck = true;
            }
        });
        if( termCheck ){
            navigation.navigate('CategoryPage', { textEmail });
            console.log(true);
        } else {
            setSigninSuccess(false);
            console.log(false);
        }
    }

    return(
        <View style={style.container}>
            <Icon 
                style={style.opacity}
                name='arrow-back-outline'
                size={24}
                color='black'
                onPress={() => {
                    navigation.navigate('WelcomePage');
                }}
            />
            <Text style={style.titlePage}>Login</Text>
            <View style={style.inputEmailBox}>
                <Text style={style.opacity}>Email</Text>
                <TextInput 
                    style={[style.inputText,[checkEmail == false && {borderBottomColor: 'red'}]]}
                    placeholder='Enter Email'
                    autoCompleteType='email'
                    onChangeText={(text) => setTextEmail(text)}
                    onBlur={() => {
                        if(validateEmail(textEmail)) {
                            setCheckEmail(true);
                        } else {
                            setCheckEmail(false);
                        }
                    }}
                    value={textEmail}
                />
            </View>
            <View>
                <Text style={style.opacity}>Password</Text>
                <View style={{position:'relative'}}>
                    <TextInput 
                        style={[style.inputText,[checkPassword == false && {borderBottomColor: 'red'}]]}
                        placeholder='Enter Password'
                        autoCompleteType='password'
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => setTextPassword(text)}
                        onBlur={()=>{
                            if(textPassword == ''){
                                setCheckPassword(false);
                            } else{
                                setCheckPassword(true);
                            }
                        }}
                        value={textPassword}
                    />
                    <Icon 
                        style={style.iconHideShow}
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={24}
                        color= 'black'
                        onPress={() => setShowPassword(!showPassword)}
                    />
                </View>
            </View>
            <View>
                {
                    checkEmail == false && 
                    <Text style={style.error}>* Error Email</Text>
                }
            </View>
            <View>
                {
                    checkPassword == false && 
                    <Text style={style.error}>* Error Password</Text>
                }
            </View>
            <View>
                {
                    signinSuccess == false && 
                    <Text style={style.error}>* Error: Couldn't find your Account or Wrong Password.</Text>
                }
            </View>
            <TouchableOpacity 
                style={style.buttonLogin}
                onPress={() => {
                    checkUsers(textEmail,textPassword);
                }}
            >
                <Image 
                    style={{width: windowWidth*0.8}}
                    source={require('../asssets/Img-buttonlogin.png')}
                />
            </TouchableOpacity>
            <View style={style.reminder}>
                <Text style={style.opacity}>
                    Don't have an account ?
                </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignupPage');
                }}>
                    <Text>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage;