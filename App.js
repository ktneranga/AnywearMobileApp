import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import productReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart';
import OrdersReducer from './store/reducers/orders';
import MainNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: OrdersReducer
});

const store = createStore(rootReducer);

//fetch fonts

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {

const [fontLoaded, setFontLoaded] = useState(false); 

  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={(err)=>console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
        <MainNavigator/>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
