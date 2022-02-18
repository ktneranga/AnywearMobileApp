import React from 'react';
import {View, Text, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';

const Stack = createStackNavigator();

const ShopNavigator = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ProductOverViewScreen"
                    component = {ProductOverViewScreen}
                    options={{ 
                        title: 'All Products',
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                        },
                        headerTitleStyle: {
                            fontFamily: 'open-sans-bold'
                        },
                        headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
                     }}
                />
                <Stack.Screen
                    name='ProductDetailsScreen'
                    component={ProductDetailsScreen}
                    options={{ 
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                        },
                        headerTitleStyle: {
                            fontFamily: 'open-sans-bold'
                        },
                        headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary,
                     }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ShopNavigator;