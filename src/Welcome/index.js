import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SetUsers } from '../../actions/users';
import WelcomeScreen from './WelcomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';

function WelcomePage({ navigation }) {
    

    return (
        <View style={{flex: 1}}>
            <WelcomeScreen navigation={navigation}/>
        </View>
    );
}

export default WelcomePage;