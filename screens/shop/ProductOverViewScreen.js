import React, {useLayoutEffect} from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart'

import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/shop/UI/HeaderButton';

const ProductOverViewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts);

    const dispatch = useDispatch();

    const renderItem = (itemData) => {
        return (
            <ProductItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onViewDetail={()=>{props.navigation.navigate('ProductDetailsScreen',{
                    productId: itemData.item.pid
                })}}
                onAddToCart={()=>{dispatch(cartActions.addToCart(itemData.item))}}
            />
        )
    }  
    
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerTitle: 'All Products',
            headerRight: ()=>(
                <HeaderButtons
                    HeaderButtonComponent={CustomHeaderButton}
                >
                    <Item
                        title='cart'
                        iconName='ios-cart'
                        onPress={()=>{props.navigation.navigate('CartScreen')}}
                    />
                </HeaderButtons>
            )
        });
    },[props.navigation]);

    return (
        <View style={styles.screen}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item=>item.pid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default ProductOverViewScreen;