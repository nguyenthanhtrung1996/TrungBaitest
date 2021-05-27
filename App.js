
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import Cart from './src/Cart';
import CategoryPage from './src/Category';
import InfoProduct from './src/InfoProduct';
import WelcomePage from './src/Welcome/index';
import store from './store';
import LoginPage from './src/Login/index'
import SignupPage from './src/Signup/index'
import SeeAll from './src/SeeAll';

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="WelcomePage"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignupPage" component={SignupPage} />
            <Stack.Screen name="CategoryPage" component={CategoryPage} />
            <Stack.Screen name="SeeAll" component={SeeAll} />
            <Stack.Screen name="InfoProduct" component={InfoProduct} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
