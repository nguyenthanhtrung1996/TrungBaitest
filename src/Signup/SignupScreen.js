import React, { useState } from 'react';
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function SignupScreen({ validateEmail, checkUsers, removeDataCart}) {
    
    const windowWidth = Dimensions.get('window').width;

    const [ textName, setTextName ] = useState('');
    const [ textEmail, setTextEmail ] = useState('');
    const [ textPassword, setTextPassword ] = useState('');

    const [ showPassword, setShowPassword ] = useState(false);

    const [ checkName, setCheckName ] = useState(true);
    const [ checkEmail, setCheckEmail ] = useState(true);
    const [ checkEmailUsed, setCheckEmailUsed ] = useState(true);
    const [ checkPassword, setCheckPassword ] = useState(true);

    const [ signupSuccess, setSignupSuccess ] = useState(false);

    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
            <Icon 
                style={{opacity: 0.5}}
                name='arrow-back-outline'
                size={24}
                color='black'
                onPress={() => {
                    navigation.navigate('WelcomePage');
                }}
            />
            <Text style={{fontSize: 32, marginVertical: 20}}>Signup</Text>
            <View style={{marginTop: 30}}>
                <Text style={{opacity: 0.5}}>Name</Text>
                <TextInput 
                    style={[{borderBottomWidth: 1, borderBottomColor: '#dadada'},[checkName == false && {borderBottomColor: 'red'}]]}
                    placeholder='Enter Name'
                    onChangeText={(text) => setTextName(text)}
                    value={textName}
                    onBlur={() => {
                        if(textName){
                            setCheckName(true);
                        }
                    }}
                />
            </View>
            <View style={{marginVertical: 30}}>
                <Text style={{opacity: 0.5}}>Email</Text>
                <TextInput 
                    style={[{borderBottomWidth: 1, borderBottomColor: '#dadada'},[checkEmail == false || checkEmailUsed == false && {borderBottomColor: 'red'}]]}
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
                <Text style={{opacity: 0.5}}>Password</Text>
                <View style={{position:'relative'}}>
                    <TextInput 
                        style={[{borderBottomWidth: 1, borderBottomColor: '#dadada'},[checkPassword == false && {borderBottomColor: 'red'}]]}
                        placeholder='Enter Password'
                        autoCompleteType='password'
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => setTextPassword(text)}
                        value={textPassword}
                        onBlur={() => {
                            if(textPassword){
                                setCheckPassword(true);
                            }
                        }}
                    />
                    <Icon 
                        style={{position:'absolute', top: '30%', right: 0, opacity: 0.5}}
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
                    <Text style={{textAlign: 'center', color: 'red'}}>* Error: Name is empty</Text>
                }
            </View>
            <View>
                {
                    checkEmail == false && 
                    <Text style={{textAlign: 'center', color: 'red'}}>* Error: Email is empty</Text>
                }
            </View>
            <View>
                {
                    checkEmailUsed == false && 
                    <Text style={{textAlign: 'center', color: 'red'}}>* Error: Email is taken. Try another</Text>
                }
            </View>
            <View>
                {
                    checkPassword == false && 
                    <Text style={{textAlign: 'center', color: 'red'}}>* Error: Password is empty</Text>
                }
            </View>
            <View>
                {
                    signupSuccess == true && 
                    <Text style={{textAlign: 'center', color: 'green'}}>* Signup success.</Text>
                }
            </View>
            <TouchableOpacity 
                style={{alignSelf: 'center', marginBottom: 20, marginTop: 40}}
                onPress={() => {
                    checkUsers(textName,textEmail, textPassword);
                }}
            >
                <Image 
                    style={{width: windowWidth*0.8}}
                    source={require('../asssets/Image-buttonsignup.png')}
                />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                onPress={() => removeDataCart()}>
                    <Text style={{opacity: 0.5}}>
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
    );
}

export default SignupScreen;