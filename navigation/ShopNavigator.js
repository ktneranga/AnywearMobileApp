import React from 'react';
import {View, Text, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';

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
                        headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
                     }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ShopNavigator;