import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart'

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