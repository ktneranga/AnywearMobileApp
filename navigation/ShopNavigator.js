import React from 'react';
import {View, Text, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/shop/UI/HeaderButton';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ShopNavigator = (props) => {
    return( 
        <Stack.Navigator>
            <Stack.Screen
                name="ProductOverViewScreen"
                component = {ProductOverViewScreen}
                options={{ 
                    headerLeft: () => {
                        return(
                            <HeaderButtons
                                HeaderButtonComponent={HeaderButton}
                            >
                                <Item
                                    name='menu'
                                    iconName='ios-menu'
                                    onPress={()=>{props.navigation.toggleDrawer();}}
                                />
                            </HeaderButtons>
                        )
                    },
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
            <Stack.Screen
                name='CartScreen'
                component={CartScreen}
                options={{ 
                    title: 'Cart',
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
    );
}

const OrderNavigator = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='OrdersScreen'
                component={OrdersScreen}
                options={{
                    title: 'Orders',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                    },
                    headerTitleStyle: {
                        fontFamily: 'open-sans-bold'
                    },
                    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary,
                    headerLeft: ()=> {
                        return(
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                name='menu'
                                iconName='ios-menu'
                                onPress={()=>{props.navigation.toggleDrawer();}}
                            />
                        </HeaderButtons>
                        );
                    }
                 }}
            />
        </Stack.Navigator>
    );
}

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Shop'>
                <Drawer.Screen
                    name='Shop'
                    component={ShopNavigator}
                    options={{ 
                        activeTintColor: Colors.accent
                     }}
                />
                <Drawer.Screen
                    name='Orders'
                    component={OrderNavigator}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;