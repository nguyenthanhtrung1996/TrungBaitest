import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { CheckUsers, PostUsers } from '../../actions/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from './SignupScreen';
import style from './controller/style'

function SignupPage({ navigation }){
    const windowWidth = Dimensions.get('window').width;

    const [ dataUsers, setDataUsers ] = useState([]);

    useEffect(() => {
        getDataUser();
        return () => {
        }
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

    const [ textName, setTextName ] = useState('');
    const [ textEmail, setTextEmail ] = useState('');
    const [ textPassword, setTextPassword ] = useState('');

    const [ showPassword, setShowPassword ] = useState(false);

    const [ checkName, setCheckName ] = useState(true);
    const [ checkEmail, setCheckEmail ] = useState(true);
    const [ checkEmailUsed, setCheckEmailUsed ] = useState(true);
    const [ checkPassword, setCheckPassword ] = useState(true);

    const [ signupSuccess, setSignupSuccess ] = useState(false);

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
    };

    const checkUsers = (name ,email, password) => {
        setSignupSuccess(false);
        if(name == '' || email == '' || password == ''){
            if(name == '') setCheckName(false);
            if(email == '') setCheckEmail(false);
            if(password == '') setCheckPassword(false);
            return;
        }
        let termCheck = true;
        dataUsers.forEach(user => {
            if(user.email == email){
                termCheck = false;
            }
        });
        if( termCheck ){
            clearDataInput();
            const objUser = { name, email, password };
            const newDataUser = [...dataUsers];
            newDataUser.push(objUser);
            console.log(newDataUser);
            setDataUsers(newDataUser);
            setAsyncStorage(newDataUser);
            Alert.alert('Signup Success', `Name: ${name}, Email: ${email}, Password: ${password}`)
        } else {
            setCheckEmailUsed(false);
        }
    }

    const clearDataInput = () => {
        setCheckEmailUsed(true);
        setSignupSuccess(true);
        setTextName('');
        setTextEmail('');
        setTextPassword('');
    }
    const setAsyncStorage = async (dataUsers) => {
        try {
            await AsyncStorage.setItem(
              'DataUsers',
              JSON.stringify(dataUsers)
            );
          } catch (error) {
              console.log(error);
          }
    };

    const removeDataCart = async () => {
        try {
            await AsyncStorage.removeItem('DataUsers');
        } catch (error) {
            console.log(error);
        }
    };

    
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
            <Text style={style.titlePage}>Signup</Text>
            <View style={style.inputNameBox}>
                <Text style={style.opacity}>Name</Text>
                <TextInput 
                    style={[style.inputText,[checkName == false && {borderBottomColor: 'red'}]]}
                    placeholder='Enter Name'
                    onChangeText={(text) => setTextName(text)}
                    value={textName}
                    onBlur={() => {
                        if(textName){
                            setCheckName(true);
                        } else {
                            setCheckName(false);
                        }
                    }}
                />
            </View>
            <View style={style.inputEmailBox}>
                <Text style={style.opacity}>Email</Text>
                <TextInput 
                    style={[style.inputText,[checkEmail == false  && {borderBottomColor: 'red'}], [checkEmailUsed == false  && {borderBottomColor: 'red'}]]}
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
                <View style={style.inputPasswordBox}>
                    <TextInput 
                        style={[style.inputText,[checkPassword == false && {borderBottomColor: 'red'}]]}
                        placeholder='Enter Password'
                        autoCompleteType='password'
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => setTextPassword(text)}
                        value={textPassword}
                        onBlur={() => {
                            if(textPassword){
                                setCheckPassword(true);
                            } else {
                                setCheckPassword(false);
                            }
                        }}
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
                    checkName == false && 
                    <Text style={style.error}>* Error: Name is empty</Text>
                }
            </View>
            <View>
                {
                    checkEmail == false && 
                    <Text style={style.error}>* Error: Email is empty</Text>
                }
            </View>
            <View>
                {
                    checkEmailUsed == false && 
                    <Text style={style.error}>* Error: Email is taken. Try another</Text>
                }
            </View>
            <View>
                {
                    checkPassword == false && 
                    <Text style={style.error}>* Error: Password is empty</Text>
                }
            </View>
            <View>
                {
                    signupSuccess == true && 
                    <Text style={{textAlign: 'center', color: 'green'}}>* Signup success.</Text>
                }
            </View>
            <TouchableOpacity 
                style={style.buttonSignup}
                onPress={() => {
                    checkUsers(textName,textEmail, textPassword);
                }}
            >
                <Image 
                    style={{width: windowWidth*0.8}}
                    source={require('../asssets/Image-buttonsignup.png')}
                />
            </TouchableOpacity>
            <View style={style.reminder}>
                <TouchableOpacity 
                onPress={() => removeDataCart()}>
                    <Text style={style.opacity}>
                        Already have an account ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LoginPage');
                }}>
                    <Text>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupPage;